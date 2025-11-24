# Global Responsive Styling Guide

This guide explains how to use the global responsive styling system implemented with Tailwind CSS in the ShopApp project.

## File Structure

```
src/
├── styles/
│   ├── global.css     # Global CSS customizations
│   └── README.md      # This documentation
├── index.css          # Main CSS file with Tailwind imports
└── tailwind.config.js # Tailwind configuration
```

## Typography System

### Font Families
The application uses the Inter font family as the primary typeface, with system fonts as fallbacks:

```css
font-family: 'Inter', system-ui, -apple-system, sans-serif;
```

### Font Sizes
All font sizes are responsive and defined in the Tailwind configuration:

| Class Name | Font Size | Line Height | Usage |
|------------|-----------|-------------|-------|
| text-xs | 0.75rem (12px) | 1rem (16px) | Captions, fine print |
| text-sm | 0.875rem (14px) | 1.25rem (20px) | Secondary text |
| text-base | 1rem (16px) | 1.5rem (24px) | Body text |
| text-lg | 1.125rem (18px) | 1.75rem (28px) | Lead paragraphs |
| text-xl | 1.25rem (20px) | 1.75rem (28px) | Subheadings |
| text-2xl | 1.5rem (24px) | 2rem (32px) | Section headings |
| text-3xl | 1.875rem (30px) | 2.25rem (36px) | Main headings |
| text-4xl | 2.25rem (36px) | 2.5rem (40px) | Page titles |
| text-5xl | 3rem (48px) | 1 | Hero titles |

### Responsive Font Scaling
Font sizes automatically scale on different screen sizes:
- Base font size: 16px on mobile
- 17px on small screens (640px+)
- 18px on large screens (1024px+)

### Font Weights
Available font weights:
- font-thin (100)
- font-extralight (200)
- font-light (300)
- font-normal (400)
- font-medium (500)
- font-semibold (600)
- font-bold (700)
- font-extrabold (800)
- font-black (900)

## Spacing System

### Padding and Margin Scale
All spacing uses a consistent scale based on 4px increments:

| Class | Size | Rem | Pixels |
|-------|------|-----|--------|
| 0 | 0 | 0rem | 0px |
| 0.5 | 0.125 | 2px |
| 1 | 0.25 | 4px |
| 1.5 | 0.375 | 6px |
| 2 | 0.5 | 8px |
| 2.5 | 0.625 | 10px |
| 3 | 0.75 | 12px |
| 3.5 | 0.875 | 14px |
| 4 | 1 | 16px |
| 5 | 1.25 | 20px |
| 6 | 1.5 | 24px |
| 8 | 2 | 32px |
| 10 | 2.5 | 40px |
| 12 | 3 | 48px |
| 16 | 4 | 64px |
| 20 | 5 | 80px |
| 24 | 6 | 96px |

### Responsive Spacing
Use responsive prefixes to apply different spacing on different screen sizes:
- `p-4` - 16px padding on all sides
- `sm:p-6` - 24px padding on small screens and above
- `lg:px-8` - 32px horizontal padding on large screens and above

## Breakpoints

The application uses the following responsive breakpoints:

| Breakpoint | Class Prefix | Dimensions |
|------------|--------------|------------|
| Extra Small | xs: | 475px |
| Small | sm: | 640px |
| Medium | md: | 768px |
| Large | lg: | 1024px |
| Extra Large | xl: | 1280px |
| 2X Large | 2xl: | 1536px |

## Predefined Components

### Text Classes
Use these predefined text classes for consistent typography:

```jsx
<h1 className="text-display-1">Display 1</h1>
<h2 className="text-display-2">Display 2</h2>
<h3 className="text-display-3">Display 3</h3>
<h4 className="text-display-4">Display 4</h4>

<h1 className="text-heading-1">Heading 1</h1>
<h2 className="text-heading-2">Heading 2</h2>
<h3 className="text-heading-3">Heading 3</h3>

<p className="text-body-large">Large body text</p>
<p className="text-body">Regular body text</p>
<p className="text-body-small">Small body text</p>
<p className="text-caption">Caption text</p>
```

### Layout Classes
Use these predefined layout classes for consistent spacing:

```jsx
// Container with responsive padding
<div className="container-padding">...</div>

// Section with responsive vertical padding
<div className="section-padding">...</div>

// Card with responsive padding
<div className="card-padding">...</div>

// Responsive gaps
<div className="gap-section">...</div>
<div className="gap-component">...</div>
<div className="gap-card">...</div>
```

### Utility Classes
Additional utility classes for common styling needs:

```jsx
// Responsive shadows
<div className="shadow-responsive">...</div>
<div className="shadow-hover">...</div>

// Responsive borders
<div className="border-responsive">...</div>

// Responsive padding/margin
<div className="p-responsive">...</div>
<div className="py-responsive">...</div>
<div className="px-responsive">...</div>
```

## Best Practices

1. **Use semantic class names**: Prefer `text-heading-1` over `text-3xl font-bold` when the meaning is clear.

2. **Combine classes for responsiveness**: 
   ```jsx
   <h1 className="text-3xl sm:text-4xl lg:text-5xl">Responsive Heading</h1>
   ```

3. **Use the spacing scale**: Stick to the predefined spacing values rather than arbitrary pixel values.

4. **Leverage the component layer**: Use predefined component classes like `btn`, `card`, and `input` for consistency.

5. **Maintain vertical rhythm**: Use consistent spacing between elements to create visual harmony.

6. **Test on all screen sizes**: Always check how your layouts look on mobile, tablet, and desktop.

This system ensures consistent, responsive styling throughout the application while maintaining flexibility for custom designs when needed.