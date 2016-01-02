function filter(err, files) {
	if (err) throw err;

	for (var i = 0; i < files.length; i++) {
		var fileExt = files[i].split(".")[1];
		if (fileExt == ext) console.log(files[i]);
	}
}

var fs = require("fs");
var path = process.argv[2];
var ext = process.argv[3];

var listDir = fs.readdir(path, filter);
