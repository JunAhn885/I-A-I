import express from 'express';
import models from './models.js'

import apiRouter from './routes/api.js';

var app = express();

app.use(function(req, res, next) {
    req.models = models;
    next();
});

app.use('/api', apiRouter);

app.listen(3000, function () {
    console.log("Express server listening on port 3000");
});

export default app;