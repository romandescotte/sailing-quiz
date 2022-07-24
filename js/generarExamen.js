import { contenedorItems } from "./items.js";

let contenedorItemsPrevio = [];
let contenedorItemsExamen = [];
let cantidadMaximaPreguntas = contenedorItems.length;

function ItemsPrevio(preguntaId, textoPregunta) {
  this.preguntaId = preguntaId;    
  this.textoPregunta = textoPregunta;
  this.respuestas = [];
}

function ItemsExamen(preguntaId, textoPregunta) {
	this.preguntaId = preguntaId,
  this.textoPregunta = textoPregunta;
	this.respuestas = []
}

function generarExamen(cantidadPreguntas, cantidadRespuestas, iteracionesMaximasRespuestas) {
  chequeaItems();
	if(cantidadPreguntas <= cantidadMaximaPreguntas) {
		seleccionadorPreguntas(cantidadPreguntas);
    seleccionadorRespuestas(cantidadRespuestas, iteracionesMaximasRespuestas);    
    mezclaRespuestas(cantidadRespuestas);   
    muestraItemsExamen();		
	} else {  
    alert("El número requerido de preguntas a mostrar es mayor a la cantidad de preguntas disponibles");
	}
}

function seleccionadorPreguntas(cantidadDePreguntas) { 
  let indices = generarListaNumeros(cantidadDePreguntas, undefined, 0, cantidadMaximaPreguntas-1);   
  indices.forEach(indice => {
    contenedorItemsPrevio.push(new ItemsPrevio(contenedorItems[indice].preguntaId, contenedorItems[indice].textoPregunta));
    contenedorItemsExamen.push(new ItemsExamen(contenedorItems[indice].preguntaId, contenedorItems[indice].textoPregunta))  
  })
  // console.log("seleccionadorPreguntas => ", contenedorItemsPrevio);
  // console.log("seleccionadorPreguntas => ", contenedorItemsExamen)

  return contenedorItemsPrevio; 
}

function seleccionadorRespuestas(cantidadRespuestas, iteracionesMaximasRespuestas) {
  seleccionaRespuestasCorrectas();
  chequearCantidadMaximaRespuestas(cantidadRespuestas, iteracionesMaximasRespuestas);
  seleccionaRespuestasIncorrectas(cantidadRespuestas, iteracionesMaximasRespuestas);
}

function seleccionaRespuestasCorrectas() {  
  contenedorItemsPrevio.forEach(item => {
    let textoRespuestaCorrecta = contenedorItems[item.preguntaId-1].textoRespuestaCorrecta;
    item.respuestas.push(textoRespuestaCorrecta);    
  });   
  // console.log("seleccionaRespuestasCorrectas => ", contenedorItemsPrevio);
  return contenedorItemsPrevio;
}

function seleccionaRespuestasIncorrectas(cantidadRespuestas, iteracionesMaximasRespuestas) {
  if(cantidadRespuestas > iteracionesMaximasRespuestas+1) {
    contenedorItemsPrevio.forEach(item => {
      contenedorItems[item.preguntaId-1].respuestasPosibles.forEach(respuestas => {
        item.respuestas.push(respuestas);
      })
    })
  } else {
    let respuestasIndices = generarListaNumeros(cantidadRespuestas-1, undefined, 0, iteracionesMaximasRespuestas);
    respuestasIndices.forEach(respuesta => {
      contenedorItemsPrevio.forEach(item => {
       item.respuestas.push(contenedorItems[item.preguntaId-1].respuestasPosibles[respuesta])
      })
    })
  }  
  // console.log("seleccionaRespuestasIncorrectas => ", contenedorItemsPrevio);
  return contenedorItemsPrevio;
}

function mezclaRespuestas(cantidadRespuestas) {
  contenedorItemsExamen.forEach((item, index) => {
    let numerosAleatorios = generarListaNumeros(cantidadRespuestas, undefined, 0, cantidadRespuestas-1)
    numerosAleatorios.forEach(numero => {
      item.respuestas.push(contenedorItemsPrevio[index].respuestas[numero])
    })
  }) 
  // console.log("mezclaRespuestas => ", contenedorItemsExamen);
}

function muestraItemsExamen() {
  muestraPreguntas();
  muestraRespuestas();    
}

function muestraPreguntas() {  

  contenedorItemsExamen.forEach((pregunta, index) => {
    let contadorId1 = index + 1;

    let texto_pregunta = `${contadorId1}) ${pregunta.textoPregunta}`;

    let $formulario = document.getElementById('form_preguntas');

    let $crea_ul = document.createElement('ul');
    let $crea_h3 = document.createElement('h3');        

    $formulario.appendChild($crea_ul);
    $crea_ul.appendChild($crea_h3);

    let ul_id = `ul_pregunta_${contadorId1}`;
    $crea_ul.setAttribute("id", ul_id);
    $crea_ul.classList.add('items');
    let h3_id = `h3_pregunta_${contadorId1}`;
    $crea_h3.setAttribute("id", h3_id); 
    $crea_h3.classList.add('titulo-pregunta');

    let $h3 = document.querySelector(`h3[id="h3_pregunta_${contadorId1}"]`);

    let $nodo_texto_pregunta = document.createTextNode(texto_pregunta);

    $h3.appendChild($nodo_texto_pregunta);
  })  
}

