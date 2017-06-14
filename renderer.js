var fs = require("fs");

function view(templateName, values, response) {
	// read from template files
	var fileContents = fs.readFileSync('./views/' + templateName + '.html');
	// insert values in to the content

	// write out the contents to response
	response.write(fileContents);
}

module.exports.view = view;