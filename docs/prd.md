PART A — PRODUCT REQUIREMENTS DOCUMENT (PRD)

1. PRODUCT OVERVIEW

Project Name
- TrendyToys

Product Type
- UI-first demo e-commerce website for toys (end-to-end flows, mock backend)

Purpose of Demo
- Showcase premium toy e-commerce UX with a playful, trendy brand
- Validate branding, layout, and core shopping flows
- Act as:
  - investor/demo presentation website
  - portfolio flagship project
  - foundation for a future real backend and production system

Non-Goals (Important)
- No real payments integration
- No real logistics, shipping, or inventory management
- No full production-ready backend, scalability, or security hardening
- No complex user accounts or authentication beyond demo behavior

Definition
- This is a high-fidelity demo experience, not a production MVP backend.


2. BRAND IDENTITY & DESIGN SYSTEM

Brand Personality
- Trendy
- Modern
- Premium but affordable
- Joyful, safe, and playful
- Tech-forward
- Trustworthy for parents, exciting for kids

Emotional Targets
- Kids: “Wow, this looks fun and magical”
- Parents: “This feels premium, safe, and well-designed”

Visual Direction (from Trendy Toy House image)
- Pastel gradients as background atmospheres
- 3D toy-like elements and icons
- Rounded, soft shapes everywhere
- Floating cars, gears, blocks, and toys around key content


3. COLOR PALETTE

Primary Colors
- Primary Pink (Candy Pink) — #FF6FAE
- Sky Blue (Soft Cyan) — #5ED3F3
- Mint (Fresh Mint) — #4EE1C1
- Lemon (Warm Yellow) — #FFD84D

Supporting / UI Colors
- Deep Navy (text) — #1E1E2F
- Soft White (background) — #FAFBFF
- Accent Purple — #8B5CF6
- Card Shadow — rgba(0,0,0,0.08)

