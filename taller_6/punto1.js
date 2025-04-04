function tabla() {
    let numero = parseInt(document.getElementById("numero").value);
    let limite = parseInt(document.getElementById("limite").value);
    let tabla = "";
    for (let i = 1; i <= limite; i++) {
        tabla += `${numero} x ${i} = ${numero * i}<br>`;
    }
    document.getElementById("resultado").innerHTML = tabla;
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        tabla();
    }
});

