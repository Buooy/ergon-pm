# Visual Layout Guide - Ergon Redesign

This guide shows the visual structure of each redesigned component.

---

## 1. Homepage Layout

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ┌──────────────┐     [Gradient Orb - Top Right]               │
│  │ ● AI-Powered  │                                              │
│  │ Product Mgmt  │                                              │
│  └──────────────┘                                               │
│                                                                 │
│  ERGON                                                          │
│  ↑ Display XL, Gradient Text, Fraunces Font                    │
│                                                                 │
│  Transform scattered context into professional PRDs.           │
│  Manage projects, synthesize information, and generate...      │
│  ↑ Large body text, muted color                                │
│                                                                 │
│  ─────────  ●  ─────────                                       │
│  ↑ Decorative divider                                          │
│                                                                 │
│  ┌───────────────────────────────────────────────────────┐     │
│  │ YOUR PROJECTS                    [+ New Project]      │     │
│  │ Organize context, manage sources...                   │     │
│  └───────────────────────────────────────────────────────┘     │
│                                                                 │
│  ┌─────────────────────────────────────────────────────┐       │
│  │ [📁 Icon] 3 Active Projects  │  [📄 Icon] 8 Sources │       │
│  │           Stats Bar (Glassmorphic)                  │       │
│  └─────────────────────────────────────────────────────┘       │
│                                                                 │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐                  │
│  │  Project  │  │  Project  │  │  Project  │                  │
│  │   Card    │  │   Card    │  │   Card    │                  │
│  │    #1     │  │    #2     │  │    #3     │                  │
│  └───────────┘  └───────────┘  └───────────┘                  │
│                                                                 │
│                           [Gradient Orb - Bottom Left]         │
└─────────────────────────────────────────────────────────────────┘
```

**Key Visual Elements:**
- Warm cream background (#faf9f7)
- Two large gradient orbs (fixed, blurred)
- Editorial typography with Fraunces for headings
- Staggered animations on page load

---

## 2. Project Card Structure

```
┌─────────────────────────────────────────────────┐
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ ← Gradient stripe
├─────────────────────────────────────────────────┤
│                                        ⋮        │
│  My Awesome Product                             │
│  ↑ Display MD, Fraunces, Bold                   │
│                                                 │
│  This is a description of the product that     │
│  helps users understand what it does...        │
│  ↑ Body text, muted, truncated at 120 chars    │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  [📚 Icon]  3          │  📅 2 days ago         │
│             Sources    │                        │
│  ↑ Visual divider      │                        │
│                                                 │
├─────────────────────────────────────────────────┤
│ [📁 Open Button]  [📄 Generate Button]         │
│ ↑ Outline style    ↑ Primary style, shadow     │
└─────────────────────────────────────────────────┘
   ↑ Rounded corners (2xl), shadow-editorial
```

**Visual Details:**
- **Top Stripe:** 6px gradient (primary → secondary → accent)
- **Card Background:** Pure white (#ffffff)
- **Border:** 2px, warm gray (#d4d1cc)
- **Shadow:** Editorial shadow, elevates on hover
- **Border Radius:** 1.5rem (24px)
- **Padding:** 1.5rem (24px)

**Hover State:**
```
┌─────────────────────────────────────────────────┐
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
├─────────────────────────────────────────────────┤
│            ╱╲ Gradient                 ⋮        │
│           ╱  ╲ Overlay                          │
│  My Awesome Product →                           │
│  ↑ Shows external link icon                     │
│                                                 │
│  Description text...                 ╱╲         │
│                                     ╱  ╲        │
│                          Gradient  ╱    ╲       │
│                          Overlay  ╱      ╲      │
│                                  ▔▔▔▔▔▔▔▔       │
├─────────────────────────────────────────────────┤
│  Stats section (same)                           │
└─────────────────────────────────────────────────┘
   ↑ Shadow elevates dramatically
   ↑ Border shifts to primary color
```

---

## 3. Stats Bar (New Component)

```
┌───────────────────────────────────────────────────────────┐
│                                                           │
│  ┌────┐  3            │  ┌────┐  8                       │
│  │ 📁 │  Active       │  │ 📄 │  Context                 │
│  └────┘  Projects     │  └────┘  Sources                 │
│  ↑ Icon box           │  ↑ Different color               │
│    Primary/10 bg      │    Secondary/10 bg               │
│                       │                                   │
└───────────────────────────────────────────────────────────┘
  ↑ Glassmorphic: white/50, backdrop-blur
