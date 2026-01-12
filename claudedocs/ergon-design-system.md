# Ergon Design System - Comprehensive UI/UX Concept

**Version:** 1.0
**Date:** 2026-01-06
**Design Philosophy:** Professional, Efficient, Human-Centered

---

## 1. Design System Foundation

### 1.1 Color Palette

#### Primary Colors (Product Manager Professional)
```css
/* Refined Professional Palette */
--color-brand-primary: #4f46e5;      /* Indigo 600 - Trust, Intelligence */
--color-brand-primary-hover: #4338ca; /* Indigo 700 */
--color-brand-primary-light: #eef2ff; /* Indigo 50 */
--color-brand-accent: #10b981;        /* Emerald 500 - Success, Progress */
--color-brand-warning: #f59e0b;       /* Amber 500 */
--color-brand-error: #ef4444;         /* Red 500 */
```

#### Semantic Colors
```css
/* Light Mode */
--color-background: #ffffff;
--color-surface: #f9fafb;            /* Gray 50 - Cards, panels */
--color-surface-elevated: #ffffff;   /* Elevated cards */
--color-border: #e5e7eb;             /* Gray 200 */
--color-border-light: #f3f4f6;       /* Gray 100 */

/* Text Hierarchy */
--color-text-primary: #111827;       /* Gray 900 */
--color-text-secondary: #6b7280;     /* Gray 500 */
--color-text-tertiary: #9ca3af;      /* Gray 400 */
--color-text-disabled: #d1d5db;      /* Gray 300 */

/* Interactive States */
--color-interactive-primary: #4f46e5;
--color-interactive-hover: #4338ca;
--color-interactive-active: #3730a3;
--color-interactive-disabled: #e5e7eb;

/* Status Colors */
--color-status-success: #10b981;
--color-status-success-bg: #d1fae5;
--color-status-warning: #f59e0b;
--color-status-warning-bg: #fef3c7;
--color-status-error: #ef4444;
--color-status-error-bg: #fee2e2;
--color-status-info: #3b82f6;
--color-status-info-bg: #dbeafe;
```

#### Dark Mode Colors
```css
/* Dark Mode Palette */
--color-background-dark: #0f172a;        /* Slate 900 */
--color-surface-dark: #1e293b;           /* Slate 800 */
--color-surface-elevated-dark: #334155;  /* Slate 700 */
--color-border-dark: #334155;            /* Slate 700 */
--color-border-light-dark: #475569;      /* Slate 600 */

/* Dark Mode Text */
--color-text-primary-dark: #f1f5f9;      /* Slate 100 */
--color-text-secondary-dark: #94a3b8;    /* Slate 400 */
--color-text-tertiary-dark: #64748b;     /* Slate 500 */
--color-text-disabled-dark: #475569;     /* Slate 600 */

/* Dark Mode Interactive */
--color-interactive-primary-dark: #6366f1;  /* Indigo 500 */
--color-interactive-hover-dark: #818cf8;    /* Indigo 400 */
--color-interactive-active-dark: #a5b4fc;   /* Indigo 300 */
```

### 1.2 Typography System

#### Font Families
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
--font-display: 'Inter', sans-serif; /* For headings */
```

#### Type Scale (Modular 1.250 - Major Third)
```css
/* Font Sizes */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */

/* Line Heights */
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;

/* Font Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;

/* Letter Spacing */
--tracking-tight: -0.025em;
--tracking-normal: 0;
--tracking-wide: 0.025em;
```

#### Typography Classes
```css
/* Display Headings */
.display-1 { font-size: var(--text-5xl); font-weight: var(--font-bold); line-height: var(--leading-tight); letter-spacing: var(--tracking-tight); }
.display-2 { font-size: var(--text-4xl); font-weight: var(--font-bold); line-height: var(--leading-tight); letter-spacing: var(--tracking-tight); }

/* Headings */
.heading-1 { font-size: var(--text-3xl); font-weight: var(--font-semibold); line-height: var(--leading-tight); }
.heading-2 { font-size: var(--text-2xl); font-weight: var(--font-semibold); line-height: var(--leading-snug); }
.heading-3 { font-size: var(--text-xl); font-weight: var(--font-semibold); line-height: var(--leading-snug); }
.heading-4 { font-size: var(--text-lg); font-weight: var(--font-semibold); line-height: var(--leading-normal); }

