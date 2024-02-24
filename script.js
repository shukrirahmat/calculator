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
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
    }
}

function inputDisplay(input) {
    const display = document.querySelector('#display')
    display.textContent += input;
}

function clearInput() {
    const display = document.querySelector('#display')
    display.textContent = "";
}

const clearEntry = document.querySelector('#clear');
clearEntry.addEventListener('click', clearInput);

const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => number.addEventListener('click',function() {
    inputDisplay(this.textContent);
}));
    
let firstNumber, operator, secondNumber;

