import React from 'react';
import ProductList from '../components/ProductList';

const HomePage = ({ addToCart }) => {
  return (
    <div>
      <h2>Products</h2>
      <ProductList addToCart={addToCart} />
    </div>
  );
};

export default HomePage;
