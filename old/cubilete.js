'use strict'

//Prueba cubilete, saca todos los elementos de un array al azar

function excluir() {

    var letras = ["a", "b", "c", "d", "e"];

    console.log(letras.length);

    for(let i = letras.length; i > 0; i--) {

        letras.pop();
        console.log(letras);
        console.log(letras.length);

    }

	
};

excluir();



//Arroja 5 numeros al azar y los aloja en un array

function cubilete() {

    var agitador = Math.floor(Math.random()*10);      //math.random() 0 - 0.99
    var cajaNumeros = [];  
    cajaNumeros.push(agitador);   
    
    while(cajaNumeros.length > 0 && cajaNumeros.length < 5) {
        
        var agitador = Math.floor(Math.random()*10);

        function equal(n){
            return n == agitador;
        }
        var resultado = cajaNumeros.some(equal);

        if(resultado == false) {

            cajaNumeros.push(agitador);

        }  
    }
    return cajaNumeros; 

}
cubilete();
