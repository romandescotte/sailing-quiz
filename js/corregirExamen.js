'use strict'
import { cantidadPreguntas } from "./main.js" 
import { contenedorItemsExamen } from "./generarExamen.js"
import { contenedorItems } from "./items.js"

function cuentaRespuestasAcertadas() {

    let contadorAcertadas = 0;

    for(let i = 1 ; i <= cantidadPreguntas; i++) {
        
        let string = document.querySelector('#form_preguntas')["name_input_"+i];       
        let $respuestas = string.value;
        // console.log($respuestas);
        let nroPregunta= contenedorItemsExamen[i-1].pregunta;
        if($respuestas === contenedorItems[nroPregunta].textoRespuestaCorrecta) {
            contadorAcertadas++;
        }
    }
    //console.log("Cantidad de respuestas aprobadas: "+ contadorAcertadas);
    return contadorAcertadas;
}

function devolverRespuestasIncorrectas(cantidadPreguntas) {

    let respuestasIncorrectasId = [];
    for(let i = 1 ; i <= cantidadPreguntas; i++) {        
        
        let textoRespuestaUsuario = document.querySelector('#form_preguntas')["name_input_"+i].value; 
        let nroPregunta= contenedorItemsExamen[i-1].pregunta;
        if(textoRespuestaUsuario !== contenedorItems[nroPregunta].textoRespuestaCorrecta) {
            respuestasIncorrectasId.push(i);
        }
    }
    // console.log(respuestasIncorrectasId);
    return respuestasIncorrectasId;
}

function devolverRespuestasCorregidas() {

    let respuestasCorregidas = [];

    for(let i = 1 ; i <= cantidadPreguntas; i++) {        
        
        let textoRespuestaUsuario = document.querySelector('#form_preguntas')["name_input_"+i].value;       
             
        let preguntaId = contenedorItemsExamen[i-1].pregunta;
        if(textoRespuestaUsuario !== contenedorItems[preguntaId].textoRespuestaCorrecta) {
           
            respuestasCorregidas.push(contenedorItems[preguntaId].textoPregunta);
            respuestasCorregidas.push(contenedorItems[preguntaId].textoRespuestaCorrecta);
        }
    }
    
    return respuestasCorregidas;
}

function sacaPromedio() {
    
    let sumaRespuestasAcertadas = cuentaRespuestasAcertadas();
    let promedio = (sumaRespuestasAcertadas/cantidadPreguntas).toFixed(2)*100;    
    return promedio;
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
}

function ocultaPopUp() {
    const $popUpContainer = document.querySelector('.popup-container');    
    $popUpContainer.classList.toggle('fadein');
}

function corregirExamen() {
    const promedio = sacaPromedio();
    // const numeroPreguntaIncorrecta = devolverRespuestasEquivocadas();
    const respuestasCorregidas = devolverRespuestasCorregidas();
    let estadoExamen = false;
    if(promedio > 70) {
        estadoExamen = true;
    } 
    
    muestraPopUp(promedio, estadoExamen);
    const $botonCerrar = document.querySelector('#btn-cerrar');
    $botonCerrar.addEventListener('click', ocultaPopUp);
    devolverRespuestasIncorrectas(cantidadPreguntas);

}

export { corregirExamen }