const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); 

// Routes
const miniRouter = require('./routes/mini');
const projectRoute = require('./routes/Project');
const majorProjectRoutes = require('./routes/major');
const bookingRouter = require('./routes/Booking');
const midProjectRouter = require('./routes/midProjectRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect MongoDB
connectDB();

// Use Routes
app.use('/api', miniRouter);
app.use('/api', midProjectRouter);
app.use('/api', majorProjectRoutes);
app.use('/api', bookingRouter);
app.use('/api', projectRoute);
app.use('/api', transactionRoutes);
app.use('/api', userRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server Error' });
});

// Start Server
app.listen(5000, () => console.log('✅ Server running on port 5000.'));
