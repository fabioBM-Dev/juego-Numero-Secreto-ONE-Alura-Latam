let numeroSecreto = 0;
let intentos = 0;
let nummeroMaxIntentos = 3;
let listaNumerosSorteados = [];
let numeroMaxJuegos = 10;
/*
este era el código original que necesitabamos para cambiar un elemnto en el DOM:
    Let parrafo = document.querySelector('p');
    parrafo.innerHTML = 'Escribe un número entre 1 y 10'
    
    Ahora se creó una sola función génerica que sirve para cambia los textos de los elemento DOM que necesitemos cambiar,
    solo nos solicita los dos parámetros (elemento HTML que queremos cambiar, texto nuevo que vamos a usar )
*/
console.log(numeroSecreto);
console.log(intentos);  

function asignarTextoElemnto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
        
        if (numeroDeUsuario === numeroSecreto) {
            asignarTextoElemnto('p', `!!!Felicidades¡¡¡, Has acertado en ${intentos} ${(intentos == 1) ? "intento" : "intentos" }. El número secreto era: !! ${numeroSecreto} ¡¡`);
            document.getElementById('reiniciar').removeAttribute('disabled');
            console.log(numeroSecreto);
            console.log(intentos);  
        } else {
            // El Usuario no acertó.
            if ( numeroDeUsuario < numeroSecreto) {
                asignarTextoElemnto('p', `El número secreto es mayor`);
            } else {
                asignarTextoElemnto('p', 'El número secreto es menor')
            }

            intentos++;
            limpiarCaja();
            
            if (intentos > nummeroMaxIntentos){
                asignarTextoElemnto('p', `PERDISTE. Tenías solo ${nummeroMaxIntentos} intentos.`);
                document.getElementById('reiniciar').removeAttribute('disabled');
            }
        }         
      return;
}

function condicionesIniciales() {
    asignarTextoElemnto('h1', 'El Juego del número secreto.');
    asignarTextoElemnto('p', `Digite un número entre 1 y ${numeroMaxJuegos}`);
    asignarTextoElemnto('p', `Tienes ${nummeroMaxIntentos} intentos`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
      
function resetearJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //generar el número aleatorio
    //inicializar el número de intentos
    condicionesIniciales()
    //deshabilitar el boton denuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');    
}

function limpiarCaja() {
   document.querySelector("#valorUsuario").value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaxJuegos + 1);
    
        console.log(numeroGenerado);
        console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaxJuegos) {
        asignarTextoElemnto('p', '!!Lo siento¡¡ Ya se sortearon todos los números disponibles!!')
    } else {
        //si el número generado entá incluido en la lista
        if( listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

condicionesIniciales();
//console.log(numeroSecreto);
//console.log(intentos);  



