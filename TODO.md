# TODO - Tailwind v4 Migration Fixes

- [ ] Fix Tailwind import in `src/index.css` to correct v4 syntax
- [ ] Remove/retire `tailwind.config.js` (v3 format) and switch to v4-compatible config mechanism if needed
- [ ] Fix dark-mode CSS selectors: replace `dark {}` with `.dark {}` and ensure `dark .class` becomes `.dark .class`
- [ ] Replace hardcoded light-only classes (`text-gray-*`, `text-white`, etc.) with theme-token or dark-safe equivalents across sections
- [ ] Verify `container` usage and update any v3 assumptions to v4 behavior
- [ ] Fix Skills section: ensure `containerVariants` is correctly wired (add missing prop/variants where needed)
- [ ] Run build/dev checks to confirm no Tailwind compilation issues

