// Write a function that inserts an element into the body of the currently loaded
// page. That element should have fixed position, z-index of 2147483647,
// left of 20px, top of 100px, font-size of 200px, and contain the text 'AWESOME'.

(function() {
    function awesome() {
        var awesomeDiv = document.createElement("div");
        var awesomeDivText = document.createTextNode("AWESOME!!");
        awesomeDiv.appendChild(awesomeDivText);
        awesomeDiv.style.position = "fixed";
        awesomeDiv.style.zIndex = "2147483647";
        awesomeDiv.style.left = "20px";
        awesomeDiv.style.top = "100px";
        awesomeDiv.style.fontSize = "200px";
        document.body.appendChild(awesomeDiv);
    }
    awesome();
})();
