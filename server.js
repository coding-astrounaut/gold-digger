import http from 'node:http';
import { serveStatic } from './utils/serveStatic.js'
import { handlePriceRequest, handleBuyRequest } from './utils/routeHandlers.js'

const PORT = 8000;

const __dirname = import.meta.dirname;
let price = 0;

const server = http.createServer(async (req, res) => {

    if (req.url === '/api') {

        if (req.method === 'GET') {
            return price = await handlePriceRequest(res);
        }

        else if (req.method === 'POST') {
            console.log('Received POST request to /api');
            return await handleBuyRequest(req, res, price);    
        }

    }
   serveStatic(req, res, __dirname);
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});