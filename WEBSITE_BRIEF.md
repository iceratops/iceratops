# Iceratops Website Brief

This is the source of truth for the Iceratops website rebuild. Positioning, services, content rules, and trust posture in this document override anything implied elsewhere. If something here conflicts with code, ask before changing the doc.

## One-line positioning

Iceratops is a founder-led web and AI automation studio based in Pflugerville, TX, helping local and remote businesses build modern websites and practical AI-assisted workflows.

## Audience

Owner-led businesses landing on the site after a personal email, Instagram DM, or text from the founder. Examples: service businesses, event venues, boutique studios, pest control companies, custom cake businesses, gyms, education programs, creators, consultants.

The visitor is busy, technically literate enough to run a business but not a developer, and skeptical of generic AI agencies. The site must reassure them quickly that Iceratops is real, local, thoughtful, and practical.

## Local and remote angle

- Based in Pflugerville, TX.
- Primary service area: Pflugerville, Austin, Round Rock, Hutto, Cedar Park, Georgetown, Leander, Manor.
- Also works remotely with businesses across the U.S. and globally.
- The local angle is the personality and trust frame. It should feel warm.
- The remote angle is capability, not the main personality. It should feel like reach, not the brand.

## Primary surface

Most first impressions will come from mobile browsers. Visitors land here from Instagram DMs, text messages, email links, and quick local searches done on a phone. A polished mobile experience is the difference between a kept lead and a lost one.

- Design every page mobile-first. Layout, copy hierarchy, and CTA placement work on a small screen first, then scale up.
- The primary CTA (Free workflow review) is visible and tappable without zoom on a 375px viewport.
- Local trust cues (Pflugerville, founder name, "we reply within one business day") are visible quickly, not buried below a tall hero.
- Hero sections stay compact on mobile, never full-height.
- Cards stack cleanly. Side-by-side grids only on tablet and up.
- Text blocks stay short and readable. No dense paragraphs on small screens.
- Forms are easy to complete with thumbs: comfortable tap targets, sensible input types, no horizontal scrolling.

Tablet and desktop are enhancements, not the design starting point.

## What Iceratops is

- Founder-led
- Polished and approachable
- Practical
- Technically credible
- Local with global capability
- Focused on outcomes, not technology for its own sake

## What Iceratops is not

- Not a generic AI agency
- Not a spammy automation shop
- Not a chatbot company
- Not a faceless global agency
- Not a cheap freelancer site
- Not a hypey AI brand

If a copy choice or design choice pushes the site toward any of those, reject it.

## Core services

These are the six approved service offerings. Use these names everywhere.

1. AI Workflow Audit
2. Website Refresh
3. Modern Website Build
4. Inquiry and Follow-Up System
5. Booking or Request Workflow
6. Admin Automation Sprint

Underlying capabilities the studio provides across these offerings:

- Modern websites
- Website refreshes and rebuilds
- AI-assisted inquiry workflows
- Lead capture and follow-up
- Booking and request workflows
- Customer intake systems
- Admin automation
- CRM and tracker setup
- AI-drafted replies for human review
- Workflow documentation and handoff

## Outcome-focused messaging

Frame benefits as business outcomes the owner cares about.

- Capture more inquiries
- Organize customer requests
- Respond faster
- Reduce repetitive admin work
- Turn inquiries into booked calls, tours, orders, appointments, members, or clients
- Improve the customer experience without replacing the human team
- Support existing business workflows instead of disrupting them

## Tone

- Professional, warm, clear
- Founder-led voice
- Plain language readable by a busy small business owner
- Active voice, present tense
- Specific over abstract ("we reply within one business day" beats "fast response")
- Use "we" as the studio. Use "I" only on the founder card and About page.

## Content rules

These rules apply to all visible website copy.

