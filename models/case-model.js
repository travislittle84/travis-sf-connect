const db = require('../database/dbConfig.js')

module.exports = {
    find,
    findBy,
    findById,
    createCase
}

function find() {
    return db('salesforce.case')
}

function findBy(filter) {
    return db('salesforce.case').where(filter)
}

function findById(id) {
    return db('salesforce.case').where({id}).first()
}

function createCase(data) {
    return db('salesforce.case').insert(data)
        .then(newCase => {
            return newCase
        })
        .catch(error => {
            return error
        })
        
}