var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

describe('Number', function() {
  var Tools = require('../src/Tools');
  tools = new Tools();

  it('should be even', function() {
    var mod = tools.even() % 2;

    assert.equal(mod, 0);
  });

  it('should be odd', function() {
    var mod = tools.odd() % 2;

    assert.equal(mod, 1);
  });

  it('should be between 0 and 100', function() {
    var percentage = tools.percentage(50, 100);

    expect(percentage).to.be.at.least(0);
  });

  it('should be complex', function() {
    var number = tools.toComplex(3, 5);

    expect(number).to.be.an('object');
	 expect(number).to.have.property('realPart');
    expect(number).to.have.property('imaginaryPart');
  });

  it('should be zero', function() {
    expect(tools.average([])).to.be.equal(0);
  });
});

describe('String', function() {
  var Tools = require('../src/Tools');
  tools = new Tools();

  it('should be of the same length', function() {
    var str = "voeluenrovhjdbezuis";

    expect(str.length).to.be.equal(tools.randomize(str).length);
  });

  it('should not be greater', function() {
    var str = "vofdfdouiucvpozlkneimvdslfopeluenrovhjdbezuis";

    expect(str.length < tools.removeDoubles(str).length).to.be.false;
  });

  it('should become an Array', function() {
    var str = "vofdfdouiucvpozlkneimvdslfopeluenrovhjdbezuis";
    var number = Math.floor(Math.random() * 50);

    expect(tools.splitInParts(str, number)).to.be.an('array');
    expect(tools.splitInParts(str, number).length).to.be.equal(number);
  });
});
