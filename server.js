const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const shortid = require('shortid');
const PORT = process.env.PORT || 3001

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/Shopping_Cart_DB", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const Product = mongoose.model(
    'products',
    new mongoose.Schema({
        id: { type: String, default: shortid.generate },
        title: String,
        description: String,
        image: String,
        price: Number,
        availableSizes: [String],
    }))

app.get('/api/products', async (req, res) => {
    // palauta kaikki tuotteet, koska parametrejä ei ole. Get all!
    const products = await Product.find({});
    res.send(products);
});

app.post('/api/products', async (req, res) => {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct);
})

app.delete('/api/products/:id', async (req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
})

app.listen(PORT, () => {
    console.log(`Live on channel ${PORT}, baby.`)
});

