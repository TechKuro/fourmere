# Codex Handoff — Fourmere V2

Date: 19 September 2026  
Repository: `TechKuro/fourmere`  
Branch: `main`  
Status: DESIGN HANDOFF READY / NOT CLEARED FOR PUBLICATION

## Objective
Take the current Fourmere V2 static implementation and turn it into a polished, production-quality review build that faithfully follows `docs/DESIGN_V2.md` and the linked Figma review file.

This is a refinement/implementation task, not permission to expand product scope.

## Start here
Read, in this order:
1. `AGENTS.md`
2. `docs/DESIGN_V2.md`
3. `IMPLEMENTATION.md`
4. `index.html`
5. `styles.css`
6. `privacy.html`

Visual reference:
https://www.figma.com/design/sALZCt0EFcMfX0Nxn5sFWH

## Current implementation
The repository already contains the V2 content and visual direction in plain HTML/CSS.

Current files:
- `index.html` — approved Gate 3 page structure and supplier-facing copy
- `styles.css` — current V2 visual system and responsive layout
- `privacy.html` — deliberate non-publication placeholder
- `IMPLEMENTATION.md` — systems/privacy implementation record

Do not throw the implementation away merely to introduce a framework. A framework is not required for this page.

## Build task
Refine the existing page so the implementation feels intentional and finished across desktop and mobile.

Priorities:
1. Match the Figma/Mobbin-led hierarchy and spacing more closely.
2. Improve typography scale and line length where the rendered page feels awkward.
3. Make the hero/status composition strong at wide desktop widths.
4. Keep the numbered approach rows editorial rather than card-heavy.
5. Make the dark supplier-relationship section feel balanced and easy to scan.
6. Make the 13-point trade criteria readable without feeling like a dense terms page.
7. Ensure the closing email CTA is strong but understated.
8. Polish responsive behaviour around 980px, 720px and small mobile widths.
9. Preserve semantic/accessibility quality.
10. Keep the page very fast and dependency-free.

## Content rules
Treat the current approved proposition as constrained content.

Do not add or imply:
- existing supplier partnerships;
- customers or sales history;
- authorised-dealer status;
- stock ownership;
- warehouse or fulfilment capability;
- delivery times;
- warranty/returns promises;
- product/category expertise not already supported;
- category-specific packaging positioning in the public headline.

You may make small copy edits only where needed for grammar, accessibility or layout. Do not materially strengthen claims.

## Technical rules
Keep:
- plain HTML/CSS unless there is a compelling technical reason otherwise;
- no JavaScript unless necessary for a specific accessibility/usability requirement;
- no external fonts;
- no third-party scripts/media;
- no analytics/pixels;
- no cookies/localStorage/sessionStorage;
- no APIs/database;
- mailto-only contact;
- `noindex,nofollow`;
- privacy holding page clearly marked as not publication-ready.

Do not deploy or alter DNS.

## Legal identity
Required public trading disclosure:
Fourmere is operated by Exilier Limited, company number 16809898, registered in England and Wales. Registered office: 33 Copper Beech Road, Nuneaton, England, CV10 9FB.

Do not invent any additional legal status or trading claim.

## Definition of done
A change is ready for Aster/Founder review when:
- desktop render at ~1440px is visually polished;
- mobile render at ~390px is visually polished;
- no horizontal overflow exists;
- navigation anchors work;
- mailto links target `aster@fourmere.co.uk`;
- headings remain semantically ordered;
- keyboard focus is visible;
- contrast is reasonable;
- no prohibited tracking or external runtime dependencies were added;
- `noindex,nofollow` remains;
- privacy placeholder remains explicitly non-publication-ready;
- no Gate 4/5/6 functionality was introduced;
- no deployment was performed.

## Expected handback
When finished, provide:
- concise summary of design/implementation changes;
- list of files changed;
- desktop/mobile verification notes;
- any unresolved visual or accessibility issues;
- confirmation that no deployment, tracking or scope expansion occurred.

The next decision belongs to Aster/Project Menice review, not to Codex.
