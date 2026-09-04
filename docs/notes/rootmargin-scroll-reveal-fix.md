# Scroll-reveal fix: `rootMargin` vs `threshold` (NavDots.jsx)

## What broke

On mobile, the Products section (and any section whose grid collapses to a
single column under the 860px breakpoint) appeared blank for a long stretch
while scrolling — content wasn't failing to render, it just hadn't been
revealed yet.

## Root cause

`src/components/NavDots.jsx` used an `IntersectionObserver` with
`threshold: 0.35` to trigger the `.fade` reveal animation. That threshold is
a ratio of **the target element's own height** — "don't fire until 35% of
this section's total area is on screen." Fine for short sections, but on
mobile the product cards stack vertically, making that section much taller
than the viewport. 35% of that height could be a huge scroll distance —
long enough that it read as broken rather than just not-yet-revealed.

## Fix

Switched to a viewport-relative trigger instead of an element-height-relative
one:

```js
{ threshold: 0, rootMargin: '0px 0px -30% 0px' }
```

## Why this works

- `rootMargin` follows CSS margin order (`top right bottom left`) and
  shrinks/grows the *root* (the viewport, when `root` isn't specified)
  before any intersection math runs. It never touches actual layout,
  scroll, or paint — it's purely an input to the observer's calculation.
- A negative value shrinks the root inward from that edge. `-30%` on the
  bottom pulls the effective bottom edge up by 30% of the viewport height,
  so the observer only "sees" the top 70% of the screen.
- With `threshold: 0`, "intersecting" just means any pixel overlaps that
  shrunk rectangle — so a section reveals as soon as its top edge crosses
  into the top 70%, independent of how tall the section itself is.
- The 70%/30% split is a tunable design choice (how early content reveals),
  not a fixed rule. A smaller negative margin reveals later; a larger one
  reveals earlier.

Fixed in both `main` (`d40bcc6`) and `turkish` (`2f5cd85`).
