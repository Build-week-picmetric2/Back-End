const { PORT, NODE_ENV } = require('./env'),
  app = require('express')(),
  json = require('express').json(),
  morgan = require('morgan')('dev'),
  helmet = require('helmet')(),
  cors = require('cors')({
    origin: [
      'http:localhost:3002',
      'http:localhost:3000',
      'http:localhost',
      'http:localhost:3001',
      'http:localhost:3003',
      'https://picmetricanalyzer.now.sh/',
    ],
  }),
  apiRouter = require('./routes/api')

NODE_ENV === 'test'
  ? (module.exports = app)
  : app.listen(PORT || 5000, () => {
      console.log(`Listening on port ${PORT}...`)
    })

app.use(json, morgan, helmet, cors)

app.use('/api', apiRouter)

app.use((req, res, next) =>
  res
    .status(404)
    .send('Invalid URL, please send check the list of endpoints to the API')
)