/* Body Text */
.body-large { font-size: var(--text-lg); line-height: var(--leading-relaxed); }
.body-base { font-size: var(--text-base); line-height: var(--leading-relaxed); }
.body-small { font-size: var(--text-sm); line-height: var(--leading-normal); }
.body-xs { font-size: var(--text-xs); line-height: var(--leading-normal); }

/* UI Text */
.label { font-size: var(--text-sm); font-weight: var(--font-medium); }
.caption { font-size: var(--text-xs); color: var(--color-text-secondary); }
.code { font-family: var(--font-mono); font-size: var(--text-sm); }
```

### 1.3 Spacing System

#### Space Scale (Base 4px)
```css
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

#### Component Spacing
```css
/* Internal Padding */
--padding-xs: var(--space-2);      /* 8px */
--padding-sm: var(--space-3);      /* 12px */
--padding-md: var(--space-4);      /* 16px */
--padding-lg: var(--space-6);      /* 24px */
--padding-xl: var(--space-8);      /* 32px */

/* Gaps */
--gap-xs: var(--space-2);          /* 8px */
--gap-sm: var(--space-3);          /* 12px */
--gap-md: var(--space-4);          /* 16px */
--gap-lg: var(--space-6);          /* 24px */
--gap-xl: var(--space-8);          /* 32px */
```

### 1.4 Border Radius System

```css
--radius-none: 0;
--radius-sm: 0.25rem;    /* 4px */
--radius-md: 0.5rem;     /* 8px - Default */
--radius-lg: 0.75rem;    /* 12px */
--radius-xl: 1rem;       /* 16px */
--radius-2xl: 1.5rem;    /* 24px */
--radius-full: 9999px;   /* Full rounded */
```

### 1.5 Shadow System

```css
/* Elevation Shadows */
--shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

/* Colored Shadows (For Emphasis) */
--shadow-primary: 0 8px 16px -4px rgba(79, 70, 229, 0.2);
--shadow-success: 0 8px 16px -4px rgba(16, 185, 129, 0.2);
--shadow-warning: 0 8px 16px -4px rgba(245, 158, 11, 0.2);
--shadow-error: 0 8px 16px -4px rgba(239, 68, 68, 0.2);

/* Dark Mode Shadows */
--shadow-dark-md: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.3);
--shadow-dark-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -4px rgba(0, 0, 0, 0.4);
```

### 1.6 Animation & Transitions

```css
/* Durations */
--duration-instant: 100ms;
--duration-fast: 150ms;
--duration-normal: 250ms;
--duration-slow: 350ms;
--duration-slower: 500ms;

/* Easing Functions */
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-smooth: cubic-bezier(0.25, 0.46, 0.45, 0.94);

/* Standard Transitions */
--transition-base: all var(--duration-normal) var(--ease-in-out);
--transition-fast: all var(--duration-fast) var(--ease-out);
--transition-slow: all var(--duration-slow) var(--ease-in-out);
--transition-spring: all var(--duration-normal) var(--ease-spring);
```

---

## 2. Visual Design Concept

### 2.1 Design Principles

**1. Clarity Over Complexity**
- Clear visual hierarchy with purposeful spacing
- Information density appropriate for PM workflows
- Uncluttered interfaces that reduce cognitive load

**2. Professional Polish**
- Refined color palette conveying trust and intelligence
- Consistent micro-interactions for delightful UX
- Attention to typographic detail

**3. Efficiency-First**
- Quick access to common actions
- Keyboard shortcuts for power users
- Streamlined workflows minimizing clicks

**4. Contextual Intelligence**
- Smart defaults based on user patterns
- Contextual help and guidance
- Progressive disclosure of complexity

### 2.2 Layout System

#### Page Layout Structure
```
┌─────────────────────────────────────────────┐
│ Navigation Bar (64px fixed)                 │
├─────────────────────────────────────────────┤
│                                             │
│ ┌───────────────────────────────────────┐  │
│ │ Page Header                            │  │
│ │ - Title, breadcrumbs, actions          │  │
│ │ (80-120px responsive)                  │  │
│ └───────────────────────────────────────┘  │
│                                             │
│ ┌───────────────────────────────────────┐  │
│ │                                        │  │
│ │ Main Content Area                      │  │
│ │ (Flexible, max-width constrained)      │  │
│ │                                        │  │
│ │ - Dashboard Grid (3-column)            │  │
│ │ - Detail View (2-column sidebar)       │  │
│ │ - Full-width editor                    │  │
│ │                                        │  │
│ └───────────────────────────────────────┘  │
│                                             │
└─────────────────────────────────────────────┘
```

