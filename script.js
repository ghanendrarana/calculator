let result = document.getElementById('result');
let currentInput = '';

result.value = currentInput;

function appendNumber(number) {
    currentInput = currentInput + number;
    result.value = currentInput;
}

function appendOperator(operator) {
    currentInput = currentInput + operator;
    result.value = currentInput;
}   

function clearResult() {
    currentInput = '';
    result.value = currentInput;
}

function calculateResult() {
    try {
        currentInput = eval(currentInput);
        result.value = currentInput;
    } catch (error) {
        result.value = error.message;
    }
}
