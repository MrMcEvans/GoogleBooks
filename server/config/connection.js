const mongoose = require('mongoose');
const uri = "mongodb+srv://anmcev70:<Novakin3848>@cluster0.m3mw2y2.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks');

module.exports = mongoose.connection;
