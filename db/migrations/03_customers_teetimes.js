
exports.up = function(knex, Promise) {
    return knex.schema.createTable('customers_teetimes', function (table) {
        table.increments();
        table.integer('customer_id').references('customers_id')
        table.integer('tee_time_id').references('teetimes_id')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('customers_teetimes')
};
