// Header.js
import React from "react";
import { useCart } from '../CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const { toggleCart, cartItems } = useCart();

  // Calculate total quantity in the cart
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="container-fluid bg-dark text-light py-3">
      <div className="row d-flex justify-content-between align-items-center">
        <div className="col">
          <h3 className="text-center">HOME</h3>
        </div>
        <div className="col">
          <h3 className="text-center">STORE</h3>
        </div>
        <div className="col">
          <h3 className="text-center">ABOUT</h3>
        </div>
        <div className="col">
          <button className="btn btn-outline-light" onClick={toggleCart}>
            CART {totalQuantity > 0 && <span className="badge bg-danger">{totalQuantity}</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
