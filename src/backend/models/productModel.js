import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true},
  price: { type: Number , required: true },
  img: { type: String, required: true },
  color: {type: String, required: true },
  description : {type: String},
  size: {
    length:{type: Number},
    height: {type: Number},
    depth: {type: Number}
  },
  material: [{type:String}],
  idVendor: {type: Object, required: true},
  status: {type: String}
});

const productModel = mongoose.model('Product', productSchema);

export default productModel;
