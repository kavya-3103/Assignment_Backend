// app.js
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Math Operations API with Prisma & PostgreSQL is running!');
});

// Mount API routes
app.use('/api', apiRoutes);

module.exports = app;
