(function() {
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

    function getInfo(url, data) {
        $.ajax({
            url: url,
            method: "GET",
            data: data,
            success: function(response) {
                // console.log("response: ", response);
                response = response.artists || response.albums;
                console.log("response.next:", response.next);

                var html = "";

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

                for (var i = 0; i < response.items.length; i++) {
                    var imageUrl = "default.jpg";
                    if (response.items[i].images[0]) {
                        imageUrl = response.items[i].images[0].url;
                    }

                    html +=
                        "<div class='result'><img src='" +
                        imageUrl +
                        "'><div class='responseName'>" +
                        response.items[i].name +
                        "</div><a href='" +
                        response.items[i].external_urls.spotify +
                        "' target='_blank'>Goto Spotify</a></div>";

                    nextUrl =
                        response.next &&
                        response.next.replace(
                            "api.spotify.com/v1/search",
                            "elegant-croissant.glitch.me/spotify"
                        );
                }
                $("#results-container").append(html);

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

    $("#submit-btn").on("click", function() {
        $(".result").remove();
        $("#resultMsg").remove();
        getData();
        // console.log("data:", data);
        getInfo("https://elegant-croissant.glitch.me/spotify", data);
    });

    $("#next-btn").on("click", function() {
        // console.log("press next button");
        $("#resultMsg").remove();
        getData();
        getInfo(nextUrl);
    });
})();
