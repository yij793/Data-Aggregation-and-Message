const mongoose = require('mongoose');
const app = require('./app');
const http = require('http');
require('./studentService');
require('./aggregateService');

const port = 3000;
const server = http.createServer(app);
const socketIo = require('socket.io');

// add socket message
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('A client has connected');

    socket.on('chat message', (msg) => {
        console.log('Message received:', msg);
        io.emit('Message', "Hello, this is the message from server");
    });

    socket.on('disconnect', () => {
        console.log('Disconnected');
    });
    socket.on('connect_error', (error) => {
        console.error('Connection Error:', error);
    });
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


async function startServer() {
    try {
        await mongoose.connect('mongodb://localhost:27017/local', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected successfully');
        // Start your server here or run other startup code
    } catch (error) {
        console.error('MongoDB connection error:', error);

    }
}

startServer();
module.exports = server