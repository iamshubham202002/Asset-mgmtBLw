import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';


import departmentRoutes from './routes/departmentRoutes.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('API is running...');
});
app.use('/api/departments', departmentRoutes);
app.use('/api/products', productRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});