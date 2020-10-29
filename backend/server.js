const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

// const { restart } = require('nodemon');

const app = express();
dotenv.config();
connectDB();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/products', productRoutes);

// error middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;
app.listen(PORT, console.log(`Server running in ${NODE_ENV} on port ${PORT}`));
