'use strict'
import { contenedorItems } from "./items.js";

function generarListaNumeros(cantidad, numeroPreexistente, desdeNumero, hastaNumero) {        
    
    let listaNumeros = [];
    listaNumeros.push(numeroPreexistente);   
	
    if(listaNumeros[0] == undefined ) {
        listaNumeros.pop();
    } 
	
	while(listaNumeros.length < cantidad) {

		function generarNumeroAleatorio(desdeNumero, hastaNumero) {
			/*desdeNumero = Math.ceil(desdeNumero);
			hastaNumero = Math.floor(hastaNumero);*/
			return Math.floor(Math.random() * (hastaNumero - desdeNumero + 1) + desdeNumero); //desdeNumero y hastNumero son inclusivos 
		}

		let numeroAleatorio = generarNumeroAleatorio(desdeNumero, hastaNumero);
	
		// function chequeaSiExiste(elementosDelArray) {
		// 	return elementosDelArray == numeroAleatorio;
		// }
	
		let numeroExistente = listaNumeros.some(numero => numero === numeroAleatorio);      

		if(!numeroExistente) {
            listaNumeros.push(numeroAleatorio)
        } 
    }    
  	//console.log("Cubilete:" + listaNumeros);
    return listaNumeros;
}   

function ItemsPrevio(pregunta, respuestas) {

    this.pregunta = pregunta;    
    this.respuestas = [];
}

let contenedorItemsPrevio = [];

function ItemsExamen(pregunta, respuestas) {
	this.pregunta = pregunta,
	this.respuestas = []
}

let contenedorItemsExamen = [];



function seleccionadorPreguntas(cantidadDePreguntas) {
    
    let preguntasSeleccionadas = generarListaNumeros(cantidadDePreguntas, undefined, 0, cantidadMaximaPreguntas-1);    
    for(let i = 0; i < preguntasSeleccionadas.length; i++) {

        contenedorItemsPrevio.push(new ItemsPrevio(preguntasSeleccionadas[i]));        
    }    
    return preguntasSeleccionadas; 
}

function seleccionadorRespuestas(cantidadDeRespuestas) {
    
    for(let i = 0; i < contenedorItemsPrevio.length ; i++) {

        let idPregunta = contenedorItemsPrevio[i].pregunta;

        //prueba si es correcto el objeto item.
        if(typeof contenedorItems[idPregunta].numeroRespuestaCorrecta !== 'number') {
            
            console.error(`Se halló un error en la pregunta ${contenedorItems[idPregunta].numeroPregunta}`, contenedorItems[idPregunta]); 
        }         
           
        let cantidadMaximaRespuestas = contenedorItems[idPregunta].respuestasPosibles.length-1;
        
        let nuevasRespuestas = generarListaNumeros(cantidadDeRespuestas, idPregunta, 0, cantidadMaximaRespuestas);       

        if(cantidadDeRespuestas > cantidadMaximaRespuestas + 1) {
        
           alert(`El número de respuestas solicitado (${cantidadDeRespuestas}) es mayor a la cantidad de respuestas posibles. Esto ocurrió en la pregunta N° ${contenedorItems[idPregunta].numeroPregunta} `);
           break;
        } else {
            for(let j = 0 ; j < nuevasRespuestas.length; j++) {
            
                contenedorItemsPrevio[i].respuestas.push(nuevasRespuestas[j]);
            }
        }        
    }  
}



function mezclaRespuestas(min, max) {
   
	for(let i = 0; i < contenedorItemsPrevio.length; i++) {

		contenedorItemsExamen.push(new ItemsExamen(contenedorItemsPrevio[i].pregunta));		
	    let cajaMezcladora = [];    
        while(cajaMezcladora.length < contenedorItemsPrevio[i].respuestas.length) {

            function generaNumeroAleatorio (min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
            }
            let numeroAleatorio = generaNumeroAleatorio(min, max);
			function chequeaSiExiste(elementosDelArray) {

				return elementosDelArray == numeroAleatorio;
			}

			let resultadoChequeaSiExiste = cajaMezcladora.some(chequeaSiExiste);  			
			if(resultadoChequeaSiExiste == false) {

                let j = 0;
				cajaMezcladora.push(numeroAleatorio);
				contenedorItemsExamen[i].respuestas.push(contenedorItemsPrevio[i].respuestas[numeroAleatorio]);  
				j++;          
			}  
       }
   }   
   return contenedorItemsExamen;
}

