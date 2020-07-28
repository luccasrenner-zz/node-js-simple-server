const express = require('express');
const CONSTANTS = require('./constants');

const app = express();

function miPrimeroMiddleware(req, res, next) {
    console.log("Hola :)");
    next();
}

app.use(miPrimeroMiddleware);

app.get('/', miPrimeroMiddleware, (req, res) => {
    res.json({1:1})
})


app.listen(CONSTANTS.PORT);
