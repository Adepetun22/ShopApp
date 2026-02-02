# Category.jsx Grid Fix Plan

## Issue
The products are organized in 3 separate grid sections, causing empty cells in tablet view. Each row grid doesn't flow naturally into the next, creating layout issues.

## Solution
Combine all products into a single grid container instead of 3 separate grid sections.

## Plan
1. **Read Category.jsx** - Understand current structure (DONE)
2. **Consolidate the 3 separate grid rows into 1 single grid**:
   - Remove the 3 individual `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ...">` wrappers
   - Create one parent grid container that wraps ALL 9 products
   - This will ensure proper responsive behavior:
     - Mobile: 1 column
     - Tablet: 2 columns  
     - Desktop: 3 columns

## Changes to make:
1. Remove the wrapper `<div className="flex flex-col gap-[34px]...">` that contains the 3 separate grids
2. Replace with a single grid container:
   ```jsx
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center md:justify-items-start self-stretch">
     {/* All 9 products here */}
   </div>
   ```
3. Keep all product cards in their current structure, just move them into the single grid

## Expected Result
- Products will flow naturally across the grid
- Tablet view will show exactly 2 cards per row with proper alignment
- No empty cells at the end of rows