function muestraRespuestas() {
  let contadorId1 = 0;
  let contadorId2 = 0;    
  contenedorItemsExamen.forEach(item => {
    contadorId1++;
    item.respuestas.forEach(respuesta => {
      contadorId2++;

      let $ul = document.querySelector(`ul[id="ul_pregunta_${contadorId1}"]`);
       
      let $crea_li = document.createElement("li");
      let $crea_inputRadio = document.createElement("input");                
      let $crea_label = document.createElement("label");  
    
      $ul.appendChild($crea_li);
      $ul.appendChild($crea_inputRadio);
      $ul.appendChild($crea_label); 
            
      let ul_id = `ul_pregunta_${contadorId1}`;
      let li_id = `li_respuesta_${contadorId2}`;
      let input_id = `input_respuesta_${contadorId2}`;
      let input_name = `name_input_${contadorId1}`;
      let label_for = input_id;
      let label_id = `id_label_${contadorId2}`; 
      let input_value = respuesta;                        

      $crea_li.setAttribute("id", li_id);
      $crea_li.classList.add('respuestas');
      $crea_inputRadio.setAttribute("id", input_id);
      $crea_inputRadio.setAttribute("type","radio");
      $crea_inputRadio.setAttribute("name", input_name);
      $crea_label.setAttribute("for", label_for);
      $crea_label.setAttribute("id", label_id);
      $crea_inputRadio.setAttribute("value", input_value);  
        
      let $label = document.querySelector(`ul[id="${ul_id}"] label[id="${label_id}"]`);
     
      let $nodo_respuesta = document.createTextNode(respuesta);
     
      $label.appendChild($nodo_respuesta); 
      $crea_li.appendChild($crea_inputRadio);   
      $crea_li.appendChild($crea_label);  
    })
  })

    // contadorId1++;

    // for(let j = 0; j < contenedorItemsExamen[i].respuestas.length; j++) {
      
    //   contadorId2++;       
  
      // let respuestaIndex = contenedorItemsExamen[i].respuestas[j];
  
      // let preguntaIndex = contenedorItemsExamen[i].preguntaId;
  
      // var texto_respuestas;         
  
      // if(respuestaIndex === preguntaIndex) {
  
      //   texto_respuestas = `${contenedorItems[preguntaIndex].textoRespuestaCorrecta}`;
      // } else {
  
      //   texto_respuestas = `${contenedorItems[preguntaIndex].respuestasPosibles[respuestaIndex]}`;
      // }                     
  
      // //Seleccionar el elemento existente
      // let $ul = document.querySelector(`ul[id="ul_pregunta_${contadorId1}"]`);
  
      // //Crear elementos 
      // let $crea_li = document.createElement("li");
      // let $crea_inputRadio = document.createElement("input");                
      // let $crea_label = document.createElement("label");  
  
      // //Adjuntar elementos creados
      // $ul.appendChild($crea_li);
      // $ul.appendChild($crea_inputRadio);
      // $ul.appendChild($crea_label);           
  
      // //Setear atributos
      // let ul_id = `ul_pregunta_${contadorId1}`;
      // let li_id = `li_respuesta_${contadorId2}`;
      // let input_id = `input_respuesta_${contadorId2}`;
      // let input_name = `name_input_${contadorId1}`;
      // let label_for = input_id;
      // let label_id = `id_label_${contadorId2}`; 
      // let input_value = texto_respuestas;                        
  
      // $crea_li.setAttribute("id", li_id);
      // $crea_li.classList.add('respuestas');
      // $crea_inputRadio.setAttribute("id", input_id);
      // $crea_inputRadio.setAttribute("type","radio");
      // $crea_inputRadio.setAttribute("name", input_name);
      // $crea_label.setAttribute("for", label_for);
      // $crea_label.setAttribute("id", label_id);
      // $crea_inputRadio.setAttribute("value", input_value);  
  
      // //Asignacion de la respuesta al elemento HTML de la lista:
      // //Se selecciona el elemento variable                
      // let $label = document.querySelector(`ul[id="${ul_id}"] label[id="${label_id}"]`);
  
      // //Se crea el nodo de texto con la respuesta
      // let $nodo_respuesta = document.createTextNode(texto_respuestas);
  
      // //Se adjunta el nodo al elemento.
      // $label.appendChild($nodo_respuesta); 
      // $crea_li.appendChild($crea_inputRadio);   
      // $crea_li.appendChild($crea_label);  
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
      // if(typeof item.respuestaCorrectaId !== 'number') {
      //     console.error(`Se halló un error en el campo respuestaCorrectaId de la pregunta ${item.preguntaId}`, item);
      //     break;
      // }
      if(typeof item.preguntaId !== 'number') {
          console.error(`Se halló un error en el campo preguntaId de la pregunta ${item.preguntaId}`, item);
          break;
      }
  }
}

function chequearCantidadMaximaRespuestas(cantidadRespuestas, iteracionesMaximasRespuestas) {  
  if(cantidadRespuestas > iteracionesMaximasRespuestas+1) { 
    contenedorItemsPrevio.forEach(item => {
      if(cantidadRespuestas > contenedorItems[item.preguntaId-1].respuestasPosibles.length+1) {
        console.error(`El número de respuestas solicitado (${cantidadRespuestas}) es mayor a la cantidad de respuestas posibles. Esto ocurrió en la pregunta N° ${item.preguntaId} `);
      }                  
    })
  }
}

export { contenedorItemsExamen, generarExamen }