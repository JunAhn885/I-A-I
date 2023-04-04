import express from 'express';
var router = express.Router();

import familyRouter from './controllers/family.js';

//TODO: Add routes here
router.use('family', familyRouter);

export default router;