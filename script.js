var firstNumber;
var operation;
var secondNumber;
var result;

function operate(operation, firstNumber, secondNumber) {
    this.operation = operation;
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
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