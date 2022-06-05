import express from 'express';
const router = express.Router();

import getRandom from '../controllers/random.controllers.js'


router.get('/', getRandom);


export default router