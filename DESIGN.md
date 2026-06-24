---
name: Portfolio — Pedro Carvalho
description: Portfolio pessoal de desenvolvedor backend — estética gótica/newspaper
colors:
  paper: '#f4f1ea'
  ink: '#2c2c2c'
  ink-light: '#4a4a4a'
  red: '#8b0000'
  highlight: '#e8e1cc'
typography:
  display:
    fontFamily: 'UnifrakturMaguntia, cursive'
    fontSize: 'clamp(2.5rem, 8vw, 5rem)'
    fontWeight: 400
    lineHeight: 1
    letterSpacing: '0.02em'
  headline:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)'
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: '0.01em'
  body:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontSize: 'clamp(1rem, 2vw, 1.25rem)'
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: 'Inter, system-ui, sans-serif'
    fontSize: '0.75rem'
    fontWeight: 700
    lineHeight: 1
    letterSpacing: '0.2em'
    textTransform: 'uppercase'
rounded:
  none: '0'
  sm: '2px'
  md: '4px'
spacing:
  xs: '4px'
  sm: '8px'
  md: '16px'
  lg: '24px'
  xl: '48px'
components:
  button-primary:
    backgroundColor: '{colors.paper}'
    textColor: '{colors.ink}'
    rounded: '{rounded.none}'
    padding: '16px 24px'
  button-primary-hover:
    backgroundColor: '{colors.ink}'
    textColor: '{colors.paper}'
  card-default:
    backgroundColor: '{colors.paper}'
    textColor: '{colors.ink}'
    rounded: '{rounded.none}'
    padding: '16px'
  card-hero:
    backgroundColor: '{colors.paper}'
    textColor: '{colors.ink}'
    rounded: '{rounded.none}'
    border: '6px double {colors.ink}'
    padding: '32px 48px'
  nav-link:
    textColor: '{colors.ink}'
    typography: '{typography.headline}'
  nav-link-hover:
    textColor: '{colors.red}'
---

# Design System: The Blackletter Gazette

## 1. Overview

**Creative North Star: "The Blackletter Gazette"**

A design system that treats the screen like a printing press. Heavy blackletter display typography, ink-on-cream-paper color, hard borders, double rules, and zero rounding. This is not a "dark mode" or a "vintage theme" — it's a typographic register where weight communicates before color does. The page feels physically substantial: dense text blocks, deliberate white space used as punctuation, and a single dark red accent deployed sparingly.

The system explicitly rejects: clean/minimalist white-space-heavy design, SaaS gradients and glassmorphism, rounded corners, generic dev dark themes with neon accents. Every visual decision starts from the question "would this work in a newspaper?"

**Key Characteristics:**

- Typography-first: blackletter as visual anchor, serif for body weight
- Flat by dogma: no shadows, no elevation — depth comes from double borders, line weight, and ink density
- Restrained palette: cream paper, dark ink, one red accent
- Hard edges: all radii are 0 or sub-2px
- Label hierarchy via uppercase + wide tracking, never all-caps body text
- Motion as reveal only: scroll-triggered fade+translate, no decorative animation

## 2. Colors

A three-value system plus one accent. No gradients, no tints beyond the existing neutral ramp.

### Primary

