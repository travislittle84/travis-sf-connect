const db = require('../database/dbConfig.js')

module.exports = {
    find,
    findBy,
    findById,
    createAccount
}

function find() {
    return db('salesforce.account')
}

function findBy(filter) {
    return db('salesforce.account').where(filter)
}

function findById(id) {
    return db('salesforce.account').where({id}).first()
}

function createAccount(data) {
    return db('salesforce.account').insert(data)
        .then(account => {
            return account
        })
        .catch(error => {
            return error
        })
        
}