const router = require('express').Router()
const Cases = require('../models/cases-model')
const Contacts = require('../models/Contact-model')
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


    console.log(data)
    try {
        const newCase = await Cases.createCase()
        res.status(200).json(newCase)
    } catch (error) {
        res.status(500).json(error)
    }
})

// router.post('/create-with-account', async (req, res) => {
//     try {
//         const { accData, conData } = req.body
//         // Generate unique Connect IDs for new Contact and Account records
//         const accConnectID = generateConnectID()
//         const conConnectID = generateConnectID()

//         // Assign relational unique identifier fields

//         // Account's unique Connect ID
//         accData.merchant_account_id__c = accConnectID 
//         // Contact's unique Connect ID
//         conData.contact_connect_id__c = conConnectID    
//         // Foreign key relating newly created Contact to newly created Account
//         conData.account__merchant_account_id__c = accConnectID  

//         const newData = await Cases.createAccountWithContact(accData, conData)
//         res.status(200).json(newData)

//     } catch (error) {
//         res.status(500).json(error)
//     }

// })

module.exports = router