- **Ink** (#2c2c2c): Body text, borders, icons. Near-black but not pure — softened for paper contrast.

### Neutral

- **Paper** (#f4f1ea): Background surface. Warm-cream tinted neutral that reads as physical paper stock, not screen white.
- **Ink Light** (#4a4a4a): Secondary text, metadata, captions, muted labels. Dark enough for 4.5:1 contrast on paper.
- **Highlight** (#e8e1cc): Subtle hover/tint surface. Slightly darker than paper, same warmth.

### Accent

- **Red** (#8b0000): Links, hover states, selection color. Dark, desaturated crimson — never bright red. Used on ≤5% of any given screen. Its rarity is the point.

### Named Rules

**The Pigment Rule.** Every color must look like it came from a printing press. No RGB-neon, no pastels, no gradients. If it couldn't be mixed from four inks (cyan, magenta, yellow, black), it doesn't belong.

## 3. Typography

**Display Font:** UnifrakturMaguntia (blackletter/gothic)
**Body Font:** Playfair Display (serif)
**Label/Mono Font:** Inter (sans-serif)

**Character:** A deliberate clash — medieval blackletter for display, refined Georgian serif for body, cold Swiss sans for labels. The pairing says "I know the rules and I choose when to break them."

### Hierarchy

- **Display** (400, clamp(2.5rem, 8vw, 5rem), 1.0, 0.02em letter-spacing): Name and major section titles only. Never body text. Uppercase rendering is inherent to the blackletter face.
- **Headline** (700, clamp(1.75rem, 4vw, 2.5rem), 1.2, 0.01em): Page subtitles, section opens, article titles.
- **Body** (400, clamp(1rem, 2vw, 1.25rem), 1.6): All prose. Max line length 65-75ch.
- **Label** (700, 0.75rem, 1, 0.2em, uppercase): Date stamps, section eyebrows, metadata, button text. Uppercase only — never sentence case for labels.

### Named Rules

**The One Font Per Job Rule.** Display is blackletter. Body is serif. Labels are sans. Never substitute. The three-family system is the identity; collapsing it loses the tension that makes the design interesting.

## 4. Elevation

Flat by dogma. No box-shadows, no drop-shadows, no elevation at any state. Depth is conveyed entirely through:

- Double borders (`border-[4px] border-double`) for structural hierarchy
- Line weight contrast (bold borders at section boundaries, thin borders within)
- The natural contrast of heavy blackletter against paper background

Hover states invert colors (ink bg + paper text) or shift the 2px hard-shadow offset, but never introduce floating/raised effects.

## 5. Components

### Buttons

- **Shape:** Zero rounding. Hard rectangle, 1px solid ink border.
- **Default:** Paper background (#f4f1ea), ink text (#2c2c2c), 2px hard offset shadow to the right and bottom.
- **Hover:** Ink background (#2c2c2c), paper text (#f4f1ea). Shadow removed on active (translate offset).
- **Label:** Inter uppercase, 0.75rem, 700 weight, 0.2em tracking.

### Cards / Containers

- **Corner Style:** Zero rounding.
- **Background:** Paper (#f4f1ea).
- **Border:** 1px solid ink, or 4px/6px double border for hero containers.
- **Shadow Strategy:** None. The double border IS the elevation signal.
- **Internal Padding:** 16px default, 32-48px for hero containers.

### Navigation

- **Style:** Centered horizontal list. Playfair Display at 1.25rem (headline scale), tracking-wider. Hover transitions to red accent (#8b0000) with a 1px underline animated on the horizontal axis.
- **Mobile:** Flex-wrap centered, same spacing. No hamburger.

### Inputs / Fields

- Not yet implemented. When added: zero rounding, ink 1px border, paper bg, focus ring in ink (not red).

### Featured Hero Container

- **Border:** 6px double ink border.
- **Padding:** 32-48px internal.
- **Content:** Centered, single-column. Display headline, then bordered body sections, then CTAs.
- **Use:** Home page greeting, "under construction" notices, contact CTA block.

## 6. Do's and Don'ts

### Do:

- **Do** use blackletter (UnifrakturMaguntia) for the name and major display roles only — never for body text or long copy.
- **Do** keep all borders hard and squared: 0px border-radius everywhere.
- **Do** use double borders (border-double) for structural containers and section dividers.
- **Do** deploy the red accent sparingly — links, hover states, selection color. ≤5% of any screen.
- **Do** use uppercase + wide tracking for labels, dates, metadata.
- **Do** use scroll-reveal animations (fade + translateY) as the only motion vocabulary.

### Don't:

- **Don't** use any shadow, drop-shadow, or elevation. Flat by dogma.
- **Don't** round any corner. Zero rounding across the system.
- **Don't** use gradients, glassmorphism, or any decorative filter.
- **Don't** use side-stripe colored borders (border-left/border-right > 1px as accent).
- **Don't** use clean/minimalist Apple-like white-space-heavy layouts.
- **Don't** use generic dev dark theme tropes (neon accents, terminal green, matrix references).
- **Don't** animate layout properties or use decorative motion. Reveal only.
- **Don't** use all-caps for body copy or long text passages.
- **Don't** add identical card grids with icon + heading + text repeated endlessly.
