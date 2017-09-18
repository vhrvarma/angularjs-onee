var express = require('express');
var Router = express.Router();

var loginFunc = require('../modules/user').login;

var parallelFunc = require('../modules/async-parallel');
var seriesFunc = require('../modules/async-series');

Router.post('/login', function(req, res) {
    loginFunc(req.body.email, req.body.password, function(result) {
        res.json(result);
    })
});

Router.get('/parallel', function(req, res) {
    parallelFunc(function(result) {
        res.json(result);
    })
});
Router.get('/series', function(req, res) {
    seriesFunc(function(result) {
        res.json(result);
    })
});

module.exports = Router;