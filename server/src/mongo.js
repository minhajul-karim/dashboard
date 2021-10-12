const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const uri = process.env.MONGO_CONNECTION_STRING;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectWithDB = () => {
  mongoose
    .connect(uri, options)
    .then(() => console.log('DB connection established'))
    .catch((err) => console.log(err));
};

module.exports = connectWithDB;
