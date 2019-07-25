(function() {
    $.ajax({
        url: "/data.json",
        method: "GET",
        success: function(response) {
            var myHtml = "";
            for (var i = 0; i < response.length; i++) {
                console.log("response: ", response[i]);
                var x =
                    "<div>" +
                    response[i].city +
                    " is in " +
                    response[i].country +
                    "</div>";
                myHtml = myHtml + x;
            }
            $("#result").html(myHtml);
        },
        error: function(error) {
            console.log("error: ", error);
        }
    });
})();
