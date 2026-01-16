# Floating Action Buttons - IndusJS Website

## Overview
Three floating action buttons have been added to enhance user experience and engagement across the website.

## Components Created

### 1. **Go To Top Button** (`/src/app/components/GoToTopButton.tsx`)
- **Position:** Bottom-left corner (left: 8, bottom: 8)
- **Visibility:** Appears only when user scrolls down more than 300px
- **Color:** Ruby Red to Crimson Red gradient (#8B0000 to #DC143C)
- **Features:**
  - Smooth scroll-to-top animation
  - Fade in/out based on scroll position
  - Ripple effect animation
  - Hover scale effect
  - Glow effect on hover

### 2. **WhatsApp Button** (`/src/app/components/WhatsAppButton.tsx`)
- **Position:** Bottom-left corner, above Go To Top button (left: 8, bottom: 24)
- **Color:** WhatsApp Green (#25D366)
- **Features:**
  - Opens WhatsApp chat in new tab
  - Pre-filled message for quick communication
  - Expands to show "WhatsApp" text on hover
  - Ripple and glow effects
  - Custom WhatsApp icon SVG

**To Configure:** 
Edit line 7 in `WhatsAppButton.tsx`:
```typescript
const whatsappNumber = '1234567890'; // Replace with your WhatsApp number
// Format: country code + number (no + or spaces)
// Example: '919876543210' for India, '15551234567' for USA
```

### 3. **Contact Us Button** (`/src/app/components/FloatingContactButton.tsx`)
- **Position:** Bottom-right corner (right: 8, bottom: 8)
- **Color:** Ruby Red to Crimson Red gradient (#8B0000 to #DC143C)
- **Features:**
  - Links to /contact page
  - Expands to show "Contact Us" text on hover
  - Chat bubble icon
  - Ripple and glow effects
  - Delayed entrance animation (1s delay)

## Design Features

### Animation Effects:
1. **Entry Animation:** Spring animation with stagger delays
2. **Ripple Effect:** Continuous pulse animation on hover
3. **Hover Scale:** 1.1x scale on hover
4. **Tap Scale:** 0.95x scale on tap/click
5. **Glow Effect:** Blur and opacity transitions

### Responsive Design:
- All buttons are fixed position with z-index 50
- Visible on all screen sizes
- Touch-friendly sizing (minimum 48x48px)
- Clear visual hierarchy with spacing

### Brand Consistency:
- Uses IndusJS brand colors (Ruby Red #8B0000, Crimson Red #DC143C)
- Maintains Inter font family
- Consistent shadow and blur effects
- Professional and modern appearance

## Layout Positioning

```
Screen Layout:
┌─────────────────────────────────┐
│         Header/Nav              │
├─────────────────────────────────┤
│                                 │
│         Main Content            │
│                                 │
│                                 │
│  [WhatsApp]                     │
│  (Left)                         │
│                                 │
│  [Go Top]              [Contact]│
│  (Left)                (Right)  │
└─────────────────────────────────┘
```

## Usage

All three buttons are automatically included in the app via `App.tsx`:
```typescript
<GoToTopButton />
<WhatsAppButton />
<FloatingContactButton />
```

## Customization

### Colors:
- Ruby Red: `#8B0000` or `from-[#8B0000]`
- Crimson Red: `#DC143C` or `to-[#DC143C]`
- WhatsApp Green: `#25D366`

### Position:
Adjust Tailwind classes:
- `bottom-8` = 2rem from bottom
- `left-8` / `right-8` = 2rem from sides
- `bottom-24` = 6rem from bottom (for stacking)

### Animation Timing:
- Entry delay: `delay` prop in `motion.div`
- Hover duration: `duration` in transition
- Ripple speed: `duration: 1.5` in animate prop

## Browser Support
- ✅ Modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ Smooth scrolling support
- ✅ WhatsApp Web/App deep linking

## Accessibility
- Semantic button elements
- Clear hover states
- Keyboard accessible (tab navigation)
- Appropriate z-index for visibility
- Touch-friendly tap targets
