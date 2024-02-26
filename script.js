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
    if (clearNext === true) {
        clearInput();
        clearNext = false;
    }
    display.textContent += input;
}

function clearInput() {
    display.textContent = "";
}

let firstNumber, operator, secondNumber;
let clearNext = true;

const display = document.querySelector('#display')

const clearEntry = document.querySelector('#clear');
clearEntry.addEventListener('click', clearInput);

const numbersButton = document.querySelectorAll('.number');
numbersButton.forEach((number) => number.addEventListener('click',function() {
    inputDisplay(this.textContent);
}));

const opButton = document.querySelectorAll('.op');
opButton.forEach((op) => op.addEventListener('click', 
function() {
    if (display.textContent === "") {
        firstNumber = 0;
    } else {
        firstNumber = parseInt(display.textContent);
    }
    operator = this.textContent;
    clearNext = true;
}));

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', 
function() {
    if (display.textContent === "") {
        secondNumber = 0;
    } else {
        secondNumber = parseInt(display.textContent);
    }
    display.textContent = operate(operator, firstNumber,secondNumber);
    clearNext = true;
})


