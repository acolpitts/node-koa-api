const Koa = require('koa')
const logger = require('koa-logger')

const indexRoutes = require('./routes/index.routes')

const app = new Koa()
const PORT = process.env.PORT || 1337
const env = process.env.NODE_ENV || 'development'

// log requests to console in development
if (env === 'development') app.use(logger())

// routes
app.use(indexRoutes.routes())

// server
const server = app.listen(PORT, () => {
  console.log(`🚀 Server listening on port: ${PORT}`)
})

module.exports = server
