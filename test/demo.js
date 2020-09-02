var chai = require('chai'),chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
var token;
var axios = require('axios')

describe("Test suit",function(){
    it("demo test",function(done){
        req = chai.request('https://ssotest.acs.org')
        req.get('/auth/login?grant_type=client_credentials&client_id=MyAccount&client_secret=c52f56f4e9498c3a00848ebc926bd32bb68b9d19e24b4fb0b8f55558d5a5b898')        
        .end((err, res) => {
            expect(res).to.have.status(200);
            token = res.body.access_token;
        done();
        });
      });
    //   it("demo test",function(done){
    //     req = chai.request('https://api-test.acs.org/exp-ciam-4/exp/api/v1')
    //     req.post('/profile') 
    //     .set('content-type', 'application/json')
    //     .send({
    //         "constituentIds": [
    //             31765536
    //         ]
    //     })
    //     this.timeout(5000)           
    //     axios.post('https://api-test.acs.org/exp-ciam-4/exp/api/v1/profile' , {"constituentIds": [ 31765536]},{ headers: {"Authorization" : 'Bearer ${token}','client_id': 'cdf204a7a2934f58947f409c508b5e76','client_secret': '01478554D340446Ea38f00f0051A5b33','client_trace_guid': '15912333'} })
    //     .then(res => {
    //         console.log(res.data);
    //         done();
    //     });
    //   });
    it("demo test",function(done){
        var headers = {'Authorization': token,'client_id': 'cdf204a7a2934f58947f409c508b5e76','client_secret': '01478554D340446Ea38f00f0051A5b33','client_trace_guid': '15912333','systemName': 'netForum','Content-Type': 'application/json'}
        req = chai.request('https://api-test.acs.org/exp-ciam-4/exp/api/v1')
        req.post('/profile') 
        .set(headers)
        .end((err, res) => {
            expect(res).to.have.status(200);
            // token = res.body.access_token;
        done();
        });
      });
    });