var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    res.render('contacto',{
        isContacto:true
    }); // view/nosotros.hbs
})


module.exports = router;