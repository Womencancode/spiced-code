// Write a function that takes an array as a parameter and returns a new array
// containing all of the items that are in the array that was passed in but in
// reverse order. Unlike the reverse method that all arrays have, this function
// should leave the original array unchanged.

(function() {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    function reverso(arg) {
        var reversearr = [];
        for (var i = arg.length - 1; i >= 0; i--) {
            reversearr.push(i);
        }
        return reversearr;
    }
    console.log(reverso(arr));
})();
