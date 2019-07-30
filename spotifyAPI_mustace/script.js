(function() {
    //+++++++++++++ DO NOT TOUCH  +++++++++++++
    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll(
        'script[type="text/x-handlebars-template"]'
    );

    Array.prototype.slice.call(templates).forEach(function(script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });
    //+++++++++++++ DO NOT TOUCH  +++++++++++++
    var nextUrl;
    var data;
    var userInput;
    var albumOrArtist;
    $("select").val();

    function getData() {
        userInput = $("input[name='user-input']").val();
        // console.log("userInput: " + userInput);
        albumOrArtist = $("select").val();
        // console.log("album or artist:", albumOrArtist);
        data = {
            q: userInput,
            type: albumOrArtist
        };
    }

    function infiniteCheck() {
        var hasReachedBottom =
            $(window).height() + $(document).scrollTop() >=
            $(document).height() - 400;

        if (hasReachedBottom) {
            console.log("has reach the bottom");
            console.log("remove result msg");
            $("#resultMsg").remove();
            console.log("get the data");
            getData();
            console.log("get next url");
            getInfo(nextUrl);
        } else {
            console.log("has reach the bottom, load more");
            setTimeout(infiniteCheck, 500);
        }
    }

    function startSearch() {
        $(".result").remove();
        getData();
        // console.log("data:", data);
        getInfo("https://elegant-croissant.glitch.me/spotify", data);
    }

    function getInfo(url, data) {
        $.ajax({
            url: url,
            method: "GET",
            data: data,
            success: function(response) {
                // console.log("response: ", response);
                response = response.artists || response.albums;
                // console.log("response.next:", response.next);
                //
                // var html = "";
                //
                if (response.items.length > 0) {
                    $("main").prepend(
                        "<div id='resultMsg'> results for " +
                            userInput +
                            "</div>"
                    );
                } else {
                    $("main").prepend(
                        "<div id='resultMsg'> no results for " +
                            userInput +
                            "</div>"
                    );
                }
                $("#results-container").append(
                    Handlebars.templates.resultsScript(response)
                );
                //////////////////////////////////
                //////////////////////////////////
                // var imagesRes = $(document).find(".imgResult");
                //
                // for (var i = 0; i < imagesRes.length; i++) {
                //     if (!imagesRes[i].currentSrc) {
                //         var lostImage = imagesRes.eq(i).attr("src");
                //         console.log("Lost image:", lostImage);
                //         lostImage.html(
                //             '<img class="imgResult" src="default.jpg">'
                //         );
                //     }
                // }
                //////////////////////////////////
                //////////////////////////////////

                nextUrl =
                    response.next &&
                    response.next.replace(
                        "api.spotify.com/v1/search",
                        "elegant-croissant.glitch.me/spotify"
                    );

                if (response.next !== null) {
                    if (location.search.indexOf("scroll=infinite") > -1) {
                        console.log("scroll=infinite");
                        infiniteCheck();
                    } else {
                        $("#next-btn").css("visibility", "visible");
                    }
                } else {
                    $("#next-btn").css("visibility", "hidden");
                }
            },
            error: function(error) {
                alert("ERROR: ", error);
            }
        });
    }

    $("input").on("focus, keydown", function(e) {
        if (e.keyCode == 13) {
            $("#resultMsg").remove();
            startSearch();
        }
    });

    $("#submit-btn").on("click", function() {
        $("#resultMsg").remove();
        startSearch();
    });

    $("#next-btn").on("click", function() {
        // console.log("press next button");
        $("#resultMsg").remove();
        getData();
        getInfo(nextUrl);
    });
})();
