const db = require('../../../db/dbConfig')

const checkUserAccess = async (req, res, next) => {
  const searchResult = (
    await db('photos').where({
      user_id: req.decodedToken.subject,
      photo_id: req.params.id,
    })
  )[0]
  if (!searchResult) {
    throw new Error('No photo with that ID!')
  }
  req.body.key = searchResult.key
  next()
}

module.exports = { checkUserAccess }
