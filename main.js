function addNumbers(){
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
    if (!isNaN(number1) && !isNaN(number2)) {
        var sum = number1 + number2;
        document.getElementById('result').textContent = sum;
    } else {
        document.getElementById('result').textContent = "Invalid input";
    }
}
function substractNumbers(){
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
    if (!isNaN(number1) && !isNaN(number2)) {
        var difference = number1 - number2;
        document.getElementById('result').textContent = difference;
    } else {
        document.getElementById('result').textContent = "Invalid input";
    }
}
function multiplyNumbers(){
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
    if (!isNaN(number1) && !isNaN(number2)) {
        var product = number1 * number2;
        document.getElementById('result').textContent = product;
    } else {
        document.getElementById('result').textContent = "Invalid input";
    }
}
function divideNumbers(){
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
    if (!isNaN(number1) && !isNaN(number2)) {
        var quotient = number1 / number2;
        document.getElementById('result').textContent = quotient;
    } else {
        document.getElementById('result').textContent = "Invalid input";
    }
}