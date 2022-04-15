const passport = require('passport');
const Strategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('./models/User');

function setupGoogle({ ROOT_URL, server }) {
    passport.use(new Strategy(
      // 1. define `verify` method: get profile and googleToken from Google
      const verify = async (accessToken, refreshToken, profile, verified) => {
        let email;
        let avatarUrl;
     
        if (profile.emails) {
          email = profile.emails[0].value;
        }
     
        if (profile.photos && profile.photos.length > 0) {
          avatarUrl = profile.photos[0].value.replace('sz=50', 'sz=128');
        }
     
        // call and wait for `User.signInOrSignUp`
      };
      // 2. call and wait for static method `User.signInOrSignUp` to return created or existing user 
      {
        clientID: process.env.GOOGLE_CLIENTID,
        clientSecret: process.env.GOOGLE_CLIENTSECRET,
        callbackURL: `${ROOT_URL}/auth/google/callback`
      },
      verify
    ))
  
    // 3. serialize user AND deserialize user;
  
    // 4. initialize passport AND passport's session
  
    // 5. Define Express routes (/auth/google, /oauth2callback, /logout)
  }
  
  module.exports = setupGoogle;