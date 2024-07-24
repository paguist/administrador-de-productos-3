const mongoose = require('mongoose');

mongoose
  .connect("mongodb://127.0.0.1:27017/products_database")
  .then(() => {
    console.log("Conexión exitosa a MongoDB");
  })
  .catch((err) => {
    console.error("Error al conectar a MongoDB:", err);
  });