var firstNumber;
var operation;
var secondNumber;
var result = "";

const displayBar = document.getElementById('display');
const firstInput = document.querySelectorAll('.calc-button.number');
const clearButton = document.querySelector('.calc-button.clear');

function operate(operation, firstNumber, secondNumber) {
    if (operation = '+') {
        return result = add(firstNumber, secondNumber);
    }
    if (operation = '-') {
        return result = subtract(firstNumber, secondNumber);
    }
    if (operation = '*') {
        return result = multiply(firstNumber, secondNumber);
    }
    if (operation = '/') {
        return result = divide(firstNumber, secondNumber);
    }
}
function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}
function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}
function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}
function clearDisplay() {
    result = "";
    displayBar.value = result;
}

firstInput.forEach(button => {
    button.addEventListener('click', (e) => {
        //console.log(e.target.textContent);
        let value = e.target.textContent;
        result += value;
        displayBar.value = result;
    });
});
clearButton.addEventListener('click', () => {
    clearDisplay();
});
