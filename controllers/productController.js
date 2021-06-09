const Product = require('../models/productModel');

// @desc Gets all products that
// @route GET /api/products
async function getProducts(req, res){
    try {

        const products = await Product.findAll(); //idk
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(products));

    } catch (err){
        console.log(err);
    }
} 

// @desc Ge single product
// @route GET /api/products/:ip
async function getProduct(req, res, id){
    try {

        const product = await Product.findById(id) //idk

        
        if(!product){
            res.writeHead(404, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({message: 'EROR NO PRUDUCT HERE'}));
        }else {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(product));
        }
        

    } catch (err){
        console.log(err);
    }
} 

// @desc createa a product object
// @route POST /api/products
async function createProduct(req, res){
    try { 
        const product = {
            title: 'Test Pro',
            description: 'This is my product',
            price: 100
        }

        const newProduct = await Product.create(product);


        res.writeHead(201, {'Content-Type': 'application/json'});
        console.log(newProduct);
        return res.end(JSON.stringify(newProduct));
        

    } catch (err){
        console.log(err);
    }
} 

module.exports = {
    getProducts, getProduct,createProduct
}