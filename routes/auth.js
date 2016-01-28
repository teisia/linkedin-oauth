var express = require('express');
var router = express.Router();
var passport = require('passport');

//login
router.get('/linkedin', passport.authenticate('linkedin'));

//logout
router.get('/logout', function(req, res, next) {
  req.session = null;
  res.redirect('/');
});

//route that linkedin will call once the user has authenticated properly
router.get('/linkedin/callback', passport.authenticate('linkedin', { failureRedirect: '/' }), function(req, res, next) {
  res.redirect('/');
});

module.exports = router;
