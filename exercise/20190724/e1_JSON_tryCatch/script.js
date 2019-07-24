(function() {
    var textarea = $("#textarea");
    var button = $("button");

    button.on("mousedown", function() {
        var text = textarea.val();
        try {
            JSON.parse(text);
            alert("valid JSON");
        } catch (e) {
            alert("invalid JSON");
        }
    });
})();
