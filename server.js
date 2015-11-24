var express = require('express'), path = require('path'), login = require('./login');

express()
    .set('view engine', 'ejs')
    .use(express.static(path.join(__dirname, '/public')))
    .use(login.routes)
    .use(require('./chirps'))
    .get('*', login.required, function(req, res){
        res.render('index', {
            user : login.safe(req.user)
        });
    })
    .listen(3000);