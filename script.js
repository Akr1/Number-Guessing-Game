'use strict';

let secretNumber = secretNumberGenerator();
let score = 20;
let highscore = document.querySelector('.highscore');
let message = document.querySelector('.message');
let number = document.querySelector('.number');
let scoreObject = document.querySelector('.score');
let body = document.querySelector('body');

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = 'No number';
  } else if (guess === secretNumber) {
    message.textContent = 'Correct Number!';
    number.textContent = secretNumber;
    if (Number(highscore.textContent) < score) highscore.textContent = score;
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
  } else if (guess !== secretNumber) {
    if (score > 1) {
      message.textContent = guess > secretNumber ? 'too high' : 'too low';
      score--;
      scoreObject.textContent = score;
    } else {
      scoreObject.textContent = 'You lost the game!';
      scoreObject.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = secretNumberGenerator();
  number.textContent = '?';
  scoreObject.textContent = score;
  message.textContent = 'Start guessing...';
  body.style.backgroundColor = '#222';
  body.style.width = 'width';
});

function secretNumberGenerator() {
  return Math.trunc(Math.random() * 20) + 1;
}
