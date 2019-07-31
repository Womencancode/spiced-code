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

    var username, password, userToSearch;
    var baseUrl = "https://api.github.com";

    function getRepos() {
        username = $('input[name="username"]').val();
        password = $('input[name="password"]').val();
        userToSearch = $('input[name="user-to-search"]').val();
        var endPoint = "/users/" + userToSearch + "/repos";
        // console.log(baseUrl + endPoint);
        $.ajax({
            url: baseUrl + endPoint,
            headers: {
                Authorization: "Basic " + btoa(username + ":" + password)
            },
            success: function(data) {
                // console.log("data:", data);
                var repos = Handlebars.templates.repos({
                    repos: data
                });
                $("#resultsContainer").html(repos);

                $(".repoCard").on("click", function(evt) {
                    var ownerRepo = $(evt.target)
                        .parent()
                        .find(".fullName")
                        .text()
                        .split("/");
                    getCommits(ownerRepo);
                });
            },
            error: function(err) {
                console.log(err);
            }
        });
    }

    function getCommits(arr) {
        var endPoint = "/repos/" + arr[0] + "/" + arr[1] + "/commits";
        // console.log("URL: ", baseUrl + endPoint);

        $.ajax({
            url: baseUrl + endPoint,
            headers: {
                Authorization: "Basic " + btoa(username + ":" + password)
            },
            success: function(data) {
                console.log(data);
                var commits = Handlebars.templates.commits({
                    commit: data.slice(0, 10)
                });
                $("#showCommitsWrapper").html(commits);
            },
            error: function(err) {
                console.log(err);
            }
        });
    }

    $("#go-button").on("click", function() {
        getRepos();
    });

    $("#showCommitsWrapper").on("click", "#closeShowCommits", function() {
        console.log("press close");
        $("#showCommits").remove();
    });
})();
