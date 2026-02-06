import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DesktopNav from './Components/Navigation/DesktopNav';
import FooterComponent from './Components/Footer/FooterComponent';
import { CartProvider } from './CartContext';
import { SearchProvider } from './SearchContext';

// Lazy load page components for code splitting
// This significantly reduces initial bundle size and improves page load time
const HomePage = lazy(() => import('./Pages/HomePage'));
const ProductDetails = lazy(() => import('./Pages/ProductDetails'));
const Category = lazy(() => import('./Pages/Category'));
const Signup = lazy(() => import('./Pages/Signup'));
const Login = lazy(() => import('./Pages/Login'));
const Cart = lazy(() => import('./Pages/Cart'));
const Checkout = lazy(() => import('./Pages/Checkout'));
const OrderSuccess = lazy(() => import('./Pages/OrderSuccess'));
const Profile = lazy(() => import('./Pages/Profile'));

// Loading spinner component for Suspense fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
  </div>
);

function App() {
  return (
    <CartProvider>
      <SearchProvider>
        <Router>
          <DesktopNav />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/ProductDetails" element={<ProductDetails />} />
              <Route path="/Category" element={<Category />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Checkout" element={<Checkout />} />
              <Route path="/OrderSuccess" element={<OrderSuccess />} />
              <Route path="/Profile" element={<Profile />} />
            </Routes>
          </Suspense>
          <FooterComponent />
        </Router>
      </SearchProvider>
    </CartProvider>
  );
}

export default App;
