/* To-do:
 * Implement CE (clear entry) button.
 * Bug: Calculations stop working when a string ends in double-operators (eg, 3++) */

/* b) Only buttons can be clicked (This is done by making sure only buttons are covered by button classes (mathValues = all numbers and operators, button value "=" = the equals button, which evaluates the string, value = "AC", and value = "CE")
   f) After you're done running an eval, you want your next click to start a brand-new operation. */

// Set button classes below
// For all buttons 0-9 & ., assign class integer.
// For all operator buttons, assign class operator.

// For equals, assign equal
// For function button, assign function.

let inputString = "";
let displayString = "";
let lastButtonPressed = "";

// Event-listener, listening for button-clicks
document.addEventListener("click", function (event) {
  lastButtonPressed = event.target.value;
  // Filling in the inputString with your math equation
  // Note: The preferred condition is event.target.value, but we want to pick out a whole class of math buttons, so we're going with "event.target.classList.contains("mathValues")" instead.
  if (event.target.classList.contains("mathValues")) {
    fillInputString(event);
  }
  // Bug: When you press "=" twice, the calculation outputs "undefined". This is because the inputString is emptied. Fix: Only calculate if inputString is not empty (ie, && inputString !== "").
  if (event.target.value === "=" && inputString !== "") {
    calculate();
  }
  if (event.target.value === "AC") {
    clearEverything();
  }
});

// Fill inputString Function
function fillInputString(event) {
  inputString += event.target.value;
  displayString = inputString;
  document.getElementsByClassName("displayWindow")[0].innerText = displayString;
}

// Equals-Button Function
function calculate() {
  //1.f.
  // The following three lines let you smoothly transition into a new math calculation after the last result is output. (1) The displayString variable lets you keep a value in the window while working on other buttons. (2) The inputString lets you perform subsequent calculations on the result of the original operation.
  displayString = eval(inputString);
  inputString = eval(inputString);
  document.getElementsByClassName("displayWindow")[0].innerText = displayString;
}

// AC-Button Function
function clearEverything() {
  displayString = "0";
  inputString = "";
  lastButtonPressed = "";
  document.getElementsByClassName("displayWindow")[0].innerText = displayString;
}
