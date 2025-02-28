let firstFloor = +prompt('Enter the Floor which you are moving up');
let secondFloor = +prompt('Enter the Floor which you are moving up or down');

function evaluator(floorOne, floorTwo) {
  let currentFloor = 1;

  if (floorOne > currentFloor) {
    console.log(
      `You are moving up from Floor ${currentFloor} to Floor ${floorOne}`
    );
  } else if (floorOne < currentFloor) {
    console.log(
      `You are moving down from Floor ${floorOne} to Floor ${currentFloor}`
    );
  } else {
    console.log(`You are Already on Floor ${floorOne}`);
  }

  currentFloor = floorOne;

  if (floorTwo > currentFloor) {
    console.log(
      `You are moving up from Floor ${currentFloor} to Floor ${floorTwo}`
    );
  } else if (floorTwo < currentFloor) {
    console.log(
      `You are moving down from Floor ${currentFloor} to Floor ${floorTwo}`
    );
  } else {
    console.log(`You are Already on Floor ${floorTwo}`);
  }

  console.log('Evaluator Stopped');
}

evaluator(firstFloor, secondFloor);
