const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected');
const cors = require('cors');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // This allows React Frontend to make requests to your backend

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/protected', protectedRoutes);

const PORT = process.env.port || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
