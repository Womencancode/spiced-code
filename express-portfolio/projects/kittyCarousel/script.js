(function() {
    var kitties = document.getElementsByClassName("kitty");
    var dotArea = document.getElementById("dotArea");
    var current = 0;
    var dots;
    var timer;
    var transitioningRightNow;
    var touchstartX = 0;
    var touchstartY = 0;
    var touchendX = 0;
    var touchendY = 0;
    var swipe = false;
    // create dots depending on how many pictures are inside

    function createDots() {
        for (var i = 0; i < kitties.length; i++) {
            var dot = document.createElement("div");
            dotArea.prepend(dot);
        }
        return (dots = document.querySelectorAll("#dotArea > div"));
    }
    createDots();

    // check if there are pictures inside if YES activate first dot if NOT alert
    if (kitties.length > 0) {
        dots[0].classList.add("active");
    } else {
        alert("keine bilder du lappen");
    }

    setTimeout(moveKitty, 5000);

    //  ------------> Check swipe <---------------

    document.addEventListener("touchstart", function(e) {
        clearTimeout(timer);
        // console.log("x Start: " + e.changedTouches[0].screenX);
        // console.log("y Start: " + e.changedTouches[0].screenY);
        // console.log("touchstart STARTS");
        touchstartX = e.changedTouches[0].screenX;
        touchstartY = e.changedTouches[0].screenY;
        // console.log(touchstartX, touchstartY);
        // console.log("touchstart ENDS");
    });

    document.addEventListener("touchend", function(e) {
        // console.log("x End: " + e.changedTouches[0].screenX);
        // console.log("y End: " + e.changedTouches[0].screenY);
        // console.log("touchend STARTS");
        // console.log(e);
        touchendX = e.changedTouches[0].screenX;
        touchendY = e.changedTouches[0].screenY;
        // console.log(touchendX, touchendY);
        // console.log("touchend ENDS");
        if (!transitioningRightNow) {
            checkSwipe();
        }
    });

    // console.log("Start X: " + touchstartX, "Start Y: " + touchstartY);
    // console.log("End X: " + touchendX, "End Y: " + touchendY);

    function checkSwipe() {
        var x = touchstartX - touchendX;
        var y = touchstartY - touchendY;
        console.log(x, y);
        console.log(kitties.length, current);

        if (x > 100 || x < -100) {
            if (current < kitties.length) {
                moveKitty(current + 1);
            } else {
                current = 0;
                moveKitty(current);
            }

            swipe = true;
            console.log(swipe);
        }
    }

    // ------> end of swipe check <-------

    for (var i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", getDotClickHandler(i));
    }

    document.addEventListener("transitionend", function fn(e) {
        transitioningRightNow = false;
        if (e.target.classList.contains("exit")) {
            e.target.classList.remove("exit");
            timer = setTimeout(moveKitty, 4000);
        }
    });

    function getDotClickHandler(n) {
        return function() {
            console.log(transitioningRightNow);
            if (n == current || transitioningRightNow) {
                return;
            }
            clearTimeout(timer);
            moveKitty(n);
        };
    }

    function moveKitty(n) {
        transitioningRightNow = true;
        //remove onscreen and add exitclasses zu the current kitty
        kitties[current].classList.remove("onscreen");
        kitties[current].classList.add("exit");
        dots[current].classList.remove("active");

        // kitties[current].addEventListener("transitionend", function fn(e) {
        //     e.target.classList.remove("exit");
        //     e.target.removeEventListener("transitionend", fn);
        // });
        if (typeof n == "undefined") {
            current++;
            if (current >= kitties.length) {
                current = 0;
            }
        } else {
            current = n;
        }

        //add onscreen class to next one
        kitties[current].classList.add("onscreen");
        dots[current].classList.add("active");
    }
})();
