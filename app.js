const express = require('express');
const app = express();
const cors = require('cors');
const rotas = require('./routes/router')

const port = process.env.PORT ||3000;

const appInfo = require('./database/bd_info')

app.use(cors());
app.use(express.static(__dirname +'/public'))
app.use('/', rotas)
app.set('views engine', 'ejs');




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

app.listen(port, "0.0.0.0", ()=>{
    console.log(`Api ouvindo na porta ${port}`)
})