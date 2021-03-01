import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true},
  price: { type: Number , required: true },
  img: { type: String, required: true },
  color: {type: String, required: true },
  description : String,
  size: {
    length: Number,
    height: Number,
    depth: Number
  },
  material: [[String]],
  inStock: Number,
  status: String
});

const productModel = mongoose.model('Product', productSchema);

export default productModel;
