function async_io(err, data) {
	if (err) throw err;

	var buffer, lines;
	buffer = data.toString();
	lines = buffer.split("\n");

	console.log(lines.length - 1);
}

var path = process.argv[2];
var fs = require("fs");

var contents = fs.readFile(path, "utf-8", async_io);
