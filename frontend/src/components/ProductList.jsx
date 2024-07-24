import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = ({ newProduct }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get('http://localhost:8080/api/products');
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (newProduct) {
      setProducts((prevProducts) => {
        const isDuplicate = prevProducts.some(product => product._id === newProduct._id);
        return isDuplicate ? prevProducts : [...prevProducts, newProduct];
      });
    }
  }, [newProduct]);

  const handleDelete = async (id) => {
    try {
      console.log('Trying to delete product with ID:', id);
      await axios.delete(`http://localhost:8080/api/products/${id}`);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="product-list">
      <h2>All Products</h2>
      {products.map((product) => (
        <div key={product._id} className="product-item">
          <Link to={`/product/${product._id}`}>{product.title}</Link>
          <button className="delete-button" onClick={() => handleDelete(product._id)}>Delete</button>
        </div>
      ))}
      <Link to="/">
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
};

export default ProductList;
