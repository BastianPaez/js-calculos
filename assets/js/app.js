document.addEventListener('DOMContentLoaded', function() {
    const operaciones = document.querySelector('#operadores');
    
    
    
    
    addEventListeners();
    function addEventListeners(){
        operaciones.addEventListener('click',btnCalcular);
    }
    
    function btnCalcular (e){
        e.preventDefault();
        if (e.target.classList.contains('btn')){
            tomarNumeros();
        }
    }
    
    function tomarNumeros() {
        

        const input = operaciones.querySelectorAll('input');

        const numeros = {
            primerNumero  : parseInt(input[0].value),
            segundoNumero : parseInt(input[1].value),
        }
        const [,,resultado] = input;

        calculos(numeros,resultado);

    }


    function calculos(numeros,resultado){
        const operador = operaciones.querySelector('select');
        console.log(operador.value);

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
});


