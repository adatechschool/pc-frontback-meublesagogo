import Product from '../models/productModel.js';
import express from 'express';


const router = express.Router();

router.get('/category/:category', async (req, res) => {
  const product = await Product.find({category: req.params.category});
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found.' });
  }
});

router.get('/sample', async (req, res) => {
  const products = await Product.find();
  const sample = [];
  if (products){
    for (let i=0; i<products.length; i++){
      sample.push([products[i]._id, products[i].name, products[i].price, products[i].category, products[i].img])
    }
      res.send(sample);
      console.log(sample);
  } else {
      res.status(404).send({ message: 'Products not found' });
    }
  });

export default router;
