# Unslop pass

Done with the unslop skill (unslop by Damir Sokolovsky, @heydamir, CC BY 4.0) on November 24, 2026.

## Audit

Light slop: a designed letterpress palette and type pairing with a few tells left.

- Pill badge above the headline ("Booking projects for spring 2027") with an `animate-ping` dot: `src/app/page.tsx`, hero
- Decorative hero art (accent orb, dashed ring, arcs, "EST. 2017" and "45.52 N"): `src/app/page.tsx`, hero
- Dotted grain wash behind the hero: `.grain` in `src/app/globals.css`
- Italic role line under the name, italic accent `<em>` in the About and Contact headings, italic pull quotes: `page.tsx`, `globals.css`
- Uppercase tracked mono labels (section labels, project meta, facts, dates, skill groups, case study details, "All work", 404): `page.tsx`, `work/[slug]/page.tsx`, `not-found.tsx`
- `hover:-translate-y-0.5` on buttons and `group-hover:scale-[1.03]` on covers: `page.tsx`, `Header.tsx`, `ContactForm.tsx`
- Pills everywhere (buttons, nav, theme toggle, skill tags)
- Trailing periods on headlines ("...all day.", "engineering-led.", "This page wandered off.")
- A `<` arrow on the case study back link
- 600 weight on job titles

## Direction

- Product: the portfolio of Ines Calder, an independent product engineer in Portland, for teams hiring someone to design and build tools people use all day
- Character: exact, unhurried, warm like a print shop
- World: a letterpress studio: cream stock, black ink, one vermilion, proof sheets on the bench
- Moments: the four project covers, which carry all the color, echoed as ink swatches in the hero index
- Signature: printer's crop marks at the corners of every proof (the hero index card and the project covers), nowhere else

## Passes

- Spacing: hero composed to the viewport with the text centered against the index card; consistent 8 and 12 steps in the index rows
- Color: grain wash removed; accent kept for section numbers, links and the contact email only
- Icons: none needed; the arrow glyph on the back link removed
- Copy: no trailing periods on headlines; "Back to all work"; shorter form placeholder
- Type: no italic, no uppercase tracking, sentence case mono labels, job titles at 500
- Layout: decorative hero art replaced by a proof card with availability and an index of the selected work (same projects, linked)
- Details: buttons and controls at 8px radius, covers at 4px with crop marks, skills as plain text lists
- Visuals: covers kept as the color moment
- Motion: hover lift and cover zoom removed, press scale only, one ease-out curve, entrance shortened to 0.45s

screenshot-2: Harborline Dispatch case study page. screenshot-3: Case studies section on the home page.
