require("dotenv").config();

const express = require("express");
const db = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require('./routes/userRoutes');
const tutorRoutes = require('./routes/tutorRoutes');
const kategoriRoutes = require('./routes/kategoriRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', productRoutes);
app.use('/api', userRoutes);
app.use('/api', tutorRoutes);
app.use('/api', kategoriRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});











// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('<h1>Hello World!</h1>')
// })

// app.get('/about', (req, res) => {
//   res.send('Ini adalah halaman About')
// })

// app.post('/tentang', (req, res) => {
//   res.send('Ini adalah post halaman About')
// })

// app.use('/', (req, res) => {
//   res.status(404);
//   res.send('<h1>404</h1>')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