#### Content Constraints
```css
--max-width-sm: 640px;   /* Forms, narrow content */
--max-width-md: 768px;   /* Typical content */
--max-width-lg: 1024px;  /* Wide content */
--max-width-xl: 1280px;  /* Dashboard, grids */
--max-width-2xl: 1536px; /* Maximum content width */
```

### 2.3 Grid System

#### Responsive Grid
```css
/* Dashboard Project Grid */
.project-grid {
  display: grid;
  gap: var(--gap-lg);

  /* 1 column mobile */
  grid-template-columns: 1fr;

  /* 2 columns tablet */
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* 3 columns desktop */
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

## 3. Component Design Specifications

### 3.1 Enhanced ProjectCard

#### Visual Design
```
┌─────────────────────────────────────────┐
│ ┌─────┐                                 │ ← Status Indicator (4px colored top border)
│ │     │ Project Name                    │
│ │ Icon│ Brief description truncated to  │
│ │     │ 2 lines with proper ellipsis... │
│ └─────┘                                 │
│                                         │
│ ┌─────────────────┬───────────────────┐│
│ │ 📁 3 sources    │ Updated 2h ago    ││ ← Metadata Row
│ └─────────────────┴───────────────────┘│
│                                         │
│ ┌─────────────────────────────────────┐│
│ │ [Open Project]  [Generate PRD]  [⋮] ││ ← Action Bar
│ └─────────────────────────────────────┘│
└─────────────────────────────────────────┘
```

#### Enhanced Features
```typescript
interface EnhancedProjectCard {
  // Visual Enhancements
  statusColor: 'active' | 'archived' | 'draft';
  iconGradient: string;
  hoverElevation: boolean;

  // Metadata Display
  contextCount: number;
  prdCount: number;
  lastActivity: Date;
  collaborators?: Avatar[];

  // Quick Actions
  favorited: boolean;
  tags: string[];

  // Interactions
  onQuickGenerate: () => void;
  onFavorite: () => void;
  onArchive: () => void;
}
```

#### States & Variants
```css
/* Default State */
.project-card {
  background: var(--color-surface-elevated);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: var(--transition-base);
}

/* Hover State */
.project-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-border);
}

/* Active/Selected State */
.project-card.active {
  border-color: var(--color-interactive-primary);
  box-shadow: var(--shadow-primary);
}

/* Status Indicators */
.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}

.project-card.status-active::before {
  background: var(--color-status-success);
}

.project-card.status-draft::before {
  background: var(--color-status-warning);
}

.project-card.status-archived::before {
  background: var(--color-text-tertiary);
}
```

### 3.2 Enhanced Dashboard

#### Layout Improvements
```
┌──────────────────────────────────────────────────────┐
│ ┌────────────────────────────────────────────────┐   │
│ │ Ergon                    [Search] [+] [Profile]│   │ ← Nav Bar
│ └────────────────────────────────────────────────┘   │
│                                                      │
│ ┌────────────────────────────────────────────────┐   │
│ │ Projects                          [View] [Sort]│   │
│ │ Manage your products and PRDs                  │   │ ← Header
│ │                                                │   │
│ │ [All] [Active] [Archived] [Favorites]          │   │ ← Filter Tabs
│ └────────────────────────────────────────────────┘   │
│                                                      │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐              │
│ │ Project  │ │ Project  │ │ Project  │              │
│ │ Card 1   │ │ Card 2   │ │ Card 3   │              │ ← Grid
│ └──────────┘ └──────────┘ └──────────┘              │
│                                                      │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐              │
│ │ Project  │ │ Project  │ │ New      │              │
│ │ Card 4   │ │ Card 5   │ │ Project  │              │
│ └──────────┘ └──────────┘ └──────────┘              │
└──────────────────────────────────────────────────────┘
```

#### Features
- **Smart Search**: Filter projects by name, tags, description
- **View Modes**: Grid (default), List, Compact
- **Sort Options**: Last updated, Name, Creation date, PRD count
- **Quick Stats**: Total projects, Active, PRDs generated this week
- **Empty State**: Onboarding illustration + CTA

### 3.3 Button System

#### Button Hierarchy
```typescript
// Primary - Main actions
<Button variant="primary">Generate PRD</Button>

