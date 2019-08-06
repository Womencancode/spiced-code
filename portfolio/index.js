const http = require("http");
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const ca = require("chalk-animation");

function serveData(url, res) {
    const readStream = fs.createReadStream(__dirname + "/projects" + url);
    readStream.pipe(res);
    readStream.on("error", err => {
        console.log(err);
        res.statusCode = 404;
        res.end();
    });
}

http.createServer((req, res) => {
    if (req.method != "GET") {
        res.statusCode = 405;
        return res.end();
    }

    // console.log("path:", path);

    const myPath = path.normalize(__dirname + "/projects" + req.url);
    console.log(chalk.blue(myPath));
    if (!myPath.startsWith(__dirname + "/projects")) {
        console.log(ca.rainbow("dont to that!!! GO FUCK YOURSELF!"));
        res.statusCode = 403;
        return res.end();
    }

    fs.stat(__dirname + "/projects" + req.url, (err, stats) => {
        // console.log("req url:", req.url);
        // console.log(stats);
        if (err) {
            console.log(chalk.red("ERROR:"), err);
            res.statusCode = 404;
            return res.end();
        }
        if (stats.isDirectory()) {
            // console.log("is Directory");

            if (!req.url.endsWith("/")) {
                // console.log("ends not with /");
                // console.log(req.url);
                res.statusCode = 302;
                res.setHeader("Location", req.url + "/");
                res.end();
            }
            serveData(req.url + "index.html", res);
        } else {
            console.log("is File");
            // console.log(stats);
            console.log(path.extname(req.url));

            const fileExtHeaders = {
                ".html": "text/html",
                ".css": "text/css",
                ".js": "text/javascript",
                ".json": "application/json",
                ".gif": "image/gif",
                ".jpg": "image/jpeg",
                ".png": "image/png",
                ".svg": "image/svg+xml"
            };
            console.log(fileExtHeaders[path.extname(req.url)]);
            res.setHeader(
                "content-type",
                fileExtHeaders[path.extname(req.url)]
            );
            serveData(req.url, res);
        }
        // res.setHeader("content-type") <-- set content header to the correct file type before serving a file
        //easier is path.extname
        //last // QUESTION:

        // const readStream = fs.createReadStream(
        //     __dirname + req.url + "index.html"
        // );
        // readStream.pipe(res);
        // readStream.on("error", err => {
        //     console.log(err);
        //     res.statusCode = 404;
        //     res.end();
        // });
    });
}).listen(8080, () => {
    console.log("I am listening");
});

//part 2
//check with fs the content
