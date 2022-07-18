import { generarExamen } from "./generarExamen.js"
import { corregirExamen } from "./corregirExamen.js"

let cantidadPreguntas = 50; //96 maximo
let cantidadRespuestas = 4; //si pongo mas de 4 a veces se traba el loop y aveces entra en el if que comprueba si hay respuestas posibles

generarExamen(cantidadPreguntas, cantidadRespuestas);

let $botonCorregir = document.querySelector("#boton-corregir");
$botonCorregir.addEventListener('click', corregirExamen);

let $botonResetear = document.querySelector("#boton-resetear");
$botonResetear.addEventListener('click', resetearExamen)

function resetearExamen() {
  window.location.reload();
}

export { cantidadPreguntas }

