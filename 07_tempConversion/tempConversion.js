const convertToCelsius = function(toCels) {
  return Math.round((toCels - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function(toFahr) {
  return Math.round(((toFahr * 9) / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
