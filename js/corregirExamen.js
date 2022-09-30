'use strict'
// import { cantidadPreguntas } from "./main.js" 
import { contenedorItemsExamen } from "./generarExamen.js"
import { contenedorItems } from "./items.js"

function corregirExamen() {
  let cantidadPreguntas = Number(localStorage.getItem('cantidadPreguntas')); 
  const promedio = sacaPromedio(cantidadPreguntas);  
  let estadoExamen = false;
  if(promedio > 70) {
    estadoExamen = true;
  }   
  muestraPopUp(promedio, estadoExamen);
  const $botonCerrar = document.querySelector('#btn-cerrar');
  $botonCerrar.addEventListener('click', ocultaPopUp);
  marcaRespuestasIncorrectas(cantidadPreguntas);
  marcaRespuestasCorrectas(cantidadPreguntas);
}

function sacaPromedio(cantidadPreguntas) {    
  let sumaRespuestasAcertadas = cuentaRespuestasAcertadas(cantidadPreguntas);
  let promedio = (sumaRespuestasAcertadas/cantidadPreguntas).toFixed(2)*100;    
  return promedio;
}

function cuentaRespuestasAcertadas(cantidadPreguntas) {
  let contadorAcertadas = 0;
  for(let i = 1 ; i <= cantidadPreguntas; i++) {      
    let string = document.querySelector('#form_preguntas')["name_input_"+i];       
    let $respuestas = string.value;      
    let nroPregunta = contenedorItemsExamen[i-1].preguntaId-1;
    if($respuestas === contenedorItems[nroPregunta].textoRespuestaCorrecta) {
        contadorAcertadas++;
    }
  }  
  return contadorAcertadas;
}

function muestraPopUp(promedio, estadoExamen) {       
  const $popUpContainer = document.querySelector('.popup-container');    
  const $parrafoCorreccion = document.querySelector('#parrafo-correccion'); 
  
  if($parrafoCorreccion.textContent === '') {
    const $textoExamenCorregido = document.createTextNode(
      `${estadoExamen ? 'Felicitaciones!' : 'Oh no!'}, has ${estadoExamen ? 'aprobado' : 'desaprobado'} el examen con un promedio de: ${promedio}%`);    
    $parrafoCorreccion.appendChild($textoExamenCorregido); 
  } 
  $popUpContainer.classList.toggle('fadein');
  oscurecerFondo();
}

function marcaRespuestasIncorrectas(cantidadPreguntas) {
  for(let i = 1 ; i <= cantidadPreguntas; i++) {      
    let $radioButton = document.examen["name_input_"+i];       
    let respuestaUsuario = $radioButton.value;       
    let nroPregunta = contenedorItemsExamen[i-1].preguntaId-1;   
    let $labelSeleccionado = document.querySelector(`[name="name_input_${i}"][value="${respuestaUsuario}"] + label`);     
    if($labelSeleccionado && respuestaUsuario !== contenedorItems[nroPregunta].textoRespuestaCorrecta) {
        !$labelSeleccionado.classList.contains('incorrecta') ? $labelSeleccionado.classList.add('incorrecta') : '' ;
    }
  }   
}

function marcaRespuestasCorrectas(cantidadPreguntas) {
  for(let i = 1 ; i <= cantidadPreguntas; i++) {
    let nroPregunta = contenedorItemsExamen[i-1].preguntaId-1;
    let respuestaCorrecta = contenedorItems[nroPregunta].textoRespuestaCorrecta;           
    let $respuestaCorrecta = document.examen.querySelector(`[name='name_input_${i}'][value="${respuestaCorrecta}"] + label`);
    !$respuestaCorrecta.classList.contains('corregida') ? $respuestaCorrecta.classList.add('corregida') : '';         
  }
}

function ocultaPopUp() {
  const $popUpContainer = document.querySelector('.popup-container');    
  $popUpContainer.classList.toggle('fadein');
  aclararFondo();
}

function oscurecerFondo() {
  const $body = document.querySelector('body');
  const $restoDeElemetos = document.querySelectorAll('#form_preguntas *');
  $body.classList.toggle('oscurecer');
  $restoDeElemetos.forEach(e => e.classList.toggle('quitar-fondo'));
}

function aclararFondo() {
  const $body = document.querySelector('body');
  $body.classList.toggle('oscurecer');
  const $restoDeElemetos = document.querySelectorAll('#form_preguntas *');
  $restoDeElemetos.forEach(e => e.classList.toggle('quitar-fondo'));
}

export { corregirExamen }