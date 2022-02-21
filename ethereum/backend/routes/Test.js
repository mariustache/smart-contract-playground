const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('On Test page')
})

router.get('/tryme', (req, res) => {
    res.send("On Test/tryme page")
})

module.exports = router