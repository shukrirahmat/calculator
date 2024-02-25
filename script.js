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

function operate(operator, a, b) {
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

function inputDisplay(input) {
    display.textContent += input;
}

function clearInput() {
    display.textContent = "";
    storedNumber = "";
}

let firstNumber, operator, secondNumber;
let storedNumber = "";

const display = document.querySelector('#display')

const clearEntry = document.querySelector('#clear');
clearEntry.addEventListener('click', clearInput);

const numbersButton = document.querySelectorAll('.number');
numbersButton.forEach((number) => number.addEventListener('click',function() {
    inputDisplay(this.textContent);
    storedNumber += this.textContent;
}));

const opButton = document.querySelectorAll('.op');
opButton.forEach((op) => op.addEventListener('click', 
function() {
    if (storedNumber === "") {
        firstNumber = 0;
    } else {
        firstNumber = parseInt(storedNumber);
    }
    storedNumber = "";
    operator = this.textContent;
    display.textContent += operator;
}));

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', 
function() {
    if (storedNumber === "") {
        secondNumber = 0;
    } else {
        secondNumber = parseInt(storedNumber);
    }
    storedNumber = "";
    display.textContent = operate(operator, firstNumber,secondNumber);
})


