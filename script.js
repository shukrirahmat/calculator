function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, aStr, bStr) {
    a = parseInt(aStr);
    b = parseInt(bStr);
    switch (operator) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case 'x':
            return multiply(a,b);
        case '÷':
            return divide(a,b);
    }
}

function updateInputDisplay(input) {
    if (waitingForNextNumber) {
        updateOperationDisplay();
        inputDisplay.textContent = "";
        waitingForNextNumber = false;
    }
    inputDisplay.textContent += input;
    if (inputDisplay.textContent.startsWith('0')) {
        inputDisplay.textContent = inputDisplay.textContent.slice(1);
    }
}

function updateOperationDisplay() {
    operationDisplay.textContent = firstNumber + operator + secondNumber;
}

function clearInput() {
   inputDisplay.textContent = '0';
   clearOperation();
   updateOperationDisplay();
}

function clearOperation() {
    firstNumber = "";
    operator = "";
    secondNumber = "";
}

let firstNumber = "";
let operator = "";
let secondNumber = "";
let waitingForNextNumber = false;

const inputDisplay = document.querySelector('#inputDisplay');
const operationDisplay = document.querySelector('#opDisplay');

const clearEntry = document.querySelector('#clear');
clearEntry.addEventListener('click', clearInput);

const numbersButton = document.querySelectorAll('.number');
numbersButton.forEach((number) => number.addEventListener('click',function() {
    updateInputDisplay(this.textContent);
}));

const opButton = document.querySelectorAll('.op');
opButton.forEach((op) => op.addEventListener('click', 
function() {
    if (!waitingForNextNumber) {
        if (firstNumber == "") {
            firstNumber = inputDisplay.textContent;
            operator = this.textContent;
        } else {
            secondNumber = inputDisplay.textContent;
            firstNumber = operate(operator, firstNumber, secondNumber);
            operator = this.textContent;
            secondNumber = "";
        }
        updateOperationDisplay();
        waitingForNextNumber = true;
    }
}));

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', 
function() {
    if (!waitingForNextNumber) {
        if (operator !== "") {
            secondNumber = inputDisplay.textContent;
            inputDisplay.textContent = operate(operator, firstNumber, secondNumber);
        }
        updateOperationDisplay();
        clearOperation();
        waitingForNextNumber = true;
    }
})


