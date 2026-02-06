import React from 'react';
import { useCart } from '../../CartContext';
import CustomAlert from './CustomAlert';

const AlertWrapper = () => {
  const { alert, hideAlert } = useCart();
  
  return (
    <CustomAlert
      open={alert.open}
      onClose={hideAlert}
      severity={alert.severity}
      message={alert.message}
    />
  );
};

export default AlertWrapper;

