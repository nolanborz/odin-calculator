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

//addition, subratction, multiplication, and division functions
function add(value1, value2) {

    return value1 + value2;
}
function subtract(value1, value2) {
    
    return value1 - value2;
}
function multiply(value1, value2) {
    
    return value1 + value2;
}
function divide(value1, value2) {
    
    return value1 / value2;
}

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
    };
}

//clear function
function clearDisplay() {
    numberDisplay.textContent = '';
}


function buttonResponse() {
    allButtons.forEach(mouseResponseColorChange);
    oneButton.addEventListener('click', () => {
        
        numberDisplay.textContent += '1'});
}

function mouseResponseColorChange(item, index, array) {
    item.addEventListener('mousedown', () => item.style.background = 'beige');
    item.addEventListener('mouseup', () => item.style.background = 'rgb(255, 234, 227)');
}


buttonResponse();
clearButton.addEventListener('click', () => clearDisplay());
