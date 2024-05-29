const express = require('express');
require('dotenv').config();
const app = express();
const connectDB = require('./mongoose/db/DataBase');
// const UserModel = require("./mongoose/models/User")
// const usersRoute = require("./Routes/users")
const authRoute = require('./Routes/auth.js');
const morgan = require('morgan');
const helmet = require('helmet');

const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(morgan('common'));
app.use(helmet());
// app.use("/api/users",usersRoute);
app.use('/api/auth', authRoute);

const start = async () => {
  await connectDB(process.env.SOCIAL_MEDIA);
  app.listen(PORT, '127.0.0.1', () => {
    console.log('server running successfully!');
  });
};
start();
