# Alert System Documentation

This Alert system is built using Material UI and integrates with the CartContext for displaying notifications throughout the application.

## Available Alert Types

1. **Success Alert** - For successful operations
2. **Cart Added Alert** - When item is added to cart (green)
3. **Cart Removed Alert** - When item is removed from cart (yellow/warning)
4. **Error Alert** - For error conditions (red)

## Usage in Components

### Using the Alert Context

Import and use the alert functions from `useCart`:

```jsx
import { useCart } from '../CartContext';

const MyComponent = () => {
  const { showAlert, hideAlert, alert } = useCart();

  const handleSuccess = () => {
    showAlert('success', 'Operation completed successfully!');
  };

  const handleError = () => {
    showAlert('error', 'Something went wrong!');
  };

  return (
    <div>
      <button onClick={handleSuccess}>Show Success</button>
      <button onClick={handleError}>Show Error</button>
    </div>
  );
};
```

### Using Predefined Alert Components

You can also import and use specific alert components:

```jsx
import { SuccessAlert, ErrorAlert, CartAddedAlert, CartRemovedAlert } from './Components/Alert/CustomAlert';

const MyComponent = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showCartAdded, setShowCartAdded] = useState(false);

  return (
    <div>
      <SuccessAlert 
        open={showSuccess} 
        onClose={() => setShowSuccess(false)} 
        message="Profile updated successfully!" 
      />
      
      <CartAddedAlert 
        open={showCartAdded} 
        onClose={() => setShowCartAdded(false)} 
      />
    </div>
  );
};
```

## Cart Operations

The `addToCart` and `removeFromCart` functions in `CartContext` automatically trigger alerts:

- `addToCart()` - Shows green "Item added to cart!" alert
- `removeFromCart()` - Shows yellow "Item removed from cart!" alert

## Alert Properties

### showAlert Function
- `severity`: 'success' | 'error' | 'warning' | 'info'
- `message`: string (alert message to display)

### Alert State (from useCart)
- `alert.open`: boolean - controls alert visibility
- `alert.severity`: string - current alert severity
- `alert.message`: string - current alert message

## Example: Product Card Integration

```jsx
import { useCart } from '../CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};
```

This will automatically show the "Item added to cart!" alert.

