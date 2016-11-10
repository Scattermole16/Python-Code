/**
 * Created by stephan.cattermole42 on 11/10/16.
 */
var num1 = Math.floor(Math.random() * 100);
var num2 = Math.floor(Math.random() * 100);
var sum = num1 + num2;
var product = num1 * num2;
var difference = num1 - num2;
var quotient = num1 / num2;
var modulus = num1 % num2;

function calculateSum() {
    document.getElementById("Add").value = sum;
}

function calculateProduct() {
    document.getElementById("Multiply").value = product;
}

function calculateDifference() {
    document.getElementById("Subtract").value = difference;
}

function calculateQuotient() {
    document.getElementById("Divide").value = quotient;
}

function calculateModulus() {
    document.getElementById("Remainder").value = modulus;
}

function display() {
    document.getElementById("Display").value = num1 + " " + num2;
}