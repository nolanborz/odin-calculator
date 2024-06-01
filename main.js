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

//make a variable for the current string/equation
let currentEquation = '';

//addition, subratction, multiplication, and division functions
function add(value1, value2) {

    let sum = parseInt(value1) + parseInt(value2);
    numberDisplay.textContent = sum;
    currentEquation = sum;
}
function subtract(value1, value2) {
    
    return numberDisplay.textContent = value1 - value2;
}
function multiply(value1, value2) {
    
    return value1 + value2;
}
function divide(value1, value2) {
    
    return value1 / value2;
}

//checks the operator and calls the appropriate function
function operate(value1, value2, operator) {
    console.log(value2);
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
    if (operatorCheck != '+') {
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
    if (operatorCheck == '+') {
        stringCleaner();
    }
    else {
        currentEquation += oper;
    }
};

function stringBuilder(operator){
        currentEquation += operator;
        console.log("Current eqution is " + currentEquation);
};

let arr = [];
//this clears display and sends clean strings to the evaluator
function stringCleaner(){
    //currentEquation += numberDisplay.textContent;
    
    let newArr = currentEquation.split('');
    currentEquation = '';
    console.log(newArr);
    //newArr.pop();
    let operatorIndex = newArr.findIndex(adder => adder == '+');
    let arr1 = newArr.slice(0, operatorIndex);
    let arr2 = newArr.slice(operatorIndex + 1, newArr.length);
    return operatorPrep(arr1, arr2, newArr[operatorIndex]);
}

function operatorPrep(val1, val2, operator) {
    const num1 = val1.join('');
    const num2 = val2.join('');
    return operate(num1, num2, operator);
}

//clear function
function clearDisplay() {
    numberDisplay.textContent = '';
}
function clearEquation() {
    currentEquation = '';
}


function buttonResponse() {
    allButtons.forEach(mouseResponseColorChange);
    oneButton.addEventListener('click', () => { numberDisplay.textContent += '1'});
    twoButton.addEventListener('click', () => { numberDisplayUpdater('2') });
    threeButton.addEventListener('click', () => { numberDisplay.textContent += '3'});
    fourButton.addEventListener('click', () => { numberDisplay.textContent += '4'});
    fiveButton.addEventListener('click', () => { numberDisplay.textContent += '5'});
    sixButton.addEventListener('click', () => { numberDisplay.textContent += '6'});
    sevenButton.addEventListener('click', () => { numberDisplay.textContent += '7'});
    eightButton.addEventListener('click', () => { numberDisplay.textContent += '8'});
    nineButton.addEventListener('click', () => { numberDisplay.textContent += '9'});
    zeroButton.addEventListener('click', () => { numberDisplay.textContent += '0'});

    addButton.addEventListener('click', () => {operatorHandler('+')});
    subButton.addEventListener('click', () => {numberDisplay.textContent += '-'; stringBuilder()});
    divButton.addEventListener('click', () => {numberDisplay.textContent += '/'; stringBuilder()});
    multButton.addEventListener('click', () => {numberDisplay.textContent += '*'; stringBuilder()});
    equalButton.addEventListener('click', () => {stringCleaner()});
}

function mouseResponseColorChange(item, index, array) {
    item.addEventListener('mousedown', () => item.style.background = 'beige');
    item.addEventListener('mouseup', () => item.style.background = 'rgb(255, 234, 227)');
}


buttonResponse();
clearButton.addEventListener('click', () => {clearDisplay(); clearEquation();});
