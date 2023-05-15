import express from 'express';
import models from './models.js';
import cookieParser from 'cookie-parser';
import sessions from 'express-session';
import passportSetup from './auth.js';
import passport from 'passport';
import cors from 'cors';
import MongoStore from 'connect-mongo'
import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';
import {SESSION_SECRET, MONGODB_USERNAME, MONGODB_PASSWORD, CLIENT_ID, CLIENT_SECRET, JWT_SECRET} from './credentials.js';

import apiRouter from './routes/api.js';

let checkAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) { return next() }
    res.redirect("http://localhost:3000/login")
}

var app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Use the MongoStore for session storage
const store = MongoStore.create({
    mongoUrl: "mongodb+srv://"+ MONGODB_USERNAME + ":"+ MONGODB_PASSWORD + "@mvpcluster.drilqih.mongodb.net/test",
    ttl: 14 * 24 * 60 * 60
})

// Use the sessions middleware with the MongoStore
app.use(sessions({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 24},
    store: store
}));

// Initialize Passport and restore authentication state, if any, from the session
app.use(passport.initialize());
app.use(passport.session()); 

// Set models on req object
app.use(function(req, res, next) {
    req.models = models;
    next();
});

// app.use(function(req, res, next) {
//     req.user = {
//         _id: "645d2d41f9284cd2c9387040",
//         username: "user@test.com",
//         name: "Test",
//         familyName: "User",
//         password: "testpassword",
//         family: "645d2d8a3590b3ed1ef08f06",
//         posts: [],
//         DateCreated: "2020-11-02T00:00:00.000Z",
//         __v: 0
//     };
//     next();
// });

app.post('/auth/google', async (req, res) => {
    let userObject = jwtDecode(req.body.token);
    console.log(userObject)
    let user = await req.models.User.findOne({username: userObject.email});
    console.log('user1', user)
    try {
        if(!user){
            const newFamily = new models.Family({
                name: userObject.family_name,
                members: [],
            })
            const newUser = new models.User({
                username: userObject.email,
                name: userObject.given_name,
                familyName: userObject.family_name,
                family: newFamily._id,
                posts: [],
                DateCreated: Date.now()
            })
            newFamily.members.push(newUser._id);
            await newUser.save();
            await newFamily.save();
            req.session.user = newUser;
            req.session.save();
        } else {
            req.session.user = user;
            req.session.save();
        }
        console.log(req.session.user)
        console.log('user 3', user);
        res.json({success: true})
    } catch (err) {
        console.log(err);
        res.sendStatus(401);
    }
});

app.post('/auth/login', async (req, res) => {
    let user = await req.models.User.findOne({username: req.body.username, password: req.body.password});
    if (!user) {
        res.status(401).json({success: false, message: "Invalid username or password"});
    } else {
        req.session.user = user;
        req.session.save();
        res.json({success: true})
    }
});
// Mount the API router
app.use('/api', checkAuthenticated, apiRouter);

// Mount the authentication routes
app.get('/', (req, res) => {
    res.send('<a href="/auth/google">Authenticate with Google</a>');
});

app.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if(err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.clearCookie('connect.sid');
            res.redirect('http://localhost:3000/login');  
        }
    });     
});

app.get('/session-info', (req, res) => {
    res.send(req.session);
});

app.listen(PORT, function () {
    console.log("Express server listening on port", PORT);
});

export default app;
