var chai = require('chai');
var assert = chai.assert;

describe('Number', function() {
  var Tools = require('../src/Tools');
  tools = new Tools();
  it('should be even', function() {
    var mod = tools.even() % 2;

    assert.equal(mod, 0);
  });
});
