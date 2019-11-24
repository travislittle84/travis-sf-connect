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
    return db('salesforce.contact').insert(data)
        .then(contact => {
            return contact
        })
        .catch(error => {
            return error
        })
        
}

async function createAccountWithContact(accData, conData) {
    const accConnectID = accData.merchant_account_id__c
    const conConnectID = conData.contact_connect_id__c
    try {
        const newAccount = db('salesforce.account').insert(accData)
        const newContact = db('salesforce.contact').insert(conData)
        return { newAccount, newContact }
    } catch(error) {
        return error
    }
}