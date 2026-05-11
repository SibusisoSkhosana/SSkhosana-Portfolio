# PHASE 3 — Design System Consistency (work plan + acceptance)

## Goal
Unify premium visual polish across the whole portfolio by re-establishing a single set of UI “tokens” and component conventions (card radius, border/glow intensity, typography hierarchy, glass panel style, animation timing).

## Current state (known)
- Global glass helpers exist in `src/index.css` (`.glass`, `.glass-light`, token classes).
- Many sections use ad-hoc Tailwind text colors (`text-gray-*`, `text-white`) and ad-hoc card/border/glow patterns.

## Phase 3 tasks
### 3.1 Create visual tokens (CSS layer)
Add in `src/index.css` (preferably under `@layer base` / `@layer components`):
- `.radius-card` (single border-radius used everywhere)
- `.border-strength` (consistent border alpha)
- `.glass-card` (standard frosted background + border + blur)
- `.section-title` utility
- `.section-subtitle` utility
- `.muted-text` utility (theme-aware via CSS vars)
- `.glass-card-hover` utility (consistent hover border + glow)

### 3.2 Enforce consistent animation timing
- Standardize framer-motion transitions used across components (duration + easing), e.g.
  - cards in: 0.6–0.8s easeOut
  - hovers: consistent scale (1.02 / 1.05)
- If needed, create a small shared helper in-code (optional) but avoid refactoring too broadly during Phase 3.

### 3.3 Replace “random” UI class strings in the 9 sections
For each section component:
- Replace `glass-light rounded-lg p-* border ...` patterns with standardized class(es) (`glass-card`), preserving existing padding.
- Replace repeated underline bars with a shared utility (same width and gradient intensity).
- Ensure section titles use the same typography scale.

## Acceptance criteria
- Cards/containers look cohesive (same radius + border/glow style across all sections)
- Section headings/underlines are consistent
- Glass panels have matching opacity/blur/border
- No layout drift (only style tokens + consistent classes)

## Next phases
- Phase 4: theme system fixes (remove hardcoded light-only colors; eliminate imperative dark detection in Contact/Footer)

