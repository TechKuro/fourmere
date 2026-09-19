# AGENTS.md

## Project
Fourmere is a Project Menice Gate 3 supplier-credibility website for a UK specialist ecommerce venture.

Before changing code, read:
1. `docs/POSITIONING_V3.md`
2. `docs/CODEX_HANDOFF.md`
3. `docs/DESIGN_V2.md`
4. `IMPLEMENTATION.md`
5. the current `index.html`, `styles.css`, and `privacy.html`

## Source-of-truth order
1. Founder / Project Menice gate constraints recorded in this repository
2. `docs/POSITIONING_V3.md` — current public-positioning authority
3. Growth-approved Fourmere copy pack, once added to the repository
4. `docs/CODEX_HANDOFF.md`
5. `docs/DESIGN_V2.md` — visual/layout baseline only where copy-specific guidance conflicts
6. `IMPLEMENTATION.md`
7. current implementation

The 19 September 2026 positioning correction supersedes earlier copy-specific guidance that foregrounded Fourmere as a venture, described the business as being built/currently validating, or exposed “Current phase — Supplier validation” publicly.

Do not silently relax a gate or business constraint to improve the design. Do not silently weaken approved commercial copy merely to disclose internal validation status.

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

## Public copy direction
Fourmere should read as a real, confident UK specialist retailer focused on professional and technical products.

Use present-tense commercial language from `docs/POSITIONING_V3.md` and the Growth-approved copy pack. Internal Project Menice gate status is not public marketing copy unless specifically required.

The current `index.html` copy is a working implementation, not final approved public copy. Do not preserve stale wording simply because it already exists in the page.

## Design intent
The V2 visual direction remains:
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
