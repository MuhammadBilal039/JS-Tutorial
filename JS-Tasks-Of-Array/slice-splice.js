// Extract the first three elements from an array using slice() and print them.

let fruits = [
  'Apple',
  'Banana',
  'Orange',
  'Mango',
  'Watermelon',
  'Kiwi',
  'Blueberry',
  'Grape',
  'Pineapple',
  'Cherry',
];
let sliceFruitsOne = fruits.slice(0, 3);
console.log(sliceFruitsOne);

// Extract elements from index 2 to 4 using slice() and print them.

let sliceFruitsTwo = fruits.slice(2, 5);
console.log(sliceFruitsTwo);

// Remove two elements from an array starting from index 1 using splice().

console.log(fruits);
let spliceFruitsOne = fruits.splice(1, 2);
console.log(spliceFruitsOne);

//  Insert "Lemon" and "Orange" at index 2 in an array using splice() and print the updated array.

console.log(fruits);
fruits.splice(2, 0, 'Lemon', 'Orange');
console.log(fruits);

// Remove the last two elements using splice() and print the modified array.

console.log(fruits);
let spliceFruitsThree = fruits.splice(8);
console.log(spliceFruitsThree);

//  Use splice() to add three new numbers at the beginning of an array and print the array.

let numbers = [1, 2, 3, 4, 5];
numbers.splice(0, 0, 4, 5);
console.log(numbers);

// Create an array with six elements, extract the last four using slice(), and print them.

let cities = [
  'Peshawar',
  'Islamabad',
  'Lahore',
  'Swat',
  'Karachi',
  'Mardan',
  'Rawalpendi',
];
let sliceCities = cities.slice(3);
console.log(sliceCities);

// Use slice() on an array and check if the original array remains unchanged.
// Yes if we use the slice methode on an array so the original array remains the same.

let mixedArray = ['Apple', 1, 3, 4, true, false];
let sliceArray = mixedArray.slice(1, 3);
console.log(sliceArray);
console.log(mixedArray);

//  Use splice() to remove one element from the middle of an array and print the updated array.

let removeArray = mixedArray.splice(2, 1);
console.log(removeArray);
console.log(mixedArray);

// Use splice() to replace two elements in an array and print the modified array.

let replaceArray = mixedArray.splice(1, 2, null, undefined);
console.log(replaceArray);
console.log(mixedArray);
