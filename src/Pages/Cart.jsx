
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';
import frame0 from '../assets/frame0.svg';
import frame4 from '../assets/frame4.svg';
import frame5 from '../assets/frame5.svg';

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
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all cursor-pointer"
                      >
                        <img src={frame4} alt="Decrease" className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all cursor-pointer"
                      >
                        <img src={frame5} alt="Increase" className="w-4 h-4" />
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

