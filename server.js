const http = require('http');
const { getProducts,getProduct } = require('./controllers/productController');

const server = http.createServer((req, res) => {
    if(req.url === '/api/products' && req.method === 'GET'){
    
     getProducts(req, res);
    } else if(req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'GET'){
        const id = req.url.split('/')[3];
        getProduct(req,res,id);
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify( {message: 'EROR 404 nothing here'}));
    }


 

})


const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT}`))