const mongoose = require('mongoose');
const { connect } = require('mongoose');

const mongo_url=process.env.MONGO_CONN;
mongoose.connect(mongo_url)
    .then(() => {
            console.log("MongoDB database connected successfully....."); 
    }).catch((err) => {
        console.error("MongoDB databse is not connected.....",err);
    });