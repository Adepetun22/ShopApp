import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProductDetails from './Pages/ProductDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;