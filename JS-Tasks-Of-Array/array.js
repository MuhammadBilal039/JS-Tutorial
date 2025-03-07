// Create an array with five fruit names and print the second element.

let fruits = ['Apple', 'Banana', 'Peach', 'Orange', 'Grape'];
console.log(fruits[1]);

// Replace the third element of an array with "Mango" and print the updated array.

fruits[2] = 'Mango';
console.log(fruits);

// Create an empty array and add three colors to it using push(). Print the array.

let colors = [];
colors.push('Red', 'Green', 'Blue');
console.log(colors);

// Remove the last element of an array using pop() and print the removed element.

let popColor = colors.pop();
console.log(colors);
console.log(popColor);

// Add two numbers at the beginning of an array using unshift() and print the array.

colors.unshift('Yellow', 'White');
console.log(colors);

// Remove the first element of an array using shift() and print the updated array.

let shiftColors = colors.shift();
console.log(shiftColors);
console.log(colors);

// Print the length of an array containing four elements.

let vegetables = ['Potato', 'Broccoli', 'Carrot', 'Tomato'];
console.log(vegetables.length);
console.log(vegetables);

// Extract the last two elements from an array using slice() and print them.

let sliceElements = vegetables.slice(2);
console.log(sliceElements);

// Extract the middle element(s) of an array with an even number of elements using slice()

let animals = [
  'Lion',
  'Parrot',
  'Rabbit',
  'Dog',
  'Cow',
  'Ox',
  'Goat',
  'Sparrow',
  'Whale',
  'Shark',
];

let sliceAnimals = animals.slice(2, 8);
console.log(sliceAnimals);

// Replace two middle elements in an array using splice() and print the updated array.

console.log(animals);
let spliceElements = animals.splice(4, 2, 'Blue Whale', 'Cheeta');
console.log(spliceElements);
console.log(animals);
