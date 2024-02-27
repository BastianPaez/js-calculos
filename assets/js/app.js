
// Cargamos el js despues de que cargo todo el dom
document.addEventListener('DOMContentLoaded', function() {
    // Asignamos las variables que toman estractos del html para poder trabajar en ellos
    const operacionesContenedor = document.querySelector('#operadores');
    const gradosContenedor      = document.querySelector('#grados');
    const calculosContenedor    = document.querySelector('#calculos');
    
    
    //cargamos los eventlisteners referenciando las variables
    cargarEventListeners();
    function cargarEventListeners(){
        operacionesContenedor.addEventListener('click',btnOperaciones);
        gradosContenedor.addEventListener('click', btnConvertir);
        calculosContenedor.addEventListener('click', btnCalculos)
    }
    

    //Calculadora

    // Localizamos dentro del dom al boton que ejecutara los calculos
    function btnOperaciones (e){
        e.preventDefault();
        if (e.target.classList.contains('btn')){
            obtenerNumerosOperadores();
        }
    }
    
    // Extraeremos el valor de los numeros ingresados en los inputs
    function obtenerNumerosOperadores() {
        
        //creamos un array con todos los valores input dentro de operaciones
        const input = operacionesContenedor.querySelectorAll('input');

        //extraemos los numeros de los inputs y los almacenamos en un objeto
        const numeros = {
            primerNumero  : parseInt(input[0].value),
            segundoNumero : parseInt(input[1].value),
        }

        // desestructuramos el array para extraer en una variable el input donde se reflejaran los resultados
        const [,,resultado] = input;

        calculosOperadores(numeros,resultado);
        
    }
    
    // en esta funcion haremos el calculo matematico y la validacion.
    function calculosOperadores(numeros,resultado){
        // aqui tomamos el valor del select
        const operador = operacionesContenedor.querySelector('select');
        
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

    //localizamos el btn
    function btnConvertir(e){
        e.preventDefault();
        if(e.target.classList.contains('btn')){
            obtenerGrados();
        }
    }

    // extraemos los datos del dom
    const obtenerGrados = ()=>{
        const input = gradosContenedor.querySelectorAll('input');


        const grados      = {
            celsius    : parseInt(input[0].value),
            kelvin     : input[1],
            fahrenheit : input[2],
        }

        convertirKelvin(grados);
        convertirFahrenheit(grados);

    }

    //hacemos la conversion

    const convertirKelvin = (grados) =>{
        let resultado = grados.celsius + 273.15;
        grados.kelvin.value=`${resultado} K`
    }

    const convertirFahrenheit = (grados) =>{
        let resultado = (grados.celsius * 9/5) + 32;
        grados.fahrenheit.value=`${resultado} °F`
    }


    //----------------------------------------//
    
    // Celsius a kelvin-farenheit

    // localizamos el btn

    function btnCalculos (e) {
        e.preventDefault();
        if (e.target.classList.contains('btn')) {
            obtenerNumerosCalculo()
        }
    }

    // extraemos todos los inputs y separamos los numeros ingresados por teclado y los inputs que solo proyectaran resultados
    const obtenerNumerosCalculo = () =>{
        const inputs = calculosContenedor.querySelectorAll('input')
        
        const numeros = {
            primero : parseInt(inputs[0].value),
            segundo : parseInt(inputs[1].value),
            tercero : parseInt(inputs[2].value),
            cuarto  : parseInt(inputs[3].value),
            quinto  : parseInt(inputs[4].value),
        };

        const resultados = {
            suma     : inputs[5],
            promedio : inputs[6],
        };

        calcularParametros(numeros, resultados);
    }


    //hacemos el calculo
    const calcularParametros = (numeros, resultados) =>{
        let suma = numeros.primero + numeros.segundo + numeros.tercero + numeros.cuarto + numeros.quinto;
        resultados.suma.value = suma;
        let promedio = (numeros.primero + numeros.segundo + numeros.tercero + numeros.cuarto + numeros.quinto)/ 5;
        resultados.promedio.value = promedio;
    }
});




