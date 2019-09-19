const assert = require('assert');
const { isAllNumbers, isVowel } = require('./');

describe(__filename, () => {
  describe('isAllNumbers', () => {
    it('An array of all numbers', () => {
      assert.equal(true, isAllNumbers([1]));
    });
    it('Not an array', () => {

    });
    it('An empty array', () => {

    });
    it('An array containing something other than a number', () => {

    });
  });
  describe('isVowel', () => {
    it('A vowel', () => {

    });
    it('A consonant', () => {

    });
    it('A number', () => {

    });
    it('A string with length >1', () => {

    });
  });
});
