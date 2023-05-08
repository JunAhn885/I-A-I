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
    async (accessToken, refreshToken, profile, done) => {
        //looks for user in database, if not found, creates new user using information from google profile
        try{
            const user = await models.User.findOne({username: profile.emails[0].value});
            if(user){
                return done(null, user);
            } else {
                const newFamily = new models.Family({
                    name: profile.name.familyName,
                    members: [],
                    events: [],
                    posts: []
                })
                const newUser = new models.User({
                    username: profile.emails[0].value,
                    name: profile.name.givenName,
                    familyName: profile.name.familyName,
                    family: newFamily._id,
                    posts: [],
                    DateCreated: Date.now()
                })
                newFamily.members.push(newUser._id);
                await newUser.save();
                await newFamily.save();
            }
        }catch(err){
            console.log(err);
            return done(err);
        }

    })
)

passport.serializeUser((user, done) => {
    done(null, user);
})

passport.deserializeUser((user, done) => {
    done(null, user);
})

export default passport;