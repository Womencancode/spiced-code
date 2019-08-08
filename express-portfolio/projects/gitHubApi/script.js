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

                $(".latestCommits").on("click", function(evt) {
                    if (
                        $(evt.target)
                            .parent()
                            .parent()
                            .find(".showCommits")
                            .text().length > 0
                    ) {
                        $(evt.target)
                            .parent()
                            .parent()
                            .find(".showCommits")
                            .toggle("hidden");
                    } else {
                        var ownerRepo = $(evt.target)
                            .parent()
                            .parent()
                            .find(".fullName")
                            .text()
                            .split("/");
                        getCommits(ownerRepo, evt.target);
                    }
                });
            },
            error: function(err) {
                console.log(err);
            }
        });
    }

    function getCommits(arr, event) {
        var endPoint = "/repos/" + arr[0] + "/" + arr[1] + "/commits";
        // console.log("URL: ", baseUrl + endPoint);

        $.ajax({
            url: baseUrl + endPoint,
            headers: {
                Authorization: "Basic " + btoa(username + ":" + password)
            },
            success: function(data) {
                // console.log(data);
                var commits = Handlebars.templates.commits({
                    commit: data.slice(0, 10)
                });
                $(event)
                    .parent()
                    .parent()
                    .append(commits);
            },
            error: function(err) {
                console.log("ERROR!:", err);
            }
        });
    }

    $("#go-button").on("click", function() {
        getRepos();
    });
})();
