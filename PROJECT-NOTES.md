# B-9 project notes — revision 14

## Revision 14 continuation

Restored the supplied revision 13 source and main-branch history from
`classic-b9-widget-revision-13.zip` / `git-history.bundle`. Temporary recovery
work from the standalone preview was set aside and is excluded from Git.

- A hello wave and caption now pause while the tab is hidden and complete
  their remaining visible duration after returning, including reduced motion.
- A remote now discovers its robot when inserted later or given the target ID
  later. The temporary observer is removed on connection or disconnection.
- Added focused regressions while retaining the original complete test suite.
- Added `npm start` for a loopback-only local preview and created the private
  `jtdelosh-ops/b9-web-companion` repository. No live website was changed.

## Current behavior and user corrections

Revision 13 starts hidden with the remote labeled Meet B-9. Meet and Show share
one entrance: start off-screen, roll to viewport center, turn toward the viewer,
wave silently for 3.6 seconds, then roam. Repeated Show during entry is idempotent.
Show during dismissal reverses from the current position toward the center.
The remote collapses back to Meet B-9 after dismissal. Reduced motion centers
him immediately with a Hello caption and no waving or roaming. Explicit
`autostart` and `parked` attributes preserve developer-controlled startup modes.


The latest user screenshot (reference/retraction-bug.png) showed the fluted base above the torso disappearing
when the head withdrew. Revision 12 fixes that in both renderers: the collar
and ear dishes are fixed to the torso, never hidden or scaled. Only the stem
and bulb descend. At full retraction the stem is fully inside the base and the
bulb rests on its top rim. SVG travel is 32 units; 3D travel is 0.23 units.
The public headBob range remains -0.58 to zero, representing retraction depth.
This supersedes earlier instructions to slide the collar into the shoulders.
Never bring back collar compression, translation, disappearance or extension
above the default head height. There is no independent head pitch, yaw,
fore/aft motion, idle bob or spinning radar.

The user explicitly rejected generic computer voices. ONLY the three existing
embedded TV recordings are offered: warning, danger, and does-not-compute.
The four synthesized lines from revision 11, the voice-mode selector, and all
speech-synthesis code were removed. The legacy setVoiceMode method always
selects TV clips; unknown warn(text) calls show captions without audio. Both
selectors and the automatic routine derive from the actual recordings catalog.
Do not add generic synthesized lines as substitutes for unavailable recordings.
All audio starts muted, with no restored sound preference. Picking a line,
Say it, and Occasional lines do not enable sound.

## Preserve

- Reference-based silver body, dome, rubber bellows, red claws, ankle plates,
  joined tread carriage and four moving belts. Reference image remains in
  reference/robot-reference.png. No independent feet or default WebGL need.
- Shared torso/support/carriage centerline and seated support geometry. Chest
  panels stay within the torso; the upper amber glass alone lights for speech
  gestures. The lower vents stay passive.
- Opt-in arrival to center, 3.6-second silent hello, then 40 px/s two-axis roaming
  with turns at all four viewport edges. Occasional stops to face and wave.
- Downward-only head travel with variable 1.5–6 second holds and smooth return.
- Drag/resume after about three seconds at the drop position. Explicit Park,
  Pause, Hide or turn cancels pending restarts.
- Close turns to the nearest side and rolls fully off-screen before hidden.
  Show rolls back to center and greets, including during an in-progress exit.
  Paused/reduced motion and a background tab complete dismissal immediately.
- Hover/focus-only corner X, collapsed draggable remote, brief About me and
  tech stack, full test page and reusable kit. Never deploy without a request.

The user chose this workspace over Spark. The earlier Spark-only handoff is
superseded; do not require Spark or claim it was used.

## Verification

Revision 14 passed the complete `npm test` suite on Windows / Node 24.19.0 on
2026-09-18, including the added hello-suspension cases and five remote lifecycle
tests. The loopback preview server serves the rebuilt revision 14 page.

npm test builds and exercises both standalone previews and the external-script
example. It covers motion, dismissal, lifecycle, head bounds and holds, drag
resumption/cancellation, control synchronization, audio mute/routing, PCM signal
output, rigid geometry, continuous turning, panel containment, support contact,
and upper-only speech lighting. Retraction tests compare the actual visible
collar pixels at nine depths in five headings; the body and treads must also
remain pixel-identical. Optional 3D checks fix the collar/body transforms.
A speech API test double checks that no synthesis calls occur, even for unknown
lines or legacy requests for browser voice.

verification/collar-retraction-fix.png reproduces the disappearing-base bug and
shows the corrected rest, half and full poses. head-positions.png and
turn-and-head.mp4 show the current artwork. Other before/after images document
historical repairs. SVG artwork is rendered with librsvg and visually inspected.

Live browser CSS, real pointer capture, optional WebGL presentation and speaker
output are not verified in the Windows in-app browser. The available browser
previously rejected local-file navigation; do not bypass that restriction.

## Build

Edit src/, then run npm test. The kit includes source, built previews, tests,
embedded recordings, documentation and visual evidence, excluding node_modules.
The project is prepared for GitHub; see CODEX-HANDOFF.md. No live-site deployment
has been requested or performed.
