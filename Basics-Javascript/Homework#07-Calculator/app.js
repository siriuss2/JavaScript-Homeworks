const buttons = document.querySelectorAll('.buttons .item');
const total = document.querySelector('.total');

let firstNumber = null;
let operator = null;
let secondNumber = null;

function calculator(){
for (const button of buttons) {
  button.addEventListener('click', event => {
    const value = event.target.textContent;
    if (value === 'C') {
      firstNumber = null;
      operator = null;
      secondNumber = null;
      total.textContent = '0';
    } else if (value === '+' || value === '-' || value === 'x' || value === '/') {
      operator = value;
      firstNumber = Number(total.textContent);
      total.textContent += operator;
    } else if (value === '=') {
      secondNumber = Number(total.textContent.slice(firstNumber.toString().length + 1));
      if (operator === '+') {
        total.textContent = firstNumber + secondNumber;
      } else if (operator === '-') {
        total.textContent = firstNumber - secondNumber;
      } else if (operator === 'x') {
        total.textContent = firstNumber * secondNumber;
      } else if (operator === '/') {
        total.textContent = firstNumber / secondNumber;
      }
      firstNumber = null;
      operator = null;
      secondNumber = null;
    } else {
      if (total.textContent === '0') {
        total.textContent = value;
      } else {
        total.textContent += value;
      }
    }
  });
}
}

calculator();
