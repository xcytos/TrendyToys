Design Tokens — Canonical Contract

This file is the single source of truth for visual tokens.
These tokens are canonical and non-negotiable unless a new decision
is recorded in memory/decisions.md.


1. Color Tokens

Palette sources:
- Derived from Trendy Toy House theme and docs/prd.md.

Semantic tokens:
- color.background: #FAFBFF
- color.surface: #FFFFFF
- color.surface-muted: #F4F6FF
- color.primary: #FF6FAE
- color.primary-strong: #E25595
- color.primary-soft: rgba(255, 111, 174, 0.12)
- color.secondary: #5ED3F3
- color.secondary-soft: rgba(94, 211, 243, 0.12)
- color.accent-mint: #4EE1C1
- color.accent-yellow: #FFD84D
- color.accent-purple: #8B5CF6
- color.text-main: #1E1E2F
- color.text-muted: rgba(30, 30, 47, 0.7)
- color.text-soft: rgba(30, 30, 47, 0.5)
- color.border-subtle: rgba(30, 30, 47, 0.08)
- color.border-strong: rgba(30, 30, 47, 0.16)
- color.focus-ring: #5ED3F3

Gradients:
- gradient.hero: linear-gradient(135deg, #FF6FAE 0%, #8B5CF6 50%, #5ED3F3 100%)
- gradient.cta: linear-gradient(135deg, #4EE1C1 0%, #5ED3F3 100%)
- gradient.surface-soft: linear-gradient(135deg, #FAFBFF 0%, #F4F6FF 100%)

Status colors (demo only):
- color.status-success: #22C55E
- color.status-warning: #FACC15
- color.status-danger: #EF4444


2. Typography Scale

Font family:
- font.family.base: "Poppins", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

Heading scale:
- font.h1:
  - size: 40px
  - line-height: 1.1
  - weight: 700
- font.h2:
  - size: 32px
  - line-height: 1.15
  - weight: 600
- font.h3:
  - size: 28px
  - line-height: 1.2
  - weight: 600
- font.h4:
  - size: 24px
  - line-height: 1.25
  - weight: 500
- font.h5:
  - size: 20px
  - line-height: 1.3
  - weight: 500
- font.h6:
  - size: 18px
  - line-height: 1.35
  - weight: 500

Body scale:
- font.body:
  - size: 16px
  - line-height: 1.5
  - weight: 400
- font.body-small:
  - size: 14px
  - line-height: 1.5
  - weight: 400

Support text:
- font.caption:
  - size: 12px
  - line-height: 1.4
  - weight: 400
- font.button:
  - size: 15px
  - line-height: 1.4
  - weight: 600


3. Spacing Scale

Base unit:
- 4px

Tokens:
- space.0: 0px
- space.1: 4px
- space.2: 8px
- space.3: 12px
- space.4: 16px
- space.5: 20px
- space.6: 24px
- space.7: 32px
- space.8: 40px
- space.9: 48px
- space.10: 64px

Usage:
- use space.2–space.4 for inner padding of controls
- use space.5–space.8 for section padding and gaps


4. Border Radius Scale

Tokens:
- radius.none: 0px
- radius.xs: 8px
- radius.sm: 12px
- radius.md: 16px
- radius.lg: 20px
- radius.xl: 24px
- radius.full: 9999px

Usage:
- buttons: radius.sm or radius.md
- cards: radius.lg
- pill badges and chips: radius.full


5. Shadow and Elevation

Tokens:
- shadow.none: none
- shadow.xs: 0 2px 4px rgba(15, 23, 42, 0.06)
- shadow.sm: 0 4px 8px rgba(15, 23, 42, 0.08)
- shadow.md: 0 10px 20px rgba(15, 23, 42, 0.10)
- shadow.lg: 0 16px 32px rgba(15, 23, 42, 0.14)
- shadow.glow-yellow: 0 0 24px rgba(255, 216, 77, 0.65)

Usage:
- default cards: shadow.sm
- primary hero cards: shadow.md
- hover states: move up one level or apply shadow.glow-yellow on key cards


6. Animation Timing and Easing

Durations:
- motion.fast: 150ms
- motion.normal: 220ms
- motion.slow: 350ms
- motion.hero: 600ms

Easing:
- easing.standard: cubic-bezier(0.25, 0.8, 0.25, 1)
- easing.decelerate: cubic-bezier(0.2, 0.8, 0.2, 1)
- easing.bounce-soft: cubic-bezier(0.34, 1.56, 0.64, 1)

Usage:
- buttons and simple hovers: motion.fast with easing.standard
- card hover and section transitions: motion.normal with easing.decelerate
- hero and decorative motion: motion.hero with easing.bounce-soft in moderation


Change Policy

- Any modification to these tokens must be accompanied by:
  - a new entry in memory/decisions.md
  - updates to docs/prd.md and styles/theme.css if applicable
- Components and layouts must reference these semantic tokens instead of ad-hoc values.
