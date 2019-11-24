
exports.up = function(knex) {
    return knex.schema.createTable('account', account => {
        account.string('name').notNullable()
        account.string('phone')
        account.string('shippingstreet')
        account.string('shippingcity')
        account.string('active')
        account.string('accountnumber')
        account.string('type')
        account.string('website')
        account.string('merchant_account_id').unique()

        account.string('ownerid')
        account.datetime('createddate')
        account.datetime('systemmodstamp')
        account.float('shippinglatitude')
        account.float('shippinglongitude')
        account.string('masterrecordid')
        account.string('parentid')
        account.boolean('isdeleted')



    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('account')
  
};
