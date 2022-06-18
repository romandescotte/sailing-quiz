'use strict'
window.onload =  function(){
        

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
    
    // Voy a tratar de poner las dos funciones en una para poder asignar en orden los elementos HTML.
    // Agarra los numeros seleccionados y devuelve las preguntas a las que pertenecen.


    var seleccionadorPYR = function(cant_preguntas, cant_respuestas) {

        var preguntasSeleccionadas = [];        
        var g = 0;
        for(let i = 0; i < cant_preguntas.length ; i++) {

            let j = cant_preguntas[i];
            var h = i + 1;

            //Crea elementos
            var create_ul = document.createElement("ul");            
            var createh3 = document.createElement("h3");

            //Crea nodos
            var ul_node = document.createTextNode("--------------unordered list--------------");           

            // Encontrar elemento existente
            var form = document.getElementById("form_preguntas");

            //Adjunta lista a elemento existente
            form.appendChild(create_ul);
            
            //Adjunta elementos nuevos
            create_ul.appendChild(ul_node);
            create_ul.appendChild(createh3); 

            //Setear atributos
            var ul_id = "ul_pregunta_"+h;
            create_ul.setAttribute("id", ul_id);
            var h3_id = "h3_pregunta_"+h;
            createh3.setAttribute("id", h3_id);

            //Se toma la pregunta a asignar
            var texto_contenedorPregunta = contenedorPreguntas[j].texto;                              

            //Se selecciona el elemento variable            
            var wrapper_h3 = document.querySelector(`h3[id="h3_pregunta_${CSS.escape(h)}"]`);

            //Se crea el nodo de texto con la respuesta
            var node_pregunta = document.createTextNode(texto_contenedorPregunta);

            //Se adjunta el nodo al elemento.
            wrapper_h3.appendChild(node_pregunta);

            // Crea array con preguntas asignadas
            preguntasSeleccionadas.push(contenedorPreguntas[j].texto);  

            //------------------------RESPUESTAS--------------------------------------------


            var respuestasSeleccionadas = [];


            for(let i = 0; i < 4 ; i++) {

                let k = cant_respuestas[g];
                g++;

                //Se toma la respuesta a asignar  
                var texto_contenedorRespuesta = contenedorRespuestas[k].texto;

                respuestasSeleccionadas.push(texto_contenedorRespuesta);                

                //Crear elementos 

                var list = document.createElement("li");
                var inputRadio = document.createElement("input");                
                var labelHtml = document.createElement("label");                   

                //Crear nodos nuevos
                //var list_node = document.createTextNode("Dentro del <LI>");
                //var inputRadio_node = document.createTextNode("---------input radio-----------");
                var labelHtml_node = document.createTextNode("Dentro del label, respuesta: ");                               

                //Adjuntar nodos
                //list.appendChild(list_node);
                //inputRadio.appendChild(inputRadio_node);
                labelHtml.appendChild(labelHtml_node);

                //Seleccionar el elemento existente
                var wrapper_ul = document.querySelector(`ul[id="ul_pregunta_${CSS.escape(h)}"]`);

                //Adjuntar elementos nuevos a existentes

                wrapper_ul.appendChild(list);
                list.appendChild(inputRadio);
                list.appendChild(labelHtml);             

                //Setear atributos
                var li_id = "li_respuesta_"+g;
                var input_id = "input_respuesta_"+g;
                var input_name = "name_input_"+h;
                var label_for = input_id;
                var label_id = "id_label"+g;              

                list.setAttribute("id", li_id);
                inputRadio.setAttribute("id", input_id);
                inputRadio.setAttribute("type","radio");
                inputRadio.setAttribute("name", input_name);
                labelHtml.setAttribute("for", label_for);
                labelHtml.setAttribute("id", label_id);


                // Asignacion de la respuesta al elemento HTML de la lista:
                //Se selecciona el elemento variable                
                var label = document.querySelector(`ul[id="${CSS.escape(ul_id)}"] li[id="${CSS.escape(li_id)}"] label[id="${CSS.escape(label_id)}"]`);

                //Se crea el nodo de texto con la respuesta
                var nodo_respuesta = document.createTextNode(texto_contenedorRespuesta);

                //Se adjunta el nodo al elemento.
                label.appendChild(nodo_respuesta);


/*
                //Creacion de respuestas "ninguna de las anteriores"
                // Para que esto funcione 100% solo falta agregar los atributos correspondientes en la 
                //seccion mas abajo
                
                let q = 0;
                q++;
                
                if(q < cant_preguntas.length && i == 3) {
                                                          
                    //Crear elemento
                    var inputRadioDos = document.createElement("input");
                    var labelHtmlDos = document.createElement("label");
                    var listDos = document.createElement("li");

                    //Crear nodo
                    var labelHtmlDos_node = document.createTextNode("Ninguna de las anteriores");

                    //Adjuntar nodo
                    labelHtmlDos.appendChild(labelHtmlDos_node);

                    //Selecciono el elemento existente al cual adjuntar
                    wrapper_ul.appendChild(listDos);
                    listDos.appendChild(inputRadioDos);
                    listDos.appendChild(labelHtmlDos);

                    //

                    var v = g + 1;
                    //Setear atributos
                    //var listDos_id = g+1;
                    var inputRadioDos_id = "input_respuesta_"+v; //REPETIR ESTO EN LAS OTRAS
                    //var inputRadioDos_name = ;
                    //var labelHtmlDos_id = ;
                    //var labelHtmlDos_name = ;

                    
                    inputRadioDos.setAttribute("type", "radio");
                    inputRadioDos.setAttribute("id", inputRadioDos_id);
                    labelHtmlDos.setAttribute("for", input_id);


                }

                
*/
            }
           
            //------------------------------------------------------------------------------
            
            

           





        } // <---------FIN DEL FOR
        console.log("Las respuestas son: " + respuestasSeleccionadas);
        console.log("Las preguntas son: " + preguntasSeleccionadas);

        return preguntasSeleccionadas;
    }


    seleccionadorPYR(cubilete(2), cubilete(8));

};
