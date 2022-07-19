const Product = require('../models/product.model');

module.exports = {
    getProducts: (req, res) => {
        Product.find({})
        .then((products) => {
            res.json(products);
        })
        .catch((err) => {
            console.log('ERROR IN Get all', err);
            res.status(400).json({ message: 'something went wrong in find all products', error: err });
        });
    },
    getProductById: (req, res) => {
        Product.findOne({ _id: req.params.id })
        .then((product) => {
            res.json(product);
        })
        .catch((err) => {
            console.log('ERROR IN Get Product', err);
            res.status(400).json({ message: 'something went wrong in find product', error: err });
        });
    },
    createProduct: (req, res) => {
        Product.create(req.body)
        .then((product) => {
            res.status(201).json(product);
        })
        .catch((err) => {
            console.log('ERROR IN create Product', err);
            res.status(400).json({ message: 'something went wrong in create product', error: err });
        });
    },
    updateProduct: (req, res) => {
        Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then((product) => {
            res.json(product);
        })
        .catch((err) => {
            console.log('ERROR IN update Product', err);
            res.status(400).json({ message: 'something went wrong in update product', error: err });
        });
    },
    deleteProduct: (req, res) => {
        Product.deleteOne({ _id: req.params.id })
        .then((product) => {
            res.json(product);
        })
        .catch((err) => {
            console.log('ERROR IN delete Product', err);
            res.status(400).json({ message: 'something went wrong in delete product', error: err });
        });
    },
};