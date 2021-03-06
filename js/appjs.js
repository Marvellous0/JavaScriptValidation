function setInputValue(element, result) {
    document.getElementById(element).value = result;
}

function getInputValue(element) {
    return document.getElementById(element).value;
}

function add(firstNumber, secondNumber) {
    return parseFloat(firstNumber) + parseFloat(secondNumber);
}

function subtract(firstNumber, secondNumber) {
    return parseFloat(firstNumber) - parseFloat(secondNumber);
}

function multiply(firstNumber, secondNumber) {
    return parseFloat(firstNumber) * parseFloat(secondNumber);
}

function modulo(firstNumber, secondNumber) {
    return parseFloat(firstNumber) % parseFloat(secondNumber);
}

function divide(firstNumber, secondNumber) {
    return parseFloat(firstNumber) / parseFloat(secondNumber);
}

document.getElementById('add').onclick = function () {
    let x = getInputValue('number1');
    let y = getInputValue('number2');

    let result = add(x, y);

    setInputValue('result', result);
}

document.getElementById('subtract').onclick = function () {
    let x = getInputValue('number1');
    let y = getInputValue('number2');

    let result = subtract(x, y);

    setInputValue('result', result);
}

document.getElementById('multiply').onclick = function () {
    let x = getInputValue('number1');
    let y = getInputValue('number2');

    let result = multiply(x, y);

    setInputValue('result', result);
}

document.getElementById('modulo').onclick = function () {
    let x = getInputValue('number1');
    let y = getInputValue('number2');

    let result = modulo(x, y);

    setInputValue('result', result);
}

document.getElementById('divide').onclick = () => {
    let x = getInputValue('number1');
    let y = getInputValue('number2');

    let result = divide(x, y);

    setInputValue('result', result);
}

// function addClick() {
//     let x = getInputValue('number1');
//     let y = getInputValue('number2');

//     let result = add(x, y);

//     setInputValue('result', result);
// }