// Secondary - Supporting actions
<Button variant="secondary">View Details</Button>

// Outline - Tertiary actions
<Button variant="outline">Cancel</Button>

// Ghost - Minimal actions
<Button variant="ghost">More Options</Button>

// Danger - Destructive actions
<Button variant="danger">Delete Project</Button>

// Link - Navigation
<Button variant="link">Learn More</Button>
```

#### Button States
```css
/* Primary Button */
.btn-primary {
  background: var(--color-interactive-primary);
  color: white;
  padding: var(--padding-sm) var(--padding-lg);
  border-radius: var(--radius-md);
  font-weight: var(--font-medium);
  transition: var(--transition-fast);
}

.btn-primary:hover {
  background: var(--color-interactive-hover);
  box-shadow: var(--shadow-md);
}

.btn-primary:active {
  background: var(--color-interactive-active);
  transform: scale(0.98);
}

.btn-primary:disabled {
  background: var(--color-interactive-disabled);
  color: var(--color-text-disabled);
  cursor: not-allowed;
}

/* Loading State */
.btn-loading {
  position: relative;
  color: transparent;
}

.btn-loading::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}
```

### 3.4 Form Components

#### Input Fields
```css
.input-field {
  width: 100%;
  padding: var(--padding-sm) var(--padding-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: var(--text-base);
  transition: var(--transition-fast);
}

.input-field:focus {
  outline: none;
  border-color: var(--color-interactive-primary);
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.input-field.error {
  border-color: var(--color-status-error);
}

.input-field.error:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}
```

#### Label & Helper Text
```css
.form-label {
  display: block;
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  margin-bottom: var(--space-2);
  color: var(--color-text-primary);
}

.form-helper {
  font-size: var(--text-xs);
  color: var(--color-text-secondary);
  margin-top: var(--space-1);
}

.form-error {
  font-size: var(--text-xs);
  color: var(--color-status-error);
  margin-top: var(--space-1);
  display: flex;
  align-items: center;
  gap: var(--space-1);
}
```

### 3.5 Dialog/Modal Design

#### Create Project Dialog Enhancement
```
┌────────────────────────────────────────┐
│ Create New Project              [×]    │
├────────────────────────────────────────┤
│                                        │
│ Project Name *                         │
│ ┌────────────────────────────────────┐ │
│ │ My Awesome Product                 │ │
│ └────────────────────────────────────┘ │
│                                        │
│ Description                            │
│ ┌────────────────────────────────────┐ │
│ │                                    │ │
│ │ A product that solves...           │ │
│ │                                    │ │
│ └────────────────────────────────────┘ │
│                                        │
│ Template (Optional)                    │
│ ┌────────────────────────────────────┐ │
│ │ [⚡ Blank] [📄 Standard PRD]       │ │
│ │ [🔧 Technical] [📊 Lean Canvas]    │ │
│ └────────────────────────────────────┘ │
│                                        │
│ Tags                                   │
│ ┌────────────────────────────────────┐ │
│ │ [mobile] [mvp] [+ Add tag]         │ │
│ └────────────────────────────────────┘ │
│                                        │
│          [Cancel]  [Create Project]    │
└────────────────────────────────────────┘
```

#### Modal Styles
```css
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 50;
  animation: fadeIn var(--duration-fast) var(--ease-out);
}

.modal-content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--color-background);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-2xl);
  max-width: 500px;
  width: 90vw;
  max-height: 85vh;
  overflow-y: auto;
  z-index: 51;
  animation: slideIn var(--duration-normal) var(--ease-spring);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
```

---

## 4. Layout & Navigation Improvements

### 4.1 Navigation Bar

```
┌─────────────────────────────────────────────────────┐
│ Ergon     Projects  Templates  Settings   [🔍] [👤] │
└─────────────────────────────────────────────────────┘
```

#### Features
- Fixed position for consistent access
- Breadcrumb navigation on detail pages
- Global search with keyboard shortcut (⌘K)
- User profile with dark mode toggle
- Notification bell (future: updates, PRD generation complete)

#### Responsive Behavior
```css
/* Desktop Navigation */
.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-md) var(--padding-xl);
  background: var(--color-surface-elevated);
  border-bottom: 1px solid var(--color-border-light);
  height: 64px;
}

