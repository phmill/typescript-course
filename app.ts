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

//default parameters
console.log('DEFAULT PARAMETERS');
const countdown = (start: number = 10): void => {
  console.log(start);
  while(start > 0) {
    start--;
  }
  console.log('Done!', start);
};
countdown();

// rest & spread operators
console.log('Rest & Spread Operators');
const numbers = [1, 100, 33, 26, 8];
console.log(Math.max(1, 2, 3, 4, 5, 6, 7));
console.log(Math.max(...numbers));

function makeArray(...args: number[]) {
  return args;
}
console.log(makeArray(1, 2, 3));

// destructuring
console.log('Destructuring');
const myHobbies = ['java', 'javascript'];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

const userdata = {userName: 'Phil', age: 55};
const {userName, age} = userdata;
console.log(userName, age);





