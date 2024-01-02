import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = ({ cartElements, onClose, onRemove }) => (
  <div className="cart-overlay">
    <div className="cart container">
      <button className="close-btn btn btn-outline-secondary" onClick={onClose}>
        Close
      </button>
      <h2 className="text-center my-4">Your Cart</h2>
      {cartElements.map((item, index) => (
        <div key={index} className="cart-item row mb-3 align-items-center">
          <div className="col-md-4">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="img-fluid cart-item-image"
            />
          </div>
          <div className="col-md-8">
            <h4>{item.title}</h4>
            <p>₹{item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button className="btn btn-danger" onClick={() => onRemove(index)}>
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Cart;
