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

export default router;
