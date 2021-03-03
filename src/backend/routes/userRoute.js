import User from '../models/userModel.js';
import express from 'express';
import bodyParser from 'body-parser';


const router = express.Router();

router.post('/signup', async (req, res) => {
    const createUser = await new User({...req.body})
    if (createUser) {
        res.sendStatus(200);
        createUser.save();
    }
    else {
        res.sendStatus(400);
        
    }
  })

export default router;