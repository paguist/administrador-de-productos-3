import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import EditProduct from './components/EditProduct'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Product Manager</h1>
        <Routes>
          <Route path="/" element={<><ProductForm /><ProductList /></>} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/product/:id/edit" element={<EditProduct />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
