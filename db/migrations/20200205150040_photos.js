exports.up = knex =>
  knex.schema.createTable('images', table => {
    table.increments('image_id')
    table
      .text('url')
      .unique()
      .notNullable()
    table
      .text('key')
      .unique()
      .notNullable()
      .index()
    table
      .text('name')
      .notNullable()
      .index()
    table.text('description')
    table
      .integer('user_id')
      .notNullable()
      .references('users.user_id')
      .unsigned()
      .onDelete('CASCADE')
    table
      .integer('category_id')
      .references('categories.category_id')
      .defaultTo(1)
      .notNullable()
      .unsigned()
  })

exports.down = knex => knex.schema.dropTableIfExists('images')
