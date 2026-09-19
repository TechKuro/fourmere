# Fourmere V2 — Design Specification

Status: CURRENT VISUAL/LAYOUT BASELINE / COPY-SPECIFIC V2 GUIDANCE SUPERSEDED WHERE NOTED
Last updated: 19 September 2026

> **V3 positioning correction:** Public copy is governed by `docs/POSITIONING_V3.md` and the Growth-approved copy pack. Earlier V2 wording that foregrounds Fourmere as a “venture”, “being built”, “currently in supplier validation”, or displays “Current phase — Supplier validation” is superseded. Keep the V2 visual system and information hierarchy where useful; do not preserve stale copy merely because it appears below.

## Figma review file
Fourmere V2 — Mobbin-led Gate 3  
https://www.figma.com/design/sALZCt0EFcMfX0Nxn5sFWH

The Figma file contains:
- desktop review frame at approximately 1440px;
- mobile review frame at approximately 390px.

Figma is a review/reference surface. The browser implementation remains the authority for exact responsive behaviour and must retain the technical/privacy constraints in this repository.

## Design thesis
Fourmere should feel like a credible, active specialist technical retailer: commercially confident, considered and professional, not a generic dropshipping storefront and not a startup-SaaS landing page.

Core character:
- editorial B2B;
- technical distributor restraint;
- strong commercial structure;
- premium through typography, spacing and hierarchy;
- low decorative noise;
- no fabricated social proof.

The desired reaction from a manufacturer or distributor checking the domain is:
"This is a serious UK specialist retail business worth replying to."

## Mobbin-led reference research
The V2 pass used real interface patterns as reference material. These examples informed hierarchy and layout rather than being copied.

### Hero / high-level hierarchy
- Cursor — large editorial hero and restrained composition  
  https://mobbin.com/sites/sections/5fb2af59-23e2-4ae5-b180-e73bcbfb0fe7

### Principles / editorial information
- Intercom — strong editorial section hierarchy  
  https://mobbin.com/sites/sections/b75e7131-8027-4733-9e06-ae7f76c173f4
- Metalab — generous whitespace and structured principles  
  https://mobbin.com/sites/sections/26e93485-a46d-464b-b795-f4eb9101403c

### Partner / commercial relationship framing
- Webflow — partner-program style structure  
  https://mobbin.com/sites/sections/ff9adee9-9fe6-46d3-93a4-e69a6d057891
- Tailscale pattern research informed the concise partnership framing used in the working direction.

### Structured criteria / technical content
- Fauna Robotics — technical information structure  
  https://mobbin.com/sites/sections/30698000-885e-4983-af51-e8a1fa72a043
- In Common With — structured two-column information treatment  
  https://mobbin.com/sites/sections/6c5ddd6d-bd8e-4cbf-9616-8016064f2bdc

### Closing CTA
- ElevenLabs — minimal high-contrast closing treatment  
  https://mobbin.com/sites/sections/1fcc9815-5a83-43b1-ae79-4058e07bdd52
- Resend — restrained email-led CTA pattern  
  https://mobbin.com/sites/sections/06240e52-a14b-480d-9082-9a8c2d7494be

### Footer
- Complex Law — restrained corporate/legal footer  
  https://mobbin.com/sites/sections/d33c835f-2d6e-4ce1-b827-23703ef3a607
- Vanta — simple B2B footer hierarchy  
  https://mobbin.com/sites/sections/15f32198-9410-4592-add8-a95d08db61ef

## Information architecture

### 1. Header
Desktop:
- Fourmere mark/name left;
- Approach / About / Trade partners centred;
- Trade enquiry right.

Mobile:
- brand left;
- compact Trade link right;
- avoid a complex menu for this small single-page site unless needed for accessibility/usability.

### 2. Hero
Primary headline:
"Focused retail for considered products."

Support the proposition with:
- a concise UK specialist-retailer kicker;
- concise paragraph explaining professional/technical product focus;
- primary trade-partnership CTA;
- secondary "How we work" CTA.

Do **not** include a public “Current phase — Supplier validation” module or other Project Menice gate/status language. V3 credibility should come from confident business positioning, professional presentation, legal identity and a coherent supplier proposition — not disclosure of internal validation mechanics.

