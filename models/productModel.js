const products = require('../products');
const {v4 : uuidv4} = require('uuid');

const {writeDataToFile } = require('../utils') 

function findAll(){

    return new Promise((resolve, reject) =>{ //idk what ?
        resolve(products); 
    })
     
}


function findById(id){

    return new Promise((resolve, reject) =>{ //idk what ?
        const product = products.find((p) => p.id === id ); //idk
        resolve(product);
    })
     
}

function create(product){

    return new Promise((resolve, reject) =>{ //idk what ?
    const newProduct = {id: uuidv4(), ...product}
    products.push(newProduct);
    writeDataToFile('./products.json',products);
    resolve(newProduct);
    
    })
     
}





module.exports = {
    findAll,findById,create
}