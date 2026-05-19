function add(operandOne, operandTwo){
    let result = operandOne + operandTwo;
    console.log(result);
    calculatorScreen.textContent = result;
}

function subtract(operandOne, operandTwo){
    let result = operandOne - operandTwo;
    console.log(result);
    calculatorScreen.textContent = result;
}

function multiply(operandOne, operandTwo){
    let result = operandOne * operandTwo;
    console.log(result);
    calculatorScreen.textContent = result;
}

function divide(operandOne, operandTwo){
    let result = operandOne / operandTwo;
    console.log(result);
    calculatorScreen.textContent = result;
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


let numberOne = null;
let operator = "";
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
    } else if(numberOne === null){
        numberOne = +e.target.innerText;
        operation += numberOne;
        calculatorScreen.textContent = operation;
    } else if(numberTwo === null){
        numberTwo = +e.target.innerText;
        operation += numberTwo;
        calculatorScreen.textContent = operation;
    }

    if(e.target.innerText === "Clear"){
        numberOne = null;
        numberTwo = null;
        operator = "";
        operation = "";
        calculatorScreen.textContent = "";
    }

    if(e.target.innerText === "="){
        operate(numberOne, operator, numberTwo);
        numberOne = null;
        numberTwo = null;
        operator = ""
    }
});