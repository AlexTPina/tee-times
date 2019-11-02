
exports.up = function(knex, Promise) {
    return knex.schema.createTable('teetimes', function (table) {
        table.increments();
        table.datetime('time').notNullable();
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('teetimes')
};
