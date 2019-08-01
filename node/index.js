console.log("yeah NODE!!");

const url = require("url");
const queryString = require("querystring");
const urlToParse = process.argv[2];
const parsedUrl = url.parse(urlToParse);

console.log(`The protocol is ${parsedUrl.protocol}`);
console.log(`The host is ${parsedUrl.host}`);
console.log(`The hostname is ${parsedUrl.hostname}`);
console.log(`The port is ${parsedUrl.port}`);
console.log(`The pathname is ${parsedUrl.pathname}`);

if (parsedUrl.query == null) {
    console.log(`The query is ${parsedUrl.query}`);
} else {
    const parsedQS = queryString.parse(parsedUrl.query);
    console.log(`${parsedQS.a} and ${parsedQS.b}`);

    for (let prop in parsedQS) {
        console.log(`The value of ${prop} is ${parsedQS[prop]}`);
    }
}