```

**Visual Properties:**
- Background: `bg-white/50 backdrop-blur-sm`
- Border: `border border-border/50`
- Border Radius: `rounded-xl` (0.75rem)
- Padding: `px-6 py-4`
- Gap: `gap-6` between sections

**Icon Boxes:**
- Size: `w-10 h-10`
- Border Radius: `rounded-lg`
- Background: `bg-primary/10` or `bg-secondary/10`
- Icon Size: `h-5 w-5`

---

## 4. Empty State

```
┌─────────────────────────────────────────────────┐
│                                                 │
│                                                 │
│                   ●                             │
│              ┌─────────┐                        │
│              │         │                        │
│              │   📁    │  ← Gradient background │
│              │         │                        │
│              └─────────┘                        │
│                   ●                             │
│                                                 │
│        START YOUR FIRST PROJECT                │
│        ↑ Display MD, Fraunces                  │
│                                                 │
│    Create a project to organize context        │
│    from multiple sources and generate          │
│    professional product requirement docs.      │
│    ↑ Large body text, centered                 │
│                                                 │
│       ┌───────────────────────────┐            │
│       │ + Create Your First Proj. │            │
│       └───────────────────────────┘            │
│       ↑ Large button, shadow                   │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Visual Elements:**
- Central circle: 8rem diameter, gradient background
- Icon: 4rem size, 40% opacity
- Pulsing dots: Staggered animation (0.2s, 0.4s delays)
- Button: Extra padding (px-8 py-6)

---

## 5. Create Project Dialog

```
        ┌─────────────────────────────────┐
        │  NEW PROJECT              [X]   │
        │  Create a new product project.. │
        │                                 │
        │  Project Name *                 │
        │  ┌───────────────────────────┐  │
        │  │ My Product                │  │ ← Large input
        │  └───────────────────────────┘  │
        │                                 │
        │  Description                    │
        │  ┌───────────────────────────┐  │
        │  │                           │  │
        │  │ What are you building?    │  │ ← Textarea
        │  │                           │  │
        │  └───────────────────────────┘  │
        │                                 │
        │  ───────────────────────────    │ ← Divider
        │                                 │
        │      [Cancel]  [+ Create]       │
        │                 ↑ Shadow        │
        └─────────────────────────────────┘
         ↑ Rounded 2xl, large shadow
```

**Visual Properties:**
- Background: Semi-transparent black overlay with blur
- Dialog: `max-w-[520px]`, `rounded-2xl`
- Padding: `p-8` (larger than default)
- Input borders: `border-2` (thicker for emphasis)
- Footer border: `border-t border-border`
- Close button: Top-right with hover background

---

## 6. Dropdown Menu (Project Card)

```
                  ┌──────────────────┐
                  │ 📁 Open Project  │ ← Hover: bg-muted
                  ├──────────────────┤
                  │ 📄 Generate PRD  │
                  ├──────────────────┤ ← Separator
                  │ 🗑️ Delete Proj.  │ ← Red text
                  └──────────────────┘
                   ↑ Shadow-editorial-lg
```

**Visual Properties:**
- Background: Pure white
- Border: `border border-border`
- Border Radius: `rounded-xl`
- Shadow: `shadow-editorial-lg`
- Padding: `p-1.5`
- Item padding: `px-3 py-2`
- Item border radius: `rounded-lg`

---

## 7. Animation Timeline

### Page Load Sequence
```
Time:  0ms    100ms   200ms   300ms   400ms
       │      │       │       │       │
Hero   ████   │       │       │       │  ← Slide in up
       │      │       │       │       │
Stats  │      ████    │       │       │  ← Slide in right
       │      │       │       │       │
Card1  │      │       ████    │       │  ← Staggered
Card2  │      │       │       ████    │
Card3  │      │       │       │       ████
```

**Animation Properties:**
- Duration: 500ms
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (spring-like)
- Stagger: 100ms between cards
- From: `opacity: 0, translateY: 20px`
- To: `opacity: 1, translateY: 0`

---

## 8. Color Palette Visualization

```
PRIMARY (Indigo)
████████  #3730a3  Used for: Main actions, links, focus states

SECONDARY (Amber)
████████  #f59e0b  Used for: Accents, secondary info, energy

ACCENT (Gold)
████████  #fbbf24  Used for: Highlights, completion, decorative

BACKGROUND (Cream)
████████  #faf9f7  Used for: Page background, warm base

FOREGROUND (Dark Brown)
████████  #1a1614  Used for: Main text, headings

MUTED (Warm Gray)
████████  #e7e5e1  Used for: Backgrounds, disabled states

BORDER (Soft Brown-Gray)
────────  #d4d1cc  Used for: Dividers, card borders
```

---

## 9. Typography Scale Visualization

```
DISPLAY XL (40-64px)
ERGON
↑ Page titles, hero headlines

DISPLAY LG (32-48px)
Your Projects
↑ Section headers

DISPLAY MD (24-32px)
My Awesome Product
↑ Card titles, subsection headers

Body Large (20px)
Descriptive text for sections and important content
↑ Subtitles, important descriptions

Body Regular (16px)
Standard body text used throughout the interface for most content
↑ Default text size

Body Small (14px)
Metadata, labels, and secondary information in the interface
↑ Stats, timestamps, helper text

Caption (12px)
Very small text for fine print and minor details
↑ Tiny labels, legal text
```

