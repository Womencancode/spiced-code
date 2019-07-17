var head = document.getElementById("head");
var torso = document.getElementsByClassName("torso");
var armleft = document.getElementsByClassName("arm left");
var armright = document.getElementsByClassName("arm right");
var legright = document.getElementsByClassName("leg right");
var legleft = document.getElementsByClassName("leg left");
var leek = document.getElementsByClassName("lauch");

function makeRandomColorGradient() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    var randomColor = "rgb(" + r + "," + g + "," + b + ")";
    return randomColor;
}

function headBgColor() {
    head.style.background = makeRandomColorGradient();
}

(function headParty() {
    // head.style.borderRadius = 20 + "px";
    var headRoundness = 0;
    function headIsGoingRound() {
        head.style.borderRadius = headRoundness + "px";
        headRoundness++;
        headBgColor();
        // if (headRoundness < 50) {
        requestAnimationFrame(headIsGoingRound);
        // }
    }
    headIsGoingRound();
})();

// headBgColor();
