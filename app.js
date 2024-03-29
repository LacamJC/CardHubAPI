const express = require('express');
const app = express();
const cors = require('cors');
const rotas = require('./routes/router');

const port = process.env.PORT ||3000;

const appInfo = require('./database/bd_info');
const analise = require('./database/bd_analise');

app.use(cors());
app.use(express.static(__dirname +'/public'));
app.use('/', rotas);
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');




app.get('/api', (req,res)=>{
    appInfo.findAll().then(result=>{
        // console.log(result);
        const jsonData = result.map(result => result.get({plain:true}));
        console.log(JSON.stringify(jsonData, null, 2));

        res.send(jsonData);

    })
    .catch(error =>{
        console.error('Erro ao buscar registros', error);
    })
})


app.post('/cadastrarApp', (req,res)=>{
    console.log("Puxando dados para cadastro");

    var app = {
        id : req.body.id,
        url_img : req.body.url_img,
        alt_txt : req.body.alt_txt,
        body_text : req.body.body_text,
        a_link : req.body.a_link,
        site_name : req.body.id
    };

    appInfo.findOne({where : {id : app.id}})
    .then(apps =>{
        if(apps)
        {
            console.log("Aplicação ja existente no banco de dados")
            res.send('<script>history.back()</script>');
        }else{
                analise.create({
                    id : app.id,
                    url_img : app.url_img,
                    alt_txt : app.alt_txt,
                    body_text : app.body_text,
                    a_link : app.a_link,
                    site_name : app.id
                })
                .then(()=>{
                    console.log("App cadastrado com sucesso");
                    res.render('/');
                })
                .catch((err)=>{
                    console.log(`Falha ao enviar dados para cadastro: ${err}`)
                })
            
        }


    })

    console.log(app)


    
})

app.listen(port, "0.0.0.0", ()=>{
    console.log(`Api ouvindo na porta ${port}`)
})