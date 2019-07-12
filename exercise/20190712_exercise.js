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

(function() {
    var string = "H3llo I am Markus!";

    function invertCase(string) {
        var workArray = [];
        for (var i = 0; i < string.length; i++) {
            if (string[i] == string[i].toUpperCase()) {
                workArray[i] = string[i].toLowerCase();
            } else {
                workArray[i] = string[i].toUpperCase();
            }
        }
        return workArray.join("");
    }

    return console.log(invertCase(string));
})();

//exercise Bonus
//A loop is not helpfull
(function() {
    function Countdown(seconds) {
        this.seconds = seconds;
        this.start = function() {
            var sec = this.seconds;
            var fn = setInterval(function() {
                if (sec >= 0) {
                    console.log(sec);
                    sec--;
                } else {
                    clearInterval(fn);
                }
            }, 1000);
        };
    }

    var countdown = new Countdown(6);
    countdown.start();
})();
