//Joaquín Sánchez Miravalles
//

var valorActual = '0';
var operadorActual = null;
var valorGuardado = null;
        
// Actualiza la pantalla con el valor actual.
function actualizarPantalla() {
    document.getElementById('pantalla').textContent = valorActual;
}
        
// Agrega un número o dígito al valor actual.
function agregarNumero(numero) {
     if (valorActual === '0' || valorActual === '-0') {
        valorActual = numero;
    } else {
         valorActual += numero;
    }
    actualizarPantalla();
}
        
 // Agrega un operador y calcula el resultado si ya hay un operador en curso.
function agregarOperador(operador) {
    if (operadorActual !== null) {
        calcularResultado();
    }
    operadorActual = operador;
    valorGuardado = valorActual;
    valorActual = '0';
}
        
// Calcula el resultado de la operación actual.
function calcularResultado() {
    if (operadorActual === '+') {
        valorActual = (parseFloat(valorGuardado) + parseFloat(valorActual)).toString();
    } else if (operadorActual === '-') {
        valorActual = (parseFloat(valorGuardado) - parseFloat(valorActual)).toString();
    } else if (operadorActual === 'x') {
        valorActual = (parseFloat(valorGuardado) * parseFloat(valorActual)).toString();
    } else if (operadorActual === '/') {
        if (valorActual === '0') {
            valorActual = 'Error';
        } else {
            valorActual = (parseFloat(valorGuardado) / parseFloat(valorActual)).toString();
        }
    }
    operadorActual = null;
    valorGuardado = null;
    actualizarPantalla();
}
        
// Borra la entrada actual.
function borrarEntrada() {
    valorActual = '0';
    actualizarPantalla();
}
        
// Borra toda la operación en curso.
function borrarTodo() {
    valorActual = '0';
    operadorActual = null;
    valorGuardado = null;
    actualizarPantalla();
}
        
// Borra el último carácter del valor actual.
function borrarUltimoCaracter() {
    if (valorActual.length > 1) {
        valorActual = valorActual.slice(0, -1); //Elimina el ultimo numero de la cadena valorActual
    } else {
        valorActual = '0';
    }
    actualizarPantalla();
}
        
// Calcula el inverso del valor actual.
function calcularInverso() {
    if (valorActual !== '0') {
        valorActual = (1 / parseFloat(valorActual)).toString();
    }
    actualizarPantalla();
}
        
// Eleva al cuadrado el valor actual.
function elevarAlCuadrado() {
    valorActual = (parseFloat(valorActual) * parseFloat(valorActual)).toString();
    actualizarPantalla();
}
        
// Calcula la raíz cuadrada del valor actual.
function calcularRaizCuadrada() {
    if (valorActual >= 0) {
        valorActual = Math.sqrt(parseFloat(valorActual)).toString();
    } else {
        valorActual = 'Error';
    }
    actualizarPantalla();
}

// Cambia el signo del valor actual.
function cambiarSigno() {
    if (valorActual !== '0') {
        valorActual = (parseFloat(valorActual) * -1).toString();
    }
    actualizarPantalla(); 
}
        
// Agrega un punto decimal al valor actual si no lo contiene.
function agregarDecimal() {
    if (!valorActual.includes('.')) {
        valorActual += '.';
    }
    actualizarPantalla();
}