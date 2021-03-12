import mongoose from 'mongoose';
import productModel from 'productModel';
import uniqueValidator from 'mongoose-unique-validator';


const cartSchema = new mongoose.Schema({
    idUser: { type: String, required: true, unique: true },
    idProduct: { type: Object, required: true, unique: true},
    subTotal: {
        default: 0,
        type: Number
    }
}, {
    timestamps: true
})

cartSchema.plugin(uniqueValidator);
const cartModel = mongoose.model('Cart', cartSchema);

export default cartModel;
