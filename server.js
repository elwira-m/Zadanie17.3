var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');
var stringifyFile;

app.use(bodyParser.json()); 

app.get('/getNote', function (req, res) {
    //console.log('Otrzymałem żądanie GET do strony /list_user');
    fs.readFile('./test.json', 'utf8', function(err, data) {
		if (err) throw err;
		stringifyFile = data
		res.send(data);
	});

});

//app.post('/updateNote/:note' function (req, res) {

app.post('/updateNote/:note', function (req, res) {
	//console.log('POST');
	stringifyFile = req.params.note;
	fs.writeFile('./test.json', stringifyFile, function(err) {
		if (err) throw err;
		console.log('file updated');
		//res.end();
	});
});


app.listen(3000);