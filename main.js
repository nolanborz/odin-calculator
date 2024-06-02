//initiate selectors
const numberDisplay = document.getElementById('numberDisplay');
const allButtons = document.querySelectorAll("button");

const addButton = document.getElementById("add");
const subButton = document.getElementById('minus');
const multButton = document.getElementById('multiply');
const divButton = document.getElementById('divide');
const equalButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');
//number selectors
const nineButton = document.getElementById('nine');
const eightButton = document.getElementById('eight');
const sevenButton = document.getElementById('seven');
const sixButton = document.getElementById('six');
const fiveButton = document.getElementById('five');
const fourButton = document.getElementById('four');
const threeButton = document.getElementById('three');
const twoButton = document.getElementById('two');
const oneButton = document.getElementById('one');
const zeroButton = document.getElementById('zero');

//make some variables for the current string/equation
let currentEquation = '';
let arr = [];

//addition, subratction, multiplication, and division functions
function add(value1, value2) {
    let sum = parseInt(value1) + parseInt(value2);
    numberDisplay.textContent = sum;
    currentEquation = sum;
};
function subtract(value1, value2) {
    let difference = parseInt(value1) - parseInt(value2);
    numberDisplay.textContent = difference;
    currentEquation = difference;
};
function multiply(value1, value2) {
    let product = parseInt(value1) * parseInt(value2);
    numberDisplay.textContent = product;
    currentEquation = product;
};
function divide(value1, value2) {
    let quotient = Math.round((parseInt(value1) / parseInt(value2) * 100)) / 100;
    numberDisplay.textContent = quotient;
    currentEquation = quotient;
};

//checks the operator and calls the appropriate function
function operate(value1, value2, operator) {
    if (operator === '+') {
        return add(value1, value2);
    };
    if (operator === '-') {
        return subtract(value1, value2);
    };
    if (operator === '*') {
        return multiply(value1, value2);
    };
    if (operator === '/') {
        return divide(value1, value2);
    }
};

function numberDisplayUpdater(num) {
    let operatorCheck = currentEquation[currentEquation.length - 1];
    if (operatorCheck != '+' && operatorCheck != '-') {
        numberDisplay.textContent += (num);
        currentEquation += num;
        
    }
    else {
        clearDisplay();
        numberDisplay.textContent += (num);
        currentEquation += num;
    }
};

function operatorHandler(oper) {
    let operatorCheck = currentEquation[currentEquation.length - 1];
    if (operatorCheck == '+' || operatorCheck == '-') {
        stringCleaner();
    }
    else {
        currentEquation += oper;
    }
};

function stringCleaner(){
    let newArr = currentEquation.split('');
    currentEquation = '';
    if (newArr.includes('+')) {
        return executePrep('+', newArr);
    }
    else if (newArr.includes('-')) {
        return executePrep('-', newArr);
    }
    else if (newArr.includes('*')) {
        return executePrep('*', newArr);
    }
    else if (newArr.includes('/')) {
        return executePrep('/', newArr);
    }
};

function executePrep(oper, arr) {  
    let operatorIndex = arr.findIndex(adder => adder == oper);
    let arr1 = arr.slice(0, operatorIndex);
    let arr2 = arr.slice(operatorIndex + 1, arr.length);
    return operatorPrep(arr1, arr2, arr[operatorIndex]);
};

function operatorPrep(val1, val2, operator) {
    const num1 = val1.join('');
    const num2 = val2.join('');
    return operate(num1, num2, operator);
};

//clear function
function clearDisplay() {
    numberDisplay.textContent = '';
};
function clearEquation() {
    currentEquation = '';
};

function buttonResponse() {
    allButtons.forEach(mouseResponseColorChange);
    oneButton.addEventListener('click', () => { numberDisplayUpdater('1')});
    twoButton.addEventListener('click', () => { numberDisplayUpdater('2') });
    threeButton.addEventListener('click', () => { numberDisplayUpdater('3') });
    fourButton.addEventListener('click', () => { numberDisplayUpdater('4') });
    fiveButton.addEventListener('click', () => { numberDisplayUpdater('5') });
    sixButton.addEventListener('click', () => { numberDisplayUpdater('6')});
    sevenButton.addEventListener('click', () => { numberDisplayUpdater('7')});
    eightButton.addEventListener('click', () => { numberDisplayUpdater('8')});
    nineButton.addEventListener('click', () => { numberDisplayUpdater('9')});
    zeroButton.addEventListener('click', () => { numberDisplayUpdater('0')});

    addButton.addEventListener('click', () => {operatorHandler('+')});
    subButton.addEventListener('click', () => {operatorHandler('-')});
    divButton.addEventListener('click', () => {operatorHandler('/')});
    multButton.addEventListener('click', () => {operatorHandler('*')});
    equalButton.addEventListener('click', () => {stringCleaner()});
};

function mouseResponseColorChange(item, index, array) {
    item.addEventListener('mousedown', () => item.style.background = 'beige');
    item.addEventListener('mouseup', () => item.style.background = 'rgb(255, 234, 227)');
};


buttonResponse();
clearButton.addEventListener('click', () => {clearDisplay(); clearEquation();});
