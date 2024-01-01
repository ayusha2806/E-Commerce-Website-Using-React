import React from 'react';
import Header from './Header';

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

// Product component to display each product
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

// Main App component
const App = () => (
  <div className="app">
    <Header />
    <h1 className="text-center">The Generics</h1>
    <div className="container">
      <div className="row">
        {productsArr.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
    </div>
  </div>
);

export default App;
