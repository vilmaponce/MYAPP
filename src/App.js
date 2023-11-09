import React from 'react';
import './App.css';
import Product from './components/Product';
import Footer from './components/Footer';


function App() {
  const productData = {
    name: 'Camisetas de Argentina',
    description: 'Vestimenta Deportiva',
    price: '$99.99',
    sku: '123456',
    quantityAvailable: '50 unidades',
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>INDUMENTARIA</h1>
        <div className="product-details">
          <Product product={productData} />
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default App;

