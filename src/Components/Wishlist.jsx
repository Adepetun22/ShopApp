import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image7 from '../assets/image-70.png';
import image8 from '../assets/image-80.png';
import image9 from '../assets/image-90.png';
import { useCart } from '../CartContext';

const Wishlist = () => {
  const { addToCart } = useCart();
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      image: image7,
      name: 'Polo with Contrast Trims',
      price: 212,
      originalPrice: 242,
      discount: '-20%',
      rating: '4.0/5'
    },
    {
      id: 2,
      image: image8,
      name: 'Gradient Graphic T-shirt',
      price: 145,
      rating: '3.5/5'
    },
    {
      id: 3,
      image: image9,
      name: 'Polo with Tipping Details',
      price: 180,
      rating: '4.5/5'
    }
  ]);

const handleRemoveItem = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Wishlist</h1>
      </div>

      {wishlistItems.length === 0 ? (
        <div className="bg-gray-50 rounded-xl p-12 text-center">
          <svg
            className="w-16 h-16 mx-auto text-gray-400 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <p className="text-gray-500 mb-4">Your wishlist is empty.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-xl p-4 relative hover:shadow-md transition-shadow group"
            >
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:bg-red-50 z-10"
              >
                <svg
                  className="w-4 h-4 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              
              <Link to="/product-details" className="block">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                
                <h3 className="font-medium text-gray-900 mb-1 line-clamp-2">
                  {item.name}
                </h3>
                
                <div className="flex items-center gap-1 mb-2">
                  <svg
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm text-gray-500">{item.rating}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-900">
                    ${item.price.toFixed(2)}
                  </span>
                  {item.originalPrice && (
                    <>
                      <span className="text-gray-400 line-through text-sm">
                        ${item.originalPrice.toFixed(2)}
                      </span>
                      {item.discount && (
                        <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                          {item.discount}
                        </span>
                      )}
                    </>
                  )}
                </div>
              </Link>
              
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="w-full mt-4 bg-black text-white py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition duration-300 cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;

