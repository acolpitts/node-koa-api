/* eslint-disable no-undef */
process.env.NODE_ENV = 'test'
process.env.PORT = 3333

const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

const server = require('../src/server/index')
const knex = require('../src/server/db/connection')

beforeEach(() => {
  return knex.migrate
    .rollback()
    .then(() => {
      return knex.migrate.latest()
    })
    .then(() => {
      return knex.seed.run()
    })
})

afterEach(() => {
  return knex.migrate.rollback()
})

module.exports = function () {
  this.chai = chai
  this.should = should
  this.chaiHttp = chaiHttp
  this.server = server
}
