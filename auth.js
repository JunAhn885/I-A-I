import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import {CLIENT_ID, CLIENT_SECRET} from './credentials.js';

passport.use(
    new GoogleStrategy({
        clientID: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        callbackURL: "http://localhost:8080/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
        //can find user in database here
        console.log(profile);
        return done(null, profile);
    })
)

passport.serializeUser((user, done) => {
    done(null, user);
})

passport.deserializeUser((user, done) => {
    done(null, user);
})

export default passport;