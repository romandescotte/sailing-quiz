import { generarExamen } from "./generarExamen.js"
import { corregirExamen } from "./corregirExamen.js"

//104 maximo
let cantidadPreguntas = 20; 
let cantidadRespuestas = 5; 
let iteracionesMaximasRespuestas = 3;

generarExamen(cantidadPreguntas, cantidadRespuestas, iteracionesMaximasRespuestas);

let $botonCorregir = document.querySelector("#boton-corregir");
$botonCorregir.addEventListener('click', corregirExamen);

let $botonResetear = document.querySelector("#boton-resetear");
$botonResetear.addEventListener('click', resetearExamen)

function resetearExamen() {
  window.location.reload();
}

export { cantidadPreguntas }

