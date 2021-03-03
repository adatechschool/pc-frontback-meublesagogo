import User from '../models/userModel.js';
import express from 'express';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';


const router = express.Router();

router.post('/signup', async (req, res) => {
    const hash = await bcrypt.hash(req.body.password, 10);
    const createUser = await new User({
        name: req.body.name,
        email: req.body.email,
        password: hash
    })
    if (createUser) {
        res.sendStatus(200);
        createUser.save();
    }
    else {
        res.sendStatus(400);       
    }
})

router.post('/login', async(req, res) => {
    const findUser = await User.findOne({ email: req.body.email })
    if(findUser){
        if (await bcrypt.compare(req.body.password, findUser.password)== true){
            res.status(200).json({
                userId: findUser._id,
                token:"TOKEN"
            });
        } else {
            res.status(401).send({message :"Mauvais mot de passe :(!"});
        }
    } else {
        res.status(401).json({ error: 'Utilisateur non trouvé !' });
    }
})

export default router;