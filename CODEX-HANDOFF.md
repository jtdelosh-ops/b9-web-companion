# Classic B-9 — Codex handoff

Continue from revision 14 in this project. The user wants a reusable B-9 robot
companion for a personal website, with a compact **Meet B-9** button. Preserve
the full test page. Do not require Spark or rebuild the artwork from scratch.

## Implemented

- Default hidden, muted, and idle. The remote starts as **Meet B-9**.
- Meet and Show share `robot.show()`: roll from off-screen to viewport center,
  face the viewer, wave hello for 3.6 seconds, then roam on both axes.
- Hide rolls off the nearest side. The remote returns to Meet B-9. Show during
  departure turns back from the current position and repeats the greeting.
- Reduced motion uses an immediate stationary greeting. Arrival suspends in a
  background tab. Repeated Show does not restart an entrance already underway.
- The launcher becomes the compact remote while the robot is visible.
- Both previews and the external-script example use the same component.
- The hello wave and caption retain their remaining visible duration after a
  background-tab pause, including the reduced-motion stationary greeting.
- A remote connects automatically when its target robot is inserted later.
  Its temporary discovery observer is cleaned up after connection or removal.
- Pointer clicks and standalone modifier keys do not leave a focus rectangle
  around the robot. Keyboard navigation and activation retain a visible ring.

The button is included in the widget's remote. The eventual website only
needs the bundled script, `<b9-companion>` and `<b9-remote>` elements. An
existing website button can instead call `robot.show()`. See README.md.

## Preserve these corrections

- Current silver body, dome, red claws, moving treads and reference proportions.
- One rigid tread carriage, centered torso, contained chest panels and seated
  supports. Do not reintroduce separate feet or side-view clipping.
- Fixed fluted collar and ear dishes above the torso. Only the stem and bulb
  retract; neither body nor collar may move, compress or disappear. Head travel
  is downward only, with variable holds and no independent fore/aft motion.
- Upper amber glass lights for speech; the lower vents stay passive.
- Only the three embedded authentic TV clips. No speech synthesis or generic
  voice. Sound starts muted and only an explicit sound action enables it.
- Drag resumes roaming after about three seconds. Keep the hover/focus X,
  brief About me, motion preferences and draggable remote.

## Repository and source

The user authorized creating and pushing this project. The private repository
is https://github.com/jtdelosh-ops/b9-web-companion, using branch `main`.
The authenticated GitHub CLI is available; its network operations require the
appropriate sandbox permission. No GitHub browser navigation is needed.

The revision 13 ZIP supplied during continuation contained the complete source,
tests, built pages, recordings, credits and `git-history.bundle`. Its original
main commit, `a09f9b04794d742d3a543fa585a0dd439f17b637`, was restored before
applying revision 14. Temporary standalone-preview recovery files were set
aside and excluded from Git. Do not replace the restored source with that work
or with the earlier `classic-b9-widget.zip`, which predates the corrections.

Inspect the remote branch before future pushes; never force-push over existing
work. Keep source, tests, documentation, built dist files, recordings and their
credits. Exclude node_modules, .env files, temporary imports and the unused
fallback image.

## Website integration

The user requested adding B-9 to jamesdelosh.com on 2026-09-18. The portfolio
integration is in `jtdelosh-ops/james-delosh-portfolio`, merged through PR #5
as `d10c07e0095f7b07090dfc6dd718b3fc250a97e1`. Cloudflare Workers Builds
publishes the portfolio's main branch. The local integration checkout is
`.site-work/`, excluded from this repository.

Production deployment and site validation both passed. On 2026-09-18 the live
site displayed the centered Hello greeting, and its JavaScript response matched
the tested bundle's SHA-256 hash with the expected immutable cache header.

`src/components/B9Companion.astro` in the portfolio adds the hidden, muted
size-220 robot and compact remote to its shared layout. The exact revision 14
bundle is vendored under `public/assets/b9/` with a content-hashed filename,
credits and a byte-integrity check. The portfolio's `docs/b9-companion.md`
records the current source commit and hash. Update the source project first, then
vendor a newly hashed bundle when making future companion changes.

## Build and verification

Use Node 24 LTS, version 24.15 or later, for the locked development dependencies:

```sh
npm ci
npm test
```

The revision 14 suite retains every original regression and adds greeting-pause
and delayed-remote lifecycle coverage. Use `npm start` to serve the built compact
preview at http://127.0.0.1:4173; the full demo is `/classic-b9-demo.html` and the
external-script integration example is `/embed-example.html`.

The complete `npm test` suite passed on Windows with Node 24.19.0 on 2026-09-18,
including all original rendering, geometry, PCM/audio and compiled-page checks
and all five new remote-lifecycle cases. The local preview server also passed
an HTTP smoke check. Browser/speaker checks below remain separate.

`npm test` rebuilds dist and exercises the real component in JSDOM with a
controlled animation clock, shared geometry, rasterized production SVG, and
software audio output. `test-entrance.cjs` covers the new arrival behavior;
`test-pages.cjs` covers both standalone pages and the external-script example.

Open `dist/classic-b9-remote.html` for the compact preview or
`dist/classic-b9-demo.html` for the full test controls. Keep both; they share
the source and are generated by `build.cjs`.

The Cloudflare-hosted portfolio preview was checked in the Windows in-app
browser at desktop and 390px phone width: hidden/muted startup, centered Hello,
roaming, dismiss/reopen, Escape/focus return, résumé navigation, remote layout
and footer clearance. The preview reported no browser console warnings/errors.
Native pointer capture, optional WebGL presentation and audible speakers still
need dedicated browser checks. Local-file browser access was previously
blocked; the hosted preview checks do not change that restriction.

Edit `src/`, rebuild `dist/`, and preserve the historical regression tests.
`PROJECT-NOTES.md` records the earlier visual and animation corrections.
