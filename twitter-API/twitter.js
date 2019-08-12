const https = require("https");
const { consumerKey, consumerSecret } = require("./secrets");
// const req = https.request(
//     {
//         method: "GET",
//         host: "flame-egg.glitch.me",
//         path: "/?q=a"
//     },
//     function(resp) {
//         if (resp.statusCode != 200) {
//             console.log(resp.statusCode);
//             //call the callback pass the statuscode
//         } else {
//             let body = "";
//             resp.on("data", chunk => (body += chunk));
//             resp.on("end", () => {
//                 try {
//                     //pass null for the error
//                     //as a sec argument pass the body (the json obj)
//                     body = JSON.parse(body);
//                 } catch (err) {
//                     console.log(err);
//                     // erroer here when you not getting back a json obj
//                 }
//                 console.log(body);
//                 // call the callback and pass the error
//             });
//         }
//     }
// );
// send error here for error
// req.on("error", err => console.log(err));
// req.end();

// for sending a rquest
// req.end("mybody = irgendwas");

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
                            // console.log(parsedTweets[5].full_text);
                            // console.log(parsedTweets[5].entities.urls[0].url);
                            let tweets = [];

                            // const tweetsJSON = JSON;
                            for (let i = 0; i < parsedTweets.length; i++) {
                                if (parsedTweets[i].entities.urls.length == 1) {
                                    // console.log("+++++++++++++");
                                    // console.log("position:", i);
                                    // console.log(parsedTweets[i].full_text);
                                    // console.log(parsedTweets[i].entities.urls);
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
                            // console.log(tweets);
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
