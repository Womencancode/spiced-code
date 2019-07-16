var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    console.log("I clicked");
    document.body.style.backgroundColor = "green";
});

document.addEventListener("keydown", function(event) {
    //only when letter P is pressed
    if (event.keyCode === 80) {
        console.log("I pressed --> P <--");
        console.log("event: ", event);
    }
});
document.addEventListener("mousedown", function() {
    document.addEventListener("mousemove", function(event) {
        console.log(event);
    });
});
