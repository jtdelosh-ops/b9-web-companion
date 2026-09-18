# Classic B-9 web companion — revision 14

Revision 14 preserves the revision 13 artwork and behavior, completes a hello
greeting after returning from a background tab, and automatically connects a
remote whose robot is inserted later. The original Git history, tests, audio
credits and both previews are retained.

Run `npm start` after building to preview at `http://127.0.0.1:4173`.
The private source repository is https://github.com/jtdelosh-ops/b9-web-companion.

A fan-made interpretation of the Robot from the original *Lost in Space* TV
series, with a reusable web component, compact movable remote, and full test
page. Your live résumé website has not been changed.

## What changed

Revision 13 makes arrival opt-in. The compact remote starts as **Meet B-9**.
Clicking it or **Show robot** brings him from off-screen to the center, turns
him toward the viewer, and starts a silent 3.6-second hello wave before roaming.
Show during an exit turns him back toward the center without teleporting.
After dismissal, the remote collapses to Meet B-9 again. Sound remains muted
on every new page load. Reduced motion uses a stationary centered greeting.


Revision 12 anchors the fluted neck base (collar and ear dishes) to the torso.
Only the stem and bulb retract. The stem disappears into the base; the bulb
stops at its upper rim. The base stays visible and retains its exact size and
position at every retraction depth, in SVG and optional 3D.

Only the three embedded authentic TV recordings remain in the Soundbites menu
and automatic routine. Generic speech, its fallback, and all unrecorded menu
lines have been removed. Sound still starts muted. If an integration requests
a line without a recording, it gets a caption only.

Revision 11's two-axis roaming, four-edge turns, roll-away dismissal and compact
Soundbites disclosure are retained. Show now repeats the entrance and greeting. Motion pause or
reduced motion dismisses immediately. Show can interrupt an exit.

Revision 10 uses the user's supplied picture as the visual guide. It adds a
broader silver torso, heavier rubber bellows, metal ankle cross plates, a more
detailed clear dome, and a taller flared carriage with four narrow moving belts.
Solid side covers carry the six raised ribs visible in the reference. The
torso, supports and carriage now share one fore/aft centerline, correcting the
off-center profile. The upper amber glass above the console lights during
speech gestures; the lower torso has passive metal vents and never glows.

Roaming, turning, waving, voice options and dragging behavior are preserved.
The revision-09 removal of scale animation and revision-08 support/deck contact
are retained. The collar now stays fixed instead of sliding with the stem. SVG remains the default; optional 3D shares the new base and support
geometry, with its moving tread geometry batched into four meshes.

The revision-07 chest-panel containment, hover/focus-only corner X, and short
**About me** description with the technology stack are retained.

The following revision-06 behavior is retained:

- **One rigid tread base.** One continuous silver housing joins four narrow
  belts, driven as left and right pairs. Only the cleats travel; the housing never separates into feet. SVG and
  optional 3D use the same chassis vertices. The old front/side drawing swap
  near a forward-facing angle has been removed.
- **Downward-only head travel.** The original default position is the upper
  stop. There is no independent head pitch, yaw, fore/aft movement, idle bobbing,
  radar spinning, or torso rocking. Whole-body steering still turns the Robot.
- **Full nervous retraction.** The stem withdraws into the fixed fluted collar
  until the bulb rests above its upper rim. Holds vary from 1.5 to
  6 seconds, sampled once per reaction, followed by a smooth return to rest.
- **Centered hello, then roaming.** Meet or Show brings him to the center,
  where he waves silently for about 3.6 seconds before roaming.
- **Sound stays muted on load.** Opening the remote, roaming, waving and clicking
  Warning do not enable sound. No sound preference is persisted between loads.

The default renderer is articulated SVG, requiring no WebGL. Optional Three.js
3D remains available in the full test page and falls back to SVG if unavailable.

## Open the previews

| File | Purpose |
| --- | --- |
| `dist/classic-b9-remote.html` | Self-contained preview with the collapsed remote. |
| `dist/classic-b9-demo.html` | Full test page, all controls, and the same remote. |
| `dist/embed-example.html` | Integration example using the external bundle. |
| `dist/b9-companion.js` | Self-contained reusable script; no asset downloads. |
| `verification/turn-angles.png` | Production SVG rendered at 12 critical headings. |
| `verification/panel-before-after.png` | Reproduced and repaired chest-panel overlap at ±83°. |
| `verification/support-before-after.png` | Reproduced and repaired body/carriage clipping at ±83°. |
| `verification/retraction-before-after.png` | Historical revision-09 repair of collar compression. |
| `verification/collar-retraction-fix.png` | Revision-12 repair: base remains visible through full retraction. |
| `verification/reference-update.png` | Previous and updated designs at front, three-quarter and side headings. |
| `reference/robot-reference.png` | User-provided design guide, not loaded by the widget. |
| `verification/head-positions.png` | Rest, partly retracted, and fully retracted poses. |
| `verification/turn-and-head.mp4` | 240 rendered SVG frames showing turns and retraction. |

