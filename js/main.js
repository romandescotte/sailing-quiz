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
    
let item1 = new PreguntasyRespuestas(1, "¿Qué son los baos?", 1, "Vigas que en unión con las cuadernas conforman el soporte de la cubierta", 
["Piezas robustas que continúa a la quilla y terminan el buque por la popa",
"Piezas que continúan la quilla en el extremo de proa de la embarcación",
"Canto superior del costado de un buque", 
"Ninguna es la correcta"]);

let item2 = new PreguntasyRespuestas(2, "¿Cuál es el puño de amura?", 2, "El puño comprendido entre el pujamen y el gratil", 
["Puño al que se le sujeta la driza",
"El puño comprendido entre la baluma y el gratil",
"Puño inferior en el que se afirma la escota",
"Ninguna es la correcta"]);

let item3 = new PreguntasyRespuestas(3, "¿Qué es la carlinga?", 3, "Herraje en donde encaja el pie del mástil", 
["Orificio de la cubierta por el cual se erige el mástil, cuando éste es pasante",
"Cable que sostiene el palo lateralmente y hacia popa",
"Mecanismo que sirve para impedir que la botavara se eleve por efecto del viento",
"Ninguna es la correcta"]);

let item4 = new PreguntasyRespuestas(4, "¿Qué son las relingas?", 4, "Cabos que refuerzan el borde de algunas velas y facilitan su inserción en la ranura del mástil o botavara", 
["Orificios practicados en las velas que sirven para reducir la superficie vélica",
"Refuerzos insertados en la vela que sirven para sostener la baluma y darle forma",
"Ojales metálicos por donde se pasan los cabos de las velas",
"Ninguna es la correcta"]);

let item5 = new PreguntasyRespuestas(5, "¿Cuál de las siguientes veles presenta mayor superficie?", 5, "Genoa 1", 
["Genoa 3",
"Foque",
"Tormentín",
"Ninguna es la correcta"]);

let item6 = new PreguntasyRespuestas(6, "¿Qué es la botavara?", 6, "Palo horizontal unida al mástil por medio del pinzote sobre la que se sujeta el pujamen de una vela", ["Cable sobre el que se enverga la vela proel y que además soporta el palo impidiendo que caiga a popa",
"Pieza metálica sujeta al casco desde donde se sostiene el obenque",
"Palo vertical que sostiene la arboladura",
"Ninguna es la correcta"]);

let item7 = new PreguntasyRespuestas(7, "La capacidad del barco para sostenerse sobre la superficie del agua se denomina…", 7, "Flotabilidad", 
["Habitabilidad",
"Navegabilidad",
"Estabilidad",
"Ninguna es la correcta"]);

let item8 = new PreguntasyRespuestas(8, "Nombre el aparejo que cuenta con un solo palo y dos velas en proa", 8, "Cutter", 
["Queche",
"Yol",
"Sloop",
"Ninguna es la correcta"]);

let item9 = new PreguntasyRespuestas(9, '¿A qué refiere el término "jarcia firme"?', 9, "", 
["Conjunto de cables (estays y obenques) que sostienen el palo del barco",
"Cabos utilizados para sujetar las velas",
"Mecanismo que sirve para impedir que la botavara se eleve",
'Varanda en forma de "V" a proa del barco']);

let item10 = new PreguntasyRespuestas(10, "¿Cómo se llama el nombre del palo a popa del palo mayor en un aparejo Queche?", 10, 
"Mesana", 
["Trinquete",
"Yankee",
"Cutter",
"Ninguna es la correcta"]);

let item11 = new PreguntasyRespuestas(11, "Navegando a un descuartelar el barco recibe el viento…", 11, "Entre la amura y el través", 
["De manera perpendicular a la línea de crujía",
"Por la popa",
"Entre el través y la aleta",
"Ninguna es la correcta"]);

let item12 = new PreguntasyRespuestas(12, "En un spring de proa se amarra el barco", 12, "Desde su proa hacia cornamusa del muelle que se  encuentra a popa del barco", 
["Desde su popa hacia la cornamusa del muelle que se encuentra a proa del barco",
"Desde su proa hacia la cornamusa del muelle que se encuentra por delante de la proa del barco",
"Desde su popa hacia la cornamusa del muelle que se encuentra a por detrás de la popa del barco",
"Ninguna es la correcta"]);

