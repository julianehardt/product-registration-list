const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    product: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    avaliable: {
        type: Number,
        require: true
    }
}) 

module.exports = mongoose.model('product', ProductSchema)