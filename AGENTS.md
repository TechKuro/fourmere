# AGENTS.md

## Project
Fourmere is a Project Menice Gate 3 supplier-credibility website for a UK specialist ecommerce venture.

Before changing code, read:
1. `docs/CODEX_HANDOFF.md`
2. `docs/DESIGN_V2.md`
3. `IMPLEMENTATION.md`
4. the current `index.html`, `styles.css`, and `privacy.html`

## Source-of-truth order
1. Founder / Project Menice gate constraints recorded in this repository
2. `docs/CODEX_HANDOFF.md`
3. `docs/DESIGN_V2.md`
4. `IMPLEMENTATION.md`
5. current implementation

Do not silently relax a gate or business constraint to improve the design.

## Current task boundary
This is a Gate 3 supplier-credibility asset, not a live ecommerce store.

Allowed:
- improve the static site implementation;
- improve responsive behaviour, accessibility, semantic HTML, typography, spacing and visual polish;
- refactor HTML/CSS where it reduces complexity without changing the approved proposition;
- add local development/test tooling only when it is genuinely useful and does not create production dependencies.

Not allowed:
- product catalogue or product-specific merchandising;
- SKU pricing, cart, checkout, payments or customer accounts;
- contact forms;
- analytics, advertising pixels, behavioural tracking, cookies or non-essential client storage;
- unsupported claims about suppliers, customers, stock, fulfilment, delivery, warranty, authorised-dealer status, sales history or category expertise;
- external supplier outreach, follow-up, trade-account applications or campaign release;
- DNS, hosting or production deployment unless separately authorised.

## Technical constraints
- Prefer a zero-dependency static implementation.
- Current production shape is plain HTML + CSS.
- No external fonts, third-party scripts, remote images or runtime APIs.
- Contact remains mailto-only: `aster@fourmere.co.uk`.
- Preserve `noindex,nofollow` until publication is separately approved.
- `privacy.html` is a holding page and must not be represented as publication-ready.

## Design intent
The V2 direction is:
- editorial B2B;
- technical-distributor restraint;
- premium but not flashy;
- strong information hierarchy;
- generous whitespace;
- restrained neutral palette with muted green accent;
- credibility through clarity and legal identity, never fabricated social proof.

Use the Figma file and Mobbin references listed in `docs/DESIGN_V2.md` as visual guidance. They are references, not templates to copy.

## Verification
For material visual changes:
- render at desktop (around 1440px) and mobile (around 390px);
- check for overflow, clipped text, broken anchors and poor contrast;
- keyboard-check navigation and interactive links;
- verify no new network-dependent assets or tracking were introduced;
- compare the result with the V2 design intent.

Do not deploy. Leave the repository in a reviewable state and summarize changed files and verification performed.
