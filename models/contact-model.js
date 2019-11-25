const db = require('../database/dbConfig.js')

module.exports = {
    find,
    findBy,
    findById,
    createContact,
    createAccountWithContact
}

function find() {
    return db('salesforce.contact')
}

function findBy(filter) {
    return db('salesforce.contact').where(filter)
}

function findById(id) {
    return db('salesforce.contact').where({id}).first()
}

function createContact(data) {
    return db('salesforce.contact').insert(data).returning('*')
        .then(contact => {
            return contact
        })
        .catch(error => {
            return error
        })
        
}

async function createAccountWithContact(accData, conData) {
    try {
        const newAccount = await db('salesforce.account').insert(accData).returning('*')
        const newContact = await db('salesforce.contact').insert(conData).returning('*')
        return { newAccount, newContact }
    } catch(error) {
        return error
    }
}