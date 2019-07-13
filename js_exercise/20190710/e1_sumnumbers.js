// Write a function that takes any number of numbers as parameters and returns the sum of those numbers.
//
// sum(5, 10); //15
//
// sum(5, 10, 15); //30;
//
// sum(5, 10, 15, 100, 200); //330
//

(function() {
    function sum() {
        var calcSum = 0;
        for (var i = 0; i < arguments.length; i++) {
            calcSum += arguments[i];
        }
        return calcSum;
    }

    console.log(sum(5, 10));
    console.log(sum(5, 10, 15));
    console.log(sum(5, 10, 15, 100));
    console.log(sum(5, 10, 15, 100, 200));
})();
