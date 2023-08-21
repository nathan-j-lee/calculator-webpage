var firstNumber;
var operation;
var secondNumber;
var result = "";
var firstNumberCheck = true;
var operationCheck = false;
var secondNumberCheck = false;

const displayBar = document.getElementById('display');
const firstInput = document.querySelectorAll('.calc-button.number');
const secondInput = document.querySelectorAll('.calc-button.number');
const operationButton = document.querySelectorAll('.calc-button.operation');
const clearButton = document.querySelector('.calc-button.clear');
const equalsButton = document.querySelector('.calc-button.equals');

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
        firstNumber = result;
    });
});

// secondInput.forEach(button => {
//     button.addEventListener('click', (e) => {
//         //console.log(e.target.textContent);
//         let value = e.target.textContent;
//         result += value;
//         displayBar.value = result;
//     });
// });

equalsButton.addEventListener('click', () => {
    //console.log(equalsButton);
    if (secondNumberCheck) {
        secondNumber = displayBar.value;
        secondNumberCheck = false;
        firstNumberCheck = true;
    }
});

operationButton.forEach(button => {
    button.addEventListener('click', (e) => {
        //console.log(e.target.textContent);
        console.log(firstNumber);
        operation = e.target.textContent;
        console.log(operation);
    });
});

clearButton.addEventListener('click', () => {
    clearDisplay();
});
