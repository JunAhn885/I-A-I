import express from 'express';
var router = express.Router();

import postRouter from './controllers/posts.js';
import userRouter from './controllers/user.js';
import eventRouter from './controllers/events.js';

//TODO: Add routes here
router.use('/posts', postRouter);
router.use('/user', userRouter);
router.use('/events', eventRouter);

export default router;