const express = require('express')
const app = express()
const db = require('./config/db.js');
const consign = require('consign');

consign()
    .then('./config/middlewares.js')
    .into(app)

app.db = db

app.get('', (req, res) => {
    res.status(200).send('hello world!')
})

app.listen(3000, () => {
    console.log('starting')
})