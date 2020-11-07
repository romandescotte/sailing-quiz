'use strict'

      

//Constructor de clase de objeto pregunta

function Pregunta(id_pregunta, seccion, id_seccion, texto, id_numero) {
	this.id_pregunta = id_pregunta;
	this.seccion = seccion;
	this.id_seccion = id_seccion;
	this.texto = texto;		
	this.id_numero = id_numero;

}

//Constructor de clase de objeto respuesta

function Respuesta(id_pregunta, seccion, id_seccion, texto, id_numero) {
	this.id_pregunta = id_pregunta;
	this.seccion = seccion;
	this.id_seccion = id_seccion;
	this.texto = texto;		
	this.id_numero = id_numero;
	
}

//Creando objetos pregunta en base al constructor

let pregunta1 = new Pregunta("P1C", "Expresiones marineras", "C", "¿A qué se conoce como trasluchada?", 1);
let pregunta2 = new Pregunta("P2C", "Expresiones marineras", "C", "¿A qué se conoce como navegar en ceñida?", 2);
let pregunta3 = new Pregunta("P3C", "Expresiones marineras", "C", "¿A qué se conoce como bordejear?", 3);
let pregunta4 = new Pregunta("P4C", "X", "X", "qwe", 4);
let pregunta5 = new Pregunta("P5C", "X", "X", "asd", 5);
let pregunta6 = new Pregunta("P6C", "X", "X", "zxc", 6);
let pregunta7 = new Pregunta("P7C", "X", "X", "rty", 7);
let pregunta8 = new Pregunta("P8C", "X", "X", "fgh", 8);
let pregunta9 = new Pregunta("P9C", "X", "X", "vbn", 9);
let pregunta10 = new Pregunta("P10C", "X", "X", "uio", 10);
let pregunta11 = new Pregunta("P11C", "X", "X", "jkl", 11);


//Agregar la pregunta creado al contenedor:

let contenedorPreguntas = [
                    pregunta1, 
                    pregunta2, 
                    pregunta3, 
                    pregunta4, 
                    pregunta5, 
                    pregunta6, 
                    pregunta7, 
                    pregunta8, 
                    pregunta9,
                    pregunta10,
                    pregunta11
                    ];


//Creando objetos respuesta en base al constructor

let respuesta1 = new Respuesta("R1C", "Expresiones marineras", "C", "Al golpe de la botavara al virar en redondo ó según costumbres a la virada en redondo propiamente dicha", 1);
let respuesta2 = new Respuesta("R2C", "Expresiones marineras", "C", "Navegar con el ángulo más chico posible entre el viento y la línea de crujía", 2);
let respuesta3 = new Respuesta("R3C", "Expresiones marineras", "C", "Sucesión de virados por avante que se realizan con el fin de alcanzar un punto que se encuentra sobre le eje del viento", 3);
let respuesta4 = new Respuesta("R4C", "X", "X", "qwe", 4);
let respuesta5 = new Respuesta("R5C", "X", "X", "asd", 5);
let respuesta6 = new Respuesta("R6C", "X", "X", "zxc", 6);
let respuesta7 = new Respuesta("R7C", "X", "X", "rty", 7);
let respuesta8 = new Respuesta("R8C", "X", "X", "fgh", 8);
let respuesta9 = new Respuesta("R9C", "X", "X", "vbn", 9);
let respuesta10 = new Respuesta("R10C", "X", "X", "uio", 10);
let respuesta11 = new Respuesta("R10C", "X", "X", "jkl", 11);

//Agregar la respuesta creada al contenedor:

let contenedorRespuestas = [
                            respuesta1,
                            respuesta2,
                            respuesta3,
                            respuesta4,
                            respuesta5,
                            respuesta6,
                            respuesta7,
                            respuesta8,
                            respuesta9,
                            respuesta10,
                            respuesta11
                            ];




// Elige numeros al azar sin repetir dada la cantidad deseada, de existir 
// el parametro numeroPreexistente, lo mete adentro del array cajaDeNumeros 
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
//    console.log("Cubilete:" + cajaDeNumeros);
    return cajaDeNumeros;
}   

function ItemsPrevio(pregunta, respuestas) {

    this.pregunta = pregunta;    
    this.respuestas = [];
}

let listaPreviaItemsDePregunta = [];

