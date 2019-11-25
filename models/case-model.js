const db = require('../database/dbConfig.js')

module.exports = {
    find,
    findBy,
    findById,
    createCase,
    updateCase
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
        const newCase = await db('salesforce.case').insert(data)
        return newCase
    } catch(error) {
        return error
    }
            
}

async function updateCase(external_id, data) {
    try {
        const updatedCase = await 
            db('salesforce.case')
            .where({ case_connect_id__c: external_id })
            .update(data)
            .returning('*')

        return updatedCase
    } catch(error) {
        return error
    }
}