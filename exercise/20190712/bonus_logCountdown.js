// Write a constructor called Countdown that accepts a single argument - the number
// of seconds to count down. It should be possible to call the start method of
// instances of Countdown to initiate the countdown. Once the countdown starts,
// it should count down to zero starting with the number that was passed to the
// constructor and logging each number to the console with a one second delay.
//

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
