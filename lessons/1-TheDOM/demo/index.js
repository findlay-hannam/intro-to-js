function hideElement() {
  interactiveElement.classList.add('hidden');
}
function showElement() {
  interactiveElement.classList.remove('hidden');
}
function createNewParagraph() {
  const newLineElement = document.createElement('p');
  const newLineTextNode = document.createTextNode('New text');
  newLineElement.appendChild(newLineTextNode);
  return newLineElement;
}
function injectText() {
  const newLineElement = createNewParagraph();
  injectionSite.appendChild(newLineElement);
}

const interactiveElement = document.getElementById('some-id');
document.getElementById('hide-button').addEventListener('click', hideElement);
document.getElementById('show-button').addEventListener('click', showElement);


const injectionSite = document.getElementById('injection-site');
document.getElementById('inject-button').addEventListener('click', injectText);