const assert = require('assert');
const { isAllNumbers, isVowel } = require('./');

describe(__filename, () => {
  describe('isAllNumbers', () => {
    it('passes a simple test', () => {
      assert.equal(true, isAllNumbers([1]));
    });  
  });
  describe('isVowel', () => {

  });
});
