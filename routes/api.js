import express from 'express';
var router = express.Router();

import postRouter from './controllers/posts.js';
import userRouter from './controllers/user.js';
import eventRouter from './controllers/events.js';

//TODO: Add routes here
router.use('/post', postRouter);
router.use('/user', userRouter);
router.use('/event', eventRouter);

export default router;