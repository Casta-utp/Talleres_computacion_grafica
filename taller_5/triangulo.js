let campo = document.getElementById("triangulo");
let lienzo = campo.getContext("2d");

lienzo.beginPath();
lienzo.moveTo(40, 460);
lienzo.lineTo(460,460);
lienzo.strokeStyle="green";
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.moveTo(40, 460);
lienzo.lineTo(250,40);
lienzo.strokeStyle="green";
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.moveTo(460, 460);
lienzo.lineTo(250,40);
lienzo.strokeStyle="green";
lienzo.stroke();
lienzo.closePath();

