const db = require('../../../db/dbConfig')

const checkUserAccess = async (req, res, next) => {
  const searchResult = (
    await db('images').where({
      user_id: req.decodedToken.subject,
      image_id: req.params.id,
    })
  )[0]
  if (!searchResult) throw new Error('No photo with that ID!')
  req.body.key = searchResult.key
  next()
}

const checkPutBody = async (req, res, next) => {
  if (!req.body.name && !req.body.description && !req.body.category) {
    throw new Error(
      'Must send any combination of name, description, or category'
    )
  }
  next()
}

module.exports = { checkUserAccess, checkPutBody }
