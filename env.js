const dotenv = require('dotenv')
dotenv.config()
module.exports = {
  DB_URL: process.env.DB_URL,
  TEST_DB_URL: process.env.TEST_DB_URL,
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  JWT_SECRET: process.env.JWT_SECRET,
  AWS_ACESS_KEY_ID: process.env.AWS_ACESS_KEY_ID,
  AWS_SECRET_ACESS_KEY: process.env.AWS_SECRET_ACESS_KEY,
}
