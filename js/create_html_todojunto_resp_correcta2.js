'use strict'
//Hay que modificar la estructura de objetos para que al mezclar preguntas con respuestas no figuren 
//respuestas que no tegan que ver con la pregunta y que no sea facil de responer.
//Para ello vamos a generar un objeto pregunta que contenga las respuestas posibles. 

function PreguntasyRespuestas(numeroPregunta, textoPregunta, numeroRespuestaCorrecta, textoRespuestaCorrecta, respuestasPosibles) {
    
    this.numeroPregunta = numeroPregunta;
    this.textoPregunta = textoPregunta;
    this.numeroRespuestaCorrecta = numeroRespuestaCorrecta;
    this.textoRespuestaCorrecta = textoRespuestaCorrecta;    
    this.respuestasPosibles = respuestasPosibles;
}      
    


let item1 = new PreguntasyRespuestas(1, "asd?", 1, "asd", ["qwe","rty","uio","fgh","jkl", "zxc", "vbn"]);
let item2 = new PreguntasyRespuestas(2, "fgh?", 2, "fgh", ["qwe","rty","uio","asd","jkl", "zxc", "vbn"]);
let item3 = new PreguntasyRespuestas(3, "jkl?", 3, "jkl", ["qwe","rty","uio","asd","fgh", "zxc", "vbn"]);
let item4 = new PreguntasyRespuestas(4, "zxc?", 4, "zxc", ["qwe","rty","uio","asd","jkl", "fgh", "vbn"]);
let item5 = new PreguntasyRespuestas(5, "vbn?", 5, "vbn", ["qwe","rty","uio","asd","jkl", "zxc", "fgh"]);
let item6 = new PreguntasyRespuestas(6, "rty?", 6, "rty", ["qwe","fgh","uio","asd","jkl", "zxc", "vbn"]);
let item7 = new PreguntasyRespuestas(7, "uio?", 7, "uio", ["qwe","rty","fgh","asd","jkl", "zxc", "vbn"]);

let contenedorItems = [item1,item2,item3,item4,item5,item6,item7];


function cubilete(cantidadDeNumeros, numeroPreexistente, min, max) {        
    
    let cajaDeNumeros = [];
    cajaDeNumeros.push(numeroPreexistente);    
    if(cajaDeNumeros[0] == undefined ) {
        cajaDeNumeros.pop();
    } 
        while(cajaDeNumeros.length < cantidadDeNumeros) {
        function generaNumeroAleatorio (min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
        }
        let numeroAleatorio = generaNumeroAleatorio(min, max);

        function chequeaSiExiste(elementosDelArray) {
            return elementosDelArray == numeroAleatorio;
        }

        let resultadoChequeaSiExiste = cajaDeNumeros.some(chequeaSiExiste);        
        if(resultadoChequeaSiExiste == false) {
            cajaDeNumeros.push(numeroAleatorio);            
        }  
    }    
    //console.log("Cubilete:" + cajaDeNumeros);
    return cajaDeNumeros;
}   

function ItemsPrevio(pregunta, respuestas) {

    this.pregunta = pregunta;    
    this.respuestas = [];
}

let contenedorItemsPrevio = [];

let cantidadPreguntasContenedorItems = contenedorItems.length;

function seleccionadorPreguntas(cantidadDePreguntas, min, max) {

    let preguntasSeleccionadas = cubilete(cantidadDePreguntas, undefined, min, max);    
    for(let i = 0; i < preguntasSeleccionadas.length; i++) {

        contenedorItemsPrevio.push(new ItemsPrevio(preguntasSeleccionadas[i]));        
    }    
    return preguntasSeleccionadas; 
}

function seleccionadorRespuestas(cantidadDeRespuestas, min, max) {

   for(let j = 0; j < contenedorItemsPrevio.length ; j++) {
        let nroPregunta = contenedorItemsPrevio[j].pregunta;
        max = contenedorItems[nroPregunta].respuestasPosibles.length-1;
        let nuevasRespuestas = cubilete(cantidadDeRespuestas, contenedorItemsPrevio[j].pregunta, min, max);
        for(let i = 0 ; i < nuevasRespuestas.length; i++) {

            contenedorItemsPrevio[j].respuestas.push(nuevasRespuestas[i]);
        }
   }         
}

function ItemsExamen(pregunta, respuestas) {
    this.pregunta = pregunta,
    this.respuestas = []
}

let contenedorItemsExamen = [];

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
        let h3_id = `h3_pregunta_${contadorId1}`;
        $crea_h3.setAttribute("id", h3_id);                            

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
        }
    }
}
//Solo cambiar cantidadPreguntas y cantidadRespuestas

function generarExamen(cantidadPreguntas, cantidadRespuestas, numeroIteracionMaxPreguntas) {

    if(cantidadPreguntas <= cantidadPreguntasContenedorItems) {

        seleccionadorPreguntas(cantidadPreguntas, 0, numeroIteracionMaxPreguntas);
        seleccionadorRespuestas(cantidadRespuestas, 0);
        console.log(contenedorItemsPrevio);
        mezclaRespuestas(0,cantidadRespuestas-1);
        console.log(contenedorItemsExamen);
        muestraItemsExamen();       
    } else {    

        console.log("El número requerido de preguntas a mostrar es mayor a la cantidad de preguntas disponibles");
    }
}

generarExamen(7, 4, cantidadPreguntasContenedorItems-1);