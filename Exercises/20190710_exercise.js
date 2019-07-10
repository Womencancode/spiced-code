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

// exercise 2

function waitThenRun(arg) {
    setTimeout(arg, 1500);
}

waitThenRun(function() {
    console.log("Hello!");
}); // logs 'Hello!' 1.5 seconds later

waitThenRun(function() {
    console.log("Goodbye!");
}); // logs 'Goodbye!' 1.5 seconds later
