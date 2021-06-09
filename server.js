const http = require('http');
const products = require('./products')

const server = http.createServer((req, res) => {
    if(req.url === '/api/products'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(products));
     
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify( {message: 'EROR 404 nothing here'}));
    }


 

})


const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT}`))