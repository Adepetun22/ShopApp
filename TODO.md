# TODO: Product Card Integration Plan

## Information Gathered:

1. **HomePage.jsx** - Contains hardcoded product cards with minimal fields (id, image, title, rating, price, originalPrice, discount)
2. **Category.jsx** - Contains hardcoded product data with additional fields (colors, sizes, category, style)
3. **ProductDetails.jsx** - Fetches product from API endpoint `/api/products/:id`, expects full product data structure
4. **ProductCard.jsx** - Reusable component with click handler that encodes ID and navigates to ProductDetails

## Problem:
- Product cards on Home/Category pages don't pass complete product data
- ProductDetails expects full API response but hardcoded products don't exist in backend
- Need to pass product details through navigation so they display correctly on ProductDetails page

## Plan:

### Step 1: Create shared product data structure
- Define complete product data in both HomePage and Category with all needed fields
- Fields needed: id, name, price, originalPrice, discount, rating, description, images, colors, sizes, category, features

### Step 2: Modify ProductCard component
- Update ProductCard to accept full `product` prop
- Update click handler to pass product data via state to ProductDetails page
- Keep backward compatibility with individual props

### Step 3: Update HomePage.jsx
- Add complete product data for all displayed products
- Update ProductCard usage to pass full product object

### Step 4: Update Category.jsx
- Enhance existing product data with all required fields
- Update ProductCard usage to pass full product object

### Step 5: Update ProductDetails.jsx
- Check for passed state data first
- Fall back to API fetch if no state data available
- Handle both scenarios gracefully

## Files to Edit:
1. `src/Components/ProductCard.jsx` - Add product prop support with state navigation
2. `src/Pages/HomePage.jsx` - Add complete product data and update ProductCard usage
3. `src/Pages/Category.jsx` - Enhance product data and update ProductCard usage
4. `src/Pages/ProductDetails.jsx` - Add state data support as primary data source

## Progress:
- [x] Step 1: Modify ProductCard.jsx - Add product prop support with state navigation
- [x] Step 2: Update HomePage.jsx - Add complete product data and update ProductCard usage
- [x] Step 3: Update Category.jsx - Enhance product data and update ProductCard usage
- [x] Step 4: Update ProductDetails.jsx - Add state data support as primary data source
- [x] Testing: Verify all navigation and display functionality

## Implementation Complete! ✅

All product cards on Home and Category pages now pass full product details to the ProductDetails page when clicked.

### Changes Made:

1. **ProductCard.jsx**: Added `product` prop support that passes full product data via React Router state when navigating to ProductDetails

2. **HomePage.jsx**: 
   - Added complete product data for 8 products (4 New Arrivals + 4 Top Selling)
   - Each product now includes: id, name, price, originalPrice, discount, rating (with average and count), description, images array, colors array (with hex values), sizes array (with stock), category, style, and features array

3. **Category.jsx**: 
   - Enhanced 9 products with complete details including description, features, color hex values, and size stock information
   - Updated ProductCard usage to pass full product object

4. **ProductDetails.jsx**: 
   - Added `useLocation` hook to check for passed state data
   - Now uses passed product data as primary source (no API call needed for hardcoded products)
   - Falls back to API fetch if no state data is available
   - Fixed handleAddToCart to work with both state data (_id/id) and API data formats

### How It Works:
- When a user clicks a product card, the full product object is passed via React Router's `state` prop
- ProductDetails checks for this state data first before attempting to fetch from API
- All product details (colors, sizes, description, features) display correctly on the details page
- Backward compatibility maintained for API-fetched products

