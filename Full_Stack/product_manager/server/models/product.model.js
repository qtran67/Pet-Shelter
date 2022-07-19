const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is required'],
        maxlength: [40, 'title length should be less than 40 characters']
    },
    price: {
        type: Number,
        required: [true, 'price is required']
    },
    desc: {
        type: String
    }
    }, 
    {timestamps: true}
);

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;