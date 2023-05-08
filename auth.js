import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import {CLIENT_ID, CLIENT_SECRET} from './credentials.js';
import models from './models.js';

passport.use(
    new GoogleStrategy({
        clientID: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        callbackURL: "http://localhost:8080/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
        //looks for user in database, if not found, creates new user using information from google profile
        models.User.findOne({username: profile.emails[0].value}, (err, user) => {
            if (err) {
                console.log(err);
                return done(err);
            } else {
                if (!user) {
                    const newUser = new models.User({
                        username: profile.emails[0].value,
                        name: profile.name.givenName,
                        familyName: profile.name.familyName,
                        DateCreated: Date.now()
                    })
                    newUser.save((err) => {
                        if (err) {
                            console.log(err);
                            return done(err);
                        } else {
                            return done(null, newUser);
                        }
                    })
                } else {
                    return done(null, user);
                }
            }
        })
    })
)

passport.serializeUser((user, done) => {
    done(null, user);
})

passport.deserializeUser((user, done) => {
    done(null, user);
})

export default passport;