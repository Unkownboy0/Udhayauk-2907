# Overview

This is a personal cybersecurity portfolio website for Udhayakumar V (also known as Karthikeyan V), showcasing expertise in ethical hacking, web security, mobile app pentesting, and cybersecurity tool development. The site features a modern dark-themed design with smooth animations, portfolio showcase, timeline of events, testimonials, and contact functionality.

The application is built as a full-stack web application with a React frontend and Express backend, designed for deployment to static hosting platforms like Netlify or Vercel.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework**: React 18+ with TypeScript, using functional components and hooks

**Routing**: Wouter for client-side routing (lightweight alternative to React Router)

**State Management**: 
- TanStack Query (React Query) for server state and data fetching
- Local component state using React hooks (useState, useEffect)

**UI Components**: 
- Radix UI primitives for accessible, unstyled components
- Custom styled components using shadcn/ui design system
- Tailwind CSS for utility-first styling with custom theme configuration

**Styling System**:
- Tailwind CSS with custom design tokens defined in `tailwind.config.ts`
- CSS variables for theming (dark/light mode support)
- DM Sans font family from Google Fonts
- Custom color scheme with primary purple (#5933D3) and cyan accents

**Build Tool**: Vite for fast development and optimized production builds

**Design Patterns**:
- Component composition with reusable UI primitives
- Separation of concerns (components, hooks, utilities, pages)
- Path aliases (@/, @shared/, @assets/) for clean imports
- Theme context provider for global theme management

## Backend Architecture

**Runtime**: Node.js with Express framework

**API Design**: RESTful endpoints serving JSON data
- `/api/portfolio` - Portfolio items
- `/api/services` - Service offerings
- `/api/testimonials` - Client testimonials
- `/api/timeline` - Event timeline
- `/api/courses` - Course listings
- `/api/tech-logos` - Technology logos
- `/api/bug-reports` - Bug report companies

**Data Layer**: 
- In-memory storage implementation (MemStorage class)
- Interface-based design (IStorage) allowing for future database integration
- Static data currently served from memory, designed to support PostgreSQL via Drizzle ORM

**Development vs Production**:
- Development: Vite middleware integration for HMR and fast refresh
- Production: Serves pre-built static assets from dist/public

**Server Structure**:
- Separation between development (`index-dev.ts`) and production (`index-prod.ts`) entry points
- Route registration abstraction in `routes.ts`
- Middleware for JSON parsing, logging, and request handling

## Data Storage Solutions

**Current Implementation**: In-memory storage with static data

**Future Database Support**: 
- Drizzle ORM configured for PostgreSQL (Neon Database)
- Schema definitions in `shared/schema.ts` using Zod for validation
- Database configuration in `drizzle.config.ts`
- Migration support via Drizzle Kit

**Data Models**:
- Portfolio items with categories (hardware, social engineering, OSINT, web security)
- Services with icons and descriptions
- Testimonials with ratings
- Timeline events
- Course information
- Technology and bug report logos
- Statistics and metrics
- Contact form submissions (designed but not fully implemented)

## Authentication and Authorization

**Current State**: No authentication system implemented

**Design Consideration**: The contact form endpoint is designed to accept submissions but currently lacks authentication or spam protection mechanisms

## External Service Integrations

**GitHub API**: 
- Portfolio component fetches public repositories from GitHub users "Unkownboy0" and "geetorus"
- Client-side API calls to display projects with stars and descriptions
- No authentication required (public API)

**Google Fonts**: 
- DM Sans font family loaded via Google Fonts CDN
- Preconnect optimization for performance

**Static Assets**:
- Images hosted on external CDN (i.ibb.co)
- Local asset management via Vite's asset pipeline

**Social Media Links**:
- Medium, Twitter (X), Instagram, LinkedIn, YouTube, GitHub
- Direct links without API integration

## Deployment Configuration

**Platforms**: Configured for both Netlify and Vercel

**Build Process**:
- Client build: `cd client && npm install && npm run build`
- Output directory: `dist/public`
- Server build: Bundles Express server with esbuild for production

**Static Site Generation**:
- SPA (Single Page Application) with client-side routing
- Fallback to index.html for all routes
- Cache headers for static assets (1 year immutable)
- Security headers (X-Frame-Options, CSP, etc.)

**Development Environment**:
- Replit integration with custom plugins for error overlay and cartographer
- Hot module replacement via Vite
- Development banner in Replit environment

## Key Architectural Decisions

**Monorepo Structure**: 
- Single repository with client and server code
- Shared schema definitions between frontend and backend
- Unified TypeScript configuration

**Static-First Approach**: 
- Despite having an Express backend, the application is designed to be deployed as a static site
- API endpoints serve static data from memory
- No server-side rendering or API routes in production deployment

**Component Library Strategy**: 
- shadcn/ui approach: copy-paste components into codebase rather than npm dependency
- Full control over component implementation
- Radix UI primitives for accessibility without styling opinions

**Type Safety**: 
- Zod schemas for runtime validation and TypeScript type inference
- Shared types between client and server via @shared path alias
- Strict TypeScript configuration

**Responsive Design**: 
- Mobile-first approach with Tailwind breakpoints
- Custom breakpoints for tablet and desktop
- Hamburger menu for mobile navigation

**Animation Strategy**:
- CSS transitions and Tailwind animation utilities
- Scroll-triggered animations using Intersection Observer
- Auto-scrolling carousels with JavaScript
- Number counting animations for statistics