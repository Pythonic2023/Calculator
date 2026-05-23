function add(operandOne, operandTwo){
    clearOperandsAndOperator();
    let result = operandOne + operandTwo;
    //calculatorScreen.textContent = result;
    numberOne = result;
    roundBigNumber(result);
}

function subtract(operandOne, operandTwo){
    clearOperandsAndOperator();
    let result = operandOne - operandTwo;
    //calculatorScreen.textContent = result;
    numberOne = result;
    roundBigNumber(result);
}

function multiply(operandOne, operandTwo){
    clearOperandsAndOperator();
    let result = operandOne * operandTwo;
    //calculatorScreen.textContent = result;
    numberOne = result;
    roundBigNumber(result);
}

function divide(operandOne, operandTwo){
    clearOperandsAndOperator();
    if(operandOne === 0 || operandTwo === 0){
        calculatorScreen.textContent = "Can't divide by zero.";
    } else {
        let result = operandOne / operandTwo;
        //calculatorScreen.textContent = result;
        numberOne = result;
        roundBigNumber(result);
    }
}

// New
function roundBigNumber(number){
    let numberString = String(number);
    let decimalRegex = /\.(\d)/;
    if(numberString.match(decimalRegex)){
        if(numberString.match(decimalRegex)[1] >= 5){
            let roundedUpNumber = Math.round(number);
            calculatorScreen.textContent = roundedUpNumber;
        } else{
            let roundedDownNumber = Math.floor(number);
            calculatorScreen.textContent = roundedDownNumber;
        }
    } else {
        calculatorScreen.textContent = number;
    }
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
    console.log(`Operand one: ${operandOne}`);
    console.log(`Operand two: ${operandTwo}`);
    if(operandOne === null || operandTwo === null){
        calculatorScreen.textContent = "Operand null";
    } else {
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