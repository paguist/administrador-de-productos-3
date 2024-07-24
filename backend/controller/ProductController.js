const Product = require('../model/ProductModel');

module.exports.createProduct = (req, res) => {
  Product.create(req.body)
    .then((newProduct) => {
      return res.status(201).json(newProduct);
    })
    .catch((error) => {
      console.error(error.message);
      res.statusMessage = error.message;
      return res.status(400).json(error.message);
    });
};

module.exports.getAllProducts = (req, res) => {
  Product.find()
    .then((productsList) => {
      return res.status(200).json(productsList);
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
};

module.exports.getProductById = (req, res) => {
  Product.findById(req.params.id)
    .then((foundProduct) => {
      if (!foundProduct) {
        res.statusMessage = 'Product not found.';
        return res.status(404).json({ message: 'Product not found.' });
      }
      return res.status(200).json(foundProduct);
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
};

module.exports.updateProduct = (req, res) => {
  const updateFields = {};
  const { title, price, description } = req.body;

  if (title) updateFields.title = title;
  if (price) updateFields.price = price;
  if (description) updateFields.description = description;

  Product.findByIdAndUpdate(req.params.id, updateFields, { new: true })
    .then((updatedProduct) => {
      return res.status(200).json(updatedProduct);
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
};

module.exports.deleteProduct = (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => {
      return res.status(204).end();
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
};