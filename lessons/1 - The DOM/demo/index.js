const interactiveElement = document.getElementById('some-id');

function hideElement() {
  interactiveElement.classList.add('hidden');
}
function showElement() {
  interactiveElement.classList.remove('hidden');
}

document.getElementById('hide-button').addEventListener('click', hideElement);
document.getElementById('show-button').addEventListener('click', showElement);