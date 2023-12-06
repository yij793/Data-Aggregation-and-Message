const mongoose = require('mongoose');
const app = require('./app');
const express = require('express');
require('./studentService');
require('./aggregateService');

const port = 3000;

app.listen(port, () => {
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