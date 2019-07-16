var board = document.getElementById("board");
var racers = document.getElementsByClassName("racer");
var boostBtn = document.getElementById("boost-button");

var racingCarLeft = 0;
var motorBikeLeft = 0;
var policeCarLeft = 0;
var tractorLeft = 0;

function getRandomNumber() {
    return Math.floor(Math.random() * 51);
}

function makeRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var randomColor = "rgb(" + r + "," + g + "," + b + ")";
    return randomColor;
}

board.addEventListener("click", function() {
    racingCarLeft += getRandomNumber();
    motorBikeLeft += getRandomNumber();
    policeCarLeft += getRandomNumber();
    tractorLeft += getRandomNumber();
    // console.log(racingCarLeft, motorBikeLeft);
    racers[0].style.left = racingCarLeft + "px";
    racers[1].style.left = motorBikeLeft + "px";
    racers[2].style.left = policeCarLeft + "px";
    racers[3].style.left = tractorLeft + "px";
});

boostBtn.addEventListener("click", function(event) {
    event.stopPropagation();
    racingCarLeft += 100;
    racers[0].style.left = racingCarLeft + "px";
});

document.addEventListener("keydown", function(event) {
    if (event.keyCode === 67) {
        board.style.backgroundColor = makeRandomColor();
    }
});
