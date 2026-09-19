# Codex Handoff — Fourmere V3

Date: 19 September 2026  
Repository: `TechKuro/fourmere`  
Branch: `main`  
Status: POSITIONING CORRECTION ACTIVE / REVIEW BUILD ONLY / NOT CLEARED FOR PUBLICATION

## Objective

Refine the existing Fourmere V2 implementation into a polished V3 review build that preserves the strong visual system while applying the 19 September Founder/Director public-positioning correction.

This is a Gate 3 supplier-credibility asset, not permission to expand into an ecommerce store.

The key correction is commercial tone: Fourmere must present confidently in present-tense language as a real UK specialist retailer/business. Internal Project Menice validation status must not be used as public marketing copy merely because it is internally true.

## Start here

Read, in this order:

1. `AGENTS.md`
2. `docs/POSITIONING_V3.md`
3. the Growth-approved Fourmere copy pack, once present in the repository
4. `docs/DESIGN_V2.md`
5. `IMPLEMENTATION.md`
6. `index.html`
7. `styles.css`
8. `privacy.html`

Visual reference:
https://www.figma.com/design/sALZCt0EFcMfX0Nxn5sFWH

If copy-specific guidance in `docs/DESIGN_V2.md` or the current implementation conflicts with `docs/POSITIONING_V3.md`, V3 wins.

## Current implementation

The repository already contains a useful V2 static implementation in plain HTML/CSS.

Treat:
- `styles.css` and the V2 visual hierarchy as the implementation baseline;
- `index.html` structure as reusable where appropriate;
- the existing public copy as **working/stale copy, not final approved wording**;
- `privacy.html` as a deliberate non-publication placeholder;
- `IMPLEMENTATION.md` as the systems/privacy implementation record.

Do not throw away working visual/technical implementation merely to introduce a framework.

## Positioning correction to implement

Remove or replace public-facing internal-status language when the approved copy provides the alternative.

In particular, do not present:
- “Current phase — Supplier validation”;
- Project Menice gate labels;
- “currently validating”;
- “being built”;
- “venture” where “retailer” or “business” is the accurate public description;
- “we aim to” / “we intend to” where a truthful present-tense statement is available.

Working positioning authority:

> Fourmere is a UK specialist retailer focused on professional and technical products.

The Growth Strategy department owns the market-facing copy pass. **Do not invent a new commercial story while waiting for that copy.**

If the Growth-approved copy pack has not yet been committed, you may:
- remove clearly superseded public validation-status modules/labels;
- prepare the structure for the new copy;
- refine visual/responsive/accessibility implementation;
- leave clearly copy-dependent sections unchanged for the next review.

Do not fabricate placeholder claims just to complete a section.

## Truth boundary

Confidence is authorised. Fabrication is not.

Do not add or imply unsupported:
- existing supplier partnerships;
- customers, orders, turnover or sales history;
- authorised-dealer or official-partner status;
- supplier logos or named-brand affiliation;
- stock ownership;
- warehouse or fulfilment capability;
- delivery times;
- warranty/returns promises;
- team size, offices, facilities or scale;
- testimonials, reviews or accreditations;
- product/category expertise not supported by evidence.

## Build task

Preserve and improve the V2 visual strengths while applying the corrected positioning.

Priorities:
1. Remove the public supplier-validation/status framing.
2. Preserve the editorial B2B / technical-retailer visual direction.
3. Improve typography scale, line length and spacing where rendered output needs polish.
4. Keep the numbered approach rows editorial rather than generic feature cards.
5. Keep the supplier-relationship section commercially strong and easy to scan.
6. Ensure Trade Partners content feels like a supplier proposition, not an internal due-diligence checklist.
7. Keep the closing trade email CTA strong and professional.
8. Polish responsive behaviour around 980px, 720px and small mobile widths.
9. Preserve semantic/accessibility quality.
10. Keep the page fast and dependency-light.

## Technical rules

Keep:
- plain HTML/CSS unless there is a compelling technical reason otherwise;
- no JavaScript unless necessary for a specific accessibility/usability requirement;
- no external fonts;
- no third-party scripts/media;
- no analytics/pixels;
- no cookies/localStorage/sessionStorage;
- no APIs/database;
- mailto-only contact to `aster@fourmere.co.uk`;
- `noindex,nofollow` until publication is separately approved;
- privacy holding page clearly marked as not publication-ready.

Do not deploy or alter DNS.

## Legal identity

Retain the currently approved legal disclosure exactly unless Finance & Governance supplies a replacement:

Fourmere is operated by Exilier Limited, company number 16809898, registered in England and Wales. Registered office: 33 Copper Beech Road, Nuneaton, England, CV10 9FB.

Do not invent additional legal status or trading claims.

## Definition of done

A V3 change is ready for Aster/Founder review when:
- V3 positioning authority has been followed;
- no public “Current phase — Supplier validation” or equivalent internal gate/status block remains;
- Growth-approved copy has been used wherever available, without unsupported strengthening;
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
- concise summary of positioning/design/implementation changes;
- list of files changed;
- exact copy source used;
- desktop/mobile verification notes;
- any unresolved copy, visual, legal or accessibility issues;
- confirmation that no deployment, tracking, supplier outreach or scope expansion occurred.

The next publication decision belongs to Aster / Project Menice Director review and the Founder release controls.
