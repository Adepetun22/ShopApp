



import React from 'react';
import { Link } from 'react-router-dom';

const OrderSuccess = () => {
  const orderNumber = 'ORD-12345678';

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center max-w-md mx-auto text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8">
            <svg
              className="w-12 h-12 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
          <p className="text-gray-600 mb-2">Thank you for your purchase.</p>
          <p className="text-gray-500 text-sm mb-8">
            Your order has been placed successfully. You will receive an email confirmation shortly.
          </p>

          {/* Order Details */}
          <div className="bg-gray-50 rounded-xl p-6 w-full mb-8">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Order Number</span>
                <span className="font-medium">{orderNumber}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Estimated Delivery</span>
                <span className="font-medium">5-7 business days</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 w-full">
            <Link
              to="/"
              className="block w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800 transition duration-300 cursor-pointer text-center"
            >
              Continue Shopping
            </Link>
            <Link
              to="/profile"
              className="block w-full bg-gray-100 text-black py-3 rounded-full font-medium hover:bg-gray-200 transition duration-300 cursor-pointer text-center"
            >
              View Order History
            </Link>
          </div>

          {/* Additional Info */}
          <p className="text-gray-500 text-sm mt-8">
            Need help? <a href="/contact" className="text-black underline">Contact Support</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;




