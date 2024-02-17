const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.render('../views/index.ejs');
})

router.get('/formulario', (req,res)=>{
    res.render('../views/formulario.ejs');
})

module.exports = router;