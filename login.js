var passport = require('passport');
var LocalStategy = require('passport-local');

var LocallyDB = require('locallydb');
var db = new LocallyDB('./.data');
var users = db.collection('users');

var crypto = require('crypto');

function hash( password){
    return crypto.createhash('sha512').update(password).digest('hex');
}

passport.use(new LocalStategy(function(username, password, done){
    var user = users.where({username: username, password: hash(password)}).items[0];

    if (user){
        done(null, user);
    } else {
        done(null, false);
    }
}));

passport.serializeUser(function(user, done){
    done(null, user.cid);
});

passport.deserializeUser(function(cid, done){
    done(null,users.get(cid));
});

var router = require('express').Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true })); // login
router.use(bodyParser.json()); // API
router.use(require('cookie-parser')());
router.use(require('express-session')({
    secret: 'azdpkoadaJOIDJZnd3245TFj',
    resave: false,
    saveUninitialized: true
}));
router.use(passport.initialize());
router.use(passport.session());

router.get('/login', function(req, res){
    res.render('login');
});

exports.routes = router;




