const expect = require('chai').expect;
const moxios = require('moxios');
const fs = require('fs');
var http = require('http');

const BibError = require('../src/BibError');
const error_response = fs.readFileSync(require('path').resolve(__dirname, './mocks/errorResponse.xml')).toString();
const Bib = require('../src/Bib');

const error_mock = require('./mocks/errorMock')

describe('Create Error test', () => {
	var error;
	  before(() => {
		  	error = new BibError(error_mock);
		  });
	  
	  it('Creates an Error object', () => {
		  expect(error).to.be.an.instanceof(BibError);
	  });
	  
	  it('Sets the Error properties', () => {
        expect(error.error).to.be.an.instanceof(Error);
        expect(error.code).to.equal(401)
        expect(error.message).to.equal('AccessToken {tk_12345} is invalid')
        expect(error.detail).to.equal('Authorization header: Bearer tk_12345')
	  });
	  
	  it('Has functioning getters', () => {
        expect(error.getRequestError()).to.be.an.instanceof(Error);
        expect(error.getCode()).to.equal(401)
        expect(error.getMessage()).to.equal('AccessToken {tk_12345} is invalid')
        expect(error.getDetail()).to.equal('Authorization header: Bearer tk_12345')
	  });
	  
	});

describe('API Error tests', () => {
  beforeEach(() => {
	  moxios.install();
  });
  
  afterEach(() => {
	  moxios.uninstall();
  });

  it('Returns a Error from an HTTP request', () => {
	  moxios.stubRequest('https://worldcat.org/bib/data/12345', {
		  status: 401,
		  responseText: error_response
	  });
	  
    return Bib.find('12345', 'tk_12345')
      .catch(error => {
        //expect an Error object back
        expect(error).to.be.an.instanceof(BibError);
        expect(error.getRequestError()).to.be.an.instanceof(Error);
        expect(error.getCode()).to.equal(401);
        expect(error.getMessage()).to.equal('AccessToken {tk_12345} is invalid')
        expect(error.getDetail()).to.equal('Authorization header: Bearer tk_12345')
        
      });
  });
});
