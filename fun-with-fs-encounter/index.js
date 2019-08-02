const fs = require("fs");
const myPath = __dirname;

// const message = "lets write our first file with fs";

//******************
//write file async
//******************

// fs.writeFile(myPath + "/sassafras.txt", message, err => {
//     // this code will run when its finished
//     if (err) {
//         console.log(err);
//     }
//     console.log("it worked");
// });

//******************
//write file sync
//******************

// const obj = {
//     name: "sassafras",
//     favouriteFilms: ["Pulp Fiction", "In the mood for love", "Space Odd"]
// };
// this code will block everything underneath from running until it is done.
// fs.writeFileSync(`${myPath}/sassafras.json`, JSON.stringify(obj, null, 4));

//******************
//read dir async
//******************

// fs.readdir(myPath, { withFileTypes: true }, (err, files) => {
//     if (err) {
//         console.log(err);
//     }
//     for (let i = 0; i < files.length; i++) {
//         console.log(
//             "File name: " + files[i].name,
//             files[i].isFile(),
//             files[i].isDirectory()
//         );
//     }
// });

//******************
//read dir sync
//******************

// const myDir = fs.readdirSync(myPath, { withFileTypes: true });
// console.log(myDir[0].isFile());

//******************
//STATS!!! fs.stat()
//******************

// fs.stat(myPath + "/index.js", (err, stat) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(stat.size);
// });
//
// const myStat = fs.statSync(myDir[0].name);
// console.log(myStat);

//******************
//readfile
//******************

// fs.readFile(myPath + "/index.js", "utf8", (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data);
// });

const myFileContent = fs.readFileSync(myPath + "/index.js", "utf8");
console.log(myFileContent);
