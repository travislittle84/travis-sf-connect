const router = require('express').Router()
const Contacts = require('../models/contact-model')
const generateConnectID = require('uniqid')


router.get('/', (req, res) => {
    res.send('Hello')
})

router.get('/find/all', async (req, res) => {
    try {
        const contacts = await Contacts.find()
        res.status(200).json(contacts)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/find/id/:id', async (req, res) => {
    const { id } = req.params
    try {
        const contact = await Contacts.findById(id)
        res.status(200).json(contact)
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
        const contact = await Contacts.findBy(filter)
        res.status(200).json(contact)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/create', async (req, res) => {
    const data = req.body
    data.contact_connect_id__c = generateConnectID()
    console.log(data)
    try {
        const newContact = await Contacts.createAccount(data)
        res.status(200).json(newContact)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/create-with-account', (req, res) => {
    const { accData, conData } = req.body
    accData.merchant_account_id__c = generateConnectID()
    conData.contact_connect_id__c = generateConnectID()
    const newData = await Contacts.createAccountWithContact(accData, conData)
    res.status(200).json(newData)
})

module.exports = router
