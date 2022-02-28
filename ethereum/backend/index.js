require('dotenv').config()
const express = require('express')
const contracts = require('./routes/contracts')
const logger = require('./util/logger')

const app = express()

app.use('/contracts', contracts)

app.get('/', function (req, res) {
  res.send('Hello World')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    logger.info(`listening at localhost:${PORT}`)
})