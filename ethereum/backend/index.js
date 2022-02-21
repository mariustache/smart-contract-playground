const express = require('express')
const app = express()
const test = require('./routes/Test')

const DEFAULT_PORT = 3000;

app.use('/test', test)

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.listen(DEFAULT_PORT, () => {
    console.log(`listening at localhost:${DEFAULT_PORT}`)
});