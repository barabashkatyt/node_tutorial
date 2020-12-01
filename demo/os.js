const os = require("os");

console.log("os: ", os.platform());

console.log("processor: ", os.arch());

console.log("processor info: ", os.cpus());

console.log("Free memo: ", os.freemem());

console.log("All memo: ", os.totalmem());

console.log("Home dir: ", os.homedir());

console.log("System is on: ", os.uptime());
