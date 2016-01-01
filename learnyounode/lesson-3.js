var path = process.argv[2];
var fs = require("fs");

var contents = fs.readFileSync(path, "utf-8").split("\n");

console.log(contents.length - 1);
