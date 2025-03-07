// Assign an array to another variable and modify the original array. Print both variables.

let originalArray = [1, 2, 3];
let newArrayOne = originalArray;

originalArray.push(4);
console.log('originalArray: ', originalArray);
console.log('newArray: ', newArrayOne);

// Create a function that adds an element to an array and check if the original array changes.
// Yes the original array is changed

function addElement(newArrayOne) {
  newArrayOne.push(5);
  return newArrayOne;
}
let originalArrayOne = [1, 2, 3, 4];
let modifiedArray = addElement(originalArray, newArrayOne);
console.log('originalArrayOne: ', originalArrayOne);
console.log('modifiedArray: ', modifiedArray);

// Pass an array to a function, modify its first element, and print the modified array.

function modifyFirstElement(array) {
  array[0] = 10;
}

let myArray = [1, 2, 3, 4, 5];
modifyFirstElement(myArray);
console.log(myArray);

// Create an array, pass it to another variable, modify the second variable, and print both.

let fruits = ['Apple', 'Banana'];
let newArray = fruits;
newArray.push('Cherry');
console.log('fruits: ', fruits);
console.log('newArray: ', newArray);

//  Check if two variables referencing the same array are equal after modifying one.
// Yesh the two variables referencing the same array are equal after modifying one.

// Create an array, pass it to a function that removes an element, and print the result.

let numbers = [1, 2, 3, 4];

function removeFunction(newArray) {
  let removeElement = newArray.shift();
  console.log('removeElement: ', removeElement);
  return newArray;
}

let result = removeFunction(numbers, newArray);
console.log(result);

// Store an array in two different variables, modify one using push(), and print both.

let cities = ['Peshawar', 'Islamabad', 'Rawalpendi'];
let newCities = cities;
cities.push('Manshra');

console.log(cities);
console.log(newCities);

// Use pop() on an array inside a function and see if the original array changes.

function popFunction(newArray) {
  let removeElement = newArray.pop();
  console.log('removeElement: ', removeElement);
  return newArray;
}

console.log(numbers);
let resultOne = popFunction(numbers, newArray);
console.log(resultOne);

// Pass an array to a function that changes its length and check the effect.

function changedArrayLenght(array) {
  array.length = 3;
}

let myArrayOne = [1, 2, 3, 4, 5];

console.log(myArrayOne);

changedArrayLenght(myArrayOne);

console.log(myArrayOne);

// Create two separate arrays with identical elements and check if they are strictly equal.

let firstArray = [1, 2, 3];
let secondArray = [1, 2, 3];

if (firstArray === secondArray) {
  console.log('Yes, They are equal...');
} else {
  console.log('No, They are not equal...');
}
