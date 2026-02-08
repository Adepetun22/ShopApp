import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import frame0 from '../assets/frame0.svg';
import OrderCard from '../components/OrderCard';
import Addresses from '../Components/Addresses';

const Profile = () => {
  const { user, loading: authLoading, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('orders');
  const [isEditing, setIsEditing] = useState(false);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  // Load orders from localStorage
  useEffect(() => {
    const loadOrders = () => {
      const storedOrders = localStorage.getItem('userOrders');
      if (storedOrders) {
        const allOrders = JSON.parse(storedOrders);
        // Filter orders for current user or show all for demo
        const userOrders = allOrders.filter(order => 
          order.userId === user?.email || order.userId === 'guest'
        );
        setOrders(userOrders.reverse()); // Show newest first
      }
    };

    if (user) {
      loadOrders();
    }
  }, [user]);

  // Show loading state while auth is initializing
  if (authLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!user) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Please log in to view your profile</h2>
          <Link to="/login" className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800">
            Log In
          </Link>
        </div>
      </div>
    );
  }

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
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl font-bold">
                    {user.firstName?.[0] || ''}{user.lastName?.[0] || ''}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium">{user.firstName} {user.lastName}</p>
                  <p className="text-sm text-gray-500 break-all">{user.email}</p>
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
                  onClick={() => {
                    logout();
                    navigate('/login');
                  }}
                  className="w-full text-left px-4 py-2 rounded-lg transition-colors cursor-pointer hover:bg-gray-200 text-red-600"
                >
                  Log Out
                </button>
              </nav>
            </div>
          </div>

          <div className="flex-1">
            {activeTab === 'orders' && (
              <div>
                <h1 className="text-2xl font-bold mb-6">My Orders</h1>
                {orders.length > 0 ? (
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <OrderCard
                        key={order.id}
                        orderId={order.id}
                        date={order.date}
                        status={order.status}
                        total={order.total.toFixed(2)}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">📦</div>
                    <h2 className="text-xl font-bold mb-2">No Orders Yet</h2>
                    <p className="text-gray-600 mb-6">You haven't placed any orders yet.</p>
                    <Link
                      to="/"
                      className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 inline-block"
                    >
                      Start Shopping
                    </Link>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'profile' && (
              <ProfileSettings user={user} isEditing={isEditing} setIsEditing={setIsEditing} />
            )}

            {activeTab === 'addresses' && (
              <Addresses />
            )}

            {activeTab === 'wishlist' && (
              <Wishlist />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Profile settings sub-component
const ProfileSettings = ({ user, isEditing, setIsEditing }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // TODO: API call to update user profile
  };

  return (
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
              defaultValue={user.firstName}
              disabled={!isEditing}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:bg-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              defaultValue={user.lastName}
              disabled={!isEditing}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:bg-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              defaultValue={user.email}
              disabled={!isEditing}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:bg-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              defaultValue={user.phone || ''}
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
  );
};

export default Profile;
