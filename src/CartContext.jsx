import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  // Load cart from localStorage on initial render
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('shopCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  const [alert, setAlert] = useState({
    open: false,
    severity: 'success',
    message: ''
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('shopCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const showAlert = (severity, message) => {
    setAlert({ open: true, severity, message });
  };

  const hideAlert = () => {
    setAlert(prev => ({ ...prev, open: false }));
  };

  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
    showAlert('success', `${product.name || 'Item'} added to cart!`);
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    showAlert('warning', 'Item removed from cart!');
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === productId
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      updateQuantity,
      clearCart,
      cartCount,
      alert,
      showAlert,
      hideAlert
    }}>
      {children}
    </CartContext.Provider>
  );
};
