# Fourmere

Gate 3 supplier-credibility site for a UK specialist ecommerce venture.

## Current status

V3 review build with Founder-approved homepage discoverability. The site has a selected hosting target on the existing Hestia-managed VPS; remaining privacy/claims checks still apply before Systems treats the deployment as governance-complete.

The Fourmere Hestia domain/vhost has been created by the Founder with no shared/global template changes reported. Treat the VPS as a shared production host: other production environments and Aster Lab must not be disturbed.

## Start here

Read:
- `AGENTS.md`
- `docs/POSITIONING_V3.md`
- `docs/CODEX_HANDOFF.md`
- `docs/DESIGN_V2.md`
- `docs/HESTIA_DEPLOYMENT.md`
- `IMPLEMENTATION.md`

Figma review file:  
https://www.figma.com/design/sALZCt0EFcMfX0Nxn5sFWH

## Current site shape

- static HTML + CSS with local WebP editorial assets;
- single-page supplier-credibility site;
- mailto-only contact;
- no catalogue, checkout, analytics, cookies or tracking;
- Hestia VPS selected as hosting target;
- no global Hestia template change is required for the current static site;
- homepage discoverability is Founder-approved and the public homepage is configured `index,follow`;
- public-readiness/privacy/claims review remains open.

## Shared-host rule

Fourmere must stay domain-scoped and static. Do not reuse or alter Aster Lab's PM2 process, port, release tree, state directory or deployment authority. Do not edit a global Hestia web template merely to serve Fourmere.

See `docs/HESTIA_DEPLOYMENT.md` before any server-side change.

## Files

- `index.html` — page content/structure
- `styles.css` — current visual system
- `assets/` — local editorial image assets
- `privacy.html` — non-publication privacy placeholder
- `IMPLEMENTATION.md` — implementation/privacy record
- `docs/POSITIONING_V3.md` — current public-positioning authority
- `docs/DESIGN_V2.md` — visual/layout baseline
- `docs/CODEX_HANDOFF.md` — V3 implementation/refinement brief
- `docs/HESTIA_DEPLOYMENT.md` — shared-VPS deployment and rollback runbook
- `AGENTS.md` — repository instructions for coding agents
