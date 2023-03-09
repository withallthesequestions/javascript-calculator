// To-do: (a) implement CE button, (b) Implement negative numbers.

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
      if (operandOne !== "" && operandTwo === "") {
        operator = event.target.value;
        document.getElementsByClassName("displayWindow2")[0].innerText =
          parseFloat(operandOne) + operator;
        console.log("operator: " + operator);
      }
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

document.getElementsByClassName("displayWindow")[0].innerText = "0";
document.getElementsByClassName("displayWindow2")[0].innerText = "0";
