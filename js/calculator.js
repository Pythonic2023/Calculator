function add(operandOne, operandTwo){
    let result = operandOne + operandTwo;
    console.log(result);
}

function subtract(operandOne, operandTwo){
    let result = operandOne - operandTwo;
    console.log(result);
}

function multiply(operandOne, operandTwo){
    let result = operandOne * operandTwo;
    console.log(result);
}

function divide(operandOne, operandTwo){
    let result = operandOne / operandTwo;
    console.log(result);
}

// Call apropriate function based on operator.
function operate(operandOne, operator, operandTwo){
    switch(operator){
        case "+":
            add(operandOne, operandTwo);
            break;
        case "-":
            subtract(operandOne, operandTwo);
            break;
        case "*":
            multiply(operandOne, operandTwo);
            break;
        case "/":
            divide(operandOne, operandTwo);
            break;
    }
}

let numberOne = +prompt('Number: ');
let operator = prompt('Operators: +,-,*,/');
let numberTwo = +prompt('Number: ');

operate(numberOne, operator, numberTwo);
