const express = require("express");
const cors = require("cors");
const connectDB = require("./config/connectDB");
require("dotenv").config();
const bodyParser = require("body-parser");
const imageRoute = require('./Routers/imageRoute');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));



app.use('/file', imageRoute);
app.use('/', imageRoute);
app.use('/profile', express.static('uploads'));



connectDB();
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`succ runnig at PORT: ${PORT}`);
});