### 3. Operating signals
A narrow strip communicating:
- Specialist, not generalist
- Focused product selection
- Clear online presentation
- Branded trade contact

Keep it quiet and typographic.

### 4. Approach
Use an editorial heading followed by numbered rows:
01 Focused ranges  
02 Better product presentation  
03 Professional customer experience

Do not revert to generic SaaS feature cards unless there is a clear design reason.

### 5. Supplier relationships
Dark contrast section.
Left:
- strong editorial statement;
- short supplier-network paragraph.

Right:
- concise structured benefits:
  - Focused representation
  - Clear merchandising
  - Commercial discipline
  - Direct communication

This section should feel commercially credible, not salesy.

### 6. About Fourmere
Large editorial heading plus two-column structure on desktop.
Explain Fourmere in market-facing terms using the V3/Growth-approved copy:
- UK specialist retailer/business;
- focus on professional and technical products;
- specialist-retail approach and commercial principles.

Do not use the About section to publish internal Gate 3 / supplier-validation status.

Supporting beliefs:
- Focused, not generalist
- Evidence before claims
- Useful merchandising
- Long-term supplier relationships

### 7. Trade partners
Warm neutral background.
Large heading followed by the supplier-validation criteria.

Retain all 13 current topics:
1. Retailer or trade-account suitability
2. Trade pricing and any RRP / MAP requirements
3. Direct-to-customer fulfilment availability
4. Dispatch SLA and lead-time structure
5. Order acknowledgement, tracking and dispatch notification
6. Neutral or blind dispatch paperwork where relevant
7. Carriage and surcharge structure
8. Stock availability and data feeds
9. Returns, warranty and damage processes
10. Service, parts and commissioning responsibility where relevant
11. Payment terms and minimum commitments
12. Geographic or channel restrictions
13. Product data and approved marketing assets

Keep the disclaimer that these are topics Fourmere seeks to understand and do not imply terms are agreed.

### 8. Contact
Dark closing section.
Headline:
"Interested in discussing a retail relationship?"

Contact remains email-only:
aster@fourmere.co.uk

No form in this gate.

### 9. Footer
Restrained legal presentation.

Required legal disclosure:
Fourmere is operated by Exilier Limited, company number 16809898, registered in England and Wales. Registered office: 33 Copper Beech Road, Nuneaton, England, CV10 9FB.

Privacy link may point to the holding page during review, but the holding page is not publication-ready.

## Current visual tokens
Current CSS is the implementation reference.

Approximate palette:
- Ink: #171a18
- Ink soft: #303633
- Muted text: #68706b
- Main paper: #f4f2ec
- Warm paper: #ebe7dc
- Off-white: #fffdfa
- Accent: #5d7568
- Dark section: #18231e
- Darker footer/contact: around #0f1411 / #0b0f0d
- Border: #cfcfc7

Typography:
- body: system sans-serif stack;
- editorial display: Georgia / Times-compatible system serif;
- no external webfonts in the current approved technical scope.

Do not add Google Fonts or another external font dependency merely to match the Figma renderer. The Figma review used available local fonts and is a hierarchy/layout reference.

## Responsive behaviour
Desktop target: approximately 1440px.
Mobile target: approximately 390px.

Mobile principles:
- one-column flow;
- headings must remain readable without horizontal clipping;
- criteria become a single-column list;
- CTAs become easy full-width tap targets where appropriate;
- relationship benefits stack vertically;
- legal copy remains legible;
- no horizontal overflow.

## Accessibility
Minimum:
- semantic headings in order;
- visible keyboard focus;
- skip link;
- descriptive links;
- adequate text/background contrast;
- no meaning dependent on colour alone;
- avoid decorative motion;
- maintain comfortable mobile tap targets.

## Explicit visual anti-patterns
Do not introduce:
- fake customer logos;
- testimonial quotes;
- star ratings;
- stock or warehouse imagery implying capability;
- discount badges;
- sale/urgency treatments;
- product grids;
- delivery promises;
- "authorised dealer" styling or claims;
- generic Shopify/DTC aesthetics;
- excessive gradients, glassmorphism or decorative animation.

Trust must come from restraint, clarity, identity, confident commercial positioning and truthful claims. Transparency does not require publishing internal validation/gate status.
