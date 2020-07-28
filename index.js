const express = require('express');
const jwt = require('jsonwebtoken');

const CONSTANTS = require('./constants');

const app = express();

app.get('/', (req, res) => {
    
})


app.listen(CONSTANTS.PORT);
