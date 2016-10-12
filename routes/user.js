var express = require('express');
var router = express.Router();

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get('/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next router
  if (req.params.id == 0) next('route');
  // otherwise pass control to the next middleware function in this stack
  else next(); //
}, function (req, res, next) {
  // render a regular page
  res.send('HI !!!!!  ' + req.params.id);
});
// handler for the /user/:id path, which renders a special page
router.get('/:id', function (req, res, next) {
  res.send('special');
});


router.post('/:id', function(req, res) {
  res.send('user ' + req.params.id + req.body.content);
});

module.exports = router;

