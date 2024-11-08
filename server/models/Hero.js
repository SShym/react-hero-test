const mongoose = require('mongoose');

const Hero = mongoose.Schema({
    nick_name: String,
    real_name: String,
    origin_description: String,
    superpowers: String,
    catch_phrase: String,
    images: Array
});

module.exports = mongoose.model('Hero', Hero);
