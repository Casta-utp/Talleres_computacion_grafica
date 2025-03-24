let campo = document.getElementById("rectangulo")
let lienzo = campo.getContext("2d")

lienzo.beginPath()
lienzo.moveTo(40, 40)
lienzo.lineTo(40, 460)
lienzo.strokeStyle = "orange"
lienzo.stroke()
lienzo.closePath()

lienzo.beginPath()
lienzo.moveTo(40, 40)
lienzo.lineTo(660, 40)
lienzo.strokeStyle = "orange"
lienzo.stroke()
lienzo.closePath()

lienzo.beginPath()
lienzo.moveTo(660, 40)
lienzo.lineTo(660, 460)
lienzo.strokeStyle = "orange"
lienzo.stroke()
lienzo.closePath()

lienzo.beginPath()
lienzo.moveTo(40, 460)
lienzo.lineTo(660, 460)
lienzo.strokeStyle = "orange"
lienzo.stroke()
lienzo.closePath()