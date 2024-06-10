
const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    console.log(button.textContent)
    display.value += button.textContent;
  });
});
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    console.log(button.textContent)
    display.value += button.textContent;
  });
});
clearButton.addEventListener('click', () => {
  display.value = '';
});
equalsButton.addEventListener('click', () => {
  try {
    const result = evaluate(display.value);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
});
function evaluate(expression) {
  const tokens = expression.split(/([+\-*\/])/).map(token => token.trim());
  let result = parseFloat(tokens[0]);
for (let i =1;i<tokens.length;i+=2) {
    const operator=tokens[i];
    const operand=parseFloat(tokens[i + 1]);
if (isNaN(operand)) {
      throw new Error('Invalid expression');
    }
 switch (operator) {
      case '+':
        result += operand;
        break;
      case '-':
        result -= operand;
        break;
      case '*':
        result *= operand;
        break;
      case '/':
        if (operand === 0) {
          throw new Error('Division by zero');
        }
        result /= operand;
        break;
      default:
        throw new Error('Invalid operator');
    }
  }
return result;
}
