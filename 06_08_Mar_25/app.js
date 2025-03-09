// Number Guessing Game in JS

let randomNumber = Math.floor(Math.random() * 10) + 1;

let userGuessNumber = 0;

while (userGuessNumber !== randomNumber) {
  userGuessNumber = +prompt('Enter your Guessing Number');
  userGuessNumber++;

  if (userGuessNumber === randomNumber) {
    alert('Congratulation! You guessed it in ' + userGuessNumber + ' Chances');
  } else if (userGuessNumber > randomNumber) {
    alert('Your guessing number is too high. Try again!');
  } else {
    alert('Your guessing number is too low. Try agin!');
  }
}
