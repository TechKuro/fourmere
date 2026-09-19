# V3.1 brand polish — 19 September 2026

## Scope

Refined the existing boxed F into a vector silhouette with consistent proportions and a restrained double-line frame. The same mark drives header/footer branding, the contact-section motif, favicon/app icons and social artwork. No new sections, commercial claims, tracking, fonts or runtime dependencies were added.

Assets: SVG favicon, multi-resolution 16/32/48px ICO, 32px PNG, 180px Apple touch icon, 192/512px icons and a browser-mode web manifest. A 1200×630 PNG share card is linked with absolute Open Graph and Twitter image URLs. Editable SVG artwork and `tools/build-brand.cjs` are included; the generator uses Node and Sharp only at development time. Run `node tools/build-brand.cjs` with Sharp available in the development environment. Keep tooling and internal docs outside the document root.

Preserved upstream privacy, supplier-copy and discoverability changes from `dd1da8f`. Corrected an upstream literal backslash-n between the homepage robots and canonical tags, which otherwise appeared as a body text node.

## Verification

- Inspected 1440px desktop header and contact/footer, 390px mobile hero and contact/footer, and the complete share image.
- No document overflow at 320, 390, 720, 721, 980, 981 or 1440px.
- Skip link focuses main. Native disclosure opens with Enter and closes with Space; keyboard outline remains visible.
- All local HTML asset references exist. Icon PNG dimensions, ICO directory and manifest JSON validated; raster assets served successfully from the local preview.
- Share PNG is 1200×630, approximately 50KB. Social-platform cache previews cannot be verified until the new image and metadata are published.
- Text palette unchanged; contact motif stays behind content with no pointer interception. Forced-colors mode retains a visible text F fallback and hides the decorative motif.
- `git diff --check` passes. No JavaScript, forms or third-party runtime assets added.

## Live robots.txt — unresolved deployment

Verified both `https://fourmere.co.uk/robots.txt` and the origin at `51.195.20.205` using curl with TLS hostname resolution. Both currently serve literal backslash-n separators. The repository file contains proper newlines.

The public response is cached by Cloudflare and carries `Cache-Control: max-age=315360000`. After replacing the origin file, purge the exact robots.txt URL or otherwise refresh its cache, then verify the ordinary public URL rather than relying only on a cache-busting query.

Requested the SSH/Hestia connection and confirmed Fourmere document root from the Founder. No server file or configuration has been modified. A robots-only replacement is authorised by the current request; no shared-server changes are needed. Brand changes remain local for review.
