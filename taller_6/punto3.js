function leapYear() {
    const añoInicial = parseInt(document.getElementById("año_inicial").value);
    const añoFinal = parseInt(document.getElementById("año_final").value);
    let contador = 0;

    if (isNaN(añoInicial) || isNaN(añoFinal) || añoInicial > añoFinal) {
        document.getElementById("resultado").innerText = "Por favor, ingrese un intervalo válido.";
        return;
    }

    for (let año = añoInicial; año <= añoFinal; año++) {
        if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
            contador++;
        }
    }

    document.getElementById("resultado").innerText = `Hay ${contador} años bisiestos en el intervalo.`;
}

document.getElementById("calcular").addEventListener("click", leapYear);
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        leapYear();
    }
});