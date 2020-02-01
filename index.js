const { PORT } = require('./env')
const app = require('express')()
const json = require('express').json()
const morgan = require('morgan')('dev')
const helmet = require('helmet')()
const cors = require('cors')()

const apiRouter = require('./routes/api')

app.listen(PORT || 5000, () => {
  console.log(`Listening on port ${PORT}...`)
})

app.use(json, morgan, helmet, cors)

app.use('/api', apiRouter)

app.use((req, res, next) =>
  res
    .status(404)
    .send('Invalid URL, please send check the list of endpoints to the API')
)
