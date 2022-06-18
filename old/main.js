'use strict'
window.onload =  function(){
/*
<ul>
						<h3 id="pregunta_1"></h3>
						<li id="li_respuesta_1">						    
							<input type="radio" id="respuesta_1" name="pregunta_1">		
							<label for="respuesta_1"></label>				
						</li>
*/








    

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

	var pregunta1 = new Pregunta("P1C", "Expresiones marineras", "C", "¿A qué se conoce como trasluchada?", 1);
	var pregunta2 = new Pregunta("P2C", "Expresiones marineras", "C", "¿A qué se conoce como navegar en ceñida?", 2);
	var pregunta3 = new Pregunta("P3C", "Expresiones marineras", "C", "¿A qué se conoce como bordejear?", 3);
	var pregunta4 = new Pregunta("P4C", "X", "X", "qwe", 4);
	var pregunta5 = new Pregunta("P5C", "X", "X", "asd", 5);
	var pregunta6 = new Pregunta("P6C", "X", "X", "zxc", 6);
	var pregunta7 = new Pregunta("P7C", "X", "X", "rty", 7);
	var pregunta8 = new Pregunta("P8C", "X", "X", "fgh", 8);
    var pregunta9 = new Pregunta("P9C", "X", "X", "vbn", 9);
    var pregunta10 = new Pregunta("P10C", "X", "X", "uio", 10);

    //Agregar la pregunta creado al contenedor:

	var contenedorPreguntas = [
                        pregunta1, 
                        pregunta2, 
                        pregunta3, 
                        pregunta4, 
                        pregunta5, 
                        pregunta6, 
                        pregunta7, 
                        pregunta8, 
                        pregunta9,
                        pregunta10
                        ];

	
	//Creando objetos respuesta en base al constructor

	var respuesta1 = new Respuesta("R1C", "Expresiones marineras", "C", "Al golpe de la botavara al virar en redondo ó según costumbres a la virada en redondo propiamente dicha", 1);
	var respuesta2 = new Respuesta("R2C", "Expresiones marineras", "C", "Navegar con el ángulo más chico posible entre el viento y la línea de crujía", 2);
	var respuesta3 = new Respuesta("R3C", "Expresiones marineras", "C", "Sucesión de virados por avante que se realizan con el fin de alcanzar un punto que se encuentra sobre le eje del viento", 3);
    var respuesta4 = new Respuesta("R4C", "X", "X", "qwe", 4);
    var respuesta5 = new Respuesta("R5C", "X", "X", "asd", 5);
    var respuesta6 = new Respuesta("R6C", "X", "X", "zxc", 6);
    var respuesta7 = new Respuesta("R7C", "X", "X", "rty", 7);
    var respuesta8 = new Respuesta("R8C", "X", "X", "fgh", 8);
    var respuesta9 = new Respuesta("R9C", "X", "X", "vbn", 9);
    var respuesta10 = new Respuesta("R10C", "X", "X", "uio", 10);

    //Agregar la respuesta creada al contenedor:

    var contenedorRespuestas = [
                                respuesta1,
                                respuesta2,
                                respuesta3,
                                respuesta4,
                                respuesta5,
                                respuesta6,
                                respuesta7,
                                respuesta8,
                                respuesta9,
                                respuesta10
                                ];


    //Elige 5 numeros al azar sin repetir.

    function cubilete(cantidad) {

        var caja = [];   

        var agitador = Math.floor(Math.random()*10);      //Math.random() = 0 - 0.99

        caja.push(agitador);   


        while(caja.length > 0 && caja.length < cantidad) {

            var agitador = Math.floor(Math.random()*10);

            function checkIfExist(n){
                return n == agitador;
            }

            var resultado = caja.some(checkIfExist);

            if(resultado == false) {

                caja.push(agitador);

            }  
        }
       //console.log(caja);

       return caja;   

    }

    // Agarra los numeros seleccionados y devuelve las preguntas a las que pertenecen.

    var seleccionadorPreguntas = function(x) {

        var preguntasSeleccionadas = [];

        for(let i = 0; i < x.length ; i++) {

            let j = x[i];

            //Se toma la pregunta a asignar
            var texto_contenedorPregunta = contenedorPreguntas[j].texto;

            preguntasSeleccionadas.push(contenedorPreguntas[j].texto);

            //Asignacion de la respuesta al elemento HTML de la lista:
            //Se selecciona el elemento variable

            var h = i + 1;
            var label = document.querySelector(`ul h3[id="pregunta_${CSS.escape(h)}"]`);

            //Se crea el nodo de texto con la respuesta
            var node_respuesta1 = document.createTextNode(texto_contenedorPregunta);

            //Se adjunta el nodo al elemento.
            label.appendChild(node_respuesta1);
        }

        console.log("Las preguntas son: " + preguntasSeleccionadas);

        return preguntasSeleccionadas;

    };

    seleccionadorPreguntas(cubilete(2));
       
    var seleccionadorRespuestas = function(y) {        

       var respuestasSeleccionadas = [];

       for(let i = 0; i < y.length ; i++) {

           let j = y[i];

           //Se toma la respuesta a asignar  
           var texto_contenedorRespuesta = contenedorRespuestas[j].texto;

           respuestasSeleccionadas.push(texto_contenedorRespuesta);

           // Asignacion de la respuesta al elemento HTML de la lista:
           //Se selecciona el elemento variable

           var h = i + 1;
           
           var label = document.querySelector(`ul li[id="li_respuesta_${CSS.escape(h)}"] label`);

           //Se crea el nodo de texto con la respuesta
           var node_respuesta1 = document.createTextNode(texto_contenedorRespuesta);

           //Se adjunta el nodo al elemento.
           label.appendChild(node_respuesta1);

       }
       console.log("Las respuestas son: " + respuestasSeleccionadas);
       return respuestasSeleccionadas;

    }
    seleccionadorRespuestas(cubilete(8));


};