function seleccionDePreguntas(cantidadDePreguntas, min, max) {
	
    let preguntasSeleccionadas = cubilete(cantidadDePreguntas, undefined, min, max);
    
    //console.log("Preguntas seleccionadas: "+preguntasSeleccionadas); 
    for(let i = 0; i < preguntasSeleccionadas.length; i++) {

        listaPreviaItemsDePregunta.push(new ItemsPrevio(preguntasSeleccionadas[i]));
        
    }    
    return preguntasSeleccionadas; 
}



function seleccionDeRespuestas(cantidadDeRespuestas, min, max) {

   for(let j = 0; j < listaPreviaItemsDePregunta.length ; j++) {

		let nuevasRespuestas = cubilete(cantidadDeRespuestas, listaPreviaItemsDePregunta[j].pregunta, min, max);

		for(let i = 0 ; i < nuevasRespuestas.length; i++) {
			listaPreviaItemsDePregunta[j].respuestas.push(nuevasRespuestas[i]);
		}
   }	         
}





function ItemsExamen(pregunta, respuestas) {
	this.pregunta = pregunta,
	this.respuestas = []
}

let listaItemsExamen = [];

function mezclaRespuestas(min, max) {

	for(let i = 0; i < listaPreviaItemsDePregunta.length; i++) {

		listaItemsExamen.push(new ItemsExamen(listaPreviaItemsDePregunta[i].pregunta));		

	    let cajaMezcladora = [];
    
        while(cajaMezcladora.length < listaPreviaItemsDePregunta[i].respuestas.length) {

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

				listaItemsExamen[i].respuestas.push(listaPreviaItemsDePregunta[i].respuestas[numeroAleatorio]);  
				j++;          
			}  
       }
   }   
   return listaItemsExamen;

}


function muestraPreguntas() {
    
    let contadorId2 = 0;

    for(let i = 0 ; i < listaItemsExamen.length ; i++) {

        let contadorId1 = i + 1;

        let texto_pregunta = `${contadorId1}) ${contenedorPreguntas[listaItemsExamen[i].pregunta].texto}`;

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

        // Crea array con preguntas asignadas
        //preguntasSeleccionadas.push(contenedorPreguntas[j].texto);  

        // Respuestas:
        
        for(let j = 0 ; j < listaItemsExamen[0].respuestas.length; j++) {
            
            contadorId2++;        	
            
            let texto_respuestas = contenedorRespuestas[listaItemsExamen[i].respuestas[j]].texto;           

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

            $crea_li.setAttribute("id", li_id);
            $crea_inputRadio.setAttribute("id", input_id);
            $crea_inputRadio.setAttribute("type","radio");
            $crea_inputRadio.setAttribute("name", input_name);
            $crea_label.setAttribute("for", label_for);
            $crea_label.setAttribute("id", label_id);


            // Asignacion de la respuesta al elemento HTML de la lista:
            //Se selecciona el elemento variable                
            let $label = document.querySelector(`ul[id="${ul_id}"] label[id="${label_id}"]`);

            //Se crea el nodo de texto con la respuesta
            let $nodo_respuesta = document.createTextNode(texto_respuestas);

            //Se adjunta el nodo al elemento.
            $label.appendChild($nodo_respuesta);

            
            
            }

    }
}


// cantidadPreguntas: la cantidad de preguntas que contendrá el examen
// cantidadRespuestas: la cantidad de respuestas que contendrá el examen
// numeroIteracionMaxPreguntas: el motor mezclara hasta este numero de pregunta. No puede superar la longitud del array contenedorPreguntas
// numeroIteracionMaxRespuestas: el motor mezclara hasta este numero de pregunta. No puede superar la longitud del array contenedorRespuestas


function generarExamen(cantidadPreguntas, cantidadRespuestas, numeroIteracionMaxPreguntas, numeroIteracionMaxRespuestas){
    seleccionDePreguntas(cantidadPreguntas, 0, numeroIteracionMaxPreguntas);
    seleccionDeRespuestas(cantidadRespuestas, 0, numeroIteracionMaxRespuestas);
    console.log(listaPreviaItemsDePregunta);
    mezclaRespuestas(0,cantidadRespuestas-1);
    console.log(listaItemsExamen);
    muestraPreguntas();
}

generarExamen(10, 4, 10, 10);
