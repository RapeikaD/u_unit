function calculate(inputValue) {
  const expression = /\+|\-|\*|\//;
  const operation = inputValue.match(expression);

  const numbers = inputValue.split(operation);
  const numberA = parseInt(numbers[0]);
  const numberB = parseInt(numbers[1]);

  if (Number.isNaN(numberA) || Number.isNaN(numberB) || operation == null) {
    updateResult('Operation is not recognized');
  }

  let result;
  const calculator = new Calculator();
  calculator.add(numberA);

  switch (operation[0]) {
    case '+': result = calculator.add(numberB);
      break;
    case '-': result = calculator.subtract(numberB);
      break;
    case '*': result = calculator.multiply(numberB);
      break;
    case '/': result = calculator.divide(numberB);
      break;
  }

  updateResult(result);
  //document.getElementById('result').innerHTML = result;
};

function updateResult(result) {
  const element = document.getElementById('result');

  if (element) {
    element.innerText = result;
  }
};
