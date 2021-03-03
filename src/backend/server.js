import config from './config.js';
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
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
  .catch((error) => console.log(error.reason));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");
});



const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))
app.use(cors())

app.listen(port, function () {
  console.log("Server is running on "+ port +" port");
});

app.use('/api/product', productRoute);
app.use('/api/user', userRoute);
app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>')
})


