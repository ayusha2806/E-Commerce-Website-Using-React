import React, { useState } from 'react';
import Header from './Header/Header';
import Cart from './Cart/Cart';

// Dummy data
const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);

  // Hardcoded cart data
  const cartElements = [
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      quantity: 2,
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      quantity: 3,
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      quantity: 1,
    },
  ];

  const openCart = () => {
    setCartOpen(true);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  const removeItemFromCart = (index) => {
    // Implement logic to remove item from cart
    // This will be handled in the next task
  };

  return (
    <div className="app">
      <Header onCartClick={openCart} />
      <h1 className="text-center">The Generics</h1>
      <div className="container">
        <div className="row">
          {productsArr.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </div>
      {cartOpen && (
        <Cart cartElements={cartElements} onClose={closeCart} onRemove={removeItemFromCart} />
      )}
    </div>
  );
};

export default App;

// Product component
const Product = ({ title, price, imageUrl }) => (
  <div className="col-md-4 mb-3">
    <div className="product">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>₹{price}</p>
      <button className="btn btn-primary">Add To Cart</button>
    </div>
  </div>
);
