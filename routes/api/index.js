const router = require('express-promise-router')(),
  registerRouter = require('./auth/register'),
  loginRouter = require('./auth/login'),
  logoutRouter = require('./auth/logout'),
  photosRouter = require('./photos'),
  { authenticate } = require('./middleware')

module.exports = [
  router.use('/register', registerRouter),
  router.use('/login', loginRouter),
  router.use('/logout', logoutRouter),
  router.use('/photos', authenticate, photosRouter),
]
