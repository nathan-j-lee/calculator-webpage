var firstNumber = 0;
var operation;
var secondNumber;
var result = "";
var firstNumberCheck = true;
var secondNumberCheck = false;

const displayBar = document.getElementById('display');
const numberInput = document.querySelectorAll('.calc-button.number');
const operationButton = document.querySelectorAll('.calc-button.operation');
const clearButton = document.querySelector('.calc-button.clear');
const equalsButton = document.querySelector('.calc-button.equals');

function operate(operation, firstNumber, secondNumber) {
    if (operation == '+') {
        return result = add(firstNumber, secondNumber);
    }
    if (operation == '-') {
        return result = subtract(firstNumber, secondNumber);
    }
    if (operation == '*') {
        return result = multiply(firstNumber, secondNumber);
    }
    if (operation == '/') {
        return result = divide(firstNumber, secondNumber);
    }
}
function add(firstNumber, secondNumber) {
    console.log("add");
    return parseInt(firstNumber) + parseInt(secondNumber);
}
function subtract(firstNumber, secondNumber) {
    console.log("sub");
    return parseInt(firstNumber) - parseInt(secondNumber);
}
function multiply(firstNumber, secondNumber) {
    console.log("mult");
    return parseInt(firstNumber) * parseInt(secondNumber);
}
function divide(firstNumber, secondNumber) {
    console.log("div");
    return (parseFloat(firstNumber) / parseFloat(secondNumber)).toFixed(3);
}
function clearDisplay() {
    result = "";
    displayBar.value = result;
}

numberInput.forEach(button => {
    button.addEventListener('click', (e) => {
        //console.log(e.target.textContent);
        if (firstNumberCheck) {
            let value = e.target.textContent;
            result += value;
            displayBar.value = result;
            firstNumber = result;
        }
        if (secondNumberCheck) {
            let value = e.target.textContent;
            result += value;
            displayBar.value = result;
            secondNumber = result;
        }
    });
});

equalsButton.addEventListener('click', () => {
    console.log(equalsButton);
    if (secondNumberCheck) {
        console.log("equals button");
        clearDisplay();
        let total = operate(operation, firstNumber, secondNumber);
        displayBar.value = total;
        console.log(firstNumber);
        console.log(operation);
        console.log(secondNumber);
        firstNumber = total;
        result = total;
    }
});

operationButton.forEach(button => {
    button.addEventListener('click', (e) => {
        //console.log(e.target.textContent);
        console.log(firstNumber);
        operation = e.target.textContent;
        console.log(operation);
        firstNumberCheck = false;
        secondNumberCheck = true;
        result = "";
    });
});

clearButton.addEventListener('click', () => {
    clearDisplay();
});
