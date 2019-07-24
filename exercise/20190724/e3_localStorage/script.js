var textarea = $("#textarea");

textarea.on("input", function() {
    localStorage.setItem("text", textarea.val());
});

textarea.val(localStorage.getItem("text"));
