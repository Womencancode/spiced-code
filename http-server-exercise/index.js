const http = require("http");
const fs = require("fs");
const myServer = http.createServer((req, res) => {
    req.on("error", err => {
        console.log(err);
        res.statusCode = 500;
        res.end();
    });
    res.on("error", err => console.log(err));

    console.log(req.method, req.url, req.headers);

    let date = new Date();
    fs.appendFile(
        "requests.txt",
        `
        Date:\t${date}
        request Method:\t${req.method}
        request Url:\t${req.url}
        user-agent:\t${req.headers["user-agent"]}
        `,
        () => {}
    );

    if (req.method == "GET" || req.method == "HEAD") {
        res.statusCode = 200;
        res.setHeader("content-type", "text/html");
    }

    if (req.method == "HEAD") {
        res.end();
    }

    if (req.method == "GET") {
        console.log("made it to GET");
        res.end(
            `<!doctype html>
            <html>
            <title>Hello World!</title>
            <p>Hello World!
            </html>`
        );
    }

    if (req.method == "POST") {
        console.log("POST");
        res.setHeader("Location", "/");
        res.statusCode = 302;
        res.end(console.log("Post requenst end"));
    }

    if (req.method != "GET" || req.method != "HEAD" || req.method != "POST") {
        res.statusCode = 405;
        res.end();
    }
});

myServer.listen(8080, () => console.log("I am listening"));
