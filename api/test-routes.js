const router = require('express').Router()
const TestDB = require('../models/test-model')

router.get('/', (req, res) => {
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


module.exports = router
