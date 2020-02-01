const { DB_URL, TEST_DB_URL } = require('./env')

module.exports = {
  test: {
    client: 'pg',
    connection: TEST_DB_URL,
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds/test',
    },
  },
  development: {
    client: 'pg',
    connection: DB_URL,
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds/development',
    },
  },
  production: {
    client: 'pg',
    connection: DB_URL,
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds/production',
    },
  },
}
