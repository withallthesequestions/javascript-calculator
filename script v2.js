/* To-do (a) Implement CE button. (b) After you're done running an eval, you want your next click to start a brand-new operation. (c) use parseFloat() to eliminate duplicate zeroes and decimals.
 */

let operandOne = "";
let operandTwo = "";
let operator = "";
let displayOne = "";
let displayTwo = "";
let result = "";

const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");
const acFunctionButton = document.querySelectorAll(".ac");
const ceFunctionButton = document.querySelectorAll(".ce");

numberButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (operator === "") {
      defineOperandOne(event.target.value);
    } else {
      defineOperandTwo(event.target.value);
    }
  });
});

operatorButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (operandOne !== "" && operandTwo == "") {
      // send operandOne and operator to displayWindow2
    } else if (operandOne !== "" && operandTwo !== "") {
      //evaluate o1 and o2, push the output to o1, and send o1 and operator to display window 2
    } else {
      return;
    }
    operator = event.target.value;
    console.log("op: " + operator);
  });
});

function defineOperandOne(number) {
  operandOne += number;
  // document.getElementsByClassName("displayWindow")[0].innerText = operandOne;
  console.log("o1: " + operandOne);
}

function defineOperandTwo(number) {
  operandTwo += number;
  // document.getElementsByClassName("displayWindow")[0].innerText = operandTwo;
  console.log("o2: " + operandTwo);
}

acFunctionButton.forEach((button) => {
  button.addEventListener("click", () => {
    displayString = "0";
    operandOne = "";
    lastButtonPressed = "";
    document.getElementsByClassName("displayWindow")[0].innerText =
      displayString;
  });
});

ceFunctionButton.forEach((button) => {
  // Fill in after specifying operands
  button.addEventListener("click", () => {
    // If operandTwo is empty, clear operandOne
    // If operand
  });
});

// Display function

/* for (let button of collectionOfButtons) {
  button.addEventListener("click", function (event) {
    lastButtonPressed = event.target.value;

    // Filling in operandOne with your math equation
    if (event.target.classList.contains("integer")) {
      // The preferred condition is `event.target.value`, but we want to pick out a whole class of number-buttons, hence `event.target.classList.contains("mathValues")`.
      defineOperand(event);
    }
    // Bug: When you press "=" twice, the calculation outputs "undefined". This is because the operand is emptied. Fix: Only calculate if operand is not empty (ie, && operand !== "").
    if (event.target.value === "=" && operandOne !== "") {
      calculate();
    }
    if (event.target.value === "AC") {
      clearEverything();
    }
  });


} */

// Select Operator

function selectOperator(operator) {
  // operandOne, operator, operandTwo
}

// Equals-Button Function
function calculate() {
  //1.f.
  // The following three lines let you smoothly transition into a new math calculation after the last result is output. (1) The displayString variable lets you keep a value in the window while working on other buttons. (2) The operand lets you perform subsequent calculations on the result of the original operation.
  displayString = eval(operand);
  operandOne = eval(operandOne);
  document.getElementsByClassName("displayWindow")[0].innerText = displayString;
}
