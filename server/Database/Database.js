const mongoose = require('mongoose');
require('dotenv').config();

const Database = async () => {
    try{
        await mongoose.connect(process.env.mongoUrl);   
        console.log('Connected Successfully to MongoDB')
    } catch(err){
        console.log(err.message, 'error database')
    }

}

module.exports = Database;