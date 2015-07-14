var express = require('express');
var router = express.Router();

// Members page
router.get('/', checkAuthenticated, function(req, res, next) {
  res.render('index', { title: 'Members' });
});

function checkAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect('/users/login');
}

module.exports = router;