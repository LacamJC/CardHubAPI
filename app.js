const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

const appInfo = require('./database/bd_info')

app.use(cors());

app.get('/', (req,res)=>{
    res.send("<h1>Seja bem vindo a minha API !</h1>")
    
})

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

app.listen(port, ()=>{
    console.log(`Api ouvindo na porta ${port}`)
})