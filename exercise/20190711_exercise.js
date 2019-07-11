// exercise 1
(function() {
    function each(arg, fn) {
        if (Array.isArray(arg)) {
            for (var i = 0; i < arg.length; i++) {
                fn(arg[i], i);
            }
        } else
            for (p in arg) {
                fn(arg[p], p);
            }
    }
})();

// exercise 2
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

exercise 3

(function() {
    function getLessThanZero(arg) {
        return arg.filter(function(item) {
            return item < 0;
        });
    }
})();
