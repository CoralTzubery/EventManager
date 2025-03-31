import * as http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json '});
    res.end(JSON.stringify({ message: 'Event Mangaer API is running' }));
});

const PORT = 3000;
server.listen(PORT, ()=> {
    console.log(`Server running on httpe://localhost:${PORT}`);
});

