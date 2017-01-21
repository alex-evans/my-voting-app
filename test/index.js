var expect = require('chai').expect
var rp = require('request-promise')
var url = 'http://localhost:5000'

describe("Main Page", () => {

  it("returns status 200", (done) => {
    rp(url, (err, res, body => {
      expect(res.statusCode).to.equal(200)
      done()
    }))
  })

})
