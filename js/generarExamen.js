import { contenedorItems } from "./items.js";

let contenedorItemsPrevio = [];
let contenedorItemsExamen = [];
let cantidadMaximaPreguntas = contenedorItems.length;

function ItemsPrevio(preguntaId) {
  this.preguntaId = preguntaId;    
  this.respuestas = [];
}

function ItemsExamen(preguntaId) {
	this.preguntaId = preguntaId,
	this.respuestas = []
}

function generarExamen(cantidadPreguntas, cantidadRespuestas) {

  chequeaItems();

	if(cantidadPreguntas <= cantidadMaximaPreguntas) {

		seleccionadorPreguntas(cantidadPreguntas);
    seleccionadorRespuestas(cantidadRespuestas);
    // console.log(contenedorItemsPrevio);
    mezclaRespuestas(0,cantidadRespuestas-1);
    // console.log("contenedorItemsExamen: ",contenedorItemsExamen);
    muestraItemsExamen();		
	} else {  
    alert("El número requerido de preguntas a mostrar es mayor a la cantidad de preguntas disponibles");
	}
}

function seleccionadorPreguntas(cantidadDePreguntas) {    

  let preguntasSeleccionadas = generarListaNumeros(cantidadDePreguntas, undefined, 0, cantidadMaximaPreguntas-1);    
  for(let i = 0; i < preguntasSeleccionadas.length; i++) {
    contenedorItemsPrevio.push(new ItemsPrevio(preguntasSeleccionadas[i]));        
  }    
  // console.log(preguntasSeleccionadas)
  return preguntasSeleccionadas; 
}

function seleccionadorRespuestas(cantidadDeRespuestas) {
    
  let respuestasSeleccionadas = [];

  for(let i = 0; i < contenedorItemsPrevio.length ; i++) {

    let idPregunta = contenedorItemsPrevio[i].preguntaId;            
            
    let cantidadMaximaRespuestas = contenedorItems[idPregunta].respuestasPosibles.length;  
    
    // console.log('respuestas correctas: ', seleccionadorRespuestaCorrecta(i));

    let respuestasId = generarListaNumeros(cantidadDeRespuestas, idPregunta, 0, cantidadMaximaRespuestas-1);       

    let limiteRespuestasMaximasRoto = chequearCantidadMaximaRespuestas(cantidadDeRespuestas, cantidadMaximaRespuestas, idPregunta);
    
    if(limiteRespuestasMaximasRoto) {
      break;
    } else {
      for(let j = 0 ; j < respuestasId.length; j++) {
  
        contenedorItemsPrevio[i].respuestas.push(respuestasId[j]);
        respuestasSeleccionadas.push(respuestasId[j]);        
      }
    } 
  }   
  // console.log('Respuestas seleccionadas: ', respuestasSeleccionadas);
  return respuestasSeleccionadas; 
}

function seleccionadorRespuestaCorrecta(i) {
  
  let idPregunta = contenedorItemsPrevio[i].preguntaId;    
  contenedorItemsPrevio[i].respuestas.push(idPregunta);
  return contenedorItemsPrevio;
}

function mezclaRespuestas(desdeNumero, hastaNumero) {
   
	for(let i = 0; i < contenedorItemsPrevio.length; i++) {

		contenedorItemsExamen.push(new ItemsExamen(contenedorItemsPrevio[i].preguntaId));		
	  let numerosMezclados = [];    
    while(numerosMezclados.length < contenedorItemsPrevio[i].respuestas.length) {

      let numeroAleatorio = generarNumeroAleatorio(desdeNumero, hastaNumero);
           
      let numeroExistente = numerosMezclados.some(numero => numero === numeroAleatorio); 
      
      if(!numeroExistente) {

        numerosMezclados.push(numeroAleatorio);
        contenedorItemsExamen[i].respuestas.push(contenedorItemsPrevio[i].respuestas[numeroAleatorio]);  				         
      }  
    }
  }   
  return contenedorItemsExamen;
}

function muestraItemsExamen() {
    
  let contadorId2 = 0;
  for(let i = 0 ; i < contenedorItemsExamen.length ; i++) {

    let contadorId1 = i + 1;
    let texto_pregunta = `${contadorId1}) ${contenedorItems[contenedorItemsExamen[i].preguntaId].textoPregunta}`;

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

      let respuestaIndex = contenedorItemsExamen[i].respuestas[j];

      let preguntaIndex = contenedorItemsExamen[i].preguntaId;

      var texto_respuestas;         

      if(respuestaIndex === preguntaIndex) {

        texto_respuestas = `${contenedorItems[preguntaIndex].textoRespuestaCorrecta}`;
      } else {

        texto_respuestas = `${contenedorItems[preguntaIndex].respuestasPosibles[respuestaIndex]}`;
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

function generarListaNumeros(cantidad, numeroPreexistente, desdeNumero, hastaNumero) {        
    
  let listaNumeros = [];
  listaNumeros.push(numeroPreexistente);   

  if(listaNumeros[0] === undefined ) {
    listaNumeros.pop();
  }   
	
	while(listaNumeros.length < cantidad) {		

		let numeroAleatorio = generarNumeroAleatorio(desdeNumero, hastaNumero);	
		
		let numeroExistente = listaNumeros.some(numero => numero === numeroAleatorio);      

		if(!numeroExistente) {
      listaNumeros.push(numeroAleatorio)
    } 
  }
  return listaNumeros;
}  

function generarNumeroAleatorio(desdeNumero, hastaNumero) {			
  return Math.floor(Math.random() * (hastaNumero - desdeNumero + 1) + desdeNumero); //desdeNumero y hastNumero son inclusivos 
}

function chequeaItems() {
  for(let item of contenedorItems) {
      // console.log(item);        
      if(typeof item.respuestaCorrectaId !== 'number') {
          console.error(`Se halló un error en el campo respuestaCorrectaId de la pregunta ${item.preguntaId}`, item);
          break;
      }
      if(typeof item.preguntaId !== 'number') {
          console.error(`Se halló un error en el campo preguntaId de la pregunta ${item.preguntaId}`, item);
          break;
      }
  }
}

function chequearCantidadMaximaRespuestas(cantidadDeRespuestas, cantidadMaximaRespuestas, idPregunta) {
  if(cantidadDeRespuestas > cantidadMaximaRespuestas) {        
      console.error(`El número de respuestas solicitado (${cantidadDeRespuestas}) es mayor a la cantidad de respuestas posibles. Esto ocurrió en la pregunta N° ${contenedorItems[idPregunta].preguntaId} `);    
      return true;    
  }
}

export { contenedorItemsExamen, generarExamen }