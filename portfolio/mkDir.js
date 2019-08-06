const fs = require("fs");
const chalk = require("chalk");

module.exports = function mkDir(callback) {
    fs.readdir(__dirname + "/projects", (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log("Look mum NO HANDS!!");
        let filesHtml = "";
        for (let i = 0; i < data.length; i++) {
            // console.log(data[i].name);
            filesHtml += `<div><a href="${data[i]}">${data[i]}</a></div>`;
        }
        console.log(chalk.yellow(filesHtml));
        let html = `
            <!DOCTYPE html>
            <html lang="en" dir="ltr">
                <head>
                    <meta charset="utf-8">
                    <title>YEAH PORTFILIO</title>
                </head>
                <body>
                    ${filesHtml}
                </body>
            </html>
            `;
        console.log(html);
        callback(null, html);
    });
};
