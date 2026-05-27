function add(operandOne, operandTwo){
    clearOperandsAndOperator(clearNumberOne = false);
    if(String(operandOne).match(/\./) || String(operandTwo).match(/\./)){
        let floatingNumber = parseFloat(operandOne + operandTwo).toFixed(2);
        calculatorScreen.textContent = floatingNumber;
        numberOne = floatingNumber;
    } else {
        let result = operandOne + operandTwo;
        numberOne = result;
        roundNumber(result);
    }
}

function subtract(operandOne, operandTwo){
    clearOperandsAndOperator(clearNumberOne = false);
     if(String(operandOne).match(/\./) || String(operandTwo).match(/\./)){
        let floatingNumber = parseFloat(operandOne - operandTwo).toFixed(2);
        calculatorScreen.textContent = floatingNumber;
        numberOne = floatingNumber;
    } else {
        let result = operandOne - operandTwo;
        numberOne = result;
        roundNumber(result);
    }
}

function multiply(operandOne, operandTwo){
    clearOperandsAndOperator(clearNumberOne = false);
    if(String(operandOne).match(/\./) || String(operandTwo).match(/\./)){
        let floatingNumber = parseFloat(operandOne * operandTwo).toFixed(2);
        calculatorScreen.textContent = floatingNumber;
        numberOne = floatingNumber;
    } else {
        let result = operandOne * operandTwo;
        numberOne = result;
        roundNumber(result);
    }
}

function divide(operandOne, operandTwo){
    clearOperandsAndOperator(clearNumberOne = false);
    if(operandOne === 0 || operandTwo === 0){
        calculatorScreen.textContent = "Can't divide by zero.";
    } else if(String(operandOne).match(/\./) || String(operandTwo).match(/\./)){
        let floatingNumber = parseFloat(operandOne / operandTwo).toFixed(2);
        calculatorScreen.textContent = floatingNumber;
        numberOne = floatingNumber;
    } else {
        let result = operandOne / operandTwo;
        numberOne = result;
        roundNumber(result);
    }
}

function roundNumber(number){
    let numberString = String(number);
    let decimalRegex = /\.(\d)/;
    if(numberString.match(decimalRegex)){
        if(numberString.match(decimalRegex)[1] >= 5){
            let roundedUpNumber = Math.round(number);
            calculatorScreen.textContent = roundedUpNumber + operator;
        } else{
            let roundedDownNumber = Math.floor(number);
            calculatorScreen.textContent = roundedDownNumber + operator;
        }
    } else {
        calculatorScreen.textContent = number + operator;
    }
}

function clearOperandsAndOperator(clearNumberOne){
    if(clearNumberOne === false){
        numberOneArray = [];
        operator = "";
        numberTwoArray = [];
        numberTwo = null;
        operation = "";
    } else {
        numberOneArray = [];
        numberOne = null;
        operator = "";
        numberTwoArray = [];
        numberTwo = null;
        operation = "";
    }
}

function deleteLastEntry(){
    if(numberTwo === "" && operator != ""){
        operator = "";
        calculatorScreen.textContent = numberOne;
    } else if(numberOne != null && operator.length == 0){
        numberOne = numberOne.slice(0, -1);
        numberOneArray = numberOneArray.slice(0, -1);
        calculatorScreen.textContent = numberOne;
    } else {
        numberTwo = numberTwo.slice(0, -1);
        numberTwoArray = numberTwoArray.slice(0, -1);
        calculatorScreen.textContent = numberOne + operator + numberTwo;
    }
}

function operate(operandOne, operator, operandTwo){
    if(operandOne === null || operandTwo === null){
        calculatorScreen.textContent = "Operand null";
    } else {
        switch(operator){
            case "+":
                add(+operandOne, +operandTwo);
                break;
            case "-":
                subtract(+operandOne, +operandTwo);
                break;
            case "x":
                multiply(+operandOne, +operandTwo);
                break;
            case "/":
                divide(+operandOne, +operandTwo);
                break;
        }    
    }
}

function assignOperator(op){
    operator = op;
    operation = numberOne + operator; 
    calculatorScreen.textContent = "";
    calculatorScreen.textContent =  operation;
}

function assignOperandOne(){
    let numberOneString = numberOneArray.join("");
    numberOne = numberOneString;
    let operationString = numberOne;
    operation = operationString;
    calculatorScreen.textContent = operation;
}

function assignOperandTwo(){
    let numberTwoString = numberTwoArray.join("");
    numberTwo = numberTwoString;
    let operationString = numberTwo;
    operation = operationString;
    calculatorScreen.textContent = numberOne + operator + operation;
}

function handleClick(e){
    const operatorExpression = /[+\-x\/]/;
    const decimalExpression = /\./;

    if(e.target.innerText.match(operatorExpression) && operator == ""){
        operator = e.target.innerText;
        assignOperator(operator);
    } else if(e.target.innerText.match(operatorExpression) && operator.match(operatorExpression)){
        operate(numberOne, operator, numberTwo);
        operator = e.target.innerText;
        calculatorScreen.textContent = numberOne + operator;
    } else if(e.target.innerText == "Delete"){
        deleteLastEntry();
    } else if(!operator.match(operatorExpression) && !e.target.innerText.match(decimalExpression)){
        numberOneArray.push(e.target.innerText);
        assignOperandOne();
    } else if(e.target.innerText === "="){
        operation = "";
        operate(numberOne, operator, numberTwo);  
    } else if(e.target.innerText == "."){
        if(!operator.match(operatorExpression) && !numberOne.match(decimalExpression)){
            numberOneArray.push('.');
            assignOperandOne();
        } else if(numberTwo != null && !numberTwo.match(decimalExpression)) {
            numberTwoArray.push('.');
            assignOperandTwo();
        }
    } else{
        numberTwoArray.push(e.target.innerText);
        assignOperandTwo();
    }

    if(e.target.innerText === "Clear"){
        calculatorScreen.textContent = "";
        clearOperandsAndOperator();
    }

    
}

let numberOneArray = [];
let numberOne = null;
let operator = "";
let numberTwoArray = [];
let numberTwo = null;
let operation = "";

const calculatorScreen = document.querySelector('.calculator-text');
const calculator = document.querySelector(".calculator-body");
calculator.addEventListener("click", e => handleClick(e)); 