# Fourmere V2 review build — verification

Date: 19 September 2026  
Status: READY FOR FOUNDER REVIEW / NOT CLEARED FOR PUBLICATION

## Implementation

- Refined the existing plain HTML/CSS site; no framework or production dependencies.
- Rebalanced the hero into an editorial headline with muted green serif emphasis and a compact warm-paper supplier-validation panel.
- Reduced oversized section headings, improved line height and reading measure, and retained numbered editorial approach rows.
- Rebuilt supplier benefits as a number/title/description layout so descriptions are no longer squeezed into narrow desktop columns.
- Distinguished the About lead paragraph from its longer supporting explanation.
- Spaced all 13 trade criteria into an open two-column desktop list, retaining row-major reading order and single-column mobile flow.
- Refined the closing email CTA, wordmark treatment, legal footer and privacy holding-page typography.
- Added explicit focus indicators, a focusable skip-link destination, sticky-header anchor clearance, decorative-symbol hiding and a labelled footer navigation landmark. Removed smooth scrolling; no motion is required.

Changed files: `index.html`, `styles.css`, `privacy.html`, `IMPLEMENTATION.md`, and this verification record.

## Reference review

Read AGENTS.md, CODEX_HANDOFF.md, DESIGN_V2.md, IMPLEMENTATION.md and all three original production files before editing.

Inspected the [Figma reference](https://www.figma.com/design/sALZCt0EFcMfX0Nxn5sFWH), including desktop node 1:2 through design context. The supplied frame has ten-pixel text boxes, clipped sections and overlapping text. Its structure and written design intent were used, rather than reproducing those defects. The documented system serif/sans typography remains authoritative over the Figma Inter rendering.

Additional Mobbin inspiration: [Assembly Coffee](https://mobbin.com/sites/sections/30c83362-aba5-4664-b491-991e9dca9481) for restrained serif scale and whitespace; [SSENSE](https://mobbin.com/sites/sections/4de98a06-dbff-4e54-83c6-a301c519bba0) for editorial type hierarchy. No reference artwork, imagery or storefront functionality was copied.

## Browser verification

Served locally using `python3 -m http.server 4173 --bind 127.0.0.1`, with the repository as the working directory. Tested in the Codex in-app browser on macOS.

- Visually inspected desktop at 1440 × 1000 and mobile at 390 × 844: hero, approach, supplier relationships, About, criteria and contact/footer. No visible clipping or overlapping content found in the inspected renders.
- Inspected tablet hero/status arrangements at 980px and 720px.
- Measured document width and every main/footer element bounding box at 320, 390, 480, 719, 720, 721, 979, 980, 981, 1100, 1440 and 1920px. No horizontal overflow at any tested width.
- Verified every fragment-link target exists. Exercised Home, How we work, About and trade CTAs. Mobile trade anchor sits below the sticky header (target top approximately 84px; header bottom 69px).
- Traversed all 16 desktop links using Tab; each displayed a solid focus outline. Checked Shift+Tab to the skip link, Enter to focus main, and Tab onward to the primary CTA. Fixed and rechecked the CTA outline to ensure it contrasts with the surrounding paper.
- Checked semantic heading order: one H1, section H2s and approach H3s without skipped levels.
- Measured foreground/background contrast for 114 rendered text-bearing elements. All passed their applicable WCAG AA text-size threshold; lowest measured ratio was 4.81:1. This is a targeted contrast check, not a complete accessibility certification.
- Verified all three mailto links target aster@fourmere.co.uk. Did not send mail or invoke supplier outreach.
- Opened the privacy link and inspected the holding page at 390px and 1440px; checked no horizontal overflow at 320px. Its non-publication notice is explicit.

## Content and technical verification

- Compared the 13 criteria against the original Git version: all retained verbatim and in order.
- Checked the exact legal identity, registered office and unagreed-terms disclaimer remain present.
- Both pages retain `noindex,nofollow`.
- Source audit found no script, form, iframe, image, video, audio or input elements; no external URLs in production HTML; no CSS imports, remote font definitions or URL-loaded assets.
- Browser DOM reports zero script elements and one local stylesheet. No runtime API, tracking, cookies or client storage code was introduced.
- Three production files total 26,346 bytes, uncompressed.
- `git diff --check` passes.

## Limits and handback

No unresolved visual defect was found in the inspected states. Verification was performed in the in-app browser, not a full Chrome/Firefox/Safari or physical-device matrix. A standalone Playwright Chrome launch was unavailable in the sandbox; browser DOM, keyboard and visual checks were completed through the in-app browser instead. No automated axe pass is claimed.

The browser's full-page screenshot stitching produced duplicated regions, so the saved review evidence uses viewport screenshots instead.

No deployment, DNS/hosting change, tracking, supplier outreach, stronger business claim, or Gate 4/5/6 functionality was introduced. Privacy approval, hosting/logging verification and Founder/Director publication decisions remain outstanding exactly as recorded in IMPLEMENTATION.md.
