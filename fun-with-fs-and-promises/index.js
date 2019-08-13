console.log("++++++++++++++++++++++++++++");
console.log("++++++++++++++++++++++++++++");
console.log("++++++++++++++++++++++++++++");
console.log("++++++++++++++++++++++++++++");
const fs = require("fs");
const { readdir, stat } = require("fs").promises;
const myPath = __dirname;

function logSizes(path) {
    let promisedFiles = [];
    // console.log("filepath:", path);
    // console.log(path);
    return readdir(path, { withFileTypes: true })
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].isFile()) {
                    promisedFiles.push(
                        stat(path + "/" + data[i].name).then(function(stat) {
                            console.log(
                                `${path}/${data[i].name} : ${stat.size}`
                            );
                        })
                    );
                } else {
                    promisedFiles.push(logSizes(`${path}/${data[i].name}`));
                }

                // stat(data[i].name).then(stats => {
                //     if
                //     console.log(stats);
                // });
            }
            return Promise.all(promisedFiles);
        })
        .catch(err => {
            console.log("catchy catch");
            console.log(err);
        });
}

logSizes(myPath).then(() => {
    console.log("Done!");
});

//     fs.readdir(path, { withFileTypes: true }, (err, data) => {
//         if (err) {
//             console.log(err);
//         }
//         for (let i = 0; i < data.length; i++) {
//             if (data[i].isFile()) {
//                 const myStats = fs.statSync(`${path}/${data[i].name}`);
//                 console.log(`${path}/${data[i].name} : ${myStats.size}`);
//             } else {
//                 logSizes(`${path}/${data[i].name}`);
//             }
//         }
//     });
