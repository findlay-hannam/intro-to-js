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

function isChar(char) {
  return typeof char === 'string' && char.length === 1;
}
const vowelMap = {
  a: true,
  e: true,
  i: true,
  o: true,
  u: true,
};

/* This function takes a character and returns true if the character is a vowel */
function isVowel(char) {
  if (!isChar(char)) {
    return false;
  }
  return !!vowelMap[char];
}

module.exports = {
  isAllNumbers,
  isVowel,
};
