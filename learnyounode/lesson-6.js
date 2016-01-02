var filter = require("./lesson-6-module.js");
var dir = process.argv[2];
var ext = process.argv[3];

filter(dir, ext, function(err, list) {
	if (err) return console.error(err);

	for (var i = 0; i < list.length; i++) {
		console.log(list[i]);
	}
});
