# Session Memory

- **Goal**: "Incredível" gothic/newspaper portfolio for Pedro Carvalho (backend dev)
- **North Star**: "The Blackletter Gazette" — dark, direct, brutal; ink-on-paper physicality, not dark mode or vintage theme
- **Design**: Flat by dogma (no shadows, no glassmorphism, no rounded corners, no gradients). Section alternation: dark (#1a1a1a) → light (#f4f1ea) → ink (#2c2c2c) → light
- **Stack**: SvelteKit 2 + Svelte 5, UnoCSS, mdsvex, eslint, prettier
- **Fonts**: UnifrakturMaguntia (display), Playfair Display (body), Inter (labels)
- **Typing**: Resolved `resolve()` lint rule errors across blog, curriculo, projetos pages. Removed unused catch/each-block params. Typed blog post metadata (BlogPostMeta interface) to fix svelte-check errors.
- **Status**: `npm run check` = 0 errors, `npm run lint` = 0 errors, `npm run format` = clean
- **Next**: Offer `polish` for final quality pass, or any other improvements
