// Write a function that expects a string representing a selector to be passed as a
// parameter. The function should find all the elements in the document that match
// the selector and change their style so that the text they contain is italic,
// underlined, and bold.

(function() {
    var cssString = document.querySelectorAll("p");
    function manipulateHtml(value) {
        for (var i = 0; i < value.length; i++) {
            value[i].style.fontStyle = "italic";
            value[i].style.fontWeight = "bold";
            value[i].style.textDecoration = "underline";
        }
    }
    manipulateHtml(cssString);
})();
