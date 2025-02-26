// // Primetive Datatypes
// // String
// // Number
// // Boolean
// // Null
// // Undefined
// // Bigint
// // Symbol

// // comparision operators

// var a = 10;
// var b = '10';

// console.log(a == b); // check the values
// console.log(a === b); // check the values and datatypes

// // > greater than and greater than or equal to operator

// // console.log(a >= 10);
// // console.log(a >= 9);
// // console.log(a >= Infinity);
// // console.log(a >= -Infinity);

// // < less than and less than or equal to operator

// // console.log(a <= 10);
// // console.log(a < 10);
// // console.log(a <= 11);

// // console.log(-1 < -2);

var userName = prompt('Enter your name');
var rollNumber = prompt('Enter your roll number');
var mathsMarks = +prompt('Enter your maths marks');
var physicsMarks = +prompt('Enter your physics marks');
var chemistryMarks = +prompt('Enter your chemistry marks');
var computerMarks = +prompt('Enter your computer marks');
var urduMarks = +prompt('Enter your urdu marks');

var totalMarks = 500;

var obtainedMarks =
  mathsMarks + physicsMarks + chemistryMarks + computerMarks + urduMarks;

var percentage = (obtainedMarks / totalMarks) * 100;

document.write('Maths Marks: ' + mathsMarks + '<br />');
document.write('Physics Marks: ' + physicsMarks + '<br />');
document.write('Chemistry Marks: ' + chemistryMarks + '<br />');
document.write('Computer Marks: ' + computerMarks + '<br />');
document.write('Urdu Marks: ' + urduMarks + '<br />');

document.write('Total Marks: ' + totalMarks + '<br />');
document.write('Obtained Marks: ' + obtainedMarks + '<br />');
document.write('Percenatge: ' + percentage + '%' + '<br />');

if (percentage >= 80 && percentage <= 100) {
  document.write('Grade A1');
} else if (percentage >= 70 && percentage <= 79) {
  document.write('Grade A');
} else if (percentage >= 60 && percentage <= 69) {
  document.write('Grade B');
} else if (percentage >= 50 && percentage <= 69) {
  document.write('Grade C');
} else if (percentage >= 40 && percentage <= 59) {
  console.log('Grade D');
} else {
  document.write('You are Fail');
}
