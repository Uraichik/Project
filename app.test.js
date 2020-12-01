const chai = require('chai'),
chaiHttp = require('chai-http'),
expect = chai.expect;
fs = require('fs'),
server = require('./app');

chai.use(chaiHttp);

describe('Users API', () => {

it('should be ok  1', done => {
  chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
});

it('should be ok  2', done => {
  chai.request(server)
      .get('/create')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
});

it('should be ok  3', done => {
  chai.request(server)
      .get('/create')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
});

it('should be ok  4', done => {
  chai.request(server)
      .get('/edit/:id')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
});

it('should be ok  5', done => {
  chai.request(server)
      .post('/edit')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
});

it('should be ok  6', done => {
  chai.request(server)
      .get('/delete/:id')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(404);
        done();
      });
});



});