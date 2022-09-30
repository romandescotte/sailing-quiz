console.log('main.js conectado');

import { generarExamen } from './generarExamen.js';
import { corregirExamen } from './corregirExamen.js';

const $botonGenerarExamen = document.querySelector('#quiz');
$botonGenerarExamen.addEventListener('click', muestraExamen);

const $botonCorregir = document.querySelector('#boton-corregir');
$botonCorregir.addEventListener('click', corregirExamen);

const $botonResetear = document.querySelector('#boton-resetear');
$botonResetear.addEventListener('click', resetearExamen);

window.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    muestraExamen(event);
  }
});

function muestraExamen(event) {
  event.preventDefault();
  const cantidadPreguntas = Number(document.forms.generarExamen.cantidadPreguntas.value);
  if (cantidadPreguntas !== 0 && cantidadPreguntas <= 104) {
    const cantidadRespuestas = Number(document.forms.generarExamen.cantidadRespuestas.value);
    const iteracionesMaximasRespuestas = 3;
    guardaCantidadPreguntas(cantidadPreguntas);
    const $examen = document.querySelector('#examen');
    const $main = document.querySelector('main');
    $examen.classList.toggle('ocultar-examen');
    $main.classList.toggle('ocultar-examen');
    generarExamen(cantidadPreguntas, cantidadRespuestas, iteracionesMaximasRespuestas);
  } else if (cantidadPreguntas > 104) {
    alert('Ingrese un número de preguntas menor a 104');
  } else if (cantidadPreguntas === 0) {
    alert('Ingrese un número válido de preguntas');
}
}

function guardaCantidadPreguntas(cantidadPreguntas) {
  localStorage.setItem('cantidadPreguntas', cantidadPreguntas);
}

function resetearExamen() {
  window.location.reload();
  localStorage.clear();
}

// export { cantidadPreguntas }
