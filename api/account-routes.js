const router = require('express').Router()
const Accounts = require('../models/account-model')


router.get('/', (req, res) => {
    res.send('Hello')
})

router.get('/find/all', (req, res) => {
    Accounts.find()
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
    // data.Merchant_Account_ID__c = uniqueID()
    console.log(data)
    try {
        const newAccount = await Accounts.createAccount(data)
        res.status(200).json(newAccount)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router
