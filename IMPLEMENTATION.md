# Fourmere Gate 3 Supplier-Credibility Site — Systems Implementation Record

Status: V2 BUILD COMPLETE / NOT CLEARED FOR PUBLICATION
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
- Anchored navigation: Approach, About, Trade partners.
- Approved supplier-facing copy retained and reorganised for stronger hierarchy.
- Legal identity presentation uses Exilier Limited, company number 16809898, registered in England and Wales, registered office 33 Copper Beech Road, Nuneaton, England, CV10 9FB.
- Contact route is `mailto:aster@fourmere.co.uk` only.
- No contact form.
- No catalogue, product pricing, cart, checkout, customer account, payment, advertising or acquisition functionality.

## Technical design
- Plain HTML + CSS.
- No JavaScript.
- No third-party scripts.
- No external fonts.
- No images or third-party media.
- No cookies.
- No localStorage/sessionStorage.
- No advertising pixels.
- No analytics.
- No client-side tracking.
- No API calls.
- No user-submitted data is collected by the site itself.
- Clicking a trade/contact link opens the visitor's email client and sends mail directly to the Fourmere mailbox outside the website runtime.

## Privacy/data-flow evidence
Browser -> static web host -> HTML/CSS response.

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

## 19 September 2026 — implementation refinement and review verification

Completed the V2 refinement described in the Codex handoff: editorial typography and spacing, a clearer supplier-validation status panel, readable supplier-benefit rows, improved mobile layouts, explicit keyboard focus and a styled privacy holding page. The approved proposition, all 13 trade topics, legal identity and publication controls are retained.

Desktop/mobile renders, breakpoint overflow measurements, keyboard traversal, anchor/link checks, text contrast measurements and source audits are recorded in `docs/VERIFICATION_V2.md`. No production dependency was added. No deployment or publication approval is implied by completion of this review build.
