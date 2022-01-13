const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
// const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

const passport = require('passport');

const GOOGLE_CLIENT_ID = '706928070893-qtssjj2p3notlmelrqlrtvc780jdm560.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

const GITHUB_CLIENT_ID = 'c62eb3655afffb28006a';
const GITHUB_CLIENT_SECRET = '471e505e7e04205db6ece47e844bb87f16b56e1c';

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile)
  }
));

passport.use(new GitHubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: "/auth/github/callback"
},
function(accessToken, refreshToken, profile, done) {
  done(null, profile)
}
));

passport.serializeUser( (user, done) => {
    done(null, user)
});

passport.deserializeUser( (user, done) => {
    done(null, user)
});