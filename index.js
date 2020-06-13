//declaración de los modulos a utilizar
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//llamado a carpetas
const config = require('./config');
const api = require(`./api`);


app.use(bodyParser.json());
app.use(`/api`, api)


app.listen(config.port, ()=> {
    console.log(`Servidor iniciado`);
});