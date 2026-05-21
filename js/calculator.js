function add(operandOne, operandTwo){
    clearOperandsAndOperator();
    let result = operandOne + operandTwo;
    calculatorScreen.textContent = result;
    numberOne = result;
}

function subtract(operandOne, operandTwo){
    clearOperandsAndOperator();
    let result = operandOne - operandTwo;
    calculatorScreen.textContent = result;
    numberOne = result;
}

function multiply(operandOne, operandTwo){
    clearOperandsAndOperator();
    let result = operandOne * operandTwo;
    calculatorScreen.textContent = result;
    numberOne = result;
}

function divide(operandOne, operandTwo){
    clearOperandsAndOperator();
    let result = operandOne / operandTwo;
    calculatorScreen.textContent = result;
    numberOne = result;
}

// Gets called by above function after result is shown in calculator. It clears our variables for the next operation.
function clearOperandsAndOperator(){
    numberOneArray = [];
    numberOne = null;
    operator = "";
    numberTwoArray = [];
    numberTwo = null;
    operation = "";
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
        case "x":
            multiply(operandOne, operandTwo);
            break;
        case "/":
            divide(operandOne, operandTwo);
            break;
    }
}

function assignOperator(operator){
    operation = numberOne + operator; 
    calculatorScreen.textContent = "";
    calculatorScreen.textContent =  operation;
}

function assignOperandOne(){
    let numberOneString = numberOneArray.join("");
    numberOne = +numberOneString;
    let operationString = numberOne;
    operation = operationString;
    calculatorScreen.textContent = operation;
}

function assignOperandTwo(){
    let numberTwoString = numberTwoArray.join("");
    numberTwo = +numberTwoString;
    let operationString = numberTwo;
    operation = operationString;
    calculatorScreen.textContent = numberOne + operator + operation;
}

let numberOneArray = [];
let numberOne = null;
let operator = "";
let numberTwoArray = [];
let numberTwo = null;
let operation = "";

// Event listeners
const calculatorScreen = document.querySelector('.calculator-text');
const calculator = document.querySelector(".calculator-body");
calculator.addEventListener("click", (e) => {
    const regularExpression = /[+\-x/]/;
    if(e.target.innerText.match(regularExpression)){
        operator = e.target.innerText;
       assignOperator(operator);
    } else if(!operator.match(regularExpression)){
        numberOneArray.push(+e.target.innerText);
        assignOperandOne();
    } else if(e.target.innerText === "="){
        operation = "";
        calculatorScreen.textContent = operation;
        operate(numberOne, operator, numberTwo);
    } else{
        numberTwoArray.push(+e.target.innerText);
        assignOperandTwo();
    }

    if(e.target.innerText === "Clear"){
        calculatorScreen.textContent = "";
        clearOperandsAndOperator();
    }

});