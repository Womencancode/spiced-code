(function() {
    var box1 = document.getElementById("box1");

    function makeRandomColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var randomColor = "rgb(" + r + "," + g + "," + b + ")";
        return randomColor;
    }

    // console.log(makeRandomColor());

    box1.addEventListener("mousedown", function() {
        box1.style.backgroundColor = makeRandomColor();
    });
    box1.addEventListener("mouseup", function() {
        box1.style.backgroundColor = makeRandomColor();
    });
})();
