const https = require("https");
const { consumerKey, consumerSecret } = require("./secrets");

exports.getToken = callback => {
    const req = https.request(
        {
            method: "POST",
            host: "api.twitter.com",
            path: "/oauth2/token",
            headers: {
                "Content-Type":
                    "application/x-www-form-urlencoded;charset=UTF-8",
                Authorization: `Basic ${Buffer.from(
                    `${consumerKey}:${consumerSecret}`
                ).toString("base64")}`
            }
        },
        resp => {
            if (resp.statusCode != 200) {
                callback(resp.statusCode);
            } else {
                let token = "";
                resp.on("data", chunk => {
                    token += chunk;
                })
                    .on("end", () => {
                        try {
                            callback(null, JSON.parse(token).access_token);
                        } catch (err) {
                            callback(err);
                        }
                    })
                    .on("error", err => callback(err));
            }
        }
    );
    req.on("error", err => callback(err));
    req.end(`grant_type=client_credentials`);
};

// exports.getToken(function(err, token) {
//     console.log(token);
// });

exports.getTweets = (token, callback) => {
    const authorization = "Bearer " + token;
    // console.log(authorization);
    // entity.url check if the tweet hast no or more than one get themn out only use tzweets with 1 url
    const req = https.request(
        {
            method: "GET",
            host: "api.twitter.com",
            path:
                "/1.1/statuses/user_timeline.json?screen_name=SPIEGELONLINE&tweet_mode=extended",
            headers: {
                Authorization: authorization
            }
        },
        resp => {
            if (resp.statusCode != 200) {
                console.log("Error:", resp.statusCode);
                callback(resp.statusCode);
            } else {
                console.log("great things are coming");
                let body = "";
                resp.on("data", chunk => {
                    body += chunk;
                })
                    .on("end", () => {
                        try {
                            const parsedTweets = JSON.parse(body);
                            let tweets = [];
                            for (let i = 0; i < parsedTweets.length; i++) {
                                if (parsedTweets[i].entities.urls.length == 1) {
                                    let title = parsedTweets[i].full_text;
                                    tweets.push({
                                        title: title.replace(
                                            /(?:https?|ftp):\/\/[\n\S]+/g,
                                            ""
                                        ),
                                        href:
                                            parsedTweets[i].entities.urls[0].url
                                    });
                                }
                            }
                            callback(null, tweets);
                        } catch (err) {
                            callback(err);
                        }
                    })
                    .on("error", err => callback(err));
            }
        }
    );
    req.on("error", err => callback(err));
    req.end(`grant_type=client_credentials`);
};

// exports.getTweets(token, function(err, body) {
//     console.log(body);
// });
