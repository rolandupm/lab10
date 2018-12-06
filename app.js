const express = require("express");
const app = express();
const port = 3000;
var fs = require('fs');
var Request = require("request");
var $ = require('jquery');


app.use(express.static("public"))

app.all("*", function (request, response, next) {
		response.writeHead(200, {"Content-Type":
		"text/plain"});
		next();
		});

app.get('/', (req, res) => res.send("Hello!"));

app.get("/rf", function (request, response) {
 
	fs.readFile('file.txt' ,'utf8', function(err, contents) {
	    response.end(contents);
	});
 }
);

app.get("/otherAPI", function (request, response) {
 
	Request.get("https://jsonplaceholder.typicode.com/todos/", (error, response, body) => {
    if(error) {
        return console.dir(error);
   		 }
   		 console.dir(JSON.parse(body));
	});
 	}
);



app.listen(port, () => console.log("Example app listening on port ${port}!"));