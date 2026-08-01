const convertToCelsius = function(inputNumber) {
  var outputUnrounded = (inputNumber - 32) * (5/9);
  return Math.round(outputUnrounded * 10) / 10;
};

const convertToFahrenheit = function(inputNumber) {
  var outputUnrounded = (inputNumber * (9/5)) + 32;
  return Math.round(outputUnrounded * 10) / 10;
};

console.log(convertToCelsius(32));
console.log(convertToFahrenheit(0));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
