// Get the canvas and context
const canvas = document.getElementById('rectangulo');
const ctx = canvas.getContext('2d');

// Function to draw a rectangle
function drawRectangle() {
    // Get width and height from input fields
    const width = parseInt(document.getElementById('ancho').value);
    const height = parseInt(document.getElementById('alto').value);

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the rectangle
    ctx.beginPath();
    ctx.rect(50, 50, width, height); // Starting at (50, 50)
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.closePath();
}

// Add event listener to the button
document.getElementById('drawButton').addEventListener('click', drawRectangle);