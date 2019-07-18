// Write a function that expects a number as a parameter. If the value that is passed
// in is less than 0, equal to 0, or not a number, the function should return the string
// 'ERROR'. If the number that is passed in is greater than or equal to 1000000 it should
// simply return the number. Otherwise it should multiply the number by 10 however many times
// it takes to get a number that is greater than or equal to 1000000 and return that.

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
