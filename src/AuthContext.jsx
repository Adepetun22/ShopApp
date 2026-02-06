import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);
  const [authAlert, setAuthAlert] = useState({
    open: false,
    severity: 'success',
    message: ''
  });

  // Configure API base URL
  const API_URL = 'http://localhost:5000/api';

  // Show auth alert
  const showAuthAlert = (severity, message) => {
    setAuthAlert({ open: true, severity, message });
  };

  // Hide auth alert
  const hideAuthAlert = () => {
    setAuthAlert(prev => ({ ...prev, open: false }));
  };

  // Check for existing token on mount
  useEffect(() => {
    const initAuth = async () => {
      if (token) {
        try {
          const response = await fetch(`${API_URL}/auth/me`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });

          const data = await response.json();

          if (data.success) {
            setUser(data.user);
          } else {
            // Token invalid
            localStorage.removeItem('token');
            setToken(null);
          }
        } catch (error) {
          console.error('Auth init error:', error);
          localStorage.removeItem('token');
          setToken(null);
        }
      }
      setLoading(false);
    };

    initAuth();
  }, [token]);

  const login = async (email, password) => {
    try {
      console.log('Login attempt:', { email, passwordLength: password?.length });
      
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      
      console.log('Login response:', { status: response.status, data });

      if (data.success) {
        localStorage.setItem('token', data.token);
        setToken(data.token);
        setUser(data.user);
        showAuthAlert('success', 'Login successful!');
        return { success: true };
      } else {
        const errorMsg = data.message || 'Login failed. Please try again.';
        showAuthAlert('error', errorMsg);
        return { success: false, message: errorMsg };
      }
    } catch (error) {
      console.error('Login error:', error);
      showAuthAlert('error', 'Network error. Please try again.');
      return { success: false, message: 'Network error. Please try again.' };
    }
  };

  const register = async (firstName, lastName, phone, email, password) => {
    try {
      console.log('Register attempt:', { firstName, lastName, phone, email, passwordLength: password?.length });
      
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstName, lastName, phone, email, password })
      });

      const data = await response.json();
      
      console.log('Register response:', { status: response.status, data });

      if (data.success) {
        localStorage.setItem('token', data.token);
        setToken(data.token);
        setUser(data.user);
        showAuthAlert('success', 'Account created successfully!');
        return { success: true };
      } else {
        const errorMsg = data.message || 'Registration failed. Please try again.';
        showAuthAlert('error', errorMsg);
        return { success: false, message: errorMsg };
      }
    } catch (error) {
      console.error('Register error:', error);
      showAuthAlert('error', 'Network error. Please try again.');
      return { success: false, message: 'Network error. Please try again.' };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    showAuthAlert('success', 'Logged out successfully!');
  };

  const value = {
    user,
    token,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user,
    authAlert,
    showAuthAlert,
    hideAuthAlert
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

