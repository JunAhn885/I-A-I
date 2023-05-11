import express from 'express';
import models from './models.js';
import cookieParser from 'cookie-parser';
import sessions from 'express-session';
import passportSetup from './auth.js';
import passport from 'passport';
import cors from 'cors';
import MongoStore from 'connect-mongo'
import {SESSION_SECRET, MONGODB_USERNAME, MONGODB_PASSWORD} from './credentials.js';

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

app.use(function(req, res, next) {
    req.user = {
        _id: "645d2d41f9284cd2c9387040",
        username: "user@test.com",
        name: "Test",
        familyName: "User",
        password: "testpassword",
        family: "645d2d8a3590b3ed1ef08f06",
        posts: [],
        DateCreated: "2020-11-02T00:00:00.000Z",
        __v: 0
    };
    next();
});

// Mount the API router
app.use('/api', checkAuthenticated, apiRouter);

// Mount the authentication routes
app.get('/', (req, res) => {
    res.send('<a href="/auth/google">Authenticate with Google</a>');
});

app.get('/auth/google', 
    passport.authenticate('google', {scope: ['email','profile'] }) //this is the authentication route  
);

app.get('/auth/google/callback',
    passport.authenticate('google', {
        //successRedirect: 'http://localhost:3000/bonding-journal', //needs to redirect to a protected route
        failureRedirect: 'http://localhost:3000/login'
    }),(req, res) => {
        req.session.user = req.user;
        req.session.save();
        console.log(req.session)
        res.redirect('http://localhost:3000/bonding-journal');
    }
);


app.get('/logout', (req, res) => {
    req.logout(() => {});
    req.session.destroy();
    res.redirect('/login');
});

app.get('/test', checkAuthenticated, (req, res) => {
    req.session.user = req.user;
    res.send(`Welcome, ${req.user.name}!`);
});

app.get('/session-info', (req, res) => {
    res.send(req.user);
});

app.listen(PORT, function () {
    console.log("Express server listening on port", PORT);
});

export default app;
