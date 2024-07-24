const express = require('express');
const cors = require('cors');
require('./config/database'); 
const productRoutes = require('./routes/ProductRoute');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', productRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});