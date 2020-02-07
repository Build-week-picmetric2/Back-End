const knex = require('knex')
const { NODE_ENV } = require('../env')
const config = require('../knexfile.js')

module.exports = knex(config[NODE_ENV])
