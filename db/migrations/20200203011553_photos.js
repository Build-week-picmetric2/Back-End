exports.up = knex =>
  knex.schema.createTable('photos', table => {
    table.increments('photo_id')
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
    table
      .integer('user_id')
      .notNullable()
      .references('users.user_id')
      .unsigned()
      .onDelete('CASCADE')
    table
      .integer('people_bool_id')
      .references('people_bools.people_bool_id')
      .unsigned()
    table
      .integer('category_id')
      .references('categories.category_id')
      .unsigned()
  })

exports.down = knex => knex.schema.dropTableIfExists('photos')
