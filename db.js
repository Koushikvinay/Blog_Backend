const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect(process.env.MONGO_URl, {
    dbName: process.env.DB_NAME
}).then(() => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log("ERROR Connecting to DB", err);
});