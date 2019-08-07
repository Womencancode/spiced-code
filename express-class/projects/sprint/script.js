(function() {
    var hamburgerBtn = $("#nav");
    var x = $("#hamburger-menu .x");
    var hamMenu = $("#hamburger-menu");
    var menu = $("#menu"); //stop propagation
    var navItem = $("#hamburger-menu ul");
    var hamButValue = 0;
    var modelDialog = $("#modelDialogBG");
    var xModelDialog = $("#modelX");

    function showModelDialog() {
        modelDialog.delay(1000).fadeIn(100);
        xModelDialog.on("click", function() {
            modelDialog.fadeOut(20);
        });
    }
    showModelDialog();

    function removeNav() {
        hamMenu.removeClass("on");
        menu.removeClass("on");
        hamButValue = 0;
    }

    hamburgerBtn.on("click", function() {
        if (hamButValue == 0) {
            // hamMenu.style.visibility = "visible";
            hamMenu.addClass("on");
            menu.addClass("on");
            hamButValue = 1;
        } else {
            hamMenu.removeClass("on");
            menu.removeClass("on");
            hamButValue = 0;
        }
    });

    x.on("click", function() {
        removeNav();
    });

    hamMenu.on("click", function() {
        removeNav();
    });

    navItem.on("click", function() {
        removeNav();
    });

    menu.on("click", function(evt) {
        evt.stopPropagation();
    });
})();
