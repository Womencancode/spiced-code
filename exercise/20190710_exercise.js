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
(function() {
    function waitThenRun(arg) {
        setTimeout(arg, 1500);
    }

    waitThenRun(function() {
        console.log("Hello!");
    }); // logs 'Hello!' 1.5 seconds later

    waitThenRun(function() {
        console.log("Goodbye!");
    }); // logs 'Goodbye!' 1.5 seconds later
})();

// exercise 3

(function() {
    function funFn(para) {
        if (para <= 0 || isNaN(para)) {
            return "ERROR";
        } else if (para >= 1000000) {
            return para;
        } else {
            while (para <= 1000000) {
                para = para * 10;
            }
            return para;
        }
    }
    console.log(funFn(NaN));
})();

// bonus exercise
(function() {
    function getTotaler() {
        var result = 0;
        return function calc(num) {
            result += num;
            return result;
        };
    }

    var totaler = getTotaler();
    console.log(totaler(1)); //1
    console.log(totaler(2)); //3
    console.log(totaler(5)); //8
})();
