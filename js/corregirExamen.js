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
        let nroPregunta= contenedorItemsExamen[i-1].preguntaId;
        if($respuestas === contenedorItems[nroPregunta].textoRespuestaCorrecta) {
            contadorAcertadas++;
        }
    }
    //console.log("Cantidad de respuestas aprobadas: "+ contadorAcertadas);
    return contadorAcertadas;
}

function marcaRespuestasIncorrectas(cantidadPreguntas) {

    for(let i = 1 ; i <= cantidadPreguntas; i++) {
        
        let $ul = document.querySelector('#form_preguntas')["name_input_"+i];       
        let respuestaUsuario = $ul.value;
       
        let nroPregunta = contenedorItemsExamen[i-1].preguntaId;
        if(respuestaUsuario !== contenedorItems[nroPregunta].textoRespuestaCorrecta) {
            
            let cantidadRespuestas = document.examen.querySelectorAll(`.items .respuestas`).length; 
            for(let j = 1; j <= cantidadRespuestas; j++) {
                
                let seleccionado = document.examen.querySelector(`#input_respuesta_${j}`).checked;

                if(seleccionado) {

                    let $label = document.examen.querySelector(`#li_respuesta_${j} #id_label_${j}`);
                    $label.classList.contains('incorrecta') ? '' : $label.classList.add('incorrecta');
                }
            }
        }
    }   
}

function marcaRespuestasCorregidas(cantidadPreguntas) {

    for(let i = 1 ; i <= cantidadPreguntas; i++) {
        
        let $ul = document.querySelector('#form_preguntas')["name_input_"+i];       
        let respuestaUsuario = $ul.value;
        let nroPregunta = contenedorItemsExamen[i-1].preguntaId;

        let respuestaCorrecta = contenedorItems[nroPregunta].textoRespuestaCorrecta;
        if(respuestaUsuario !== respuestaCorrecta) {

            let cantidadRespuestas = document.examen.querySelectorAll(`.items .respuestas`).length;
            let $respuestaCorrecta = document.examen.querySelector(`[value="${respuestaCorrecta}"] + label`);
            !$respuestaCorrecta.classList.contains('corregida') ? $respuestaCorrecta.classList.add('corregida') : '';
        }
    }
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
    
    let estadoExamen = false;
    if(promedio > 70) {
        estadoExamen = true;
    } 
    
    muestraPopUp(promedio, estadoExamen);
    const $botonCerrar = document.querySelector('#btn-cerrar');
    $botonCerrar.addEventListener('click', ocultaPopUp);
    marcaRespuestasIncorrectas(cantidadPreguntas);
    marcaRespuestasCorregidas(cantidadPreguntas);
}

export { corregirExamen }