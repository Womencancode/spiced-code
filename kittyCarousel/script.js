(function() {
    var kitties = document.getElementsByClassName("kitty");
    var current = 0;
    setTimeout(moveKitty, 5000);

    document.addEventListener("transitionend", function fn(e) {
        if (e.target.classList.contains("exit")) {
            e.target.classList.remove("exit");
            setTimeout(moveKitty, 3000);
        }
    });

    function moveKitty() {
        // kitties[current]
        //remove onscreen and add exitclasses zu the current kitty
        console.log("The current kitty is " + current);
        kitties[current].classList.remove("onscreen");
        kitties[current].classList.add("exit");

        // kitties[current].addEventListener("transitionend", function fn(e) {
        //     e.target.classList.remove("exit");
        //     e.target.removeEventListener("transitionend", fn);
        // });

        current++;
        if (current >= kitties.length) {
            current = 0;
        }

        //add onscreen class to next one
        console.log("The new kitty is " + current);
        kitties[current].classList.add("onscreen");
    }
})();
