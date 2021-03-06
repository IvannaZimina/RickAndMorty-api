const router = require('express').Router();
const passport = require('passport');
const { route } = require('.');

const CLIENT_URL = 'http://localhost:3000/';

router.get('/login/success', (req, res) => {
    if (req.user) {
        res.status(200).json({ success: true, message: 'success', user: req.user });
    };
});

router.get('/login/failed', (req, res) => {
    res.status(401).json({ success: false, message: 'failure' });
});

router.get('/logout', (req,res) => {
    req.logout();
    res.redirect(CLIENT_URL);
});

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect(CLIENT_URL);
    }
);

router.get('/github', passport.authenticate('github', { scope: ['profile'] }));

router.get('/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect(CLIENT_URL);
    }
);


module.exports = router;