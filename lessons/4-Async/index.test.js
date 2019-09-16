const assert = require('assert');
const addServerResponses = require('./');

describe(__filename, () => {
  it('adds server responses', () => {
    return addServerResponses()
      .then(res => assert.equal(res, 9109));
  });
});
