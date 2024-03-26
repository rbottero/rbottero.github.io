'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Número correcto!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 13;
// document.querySelector('.guess').value = 5;

// document.querySelector('.check').addEventListener('click', function () {
//   document.querySelector('.highscore').textContent =
//     document.querySelector('.guess').value;
// });

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;

const flashRojo = function () {
  document.body.style.background = 'rgb(161, 11, 11)';
};

/////////////////////////
//////BOTÓN AGAIN///////
///////////////////////
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.body.style.background = 'rgb(34,34,34)';
});

/////////////////////////
//////BOTÓN CHECK///////
///////////////////////
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess || guess <= 0) {
    document.querySelector('.message').textContent =
      'Prueba con un número positivo.';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      'Felicitaciones. Es el número correcto.';
    document.querySelector('.number').textContent = secretNumber;
    document.body.style.background = '#60b347';
    if (
      Number(document.querySelector('.highscore').textContent) <
      Number(document.querySelector('.score').textContent)
    ) {
      document.querySelector('.highscore').textContent =
        document.querySelector('.score').textContent;
    }
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Tu número es mayor.';
    document.querySelector('.score').textContent =
      Number(document.querySelector('.score').textContent) - 1;
    flashRojo();
    window.setTimeout(function () {
      document.body.style.background = 'rgb(34,34,34)';
    }, 500);
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Tu número es menor.';
    document.querySelector('.score').textContent =
      Number(document.querySelector('.score').textContent) - 1;
    flashRojo();
    window.setTimeout(function () {
      document.body.style.background = 'rgb(34,34,34)';
    }, 500);
  }
});
