let campo = document.getElementById("figura_1");
let lienzo = campo.getContext("2d");

let x = 150;
let y = 150;
let radio = 150;
let inicio = 0;
let fin = 2 * Math.PI;

lienzo.beginPath();
lienzo.arc(x, y, radio, inicio, fin, false);
lienzo.strokeStyle = "blue";
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.arc(x + 200, y, radio, inicio, fin, false);
lienzo.strokeStyle = "red";
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.arc(x + 100, y + 200, radio, inicio, fin, false);
lienzo.strokeStyle = "green";
lienzo.stroke();
lienzo.closePath();



