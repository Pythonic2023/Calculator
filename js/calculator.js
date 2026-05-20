function add(operandOne, operandTwo){
    let result = operandOne + operandTwo;
    calculatorScreen.textContent = result;
    clearOperandsAndOperator();
}

function subtract(operandOne, operandTwo){
    let result = operandOne - operandTwo;
    calculatorScreen.textContent = result;
    clearOperandsAndOperator();
}

function multiply(operandOne, operandTwo){
    clearOperandsAndOperator();
    let result = operandOne * operandTwo;
    calculatorScreen.textContent = result;
}

function divide(operandOne, operandTwo){
    let result = operandOne / operandTwo;
    calculatorScreen.textContent = result;
    clearOperandsAndOperator();
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
    //console.log(e.target.innerText);
    const regularExpression = /[+\-x/]/;
    if(e.target.innerText.match(regularExpression)){
        operator = e.target.innerText;
        operation += operator;
        calculatorScreen.textContent = operation;
    } else if(!operator.match(regularExpression)){
        numberOneArray.push(+e.target.innerText);
        let numberOneString = numberOneArray.join("");
        numberOne = +numberOneString;
        let operationString = numberOne;
        operation = operationString;
        calculatorScreen.textContent = operation;
    } else if(e.target.innerText === "="){
        operate(numberOne, operator, numberTwo);
        clearOperandsAndOperator();
    } else{
        numberTwoArray.push(+e.target.innerText);
        let numberTwoString = numberTwoArray.join("");
        numberTwo = +numberTwoString;
        let operationString = numberTwo;
        operation = operationString;
        calculatorScreen.textContent = numberOne + operator + operation;
    }

    if(e.target.innerText === "Clear"){
        calculatorScreen.textContent = "";
        clearOperandsAndOperator();
    }

});