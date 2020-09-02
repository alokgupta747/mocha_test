var chai = require('chai'),chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const yaml = require('js-yaml');
const fs   = require('fs');
var req,data=undefined;
var postBody = require('../test/resources/payloads/post');
var putBody = require('../test/resources/payloads/put');
var patchBody = require('../test/resources/payloads/patch');
// const { doesNotMatch } = require('assert');

describe("Test suit",function(){
    before(function(){
        console.log('before method');
        try {
            data = yaml.safeLoad(fs.readFileSync('test/resources/yamlData/data.yml', 'utf8'));
        } catch (e) {
            console.log(e);
          }
          req = chai.request(data.requestURL)
          // done();
    });

    it("Test dor GET request - should return 200",function(done){
        req.get(data.endpoint.get)        
        .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body.page).to.equal(2);
        done();
      });
    });

    it("Test for POST req - should return 201",function(done){
        req.post(data.endpoint.post)    
        .set('content-type', 'application/json')
        .send(postBody)    
        .end((err, res) => {
            expect(res).to.have.status(201);
            console.log(res.body);
            expect(res).to.be.an('object');
            expect(res.body.name).to.equal('alok');
        done();
      });
    });

    it("Test for PUT request - should return 200",function(done){
        req.put(data.endpoint.put)    
        .set('content-type', 'application/json')
        .send(putBody)    
        .end((err, res) => {
            expect(res).to.have.status(200);
            console.log(res.body);
            expect(res).to.be.an('object');
            expect(res.body.name).to.equal('alok');
        done();
      });
    });

    it("Test for PATCH request - should return 200",function(done){
        req.patch(data.endpoint.patch)    
        .set('content-type', 'application/json')
        .send(patchBody)    
        .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res).to.be.an('object');
            expect(res.body.name).to.equal('alok');
            console.log(res.body);
        done();
      });
    });
});