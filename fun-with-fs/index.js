const fs = require("fs");
const savePath = __dirname;
const myPath = __dirname + "/files";

function logSizes(path) {
    // console.log(path);
    fs.readdir(path, { withFileTypes: true }, (err, data) => {
        if (err) {
            console.log(err);
        }
        for (let i = 0; i < data.length; i++) {
            if (data[i].isFile()) {
                const myStats = fs.statSync(`${path}/${data[i].name}`);
                console.log(`${path}/${data[i].name} : ${myStats.size}`);
            } else {
                logSizes(`${path}/${data[i].name}`);
            }
        }
    });
}
logSizes(myPath);

function mapSizes(path) {
    // console.log(path);
    let obj = {};
    const data = fs.readdirSync(path, { withFileTypes: true });

    // console.log(path);
    for (let i = 0; i < data.length; i++) {
        if (data[i].isFile()) {
            const myStat = fs.statSync(`${path}/${data[i].name}`);
            // console.log("is file ", data[i].name);
            // console.log("my size", myStat.size);
            let name = data[i].name;
            obj[name] = myStat.size;
        } else if (data[i].isDirectory()) {
            let name = data[i].name;
            // console.log(name);
            // console.log(path, name);
            // console.log(`Path name: ${path}/${name}`);
            obj[name] = mapSizes(`${path}/${name}`);
            // console.log("is folder");
        }
    }

    return obj;
}

// console.log(obj);
fs.writeFileSync(
    `${savePath}/files.json`,
    JSON.stringify(mapSizes(myPath), null, 4)
);
