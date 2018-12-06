function read(file)
{
var fs = require('fs');
 
	fs.readFile(file 'utf8', function(err, contents) {
	    console.log(contents);
	});
 
}