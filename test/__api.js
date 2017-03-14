var request = require('supertest');
var shortened_url = shortened_url;

describe('/urls', function(){
  var server;

beforeEach(function(){
  server = require('../src/server.js');

});

afterEach(function(){
  server.close();

});

    it('Should return specified object.', function testHealth(done){
      request(server)
      .get('/api/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200,{'shortened_url': shortener.stringGen(6)} ,done);

});
  });
