const express = require("express");
const app = express();
const twitter = require("./twitter");
const util = require("util");
const getToken = util.promisify(twitter.getToken);
const getTweets = util.promisify(twitter.getTweets);

app.use(express.static("./public"));

app.get("/links.json", (req, res) => {
    getToken()
        .then(token => {
            return getTweets(token);
        })
        .then(tweets => {
            res.json(tweets);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
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
