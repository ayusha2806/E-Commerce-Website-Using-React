import React from "react";

const Header = () => {
  return (
    <div className="container-fluid bg-dark text-light py-3">
      <div className="row">
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
          <button className="btn btn-outline-light">CART</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
