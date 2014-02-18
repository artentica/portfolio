var http = require('http');
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
var ejs = require('ejs');



app.get('/', function(req, res) 
{
	res.render('index.ejs');
});

app.get('/index', function(req, res)
{
	res.render('index.ejs');
});

app.get('/formation', function(req, res)
{
	res.render('formation.ejs');
});

app.get('/experience', function(req, res)
{
	res.render('experience.ejs');
});

app.get('/competence', function(req, res)
{
	res.render('competence.ejs');
});

app.get('/projet', function(req, res)
{
	res.render('projet.ejs');
});

app.get('/contact', function(req, res)
{
	res.render('contact.ejs');
});

app.use(function(req, res, next)
{
    res.send(404, ' ERREUR 42 : Page introuvable !');
});

app.listen(8080);
