// __tests__/sum-test.js
jest.dontMock('../lib/sum');

describe('sum', function() {
  var Bacon;
  beforeEach(function() {
    Bacon = require('baconjs');
    jest.setMock('../lib/constant.js', function(value) {
      return require('baconjs').constant(value);
    });
  });

  pit('adds 1 + 2 to equal 3', function() {
    var sum = require('../lib/sum');
    return new Promise(function(res, rej) {
      Bacon.combineTemplate({value: sum(1, 2)}).onValue(function(value) {
        expect(value.value).toBe(3);
        res();
      });
   });
 });
});
