var firstNumber;
var operation;
var secondNumber;
var result;

function operate(operation, firstNumber, secondNumber) {
    this.operation = operation;
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
    if (this.operation = '+') {
        return result = add(this.firstNumber, this.secondNumber);
    }
    if (this.operation = '-') {
        return result = subtract(this.firstNumber, this.secondNumber);
    }
    if (this.operation = '*') {
        return result = multiply(this.firstNumber, this.secondNumber);
    }
    if (this.operation = '/') {
        return result = divide(this.firstNumber, this.secondNumber);
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

const first = document.querySelectorAll('.calc-button.number');
first.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(e.target.textContent);
    });
});