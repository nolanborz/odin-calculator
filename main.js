
//make some variables for the current string/equation
let num1 = '';
let num2 = '';
let operand = '';
let previousResult = '';


//addition, subratction, multiplication, and division functions
let add = function(x, y) {
    return x + y;
};
let subract = function(x, y) {
    return x - y;
}
let multiply = function(x, y) {
    return x * y;
}
let divide = function(x, y) {
    return x / y;
}

//checks the operator and calls the appropriate function
let operate = function (value1, value2, operator) {
    switch(operator) {
        case '+': 
            return add(value1, value2);
            
        case '-':
            return subract(value1, value2);
            
        case '*':
            return (value1, value2);
            
        case '/':
            if (value2 == '0') {
                updateDisplay('You moron');
                return;
            }
            else {
            return divide(value1, value2);
            }
    }
}

let updateDisplay = (buttonText) => {
    display.textContent = buttonText;
};
let display = document.querySelector('#numberDisplay');

let buttonNodeList = document.querySelectorAll("button");

buttonNodeList.forEach(buttonNode => {
    buttonNode.addEventListener('click', () => {
        let buttonText = buttonNode.firstChild.textContent
        if (!isNaN(buttonText)) {
            if (operand === '') {
                num1 += buttonText;
                updateDisplay(num1);
            }
            else {
                num2 += buttonText;
                updateDisplay(`${num1} ${operand} ${num2}`);
            }
        }
        
        else if (buttonText === 'clear') {
            console.log('all clear');
            operand = '';
            num1 = '';
            num2 = '';
            previousResult = '';
            display.textContent = '';
            updateDisplay('');
        }
        else if (buttonText == '+' || buttonText == '-' || buttonText == '*' || buttonText == '/') {
            if (num1 == '') {
                console.log('cannot have operand first');
                return;
            }
            else if (num1 != '' && operand != '' && num2 == '') {
                console.log('cannot have 2 operators in a row');
                return;
            }
            else if (num1 != '' && operand != '' && num2 != '') {
                operate(num1, num2, operand);
                //have some work to do here to continue equation, need to return something and set result as num1
            }
            else {
                operand += buttonText;
            }
            
        }
        else if(buttonText === '=') {
            if (num1 !== '' && num2 !== '' && operand !== '') {
                let result = operate(parseFloat(num1), parseFloat(num2), operand);
                result = parseFloat(result);
                updateDisplay(result);

                previousResult = result.toString();

                num1 = previousResult;
                num2 = "";
                operand = "";
            }
        }
        
    })
})

function mouseResponseColorChange(item, index, array) {
    item.addEventListener('mousedown', () => item.style.background = 'beige');
    item.addEventListener('mouseup', () => item.style.background = 'rgb(255, 234, 227)');
};


