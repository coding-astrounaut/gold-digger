import http from 'node:http';


const PORT = 8000;

const __dirname = import.meta.dirname;

const server = http.createServer((req, res) => {
   const e = req.url;  
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});