import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProductDetails from './Pages/ProductDetails';
import Category from './Pages/Category';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import DesktopNav from './Components/Navigation/DesktopNav';
import FooterComponent from './Components/Footer/FooterComponent';
import { CartProvider } from './CartContext';
import { SearchProvider } from './SearchContext';

function App() {
  return (
    <CartProvider>
      <SearchProvider>
        <Router>
          <DesktopNav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ProductDetails" element={<ProductDetails />} />
            <Route path="/Category" element={<Category />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
          <FooterComponent />
        </Router>
      </SearchProvider>
    </CartProvider>
  );
}

export default App;
