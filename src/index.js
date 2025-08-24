require("dotenv").config();

const express = require("express");
const db = require("./config/db");
const authRoutes = require('./routes/authRoutes');
const productRoutes = require("./routes/productRoutes");
const userRoutes = require('./routes/userRoutes');
const tutorRoutes = require('./routes/tutorRoutes');
const kategoriRoutes = require('./routes/kategoriRoutes');
const uploadRoutes = require('./routes/uploadRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/api', productRoutes);
app.use('/api', userRoutes);
app.use('/api', tutorRoutes);
app.use('/api', kategoriRoutes);
app.use('/api', uploadRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});