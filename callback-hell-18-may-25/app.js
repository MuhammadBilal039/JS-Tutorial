function onMachine(callback) {
  setTimeout(() => {
    console.log('Machine is On');
    callback(takeWater);
  }, 2000);
}

function clothes(callback) {
  setTimeout(() => {
    console.log('Putting the clothes');
    callback(wash);
  }, 3000);
}

function takeWater(callback) {
  setTimeout(() => {
    console.log('Taking water into machine');
    callback(drain);
  }, 2500);
}

function wash(callback) {
  setTimeout(() => {
    console.log('Washing the clothes');
    callback(dry);
  }, 1000);
}

function drain(callback) {
  setTimeout(() => {
    console.log('Draining the water');
    callback();
  }, 3500);
}

function dry() {
  setTimeout(() => console.log('Drying the clothes'), 4000);
}

onMachine(clothes);
