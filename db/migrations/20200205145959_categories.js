exports.up = knex =>
  knex.schema.createTable('categories', table => {
    table.increments('category_id')
    table
      .text('category')
      .unique()
      .notNullable()
      .index()
  })

exports.down = knex => knex.schema.dropTableIfExists('categories')
