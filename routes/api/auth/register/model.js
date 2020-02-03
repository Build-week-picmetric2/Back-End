const db = require('../../../../db/dbConfig'),
  { findUser } = require('../authTools'),
  addUser = async newUser => {
    await db('users').insert(newUser)
    return await findUser(newUser.username)
  }

module.exports = { addUser }
