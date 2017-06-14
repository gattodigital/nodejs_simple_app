var router = require("./router.js");
// Problem: We need a simple way to look at user's badge count and JavaScript points from a web browser.
// Solution: Use Node.js to perform the profile look ups and serve our templates via HTTP

// 1. Create a web server
var http = require('http');
http.createServer(function (request, response) {
	router.home(request, response);
	router.user(request, response);
}).listen(3000);
console.log('Server running at Port:3000');




// 4. Function that handles the reading of files and merge in value

	// read from file and get a string
		// merge values into string
