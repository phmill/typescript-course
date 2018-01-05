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
//default parameters
console.log('DEFAULT PARAMETERS');
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log('Done!', start);
};
countdown();
// rest & spread operators
console.log('Rest & Spread Operators');
var numbers = [1, 100, 33, 26, 8];
console.log(Math.max(1, 2, 3, 4, 5, 6, 7));
console.log(Math.max.apply(Math, numbers));
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2, 3));
// destructuring
console.log('Destructuring');
var myHobbies = ['java', 'javascript'];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
var userdata = { userName: 'Phil', age: 55 };
var userName = userdata.userName, age = userdata.age;
console.log(userName, age);
