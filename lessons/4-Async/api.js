// This function mocks an upstream API call that takes 1 second to respond
function mockApiCall() {
  return new Promise((resolve) => {
    const timeToTake = 1000 * Math.random()
    const response = {
      status: 200,
      data: 'Response received from server'
    };
    setTimeout(() => resolve(response), 1000);
  });
}

function mockBadApiCall() {
  return new Promise((resolve, reject) => {
    const error = new Error('Server timed out')
    setTimeout(() => reject(error), 5000);
  });
}

function getFirstNumberFromServer() {
  return Promise.resolve({ status: 200, data: 108 });
}

function getSecondNumberFromServer() {
  return Promise.resolve({ status: 200, data: 9001 });
}

module.exports = { mockBadApiCall, mockApiCall, getFirstNumberFromServer, getSecondNumberFromServer };
