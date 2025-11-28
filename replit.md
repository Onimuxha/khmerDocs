# Overview

This is a Khmer programming documentation website that provides educational content for learning various programming languages (C, C++, C#, Python, HTML, CSS, JavaScript, React) in the Khmer language. The application serves as a static documentation site with an interactive UI featuring search functionality, navigation, and code examples with syntax highlighting.

The project is built as a modern single-page application with a minimalist design philosophy, focusing on readability and accessibility for Khmer-speaking learners. Content is embedded directly in the frontend application rather than stored in a database, making it a self-contained educational resource.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with Wouter, a lightweight React router alternative. Routes include home, documentation pages (with optional language parameter), about, and contact pages.

**State Management**: TanStack Query (React Query) for data fetching and caching. Local state managed with React hooks. No global state management library needed since content is static.

**UI Component System**: Radix UI primitives with custom shadcn/ui components following the "new-york" style variant. Components are designed with a flat design language and neutral color palette, avoiding gradients entirely.

**Styling Approach**: Tailwind CSS with custom design tokens defined in CSS variables. The design system enforces absolute minimalism with flat colors, purposeful motion (Framer Motion for animations), and optimized typography for Khmer text using custom fonts (Kantumruy Pro, Noto Sans Khmer).

**Typography**: Single font family approach (InterKhmerLooped.ttf) specified in design guidelines, with fallbacks to Google Fonts (Kantumruy Pro, Noto Sans Khmer) for Khmer text and JetBrains Mono for code.

**Key Features**:
- **Search**: Fuzzy search implementation using Fuse.js to search across languages, chapters, and lessons
- **Syntax Highlighting**: Shiki library for code block rendering with light/dark theme support
- **Scroll Spy**: Custom hook tracking active sections while scrolling for sidebar navigation highlighting
- **Theme System**: Light/dark mode toggle with localStorage persistence
- **Responsive Design**: Mobile-first approach with drawer-based sidebar on mobile, fixed sidebar on desktop (breakpoint at 768px)

## Backend Architecture

**Framework**: Express.js server serving as a minimal backend primarily for static file serving.

**Development vs Production**:
- Development: Vite middleware integrated into Express for HMR (Hot Module Replacement)
- Production: Pre-built static files served from dist/public directory

**API Surface**: Minimal - only a health check endpoint (`/api/health`). No CRUD operations or dynamic data endpoints since all documentation content is statically embedded in the frontend.

**Build Process**: Custom build script using esbuild for server bundling and Vite for client bundling. Server dependencies are selectively bundled (allowlist approach) to reduce cold start times.

## Data Architecture

**Content Structure**: Documentation data is structured as a nested TypeScript object hierarchy:
- Languages → Chapters → Lessons → Code Blocks
- Schema validation using Zod for type safety
- All content stored in `client/src/lib/documentation-data.ts`

**Search Index**: Generated at runtime from the documentation structure, creating searchable items with language/chapter/lesson metadata.

**No Database**: Application is entirely stateless with no persistent data storage. The Drizzle ORM configuration exists but is not actively used - likely a template artifact that could be removed.

## Design System

**Color Scheme**: Neutral palette with minimal use of color accents. Primary blue (HSL 220 70% 50%) for interactive elements. All colors defined as CSS custom properties supporting both light and dark themes.

**Component Variants**: Button, badge, and card components follow a consistent elevation system using subtle shadows and borders rather than gradients.

**Animation Strategy**: Subtle, purposeful animations using Framer Motion for page transitions, component reveals, and interactive feedback. Animations are performance-optimized with `whileInView` and viewport intersection.

**Accessibility**: Radix UI primitives provide built-in accessibility features (ARIA attributes, keyboard navigation, focus management).

# External Dependencies

## Core Framework Dependencies
- **React** (18.x): UI library
- **Express**: Web server framework
- **Vite**: Build tool and development server
- **TypeScript**: Type safety across the application

## UI Component Libraries
- **Radix UI**: Comprehensive set of unstyled, accessible component primitives (@radix-ui/react-*)
- **shadcn/ui**: Pre-built component patterns built on Radix UI
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Type-safe component variant management
- **Framer Motion**: Animation library for React

## Utility Libraries
- **Wouter**: Lightweight routing (alternative to React Router)
- **TanStack Query**: Data fetching and caching
- **React Hook Form**: Form state management with Zod validation
- **Fuse.js**: Fuzzy search implementation
- **Shiki**: Syntax highlighting engine
- **clsx & tailwind-merge**: Utility for conditional class names
- **date-fns**: Date manipulation (likely unused in current implementation)
- **Lucide React**: Icon library

## Development Dependencies
- **esbuild**: JavaScript bundler for server code
- **tsx**: TypeScript execution for build scripts
- **@replit/vite-plugin-***: Replit-specific development tooling

## Database (Configured but Unused)
- **Drizzle ORM**: SQL ORM with PostgreSQL dialect configured
- **@neondatabase/serverless**: Neon database adapter
- Configuration present but no active database usage in the application

## Fonts (External CDN)
- Google Fonts: Kantumruy Pro, Noto Sans Khmer, JetBrains Mono
- Loaded via CDN in index.html for Khmer language support and code display

## Notes
- Session management dependencies (express-session, connect-pg-simple) are installed but not used
- Authentication libraries (passport, passport-local) are present but unused
- The application could be simplified by removing unused database and authentication dependencies