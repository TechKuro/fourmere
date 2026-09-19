# Fourmere V3 review build — verification

Date: 19 September 2026  
Status: READY FOR FOUNDER REVIEW / NOT CLEARED FOR PUBLICATION

## Copy and scope

- Read the supplied Growth Strategy Google Doc and integrated its public copy pass.
- Removed “venture”, “being built”, “currently validating” and the public “Current phase — Supplier validation” module.
- Updated title, description, navigation, hero, approach, supplier proposition, About, Trade Partners, Contact and footer copy.
- Preserved the Gate 3 boundary, exact legal disclosure, mailto-only contact and `noindex,nofollow`.
- Kept all 14 topics from the Growth copy pack as separate trade-discussion items.

## Local imagery

- Added `assets/material-study-hero.webp` and `assets/material-study-detail.webp`, plus 560px/600px responsive variants.
- All HTML image references are relative to the website (`assets/...`); no image URL points to a remote host.
- Browser verified both images loaded from the local server and selected the small responsive variants at 390px.
- Images are abstract material studies, not product catalogue shots or imagery that implies stock, facilities, warehouses, named suppliers or operational capability.

## Browser checks

- Local server: `python3 -m http.server 4173 --bind 127.0.0.1`.
- Mobile viewport: 390px wide; both images loaded; document scroll width matched viewport width exactly (390px); no horizontal overflow.
- Desktop layout measurement: 1440px document and body width; hero image rendered at approximately 520px wide; no horizontal overflow.
- Accessibility tree: one H1, ordered H2/H3/H4 headings, visible navigation and descriptive CTA names.
- Legacy status module absent from the DOM.
- Fourteen trade discussion list items present.
- `git diff --check` passes.

## Technical checks

- No JavaScript, forms, analytics, cookies, client storage, runtime APIs, remote fonts or third-party scripts introduced.
- Generated PNG sources were converted to optimised WebP assets: approximately 160KB/104KB full-size and 37KB/30KB responsive variants.
- No deployment was performed.

## Presentation refinement verification — 19 September 2026

Copy source: [Growth Strategy copy pass](https://docs.google.com/document/d/1VtdkGJWRO-ZsxRKZNc0-SEctGz6GwOjIZZWHQL1uWww/edit). This refinement removes only the duplicate hero positioning sentence and relabels the discussion disclosure; the proposition and all 14 topics remain intact.

- Inspected complete 1440×1000 desktop hero and Trade Partners renders, and 390×844 mobile hero and collapsed/expanded discussion renders. Both local images loaded.
- Corrected a tablet hero-image overflow caused by intrinsic aspect sizing; final checks at 320, 390, 480, 719, 720, 721, 800, 979, 980, 981, 1100, 1440 and 1920px all returned document width equal to viewport width.
- Expanded disclosure also fits at 390px and 1440px. Enter opens it, Space closes it, and the accessibility tree reports the correct state. Focus has a solid visible outline.
- Skip link moves focus to main. Primary navigation links reach Home, About, Trade Partners and Contact, with headings clear of the sticky header. All fragment targets resolve.
- Computed foreground/background contrast checks found no text ratios below 4.5:1; minimum measured ratio was 4.81:1. This is a targeted browser check, not a formal accessibility audit.
- No JavaScript, external assets, forms or tracking were added. Publication controls and privacy holding page remain unchanged.
- Local review only; no deployment.

## Category-neutral imagery follow-up

- Replaced both displayed images with local `selection-hero` and `information-detail` WebP assets and responsive variants.
- Inspected desktop hero and supplier-section compositions at 1440px and hero crop at 390px. Both new images loaded successfully; mobile selected the small variants, with document width equal to the 390px viewport.
- Full images are approximately 124KB and 107KB; mobile variants approximately 36KB and 26KB. Dimensions and image layout slots are unchanged.
- Generated using the built-in image tool; no external runtime requests introduced. No deployment.
