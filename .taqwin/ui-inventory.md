UI Component Inventory — Canonical List

This file defines the canonical UI components for the TrendyToys demo.
Components and variants listed here are authoritative for the demo.
New component families require an entry in memory/decisions.md.


1. Button

Purpose:
- Primary interactive element for actions such as CTAs, form submits, and navigation triggers.

Variants allowed:
- primary
- secondary
- ghost
- outline
- icon-only
- destructive (demo only, admin context)

Non-goals:
- Must not become a layout container.
- Must not embed complex content (carousels, long text).
- Must not diverge into many untracked visual styles.


2. Card

Purpose:
- Group related content in a surface with background, padding, and elevation.

Variants allowed:
- default (surface)
- elevated (stronger shadow)
- pastel (soft gradient background)

Non-goals:
- Must not contain page-level layout responsibilities.
- Must not hardcode toy-specific content; use children.


3. ProductTile

Purpose:
- Represent a single toy in grids and carousels (image, name, price, age badge).

Variants allowed:
- catalog (grid item)
- carousel (compact)
- related (smaller, secondary emphasis)

Non-goals:
- Must not handle cart logic beyond emitting events or callbacks.
- Must not embed full product descriptions or reviews.


4. Navbar

Purpose:
- Global top navigation for public pages with logo, links, and cart entry.

Variants allowed:
- standard desktop
- compact mobile with menu toggle

Non-goals:
- Must not own routing logic beyond linking.
- Must not include admin navigation items; admin has its own shell.


5. Footer

Purpose:
- Global footer with brand, trust badges, secondary links, and social icons.

Variants allowed:
- default public footer

Non-goals:
- Must not become a second navigation bar with primary CTAs.


6. Carousel

Purpose:
- Horizontally scrollable lists of ProductTile or simple cards for trending toys, new arrivals, or related items.

Variants allowed:
- product-carousel
- testimonial-carousel

Non-goals:
- Must not implement complex infinite scroll or virtualized lists for this demo.
- Must not fetch data; receives items from parent.


7. FilterPanel

Purpose:
- Present filters and sort controls for catalog pages.

Variants allowed:
- sidebar (desktop)
- collapsible sheet or drawer (mobile)

Non-goals:
- Must not directly own data fetching; emits filter/sort state to parent.


8. Modal

Purpose:
- Overlay for secondary flows such as demo checkout confirmation or admin edit forms.

Variants allowed:
- centered dialog
- full-width on mobile

Non-goals:
- Must not become a permanent layout container.
- Must not hide back navigation or trap the user without clear close actions.


9. AdminTable

Purpose:
- Tabular listing of admin entities (products) with simple actions.

Variants allowed:
- products-table

Non-goals:
- Must not implement spreadsheet-level editing.
- Must not manage complex bulk operations beyond simple row actions.


Change Policy

- Additions:
  - New component families must be documented here and have a corresponding decision entry.
- Modifications:
  - Changing purpose or variants requires updating docs/prd.md and memory/decisions.md.
- Implementations:
  - All UI implementations must map to one of these canonical components or recorded extensions.
