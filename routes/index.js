var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var logged_in = req.user ? true : false;
  var logged_out = !req.user ? true : false;
  if (!req.user) {
    res.render('index', {title: 'LinkedIn OAuth', logged_in: logged_in, logged_out: logged_out});
  } else {
  res.render('index', { title: 'LinkedIn OAuth', logged_in: logged_in, logged_out: logged_out, name: req.user.displayName });
  }
});

module.exports = router;
