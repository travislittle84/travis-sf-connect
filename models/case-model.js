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

async function createCase(data) {
    try {
        console.log('in db test', data)
        const newCase = await db('salesforce.case').insert(data)
        return newCase
    } catch(error) {
        return error
    }
            
}