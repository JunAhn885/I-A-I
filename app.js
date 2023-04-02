import express from 'express';
import models from './models.js'

import apiRouter from './routes/api.js';

var app = express();

app.use(function(req, res, next) {
    req.models = models;
    next();
});

app.use('/api', apiRouter);

export default app;