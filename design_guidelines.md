# Design Guidelines: Modern Khmer Documentation Website

## Design Approach
**System-Based Approach** with clean, minimal aesthetic inspired by modern documentation sites like React Docs, Next.js Docs, and Stripe Docs. Focus on exceptional readability, clear information hierarchy, and efficient navigation for technical content.

## Core Design Principles
1. **Absolute Minimalism**: Clean, distraction-free reading experience
2. **Flat Design Language**: No gradients, pure flat colors with neutral palette
3. **Information Clarity**: Typography and spacing optimized for Khmer technical content
4. **Purposeful Motion**: Subtle animations that enhance UX without distraction

---

## Typography System
**Single Font Family**: InterKhmerLooped.ttf for all text

**Hierarchy**:
- Navbar Links: text-base font-medium
- Sidebar Language Headers: text-lg font-semibold
- Sidebar Chapter Items: text-sm font-medium
- Sidebar Lesson Items: text-sm font-normal
- Documentation Headings (H1): text-4xl font-bold
- Documentation Headings (H2): text-2xl font-semibold
- Documentation Headings (H3): text-xl font-medium
- Body Text: text-base leading-relaxed
- Code Inline: text-sm font-mono (fallback to system mono)
- Search Input: text-sm

---

## Layout System
**Spacing Units**: Consistent use of Tailwind units: 2, 4, 6, 8, 12, 16, 20, 24

**Grid Structure**:
- Navbar Height: h-16 (64px fixed)
- Sidebar Width: w-64 (256px on desktop), full-width drawer on mobile
- Main Content: max-w-4xl centered with px-8 horizontal padding
- Documentation Section Spacing: py-16 between major sections, py-8 between lessons

**Responsive Breakpoints**:
- Mobile: < 768px (sidebar as overlay drawer)
- Tablet: 768px - 1024px (sidebar visible)
- Desktop: > 1024px (full layout)

---

## Component Library

### Navbar (Top, Fixed, Full-Width)
- Container: h-16, border-b, backdrop-blur, sticky top-0, z-50
- Left Section: Logo + Home/About/Contact links (gap-6)
- Right Section: Programming language icons (8 icons, gap-3), theme switcher
- Icons: w-6 h-6 for language logos, hover:opacity-70 transition
- Mobile: Hamburger menu, collapsible with slide-in animation

### Sidebar (Left, Fixed Height)
- Container: w-64 desktop, drawer overlay mobile, overflow-y-auto, pt-6
- Language Items: Collapsible headers with chevron icons, py-3 px-4
- Chapter Items: Nested, pl-8, py-2, text-sm
- Lesson Items: Nested deeper, pl-12, py-1.5, text-sm
- Active States: Highlighted with accent background (bg-opacity-10) and border-l-2
- Scrollspy: Real-time highlighting based on viewport position
- Collapse Animation: Smooth height transition (150ms ease)

### Documentation Content Area
- Main Container: ml-64 desktop (sidebar offset), ml-0 mobile, pt-20, pb-32
- Inner Wrapper: max-w-4xl mx-auto px-8
- Section Structure: Each lesson as `<section id="language-chapter-lesson">`
- Spacing: mb-16 between sections, mb-6 between elements within sections

### MDX Content Components
- **Text Blocks**: prose prose-lg, leading-relaxed, mb-6
- **Images**: rounded-lg, shadow-sm, max-w-full, my-8
- **Code Blocks**: Shiki syntax highlighting, rounded-md, p-4, overflow-x-auto, my-6
- **Inline Code**: bg with 10% opacity, px-2 py-1, rounded text-sm
- **Lists**: ml-6, space-y-2, custom bullets with accent color

### Search Bar (in Navbar)
- Input: w-64 desktop, rounded-md, pl-10 (icon space), pr-4, h-10
- Icon: Magnifying glass, absolute left-3, w-5 h-5
- Dropdown: absolute, top-full, w-full, mt-2, max-h-96, overflow-y-auto, rounded-lg, shadow-xl
- Suggestions: py-2 px-4 hover background, text-sm, truncate with ellipsis
- Keyboard Navigation: Arrow keys + Enter support

### Theme Switcher
- Toggle: w-12 h-6 rounded-full, relative switch design
- Icons: Sun/Moon icons, smooth transition on theme change
- Storage: localStorage persistence, smooth transition-all 200ms on switch

---

## Color Strategy (Flat, No Gradients)

**Light Theme**:
- Background: White (#FFFFFF)
- Surface: Neutral-50 (#FAFAFA)
- Border: Neutral-200 (#E5E5E5)
- Text Primary: Neutral-900 (#171717)
- Text Secondary: Neutral-600 (#525252)
- Accent: Blue-600 or Indigo-600 for interactive elements
- Code Background: Neutral-100

**Dark Theme**:
- Background: Neutral-900 (#171717)
- Surface: Neutral-800 (#262626)
- Border: Neutral-700 (#404040)
- Text Primary: Neutral-50 (#FAFAFA)
- Text Secondary: Neutral-400 (#A3A3A3)
- Accent: Blue-400 or Indigo-400 for interactive elements
- Code Background: Neutral-800

---

## Animation Guidelines (Framer Motion)

**Minimalist Approach** - animations enhance, never distract:

- **Page Load**: Fade in content (opacity 0→1, duration 0.3s)
- **Sidebar Expand/Collapse**: Height animation with ease-in-out (150ms)
- **Smooth Scroll**: scroll-behavior: smooth for anchor navigation, offset for fixed navbar
- **Search Dropdown**: Fade + slide down (y: -10→0, opacity 0→1, duration 0.2s)
- **Section Reveal**: Subtle fade-in on scroll into view (optional, very subtle)
- **Theme Switch**: Transition colors with 200ms duration
- **Hover States**: opacity or scale transitions (100ms)

**Motion Preferences**: Respect `prefers-reduced-motion` for accessibility

---

## Mobile Responsive Strategy

**Mobile (<768px)**:
- Navbar: Hamburger icon, slide-out menu drawer
- Sidebar: Hidden, accessible via hamburger or separate drawer toggle
- Content: Full-width with px-4 padding, larger touch targets (min-h-12)
- Search: Full-width within navbar drawer, mt-4

**Tablet (768-1024px)**:
- Sidebar: Visible but narrower (w-56)
- Content: Adjusted padding, responsive max-width

---

## Special Features

### Scrollspy Implementation
- IntersectionObserver API monitoring each `<section>`
- Active state propagates to sidebar: language > chapter > lesson
- Smooth transitions for active state changes
- Offset calculation accounts for fixed navbar (16 units)

### Search Functionality
- Fuse.js fuzzy matching across all content
- Search index: language names, chapter titles, lesson titles, lesson body text
- Real-time filtering on keyup (debounced 150ms)
- Highlight matching text in suggestions
- Click suggestion → smooth scroll to section

### MDX Support
- Custom components registry for rich content
- Support for callouts, warnings, tips (bordered boxes with icons)
- Responsive tables with horizontal scroll
- Embedded YouTube/images via MDX components

---

## Images
No hero images required. This is a documentation website focused on content delivery, not marketing. Any images will be:
- Inline within lesson content (diagrams, code screenshots, concept illustrations)
- Placed within documentation sections as part of MDX content
- Styled with rounded-lg, shadow-sm, responsive sizing