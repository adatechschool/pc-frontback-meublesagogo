import express from 'express';
import jwt from 'jsonwebtoken';

import auth from '../middleware/auth.js';
import Product from '../models/productModel.js';


const router = express.Router();

router
  .get('/category/:category', async (req, res) => {
    const product = await Product.find({category: req.params.category});

    if (product) return res.send(product);

    res
      .status(404)
      .send({message: 'Product Not Found.'});
  })
  .get('/sample', async (req, res) => {
    const products = await Product.find().limit(10);
    const sample = [];

    if (products) {
      for (let i = 0; i < products.length; i++) {
        sample.push({
          "_id": products[i]._id,
          "name": products[i].name,
          "price": products[i].price,
          "category": products[i].category,
          "img": products[i].img
        })
      }
      // console.log(sample)
      return res.send(sample);
    }

    res.status(404).send({message: 'Products not found'});
  })
  .get('/id/:_id', async (req, res) => {
  const product = await Product.findOne({_id: req.params._id});

  if (product) return res.send(product);

  res.status(404).send({message: 'Id is not correspondant'});
})
  .post('/', auth, async (req, res) => {
  const createProduct = await new Product({...req.body})

  if (createProduct) {
    console.log(createProduct)
    res.sendStatus(200);
    createProduct.save();
  } else {
    res.status(400).send({message: 'Les paramètres ne sont pas valides'});
  }
})
  .put('/id/:_id', auth, async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
  const userId = decodedToken.userId;
  const modifyProduct = await Product.findOne({_id: req.params._id});

  console.log(modifyProduct);
  if (modifyProduct.idVendor == userId) {
    const modifyProduct = await Product.findOneAndUpdate({_id: req.params._id}, {...req.body});

    console.log(modifyProduct);
    res.status(200).json({message: "Objet modifié"});
  } else {
    res.status(400).json({message: "Ca marche pas sooorry!"})
  }
});

export default router;
