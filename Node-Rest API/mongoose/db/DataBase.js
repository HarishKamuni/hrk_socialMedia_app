const mongoose = require('mongoose');

const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log('connected to DB');
  } catch (error) {
    throw new Error('DB is not connected!!!');
  }
};

module.exports = connectDB;
