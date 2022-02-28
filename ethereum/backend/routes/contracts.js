require('dotenv').config({path:'../.env'})
const Web3 = require('web3')
const logger = require('../util/logger')
const express = require('express')
const router = express.Router()

logger.info(`Using web3 provider: ${process.env.PROVIDER}`)
const web3 = new Web3.providers.HttpProvider(process.env.PROVIDER);

router.get('/', (req, res) => {
    res.send('On Contracts page')
})

router.get('/addresses', (req, res) => {
    const address = req.query.address;
    const abi = req.query.abi;
    const contract = new web3.eth.Contract(abi, address);
    logger.info(`Contract methods: ${contract.methods}`);
    res.send("On Test/tryme page");
})

module.exports = router;