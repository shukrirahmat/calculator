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
    let answer;
    switch (operator) {
        case '+':
            answer = add(a,b);
            break;
        case '-':
            answer = subtract(a,b);
            break;
        case 'x':
            answer = multiply(a,b);
            break;
        case '÷':
            if (b == 0) {
                return 'NOPE';
            }
            answer = divide(a,b);
    }
    return Math.round(answer * 10000) / 10000;
}

function enterNumber(number) {
    if (newNumberInput) {
        display.textContent = "";
        newNumberInput = false;
        operatorInput = true;
    }
    if (display.textContent.length <= 9) {
        display.textContent += number;
        if (display.textContent.length > 1 && display.textContent.startsWith('0') && display.textContent.charAt(1) != '.') {
            display.textContent = display.textContent.slice(1);
        }
    }
}

function enterOperation(op) {
    if (operatorInput) {
        if (equalsInput) {
            secondNumber = Number(display.textContent);
            display.textContent = compressNumber(operate(operator, firstNumber, secondNumber));
        }
        if (display.textContent == 'NOPE') {
            operatorInput = false;
            resetOperation();
            newNumberInput = true;
            equalsInput = false;
        } else {
        firstNumber = Number(display.textContent);
        operator = op;
        newNumberInput = true;
        equalsInput = true;
        }
    }
}

function enterEquals() {
    if (equalsInput) {
        secondNumber = Number(display.textContent);
        display.textContent = compressNumber(operate(operator, firstNumber, secondNumber));
        resetOperation();
        newNumberInput = true;
        equalsInput = false;
        if (display.textContent == 'NOPE') {
            operatorInput = false;
        }
    }
}

function compressNumber(number) {
    if (number.toString().length > 9) {
        return number.toExponential(2);
    }
    return number;
}

function resetOperation() {
    firstNumber = null;
    secondNumber = null;
    operator = null;
}

function clearEntry() {
    resetOperation();
    display.textContent = '0';
    newNumberInput = false;
    operatorInput = true;
    equalsInput = false;
}

function enterDot() {
    if (display.textContent != 'NOPE' && !display.textContent.includes('.')) {
        display.textContent += '.';
    }
}

function deleteNumber() {
    if (display.textContent != 'NOPE' && !display.textContent.includes('e')) {
        if (display.textContent.length == 1) {
            display.textContent = 0;
        } else {
            display.textContent = display.textContent.slice(0,-1);
        }
    }
}

function resetButtonColor() {
    allButtons.forEach((button) => button.style.backgroundColor = "");
}

let firstNumber;
let secondNumber;
let operator;
let newNumberInput = false;
let operatorInput = true;
let equalsInput = false;

const display = document.querySelector('#display');

const allButtons = document.querySelectorAll('button');
allButtons.forEach((btn) => {
    if (!btn.classList.contains('op')) {
        btn.addEventListener('click', resetButtonColor);
    }
})

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((btn) => btn.addEventListener('click',function() {
    enterNumber(this.textContent);
}))

const operatorButtons = document.querySelectorAll('.op');
operatorButtons.forEach((btn) => btn.addEventListener('click',function() {
    resetButtonColor();
    if (operatorInput) {
        this.style.backgroundColor = 'blue';
    }
    enterOperation(this.textContent);
}))

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', enterEquals);

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearEntry);

const dotButton = document.querySelector('#dot');
dotButton.addEventListener('click', enterDot);

const deleteButton = document.querySelector('#del');
deleteButton.addEventListener('click', deleteNumber);