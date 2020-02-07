exports.up = knex =>
  knex.schema.createTable('marked_images', table => {
    table.increments('marked_image_id')
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
      .integer('image_id')
      .notNullable()
      .references('images.image_id')
      .unsigned()
      .onDelete('CASCADE')
  })

exports.down = knex => knex.schema.dropTableIfExists('marked_images')
