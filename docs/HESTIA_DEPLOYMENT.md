# Fourmere — Shared Hestia VPS Deployment Runbook

Status: PRE-PUBLICATION / HOST TARGET SELECTED / DO NOT PUBLISH YET  
Date: 19 September 2026  
Owner: Project Menice Systems & Automation

## Purpose

Fourmere will be hosted on the existing Hestia-managed VPS that already carries other production workloads, including Aster Lab.

The objective is to deploy Fourmere with the smallest possible blast radius.

**Primary rule: Fourmere must not require or trigger a global web-server, Hestia-template, PM2, Node.js or Aster Lab change.**

Fourmere is a static HTML/CSS site with local WebP assets. It does not need a long-running application process.

## Known neighbouring workload: Aster Lab

Aster Lab is a separate Next.js workload and must remain isolated from Fourmere.

Current Aster Lab repository configuration records:
- application domain: `asterlab.cloud`;
- local health endpoint: `http://127.0.0.1:3187/api/health`;
- source directory: `/home/aster/apps/asterlab/current`;
- live link: `/home/aster/apps/asterlab/live`;
- long-running PM2 process name: `asterlab`;
- durable state default: `/home/aster/state/asterlab`.

Fourmere must not reuse Aster Lab's port, PM2 process, source tree, live symlink, state directory, environment variables or deployment worker.

Aster Lab doctrine applies to the shared host boundary: experiments/lab changes may not break production, and Fourmere changes must likewise not disturb Aster Lab.

## Current Hestia state

Founder reports that Fourmere has been added/deployed in Hestia, but no Hestia web templates have been changed.

This is the preferred starting position.

Do **not** edit a global Hestia Nginx/Apache template merely to host Fourmere. The current site does not need a custom reverse proxy or application template.

If a custom domain configuration is later required, use a Fourmere-specific template/include or other domain-scoped mechanism after backing up the generated configuration. Never edit a shared template in place when the change could be inherited by unrelated domains.

## Recommended isolation

Preferred:
- dedicated Hestia user for Fourmere / Fourmere-owned web files;
- Fourmere files restricted to its own Hestia web-domain document root;
- no shared writable directories with Aster Lab or other applications;
- no shared Node/PM2 process;
- no reuse of Aster Lab deployment credentials, state or release paths.

If Fourmere has already been added under a shared Hestia user, do not move it impulsively. Record the current owner/permissions first and assess whether migration creates more risk than leaving a static site in place.

## Deployment shape

Fourmere should be served as ordinary static files from the **domain-specific document root created by Hestia**.

Do not clone the whole Git repository into the public document root.

Only publish the browser artifacts required by the site, currently:
- `index.html`
- `styles.css`
- `privacy.html` — Fourmere-specific production-policy draft adapted from Exilier Limited's existing privacy structure; Finance & Governance verification remains required before governance completion
- referenced local files under `assets/`

Repository-only files such as `AGENTS.md`, `README.md`, `docs/`, Git metadata and internal implementation records must not be web-accessible.

Use a release/staging directory outside the public document root and copy/sync the approved browser artifacts into the Hestia document root.

## Pre-change baseline

Before any Hestia or web-server change, record:

1. Fourmere Hestia owner/user and exact document root.
2. Fourmere current Web Template and Backend Template values.
3. Whether Nginx-only, Nginx+Apache, PHP-FPM or another path is active for the domain.
4. Current Fourmere DNS state and whether the domain is publicly reachable.
5. Current SSL state.
6. Available disk space and inode headroom.
7. Current Nginx/Apache service health.
8. Listening ports relevant to web/application workloads.
9. Aster Lab local health result at `127.0.0.1:3187/api/health`.
10. Public health of every known production site on the VPS.
11. Fourmere Nginx/Apache access/error log locations.
12. Logrotate policy and retention applying to those logs.

Do not paste secrets, private keys, environment files or full credential-bearing process environments into project records.

## Change policy

Safe default sequence:

1. Capture pre-change health.
2. Back up the current Fourmere domain config and public document root.
3. Upload only approved Fourmere static artifacts.
4. Do **not** change global Hestia templates.
5. Do **not** touch PM2.
6. Do **not** restart Aster Lab.
7. Do **not** run a bulk Hestia rebuild for all domains.
8. If a web-server configuration change is genuinely required, validate syntax before reload.
9. Prefer graceful reload over full service restart where the platform supports it.
10. Verify Fourmere locally/on-origin.
11. Re-check Aster Lab and other production health immediately after any web-server reload.
12. Roll back Fourmere-only files/config if verification fails.

## Publication gate

A working Hestia vhost is **not publication approval**.

Fourmere remains a review build until the existing Project Menice dependencies are closed:
- supplier-facing claim correction/review;
- Finance & Governance-approved production privacy notice;
- documented actual Hestia/VPS logging and retention;
- Finance & Governance post-build claims/legal/privacy verification;
- Director rendered/public-readiness review.

Founder approved search-engine discoverability on 19 September 2026. The public homepage and production privacy page are configured `index,follow`; `robots.txt` permits crawling and `sitemap.xml` lists both pages. This discoverability decision does not waive the remaining Finance & Governance and Director release checks.

## Privacy/logging evidence required

Because the selected host is the shared Hestia VPS, Finance & Governance now needs the **actual** web-serving data flow rather than a generic hosting assumption.

Record:
- VPS provider/legal service provider;
- whether traffic reaches the VPS directly or through a CDN/proxy;
- per-domain Nginx and/or Apache logging enabled for Fourmere;
- fields logged;
- retention/rotation period;
- filesystem permissions on those logs;
- any Hestia statistics package enabled for the domain;
- any host/control-panel telemetry relevant to visitor requests;
- TLS certificate provider/renewal mechanism.

Do not add analytics or visitor tracking merely for monitoring. Server availability/HTTP health monitoring is sufficient for this Gate 3 site.

## Rollback

Rollback must remain domain-scoped.

Minimum rollback:
- retain a copy of the previously served Fourmere document root;
- retain a copy of the previous Fourmere domain-specific generated/custom config before any change;
- restore Fourmere artifacts/config;
- validate web-server configuration;
- reload gracefully if needed;
- verify Fourmere plus Aster Lab and other production health.

A rollback must not revert or restart unrelated applications.

## Prohibited actions without a separate reviewed need

- editing a global Hestia template used by other domains;
- bulk rebuilding every Hestia web domain;
- changing Aster Lab PM2 configuration;
- changing Aster Lab port 3187;
- changing shared firewall policy solely for Fourmere;
- installing a new web stack;
- adding Docker/Node/PM2 for Fourmere;
- enabling analytics, ad pixels, cookies or third-party scripts;
- replacing or materially weakening the Fourmere privacy policy without Finance & Governance review;
- reversing the Founder-approved homepage discoverability setting without a new decision.

## Success criteria

The hosting implementation is ready for Finance/Director review when:
- Fourmere is isolated to its own domain/document root;
- no global/shared template change was required;
- static assets serve correctly over the intended origin/TLS path;
- no repository/internal files are public;
- log fields and retention are documented;
- Aster Lab health is unchanged;
- other known production sites remain healthy;
- rollback is documented and tested at least at the file/config level;
- publication controls remain intact.
