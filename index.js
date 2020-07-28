const express = require('express');
const jwt = require('jsonwebtoken');

const CONSTANTS = require('./constants');

const informacion = { nombre : "Lucas" };
const firma = "mi_password";
const token = jwt.sign(informacion, firma);

console.log(token);

const app = express();

app.post('/', (req, res) => {
    const {
        nombre
    } = req.body
})


app.listen(CONSTANTS.PORT);
