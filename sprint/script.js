(function() {
    var hamburgerBtn = document.getElementById("nav");
    var x = document.querySelector("#hamburger-menu .x");
    var hamMenu = document.getElementById("hamburger-menu");
    var menu = document.getElementById("menu"); //stop propagation
    var navItem = document.querySelector("#hamburger-menu ul");
    var hamButValue = 0;

    hamburgerBtn.addEventListener("click", function() {
        if (hamButValue == 0) {
            // hamMenu.style.visibility = "visible";
            hamMenu.classList.add("on");
            menu.classList.add("on");
            hamButValue = 1;
        } else {
            hamMenu.classList.remove("on");
            menu.classList.remove("on");
            hamButValue = 0;
        }
    });

    x.addEventListener("click", function() {
        hamMenu.classList.remove("on");
        menu.classList.remove("on");
        hamButValue = 0;
    });

    hamMenu.addEventListener("click", function() {
        hamMenu.classList.remove("on");
        menu.classList.remove("on");
        hamButValue = 0;
    });

    navItem.addEventListener("click", function() {
        hamMenu.classList.remove("on");
        menu.classList.remove("on");
        hamButValue = 0;
    });

    menu.addEventListener("click", function(evt) {
        evt.stopPropagation();
    });
})();
