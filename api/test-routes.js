const router = require('express').Router()
const TestDB = require('../models/test-model')

const uniqueID = require('uniqid')

router.get('/', (req, res) => {
    res.send('Hello')
})

router.get('/accounts', (req, res) => {
    TestDB.find()
        .then(account => {
            res.status(200).json(account)
        })
        .catch(error => {
            res.status(500).json({
                message: 'DB error',
                error
            })
        })
})

router.get('/accounts/find/id/:id', async (req, res) => {
    const { id } = req.params
    try {
        const account = await TestDB.findById(id)
        res.status(200).json(account)
    } catch(error) {
        res.status(500).json(error)
    }
    
})

router.get('/accounts/find/:field/:value', async (req, res) => {
    const { field, value } = req.params
    const filter = {
        field,
        value
    }
    try {
        const account = await TestDB.findBy(filter)
        res.status(200).json(account)
    } catch(error) {
        res.status(500).json(error)
    }
})

router.post('/account/create', async (req, res) => {
    const data = req.body
    data.Merchant_Account_ID__c = uniqueID()
    console.log(data)
    try {
        const newAccount = await TestDB.createAccount(data)
        res.status(200).json(newAccount)
    } catch(error) {
        res.status(500).json(error)
    }
})

module.exports = router
