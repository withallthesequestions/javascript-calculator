const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");
const acButton = document.querySelectorAll(".ac");
const ceButton = document.querySelectorAll(".ce");

let operandOne = "";
let operandTwo = "";
let operator = "";
let displayOne = "";
let displayTwo = "";
let result = "";

calculator();

function calculator() {
  setOperandOne();
  setOperator();
  setOperandTwo();
  getResult();
}

function setOperandOne() {
  numberButton.forEach((button) => {
    button.addEventListener("click", (event) => {
      // Step 1: If operandOne is empty, set operandOne
      if (operator === "") {
        operandOne += event.target.value;
        document.getElementsByClassName("displayWindow")[0].innerText =
          parseFloat(operandOne);
        console.log("O1: " + operandOne);
      } else return;
    });
  });
}

function setOperandTwo() {
  numberButton.forEach((button) => {
    button.addEventListener("click", (event) => {
      // Step 3: If operator is set, fill operandTwo
      if (operator !== "") {
        operandTwo += event.target.value;
        document.getElementsByClassName("displayWindow")[0].innerText =
          parseFloat(operandTwo);
        console.log("O2: " + operandTwo);
      } else return;
    });
  });
}

function setOperator() {
  operatorButton.forEach((button) => {
    button.addEventListener("click", (event) => {
      // Step 2: If operandOne is set, and operandTwo is empty, set Operator
      if (operandOne !== "" && operandTwo === "") {
        operator = event.target.value;
        document.getElementsByClassName("displayWindow2")[0].innerText =
          operandOne + operator;
        /* document.getElementsByClassName("displayWindow")[0].innerText = "0"; */
        console.log("operator: " + operator);
      }
      // Step 4: If operandTwo is set, display `=` and give result.
      if (operandTwo !== "") {
        document.getElementsByClassName("displayWindow2")[0].innerText +=
          operandTwo + event.target.value;
        console.log("step4");
      }
    });
  });
}

function getResult() {
  operatorButton.forEach((button) => {
    button.addEventListener("click", (event) => {
      if (operandTwo !== "") {
        switch (operator) {
          case "+":
            result = eval(parseFloat(operandOne) + parseFloat(operandTwo));
            document.getElementsByClassName("displayWindow")[0].innerText =
              result;
            // Step 5: Automatically set result as operandOne, and clear operator and operandTwo
            operandOne = result;
            operandTwo = "";
            console.log("res: " + result);
            break;
          case "-":
            result = eval(parseFloat(operandOne) - parseFloat(operandTwo));
            document.getElementsByClassName("displayWindow")[0].innerText =
              result;
            operandOne = result;
            operandTwo = "";
            console.log("res: " + result);
            break;
          case "*":
            result = eval(parseFloat(operandOne) * parseFloat(operandTwo));
            document.getElementsByClassName("displayWindow")[0].innerText =
              result;
            operandOne = result;
            operandTwo = "";
            console.log(result);
            break;
          case "/":
            result = eval(parseFloat(operandOne) / parseFloat(operandTwo));
            document.getElementsByClassName("displayWindow")[0].innerText =
              result;
            operandOne = result;
            operandTwo = "";
            console.log(result);
            break;
          default:
            return;
        }
      }
    });
  });
}

/* Done */

acButton.forEach((button) => {
  button.addEventListener("click", () => {
    operandOne = "";
    operandTwo = "";
    operator = "";
    document.getElementsByClassName("displayWindow")[0].innerText = "0";
    document.getElementsByClassName("displayWindow2")[0].innerText = "0";
  });
});

ceButton.forEach((button) => {
  button.addEventListener("click", () => {
    if (operandOne !== "" && operandTwo !== "") {
      operandTwo = "";
      // update the display to reflect the result of pressing CE.
    } else if (operandOne !== "" && operandTwo === "") {
      operandOne = "";
    }
  });
});

// Display function
document.getElementsByClassName("displayWindow")[0].innerText = "0";
document.getElementsByClassName("displayWindow2")[0].innerText = "0";