Open either standalone HTML file directly, with no server or installation.
Keep `embed-example.html` beside `b9-companion.js` if using that example.
All previews start muted. Reduced-motion preferences suppress automatic movement.

## Behavior and controls

- **Retract head** runs the nervous reaction. **Restore head** smoothly restores
  the default height; it cannot extend higher. The collar remains visible and fixed. “That does not compute.” also
  triggers retraction. Occasional quiet nervous reactions occur while roaming.
  Retraction never changes any part's scale or compresses the body or tread base.
- **Face & wave / Stop and wave now** stops travel, faces the viewer, waves,
  then resumes if already roaming. Spontaneous greetings are enabled by default,
  separated by 16–26 seconds of roaming after the initial hello.
- **Park here** stops at the current position. The test page's **Park** button
  docks at the lower right. **Pause motion** disables animation. **Hide robot**
  rolls off the nearest side, then hides. The remote stays available to restore
  the centered arrival and hello; Show can also reverse an exit. Motion pause, reduced motion,
  or a background tab completes dismissal immediately.
- Drag while roaming: pause, then resume after about three seconds at the
  dropped position. A second drag restarts the wait. A Robot deliberately parked
  before dragging stays parked. Park, Pause, Hide, manual turns and pointer
  cancellation cancel the pending restart. Active gestures finish first.
- **Turn left / right** parks and rotates 90 degrees. **Face me** restores the
  front; **Turn around** rotates 180 degrees. Moving cleats animate travel and
  pivoting; the base itself remains rigid.
- **Warning / Say it** displays a caption and gestures. **Sound: on**, **Enable
  voice**, **Test TV voice**, or the native direct audio player are explicit
  sound actions. The full page retains soundbite selection and Audio help.

**About me** expands a short paragraph and tech-stack line inside the remote.
It does not alter roaming, motion or sound. Closing the remote collapses the
About section. The corner X also remains keyboard-accessible; the remote’s
Hide robot button is available on touch devices.

The remote starts as a small button. Drag its launcher or top bar to reposition
it. With the top bar focused, arrow keys move it and Home restores its default
position. Escape, Close, or an outside click collapses the panel. Both control
sets stay synchronized. On small screens the Robot is capped at 220px.

## Embed in an existing website

Copy `dist/b9-companion.js` to your static assets. Put the elements directly in
the document body, outside transformed or clipped containers:

```html
<script defer src="/assets/b9-companion.js"></script>
<b9-companion id="site-robot" size="220"></b9-companion>
<b9-remote for="site-robot"></b9-remote>
```

The remote supplies the Meet B-9 button; no separate website button is needed.
The widget remains hidden and does no animation until invited. Your website only
needs the script and elements above. To use your own website button, omit the
remote if desired and connect its click handler to `robot.show()`:

```js
await customElements.whenDefined('b9-companion');
document.querySelector('#meet-b9').addEventListener('click', () => {
  document.querySelector('#site-robot').show();
});
```

For an intentional automatic roll-on entrance, add `autostart`. For a visible,
deliberately parked startup instead, add `parked`:

```html
<b9-companion id="site-robot" size="220" parked></b9-companion>
```

For optional 3D-first rendering, add `renderer="3d"`. The `parked` and `autostart` attributes are
read at startup; use the methods below for later changes. Reduced-motion settings
are respected unless the visitor explicitly chooses Start roaming / Allow motion.

Omit `<b9-remote>` if supplying your own controls. The optional remote binds to
its `for` ID, or the first Robot when no ID is supplied. Both components isolate
styles with Shadow DOM. Set `--b9-remote-z-index` if needed (default 1200).
Mount the Robot before its remote; call `remote.connect()` if your application
replaces the target element while retaining its ID.

```js
await customElements.whenDefined('b9-companion');
const robot = document.querySelector('b9-companion');
robot.patrol({keepPosition:true}); // Roam from the current position.
robot.patrol();                   // Roam both axes from the current position.
robot.patrol({keepPosition:false}); // Start at the bottom, then roam both axes.
robot.park(false);                // Park in place.
robot.park();                     // Park at lower right.
robot.greet();                    // Face, wave, resume if roaming.
robot.wave();
robot.retractHead();              // Random 1.5–6 second hold.
robot.retractHead(4000);          // Explicit hold duration in milliseconds.
robot.restoreHead();              // Return to the default upper stop.
robot.bobHead();                  // Legacy alias for retractHead; never extends.
robot.face(0);                    // Park and face forward.
robot.turn(90);                   // Park and turn relative to current heading.
robot.setGreetings(false);        // Disable spontaneous stop-and-wave routines.
robot.setMotion(false);
robot.setRoutine(true);           // Optional spoken warnings, if sound enabled.
robot.hide();                    // Turn and roll off the nearest side.
robot.hide({immediate:true});     // Hide without an exit animation.
robot.show();                    // Roll to center, face, greet and roam.
robot.show({immediate:true});     // Integration escape hatch: reveal without entry.
robot.getQuotes();               // Only lines with embedded TV recordings.

// In a visitor's explicit sound-enable handler:
robot.setVoice(true);
robot.warn();
robot.warn('Danger, danger!');    // Embedded original recording only.
```

