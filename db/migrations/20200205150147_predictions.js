exports.up = knex =>
  knex.schema.createTable('predictions', table => {
    table.increments('prediction_id')
    table.text('prediction').notNullable()
    table
      .text('count')
      .notNullable()
      .index()
    table
      .decimal('average_certainty')
      .notNullable()
      .index()
  })

exports.down = knex => knex.schema.dropTableIfExists('predictions')
