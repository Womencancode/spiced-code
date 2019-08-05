const chalk = require("chalk");
const http = require("http");
const querystring = require("querystring");
// console.log(chalk.blue("Schnabulator"));
// console.log(chalk.red("schnafgsg"));
const server = http.createServer((req, res) => {
    req.on("error", err => console.log("req error:", err));
    res.on("error", err => console.log("res error:", err));

    if (req.method == "GET") {
        res.write(`
                <!doctype html>
                <html>
                <title>Colors</title>
                    <form method="POST">
                        <input type="text" name="text" placeholder="text" autocomplete="off"></input>
                        <select name="color">
                            <option value="red">red</option>
                            <option value="blue">blue</option>
                            <option value="green">green</option>
                            <option value="yellow">yellow</option>
                            <option value="gray">gray</option>
                            <option value="magenta">magenta</option>
                            <option value="cyan">cyan</option>
                        </select>
                        <button type="submit">Go</button>
                    </form>
                </html>
                `);
        res.end();
    }

    if (req.method == "POST") {
        let body = "";
        req.on("data", chunk => {
            body += chunk;
        }).on("end", () => {
            // console.log("body:", body);
            let parsed = querystring.parse(body);
            console.log(parsed);
            res.setHeader("Content-type", "text/html");
            res.statusCode = 200;
            let color = parsed.color;
            let text = parsed.text;
            console.log(chalk.keyword(color)(text));
            res.write(`
                <a href="/"><p style="color:${color}">${text}</p></a>
                `);
            res.end();
        });
    }
});
server.listen(8080, () => {
    console.log("Port 8080 is listening");
});
