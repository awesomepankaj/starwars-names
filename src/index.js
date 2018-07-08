var uniqueRandomArray = require('unique-random-array');
var starWarNames = require('./star-wars.json');

var getRandomItem = uniqueRandomArray(starWarNames);

module.exports = {
  all: starWarNames,
  random: random, 
};

function random(number) {
  if (!number) {
    return getRandomItem();
  }
  var randomItems = []
  for(var i=0; i < number; i++) {
    randomItems.push(getRandomItem());
  }
  return randomItems;
}