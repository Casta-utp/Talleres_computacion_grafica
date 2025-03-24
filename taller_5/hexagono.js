let campo = document.getElementById("hexagono");
let lienzo = campo.getContext("2d");

lienzo.beginPath();
lienzo.moveTo(250, 450);
lienzo.lineTo(50,350);
lienzo.strokeStyle="black";
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.moveTo(250, 450);
lienzo.lineTo(450,350);
lienzo.strokeStyle="black";
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.lineTo(50,350);
lienzo.lineTo(50,150);
lienzo.strokeStyle="black";
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.lineTo(450,350);
lienzo.lineTo(450,150);
lienzo.strokeStyle="black";
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.lineTo(50,150);
lienzo.lineTo(250,50);
lienzo.strokeStyle="black";
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.lineTo(450,150);
lienzo.lineTo(250,50);
lienzo.strokeStyle="black";
lienzo.stroke();
lienzo.closePath();