---

## 10. Spacing System

```
Tight (4px)
│ Small gaps between related items

Base (8px)
│── Component internal padding

Comfortable (16px)
│──── Section spacing within cards

Spacious (24px)
│────── Card padding, major gaps

Generous (32px)
│────────── Section separation on page

Extra (48px+)
│──────────────── Page margins, major sections
```

---

## 11. Shadow Elevation Levels

```
Level 0: No shadow (flat)
┌─────┐
│     │
└─────┘

Level 1: shadow-editorial (subtle)
┌─────┐
│     │░
└─────┘░

Level 2: shadow-editorial-lg (prominent)
┌─────┐
│     │░░
└─────┘░░

Level 3: hover state (elevated)
┌─────┐
│     │░░░
└─────┘░░░
```

---

## Responsive Breakpoints Visual

```
Mobile (< 640px)
┌──────────┐
│  Card 1  │
├──────────┤
│  Card 2  │
├──────────┤
│  Card 3  │
└──────────┘
↑ 1 column

Tablet (640px - 1024px)
┌──────────┬──────────┐
│  Card 1  │  Card 2  │
├──────────┼──────────┤
│  Card 3  │          │
└──────────┴──────────┘
↑ 2 columns

Desktop (> 1024px)
┌──────────┬──────────┬──────────┐
│  Card 1  │  Card 2  │  Card 3  │
└──────────┴──────────┴──────────┘
↑ 3 columns
```

---

## Final Visual Comparison

### Before (Generic)
```
┌─────────────────────────────────────┐
│ Ergon                               │
│ AI Product Manager                  │
│                                     │
│ Projects                            │
│                                     │
│ ┌─────┐ ┌─────┐ ┌─────┐             │
│ │Card │ │Card │ │Card │             │
│ └─────┘ └─────┘ └─────┘             │
└─────────────────────────────────────┘
```
- Plain text
- No hierarchy
- Flat design
- Generic spacing

### After (Editorial)
```
┌─────────────────────────────────────┐
│  ● AI-Powered PM              ╱╲    │
│                              ╱  ╲   │
│  ERGON                              │
│  ↑ Large serif, gradient            │
│                                     │
│  Transform scattered context...     │
│  ─────  ●  ─────                    │
│                                     │
│  YOUR PROJECTS        [+ New]      │
│                                     │
│  ┌─────────────────────────┐        │
│  │ 📁 3 Projects │ 📄 8 Src │        │
│  └─────────────────────────┘        │
│                                     │
│  ▓▓▓▓▓▓    ▓▓▓▓▓▓    ▓▓▓▓▓▓         │
│  ┌────┐    ┌────┐    ┌────┐         │
│  │Card│    │Card│    │Card│         │
│  └────┘    └────┘    └────┘         │
│       ╲  ╲                          │
│        ╲  ╲  Gradient orbs          │
└─────────────────────────────────────┘
```
- Editorial typography
- Clear hierarchy
- Layered depth
- Distinctive character
- Warm colors
- Purposeful spacing

---

## Implementation Verification

When you run `npm run dev`, you should see:

✅ **Colors:**
- Warm cream background (not stark white)
- Rich indigo buttons
- Amber accents in stats
- Dark brown text (not pure black)

✅ **Typography:**
- Large serif headlines (Fraunces)
- Clean body text (Inter)
- Clear size hierarchy
- Proper line heights

✅ **Layout:**
- Gradient orbs in background
- Stats bar when projects exist
- Staggered card animations
- Proper spacing and padding

✅ **Interactions:**
- Smooth hover elevations
- Button shadow effects
- Dropdown menu works
- Dialog scales in
- Animations play smoothly

✅ **Responsive:**
- 1 column on mobile
- 2 columns on tablet
- 3 columns on desktop
- Proper padding adjustments

---

## Troubleshooting

### Fonts not loading?
- Check Google Fonts import in `globals.css`
- Wait a moment for fonts to download
- Check browser console for errors

### Animations not playing?
- Check for `animate-*` classes in components
- Verify keyframes defined in `globals.css`
- Check browser doesn't have reduced motion

### Colors look different?
- Verify CSS variables in `:root` or `@theme`
- Check for conflicting Tailwind config
- Clear browser cache

### Shadows not showing?
- Check for `shadow-editorial` classes
- Verify shadow definitions in `globals.css`
- Check z-index stacking

---

This visual guide should help you understand the spatial relationships, visual hierarchy, and implementation details of the redesigned interface!
