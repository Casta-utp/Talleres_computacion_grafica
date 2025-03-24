let campo = document.getElementById("figura_2");
let lienzo = campo.getContext("2d");

lienzo.beginPath();
lienzo.moveTo(10, 490);
lienzo.lineTo(690,490);
lienzo.strokeStyle="red";
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.moveTo(350, 480);
lienzo.lineTo(10,350);
lienzo.strokeStyle="black";
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.moveTo(350, 480);
lienzo.lineTo(690,350);
lienzo.strokeStyle="black";
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.moveTo(10, 350);
lienzo.lineTo(10, 200);
lienzo.strokeStyle="black";
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.moveTo(10, 200);
lienzo.lineTo(350, 70);
lienzo.strokeStyle="black";
lienzo.stroke();

lienzo.beginPath();
lienzo.moveTo(350, 70);
lienzo.lineTo(690, 200);
lienzo.strokeStyle="black";
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.moveTo(690, 200);
lienzo.lineTo(690, 350);
lienzo.strokeStyle="black";
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.moveTo(10, 200);
lienzo.lineTo(350, 330);
lienzo.strokeStyle="black";
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.moveTo(350, 330);
lienzo.lineTo(690, 200);
lienzo.strokeStyle="black";
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.moveTo(40, 200);
lienzo.lineTo(350, 315);
lienzo.strokeStyle="black";
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.moveTo(660, 200);
lienzo.lineTo(350, 315);
lienzo.strokeStyle="black";
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.moveTo(350, 315);
lienzo.lineTo(350, 85);
lienzo.strokeStyle="black";
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.moveTo(40, 200);
lienzo.lineTo(350, 85);
lienzo.strokeStyle="black";
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.moveTo(660, 200);
lienzo.lineTo(350, 85);
lienzo.strokeStyle="black";
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.moveTo(350, 480);
lienzo.lineTo(350, 330);
lienzo.strokeStyle="black";
lienzo.stroke();
lienzo.closePath();