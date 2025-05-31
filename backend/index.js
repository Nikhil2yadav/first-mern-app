
const express = require('express');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');
const InsertImageRouter = require('./Routes/InsertImageRouter');
const GetIamges =require('./Routes/GetImages')
require('dotenv').config();
require('./Models/db');
const path=require('path');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json()); // Instead of body-parser
app.use(cors());

// Test route
app.get("/ping", (req, res) => {
  res.send("PONG");
});

// API routes
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);
app.use('/insertImage', InsertImageRouter);
app.use('/getImages',GetIamges);
app.use('/Uploads',express.static(path.join(__dirname,'Uploads')));
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
