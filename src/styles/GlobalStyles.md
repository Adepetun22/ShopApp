# Global Responsive Styling Guide

This document outlines the global responsive styling used throughout the ShopApp, including font types, sizes, spacing, and padding. All styles are implemented with Tailwind CSS classes and are responsive by default.

## Font Families

The application uses the following font families:
- **Primary Headings**: `Arial Black` (approximated with Tailwind's default bold font)
- **Body Text & Secondary Headings**: `Satoshi` (approximated with Tailwind's default sans-serif font)

## Font Types and Sizes

### Headings

1. **Main Page Headings**
   - Class: `text-5xl font-bold`
   - Size: 3rem (48px) on medium screens and above
   - Usage: "BROWSE BY DRESS STYLE" section title

2. **Section Headings**
   - Class: `text-2xl font-bold`
   - Size: 1.5rem (24px)
   - Usage: "NEW ARRIVALS" and "TOP SELLING" section titles

3. **Brand/Logo Text**
   - Class: `text-3xl font-extrabold`
   - Size: 1.875rem (30px)
   - Usage: Main site logo "SHOP.CO" in navigation

4. **Product Titles**
   - Class: `text-[1.25rem] font-bold`
   - Size: 1.25rem (20px)
   - Usage: ProductCard component titles

5. **Customer Names**
   - Class: `text-[1.25rem] font-bold leading-[1.375rem]`
   - Size: 1.25rem (20px) with line height 1.375rem (22px)
   - Usage: Customer names in testimonials

6. **Footer Headings**
   - Class: `text-xl font-bold`
   - Size: 1.25rem (20px)
   - Usage: Footer section headings ("SHOP.CO", "Company", "Help", "FAQ")

7. **Notification Bar Text**
   - Class: `text-sm`
   - Size: 0.875rem (14px)
   - Usage: Top notification bar text

### Body Text

1. **Hero Section Description**
   - Class: `text-gray-600`
   - Size: 1rem (16px) with default line height
   - Usage: Descriptive text in hero section

2. **Product Rating Text**
   - Class: `text-[0.875rem]`
   - Size: 0.875rem (14px)
   - Usage: Rating values in ProductCard component

3. **Customer Testimonial Text**
   - Class: `text-[1rem] leading-[1.375rem]`
   - Size: 1rem (16px) with line height 1.375rem (22px)
   - Usage: Customer testimonial text

4. **Brand Description**
   - Class: `text-gray-600`
   - Size: 1rem (16px)
   - Usage: Brand description in footer

5. **Placeholder Text**
   - Class: `text-black text-opacity-40`
   - Size: 1rem (16px)
   - Usage: "Enter your email address" placeholder

6. **Newsletter Button Text**
   - Class: `text-[1rem] font-medium`
   - Size: 1rem (16px) with medium font weight
   - Usage: "Subscribe to Newsletter" button text

7. **Statistics Text**
   - Class: `text-gray-600`
   - Size: 1rem (16px)
   - Usage: Supporting text for statistics ("International Brands", etc.)

### Special Text Elements

1. **Price Text**
   - Class: `text-[1.5rem] font-bold`
   - Size: 1.5rem (24px) with bold font weight
   - Usage: Current product prices

2. **Original Price Text**
   - Class: `text-[1.5rem] font-bold line-through text-opacity-40`
   - Size: 1.5rem (24px) with line-through and 40% opacity
   - Usage: Original product prices (strikethrough)

3. **Discount Badge Text**
   - Class: `text-[0.75rem] font-medium`
   - Size: 0.75rem (12px) with medium font weight
   - Usage: Discount percentage in badges

4. **Copyright Text**
   - Class: `text-gray-600`
   - Size: 1rem (16px)
   - Usage: Copyright information in footer

## Spacing and Padding

### Section Spacing

1. **Between Major Sections**
   - Class: `mb-16`
   - Size: 4rem (64px)
   - Usage: Margin between main content sections

2. **Within Sections**
   - Class: `mb-8`
   - Size: 2rem (32px)
   - Usage: Margin between section title and content

3. **Between Products**
   - Class: `gap-6`
   - Size: 1.5rem (24px)
   - Usage: Gap between product cards in grid

4. **Between Elements in Product Cards**
   - Class: `gap-4` (outer), `gap-2` (inner)
   - Size: 1rem (16px) and 0.5rem (8px)
   - Usage: Spacing within ProductCard components

5. **Between Customer Testimonials**
   - Class: `gap-5`
   - Size: 1.25rem (20px)
   - Usage: Gap between customer testimonial cards

### Padding

1. **Page Container Padding**
   - Class: `px-4`
   - Size: 1rem (16px)
   - Usage: Horizontal padding on page containers

2. **Section Container Padding**
   - Class: `py-12` (hero), `py-16` (browse by style), `py-8` (brand logos)
   - Size: 3rem (48px), 4rem (64px), 2rem (32px)
   - Usage: Vertical padding within major sections

3. **Card Padding**
   - Class: `p-7` (testimonials), `py-3 px-4` (newsletter input/button)
   - Size: 1.75rem (28px), 0.75rem (12px) vertical / 1rem (16px) horizontal
   - Usage: Internal padding for cards

4. **Navigation Padding**
   - Class: `py-6 px-4`
   - Size: 1.5rem (24px) vertical / 1rem (16px) horizontal
   - Usage: Main navigation bar padding

5. **Notification Bar Padding**
   - Class: `py-2 px-4`
   - Size: 0.5rem (8px) vertical / 1rem (16px) horizontal
   - Usage: Top notification bar padding

## Responsive Behavior

All font sizes, spacing, and padding are responsive by default:

1. **Mobile First Approach**
   - All styles are designed for mobile devices first
   - Larger screens get enhanced styles using responsive prefixes

2. **Responsive Font Adjustments**
   - Hero title: `text-4xl` on mobile, `text-5xl` on medium screens
   - Grid layouts adjust from 1 column (mobile) to 2 columns (small) to 4 columns (large)

3. **Flexible Containers**
   - Widths use responsive classes like `w-full`, `sm:w-[18.4375rem]`
   - Grid layouts use `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`

4. **Adaptive Spacing**
   - Margins and padding use responsive spacing scale
   - Element wrapping is enabled with `flex-wrap` where appropriate

## Color Palette for Text

1. **Primary Text**
   - Class: `text-black`
   - Usage: Headings, main text

2. **Secondary Text**
   - Class: `text-gray-600`
   - Usage: Descriptions, supporting text

3. **Placeholder/Disabled Text**
   - Class: `text-black text-opacity-40`
   - Usage: Input placeholders

4. **Testimonial Text**
   - Class: `text-black text-opacity-60`
   - Usage: Customer testimonials

5. **Accent Text**
   - Class: `text-white`
   - Usage: Text on dark backgrounds (newsletter section)

This styling guide ensures consistency across all components and maintains responsive behavior for all screen sizes.