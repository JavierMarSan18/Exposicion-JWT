const express = require('express')
const app = express()
const dotenv = require('dotenv');
const morgan = require('morgan');
const authRoutes = require('./routes/authRoutes.js');
const resourceRoutes = require('./routes/resourceRoutes.js');

dotenv.config();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api', authRoutes);
app.use('/api', resourceRoutes);

module.exports = app;