# Ergon UI Redesign - Quick Reference

## ✅ Implementation Checklist

### Core Files Modified
- [x] `app/globals.css` - Design system foundation
- [x] `app/page.tsx` - Homepage hero
- [x] `components/Dashboard.tsx` - Dashboard layout + stats
- [x] `components/ProjectCard.tsx` - Complete card redesign
- [ ] `app/projects/[projectId]/page.tsx` - Project detail page
- [ ] `app/generate/[projectId]/page.tsx` - PRD generation wizard
- [ ] `components/ui/*` - UI component library updates

### Next Steps
1. **Test the Dashboard** - Run `npm run dev` and visit localhost:3000
2. **Create a Test Project** - Verify the create dialog design
3. **View Project Cards** - Check hover effects and animations
4. **Apply to Other Pages** - Use the design patterns for project detail and wizard

---

## Quick Copy-Paste Patterns

### Editorial Display Headers
```tsx
<h1 className="display-xl mb-4 bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
  Your Title Here
</h1>
```

### Section Header with Description
```tsx
<div className="mb-12">
  <h2 className="display-md mb-3">Section Title</h2>
  <p className="text-lg text-muted-foreground leading-relaxed">
    Description text goes here
  </p>
</div>
```

### Stats Card (Glassmorphic)
```tsx
<div className="flex items-center gap-6 px-6 py-4 bg-white/50 backdrop-blur-sm rounded-xl border border-border/50">
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
      <Icon className="h-5 w-5 text-primary" />
    </div>
    <div>
      <div className="text-2xl font-bold text-foreground">42</div>
      <div className="text-sm text-muted-foreground">Label</div>
    </div>
  </div>
</div>
```

### Card with Editorial Shadow
```tsx
<div className="bg-white rounded-2xl border-2 border-border shadow-editorial shadow-editorial-hover transition-all duration-300 hover:border-primary/20 p-6">
  {/* Content */}
</div>
```

### Gradient Accent Stripe
```tsx
<div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-80" />
```

### Staggered Animation Grid
```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
  {items.map((item, index) => (
    <div
      key={item.id}
      className="animate-slide-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Card content */}
    </div>
  ))}
</div>
```

### Premium Button
```tsx
<Button className="shadow-editorial hover:shadow-editorial-lg transition-all duration-300 bg-primary hover:bg-primary/90 px-6 py-6 text-base font-medium">
  <Icon className="mr-2 h-5 w-5" />
  Button Text
</Button>
```

### Decorative Background Orbs
```tsx
<div className="fixed top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl -z-10" />
<div className="fixed bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-3xl -z-10" />
```

### Empty State
```tsx
<div className="flex items-center justify-center min-h-[500px] animate-scale-in">
  <div className="text-center max-w-md">
    <div className="mb-8 relative">
      <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
        <Icon className="h-16 w-16 text-primary/40" />
      </div>
    </div>
    <h3 className="display-md mb-3">Empty State Title</h3>
    <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
      Description text
    </p>
    <Button>Call to Action</Button>
  </div>
</div>
```

---

## Color Usage Guide

### When to Use Each Color

