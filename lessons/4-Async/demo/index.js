// const { mockApiCall, mockBadApiCall } = require('../api');

setTimeout(() => { console.log('Within timeout')}, 0);

console.log('Outside timeout');

/*

mockApiCall()
  .then(response => response.data)
  .then(console.log)
  .finally(() => console.log('This will be logged either way'));

/*

mockBadApiCall()
  .then(() => console.log('this is unreachable'))
  .catch((error) => console.log(error.message))
  .finally(() => console.log('This will be logged either way'));

/*

async function timeServerCall() {
  const startTimestamp = Date.now();
  const response = await mockApiCall();
  return Date.now() - startTimestamp;
}

timeServerCall().then(console.log);

*/