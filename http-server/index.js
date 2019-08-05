const http = require("http");
const fs = require("fs");

fs.appendFile("requests.txt", "funky chicken", () => {});

const server = http.createServer(function(request, response) {
    request.on("error", err => {
        console.log(err);
        response.statusCode = 500;
        response.end();
    });
    response.on("error", err => {
        console.log(err);
    });

    console.log(request.method, request.url, request.headers);
    if (request.method == "POST") {
        let body = "";
        request.on("data", chunk => {
            body += chunk;
        });
        request.on("end", () => {
            response.end(
                `<!doctype html>
                <title></title>
                <p>`
            );
        });
        return;
    }
    if (request.method != "POST" && request.url == "/disco/duck") {
        response.statusCode = 302;
        response.setHeader("Location", "https://spiced.academy");
        response.end();
        return;
    }
    response.end(
        `<!doctype html>
        <title></title>
        <h1>Hi`
    );
});

server.listen(8080, () => console.log(`I'm listening.`));
