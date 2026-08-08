# kovanda28.cz

A personal website for Pavel Kovanda — a tradesman from Písek who fits and services water meters, RTN and BMT.

There was one constraint from the client: **no photos of him anywhere.** No portrait, no shot of him at work, no face on the contact page. On a personal website, that takes away the thing personal websites usually lean on.

So the whole site became a play with the simplest tools I had left — typography, layout, gradients and color. The name is split into single characters and animated in. Thin dividers carry the rhythm. Sections alternate between symmetrical splits and deliberately off-balance ones. Behind everything, a canvas of slowly drifting color keeps the page alive. The only photographs are of the work itself — radiators, meters, installations — and they live in the galleries.

It was difficult. I think I made a decent website out of it.

Hand-coded. No AI.

## How it's built

Next.js 15 (Pages Router), React 19, plain JavaScript, Sass. `npm install && npm run dev`.

**A custom responsive system instead of a framework.** [src/styles/system/](src/styles/system/) defines orientation-aware breakpoints — a landscape scale (`xxs` 400px → `huge` 1730px) and a portrait one — and wraps every media query in a CSS `@layer`, so the larger viewport always wins the cascade no matter the source order. Two extra landscape steps, `smt` and `mdt`, are height-guarded so tablets don't pick up desktop rules.

**Typography as tokens.** [_typography.scss](src/styles/system/_typography.scss) holds one `$font-scale` map: every token (`h1`, `MBody`, `Nav`, `legal`, …) carries a family plus a size for each breakpoint in both orientations. In a component it's a single line — `@include font(h1)` — and the type scales everywhere.

**Layout in flexbox and viewport units.** Per-breakpoint rules are written as maps: `@include hb((xxs: (padding: 25vh 3.5vw), md: (...)))`. No grid system — the asymmetry lives in the vw/vh widths.

**Styles wire themselves up.** [scripts/sync-styles.js](scripts/sync-styles.js) globs every non-system `.scss`, prepends the shortcuts import, and regenerates the `AUTO-IMPORT` block in [globals.scss](src/styles/globals.scss). chokidar watches for new files in dev; the build runs it once.

**The same breakpoints in JS.** [checkViewport.js](src/helpers/checkViewport.js) mirrors the Sass maps through `matchMedia`, so animation logic can branch on the same names the styles use.

**The background** is a 2D canvas: 25 radial-gradient blobs in blue, violet and gold, each drifting toward a random target and choosing a new one when it arrives, over a dark teal base — [Background/index.jsx](src/components/common/Background/index.jsx).

**Contrast fixes itself.** Because that gradient moves, the nav can end up over anything. [detectBGcolor.js](src/lib/detectBGcolor.js) uses `elementsFromPoint` plus a luminance check to find what's actually behind the logo and flips it light or dark while you scroll.

**Motion** is Framer Motion: page transitions that push the outgoing page down behind a rounded top edge and a labeled panel ([Transition](src/components/common/Transition/index.jsx)), character- and word-split intro text, a preloader whose percentage counter climbs in randomized stutters ([PreLoader](src/components/PreLoader/index.jsx)), and a draggable gallery carousel ([FotoGalerie](src/components/FotoGalerie/)). Lenis handles smooth scrolling and is stopped during route changes.

**The rest.** Nine routes — home, trafika, three service galleries (`/rtn`, `/bmt`, `/vodomery`), partners, contact, plus GDPR and cookies pages — with a custom 404. The contact form posts to [/api/send](src/pages/api/send.js) and goes out through Resend as a hand-written HTML email. Cookie consent is split into four categories via `js-cookie`. Each page carries its own meta, Open Graph and Twitter tags; the homepage adds JSON-LD `LocalBusiness`. Google Analytics and Vercel Analytics are both wired in.

## Screenshots

_To be added._

<!-- Drop images into docs/screenshots/ and link them here:
![Home](docs/screenshots/home.png)
![Gallery](docs/screenshots/gallery.png)
-->

## Links

- **Live:** https://www.kovanda28.cz/
- **Design (Figma):** https://www.figma.com/design/hUYQVyFcAB5scaW7PlcYy4/Websites?node-id=4209-5153
- **Me:** https://matejforejt.com

---

© Matěj Forejt. Code is under [MIT](LICENSE); the design, copy and photographs are not — please don't copy the site.
