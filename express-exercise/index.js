const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.use(express.static("./projects"));

app.use(
    express.urlencoded({
        extended: false
    })
);

app.use((req, res, next) => {
    if (
        req.cookies.acceptCookies != "yes" &&
        req.url != "/cookie" &&
        req.url != "/youshallnotpass"
    ) {
        res.cookie("url", req.url);
        res.redirect("/cookie");
    } else {
        next();
    }
});

app.get("/cookie", (req, res) => {
    // console.log("I made it to the cookies");
    // console.log(req.cookies);
    res.send(`
        <h1> this site contains cookies </h1>
        <form method="POST">
            <input name="acceptCookies" type="checkbox">
                <label for="acceptCookies">accept</label>
            <button>submit</button>
        </form>
        `);
});

app.post("/cookie", (req, res) => {
    // console.log(req.body.acceptCookies);
    if (req.body.acceptCookies == "on") {
        res.cookie("acceptCookies", "yes");
        res.redirect(`${req.cookies.url}`);
    } else {
        res.redirect("/youshallnotpass");
    }
});

app.get("/youshallnotpass", (req, res) => {
    res.send(`
        <h1> you not accept our cookies </h1>
        <p> thats bad because you want to see our great website </p>
        <a href="/cookie">you want to try again?</a>
        `);
});

app.get("/:url", (req, res) => {
    res.send(`
        <h1> you are now on the ${req.params.url} page </h1>
        `);
});

app.get("/", (req, res) => {
    res.send(`
        <h1> you are on the home page <h1>
        `);
});

app.listen(8080, (req, res) => {
    console.log("listening on 8080");
});
