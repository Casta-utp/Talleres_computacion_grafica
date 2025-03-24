let campo = document.getElementById("trapecio");
let lienzo = campo.getContext("2d");

lienzo.beginPath();
lienzo.moveTo(40,450);
lienzo.lineTo(460,450);
lienzo.strokeStyle="blue";
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.moveTo(40,450);
lienzo.lineTo(150,40);
lienzo.strokeStyle="blue";
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.moveTo(460,450);
lienzo.lineTo(350,40);
lienzo.strokeStyle="blue";
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.moveTo(150,40);
lienzo.lineTo(350,40);
lienzo.strokeStyle="blue";
lienzo.stroke();
lienzo.closePath();
