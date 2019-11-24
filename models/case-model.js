const db = require('../database/dbConfig.js')

module.exports = {
    find,
    findBy,
    findById,
    createCase
}

function find() {
    return db('salesforce.cases')
}

function findBy(filter) {
    return db('salesforce.cases').where(filter)
}

function findById(id) {
    return db('salesforce.cases').where({id}).first()
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