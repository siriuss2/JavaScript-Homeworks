const arr = [2, 4, 5];

const numbersList = document.getElementById('numbers');
const sumElement = document.getElementById('sum');
const equationElement = document.getElementById('equation');

for (const num of arr) {
  const listItem = document.createElement('li');
  listItem.textContent = num;
  numbersList.appendChild(listItem);
}

const sum = arr.reduce((sum, num) => sum + num, 0);
sumElement.textContent = `Sum: ${sum}`;

equationElement.textContent = `Equation: ${arr.join(' + ')} = ${sum}`;
