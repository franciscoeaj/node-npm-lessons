const BufferList = require("bl");
var http = require("http");
var url = process.argv[2];
var bl = new BufferList();

http.get(url, function(res) {
	res.on("data", function(data) {
		bl.append(data);
	});

	res.on("end", function() {
		console.log(bl.length);
		console.log(bl.toString("ascii"));
	});
}).on("error", function(err) {
	console.error(err.message);
});

