const db = require('../database/dbConfig.js')
const knex = require('knex')

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
    console.log('test', filter)
    const queryString = `${filter.field} ILIKE ${filter.value}`
    console.log('test2', queryString)
    return db('salesforce.contact').whereRaw(queryString)
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
        const newAccount = await db('salesforce.account').insert(accData)
        const newContact = await db('salesforce.contact').insert(conData)
        return { newAccount, newContact }
    } catch(error) {
        return error
    }
}