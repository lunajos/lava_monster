'use strict';

const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

let people = [
'john', 'issac', 'newton', 'sarah', 'lisa'
];

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// app.use is to include the use of middleware
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res){
	res.render('index', {
		title: 'Monsters',
		message: 'This is some monster message!',
		people: people
	});
});


app.listen(port, function () {
	console.log('Listening on Port: ' + port);
});
