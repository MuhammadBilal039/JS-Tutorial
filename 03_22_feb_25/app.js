// Nested if
// var isStudent = true;
// var cgpa = 3.4;

// if(isStudent && cgpa >= 3.5){
//     console.log("Come In")
// }
// else{
//     console.log("Get Out")
// }

// Functions -> name -> () parenthesis -> parameters -> arguments
// a piece of code that execute multiple times

// function addition(numberOne, numberTwo) {
//   var sum = numberOne + numberTwo;
//   return sum;
// }

// // call or invoke
// var result = addition(2, 4);
// var anotherResult = addition(15, 6);
// console.log('result: ', result);
// console.log('anotherResult: ', anotherResult);

// function area(height, width) {
//   return height * width;
// }

// var area = area(15, 10);
// console.log('area: ', area);

// var b = 20;
// if (true) {
//   var b = 10;
//   console.log('b: ', b);
// }

// console.log(b);

// closures
// higher order function
// callback

// function greet(userName) {
//   var message = 'Hello';
//   console.log('message: ', message, userName);
// }

// greet('osama');
// console.dir(greet);

// function calculator(numberONe, numberTwo, operator) {
//   if (operator === '+') {
//     return `The addition of two numbers are: ${numberONe + numberTwo}`;
//   } else if (operator === '-') {
//     return `The subtraction of two numbers are: ${numberONe - numberTwo}`;
//   } else if (operator === '*') {
//     return `The multipliction of two numbers are: ${numberONe * numberTwo}`;
//   } else if (operator === '/') {
//     if (numberTwo === 0) {
//       return `Error: Division of zero is not allowed`;
//     }
//     return `The division of two numbers are: ${numberONe / numberTwo}`;
//   } else {
//     console.log('Enter valid operator');
//   }
// }

// console.log(calculator(2, 3, '+'));
// console.log(calculator(6, 3, '-'));
// console.log(calculator(5, 4, '*'));
// console.log(calculator(4, 0, '/'));

// let firstNumber = +prompt('Enter First Number: ');
// let operator = prompt('Enter the Valid Operator: ');
// let secondNumber = +prompt('Enter Second Number: ');

// function calculator(numOne, numTwo, operators) {
//   if (operators === '+') {
//     return 'Additon of numOne and numTwo is: ' + (numOne + numTwo);
//   } else if (operators === '-') {
//     return 'Subtraction of numOne and numTwo is: ' + (numOne - numTwo);
//   } else if (operators === '*') {
//     return 'Multiplication of numOne and numTwo is: ' + numOne * numTwo;
//   } else if (operators === '/') {
//     if (numTwo === 0) {
//       return 'Error: Division of Zero is not allowed';
//     }
//     return 'Division of numOne and numTwo is: ' + numOne / numTwo;
//   } else {
//     return 'Enter the valid Operator';
//   }
// }

// console.log(calculator(firstNumber, operator, secondNumber));

let numberOne = +prompt('Enter the Number');
let unit = prompt('Enter the Unit');
let anotherUnit = prompt('Enter the unit to convert');

function unitConversion(numberONe, unit, anotherUnit) {
  if (numberONe > 0 && unit === 'km' && anotherUnit === 'm') {
    return (
      `The conversion of ${numberONe} kilometers into meters is: ` +
      numberONe * 1000 +
      anotherUnit
    );
  } else if (numberONe > 0 && unit === 'm' && anotherUnit === 'cm') {
    return (
      `The conversion of ${numberONe} meters into centimeters is: ` +
      numberONe * 100 +
      anotherUnit
    );
  } else if (numberONe > 0 && unit === 'cm' && anotherUnit === 'mm') {
    return (
      `The conversion of ${numberONe} centimeters into milimeters is: ` +
      numberONe * 10 +
      anotherUnit
    );
  } else if (numberONe > 0 && unit === 'm' && anotherUnit === 'km') {
    return (
      `The conversion of ${numberONe} meters into kilometers is:` +
      numberONe / 1000 +
      anotherUnit
    );
  } else if (numberONe > 0 && unit === 'cm' && anotherUnit === 'm') {
    return (
      `The conversion of ${numberONe} meters into kilometers is:` +
      numberONe / 100 +
      anotherUnit
    );
  } else if (numberONe > 0 && unit === 'mm' && anotherUnit === 'cm') {
    return (
      `The conversion of ${numberONe} meters into kilometers is:` +
      numberONe / 10 +
      anotherUnit
    );
  }
}

console.log(unitConversion(numberOne, unit, anotherUnit));

var gender = prompt('Enter your gender');
var age = prompt('Enter your age');

function ticket() {
  if (gender === 'male' && age >= 18) {
    return 'Please go to the Male Section';
  } else if (gender === 'female' && age >= 18) {
    return 'Please go the Female Section';
  } else {
    return 'Please enter the valid gender "Male or Female"';
  }
}

console.log(ticket(gender, age));
