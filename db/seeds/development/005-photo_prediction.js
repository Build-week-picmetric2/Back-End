exports.seed = knex =>
  knex('image_prediction')
    .del()
    .then(() =>
      knex('image_prediction').insert([
        {
          image_id: 9,
          prediction_id: 7,
        },
        {
          image_id: 4,
          prediction_id: 19,
        },
        {
          image_id: 8,
          prediction_id: 13,
        },
        {
          image_id: 2,
          prediction_id: 20,
        },
        {
          image_id: 12,
          prediction_id: 2,
        },
        {
          image_id: 8,
          prediction_id: 15,
        },
        {
          image_id: 2,
          prediction_id: 16,
        },
        {
          image_id: 1,
          prediction_id: 8,
        },
        {
          image_id: 8,
          prediction_id: 27,
        },
        {
          image_id: 10,
          prediction_id: 19,
        },
        {
          image_id: 6,
          prediction_id: 9,
        },
        {
          image_id: 9,
          prediction_id: 11,
        },
        {
          image_id: 1,
          prediction_id: 2,
        },
        {
          image_id: 5,
          prediction_id: 9,
        },
        {
          image_id: 3,
          prediction_id: 10,
        },
        {
          image_id: 4,
          prediction_id: 25,
        },
        {
          image_id: 6,
          prediction_id: 8,
        },
        {
          image_id: 4,
          prediction_id: 13,
        },
        {
          image_id: 7,
          prediction_id: 7,
        },
        {
          image_id: 7,
          prediction_id: 10,
        },
        {
          image_id: 4,
          prediction_id: 8,
        },
        {
          image_id: 12,
          prediction_id: 4,
        },
        {
          image_id: 11,
          prediction_id: 21,
        },
        {
          image_id: 12,
          prediction_id: 3,
        },
        {
          image_id: 8,
          prediction_id: 28,
        },
        {
          image_id: 8,
          prediction_id: 14,
        },
        {
          image_id: 7,
          prediction_id: 22,
        },
        {
          image_id: 3,
          prediction_id: 8,
        },
        {
          image_id: 8,
          prediction_id: 30,
        },
        {
          image_id: 7,
          prediction_id: 12,
        },
        {
          image_id: 7,
          prediction_id: 13,
        },
        {
          image_id: 10,
          prediction_id: 17,
        },
        {
          image_id: 2,
          prediction_id: 11,
        },
        {
          image_id: 8,
          prediction_id: 5,
        },
        {
          image_id: 11,
          prediction_id: 23,
        },
        {
          image_id: 10,
          prediction_id: 2,
        },
        {
          image_id: 3,
          prediction_id: 2,
        },
        {
          image_id: 11,
          prediction_id: 10,
        },
        {
          image_id: 8,
          prediction_id: 18,
        },
        {
          image_id: 3,
          prediction_id: 22,
        },
        {
          image_id: 3,
          prediction_id: 18,
        },
        {
          image_id: 3,
          prediction_id: 28,
        },
        {
          image_id: 8,
          prediction_id: 12,
        },
        {
          image_id: 4,
          prediction_id: 19,
        },
        {
          image_id: 12,
          prediction_id: 1,
        },
        {
          image_id: 7,
          prediction_id: 11,
        },
        {
          image_id: 5,
          prediction_id: 21,
        },
        {
          image_id: 4,
          prediction_id: 24,
        },
        {
          image_id: 12,
          prediction_id: 15,
        },
        {
          image_id: 9,
          prediction_id: 27,
        },
      ])
    )
