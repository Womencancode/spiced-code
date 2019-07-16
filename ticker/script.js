// ticker top

(function() {
    var headLines = document.getElementById("headLines");
    var links = headLines.getElementsByTagName("a");
    var left = headLines.offsetLeft;
    var myReq;
    // console.log(headLines.getElementsByTagName("a"));
    // console.log(headLines.getElementsByTagName("A"));
    moveHeadlines();
    function moveHeadlines() {
        left--;
        if (left <= -links[0].offsetWidth) {
            // add to left the width of the first link
            left = left + links[0].offsetWidth;
            // remove the first link and make it last link
            var line = links[0].parentNode;
            line.appendChild(links[0]);
        }
        // move headlines to new position
        // console.log(left);
        headLines.style.left = left + "px";

        myReq = requestAnimationFrame(moveHeadlines);
    }

    headLines.addEventListener("mouseenter", function() {
        cancelAnimationFrame(myReq);
    });
    headLines.addEventListener("mouseleave", function() {
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
