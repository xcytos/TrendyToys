Decision Record

This file captures important decisions and trade-offs for TrendyToys.

Purpose:
- prevent re-litigation
- avoid circular debates
- preserve reasoning

Format for each decision:
- decision
- alternatives considered
- why chosen
- consequences (good and bad)

Seed decision:
- Decision: adopt canonical TAQWIN (child) v1.0 structure from context.md as the cognition layer
- Alternatives: operate without a structured cognition layer; use ad-hoc notes outside the repo
- Why chosen: improves continuity, reduces hallucination risk, and centralizes AI-facing state
- Consequences: requires discipline to keep .taqwin/ updated; adds a small maintenance surface

- Decision: define TrendyToys as a UI-first demo e-commerce website for toys
- Alternatives: leave domain undefined; treat TrendyToys as a generic project
- Why chosen: the PRD in docs/prd.md explicitly specifies the domain and demo nature
- Consequences: domain assumptions now have a written source; backend and payment scope are intentionally limited to demo behavior

- Decision: use Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and Shadcn/UI
- Alternatives: single-page React app; different CSS framework; different animation library
- Why chosen: stack balances modern developer experience, component reusability, and high-quality UI motion for the demo
- Consequences: future backend or scaling work should integrate with this stack or justify divergence in a new decision entry

- Decision: lock visual design tokens in .taqwin/design-tokens.md
- Alternatives: define tokens ad hoc inside styles or components
- Why chosen: ensures consistent use of color, typography, spacing, radius, shadows, and motion across all UIs
- Consequences: changes to visual language must go through decisions.md and keep design-tokens.md authoritative

- Decision: define canonical UI components in .taqwin/ui-inventory.md
- Alternatives: allow components to emerge organically without a central inventory
- Why chosen: reduces design drift, limits repeated reinvention, and anchors component naming and purpose
- Consequences: new component families require updates to ui-inventory.md and corresponding decision entries
