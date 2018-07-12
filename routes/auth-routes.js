const router = require('express').Router();
const passport = require('passport');

//logout route
router.get('/logout', function(req,res){
    req.logout();
    res.redirect('/');
});

// google auth login route
router.get('/google', passport.authenticate('google',{
    scope:['profile']
}));

//google auth callback route
router.get('/goole/redirect', passport.authenticate('google'),function(req,res){
    res.redirect()
});

//facebook auth login route

//facebook auth callback route

module.exports = router;