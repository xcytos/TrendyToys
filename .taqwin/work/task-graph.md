Task Graph

Represent work as a graph, not a flat list.

For each task capture:
- status (done, active, blocked, future)
- dependencies
- why it exists
- what unblocks it

Current graph:
- Task: bootstrap .taqwin/ cognition layer for TrendyToys
  - Status: done
  - Dependencies: context.md canonical TAQWIN layout
  - Why: enable persistent AI cognition and continuity
  - Unblocked by: initial creation of .taqwin/ and core files

- Task: establish TrendyToys PRD and visual identity
  - Status: done
  - Dependencies: docs/prd.md, Trendy Toy House theme
  - Why: provide a single source of truth for the demo website
  - Unblocked by: completion of PRD and palette/typography decisions

- Task: define design tokens and UI inventory in TAQWIN
  - Status: done
  - Dependencies: docs/prd.md, design-tokens.md, ui-inventory.md
  - Why: lock canonical visual and component decisions for demo execution
  - Unblocked by: existence of PRD and initial brand decisions

- Task: build design system (colors, typography, components, motion) in code
  - Status: active
  - Dependencies: design-tokens.md, ui-inventory.md
  - Why: create a reusable foundation for all public and admin UIs
  - Unblocked by: none

- Task: scaffold Next.js app with defined file structure
  - Status: active
  - Dependencies: PRD, task above completed at least at skeleton level
  - Why: provide the skeleton for pages, components, and routes
  - Unblocked by: none

- Task: implement public website UI (Home, Shop, Product, Cart, About, Contact)
  - Status: future
  - Dependencies: design system and app scaffold
  - Why: build the primary TrendyToys shopping experience
  - Unblocked by: completion of design system and basic scaffold

- Task: implement admin UI (Login, Dashboard, Products, Theme)
  - Status: future
  - Dependencies: design system and app scaffold
  - Why: demonstrate management capabilities for the demo
  - Unblocked by: completion of design system and basic scaffold

- Task: polish animations, responsiveness, and UX
  - Status: future
  - Dependencies: core public and admin UIs
  - Why: achieve a premium, demo-ready experience
  - Unblocked by: primary flows implemented and stable
