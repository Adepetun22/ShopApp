import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProductDetails from './Pages/ProductDetails';
import Category from './Pages/Category';
import DesktopNav from './Components/Navigation/DesktopNav';
import FooterComponent from './Components/Footer/FooterComponent';
import { CartProvider } from './CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <DesktopNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ProductDetails" element={<ProductDetails />} />
          <Route path="/Category" element={<Category />} />
        </Routes>
        <FooterComponent />
      </Router>
    </CartProvider>
  );
}

export default App;