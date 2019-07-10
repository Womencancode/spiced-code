// exercise 1

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
