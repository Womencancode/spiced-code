// Write a function called getLessThanZero that expects an array of numbers to be
// passed to it and returns a new array containing only those numbers from the array
// that was passed in that are less than zero.
//
//    getLessThanZero([1, 2, -1, -90, 10]); //[-1, -90]
//    getLessThanZero([1, 2]); //[]
//
(function() {
    function getLessThanZero(arg) {
        return arg.filter(function(item) {
            return item < 0;
        });
    }
})();
