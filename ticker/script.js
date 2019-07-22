// ticker top

(function() {
    var headlines = $("#headLines");
    var links = headlines.find("a");
    var left = headlines.offset().left;
    var myReq;
    // console.log(headLines.getElementsByTagName("a"));
    // console.log(headLines.getElementsByTagName("A"));
    moveHeadlines();
    function moveHeadlines() {
        left--;
        // console.log(left);
        // console.log(links.eq(0).outerWidth());
        if (
            left <=
            -headlines
                .find("a")
                .eq(0)
                .outerWidth()
        ) {
            console.log("lalala");
            // add to left the width of the first link
            left =
                left +
                headlines
                    .find("a")
                    .eq(0)
                    .outerWidth();
            // remove the first link and make it last link
            // console.log(links[0].parentNode);
            headlines.append(headlines.find("a").eq(0));
        }
        // move headlines to new position
        // console.log(left);
        headlines.css({
            left: left + "px"
        });

        // style.left = left + "px";

        myReq = requestAnimationFrame(moveHeadlines);
    }

    headlines.on("mouseenter", function() {
        cancelAnimationFrame(myReq);
    });
    headlines.on("mouseleave", function() {
        moveHeadlines();
    });
})();

// ticker bottom

(function() {
    var bheadLines = document.getElementById("headLines_bottom");
    var blinks = bheadLines.getElementsByTagName("a");
    var right = bheadLines.offsetLeft + bheadLines.offsetWidth;
    var blinkArrLength = blinks.length - 1;
    var myReq;
    moveHeadlines();
    function moveHeadlines() {
        right--;
        if (right <= -blinks[blinkArrLength].offsetWidth) {
            right = right + blinks[blinkArrLength].offsetWidth;
            var lastLink = blinks[blinkArrLength];
            blinks[blinkArrLength] = bheadLines.insertBefore(
                lastLink,
                blinks[0]
            );
        }

        // move headlines to new position
        // console.log(left);
        bheadLines.style.right = right + "px";
        // console.log(links[9].offsetWidth);
        myReq = requestAnimationFrame(moveHeadlines);
    }

    bheadLines.addEventListener("mouseenter", function() {
        cancelAnimationFrame(myReq);
    });
    bheadLines.addEventListener("mouseleave", function() {
        moveHeadlines();
    });
})();
