var express = require('express');
var router = express.Router();

const axios=require("axios");
const fs= require("fs");



/* GET para la pagina de proveedores
    Carga el json de internet y desp
. */
router.get('/proveedores', function(req, res, next) {
  fs.readFile('public/proveedores.html', function(err, data) {
    res.write(data);
    return res.end();
  })
});

router.get('/clientes', function(req, res, next) {
  fs.readFile('public/clientes.html', function(err, data) {
      res.write(data);
      return res.end();
  })
  
});


module.exports = router;

