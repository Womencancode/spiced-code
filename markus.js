var x = 42;
var doubleX;

function timesTwo(arg) {
    return arg * 2;
}

doubleX = timesTwo(x);

var numbers = [x, doubleX];

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

numbers = {
    y: doubleX
};

console.log(numbers);
