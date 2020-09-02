const { Before, Given, When, Then } = require('cucumber');
const Calculator = require('./test/calculator');

let calculator;

Given('the numbers {int} and {int}', function (x, y) {
    calculator = new Calculator(x, y);
});

When('they are added together', function () {
    calculator.add();
});

Then('should the result be {int}', function (int) {
});