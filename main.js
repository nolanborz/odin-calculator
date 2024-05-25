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
operate(6, 2, '/');
