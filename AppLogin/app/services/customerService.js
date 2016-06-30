// app/routes.js
var express = require('express');
var router = express.Router();


// load the todo model
var Todo = require('../models/customer.js');
    
    module.exports = function (app) {
    
    app.get('/', function (req, res) {
        
        res.sendfile(appRoot + '/public/js/views/login.html');
        
    });
    app.get('/register', function (req, res) {
        res.sendfile(appRoot + '/public/js/views/register.html');

    });

    app.get('/api/todos', function (req, res) {
        
        Todo.find(function (err, todos) {
            
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)
            
            res.json(todos); // return all todos in JSON format
        });
    });
    
    
    app.post('/api/todos', function (req, res) {
        
        // create a todo, information comes from AJAX request from Angular
        Todo.create({
            
            password : req.body.password,
            name : req.body.name,
            username : req.body.username,
            email : req.body.email

        }, function (err, customer) {
            if (err)
                res.send(err);
            
            // get and return all the todos after you create another
            Todo.find(function (err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        });

    });
    
    app.delete('/api/todos/:todo_id', function (req, res) {
        Todo.remove({
            _id : req.params.todo_id
        }, function (err, todo) {
            if (err)
                res.send(err);
            
            // get and return all the todos after you create another
            Todo.find(function (err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        });
    });

//module.exports = router;
};