const router = require('express-promise-router')(),
  s3Router = require('./s3')

module.exports = [router.use('/s3', s3Router)]
