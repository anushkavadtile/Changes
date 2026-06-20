# Add Tailwind Config for New Palette

## Goal
Integrate Brick Red, Deep Teal, and Muted Gold palettes into Tailwind so utility classes like `bg-brick-600`, `text-teal-500`, `border-gold-700`, etc., are generated and can be used across the site.

## Steps
1. Create or update `tailwind.config.js` in the project root.
2. Extend `theme.colors` with `brick`, `teal`, and `gold` objects (shades 50‑900) using the provided HEX values.
3. Preserve existing custom colors (`emergency`, `medical`, `info`, `alert`) as aliases if needed.
4. Ensure `content` includes all TSX/JSX files for proper purge.
5. Run `npm run lint` and `npm run build` to verify no errors and that new utilities are generated.
6. Optionally replace any remaining old color classes with the new ones.

## Verification
- Check compiled CSS for classes like `bg-brick-600`, `text-teal-500`, `border-gold-700`.
- Run `npm run dev` and visually confirm colors on Services, About, and How It Works pages.
- Ensure lint passes with zero errors.

## User Review
Please confirm this plan or suggest changes.
