// Número secreto del juego
let numeroSecreto;
let contadorIntentos;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

// ------------------- FUNCIONES ---------------------- //

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya se han sorteado todos los numeros posibles, se reinicia la lista
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemeto('p', 'Se han sorteado todos los números posibles');
    } else {
        // Si el numero generado esta en la lista de numeros sorteados, se vuelve a generar
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function asignarTextoElemeto(elemento, texto) {
    const elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function limpiarCaja() {
    const valorCaja = document.querySelector('#inputUsuario');
    valorCaja.value = '';
}

function verificacionNumero() {
    const inputUsuario = parseInt(document.getElementById('inputUsuario').value);
    //console.log(contadorIntentos);

    if (inputUsuario === numeroSecreto) {
        asignarTextoElemeto('h1', `¡Felicidades! Has adivinado el numero secreto en ${contadorIntentos} ${contadorIntentos == 1 ? 'Vez' : 'Veces'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (inputUsuario < numeroSecreto) {
        asignarTextoElemeto('p', 'El número secreto es mayor');
    } else {
        asignarTextoElemeto('p', 'El número secreto es menor');
    }

    contadorIntentos++;
    limpiarCaja();
}

function condicionesIniciales() {
    asignarTextoElemeto('h1', 'Juego del número secreto');
    asignarTextoElemeto('p', `Indica un número entre 1 y ${numeroMaximo}. ¡Buena suerte!`);
    numeroSecreto = generarNumeroSecreto();
    contadorIntentos = 1;
    //console.log(numeroSecreto);
}

function reiniciarJuego() {
    condicionesIniciales();
    limpiarCaja();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

// [Todo el código anterior permanece exactamente igual...]

// --- INICIALIZACIÓN DEL JUEGO --- //
reiniciarJuego();  // Esta es la única línea que debes cambiar