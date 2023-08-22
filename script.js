var firstNumber = "0";
var operation;
var secondNumber;
var result = "";
var firstNumberCheck = true;
var secondNumberCheck = false;
var equalsCheck = false;
var secondOperationCheck = false;

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
    if (parseFloat(firstNumber) % parseFloat(secondNumber) == 0) {
        return parseInt(firstNumber) / parseInt(secondNumber);
    }
    else {
        return (parseFloat(firstNumber) / parseFloat(secondNumber)).toFixed(3);
    }
}
function clearDisplay() {
    result = "";
    displayBar.value = result;
}

function clear() {
    clearDisplay();
    firstNumber = "0";
    secondNumber = "";
    operation = "";
    displayBar.value = "0";
    firstNumberCheck = true;
    equalsCheck = false;
    secondNumberCheck = false;
    secondOperationCheck = false;
}

numberInput.forEach(button => {
    button.addEventListener('click', (e) => {
        //console.log(e.target.textContent);
        //start/firstNum state
        if (firstNumberCheck) {
            let value = e.target.textContent;
            result += value;
            displayBar.value = result;
            firstNumber = result;
        }
        //second num state
        if (secondNumberCheck && !secondOperationCheck) {
            let value = e.target.textContent;
            result += value;
            displayBar.value = result;
            secondNumber = result;
        }

        if (secondOperationCheck) {
            console.log("second op");
            let value = e.target.textContent;
            clearDisplay();
            result += value;
            displayBar.value = result;
            secondNumber = result;
            secondOperationCheck = false;
        }

        if (equalsCheck) {
            clear();
            let value = e.target.textContent;
            result += value;
            displayBar.value = result;
            firstNumber = result;
        }
    });
});

equalsButton.addEventListener('click', () => {
    console.log(equalsButton);
    if (secondNumberCheck && !equalsCheck) {
        console.log("equals button");
        let total = operate(operation, firstNumber, secondNumber);
        displayBar.value = total;
        console.log(firstNumber);
        console.log(operation);
        console.log(secondNumber);
        firstNumber = total;
        result = total;
        equalsCheck = true;
        secondNumberCheck = false;
    }

    else {
        console.log("equals Loop");
    }
});

operationButton.forEach(button => {
    button.addEventListener('click', (e) => {
        if (secondNumberCheck) {
            console.log("operation pressed on second number");
            let total = operate(operation, firstNumber, secondNumber);
            displayBar.value = total;
            console.log("previous op: " + operation);
            operation = e.target.textContent;
            console.log("recent op: " + operation);
            firstNumber = total;
            secondNumber = "";
            result = total;
            secondOperationCheck = true;
        }

        //console.log(e.target.textContent);
        else {
            console.log(firstNumber);
            operation = e.target.textContent;
            console.log(operation);
            firstNumberCheck = false;
            secondNumberCheck = true;
            result = "";
        }

        // on equals state, when operation is pressed, go back to second number state
        if (equalsCheck) {
            equalsCheck = false;
            secondNumberCheck = true;
            secondOperationCheck = false;
        }
    });
});

clearButton.addEventListener('click', () => {
    clear();
});


