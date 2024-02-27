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

function enterNumber(number) {
    if (newNumberInput) {
        display.textContent = "";
        newNumberInput = false;
    }
    if (display.textContent.length <= 9) {
        display.textContent += number;
        if (display.textContent.length > 1 && display.textContent.startsWith('0')) {
            display.textContent = display.textContent.slice(1);
        }
    }
}

function enterOperation(op) {
    if (operatorInput) {
        firstNumber = parseInt(display.textContent);
        operator = op;
        newNumberInput = true;
        equalsInput = true;
    }
}

function enterEquals() {
    if (equalsInput) {
        secondNumber = parseInt(display.textContent);
        let answer = operate(operator, firstNumber, secondNumber);
        answer = Math.round(answer * 10000) / 10000;

        display.textContent = answer;
        resetOperation();
        newNumberInput = true;
        equalsInput = false;
    }
}

function resetOperation() {
    firstNumber = null;
    secondNumber = null;
    operator = null;
}

let firstNumber;
let secondNumber;
let operator;
let newNumberInput = false;
let operatorInput = true;
let equalsInput = false;

const display = document.querySelector('#display');

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((btn) => (btn.addEventListener('click',function() {
    enterNumber(this.textContent);
})))

const operatorButtons = document.querySelectorAll('.op');
operatorButtons.forEach((btn) => btn.addEventListener('click',function() {
    enterOperation(this.textContent);
}))

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', enterEquals);