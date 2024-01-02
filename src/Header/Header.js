import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({ onCartClick }) => {
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
          <button className="btn btn-outline-light" onClick={onCartClick}>
            CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
