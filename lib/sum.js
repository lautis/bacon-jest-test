// sum.js
var Bacon = require('baconjs');
var constant = require('./constant');

function sum(value1, value2) {
  return Bacon.combineTemplate({
    value1: constant(value1),
    value2: constant(value2)
  }).map(function(template) { return template.value1 + template.value2; });
}
module.exports = sum;
