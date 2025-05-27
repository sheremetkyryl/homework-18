let counterValue = 0;

const valueElement = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

function updateDisplay() {
  valueElement.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  updateDisplay();
}

function decrement() {
  counterValue -= 1;
  updateDisplay();
}

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);
