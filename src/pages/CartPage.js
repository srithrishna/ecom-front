import React from 'react';
import Cart from '../components/Cart';

const CartPage = ({ cart, removeFromCart }) => {
  return (
    <div>
      {/* <h2>Shopping Cart</h2> */}
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default CartPage;
