// vanilla js way
// var board = document.getElementById("board");

// j Querry way
var board = $("#board");
// var racers = document.getElementsByClassName("racer");
var racers = $(".racer");

var racersLeft = [0, 0, 0, 0];

function getRandomNumber(num) {
    return Math.floor(Math.random() * num);
}
// jQuery way is to use "on" instead of addEventListener
board.on("click", function() {
    for (var i = 0; i < racersLeft.length; i++) {
        racersLeft[i] += getRandomNumber(21);
        // racers[i].style.left = racersLeft[i] + "px";
        racers.eq(i).css({
            left: racersLeft[i] + "px"
        });
    }
});

$("#boost-button").on("click.boostMe", function(e) {
    console.log("clicked on button!");
    e.stopPropagation();
    racersLeft[0] += 20;
    $("#boost-button").html("<span id='boost'>🏍️</span>SPEED!");
    // racers.eq(0).toggle(1000);
    // racers[0].style.left = racersLeft[0] + "px";
    racers
        .eq(0)
        .css({
            left: racersLeft[0] + "px"
        })
        .hide()
        .show(1000);
    // $(e.currentTarget).off("click", boostMe);
    $(e.currentTarget).off(".boostMe");
});

$(document).on("keydown", function(evt) {
    console.log(evt);
    //letter r is keyCode 82
    if (evt.keyCode === 82) {
        var r = getRandomNumber(256);
        var g = getRandomNumber(256);
        var b = getRandomNumber(256);
        var randomColor = "rgb(" + r + "," + g + "," + b + ")";
        console.log(randomColor);
        // board.style.backgroundColor = randomColor;
        board.css({
            backgroundColor: randomColor
        });
    }
});
