document.getElementById('calcular').addEventListener('click', () => {
    let totalLength = 0;
    let continueInput = true;

    while (continueInput) {
        const input = prompt("Introduce una cadena (o deja vacío para terminar):");
        if (input === null || input === "") {
            continueInput = false;
        } else {
            const length = input.length;
            totalLength += length;
            const resultSpan = document.getElementById('resultado');
            const resultText = document.createElement('p');
            resultText.textContent = `Cadena: "${input}" - Longitud: ${length}`;
            resultSpan.appendChild(resultText);
        }
    }

    const totalText = document.createElement('p');
    totalText.textContent = `Suma total de longitudes: ${totalLength}`;
    document.getElementById('resultado').appendChild(totalText);
});