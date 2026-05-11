# Phase 2 Shell Normalization (reference)

Goal: eliminate horizontal drift + inconsistent section padding/max-width.

Proposed shell:
- Every section root: `section id=... className="relative pt-24 pb-20 px-4"` (no `min-h-screen` unless required for cinematic full-screen sections)
- Every section inner wrapper: `div className="mx-auto w-full max-w-6xl"`
- Section headings remain centered within inner wrapper.
- Hero uses flex centering but should follow same max-width.

Fixed-navbar offset:
- Navbar has `py-4` + no explicit height; approximate using `pt-24`.

