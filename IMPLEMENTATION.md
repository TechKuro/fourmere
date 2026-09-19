# Fourmere Gate 3 Supplier-Credibility Site — Systems Implementation Record

Status: V3 REVIEW BUILD / HESTIA TARGET SELECTED / NOT CLEARED FOR PUBLICATION
Date: 2026-09-19
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
- Locally served generated editorial imagery only; no remote image or third-party media dependency.
- No cookies.
- No localStorage/sessionStorage.
- No advertising pixels.
- No analytics.
- No client-side tracking.
- No API calls.
- No user-submitted data is collected by the site itself.
- Clicking a trade/contact link opens the visitor's email client and sends mail directly to the Fourmere mailbox outside the website runtime.

## Selected hosting shape — 19 September 2026
- Hosting target is the existing Hestia-managed VPS shared with other production environments, including Aster Lab.
- Founder reports the Fourmere Hestia domain/vhost has been created/deployed in Hestia.
- No Hestia web templates have been changed.
- This is the preferred starting state: Fourmere requires only static file serving and does not require Node.js, PM2, an application port or a custom reverse proxy.
- Fourmere must remain isolated from Aster Lab and other production workloads.
- Shared/global Hestia template edits, bulk domain rebuilds and Aster Lab process/port changes are not required and should not be performed for this site.
- Detailed deployment/rollback rules are recorded in `docs/HESTIA_DEPLOYMENT.md`.

## Privacy/data-flow evidence
Expected browser flow for the selected target:
Browser -> Hestia-managed web server on shared VPS -> Fourmere HTML/CSS/local WebP responses.

Contact flow:
Visitor email client -> mail infrastructure -> `aster@fourmere.co.uk`; the website itself does not proxy, store or enrich the message.

Still to verify from the actual Hestia/VPS configuration:
- VPS provider/service-provider identity;
- direct-origin versus any CDN/proxy path;
- whether Nginx-only or Nginx+Apache serves Fourmere;
- per-domain access/error log locations and fields;
- logrotate/retention;
- any Hestia statistics package or host/control-panel telemetry relevant to visitor requests;
- TLS provider/renewal path.

No application-layer database or event store exists for the site.

## Controls
- Founder approved homepage discoverability on 19 September 2026. `index.html` is configured `index,follow`, with a canonical URL plus `robots.txt` and `sitemap.xml`. The privacy holding page remains `noindex,nofollow` until replaced by an approved production notice.
- `privacy.html` remains a non-publication placeholder and must be replaced with Finance & Governance-approved production content before publication.
- Creation of the Hestia domain/vhost does not constitute public-readiness approval.
- Do not make a global/shared Hestia template change for Fourmere.
- Do not reuse Aster Lab PM2, port, state, source or deployment paths.

## Required pre-publication verification
1. Record the exact Fourmere Hestia owner/document root and active per-domain web/backend templates.
2. Record actual server/CDN/proxy data flow, logging fields and retention.
3. Verify that Hestia/host does not inject unexpected tracking or client storage.
4. Confirm Fourmere static artifacts only are served; repository/internal docs must not be public.
5. Replace privacy placeholder with Finance & Governance-approved notice reflecting actual Hestia/VPS/mail flow.
6. Close the outstanding supplier-facing claims review/correction.
7. Finance & Governance post-build claims/legal/privacy verification.
8. Director final rendered/public-readiness review.
9. Homepage indexability is already Founder-authorised; retain that setting unless reversed. Governance completion still requires the privacy/claims/Director checks above.

## Shared-host verification
Before and after any web-server configuration change:
- capture Aster Lab local health at `http://127.0.0.1:3187/api/health`;
- capture health of other known production sites;
- validate web-server configuration before reload;
- prefer a graceful reload over a full restart;
- keep rollback domain-scoped.

Fourmere must not modify Aster Lab's PM2 process, application port, source/live directories, state directory or environment.

## Explicitly not authorised
- Supplier campaign release.
- Supplier follow-up.
- Trade-account applications.
- Any third-party outbound message.
- Gate 4/5/6 functionality.
- Global Hestia template changes for Fourmere.
- Changes to Aster Lab runtime/deployment.
- Public-readiness declaration before required reviews.

## 19 September 2026 — V3 copy and imagery pass
Integrated the Growth Strategy copy pack. Public copy uses confident present-tense specialist-retailer language and the earlier public supplier-validation/status framing has been removed. Local category-neutral editorial imagery is served from the repository with no third-party runtime dependency.

## 19 September 2026 — V3 presentation refinement
Refined hero type/spacing, supplier-facing structure and mobile behaviour. Commercial discussion topics use native HTML disclosure without JavaScript. Verification is recorded in `docs/VERIFICATION_V3.md`.

## 19 September 2026 — Current Director review boundary
The V3 Git build is accepted as a materially improved review build but is not cleared for publication.

Outstanding content correction:
- supplier-facing wording must describe the retail model without implying that current manufacturer/distributor relationships already exist unless evidence supports that claim.

Remaining publication dependencies:
- Supplier & Commercial supplier-facing review/correction;
- Finance & Governance-approved production privacy notice;
- Hestia/VPS logging/retention evidence;
- Finance & Governance narrow claims/legal/privacy verification;
- Director final rendered/public-readiness review.

Founder External Communication Gate remains in force.
