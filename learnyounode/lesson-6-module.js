var fs = require("fs");

module.exports = function(path, ext, callback) {
	fs.readdir(path, function(err, files) {
		if (err) return callback(err);

		var validFiles = [];
		for (var i = 0; i < files.length; i++) {
			var fileExt = files[i].split(".")[1];
			if (fileExt == ext) validFiles.push(files[i]);
		}

		callback(null, validFiles);
	});
}
