exports.seed = knex =>
  knex('predictions')
    .del()
    .then(() =>
      knex('predictions').insert([
        { prediction: 'hac', count: 3, average_certainty: 1 },
        { prediction: 'posuere', count: 2, average_certainty: 1 },
        { prediction: 'tellus', count: 2, average_certainty: 1 },
        { prediction: 'turpis', count: 8, average_certainty: 1 },
        { prediction: 'adipiscing', count: 8, average_certainty: 0 },
        { prediction: 'felis', count: 10, average_certainty: 1 },
        { prediction: 'amet', count: 5, average_certainty: 1 },
        { prediction: 'sed', count: 3, average_certainty: 0 },
        { prediction: 'porttitor', count: 10, average_certainty: 1 },
        { prediction: 'semper', count: 1, average_certainty: 1 },
        { prediction: 'ut', count: 3, average_certainty: 0 },
        { prediction: 'erat', count: 8, average_certainty: 0 },
        { prediction: 'nulla', count: 3, average_certainty: 1 },
        { prediction: 'dictumst', count: 10, average_certainty: 1 },
        { prediction: 'nonummy', count: 7, average_certainty: 1 },
        { prediction: 'in', count: 3, average_certainty: 1 },
        { prediction: 'cursus', count: 5, average_certainty: 1 },
        { prediction: 'libero', count: 10, average_certainty: 1 },
        { prediction: 'felis', count: 6, average_certainty: 0 },
        { prediction: 'tortor', count: 6, average_certainty: 0 },
        { prediction: 'ac', count: 10, average_certainty: 0 },
        { prediction: 'nulla', count: 6, average_certainty: 1 },
        { prediction: 'suspendisse', count: 10, average_certainty: 1 },
        { prediction: 'nulla', count: 4, average_certainty: 0 },
        { prediction: 'sagittis', count: 8, average_certainty: 1 },
        { prediction: 'lacinia', count: 10, average_certainty: 0 },
        { prediction: 'iaculis', count: 8, average_certainty: 0 },
        { prediction: 'mi', count: 8, average_certainty: 1 },
        { prediction: 'pretium', count: 5, average_certainty: 1 },
        { prediction: 'nisi', count: 4, average_certainty: 0 },
      ])
    )
