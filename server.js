import express from 'express';
import models from './models.js';
import cookieParser from 'cookie-parser';
import sessions from 'express-session';
import passportSetup from './auth.js';
import passport from 'passport';
import cors from 'cors'
import {SESSION_SECRET} from './credentials.js';

import apiRouter from './routes/api.js';

var app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(sessions({
    secret: SESSION_SECRET,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 24},
    resave: false
}));
  
app.use(passport.initialize());
app.use(passport.session()); 

app.use(function(req, res, next) {
    req.models = models;
    next();
});

app.use('/api', apiRouter);

//testing route
app.get('/', (req, res) => {
    res.send('<a href="/auth/google">Authenticate with Google</a>');
});

app.get('/auth/google', 
    passport.authenticate('google', {scope: ['email','profile'] }) //this is the authentication route
);

app.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/login' // when authentication is unsuccessful redirect to login
    }),
    (req, res) => {
        req.session.user = req.user; //attaching user to session, information is in req.user variable 
        res.redirect('http://localhost:3000/bonding-journal'); // when authentication is successful redirect to home
    }
);

app.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.send("logged out");
    res.redirect('/');
});

app.listen(PORT, function () {
    console.log("Express server listening on port", PORT);
});

export default app;