
// Cargamos el js despues de que cargo todo el dom
document.addEventListener('DOMContentLoaded', function() {
    // Asignamos las variables que toman estractos del html para poder trabajar en ellos
    const operaciones = document.querySelector('#operadores');
    
    
    
    //cargamos los eventlisteners referenciando las variables
    cargarEventListeners();
    function cargarEventListeners(){
        operaciones.addEventListener('click',btnCalcular);
    }
    

    //Calculadora

    // Localizamos dentro del dom al boton que ejecutara los calculos
    function btnCalcular (e){
        e.preventDefault();
        if (e.target.classList.contains('btn')){
            tomarNumeros();
        }
    }
    
    // Extraeremos el valor de los numeros ingresados en los inputs
    function tomarNumeros() {
        
        //creamos un array con todos los valores input dentro de operaciones
        const input = operaciones.querySelectorAll('input');

        //extraemos los numeros de los inputs y los almacenamos en un objeto
        const numeros = {
            primerNumero  : parseInt(input[0].value),
            segundoNumero : parseInt(input[1].value),
        }

        // desestructuramos el array para extraer en una variable el input donde se reflejaran los resultados
        const [,,resultado] = input;

        calculos(numeros,resultado);
        
    }
    
    // en esta funcion haremos el calculo matematico y la validacion.
    function calculos(numeros,resultado){
        // aqui tomamos el valor del select
        const operador = operaciones.querySelector('select');
        
        // aqui haremos la validacion de los parametros dentro de los inputs, preguntando si hemos ingresado numeros
        if (isNaN(numeros.primerNumero) || isNaN(numeros.segundoNumero)){
            resultado.value = 'Ingrese ambos números'
        }else{
            // en el caso de que hayamos ingresado numeros, continua el flujo normal
            //El switch discriminara el valor que tiene el select en ese momento para poder hacer la operacion
            switch (operador.value) {
                case 'Suma':
                    resultado.value= numeros.primerNumero + numeros.segundoNumero;
                  break;
                case 'Resta':
                    resultado.value= numeros.primerNumero - numeros.segundoNumero;
                  break;
                case 'Multiplicación':
                    resultado.value= numeros.primerNumero * numeros.segundoNumero;
                  break;
                case 'División':
                    resultado.value= numeros.primerNumero / numeros.segundoNumero;
                  break;
    
              }
        }
    }






    //----------------------------------------//
    
    // Celsius a kelvin-farenheit


});




