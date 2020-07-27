const express = require('express');
const router = require('./routers/catsRouter');
const mongoose = require('mongoose');
const cors = require('cors');

// Setup Express
const app = express();

// Connect MongoDB
mongoose.connect('mongodb://localhost/cats', { useUnifiedTopology: true, useNewUrlParser: true });

// Cors is a protocol package for fetch same localhost:differentPort
app.use(cors())

// Body parser
app.use(express.json());

// API
app.use('/api',router)

// Build up API Server
app.listen(4000, e=>{
    console.log("houston online")
})
