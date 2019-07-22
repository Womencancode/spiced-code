// ticker top

(function() {
    var headlines = $("#headLines");
    var links = headlines.find("a");
    var left = headlines.offset().left;
    var myReq;
    moveHeadlines();
    function moveHeadlines() {
        left--;
        if (
            left <=
            -headlines
                .find("a")
                .eq(0)
                .outerWidth()
        ) {
            console.log("lalala");
            left =
                left +
                headlines
                    .find("a")
                    .eq(0)
                    .outerWidth();
            headlines.append(headlines.find("a").eq(0));
        }
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
