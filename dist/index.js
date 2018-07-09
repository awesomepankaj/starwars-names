'use strict';

var _uniqueRandomArray = require('unique-random-array');

var _uniqueRandomArray2 = _interopRequireDefault(_uniqueRandomArray);

var _starWars = require('./star-wars.json');

var _starWars2 = _interopRequireDefault(_starWars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getRandomItem = (0, _uniqueRandomArray2.default)(starWarNames);

module.exports = {
  all: starWarNames,
  random: random
};

function random(number) {
  if (!number) {
    return getRandomItem();
  }
  var randomItems = [];
  for (var i = 0; i < number; i++) {
    randomItems.push(getRandomItem());
  }
  return randomItems;
}
