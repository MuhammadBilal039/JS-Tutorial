// // Simple Calculator for addition

// var firstNumber = Number(prompt('Enter first number:'));
// var secondNumber = Number(prompt('Enter second number:'));

// var add = firstNumber + secondNumber;

// // User Information

// var firstName = prompt('Enter your first name:');
// var lastName = prompt('Enter your last name:');
// var rollNumber = prompt('Enter your roll number:');
// var email = prompt('Enter your Email address:');

// var mathSubject = Number(prompt('Enter your Maths marks:'));
// var englishSubject = Number(prompt('Enter your English marks:'));
// var computerSubject = Number(prompt('Enter your Computer marks:'));
// var physicsSubject = Number(prompt('Enter your Physics marks:'));
// var islamyatSubject = Number(prompt('Enter your Islamyat marks:'));

// var result =
//   mathSubject +
//   englishSubject +
//   computerSubject +
//   physicsSubject +
//   islamyatSubject;

// document.write('First number is: ', firstNumber, '<br/>');
// document.write('Second number is: ', secondNumber, '<br/>');
// document.write('The Total is: ', add, '<br/>');

// document.write(
//   'First Name: ',
//   firstName,
//   '<br/>',
//   'Last Name: ',
//   lastName,
//   '<br/>',
//   'Roll Number: ',
//   rollNumber,
//   '<br/>',
//   'Email address: ',
//   email,
//   '<br/>'
// );

// document.write(
//   'Marks of Maths subject: ',
//   mathSubject,
//   '<br/>',
//   'Marks of English subject: ',
//   englishSubject,
//   '<br/>',
//   'Marks of Computer subject: ',
//   computerSubject,
//   '<br/>',
//   'Marks of Physics subject: ',
//   physicsSubject,
//   '<br/>',
//   'Marks of Islamyat subject: ',
//   islamyatSubject,
//   '<br/>'
// );

// document.write('The Total marks of all subjects: ', result);

// type corecion

// var firstName = prompt('Enter Your First Name');
// var lastName = prompt('Enter Your Last Name');
// var rollNumber = prompt('Enter Your Roll Number');

// var firstNumber = +prompt('Enter First Number');
// var secondNumber = +prompt('Enter Second Number');
// var thirdNumber = +prompt('Enter Third Number');
// var fouthNumber = +prompt('Enter Fourth Number');

// var totalMarks = 400;

// var sum = firstNumber + secondNumber + thirdNumber + fouthNumber;
// var percentage = (sum / totalMarks) * 100;

// console.log('First Name: ' + firstName);
// console.log('Last Name: ' + lastName);
// console.log('Roll Number: ' + rollNumber);

// console.log('Total is ' + sum);

// console.log('Percentage: ' + percentage + '%');

// Requirements
// 1) Name -> string
// 2) roll no -> string
// 3) 3 subjects marks -> number
// 4) Get pecentage and show to console

var userName = prompt('Enter your name');
var rollNumber = prompt('Enter your roll number');
var mathsMarks = +prompt('Enter your maths marks');
var bioMarks = +prompt('Enter your bio marks');
var urduMarks = +prompt('Enter your urdu marks');

var totalMarks = 300;

var obtainedMarks = mathsMarks + bioMarks + urduMarks;

var percentage = (obtainedMarks / totalMarks) * 100;

console.log('Your Name: ', userName);
console.log('Your Roll Number: ', rollNumber);
console.log('Your Total Marks: ', totalMarks);
console.log('Your Obtained Marks: ', obtainedMarks);
console.log('Your Percentage: ', percentage, "%");
