'use strict';
// Cargamos el modulo de Express
const express = require('express');
// Creamos un objeto servidor HTTP
const server = express();
// Definimos el puerto a usar por el servidor HTTP
const port = 8080;
// Configuramos la ruta / en el servidor HTTP para que devuelva un saludo
server.get('/', (req, res) => {
 res.send('Hello World!')
 });
// Poner en marcha el servidor
server.listen(port, () => {
 console.log('Servidor corriendo en el puerto $(port)');
 });