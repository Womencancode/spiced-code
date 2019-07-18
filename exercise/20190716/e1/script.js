(function() {
    var box = document.getElementById("box");

    document.addEventListener("mousemove", function(evt) {
        box.style.left = evt.clientX - 50 + "px";
        box.style.top = evt.clientY - 50 + "px";
    });
})();
