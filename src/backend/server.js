import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
// Pour les requêtes POST va servir à utiliser la méthode(.json) pour transformer le corps de la requête en json ou encore (.urlencoded)
import bodyParser from 'body-parser';

import config from './config.js';
import productRoute from './routes/productRoute.js';
import userRoute from './routes/userRoute.js';

const port = 5000;
const mongodbUrl = config.MONGODB_URL;

mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  // on prend le résultat quand ça marche et on met le code à éxécuter dedans afin que le serveur marche uniquement si
  // la BDD est bien connectée et on créé une application express
  .then(() => express()
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    .use(cors())
    .use('/api/product', productRoute)
    .use('/api/user', userRoute)
    .get('/', (req, res) => res.send('<h1>Hello World!</h1>'))
    .listen(port, () => console.log("Server is running on " + port + " port"))
  )
  .catch((error) => console.log(error.reason));

//We have a pending connection to the database running on localhost. We now need to get notified if we connect
// successfully or if a connection error occurs:
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log("we're connected!"));




