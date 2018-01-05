console.log("CONST & LET");
const maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; // won't work

let variable = "value";

// block scope
function reset() {
  let variable = null;
  console.log(variable);
  
}
reset();
console.log(variable);

// Arrow functions
console.log('ARROW FUNCTIONS');
const addNumbers = function(number1: number, number2: number): number {
  return number1 + number2;
};
console.log(addNumbers(2, 3));

const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
console.log(multiplyNumbers(2, 3));
