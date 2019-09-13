function isNumber(input) {
  return typeof input === 'number';
}

function isNotNumber(input) {
  return !isNumber(input);
}

/* This function takes an array that returns true if passed an array of numbers, otherwise false */
function isAllNumbers(input) {
  if (Array.isArray(input)) {
    return !input.some(isNotNumber);
  }
  return false;
}

module.exports = {
  isAllNumbers,
};
