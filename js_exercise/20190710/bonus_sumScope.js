// Write a function that returns a function that can be called repeatedly and passed
// a number each time. Each time it is called it should return the sum of the number
// that is passed in and all other numbers that were passed in previous calls. That
// is, it should return the sum of all the numbers that were ever passed to it.
//
//  var totaler = getTotaler();
//  totaler(1); //1
//  totaler(2); //3
//  totaler(5); //8

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
