var uniqueRandomArray = require('unique-random-array');
var starWarNames = require('./star-wars.json');

module.exports = {
  all: starWarNames,
  random: uniqueRandomArray(starWarNames), 
};
