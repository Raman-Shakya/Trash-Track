const express = require('express');
const WebSocket = require('ws');

// Initialize Express app
const app = express();

// Create an HTTP server to integrate with WebSocket
const server = require('http').createServer(app);

// Create WebSocket server
const wss = new WebSocket.Server({ server });

// When a connection is made, send a welcome message
var percentage = 0;
setInterval(() => {
    percentage = (percentage + 0.1) % 100;
    console.log(percentage);
    wss.clients.forEach((ws) => {
        ws.send(percentage);
    })
}, 100);

wss.on('connection', (ws) => {
        
    console.log('A new client connected');

    // Send a message to the client
    ws.send('Welcome to the WebSocket server!');

    // Handle incoming messages from the client
    ws.on('message', (message) => {
        console.log('Received:', message);
    });

    // Handle when the connection is closed
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

// Serve a simple HTML page (optional)
app.get('/', (req, res) => {
  res.send('<h1>WebSocket Server is Running!</h1>');
});

// Start the server on port 3000
server.listen(4000, () => {
  console.log('Server is listening on port 4000');
});