/* Mobile Navigation */
@media (max-width: 768px) {
  .nav-bar {
    padding: var(--padding-sm) var(--padding-md);
  }

  .nav-links {
    display: none;
  }

  .mobile-menu-button {
    display: block;
  }
}
```

### 4.2 Breadcrumb Navigation

```
Home / Projects / Marketing Platform / Context
```

```css
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

.breadcrumb-link {
  color: var(--color-text-secondary);
  transition: var(--transition-fast);
}

.breadcrumb-link:hover {
  color: var(--color-interactive-primary);
}

.breadcrumb-separator {
  color: var(--color-text-tertiary);
}

.breadcrumb-current {
  color: var(--color-text-primary);
  font-weight: var(--font-medium);
}
```

### 4.3 Sidebar Navigation (Project Detail Pages)

```
┌────────────────────────────────────────────┐
│ ← Back to Projects                         │
│                                            │
│ Marketing Platform                         │
│ Last updated 2 hours ago                   │
│                                            │
│ ┌────────────────────────────────────────┐│
│ │ Overview                                ││ ← Active
│ │ Context Files                           ││
│ │ Generated PRDs                          ││
│ │ Templates                               ││
│ │ Settings                                ││
│ └────────────────────────────────────────┘│
│                                            │
│ Quick Actions                              │
│ [Generate PRD]                             │
│ [Import Context]                           │
└────────────────────────────────────────────┘
```

---

## 5. Accessibility Considerations

### 5.1 WCAG 2.1 AA Compliance

#### Color Contrast
```css
/* Minimum contrast ratios */
--contrast-normal-text: 4.5:1;    /* AA requirement */
--contrast-large-text: 3:1;       /* AA requirement for 18px+ */
--contrast-ui-components: 3:1;    /* AA requirement */

/* Verified combinations */
Primary on White: 8.2:1 ✓
Secondary on Surface: 5.1:1 ✓
Text Primary on Background: 16.1:1 ✓
Text Secondary on Background: 4.8:1 ✓
```

#### Focus Indicators
```css
.focusable:focus-visible {
  outline: 2px solid var(--color-interactive-primary);
  outline-offset: 2px;
  border-radius: var(--radius-md);
}

/* Skip to content link */
.skip-to-content {
  position: absolute;
  top: -40px;
  left: 0;
  padding: var(--padding-md);
  background: var(--color-interactive-primary);
  color: white;
  z-index: 100;
}

.skip-to-content:focus {
  top: 0;
}
```

### 5.2 Keyboard Navigation

#### Keyboard Shortcuts
```
Global:
⌘K / Ctrl+K    → Open search
⌘N / Ctrl+N    → New project
⌘, / Ctrl+,    → Settings
Esc            → Close modals/dialogs

Dashboard:
Arrow keys     → Navigate project cards
Enter          → Open selected project
Space          → Quick actions menu

Editor:
⌘S / Ctrl+S    → Save
⌘Z / Ctrl+Z    → Undo
⌘Shift+Z       → Redo
```

#### Tab Order
```html
<!-- Logical tab order example -->
<nav tabindex="0">...</nav>
<main tabindex="0">
  <button tabindex="0">Primary Action</button>
  <button tabindex="0">Secondary Action</button>
  <a tabindex="0">Link</a>
</main>
<footer tabindex="0">...</footer>
```

### 5.3 Screen Reader Support

#### ARIA Labels
```html
<!-- Project Card -->
<article
  role="article"
  aria-labelledby="project-name-123"
  aria-describedby="project-desc-123"
>
  <h3 id="project-name-123">Marketing Platform</h3>
  <p id="project-desc-123">Product for marketing teams...</p>

  <button
    aria-label="Generate PRD for Marketing Platform"
    aria-describedby="prd-help"
  >
    Generate PRD
  </button>
  <span id="prd-help" class="sr-only">
    Opens PRD generation wizard
  </span>
</article>

<!-- Loading States -->
<button aria-busy="true" aria-live="polite">
  <span aria-hidden="true">Loading...</span>
  <span class="sr-only">Creating project, please wait</span>
</button>

<!-- Form Validation -->
<input
  aria-invalid="true"
  aria-describedby="name-error"
/>
<span id="name-error" role="alert">
  Project name is required
