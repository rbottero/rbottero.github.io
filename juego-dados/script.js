'use strict';

//Constantes globales y esas cosas

const dadoEl = document.querySelector('.dice');
const tiradaDado = document.querySelector('.btn--roll');
const ronda = document.querySelector('.current');
const jugador0 = document.querySelector('.player--0');
const jugador1 = document.querySelector('.player--1');
//Modal
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
//Elementos del score
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--Roll');
const btnHold = document.querySelector('.btn--Hold');
const jugador0Ronda = document.querySelector('#current--0');
const jugador1Ronda = document.querySelector('#current--1');
const mantener = document.querySelector('.btn--hold');

//Condiciones iniciales
score0El.textContent = 0;
score1El.textContent = 0;
dadoEl.classList.add('hidden');
let puntajeActual = 0;
let jugadorActual = 0;
let puntajesTotales = [0, 0];

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  score0El.textContent = 0;
  score1El.textContent = 0;
  dadoEl.classList.add('hidden');
  puntajeActual = 0;
  jugadorActual = 0;
  puntajesTotales = [0, 0];
  jugador0.classList.add('player--active');
  jugador1.classList.remove('player--active');
};

tiradaDado.addEventListener('click', function () {
  const valorDado = Math.trunc(Math.random() * 6) + 1;
  dadoEl.src = `dice-${valorDado}.png`;
  dadoEl.classList.remove('hidden');
  if (valorDado !== 1) {
    puntajeActual = valorDado + puntajeActual;
    document.querySelector(`#current--${jugadorActual}`).textContent =
      puntajeActual;
  } else {
    puntajeActual = 0;
    document.querySelector(`#current--${jugadorActual}`).textContent = 0;
    jugadorActual = jugadorActual === 0 ? 1 : 0;
    jugador0.classList.toggle('player--active');
    jugador1.classList.toggle('player--active');
  }
});

mantener.addEventListener('click', function () {
  puntajesTotales[jugadorActual] =
    puntajesTotales[jugadorActual] + puntajeActual;
  score0El.textContent = puntajesTotales[0];
  score1El.textContent = puntajesTotales[1];
  if (puntajesTotales[jugadorActual] >= 10) {
    document.querySelector('#ganador').textContent = `Felicitaciones Jugador ${
      jugadorActual + 1
    }, ganaste!`;
    openModal();
  }
  document.querySelector(`#current--${jugadorActual}`).textContent = 0;
  jugadorActual = jugadorActual === 0 ? 1 : 0;
  puntajeActual = 0;
  jugador0.classList.toggle('player--active');
  jugador1.classList.toggle('player--active');
  dadoEl.classList.add('hidden');
  //   if (puntajesTotales[jugadorActual] >= 10) {
  //     document.querySelector(
  //       '#ganador'
  //     ).textContent = `Felicitaciones Jugador , ganaste!`;
  //   }
});
btnNew.addEventListener('click', function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  puntajeActual = 0;
  jugadorActual = 0;
  puntajesTotales = [0, 0];
  jugador0.classList.add('player--active');
  jugador1.classList.remove('player--active');
  dadoEl.classList.add('hidden');
  jugador0Ronda.textContent = puntajeActual;
  jugador1Ronda.textContent = puntajeActual;
});
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
