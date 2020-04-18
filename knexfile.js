require('dotenv').config()
const path = require('path')

const BASE_PATH = path.join(__dirname, 'src', 'server', 'db')
const DATABASE_URI = `postgres://${process.env.DATABASE_USERNAME}@${process.env.DATABASE_PASSWORD}${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`

module.exports = {
  test: {
    client: 'pg',
    connection: `${DATABASE_URI}_test`,
    migrations: {
      directory: path.join(BASE_PATH, 'migrations'),
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds'),
    },
  },
  development: {
    client: 'pg',
    connection: `${DATABASE_URI}_development`,
    migrations: {
      directory: path.join(BASE_PATH, 'migrations'),
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds'),
    },
  },
}