Gradients
- Hero Gradient: Pink → Purple → Blue
  - Example: linear-gradient(135deg, #FF6FAE 0%, #8B5CF6 50%, #5ED3F3 100%)
- CTA Gradient: Mint → Cyan
  - Example: linear-gradient(135deg, #4EE1C1 0%, #5ED3F3 100%)
- Card Hover Glow: Soft yellow glow
  - Example: 0 0 24px rgba(255, 216, 77, 0.65)

Usage Notes
- Primary Pink and Sky Blue are dominant for buttons and key accents.
- Mint and Lemon act as supporting accents and hover states.
- Deep Navy is used for primary text on light backgrounds.
- Accent Purple is used for badges, labels, and special CTAs.


4. TYPOGRAPHY

Primary Font
- Poppins (or similar rounded, modern, friendly sans-serif)

Tone
- Rounded
- Modern
- Friendly
- Premium and clean

Font Weights and Usage
- Headings (H1–H2): 600–700
- Sub-headings (H3–H4): 500
- Body text: 400
- CTA buttons: 600

Typographic Rules
- Line height: 1.4–1.6 for body content
- Large, bold headings for each section
- No ultra-thin fonts; keep everything highly legible


5. UI / UX PRINCIPLES

Core Principles
- Large rounded cards (16–24px radius)
- Floating toy-like elements and decorative shapes around key content
- Subtle motion on hover, scroll, and load
- No harsh edges or severe shadows
- Clear visual hierarchy with strong sections and headings
- Mobile-first design with touch-friendly tap targets
- Accessibility-aware:
  - Sufficient color contrast for text
  - Minimum 16px body font size
  - Focus states on interactive elements

Interactions
- Hover effects that gently scale cards or apply glows
- Scroll-based reveals for sections (fade-in, slide-up)
- Button interactions with gradient shifts and soft shadows


6. WEBSITE STRUCTURE (PUBLIC)

6.1 Global Elements
- Top navigation bar:
  - Logo (TrendyToys / toy house mark)
  - Links: Home, Shop, About, Contact
  - Cart icon with item count badge
- Footer:
  - Brand tagline
  - Trust badges (safe toys, mock certifications)
  - Links to basic pages and social icons

6.2 Pages

Home (/) — “Trendy Toy House” Landing
- Hero section:
  - Large toy house illustration inspired by the provided image
  - Hero title, subtitle, and primary CTA (“Shop Trending Toys”)
  - Background gradient and floating toy elements
- “Trending Toys” carousel:
  - Cards with toys, age tags, and mini badges like “New”, “Trending”
- Categories section:
  - Cards for: Cars, Dolls, LEGO-style blocks, Educational, Plush, etc.
- New arrivals:
  - Horizontal carousel of latest toys
- Age-based browsing:
  - Segments: 0–3, 4–6, 7–10, 10+
- Promo banners (demo):
  - Highlight imaginary sale events or bundles (no real backend)
- Testimonials:
  - Mock quotes from “parents” with avatar illustrations

Shop / Catalog (/shop)
- Grid of toys:
  - Responsive grid with cards, images, titles, prices, age ranges
- Filters:
  - Age
  - Category
  - Price range (slider or multi-step)
  - Popular / New toggle
- Sorting:
  - Sort by: Popular, Newest, Price (low to high, high to low)
- Loading states:
  - Skeleton cards when loading or changing filters

Product Details (/product/[id])
- Hero card:
  - Large toy image or 3D-style card
  - Name, price, age range, and primary CTA (“Add to cart”)
- Details:
  - Description
  - “Why kids love this” bullet list
  - Safety and quality highlights
- Ratings:
  - Mock star rating and count
- Related toys:
  - Carousel of similar category or age-range toys

Cart (Demo) (/cart)
- Cart item list:
  - Product image, name, age range
  - Price and quantity controls
- Order summary:
  - Subtotal
  - Demo shipping line (mock)
  - Total
- Proceed button:
  - “Proceed to Checkout” opens a demo modal
- Checkout demo modal:
  - Shows a confirmation-style panel with “This is a demo experience” note

About / Brand Story (/about)
- Sections:
  - Mission: premium, playful toys for modern families
  - Safety philosophy: toy standards, curated quality
  - Design ethos: trendy, modern, colorful

Contact (/contact)
- Simple contact form:
  - Name, email, message
  - Client-side validation only, no real backend submit
- Social links:
  - Icons linking to placeholder socials


7. ADMIN PANEL (DEMO)

Purpose
- Demonstrate control and management UI for TrendyToys content.
- Not a full ERP or production admin.

Admin Entry
- URL: /admin

Pages and Features

Admin Login (Mock) (/admin/login)
- Simple login form:
  - Email / username
  - Password
- Hardcoded demo credentials handled on the client side only.

Dashboard (/admin/dashboard)
- Overview cards:
  - Total products (mock count from in-memory data)
  - Category count
  - Mock orders count
- Recent activity list:
  - Recent mock “orders” or product updates

Product Management (/admin/products)
- Product list:
  - Table or grid of products with quick actions (edit, delete)
- Add product form:
  - Name
  - Price
  - Category
  - Age range
  - Image URL
  - Description
  - Featured toggle
- Edit product:
  - Same form as add, pre-filled from mock data
- Delete (demo):
  - Soft delete in client-side state only

Theme Controls (Demo) (/admin/theme)
- Settings:
  - Toggle light/pastel mode variations
  - Enable/disable homepage hero banners
  - Edit hero headline and subheadline text


8. SYSTEM ARCHITECTURE (DEMO)

High-Level
- UI-first architecture with mock data and APIs.
- Frontend and “backend” run in a single Next.js application with in-memory/mock stores.

Frontend
- Framework:
  - Next.js (App Router)
- Language:
  - TypeScript
- Styling:
  - Tailwind CSS
  - Optional addition of utility classes for gradients and shadows
- UI Components:
  - Shadcn/UI as a base component library (buttons, dialogs, inputs)
  - Custom TrendyToys components for cards and layouts
- Animations:
  - Framer Motion for hero, cards, and transitions

Backend (Demo)
- Mock APIs using Next.js route handlers backed by in-memory data or static JSON.
- No external database required for the demo.
- No real authentication or authorization beyond demo logic.

State Management
- Local state and React context where appropriate.
- Optional use of Zustand or a simple store for:
  - cart state
  - admin product list state


9. FILE STRUCTURE (FRONTEND)

app/
- layout.tsx
  - Global layout, navigation, footer, base providers
- page.tsx
  - Home page (hero, trending, categories, etc.)
- shop/
  - page.tsx (catalog grid + filters)
- product/[id]/
  - page.tsx (product detail)
- cart/
  - page.tsx (demo cart)
- about/
  - page.tsx
- contact/
  - page.tsx
- admin/
  - login/
    - page.tsx
  - dashboard/
    - page.tsx
  - products/
    - page.tsx
  - theme/
    - page.tsx

components/
- ui/
  - Button, Input, Modal, Card, Badge, Tabs, etc.
- layout/
  - Header, Footer, Container, Section wrappers
- toys/
  - ToyCard, ToyGrid, CategoryCard, AgeBadge
- animations/
  - Motion wrappers, AnimatedHero, AnimatedSection

lib/
- mock/
  - products.ts (in-memory product array and helpers)
  - categories.ts
  - testimonials.ts
- utils/
  - formatting helpers, price formatting, etc.

styles/
- globals.css
- theme.css (color tokens, gradients, radii variables)


10. DEMO COMPLETION CRITERIA

A demo is considered DONE when:
- All public pages exist and are wired:
  - Home, Shop, Product, Cart, About, Contact
- Navigation works between all key flows.
- Admin panel pages exist:
  - Login, Dashboard, Products, Theme
- Admin CRUD works with mock data:
  - Add, edit, soft delete products in client-side state.
- UI animations feel premium:
  - Animated hero, card hovers, and scroll reveals.
- Mobile and desktop views are responsive and visually coherent.
- No broken flows:
  - No dead links in primary navigation or main CTAs.
  - No unhandled errors during normal demo flows.


PART B — TAQWIN (CHILD) ACTIVATION UPDATE

TAQWIN GOAL (now.md)
- Primary Goal:
  - Design and build a complete UI-first demo e-commerce website for TrendyToys, aligned strictly with this PRD.

TAQWIN PHASES (phase.md)
- Phase 1 — Design System and Layout
  - Color tokens
  - Typography
  - Layout primitives
  - Animation rules
- Phase 2 — Public Website UI
  - Home
  - Shop
  - Product page
  - Cart
  - About / Contact
- Phase 3 — Admin UI
  - Login
  - Dashboard
  - Product management
  - Theme controls
- Phase 4 — Polish and Demo Readiness
  - Animations
  - Responsiveness
  - UX consistency
  - Final review against completion criteria

TAQWIN TASK GRAPH (task-graph.md)
- DONE
  - PRD established
  - Visual identity locked (based on Trendy Toy House theme and palette)
- ACTIVE
  - Build design system (colors, typography, components, motion rules)
  - Scaffold Next.js app with the file structure defined above
- NEXT
  - Home page UI
  - Product grid UI
  - Product detail UI
- BLOCKED
  - None for the demo UI scope

TAQWIN AUTONOMY RULE (rules.md addition)
- AUTONOMOUS EXECUTION GRANT — DEMO UI MODE
  - TAQWIN is authorized to:
    - design UI components and layouts
    - scaffold the frontend structure
    - use mock data and mock APIs
    - iterate on layout, animations, and UX details
  - Within this demo scope, TAQWIN does not require human confirmation
    to propose or refine UI and code changes, as long as:
    - work remains within this PRD and demo constraints
    - no real payments, logistics, or external integrations are attempted
    - destructive operations or real-world side effects remain under explicit human control

TAQWIN WAKEUP UPDATE (wakeup.md)
- At the top of wakeup.md, prepend:
  - “You are building the TrendyToys demo website.
     Follow docs/prd.md as the source of product truth.
     Prioritize UI quality and UX flows over backend realism.”

