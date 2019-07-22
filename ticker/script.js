// ticker top

(function() {
    var headLines = $("#headLines");
    var links = $("a");
    var left = headLines.offset().left;
    var myReq;
    // console.log(headLines.getElementsByTagName("a"));
    // console.log(headLines.getElementsByTagName("A"));
    moveHeadlines();
    function moveHeadlines() {
        left--;
        if (left <= -links.eq(0).outerWidth()) {
            // add to left the width of the first link
            left = left + links.eq(0).outerWidth();
            // remove the first link and make it last link
            var line = links.eq(0).parent();
            line.append(links.eq(0));
        }
        // move headlines to new position
        // console.log(left);
        headLines.css({ left: left + "px" });
        myReq = requestAnimationFrame(moveHeadlines);
    }

    headLines.on("mouseenter", function() {
        cancelAnimationFrame(myReq);
    });
    headLines.on("mouseleave", function() {
        moveHeadlines();
    });
})();

// ticker bottom

(function() {
    var bheadLines = $("#headLines_bottom");
    var blinks = $("a");
    var right = bheadLines.offset().left + bheadLines.outerWidth();
    var blinkArrLength = blinks.length - 1;
    var myReq;
    moveHeadlines();
    function moveHeadlines() {
        right--;
        if (right <= -blinks.eq(blinkArrLength).outerWidth()) {
            right = right + blinks.eq(blinkArrLength).outerWidth();
            var lastLink = blinks[blinkArrLength];
            blinks[blinkArrLength] = bheadLines.prepend(lastLink, blinks[0]);
        }

        // move headlines to new position
        // console.log(left);
        bheadLines.css({
            right: right + "px"
        });
        // console.log(links[9].outerWidth());
        myReq = requestAnimationFrame(moveHeadlines);
    }

    bheadLines.on("mouseenter", function() {
        cancelAnimationFrame(myReq);
    });
    bheadLines.on("mouseleave", function() {
        moveHeadlines();
    });
})();
