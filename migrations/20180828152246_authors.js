
exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', (table) =>{
    table.increments('ID'),
    table.text('FirstName'),
    table.text('LastName'),
    table.text('Biography'),
    table.text('PortraitURL')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('authors')
};