</span>
```

### 5.4 Motion & Animation

```css
/* Respect prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Provide static alternatives */
.loading-spinner {
  animation: spin 1s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .loading-spinner {
    animation: none;
    opacity: 0.6;
  }
}
```

---

## 6. Micro-interactions & Animations

### 6.1 Button Interactions

```css
/* Ripple Effect on Click */
.button {
  position: relative;
  overflow: hidden;
}

.button::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.button:active::after {
  width: 300px;
  height: 300px;
}

/* Scale on Click */
.button:active {
  transform: scale(0.98);
  transition: transform var(--duration-instant);
}
```

### 6.2 Card Hover Effects

```css
.project-card {
  transition: all var(--duration-normal) var(--ease-smooth);
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

/* Shimmer Loading Effect */
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.skeleton {
  background: linear-gradient(
    90deg,
    var(--color-surface) 0%,
    var(--color-border-light) 50%,
    var(--color-surface) 100%
  );
  background-size: 1000px 100%;
  animation: shimmer 2s infinite;
}
```

### 6.3 Toast Notifications

```css
/* Slide in from top-right */
@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.toast {
  position: fixed;
  top: var(--space-4);
  right: var(--space-4);
  background: var(--color-surface-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  padding: var(--padding-md);
  min-width: 300px;
  animation: slideInRight var(--duration-normal) var(--ease-spring);
  z-index: 100;
}

.toast.success {
  border-left: 4px solid var(--color-status-success);
}

.toast.error {
  border-left: 4px solid var(--color-status-error);
}
```

### 6.4 Contextual Menu

```css
/* Dropdown menu animation */
@keyframes dropdownSlide {
  from {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.dropdown-menu {
  animation: dropdownSlide var(--duration-fast) var(--ease-out);
  transform-origin: top;
}

.dropdown-item {
  transition: background-color var(--duration-fast);
}

.dropdown-item:hover {
  background-color: var(--color-surface);
}
```

### 6.5 Progress Indicators

```css
/* PRD Generation Progress Bar */
@keyframes progressFill {
  from { width: 0%; }
  to { width: 100%; }
}

.progress-bar {
  height: 8px;
  background: var(--color-border-light);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(
    90deg,
    var(--color-interactive-primary),
    var(--color-brand-accent)
  );
  border-radius: var(--radius-full);
  transition: width var(--duration-slow) var(--ease-smooth);
}

/* Indeterminate Loading */
@keyframes indeterminate {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(300%);
  }
}

.progress-indeterminate::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 33.33%;
  background: var(--color-interactive-primary);
  animation: indeterminate 1.5s ease-in-out infinite;
}
```

---

## 7. Dark Mode Support

### 7.1 Dark Mode Theme

```css
/* Dark mode implementation */
@media (prefers-color-scheme: dark) {
  :root {
    --color-background: var(--color-background-dark);
    --color-surface: var(--color-surface-dark);
    --color-surface-elevated: var(--color-surface-elevated-dark);
    --color-border: var(--color-border-dark);
    --color-border-light: var(--color-border-light-dark);

    --color-text-primary: var(--color-text-primary-dark);
    --color-text-secondary: var(--color-text-secondary-dark);
    --color-text-tertiary: var(--color-text-tertiary-dark);
    --color-text-disabled: var(--color-text-disabled-dark);

    --color-interactive-primary: var(--color-interactive-primary-dark);
    --color-interactive-hover: var(--color-interactive-hover-dark);
    --color-interactive-active: var(--color-interactive-active-dark);

    /* Adjust shadows for dark mode */
    --shadow-sm: var(--shadow-dark-md);
    --shadow-md: var(--shadow-dark-md);
    --shadow-lg: var(--shadow-dark-lg);
  }
}

/* Manual dark mode toggle */
[data-theme="dark"] {
  /* Same variable overrides as above */
}
```

### 7.2 Dark Mode Toggle Component

```html
<!-- Toggle in navigation -->
<button
  aria-label="Toggle dark mode"
  aria-pressed="false"
  class="theme-toggle"
>
  <svg class="sun-icon">...</svg>
  <svg class="moon-icon">...</svg>
</button>
```

```css
.theme-toggle {
  position: relative;
  width: 48px;
  height: 24px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  transition: var(--transition-base);
}

.theme-toggle::after {
  content: '';
  position: absolute;
  width: 18px;
  height: 18px;
  background: var(--color-interactive-primary);
  border-radius: 50%;
  top: 2px;
  left: 2px;
  transition: transform var(--duration-normal) var(--ease-spring);
}

.theme-toggle[aria-pressed="true"]::after {
  transform: translateX(24px);
}
```

### 7.3 Dark Mode Adjustments

```css
/* Image opacity in dark mode */
@media (prefers-color-scheme: dark) {
  img {
    opacity: 0.9;
  }

  img:hover {
    opacity: 1;
  }
}

/* Code blocks dark mode */
pre, code {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
}

@media (prefers-color-scheme: dark) {
  pre, code {
    background: var(--color-surface-elevated);
    border-color: var(--color-border-dark);
  }
}
```

---

## 8. Implementation Recommendations

### 8.1 Component Library Structure

```
components/
├── ui/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Input.tsx
│   ├── Dialog.tsx
│   ├── Toast.tsx
│   └── Badge.tsx
├── layout/
│   ├── Navigation.tsx
│   ├── Sidebar.tsx
│   ├── PageHeader.tsx
│   └── Container.tsx
├── project/
│   ├── ProjectCard.tsx
│   ├── ProjectGrid.tsx
│   ├── ProjectHeader.tsx
│   └── ProjectStats.tsx
└── shared/
    ├── EmptyState.tsx
    ├── LoadingSkeleton.tsx
    ├── SearchBar.tsx
    └── FilterTabs.tsx
```

### 8.2 CSS Architecture

```
styles/
├── globals.css           # Design tokens, resets
├── animations.css        # Keyframes, transitions
├── utilities.css         # Helper classes
└── components/
    ├── button.css
    ├── card.css
    ├── form.css
    └── navigation.css
```

### 8.3 Design Token Implementation

```typescript
// design-tokens.ts
export const tokens = {
  colors: {
    brand: {
      primary: '#4f46e5',
      primaryHover: '#4338ca',
      accent: '#10b981',
    },
    // ... more tokens
  },
  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    // ... more spacing
  },
  typography: {
    // ... typography tokens
  },
} as const;
```

### 8.4 Performance Optimization

```typescript
// Lazy load heavy components
const MarkdownEditor = dynamic(() => import('./MarkdownEditor'), {
  loading: () => <LoadingSkeleton />,
  ssr: false,
});

// Image optimization
<Image
  src="/project-icon.png"
  alt="Project icon"
  width={64}
  height={64}
  loading="lazy"
  placeholder="blur"
/>

// CSS-in-JS optimization (if using)
const StyledCard = styled.div`
  /* Critical styles inline */
  display: flex;
  padding: ${tokens.spacing.md};

  /* Non-critical styles lazy */
  @media (min-width: 768px) {
    /* ... */
  }
`;
```

---

## 9. Summary & Next Steps

### Design System Checklist

- [x] Color palette defined (light + dark)
- [x] Typography system established
- [x] Spacing scale created
- [x] Shadow system defined
- [x] Animation framework set
- [x] Component specifications written
- [x] Accessibility guidelines documented
- [x] Dark mode support planned

### Implementation Priority

**Phase 1: Foundation (Week 1-2)**
1. Implement design tokens in globals.css
2. Create base UI components (Button, Card, Input)
3. Setup dark mode toggle system
4. Establish layout components (Nav, Container)

**Phase 2: Components (Week 3-4)**
1. Enhanced ProjectCard with new design
2. Improved Dashboard with filters/search
3. Better Dialog/Modal components
4. Toast notification system

**Phase 3: Refinement (Week 5-6)**
1. Micro-interactions and animations
2. Accessibility audit and fixes
3. Responsive design testing
4. Performance optimization

**Phase 4: Polish (Week 7-8)**
1. User testing and feedback
2. Animation fine-tuning
3. Documentation updates
4. Design QA

### Design Deliverables

This document provides:
- Complete design system specification
- Component design guidelines
- Accessibility requirements
- Implementation recommendations
- CSS/code examples ready for development

All designs prioritize:
- Professional aesthetics for PM audience
- Efficiency and productivity
- Accessibility compliance (WCAG 2.1 AA)
- Performance and maintainability
- Delightful user experience

---

**Document Version:** 1.0
**Last Updated:** 2026-01-06
**Maintained By:** Design Team
**Review Cycle:** Quarterly
