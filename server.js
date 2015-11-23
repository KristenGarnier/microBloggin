var express = require('express'), path = require('path'), login = require('./login');

express()
    .set('view engine', 'ejs')
    .use(express.static(path.join(__dirname, '/public')))
    .use(login.routes)
    .get('*', function(req, res){
        res.render('index');
    })
    .listen(3000);