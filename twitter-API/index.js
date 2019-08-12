const express = require("express");
const app = express();
const twitter = require("./twitter");

app.use(express.static("./public"));

app.get("/links.json", (req, res) => {
    twitter.getToken(function(err, token) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            twitter.getToken(function(err, token) {
                return token;
            });
            twitter.getTweets(token, function(err, tweets) {
                if (err) {
                    console.log(err);
                    console.log(500);
                } else {
                    //format the tweets if you havent already
                    res.json(tweets);
                }
            });
        }
    });
    // const tweets = twitter.getTweets();
    // res.json(tweets);
    // res.json({
    //     title: "test",
    //     href: "http://www.spiegel.de"
    // });
});

app.listen(8080, () => console.log("I am listening on 8080"));
