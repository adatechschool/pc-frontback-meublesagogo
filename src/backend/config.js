import dotenv from 'dotenv';

dotenv.config();

export default {
  MONGODB_URL: 'mongodb+srv://'+process.env.DB_USERNAME+':'+process.env.DB_PASSWORD+'@adatech.sbjlq.mongodb.net/site_meubles?retryWrites=true&w=majority'
};
