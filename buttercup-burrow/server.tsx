import express from 'express';
import {data} from './src/data';

// const express = require('express');

// Configuration
const app = express();

// Routes
app.get('/api/items', (req, res) => {
    res.send(data.items);
});

// Listen
const PORT = process.env.PORT || 5000;
app.listen(console.log(`Server listening on port http://localhost:${PORT}`)
);
