// Write a function called invertCase that expects a string as a parameter. This
// function should return a new string with all the same characters as the string
// that was passed in but with the cases of the alphabetic characters switched.
// Uppercase characters should become lowercase and lowercase letters should become
// uppercase. Characters that are not alphabetic should not change.
// String.prototype.toUpperCase and String.prototype.toLowerCase will come in handy
// here.

(function() {
    var string = "H3llo I am Markus!";

    function invertCase(string) {
        var workArray = [];
        for (var i = 0; i < string.length; i++) {
            if (string[i] == string[i].toUpperCase()) {
                workArray[i] = string[i].toLowerCase();
            } else {
                workArray[i] = string[i].toUpperCase();
            }
        }
        return workArray.join("");
    }

    return console.log(invertCase(string));
})();