`robotstatechange` reports arrival (mode entering), roaming (mode patrol), departure (mode exiting),
greeting, introduction, motion, visibility,
voice and pending drag-resume state. `debugState()` includes the current head
travel (`headBob`, between -0.58 and 0), heading and remaining resume delay.
Animation suspends while hidden. No deployment is included. Check integration
with your site's layout and Content Security Policy; adapt the styling rather
than weakening a restrictive policy.

## Audio

Three short TV excerpts are embedded as original PCM WAVs and MP3 fallback
copies. The player reads the PCM samples directly into Web Audio and requests
activation from a visitor's click. If that fails, it tries MP3 playback. The
full test page retains the independent native player under Audio help.
The Soundbites selector and occasional-lines routine contain only these three
recordings. There is no generic voice or speech-synthesis fallback. The legacy
setVoiceMode method remains compatible but always selects TV clips. Unknown
lines passed to warn display a caption without generated audio.

Muting or hiding stops active sound. The widget does not access the browser's
speech-synthesis API. Playback events do not prove audible speaker output. See `AUDIO-CREDITS.md` for sources and the existing reuse note.

## Build and verification

```sh
npm ci
npm run build
npm test
```

Use Node.js 22.12+ or 24 LTS. Edit `src/`, then rebuild `dist/`. The kit excludes installed dependencies.
See `CODEX-HANDOFF.md` for the GitHub handoff and remaining browser verification.

- `src/chassis.js`: shared rigid base, fixed support profiles, cleats and projection.
- `src/compatibility.js`: default articulated SVG with a shared torso outline/clip.
- `src/model.js`: optional Three.js model using the shared base.
- `src/b9-companion.js`: lifecycle, animation, head motion, dragging and audio.
- `src/b9-remote.js`: compact draggable controls.
- `src/demo.html`, `src/remote-demo.html`: preview templates.
- `src/audio-player.js`, `src/voice-clips.js`, `src/audio/`: embedded recordings, labeled quote catalog and audio player.

`test-entrance.cjs` checks default opt-in behavior, Meet and Show, both entrance
sides, center/turn/wave/roam ordering, moving treads, repeat clicks, exit reversal,
resize during entry, background suspension, reduced motion and cancellation.
It also verifies the remaining hello/caption duration after a background pause,
including a stationary reduced-motion greeting. `test-remote-lifecycle.cjs`
covers delayed target insertion, ID changes, target reassignment and cleanup.

`test-travel.cjs` checks both-axis travel, all four boundaries, upward headings,
left/right roll-away exits, full off-screen completion, interruption/restoration,
resize during exit, motion preferences, background tabs, cleanup, and original
voice routing with mute preserved and no synthesis calls for unknown lines.

Checks cover head bounds, full retraction, hold variation, exact return to rest,
rigid housing geometry, tread travel, continuous silhouette across 721 headings,
surface depth ordering, support/deck contact through 721 headings, no support
penetration in SVG or 3D, initial hello before movement, greeting interruption,
mobile bounds, reduced motion, drag resume/cancellation, remote state, muted
startup, audio fallback and signal output. A raster regression also checks chest/rear-panel containment at 21 headings,
including both near-profile travel directions. Another raster regression checks
that the carriage never overpaints the supports at 21 headings; the previous
version reproduced about 1,300 overpainted body pixels in each travel direction.
About-panel disclosure and
unchanged sound/motion are checked in all compiled examples. A head-retraction
regression checks rigid part geometry and pixel-identical body/base rendering
at nine depths in five views, plus fixed body and collar transforms in optional 3D.
The visible fluted-base pixels must also remain identical at every depth.
Reference-update checks verify actual rendered body/base centerlines, four
tread loops, and a speech-light change confined to the upper amber glass.
The compiled scripts for both
standalone previews and the external-script example are exercised.

Visual inspection uses production SVG rendered by librsvg: turn contact sheets,
head poses, the reference update and historical repair comparisons, and the included
240-frame animation. These verify the generated
artwork, not live browser CSS or pointer capture. Optional 3D is geometry-tested.
The available browser previously blocked local-file navigation; this revision
has not been end-to-end verified in the user's Windows in-app browser. Actual
speaker output is also unverified there.

## References

The design is an unofficial interpretation, not an exact prop replica.
Current visual guide: the user-provided image in `reference/robot-reference.png`.
Earlier reference: [B9Creations replica photographs at Propstore](https://propstoreauction.com/lot-details/index/catalog/456/lot/171962/159-B9Creations-Light-Up-Life-Size-B9-Environmental-Control-Robot-Animatronic-Replica-LOST-IN-SPACE-1965-1968).
No reference photograph is rendered in the widget. Three.js is MIT-licensed; see
`THREE-LICENSE.txt`. Audio sources are documented separately.
