// var mongoose = require('mongoose');
import mongoose from 'mongoose';

const dbUrl = process.env.MONGO_URL;

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
  
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
console.log('Connected to MongoDB');
});

export default db;