console.log('It works!');
var myName = 'Phil';
// functions
function returnMyName() {
    return myName;
}
// void
function sayHello() {
    console.log('Hello!');
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(2, 'phil'));
console.log(multiply(2, 3));
// function types
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
// objects
var userData = {
    name: 'Phil',
    age: 55
};
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2;
// union types - can be more than 2 types
var myAge;
myAge = 55;
myAge = "55";
// check types
var finalValue = 55;
if (typeof finalValue == 'number') {
    console.log('finalValue is a number');
}
// never - TS 2.0
function neverReturns() {
    throw new Error('An error!');
}
// nullable types - TS 2.0
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
// canThisBeAny = 12;
