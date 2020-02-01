const router = require('express-promise-router')(),
  db = require('./model')

module.exports = router

router.get('/', async (req, res) => {
  const temp = await db.temp()
  res.json(temp)
})

router.use((err, req, res, next) =>
  res.status(500).json({ message: 'Uh Oh! 500 Error!', error: err.message })
)
