'use strict'


window.onload =  function(){
        
function cubilete(cantidad, pre) {

    var caja = [];

    caja.push(pre);

    if(caja[0] == undefined ) {
        caja.pop();
    }             

    while(caja.length < cantidad) {  

        var agitador = Math.floor(Math.random()*10+1);     

        function check(n){
            return n == agitador;
        }

        var checkCaja = caja.some(check);

        if(checkCaja == false) {

            caja.push(agitador);

        }  
    }
    //console.log(caja);
    return caja;   
}

function ItemDePregunta(pregunta, respuestas) {
    this.pregunta = pregunta;    
    this.respuestas = respuestas;


}

var seleccionDeItems = [];

function agitaPreguntas(cantidad) {               
        var preguntasSeleccionadas = [];
        for (let i = 0; i < cantidad.length ; i++) {

            let idPregunta = cantidad[i]; // numero de pregunta            
            preguntasSeleccionadas.push(idPregunta);   
            seleccionDeItems.push(new ItemDePregunta(idPregunta, cubilete(6)));   
                                

        }
        console.log("Preguntas seleccionadas: " + preguntasSeleccionadas);
         
          
        return preguntasSeleccionadas;
    }


agitaPreguntas(cubilete(10));






console.log(seleccionDeItems);
console.log(seleccionDeItems[0]);
console.log(seleccionDeItems[1]);

};
