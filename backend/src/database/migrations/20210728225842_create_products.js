
exports.up = function(knex) {
  return knex.schema.createTable('products', function(table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.int('quant').notNullable().defaultTo(0);
    table.double('unitary_value').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('products')
};
