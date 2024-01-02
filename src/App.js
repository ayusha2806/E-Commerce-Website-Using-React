// App.js
import React from 'react';
import { CartProvider } from './CartContext';
import Header from './Header/Header';
import Cart from './Cart/Cart';
import Product from './Product';


const App = () => {
  return (
    <CartProvider>
      <div className="app">
        <Header />
        <h1 className="text-center mt-4 mb-4">The Generics</h1>
        <div className="container">
          <div className="row">
            <Product title="Colors" price={100} imageUrl="https://prasadyash2411.github.io/ecom-website/img/Album%201.png" />
            <Product title="Black and white Colors" price={50} imageUrl="https://prasadyash2411.github.io/ecom-website/img/Album%202.png" />
            <Product title="Yellow and Black Colors" price={70} imageUrl="https://prasadyash2411.github.io/ecom-website/img/Album%203.png" />
            {/* Add more Product components as needed */}
          </div>
        </div>
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;