function muestraItemsExamen() {
    
    let contadorId2 = 0;
    for(let i = 0 ; i < contenedorItemsExamen.length ; i++) {

        let contadorId1 = i + 1;
        let texto_pregunta = `${contadorId1}) ${contenedorItems[contenedorItemsExamen[i].pregunta].textoPregunta}`;

        //Agarra formulario existente
        let $formulario = document.getElementById('form_preguntas');

        //Crea elementos
        let $crea_ul = document.createElement('ul');
        let $crea_h3 = document.createElement('h3');        

        //Adjunta elementos creados
        $formulario.appendChild($crea_ul);
        $crea_ul.appendChild($crea_h3);

        //Setea atributos        
        let ul_id = `ul_pregunta_${contadorId1}`;
        $crea_ul.setAttribute("id", ul_id);
        $crea_ul.classList.add('items');
        let h3_id = `h3_pregunta_${contadorId1}`;
        $crea_h3.setAttribute("id", h3_id); 
        $crea_h3.classList.add('titulo-pregunta');
        


        //Se selecciona el elemento variable            
        let $h3 = document.querySelector(`h3[id="h3_pregunta_${contadorId1}"]`);

        //Se crea el nodo de texto con la respuesta
        let $nodo_texto_pregunta = document.createTextNode(texto_pregunta);

        //Se adjunta el nodo al elemento.
        $h3.appendChild($nodo_texto_pregunta);

        // Respuestas:
        
        for(let j = 0 ; j < contenedorItemsExamen[0].respuestas.length; j++) {
            
            contadorId2++;        	
            let nroRespuesta = contenedorItemsExamen[i].respuestas[j];
            let nroPregunta = contenedorItemsExamen[i].pregunta;
            var texto_respuestas;                       
            if(nroRespuesta == nroPregunta) {

            	texto_respuestas = `${contenedorItems[nroPregunta].textoRespuestaCorrecta}`;
            } else {

            	texto_respuestas = `${contenedorItems[nroPregunta].respuestasPosibles[nroRespuesta]}`;
            }                     

            //Seleccionar el elemento existente
            let $ul = document.querySelector(`ul[id="ul_pregunta_${contadorId1}"]`);

            //Crear elementos 
            let $crea_li = document.createElement("li");
            let $crea_inputRadio = document.createElement("input");                
            let $crea_label = document.createElement("label");  

            //Adjuntar elementos creados
            $ul.appendChild($crea_li);
            $ul.appendChild($crea_inputRadio);
            $ul.appendChild($crea_label);           

            //Setear atributos
            let li_id = `li_respuesta_${contadorId2}`;
            let input_id = `input_respuesta_${contadorId2}`;
            let input_name = `name_input_${contadorId1}`;
            let label_for = input_id;
            let label_id = `id_label_${contadorId2}`; 
            let input_value = texto_respuestas;                        

            $crea_li.setAttribute("id", li_id);
            $crea_li.classList.add('respuestas');
            $crea_inputRadio.setAttribute("id", input_id);
            $crea_inputRadio.setAttribute("type","radio");
            $crea_inputRadio.setAttribute("name", input_name);
            $crea_label.setAttribute("for", label_for);
            $crea_label.setAttribute("id", label_id);
            $crea_inputRadio.setAttribute("value", input_value);


            //Asignacion de la respuesta al elemento HTML de la lista:
            //Se selecciona el elemento variable                
            let $label = document.querySelector(`ul[id="${ul_id}"] label[id="${label_id}"]`);

            //Se crea el nodo de texto con la respuesta
            let $nodo_respuesta = document.createTextNode(texto_respuestas);

            //Se adjunta el nodo al elemento.
            $label.appendChild($nodo_respuesta); 
            $crea_li.appendChild($crea_inputRadio);   
            $crea_li.appendChild($crea_label);

        }
    }
}


function generarExamen(cantidadPreguntas, cantidadRespuestas) {

	if(cantidadPreguntas <= cantidadMaximaPreguntas) {

		seleccionadorPreguntas(cantidadPreguntas);
	    seleccionadorRespuestas(cantidadRespuestas);
	    //console.log(contenedorItemsPrevio);
	    mezclaRespuestas(0,cantidadRespuestas-1);
	    //console.log("contenedorItemsExamen: ",contenedorItemsExamen);
	    muestraItemsExamen();		
	} else {    

    	alert("El número requerido de preguntas a mostrar es mayor a la cantidad de preguntas disponibles");
	}
}

let cantidadMaximaPreguntas = contenedorItems.length;

let cantidadPreguntas = 20; //96 maximo
let cantidadRespuestas = 4; //si pongo mas de 4 a veces se traba el loop y aveces entra en el if que comprueba si hay respuestas posibles

generarExamen(cantidadPreguntas, cantidadRespuestas);

let $botonCorregir = document.querySelector("#boton-corregir");

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

function sacaPromedio() {
    
    let sumaRespuestasAcertadas = cuentaRespuestasAcertadas();

    let promedio = (sumaRespuestasAcertadas/cantidadPreguntas).toFixed(2);

    if(promedio > 7 ) {
        console.log(`
        Examen APROBADO. 
        Cantidad de respuestas aprobadas: ${sumaRespuestasAcertadas}. 
        El promedio obtenido es de ${promedio}` 
        );    
        alert(`
        Examen APROBADO. 
        Cantidad de respuestas aprobadas: ${sumaRespuestasAcertadas}. 
        El promedio obtenido es de ${promedio}` 
        );
    } else {
        console.log(`
        Examen DESAPROBADO. 
        Cantidad de respuestas aprobadas: ${sumaRespuestasAcertadas}. 
        El promedio obtenido es de ${promedio}` 
        );    
        alert(`
        Examen DESAPROBADO. 
        Cantidad de respuestas aprobadas: ${sumaRespuestasAcertadas}. 
        El promedio obtenido es de ${promedio}` 
        );       
    }    
    return promedio;
}



$botonCorregir.addEventListener('click', sacaPromedio);

