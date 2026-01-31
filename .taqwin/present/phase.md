Current Phase

Define for the TrendyToys repository:
- active phase name
- phase goal
- allowed work
- explicitly disallowed work

Phases for TrendyToys demo:
- Phase 1 — Design System and Layout
  - Goal: define color tokens, typography, layout primitives, and animation rules for TrendyToys
  - Entry condition: docs/prd.md exists and design-tokens.md is present and accepted
  - Allowed work: design system creation, component inventory, layout wireframes, animation guidelines
  - Exit condition: design-tokens.md and ui-inventory.md are complete, referenced from synthesis.md, and no open design drift is recorded
  - Disallowed work: implementing full page flows without the design system in place

- Phase 2 — Public Website UI
  - Goal: implement Home, Shop, Product, Cart, About, and Contact UIs according to docs/prd.md
  - Entry condition: Phase 1 exit condition satisfied; app scaffold for public routes created
  - Allowed work: build pages, components, mock data flows, and navigation
  - Exit condition: all public pages exist, navigation works, and flows match demo completion criteria for public site
  - Disallowed work: adding real payments, accounts, or non-demo integrations

- Phase 3 — Admin UI
  - Goal: implement admin Login, Dashboard, Products, and Theme controls as demo UIs
  - Entry condition: Phase 2 exit condition satisfied; design system components usable in admin context
  - Allowed work: admin navigation, forms, mock CRUD, and visual dashboards
  - Exit condition: admin pages exist, mock CRUD works, and admin flows are stable for demo
  - Disallowed work: building production-grade auth or admin backends

- Phase 4 — Polish and Demo Readiness
  - Goal: refine animations, responsiveness, UX consistency, and validate against completion criteria
  - Entry condition: Phases 2 and 3 exit conditions satisfied
  - Allowed work: tuning motion, layout fixes, visual polish, and UX refinements
  - Exit condition: all demo completion criteria in docs/prd.md are met
  - Disallowed work: extending scope beyond demo criteria without explicit decision records

Active phase:
- Phase name: Phase 1 — Design System and Layout
- Phase goal: establish a robust TrendyToys design system as the foundation for all UI
- Allowed work: all work listed under Phase 1 above
- Disallowed work: jumping directly to feature implementation in Phases 2–3 before Phase 1 foundations exist

Phases exist to prevent accidental scope explosion,
not to slow progress.