1. **No em dashes** anywhere in website copy. Replace with commas, periods, semicolons, "and", or rewrites. Repo lint enforces this.
2. **No exaggerated AI claims.** Do not say AI runs the business, replaces teams, or operates fully autonomously.
3. **AI replaces tasks, not people.** Always frame AI as removing busywork while keeping a human in the loop.
4. **No fake social proof.** Never invent testimonials, clients, logos, case studies, partnerships, or metrics. No stock photo team grids. No AI-generated headshots presented as clients.
5. **No banned hype words.** Avoid: revolutionize, cutting-edge, world-class, bleeding-edge, unleash, unlock potential, synergy, leverage (as a verb), game-changing, next-generation, empowering the future.
6. **Plain language at a sixth-grade reading level.**
7. **Tight sentences.** If a sentence runs over 25 words, split it.
8. **Local angle once or twice per page, not on every line.** Trust strip, About, footer, contact. Not in every paragraph.

## Pricing direction

- Do not lead with fixed pricing on the homepage.
- Use phrases like "Free workflow review," "Pilot projects available," and "Custom quote after workflow review."
- Pricing can be softened on individual service pages, but never specific dollar figures on the homepage or services overview.
- Pricing on the site can be revisited once real case studies and examples exist.

## Trust without fakery

The site builds trust through the following, not through invented social proof.

- Real founder name, photo, and Pflugerville location across the site
- Transparent process: workflow review, pilot, handoff
- Specific timelines and deliverables on service pages
- Honest stack and capability descriptions
- Visible "what we do not do" callouts on industry and service pages
- "We reply within one business day" commitment on Contact
- "No long contracts to start" stated clearly
- "Everything we build is yours, with documentation" stated clearly
- LocalBusiness JSON-LD with real Pflugerville and service area
- A real `/work` page that says "in progress, more coming as projects ship" until at least one case study is live

## Brand identity

Preserve the existing visual identity. Polish, do not replace.

- Background: dark gradient, slate-900 to purple-900 to slate-900
- Primary accent: yellow `#fbbf24`
- Headings: Orbitron
- Body: Inter
- Glass-effect cards with subtle borders
- Logos: existing `iceratops_logo.svg` and `iceratops_text_logo.svg`

The rebuild improves typography rhythm, copy clarity, and conversion architecture. It does not change colors, fonts, or core visual language.

## Conversion architecture

The site has one primary CTA across every page: **Free workflow review**.

- Primary CTA label: "Get a free workflow review" or "Book a workflow review"
- Primary CTA target: `/contact?ref=workflow-review`
- Secondary CTA: "See how we help" or "View services"
- Tertiary fallback: `hello@iceratops.com` mailto, always visible in footer

Do not introduce additional primary CTAs ("Book a call," "Buy now," "Schedule demo"). The funnel is intentionally narrow.

Global navigation is limited to four items: Services, Process, About, Contact. The footer mirrors these four plus the `hello@iceratops.com` email. Demos, Case Studies, Resources, Use Cases, and packages stay reachable but are not linked in the global nav or footer until they are strong enough to help sales.

## Information architecture (canonical)

```
/                                Home
/services                        Services overview
/services/ai-workflow-audit
/services/website-refresh
/services/modern-website
/services/inquiry-follow-up
/services/booking-requests
/services/admin-automation
/process                          Process (Review, Plan, Build, Handoff)
/industries
/industries/[slug]
/about
/contact
/work                            Case studies (placeholder shell)
/work/[slug]
/demos                           Demos (placeholder shell)
/demos/[slug]
/resources                       Optional, placeholder shell
/resources/[slug]
/privacy   /terms   /cookies
```

## Out of scope at launch

- Paid ads management
- Long-form content writing
- Branding from scratch (logo, identity)
- Social media management
- E-commerce platform reselling
- Phone-tree IVR work

If a prospect asks for these, the site should not promise them.

## Changing this brief

Positioning, services list, tone, pricing direction, and content rules in this document do not change without explicit approval from the founder. Implementation agents should reference this file rather than re-deriving direction from chat history.
