exports.seed = knex =>
  knex('predictions')
    .del()
    .then(() =>
      knex('predictions').insert([
        {
          prediction: 'vitae',
          count: 4,
          average_certainty: 0.92,
        },
        {
          prediction: 'ut',
          count: 1,
          average_certainty: 0.4,
        },
        {
          prediction: 'sed',
          count: 1,
          average_certainty: 0.12,
        },
        {
          prediction: 'ut',
          count: 5,
          average_certainty: 0.68,
        },
        {
          prediction: 'tortor',
          count: 1,
          average_certainty: 0.44,
        },
        {
          prediction: 'in',
          count: 2,
          average_certainty: 0.37,
        },
        {
          prediction: 'lacus',
          count: 2,
          average_certainty: 0.57,
        },
        {
          prediction: 'quisque',
          count: 3,
          average_certainty: 0.55,
        },
        {
          prediction: 'dapibus',
          count: 6,
          average_certainty: 0.68,
        },
        {
          prediction: 'aliquet',
          count: 9,
          average_certainty: 0.19,
        },
        {
          prediction: 'turpis',
          count: 7,
          average_certainty: 0.42,
        },
        {
          prediction: 'neque',
          count: 6,
          average_certainty: 0.68,
        },
        {
          prediction: 'in',
          count: 9,
          average_certainty: 0.95,
        },
        {
          prediction: 'neque',
          count: 9,
          average_certainty: 0.56,
        },
        {
          prediction: 'consequat',
          count: 5,
          average_certainty: 0.11,
        },
        {
          prediction: 'vestibulum',
          count: 3,
          average_certainty: 0.31,
        },
        {
          prediction: 'ullamcorper',
          count: 9,
          average_certainty: 0.13,
        },
        {
          prediction: 'justo',
          count: 10,
          average_certainty: 0.8,
        },
        {
          prediction: 'sapien',
          count: 8,
          average_certainty: 0.68,
        },
        {
          prediction: 'in',
          count: 10,
          average_certainty: 0.42,
        },
        {
          prediction: 'ipsum',
          count: 4,
          average_certainty: 0.76,
        },
        {
          prediction: 'vulputate',
          count: 9,
          average_certainty: 0.85,
        },
        {
          prediction: 'nulla',
          count: 8,
          average_certainty: 0.88,
        },
        {
          prediction: 'in',
          count: 6,
          average_certainty: 0.26,
        },
        {
          prediction: 'non',
          count: 1,
          average_certainty: 0.51,
        },
        {
          prediction: 'amet',
          count: 2,
          average_certainty: 0.89,
        },
        {
          prediction: 'vivamus',
          count: 2,
          average_certainty: 0.8,
        },
        {
          prediction: 'nam',
          count: 1,
          average_certainty: 0.68,
        },
        {
          prediction: 'augue',
          count: 3,
          average_certainty: 0.42,
        },
        {
          prediction: 'est',
          count: 8,
          average_certainty: 0.51,
        },
      ])
    )
