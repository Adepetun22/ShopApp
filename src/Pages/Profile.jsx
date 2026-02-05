import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import frame0 from '../assets/frame0.svg';
import OrderCard from '../components/OrderCard';

const sampleOrders = [
  {
    id: 'ORD-12345678',
    date: '2024-01-15',
    status: 'Delivered',
    total: 299.99
  },
  {
    id: 'ORD-87654321',
    date: '2024-01-10',
    status: 'Shipped',
    total: 145.00
  }
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState('orders');
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900'
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-row gap-2 items-center justify-start mb-8">
          <Link to="/" className="text-gray-600 text-sm hover:text-black">Home</Link>
          <img className="w-4 h-4" src={frame0} alt="" />
          <span className="text-black text-sm">Profile</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-64">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">
                    {userData.firstName[0]}{userData.lastName[0]}
                  </span>
                </div>
                <div>
                  <p className="font-medium">{userData.firstName} {userData.lastName}</p>
                  <p className="text-sm text-gray-500">{userData.email}</p>
                </div>
              </div>

              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'orders' ? 'bg-black text-white' : 'hover:bg-gray-200'
                  }`}
                >
                  My Orders
                </button>
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'profile' ? 'bg-black text-white' : 'hover:bg-gray-200'
                  }`}
                >
                  Profile Settings
                </button>
                <button
                  onClick={() => setActiveTab('addresses')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'addresses' ? 'bg-black text-white' : 'hover:bg-gray-200'
                  }`}
                >
                  Addresses
                </button>
                <button
                  onClick={() => setActiveTab('wishlist')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'wishlist' ? 'bg-black text-white' : 'hover:bg-gray-200'
                  }`}
                >
                  Wishlist
                </button>
              </nav>
            </div>
          </div>

          <div className="flex-1">
            {activeTab === 'orders' && (
              <div>
                <h1 className="text-2xl font-bold mb-6">My Orders</h1>
                <div className="space-y-4">
                  {sampleOrders.map((order) => (
                    <OrderCard
                      key={order.id}
                      orderId={order.id}
                      date={order.date}
                      status={order.status}
                      total={order.total.toFixed(2)}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-2xl font-bold">Profile Settings</h1>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition duration-300 cursor-pointer"
                  >
                    {isEditing ? 'Cancel' : 'Edit Profile'}
                  </button>
                </div>
                <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={userData.firstName}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:bg-gray-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={userData.lastName}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:bg-gray-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:bg-gray-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={userData.phone}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:bg-gray-100"
                      />
                    </div>
                  </div>
                  {isEditing && (
                    <div className="mt-6">
                      <button
                        type="submit"
                        className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition duration-300 cursor-pointer"
                      >
                        Save Changes
                      </button>
                    </div>
                  )}
                </form>
              </div>
            )}

            {activeTab === 'addresses' && (
              <div>
                <h1 className="text-2xl font-bold mb-6">My Addresses</h1>
                <p className="text-gray-500">No saved addresses yet.</p>
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div>
                <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>
                <p className="text-gray-500">Your wishlist is empty.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
