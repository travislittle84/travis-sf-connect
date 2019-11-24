const router = require('express').Router()
const Accounts = require('../models/account-model')
const generateConnecID = require('uniqid')


router.get('/', (req, res) => {
    res.send('Hello')
})

router.get('/find/all', async (req, res) => {
    try {
        const accounts = await Accounts.find()
        res.status(200).json(accounts)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/find/id/:id', async (req, res) => {
    const { id } = req.params
    try {
        const account = await Accounts.findById(id)
        res.status(200).json(account)
    } catch (error) {
        res.status(500).json(error)
    }

})

router.get('/find/:field/:value', async (req, res) => {
    const { field, value } = req.params
    const filter = {
        field,
        value
    }
    try {
        const account = await Accounts.findBy(filter)
        res.status(200).json(account)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/create', async (req, res) => {
    const data = req.body
    data.merchant_account_id__c = generateConnecID()
    console.log(data)
    try {
        const newAccount = await Accounts.createAccount(data)
        res.status(200).json(newAccount)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router
