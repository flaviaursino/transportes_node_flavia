var express = require('express');
var router = express.Router();
var novedadesModel = require('../models/novedadesModel');

router.get('/', async function(req,res,next){

    var novedades = await novedadesModel.getNovedades();

    res.render('novedades',{
        isNovedades:true,
        novedades // tengo los registros para poder imprimirlos en el hbs
    }); 
})


module.exports = router;