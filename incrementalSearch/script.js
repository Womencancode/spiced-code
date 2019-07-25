(function() {
    var textField = $("input");
    var results = $("#results");

    // hide the results div
    function hideResults() {
        results.css({
            visibility: "hidden"
        });
    }
    // get the input and show the results
    textField
        .on("input", function() {
            var val = textField.val();
            var throttle;
            clearTimeout(throttle);
            throttle = setTimeout(function() {
                if (val == textField.val()) {
                    if (!val) {
                        // hide and/ or empty the results display: none
                        // results.empty()
                        hideResults();
                        return;
                    }
                    $.ajax({
                        url: "https://flame-egg.glitch.me/",
                        data: {
                            // val is the variable with the data which comes from the server
                            q: val
                        },
                        success: function(matches) {
                            // do something with the data here
                            if (val == textField.val()) {
                                console.log(matches);
                                if (textField.val() != "") {
                                    results.css({
                                        visibility: "visible"
                                    });
                                    if (matches.length == 0) {
                                        results.html(
                                            '<div class="empty"> No results</div>'
                                        );
                                    } else if (matches.length > 0) {
                                        var html = "";
                                        for (
                                            var y = 0;
                                            y < matches.length;
                                            y++
                                        ) {
                                            html +=
                                                '<div class="result">' +
                                                matches[y] +
                                                "</div>";
                                        }
                                        results.html(html);
                                    }
                                }
                            }
                        }
                    });
                }
            }, 250);
        })
        .on("focus", function() {
            textField.trigger("input");
        });
    // highlight results on mouseover
    $(document).on("mouseover", ".result", function(e) {
        $(".result").removeClass("highlight");
        $(e.target).addClass("highlight");
    });
    // handle no results
    $(document).on("mousedown", ".empty", function() {
        textField.val("");
        hideResults();
    });
    // add the result to the input area
    $(document).on("mousedown", ".result", function(e) {
        //set the vaule --> README e.target
        textField.val($(e.target).html());
        hideResults();
    });
    // key navigation
    $(document).on("keydown", function(e) {
        var resultElements = $(".result");
        var highlighted = $(".highlight");
        if (e.keyCode == 40) {
            if (!resultElements.hasClass("highlight")) {
                resultElements.eq(0).addClass("highlight");
            } else if (!resultElements.eq(3).hasClass("highlight")) {
                highlighted
                    .next()
                    .addClass("highlight")
                    .prev()
                    .removeClass("highlight");
            }
        }
        if (e.keyCode == 38) {
            if (!resultElements.hasClass("highlight")) {
                resultElements.eq(3).addClass("highlight");
            } else if (!resultElements.eq(0).hasClass("highlight")) {
                highlighted
                    .prev()
                    .addClass("highlight")
                    .next()
                    .removeClass("highlight");
            }
        }
        if (e.keyCode == 13) {
            textField.val($(".result.highlight").html());
            hideResults();
        }
    });
    //blur on klick document
    textField.on("blur", function() {
        hideResults();
    });
})();
