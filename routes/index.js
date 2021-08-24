var express = require('express');
var router = express.Router();

const axios=require("axios");
const fs= require("fs");



/* GET para la pagina de proveedores
    Carga el json de internet y desp
. */
router.get('/proveedores', function(req, res, next) {
  axios.get("https://gist.githubusercontent.com/josejbocanegra/d3b26f97573a823a9d0df4ec68fef45f/raw/66440575649e007a9770bcd480badcbbc6a41ba7/proveedores.json",
  {responesType: 'json'})
    .then((res)=> fs.writeFile("proveedores.json", JSON.stringify(res.data,null, 2), ()=>console.log("Escritura Finalizada") ))

  fs.readFile('public/proveedores.html', function(err, data) {
    
    res.write(data);
          return res.end();
  })
  
});

router.get('/clientes', function(req, res, next) {
  axios.get("https://gist.githubusercontent.com/josejbocanegra/986182ce2dd3e6246adcf960f9cda061/raw/f013c156f37c34117c0d4ba9779b15d427fb8dcd/clientes.json",
  {responesType: 'json'})
    .then((res)=> fs.writeFile("clientes.json", JSON.stringify(res.data,null, 2), ()=>console.log("Escritura Finalizada") ))

  fs.readFile('public/clientes.html', function(err, data) {
    
          res.write(data);
          return res.end();
  })
  
});


module.exports = router;