**Primary (Indigo #3730a3)**
- Main action buttons
- Active states
- Links and hover effects
- Icon accents for core features
- Focus rings

**Secondary (Amber #f59e0b)**
- Secondary information (like source counts)
- Warning states
- Energy/action indicators
- Accent icons
- Gradient highlights

**Accent (Gold #fbbf24)**
- Completion states
- Success highlights
- Decorative elements
- Gradient endpoints

**Muted (#e7e5e1)**
- Background variations
- Subtle containers
- Disabled states
- Divider backgrounds

---

## Typography Usage

### Display Fonts (Fraunces)
```tsx
// Page titles
<h1 className="display-xl">Ergon</h1>

// Section headers
<h2 className="display-lg">Projects</h2>

// Card titles, subsection headers
<h3 className="display-md">Project Name</h3>

// Manual override
<div className="font-display text-2xl font-semibold">
  Custom Text
</div>
```

### Body Font (Inter)
Used automatically for all other text. Manual override:
```tsx
<div className="font-body">Body text</div>
```

### Font Weights
- **300** - Light (rarely used)
- **400** - Regular (body text)
- **500** - Medium (labels)
- **600** - Semibold (emphasis, buttons)
- **700** - Bold (stats, important numbers)

---

## Animation Delays Reference

### Staggered Reveals
```tsx
// First item
className="animate-slide-in-up" // No delay

// Second item
className="animate-slide-in-up delay-100"

// Third item
className="animate-slide-in-up delay-200"

// Fourth item
className="animate-slide-in-up delay-300"

// Or dynamic in map:
style={{ animationDelay: `${index * 100}ms` }}
```

### Available Animations
- `animate-slide-in-up` - Slides from bottom, fades in
- `animate-slide-in-right` - Slides from left, fades in
- `animate-scale-in` - Scales from 95% to 100%, fades in

---

## Shadow Hierarchy

### When to Use Each Shadow

**shadow-editorial** (Light)
- Default card elevation
- Resting state for buttons
- Subtle depth for containers

**shadow-editorial-lg** (Deep)
- Modal dialogs
- Dropdown menus
- Overlays and popovers
- Important elevated elements

**shadow-editorial-hover** (Transition)
- Add to cards for hover elevation
- Combines with hover:shadow-editorial-lg
- Smooth 300ms transition

```tsx
// Pattern for hoverable cards
<div className="shadow-editorial shadow-editorial-hover">
  {/* Will smoothly elevate on hover */}
</div>
```

---

## Responsive Breakpoints

### Grid Layouts
```tsx
// Mobile-first approach
<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
  {/* 1 col on mobile, 2 on large, 3 on xl */}
</div>
```

### Common Breakpoints
- **sm:** 640px - Tablets portrait
- **md:** 768px - Tablets landscape
- **lg:** 1024px - Laptops
- **xl:** 1280px - Desktops
- **2xl:** 1536px - Large screens

### Responsive Padding
```tsx
<div className="px-6 py-12 lg:px-8 lg:py-16">
  {/* Larger padding on bigger screens */}
</div>
```

---

## Common Design Patterns

### Icon + Text Stats
```tsx
<div className="flex items-center gap-3">
  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
    <Icon className="h-5 w-5 text-primary" />
  </div>
  <div>
    <div className="text-2xl font-bold">42</div>
    <div className="text-sm text-muted-foreground">Label</div>
  </div>
</div>
```

### Visual Dividers
```tsx
// Horizontal line with dot
<div className="flex items-center gap-4">
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
</div>

// Vertical divider
<div className="h-10 w-px bg-border" />
```

### Hover Gradient Overlays
```tsx
<div className={`transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full" />
  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/5 to-transparent rounded-tr-full" />
</div>
```

### Badge/Pill Components
```tsx
<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
  <span className="text-sm font-medium text-primary">Label</span>
</div>
```

---

## Accessibility Quick Checks

### ✅ Every Interactive Element Should Have:
- [ ] Visible focus state (ring-2 ring-primary)
- [ ] Keyboard accessibility (Tab navigation)
- [ ] ARIA labels for icon-only buttons
- [ ] Sufficient color contrast (4.5:1 minimum)
- [ ] Loading/disabled states clearly shown

### Screen Reader Text Pattern
```tsx
<button>
  <Icon className="h-5 w-5" />
  <span className="sr-only">Descriptive text for screen readers</span>
</button>
```

### Focus Styles
```tsx
<button className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
  Button
</button>
```

---

## Common Gotchas & Tips

### ⚠️ Don't Forget:
1. **Z-index Layers** - Background orbs need `-z-10`, modals need `z-50`
2. **Animation Delays** - Use inline styles for dynamic delays in maps
3. **Gradient Text** - Needs both `bg-clip-text` and `text-transparent`
4. **Backdrop Blur** - Only works with semi-transparent backgrounds
5. **Font Loading** - Fonts load async, may see FOUT (flash of unstyled text)

### 💡 Pro Tips:
1. **Hover States** - Always pair `shadow-editorial` with `shadow-editorial-hover`
2. **Color Opacity** - Use `/10` `/20` notation for transparent colors
3. **Spacing Consistency** - Stick to 4px multiples (0.25rem increments)
4. **Typography Scale** - Don't manually set font sizes, use display classes
5. **Animation Performance** - Only animate transform and opacity for best performance

---

## Testing Checklist

### Visual Testing
- [ ] Test on mobile (375px)
- [ ] Test on tablet (768px)
- [ ] Test on desktop (1440px+)
- [ ] Check all hover states
- [ ] Verify animations play smoothly
- [ ] Check empty states
- [ ] Test create dialog

### Interaction Testing
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Buttons clickable/tappable
- [ ] Forms submit correctly
- [ ] Dropdown menus work
- [ ] Links navigate correctly

### Accessibility Testing
- [ ] Tab through all interactive elements
- [ ] Test with screen reader
- [ ] Check color contrast
- [ ] Verify ARIA labels
- [ ] Test with reduced motion
- [ ] Check focus order

---

## Migration Pattern for Other Pages

When applying this design to other pages:

1. **Add background orbs** (copy from homepage)
2. **Use display typography** for page titles
3. **Apply editorial shadows** to cards
4. **Add staggered animations** to lists
5. **Use warm colors** (primary/secondary/accent)
6. **Include stats/metadata** with icons
7. **Premium button styling** for main actions
8. **Add hover effects** to interactive elements

---

## Need Help?

Refer to full documentation: `claudedocs/ui-redesign-2024.md`

For specific components, check:
- Design tokens: `app/globals.css`
- Button styles: `components/ui/button.tsx`
- Card examples: `components/ProjectCard.tsx`
- Layout patterns: `components/Dashboard.tsx`
