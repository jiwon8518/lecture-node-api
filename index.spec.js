const app = require('./index.js');
const request = require('supertest');

describe('GET /users는', () => {
    it('...', (done) => {
        request(app)
        .get('/users')
        .end((err, res) => {
         console.log(res.body);   
         done();
        })
    });
});