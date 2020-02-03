exports.seed = knex =>
  knex('people_bools')
    .del()
    .then(() =>
      knex('people_bools').insert([
        {
          person: false,
        },
        {
          person: true,
        },
      ])
    )
