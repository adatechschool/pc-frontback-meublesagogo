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

router.delete('/id/:element', auth, async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
  const idUserReq = decodedToken.userId;
  const delCartItem = await Cart.findOne({idUser: idUserReq});
  const elementArray = delCartItem.idProduct;
  const element = req.params.element
  for (let i = 0; i<elementArray.length; i++) {
    if (elementArray[i] == element) {
      elementArray.splice(i,i)
      console.log("elementArry =" + elementArray[i]);
      console.log(element);
    }

  }
  console.log(elementArray);
    //res.status(200).json({message:"Objet supprimé"});
  // else {
  //   res.status(400).json({message:"Ca marche pas sooorry!" })
  // }
});

export default router;
