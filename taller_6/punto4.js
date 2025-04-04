const limiteInput = document.getElementById('limite');
const comprobarButton = document.getElementById('comprobar');
const resultadoSpan = document.getElementById('resultado');

let numerosIngresados = [];
let limite = 0;

comprobarButton.addEventListener('click', () => {
    if (limiteInput.value === '') {
        resultadoSpan.textContent = 'Por favor, ingrese un límite.';
        return;
    }

    limite = parseInt(limiteInput.value);
    if (numerosIngresados.length >= limite) {
        resultadoSpan.textContent = 'Ya se alcanzó el límite de números.';
        return;
    }

    const nuevoNumero = prompt('Ingrese un número:');
    if (nuevoNumero === null) {
        resultadoSpan.textContent = 'Operación cancelada.';
        return;
    }

    const numero = parseInt(nuevoNumero);
    if (isNaN(numero)) {
        resultadoSpan.textContent = 'Por favor, ingrese un número válido.';
        return;
    }

    if (numerosIngresados.includes(numero)) {
        resultadoSpan.textContent = `El número ${numero} ya fue ingresado. Intente con otro.`;
    } else {
        numerosIngresados.push(numero);
        resultadoSpan.textContent = `Número ${numero} agregado correctamente.`;
    }

    if (numerosIngresados.length === limite) {
        resultadoSpan.textContent += ' Se alcanzó el límite de números.';
    }
});