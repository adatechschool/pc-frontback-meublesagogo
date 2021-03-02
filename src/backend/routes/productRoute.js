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
      sample.push({"_id":products[i]._id, "name":products[i].name, "price":products[i].price, "category":products[i].category,"img":products[i].img})
    }
    console.log(sample)
      res.send(sample);
  } else {
      res.status(404).send({ message: 'Products not found' });
    }
  });

router.get('/id/:_id',async (req, res) => {
  const product = await Product.findOne({_id: req.params._id})
  if (product){
    res.send(product);
  }else{
    res.status(404).send({ message: 'Id is not correspondant' });
  }
});
export default router;
