exports.up = knex =>
  knex.schema.createTable('people_bools', table => {
    table.increments('people_bool_id')
    table
      .boolean('person')
      .unique()
      .notNullable()
  })

exports.down = knex => knex.schema.dropTableIfExists('people_bools')
