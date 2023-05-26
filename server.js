import express from 'express';
import models from './models.js';
import session from 'express-session';
import cors from 'cors';
import MongoStore from 'connect-mongo'
import jwtDecode from 'jwt-decode';
import cookieParser from 'cookie-parser';
import {OAuth2Client} from 'google-auth-library';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {SESSION_SECRET, MONGODB_USERNAME, MONGODB_PASSWORD, CLIENT_ID, CLIENT_SECRET, JWT_SECRET} from './credentials.js';

import apiRouter from './routes/api.js';

var app = express();

const PORT = process.env.PORT || 8080;

const client = new OAuth2Client(CLIENT_ID);

async function verifyGoogleToken(token) {
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,
        });
        return {payload: ticket.getPayload()};
    } catch (err) {
        console.log(err);
        return {error: 'invalid user detected, please try again'};
    }
}
// Set models on req object
app.use(function(req, res, next) {
    req.models = models;
    next();
});

// Use the MongoStore for session storage
const store = new MongoStore({
    mongoUrl: "mongodb+srv://"+ MONGODB_USERNAME + ":"+ MONGODB_PASSWORD + "@mvpcluster.drilqih.mongodb.net/test",
    ttl: 14 * 24 * 60 * 60
})

// Use the sessions middleware with the MongoStore
app.use(session({
    secret: 'rando secret cat dog mouse',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
        secure: false,
    },
    store: store,
}));

app.use(cors({
  origin: true, // Replace with the actual URL of your frontend application
  credentials: true, // Allow cookies to be sent across origins
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', apiRouter);

app.post('/test-user', function(req, res, next) {
    req.session.user = {
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
    res.send(req.session);
});
        
app.get('/session-info', (req, res) => {
    //req.session.test = true;
    res.send(req.session);
    //req.session.destroy();
});

app.post('/auth/google', async (req, res) => {
    try {
        if (req.body.token) {
            const verificationResponse = await verifyGoogleToken(req.body.token);
            if (verificationResponse.error) {
              return res.status(400).json({
                message: verificationResponse.error,
              });
            }
            const userObject = verificationResponse?.payload;
            let user = await req.models.User.findOne({username: userObject.email});
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
                user = newUser;
            }
            req.session.authenticated = true;
            req.session.save();
            res.status(200).json({success: true, user: user, token: jwt.sign({user: user}, JWT_SECRET, {expiresIn: '1d'})})
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({message: err});
    }
    console.log('outside try catch', req.session)
});

app.post('/auth/login', async (req, res) => {
    try {
        let user = await req.models.User.findOne({username: req.body.username});
        if(!user){
            res.status(401).json({success: false, message: "Invalid username"});
        } else {
            let hashedPassword = await bcrypt.hash(req.body.password, user.salt);
            if(hashedPassword === user.password){
                req.session.authenticated = true;
                req.session.save();
                res.status(200).json({success: true, user: user, token: jwt.sign({user: user}, JWT_SECRET, {expiresIn: '1d'})})
            } else {
                res.status(401).json({success: false, message: "Invalid password"});
            }
        }    
        
    } catch (err) {
        console.log(err);
        res.status(401).json({success: false, message: "Invalid username or password"});
    }
    
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

app.listen(PORT, function () {
    console.log("Express server listening on port", PORT);
});

export default app;
