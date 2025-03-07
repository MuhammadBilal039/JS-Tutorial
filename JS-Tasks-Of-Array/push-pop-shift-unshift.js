// Create an array of three cities and add a new city at the end using push().

let cities = ['Peshawar', 'Islamabad', 'Lahore'];
cities.push('Karachi');
console.log(cities);

// Remove the last city from an array using pop() and print the updated array.

let popCity = cities.pop();
console.log(popCity);

// Add two new colors to the beginning of an array using unshift() and print the array.

let colors = ['Red'];
console.log(colors);
colors.unshift('Green', 'Blue');
console.log(colors);

// Remove the first color from an array using shift() and print the removed color.

let shifColor = colors.shift();
console.log(shifColor);
console.log(colors);

// Use push() twice to add two new names to an array and print the array.

let vegetables = ['Tomato', 'Potato'];
vegetables.push('Cabbage', 'Carrot');
console.log(vegetables);
vegetables.push('Eggplant', 'Corn');
console.log(vegetables);

// Use pop() on an array of five elements and check if the length is now four.

let fruits = ['Apple', 'Banana', 'Kiwi', 'Orange', 'Mango'];
let popFruit = fruits.pop();
console.log(popFruit);
console.log(fruits.length);

// Use shift() on an array with three elements and print the updated array.

let mixedArray = ['Apple', 'Banana', true];
console.log(mixedArray);
let shiftMixedArray = mixedArray.shift();
console.log(shiftMixedArray);
console.log(mixedArray);

//  Use unshift() to add a new number at the beginning of an array and print it.

let unshiftMixedArray = mixedArray.unshift(4);
console.log(unshiftMixedArray);
console.log(mixedArray);

//  Create an array of three numbers, remove the last one using pop(), and print the remaining array.

let numbers = [1, 2, 3];
console.log(numbers);
numbers.pop();
console.log(numbers);

//  Create an array with three elements, remove the first using shift(), and print the updated array.

let array = ['Apple', 5, true];
console.log(array);
array.shift();
console.log(array);
