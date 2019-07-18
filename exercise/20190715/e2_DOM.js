// Write a function that expects a string representing a class name to be passed as
// a parameter. The function should return an array containing all the elements in
// the document that have the class that was passed in.

// Solution 1 with with the Method Array.from()

(function() {
    var className = document.getElementsByClassName("row");
    function functionName(name) {
        var classNameArray = Array.from(name);
        return classNameArray;
    }
    console.log(functionName(className));
})();

// Solution 2 with looping

(function() {
    var className = document.getElementsByClassName("row");
    function functionName(name) {
        var classNameArray = [];
        for (var i = 0; i < name.length; i++) {
            classNameArray.push(name[i]);
        }
        return classNameArray;
    }
    console.log(functionName(className));
})();
