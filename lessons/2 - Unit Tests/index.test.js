const assert = require('assert');
const { isAllNumbers } = require('./');

describe(__filename, () => {
  it('passes a simple test', () => {
    assert.equal(true, isAllNumbers([1]));
  });
});
