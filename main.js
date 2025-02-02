// Simple Calculator for addition

var firstNumber = Number(prompt('Enter first number:'));
var secondNumber = Number(prompt('Enter second number:'));

var add = firstNumber + secondNumber;

// User Information

var firstName = prompt('Enter your first name:');
var lastName = prompt('Enter your last name:');
var rollNumber = prompt('Enter your roll number:');
var email = prompt('Enter your Email address:');

var mathSubject = Number(prompt('Enter your Maths marks:'));
var englishSubject = Number(prompt('Enter your English marks:'));
var computerSubject = Number(prompt('Enter your Computer marks:'));
var physicsSubject = Number(prompt('Enter your Physics marks:'));
var islamyatSubject = Number(prompt('Enter your Islamyat marks:'));

var result =
  mathSubject +
  englishSubject +
  computerSubject +
  physicsSubject +
  islamyatSubject;

document.write('First number is: ', firstNumber, '<br/>');
document.write('Second number is: ', secondNumber, '<br/>');
document.write('The Total is: ', add, '<br/>');

document.write(
  'First Name: ',
  firstName,
  '<br/>',
  'Last Name: ',
  lastName,
  '<br/>',
  'Roll Number: ',
  rollNumber,
  '<br/>',
  'Email address: ',
  email,
  '<br/>'
);

document.write(
  'Marks of Maths subject: ',
  mathSubject,
  '<br/>',
  'Marks of English subject: ',
  englishSubject,
  '<br/>',
  'Marks of Computer subject: ',
  computerSubject,
  '<br/>',
  'Marks of Physics subject: ',
  physicsSubject,
  '<br/>',
  'Marks of Islamyat subject: ',
  islamyatSubject,
  '<br/>'
);

document.write('The Total marks of all subjects: ', result);
