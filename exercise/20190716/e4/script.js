(function() {
    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");

    function makeRandomColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var randomColor = "rgb(" + r + "," + g + "," + b + ")";
        return randomColor;
    }

    box1.addEventListener("click", function() {
        box1.style.backgroundColor = makeRandomColor();
    });

    box2.addEventListener("click", function(evt) {
        evt.stopPropagation();
        box2.style.backgroundColor = makeRandomColor();
    });
})();
