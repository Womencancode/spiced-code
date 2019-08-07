const cp = require("child_process");
const cluster = require("cluster");
const os = require("os");

cluster.setupMaster({
    exec: __dirname + "/index.js"
});

if (cluster.isMaster) {
    for (let i = 0, l = os.cpus().length; i < l; i++) {
        cluster.fork();
    }
}

cluster.on("exit", function(worker) {
    console.log(worker.process.pid + " bit the dust");
    cluster.fork();
});

// givts you back an object containing the same like you do ls in console
// cp.exec("ls", () => {
//     console.log(arguments);
// });
