const { Router } = require('express');
const urls = require('../utils/urls');

const postPokemons = Router();

postPokemons.post('/',(req,res)=>{
    res.status(200).send ('Esta ruta crea/postea un pokemon')
  });


module.exports = postPokemons;