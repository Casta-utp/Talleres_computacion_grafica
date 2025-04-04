// punto5.js

document.getElementById("comprobar").addEventListener("click", function () {
    const correo = document.getElementById("correo").value;
    const resultado = document.getElementById("resultado");

    // Expresión regular para validar un correo electrónico
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regexCorreo.test(correo)) {
        resultado.textContent = "El correo electrónico es válido.";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "El correo electrónico no es válido.";
        resultado.style.color = "red";
    }
});