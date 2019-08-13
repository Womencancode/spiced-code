const express = require("express");
const app = express();
const twitter = require("./twitter");
const util = require("util");
const getToken = util.promisify(twitter.getToken);
const getTweets = util.promisify(twitter.getTweets);

app.use(express.static("./public"));

app.get("/links.json", (req, res) => {
    getToken().then(token => {
        return Promise.all([
            getTweets(token, "bbcWorld"),
            getTweets(token, "sciam"),
            getTweets(token, "forbes")
        ])
            .then(result => {
                // console.log(result);
                let tweetSet1 = result[0];
                let tweetSet2 = result[1];
                let tweetSet3 = result[2];

                let mergedTweets = [...tweetSet1, ...tweetSet2, tweetSet3];
                let tweets = mergedTweets.sort((a, b) => {
                    return new Date(b.created_at) - new Date(a.created_at);
                });
                console.log("++++++++++++++++++");
                console.log("++++++++++++++++++");
                console.log("++++++++++++++++++");
                console.log(tweets);
                res.json(tweets);
            })
            .catch(err => {
                console.log(err);
                res.sendStatus(500);
            });
    });

    // twitter.getToken(function(err, token) {
    //     if (err) {
    //         console.log(err);
    //         res.sendStatus(500);
    //     } else {
    //         twitter.getToken(function(err, token) {
    //             return token;
    //         });
    //         twitter.getTweets(token, function(err, tweets) {
    //             if (err) {
    //                 console.log(err);
    //                 console.log(500);
    //             } else {
    //                 //format the tweets if you havent already
    //                 res.json(tweets);
    //             }
    //         });
    //     }
    // });
    // const tweets = twitter.getTweets();
    // res.json(tweets);
    // res.json({
    //     title: "test",
    //     href: "http://www.spiegel.de"
    // });
});

app.listen(8080, () => console.log("I am listening on 8080"));
