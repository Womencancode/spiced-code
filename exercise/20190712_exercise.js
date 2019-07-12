// exercise 1
(function() {
    function getArea() {
        return this.width * this.height;
    }

    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }

    function Square(length) {
        this.width = length;
        this.height = length;
    }

    var square = new Square(4);
    var rect = new Rectangle(4, 5);

    Square.prototype.getArea = getArea;
    Rectangle.prototype.getArea = getArea;
})();

//exercise 2
// no constructrs or prototypes

// (function() {
//     var string = "Hello I am Markus";
//
//     function inverCase(string) {
//         var convertedString;
//         for (var i = 0; i < string.length; i++) {
//             if (string[i] == string[i].toUpperCase()) {
//             }
//         }
//     }
// })();

//"Hello Kitty" --> hELLO kITTY
// .toUpperCase() and .toLowerCase()
// loop throug a string
// h.toUpperCase() == 'h' --> false

// function inverCase() {}

//exercise Bonus
//A loop is not helpfull
