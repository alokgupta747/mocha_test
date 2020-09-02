var chai = require('chai'),chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;

describe("Test suit",function(){
    var headers = {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Origin': 'https://www.geeksforgeeks.org'
    }
    it("Test dor GET request - should return 200",function(done){
        req = chai.request('https://auth.geeksforgeeks.org')
        req.post('/auth.php')  
        .set(headers)     
        .send() 
        .end((err, res) => {
            expect(res).to.have.status(200);
            // expect(res.body.page).to.equal(2);
        done();
      });
    });
});