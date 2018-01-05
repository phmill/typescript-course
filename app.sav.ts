console.log ('It works!');

let myName = 'Phil';
// functions
function  returnMyName () : string {
    return myName;
}
// void
function sayHello () : void {
    console.log('Hello!');
}

// argument types
function multiply (value1: number, value2: number) : number {
    return value1 * value2;
}

// console.log(multiply(2, 'phil'));
console.log (multiply(2, 3));

// function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log (myMultiply(5, 2));

// objects
let userData: { name: string, age: number } = {
    name: 'Phil',
    age: 55
};

// complex object
let complex: { data: number[], output: (val: boolean) => number[] } = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
};
// complex = {};

// type alias 
type Complex = { data: number[], output: (val: boolean) => number[] };

let complex2: Complex;

// union types - can be more than 2 types
let myAge: string | number;

myAge = 55;
myAge = "55";

// check types
let finalValue = 55;
if (typeof finalValue == 'number' ) {
    console.log('finalValue is a number');
}

// never - TS 2.0
function neverReturns (): never {
    throw new Error ('An error!');
}

// nullable types - TS 2.0
let canBeNull: number | null =12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny = null;
// canThisBeAny = 12;





