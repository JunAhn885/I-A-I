import express from 'express';
var router = express.Router();

import postRouter from './controllers/posts.js';
import userRouter from './controllers/user.js';
import eventRouter from './controllers/events.js';
import familyRouter from './controllers/family.js';

//TODO: Add routes here
router.use('/posts', postRouter);
router.use('/user', userRouter);
router.use('/events', eventRouter);
router.use('/family', familyRouter);

export default router;