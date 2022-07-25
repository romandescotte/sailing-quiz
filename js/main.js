import { generarExamen } from "./generarExamen.js"
import { corregirExamen } from "./corregirExamen.js"

let $botonCorregir = document.querySelector("#boton-corregir");
$botonCorregir.addEventListener('click', corregirExamen);

let $botonResetear = document.querySelector("#boton-resetear");
$botonResetear.addEventListener('click', resetearExamen)

let $botonGenerarExamen = document.querySelector('#quiz');
$botonGenerarExamen.addEventListener('click', muestraExamen);

window.addEventListener('keydown', function(event) { 
  if(event.key === 'Enter') {
    muestraExamen(event);
  }
})

function muestraExamen(event) {
  event.preventDefault();  
  var cantidadPreguntas = Number(document.forms['generarExamen'].cantidadPreguntas.value); 
  if(cantidadPreguntas !== 0 && cantidadPreguntas <= 104  ) {
    let cantidadRespuestas = Number(document.forms['generarExamen'].cantidadRespuestas.value); 
    let iteracionesMaximasRespuestas = 3; 
    guardaCantidadPreguntas(cantidadPreguntas);
    let $examen = document.querySelector('#examen');
    let $main = document.querySelector('main');
    $examen.classList.toggle('ocultar-examen');
    $main.classList.toggle('ocultar-examen');
    generarExamen(cantidadPreguntas, cantidadRespuestas, iteracionesMaximasRespuestas); 
  } else if(cantidadPreguntas > 104) {
    alert('Ingrese un número de preguntas menor a 104');
  } else if(cantidadPreguntas === 0) {
    alert('Ingrese un número válido de preguntas');
  }
}

function guardaCantidadPreguntas(cantidadPreguntas) {
  localStorage.setItem('cantidadPreguntas', cantidadPreguntas)
}

function resetearExamen() {
  window.location.reload();
  localStorage.clear();
}



// export { cantidadPreguntas }

