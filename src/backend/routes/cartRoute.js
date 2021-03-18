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
      res.status(200).send({ message: 'Panier créé !' });
      createCart.save();
    }else {
    // faire un else if et vérifier que le produit n'est pas deja dans le panier !!
      findCart.idProduct.push(req.body.idProduct)
      findCart.save()
      res.status(200).send({ message: 'Bien ajouté au panier' })
   }
})

router.get('/idUser/:idUser', auth, async (req, res) => {
  const findCart = await Cart.findOne({ idUser: req.params.idUser })
  if (findCart){
    res.status(200).send(findCart)
    console.log(findCart)
  } 
})

export default router;
