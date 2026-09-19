# Fourmere Gate 3 Supplier-Credibility Site — Systems Implementation Record

Status: V3 REVIEW BUILD / NOT CLEARED FOR PUBLICATION
Date: 2026-09-18
Owner: Project Menice Systems & Automation

## V2 design pass
The second visual pass was rebuilt after a Mobbin-led reference review focused on premium B2B / technical website patterns.

Reference-pattern research included:
- large editorial B2B hero layouts with restrained navigation and dual CTAs;
- numbered operating-principle rows instead of generic feature-card grids;
- dark partnership sections using concise commercial benefits;
- structured commercial-criteria lists;
- minimal email-led closing CTAs;
- restrained corporate/legal footers.

The implementation is original Fourmere work. Mobbin references informed hierarchy, rhythm and layout patterns rather than being copied.

## Scope implemented
- Static, single-page credibility site only.
- Anchored navigation: Home, About, Trade Partners, Contact.
- Growth-approved V3 supplier-facing copy integrated and reorganised for stronger hierarchy.
- Legal identity presentation uses Exilier Limited, company number 16809898, registered in England and Wales, registered office 33 Copper Beech Road, Nuneaton, England, CV10 9FB.
- Contact route is `mailto:aster@fourmere.co.uk` only.
- No contact form.
- No catalogue, product pricing, cart, checkout, customer account, payment, advertising or acquisition functionality.

## Technical design
- Plain HTML + CSS.
- No JavaScript.
- No third-party scripts.
- No external fonts.
- Two locally served, generated editorial still lifes about selection and product information; no remote image or third-party media dependency.
- No cookies.
- No localStorage/sessionStorage.
- No advertising pixels.
- No analytics.
- No client-side tracking.
- No API calls.
- No user-submitted data is collected by the site itself.
- Clicking a trade/contact link opens the visitor's email client and sends mail directly to the Fourmere mailbox outside the website runtime.

## Privacy/data-flow evidence
Browser -> static web host -> HTML/CSS and local WebP image responses.

Potential processing introduced by hosting:
- Standard web-server/CDN access logs may contain IP address, timestamp, requested path, user agent, referrer and request status depending on the chosen host.
- Hosting provider and its log retention are NOT YET SELECTED / VERIFIED in project sources.
- No application-layer database or event store exists for the site.
- Mail contact route: visitor email client -> mail infrastructure -> `aster@fourmere.co.uk`; the website itself does not proxy, store or enrich the message.

## Controls
- `robots` remains `noindex,nofollow` to prevent accidental indexing during pre-publication review.
- `privacy.html` remains a non-publication placeholder and must be replaced with Finance & Governance-approved content before launch.
- No DNS, production hosting or public deployment has been performed.

## Required pre-publication verification
1. Select/confirm hosting provider and deployment target.
2. Record server/CDN logging fields and retention.
3. Confirm whether the host injects any scripts, cookies, headers or telemetry.
4. Replace privacy placeholder with Finance & Governance-approved notice reflecting the actual host/mail flow.
5. Finance & Governance post-build privacy/trading-disclosure verification.
6. Director final Gate 3 credibility/scope review.
7. Only then remove `noindex,nofollow` if authorised and deploy publicly.

## Explicitly not authorised
- Supplier campaign release.
- Supplier follow-up.
- Trade-account applications.
- Any third-party outbound message.
- Gate 4/5/6 functionality.

## 19 September 2026 — V2 implementation refinement and review verification

Completed the V2 refinement described in the Codex handoff: editorial typography and spacing, a clearer supplier-validation status panel, readable supplier-benefit rows, improved mobile layouts, explicit keyboard focus and a styled privacy holding page. The approved proposition, all 13 trade topics, legal identity and publication controls are retained.

Desktop/mobile renders, breakpoint overflow measurements, keyboard traversal, anchor/link checks, text contrast measurements and source audits are recorded in `docs/VERIFICATION_V2.md`. No production dependency was added. No deployment or publication approval is implied by completion of this review build.

## 19 September 2026 — V3 copy and imagery pass

Integrated the Growth Strategy copy pack from the supplied Google Doc. Public copy now uses confident present-tense specialist-retailer language, and the internal supplier-validation module/status framing has been removed. The 14 trade-discussion topics are retained as a commercial discussion list, including payment terms and minimum commitments as separate topics.

Added two locally served WebP material studies under `assets/`, with responsive `srcset` variants. The images are abstract editorial studies of brushed metal, mineral surface and muted green material; they do not depict Fourmere stock, suppliers, premises or operational capability. Production HTML references only relative paths.

## 19 September 2026 — V3 presentation refinement

Reduced the hero type scale and removed its repeated opening positioning sentence, which is already communicated by the kicker and headline. The remaining hero sentence comes unchanged from the supplied Growth copy pack. No new commercial claims were introduced.

Moved all 14 commercial discussion topics and their disclaimer into a native HTML details/summary disclosure. Benefits and the enquiry invitation remain visible. The disclosure requires no JavaScript and supports keyboard activation and native expanded/collapsed accessibility state.

Constrained the hero figure width to its grid track to prevent tablet overflow. Retained the local material imagery; category-specific photography remains dependent on confirmed product categories. Verification is recorded in `docs/VERIFICATION_V3.md`.

## 19 September 2026 — Category-neutral image replacement

Following Founder confirmation that no niche is selected, replaced the displayed abstract metal studies with generated editorial tabletop scenes: unbranded sample packaging, neutral swatches, green folders and illustrative specification sheets. These are conceptual illustrations of selection and information, not evidence of actual Fourmere products or premises. New assets are `selection-hero.webp` and `information-detail.webp`, each with a smaller responsive variant. Previous assets remain available but are no longer referenced by the website.
