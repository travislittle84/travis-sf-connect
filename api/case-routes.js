const router = require('express').Router()
const Cases = require('../models/case-model')
const Contacts = require('../models/contact-model')
const Accounts = require('../models/account-model')
const generateConnectID = require('uniqid')


router.get('/', (req, res) => {
    res.send('Hello')
})

router.get('/find/all', async (req, res) => {
    try {
        const cases = await Cases.find()
        res.status(200).json(cases)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/find/id/:id', async (req, res) => {
    const { id } = req.params
    try {
        const returnedCase = await Cases.findById(id)
        res.status(200).json(returnedCase)
    } catch (error) {
        res.status(500).json(error)
    }

})

router.get('/search', async (req, res) => {
    const { field, value } = req.query
    const filter = { [field]: value }

    try {
        const cases = await Cases.findBy(filter)
        res.status(200).json(cases)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/create', async (req, res) => {
    const data = req.body
    // Generate and inject ConnectID
    data.case_connect_id__c = generateConnectID()

    try {
        const newCase = await Cases.createCase()
        res.status(200).json(newCase)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router
