/* eslint-disable no-undef */
require('../test-helper')()

describe('routes : index', () => {
  describe('GET /', () => {
    it('should return a welcome message', done => {
      chai
        .request(server)
        .get('/')
        .end((err, res) => {
          should.not.exist(err)
          res.status.should.eql(200)
          res.type.should.eql('application/json')
          res.body.status.should.equal('success')
          res.body.message.should.eql('Welcome to the API!')
          done()
        })
    })
  })
})
