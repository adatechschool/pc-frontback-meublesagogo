import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';


const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String, required: true, unique: true, index: true, dropDups: true,
  },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false },
});

userSchema.plugin(uniqueValidator);
const userModel = mongoose.model('User', userSchema);


export default userModel;
