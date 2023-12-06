const io = require('socket.io-client');

const socket = io('http://localhost:3000');

socket.on('connect', () => {
    console.log('Connected to the chat server.');

    // Send a message after connecting
    socket.emit('chat message', 'Hello from the test client!');
});

// Listen for messages from the server
socket.on('chat message', (msg) => {
    console.log('Message received:', msg);
});
// disconnect when receive from service
socket.on('Message', (msg) => {
    console.log('Client Message received:', msg);
    socket.disconnect();
});


socket.on('disconnect', () => {
    console.log('Disconnected from the server.');
});