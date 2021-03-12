import Cart from '../models/cartModel.js';
import express from 'express';
import bodyParser from 'body-parser';
import auth from '../middleware/auth.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/add', auth,  async (req, res) => {
  const findCart = await Cart.findOne({ idUser: req.body.idUser })
    if(!findCart){
      const createCart = new Cart({...req.body})
      res.sendStatus(200);
      createCart.save();
  }else{
  //  const modifyCart =  Cart.findOneAndUpdate({_id: req.params._id},{...req.body});
   }
})

export default router;