let item13 = new PreguntasyRespuestas(13, '¿Cuál de los siguientes nudos debo realizar para formara una "gaza"?', 13, "As de guía", 
["Llano",
"Ballestrinque",
"Lasca",
"Ninguna es la correcta"]);

let item14 = new PreguntasyRespuestas(14, "Seleccione el nombre de la maniobra por la cual la popa del barco atraviesa el eje del viento", 14, "Virar en redondo", 
["Virar por avante",
"Bordejear",
"Derivar",
"Ninguna es la correcta"]);

let item15 = new PreguntasyRespuestas(15, '¿Qué acción realiza el barco al "orzar"?', 15, "Dirige su proa hacia barlovento", 
["Dirige su proa hacia sotavento",
"Cae a babor",
"Cae a estribor",
"Ninguna es la correcta"]);

let item16 = new PreguntasyRespuestas(16, "Un chicote es…", 16, "La parte más corta del cabo que se utiliza para hacer un nudo", 
["Una forma que se realiza sobre un cabo a fin de estibarlo convenientemente",
"La parte más larga del cabo que no interviene en el nudo",
"Un lazo cerrado que se obtiene plegando un cabo sobre sí mismo",
"Ninguna es la correcta"]);

let item17 = new PreguntasyRespuestas(17, "¿Qué quiere decir “filar”?", 17, 'Liberar lentamente la tensión de la "escota" en función de aumentar el ángulo que forma la vela con la línea de crujía', 
["Jalar de la ”escota” para disminuir el ángulo que forma la vela con la línea de crujía",
"Jalar de la “driza” de la vela para izarla a tope",
"Soltar la “driza” a fin que la vela caiga sobre cubierta",
"Ninguna es la correcta"]);

let item18 = new PreguntasyRespuestas(18, "¿En cuál de las siguientes sitaciones una embarcación se encuentra amurada a estribor?", 18, "Cuando recibe el viento por la banda estribor", 
["Cuando recibe el viento por la banda babor",
"Cuando recibe el viento por la proa",
"Cuando recibe el viento por la popa",
"Ninguna es la correcta"]);

// let item8 = new PreguntasyRespuestas(8, "", 8, "", ["","","",""]);
// let item8 = new PreguntasyRespuestas(8, "", 8, "", ["","","",""]);
// let item8 = new PreguntasyRespuestas(8, "", 8, "", ["","","",""]);
// let item8 = new PreguntasyRespuestas(8, "", 8, "", ["","","",""]);


let contenedorItems = [item1,item2,item3,item4,item5,item6,item7];


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

        let cantidadMaximaRespuestas = contenedorItems[idPregunta].respuestasPosibles.length-1;

        let nuevasRespuestas = generarListaNumeros(cantidadDeRespuestas, contenedorItemsPrevio[i].pregunta, 0, cantidadMaximaRespuestas);
       

        if(cantidadDeRespuestas > cantidadMaximaRespuestas + 1) {
            console.log(`El número de respuestas solicitado (${cantidadDeRespuestas}) es mayor a la cantidad de respuestas posibles. Esto ocurrió en la pregunta N° ${contenedorItems[idPregunta].numeroPregunta} `);
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


function generarExamen(cantidadPreguntas, cantidadRespuestas) {

	if(cantidadPreguntas <= cantidadMaximaPreguntas) {

		seleccionadorPreguntas(cantidadPreguntas);
	    seleccionadorRespuestas(cantidadRespuestas);
	    //console.log(contenedorItemsPrevio);
	    mezclaRespuestas(0,cantidadRespuestas-1);
	    console.log("contenedorItemsExamen: ",contenedorItemsExamen);
	    muestraItemsExamen();		
	} else {    

    	console.log("El número requerido de preguntas a mostrar es mayor a la cantidad de preguntas disponibles");
	}
}

let cantidadMaximaPreguntas = contenedorItems.length;

let cantidadPreguntas = 7;
let cantidadRespuestas = 4;

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
    console.log("Cantidad de respuestas aprobadas: "+ contadorAcertadas);
    return contadorAcertadas;
}

function sacaPromedio() {
    
    let sumaRespuestasAcertadas = cuentaRespuestasAcertadas();
    let promedio = (sumaRespuestasAcertadas/cantidadPreguntas).toFixed(2);
    console.log("El promedio es: "+promedio);
    return promedio;
}

$botonCorregir.addEventListener('click', sacaPromedio);

