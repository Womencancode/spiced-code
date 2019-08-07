const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(
    express.urlencoded({
        extended: false
    })
);

app.use((req, res, next) => {
    console.log("the route is:", req.url);
    next();
});

app.use(express.static("./projects"));

app.use(cookieParser());

app.get("/", (req, res) => {
    console.log("i made it to the / route");
    console.log("my cookies:", req.cookies);
    res.cookie("name", "markus");
    res.cookie("eatenLunch", true);
    res.send("<h1> oh my good Express is great</h1>");
});

app.get("/about", (req, res) => {
    console.log("i made it to the /about");
    console.log("reg url:", req.url);
    console.log("reg header: ", req.headers);
    console.log("req method:", req.method);
    res.send("<h1> about</h1>");
});

app.get("/express-class", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/about/:name", (req, res) => {
    console.log("this is our dynamic route");
    console.log("params:", req.params);
    res.send(`<h1>This is the page of ${req.params.name}</h1>`);
});

app.get("/add-cute-animal", (req, res) => {
    res.send(`
        <form method="POST">
            <input name="animal" type="text">
            <input name="cuteness-score" type="number" min="0" max="10">
            <button>submit</button>
        </form>
        `);
});

app.post("/add-cute-animal", (req, res) => {
    console.log("made it to the post route");
    console.log("req body:", req.body);
    console.log(`animal: ${req.body.animal}`);
    console.log(`cuteness-score: ${req.body["cuteness-score"]}`);
    res.send(
        `<p>you picked ${req.body.animal} and gave it a score of ${
            req.body["cuteness-score"]
        }</p>`
    );
});

app.listen(8080, (req, res) => {
    console.log("my express class server is running");
});

//res.render()
//res.json()
