
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';
import frame0 from '../assets/frame0.svg';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();
  const [isRemoving, setIsRemoving] = useState(null);

  const subtotal = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal + shipping;

  const handleQuantityChange = (id, delta) => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      const newQuantity = Math.max(1, item.quantity + delta);
      updateQuantity(id, newQuantity);
    }
  };

  const handleRemoveItem = (id) => {
    setIsRemoving(id);
    setTimeout(() => {
      removeFromCart(id);
      setIsRemoving(null);
    }, 300);
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="flex flex-row gap-2 items-center justify-start mb-8">
            <Link to="/" className="text-gray-600 text-sm hover:text-black">Home</Link>
            <img className="w-4 h-4" src={frame0} alt="" />
            <span className="text-black text-sm">Cart</span>
          </div>

          <div className="flex flex-col items-center justify-center py-16">
            <div className="text-6xl mb-4">🛒</div>
            <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
            <Link
              to="/"
              className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition duration-300 cursor-pointer"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex flex-row gap-2 items-center justify-start mb-8">
          <Link to="/" className="text-gray-600 text-sm hover:text-black">Home</Link>
          <img className="w-4 h-4" src={frame0} alt="" />
          <span className="text-black text-sm">Cart</span>
        </div>

        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1">
            <div className="bg-gray-50 rounded-xl p-6">
              {cartItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex flex-row items-center gap-4 py-4 transition-all duration-300 ${
                    index !== cartItems.length - 1 ? 'border-b border-gray-200' : ''
                  } ${isRemoving === item.id ? 'opacity-50 scale-95' : ''}`}
                >
                  <div className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{item.name}</h3>
                    <p className="text-gray-500 text-sm">Size: {item.selectedSize || 'M'}</p>
                    <p className="text-gray-500 text-sm">Color: {item.selectedColor || 'Default'}</p>
                    <p className="font-bold mt-1">${item.price}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-black hover:bg-black transition-all cursor-pointer group"
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:fill-black">
                          <path d="M9.46937 13.5319L4.46937 8.5319C4.39969 8.46222 4.34424 8.37943 4.30649 8.28827C4.26873 8.1971 4.2493 8.09936 4.2493 8.00065C4.2493 7.90194 4.26873 7.8042 4.30649 7.71304C4.34424 7.62187 4.39969 7.53908 4.46937 7.4694L9.46937 2.4694C9.61027 2.32851 9.80137 2.24935 10.0006 2.24935C10.1999 2.24935 10.391 2.32851 10.5319 2.4694C10.6728 2.6103 10.7519 2.8014 10.7519 3.00065C10.7519 3.19991 10.6728 3.391 10.5319 3.5319L6.06254 8.00065L10.5325 12.4694C10.6734 12.6103 10.7526 12.8014 10.7526 13.0007C10.7526 13.1999 10.6734 13.391 10.5325 13.5319C10.3916 13.6728 10.2005 13.752 10.0013 13.752C9.80202 13.752 9.61093 13.6728 9.47003 13.5319L9.46937 13.5319Z" fill="#6B7280"/>
                        </svg>
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-black hover:bg-black transition-all cursor-pointer group"
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:fill-black">
                          <path d="M6.53061 2.4694L11.5306 7.4694C11.6005 7.53908 11.656 7.62187 11.6939 7.71304C11.7317 7.8042 11.7512 7.90194 11.7512 8.00065C11.7512 8.09936 11.7317 8.1971 11.6939 8.28827C11.656 8.37943 11.6005 8.46222 11.5306 8.5319L6.53061 13.5319C6.38972 13.6728 6.19862 13.752 5.99936 13.752C5.80011 13.752 5.60901 13.6728 5.46811 13.5319C5.32722 13.391 5.24806 13.1999 5.24806 13.0007C5.24806 12.8014 5.32722 12.6103 5.46811 12.4694L9.93749 8.00003L5.46749 3.53065C5.32659 3.38976 5.24744 3.19866 5.24744 2.9994C5.24744 2.80015 5.32659 2.60905 5.46749 2.46815C5.60838 2.32726 5.79948 2.2481 5.99874 2.2481C6.198 2.2481 6.38909 2.32726 6.52999 2.46815L6.53061 2.4694Z" fill="#6B7280"/>
                        </svg>
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="flex items-center gap-1 text-gray-400 hover:text-red-500 transition-colors bg-gray-100 hover:bg-red-50 px-2 py-1 rounded-md cursor-pointer mt-4"
                      title="Remove item"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6H21M8 6V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V6M19 6V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V6M12 11V17M12 17V11M10 17H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-xs font-medium">Remove</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-96">
            <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-gray-500">Free shipping on orders over $100</p>
                )}
                <div className="border-t pt-3">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800 transition duration-300 cursor-pointer"
              >
                Proceed to Checkout
              </button>

              <Link
                to="/"
                className="block text-center text-sm text-gray-600 mt-4 hover:text-black underline"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

