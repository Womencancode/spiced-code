// ticker top

(function() {
    var headlines = $("#headLines");
    // var links = headlines.find("a");
    var left = headlines.offset().left;
    var myReq;

    createLinks();
    function createLinks() {
        console.log("createLinks");
        $.ajax({
            url: "/links.json",
            method: "GET",
            success: function(response) {
                var linkHtml = "";
                console.log(response);
                for (var i = 0; i < response.length; i++) {
                    var x =
                        '<a href="' +
                        response[i].href +
                        '" target="_blank">' +
                        response[i].title +
                        "</a>";
                    linkHtml += x;
                }
                $("#headLines").html(linkHtml);
            },
            error: function(error) {
                console.log("error: ", error);
                alert("error: " + error.status);
            }
        });
    }

    moveHeadlines();
    function moveHeadlines() {
        left = left - 3;
        if (
            left <=
            -headlines
                .find("a")
                .eq(0)
                .outerWidth()
        ) {
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

// (function() {
//     var bheadLines = document.getElementById("headLines_bottom");
//     var blinks = bheadLines.getElementsByTagName("a");
//     var right = bheadLines.offsetLeft + bheadLines.offsetWidth;
//     var blinkArrLength = blinks.length - 1;
//     var myReq;
//     moveHeadlines();
//     function moveHeadlines() {
//         right--;
//         if (right <= -blinks[blinkArrLength].offsetWidth) {
//             right = right + blinks[blinkArrLength].offsetWidth;
//             var lastLink = blinks[blinkArrLength];
//             blinks[blinkArrLength] = bheadLines.insertBefore(
//                 lastLink,
//                 blinks[0]
//             );
//         }
//
//         // move headlines to new position
//         // console.log(left);
//         bheadLines.style.right = right + "px";
//         // console.log(links[9].offsetWidth);
//         myReq = requestAnimationFrame(moveHeadlines);
//     }
//
//     bheadLines.addEventListener("mouseenter", function() {
//         cancelAnimationFrame(myReq);
//     });
//     bheadLines.addEventListener("mouseleave", function() {
//         moveHeadlines();
//     });
// })();
