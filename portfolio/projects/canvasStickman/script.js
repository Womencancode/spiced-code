var ctx = document.getElementById("canvas").getContext("2d");
var ctx2 = document.getElementById("canvasMover").getContext("2d");
var image = document.getElementById("canvas");
var movArea = document.getElementById("canvas");

ctx.strokeStyle = "grey";
ctx.lineWidth = 0.5;

ctx.beginPath();
ctx.arc(150, 100, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150, 150);
ctx.lineTo(150, 300);
ctx.lineTo(75, 400);
ctx.moveTo(150, 300);
ctx.lineTo(225, 400);
ctx.moveTo(150, 200);
ctx.lineTo(75, 150);
ctx.moveTo(150, 200);
ctx.lineTo(225, 150);
ctx.stroke();

var imageDx = 0;
var imageDy = 0;
var imageDWidth = 300;
var imageDLength = 500;

ctx2.drawImage(image, imageDx, imageDy, imageDWidth, imageDLength);

document.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 39) {
        // right
        ctx2.clearRect(imageDx, imageDy, imageDWidth, imageDLength);
        imageDx++;
        ctx2.drawImage(image, imageDx, imageDy, imageDWidth, imageDLength);
    }
    if (evt.keyCode === 37) {
        // left
        ctx2.clearRect(imageDx, imageDy, imageDWidth, imageDLength);
        imageDx--;
        ctx2.drawImage(image, imageDx, imageDy, imageDWidth, imageDLength);
    }
    if (evt.keyCode === 38) {
        // top
        ctx2.clearRect(imageDx, imageDy, imageDWidth, imageDLength);
        imageDy--;
        ctx2.drawImage(image, imageDx, imageDy, imageDWidth, imageDLength);
    }
    if (evt.keyCode === 40) {
        // down
        ctx2.clearRect(imageDx, imageDy, imageDWidth, imageDLength);
        imageDy++;
        ctx2.drawImage(image, imageDx, imageDy, imageDWidth, imageDLength);
    }
});
