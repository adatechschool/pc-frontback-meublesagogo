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

router.post('/login', async(req, res) => {
    const findUser = await User.findOne({ email: req.body.email })
    if(findUser){
        if (req.body.password == findUser.password){
            res.status(200).send({message :"autorisation de se connecter :)"});
        } else {
            res.status(401).send({message :"Mauvais mot de passe :(!"});
        }
    } else {
        res.status(401).json({ error: 'Utilisateur non trouvé !' });
    }
})

export default router;