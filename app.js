console.log("CONST & LET");
var maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; // won't work
var variable = "value";
// block scope
function reset() {
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
// Arrow functions
console.log('ARROW FUNCTIONS');
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(2, 3));
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(2, 3));
