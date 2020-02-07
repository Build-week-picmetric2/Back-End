exports.up = knex =>
  knex.schema.createTable('image_prediction', table => {
    table.increments('image_prediction')
    table
      .integer('image_id')
      .notNullable()
      .references('images.image_id')
      .unsigned()
    table
      .integer('prediction_id')
      .notNullable()
      .references('predictions.prediction_id')
      .unsigned()
  })

exports.down = knex => knex.schema.dropTableIfExists('image_prediction')
