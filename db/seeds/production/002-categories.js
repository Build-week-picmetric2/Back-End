exports.seed = knex =>
  knex('categories')
    .del()
    .then(() =>
      knex('categories').insert([
        {
          category: '',
        },
        {
          category: 'middleware',
        },
        {
          category: 'Balanced',
        },
        {
          category: 'well-modulated',
        },
        {
          category: 'radical',
        },
        {
          category: 'flexibility',
        },
      ])
    )
