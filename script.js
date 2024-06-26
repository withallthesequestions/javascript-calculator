const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const acButton = document.querySelectorAll('.ac');
const ceButton = document.querySelectorAll('.ce');

// Note: undefined = variable is declared but not yet assigned a value.
// null = an assignment value.

let operandOne = '';
let operandTwo = '';
let operator = '';
let displayOne = '';
let displayTwo = '';
let result = '';

/* Basic calculation operation
 * [Setting first operand [Set + or - [Display big]] [Set first operand [Display big] ]
 * [Set operator 1] [Display all to small.]
 * [Setting second operand [Set second operator [Display it]] [Set second operand [Display it] ]
 * [Set operator 2] [Calculate [Math: Display Small] [Answer: Display Big]]

 1. Listen for first operator, set it to either positive or negative. TODO
 2. Listen for first operand
 3. Set first operand once operator is pressed.
 4. Listen for second operand or equals-side. 

BIG CHALLENGE: How to set the event Listener + button-type.
 */

// What does CE do? It only clears the most recent input.

setOperandOne();
setOperator();
setOperandTwo();
getResult();

// for each number, onClick, if there's no operator

function setOperandOne() {
	numberButton.forEach((button) => {
		button.addEventListener('click', (event) => {
			if (operator === '') {
				operandOne += event.target.value;
				document.getElementsByClassName('bigDisplay')[0].innerText =
					parseFloat(operandOne);
				console.log('O1: ' + operandOne);
			} else return;
		});
	});
}

function setOperandTwo() {
	numberButton.forEach((button) => {
		button.addEventListener('click', (event) => {
			if (operator !== '') {
				operandTwo += event.target.value;
				document.getElementsByClassName('bigDisplay')[0].innerText =
					parseFloat(operandTwo);
				console.log('O2: ' + operandTwo);
			} else return;
		});
	});
}

function setOperator() {
	operatorButton.forEach((button) => {
		button.addEventListener('click', (event) => {
			if (operandOne !== '' && operandTwo === '') {
				operator = event.target.value;
				document.getElementsByClassName('smallDisplay')[0].innerText =
					parseFloat(operandOne) + operator;
				console.log('operator: ' + operator);
			}
			if (operandTwo !== '') {
				document.getElementsByClassName('smallDisplay')[0].innerText +=
					operandTwo + event.target.value;
				console.log('step4');
			}
		});
	});
}

function getResult() {
	operatorButton.forEach((button) => {
		button.addEventListener('click', (event) => {
			if (operandTwo !== '') {
				switch (operator) {
					case '+':
						result = eval(parseFloat(operandOne) + parseFloat(operandTwo));
						document.getElementsByClassName('bigDisplay')[0].innerText = result;
						operandOne = result;
						operandTwo = '';
						console.log('res: ' + result);
						break;
					case '-':
						result = eval(parseFloat(operandOne) - parseFloat(operandTwo));
						document.getElementsByClassName('bigDisplay')[0].innerText = result;
						operandOne = result;
						operandTwo = '';
						console.log('res: ' + result);
						break;
					case '*':
						result = eval(parseFloat(operandOne) * parseFloat(operandTwo));
						document.getElementsByClassName('bigDisplay')[0].innerText = result;
						operandOne = result;
						operandTwo = '';
						console.log(result);
						break;
					case '/':
						result = eval(parseFloat(operandOne) / parseFloat(operandTwo));
						document.getElementsByClassName('bigDisplay')[0].innerText = result;
						operandOne = result;
						operandTwo = '';
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
	button.addEventListener('click', () => {
		operandOne = '';
		operandTwo = '';
		operator = '';
		document.getElementsByClassName('bigDisplay')[0].innerText = '0';
		document.getElementsByClassName('smallDisplay')[0].innerText = '0';
	});
});

ceButton.forEach((button) => {
	button.addEventListener('click', () => {
		if (operandOne !== '' && operandTwo !== '') {
			operandTwo = '';
			// update the display to reflect the result of pressing CE.
		} else if (operandOne !== '' && operandTwo === '') {
			operandOne = '';
		}
	});
});

document.getElementsByClassName('bigDisplay')[0].innerText = '0';
document.getElementsByClassName('smallDisplay')[0].innerText = '0';
