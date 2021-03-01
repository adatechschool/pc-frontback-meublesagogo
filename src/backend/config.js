import dotenv from 'dotenv';

dotenv.config();

export default {
  MONGODB_URL: `mongodb+srv://${process.env.username}:${process.env.password}@adatech.sbjlq.mongodb.net/site_meubles?retryWrites=true&w=majority`
};
