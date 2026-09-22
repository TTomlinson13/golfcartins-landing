# golfcartins-landing — DEAD REPOSITORY

**This is not the source of golfcartins.com.** Nothing here is deployed, and
nothing here should be.

The live site is built and served from:

> **`TTomlinson13/golfcartins-com`** — React 19 + React Router 7 + Vite 8 +
> Tailwind 4, with build-time prerendering. Local clone:
> `C:\Users\User\Desktop\golfcartins-landing-src`

Note the confusing naming: the *sibling* Tomlinson specialty sites follow a
`<name>-landing` convention, but golfcartins is the exception — the real repo
is `golfcartins-com`, and this `-landing` one is the decoy.

## Why this repo was neutralized (2026-09-22)

It contained a `deploy.sh` that ran an `lftp mirror --reverse --delete` of this
repo's `./public` onto the Hostinger web root at `/public_html`.

Two problems, either of which is enough:

1. **`--delete` removes whatever is not in the source.** This repo's `./public`
   holds one unfinished HTML file, so the mirror would have deleted the live
   site and left that single page behind.
2. **It targeted `/public_html`**, the main account's web root, not the
   addon-domain directory that actually serves golfcartins.com — so the damage
   would not have been confined to this domain.

`deploy.sh` now refuses to run and explains itself. `npm run build` also exits
non-zero. The git history is intact, so nothing is lost.

## The one file in here

`public/golf-cart-insurance-quote.html` is an abandoned draft quote page. Its
form `action` is still the unreplaced placeholder `GOLF_CART_WUFOO_FORM_URL`,
and the URL 404s on the live site — it was never finished or shipped.

It is superseded by the real `/quote` route in `golfcartins-com`, which forks
between off-road carts and street-legal Low Speed Vehicles:
https://github.com/TTomlinson13/golfcartins-com/pull/1

## If you want this repo gone

Archiving it on GitHub makes it read-only and is reversible. Deleting it is
not. Either is fine — the content is dead — but archive before you delete.
