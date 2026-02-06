import React from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const CustomAlert = ({ 
  open, 
  onClose, 
  severity = 'success', 
  message, 
  autoHideDuration = 3000 
}) => {
  return (
    <Snackbar 
      open={open} 
      autoHideDuration={autoHideDuration} 
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert 
        onClose={onClose} 
        severity={severity} 
        variant="filled"
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export const SuccessAlert = ({ open, onClose, message }) => (
  <CustomAlert open={open} onClose={onClose} severity="success" message={message} />
);

export const CartAddedAlert = ({ open, onClose, message }) => (
  <CustomAlert open={open} onClose={onClose} severity="success" message={message || 'Item added to cart!'} />
);

export const CartRemovedAlert = ({ open, onClose, message }) => (
  <CustomAlert open={open} onClose={onClose} severity="warning" message={message || 'Item removed from cart!'} />
);

export const ErrorAlert = ({ open, onClose, message }) => (
  <CustomAlert open={open} onClose={onClose} severity="error" message={message} />
);

export default CustomAlert;

