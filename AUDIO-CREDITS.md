# Audio sources

Three brief excerpts of the Robot from the original Lost in Space television
series, credited by the source to performer Dick Tufeld:

| Local asset | Source filename | Duration |
| --- | --- | --- |
| src/audio/warning.wav | warning2.wav | 1.693 seconds |
| src/audio/danger.wav | danger_x.wav | 0.984 seconds |
| src/audio/does-not-compute.wav | does_not_compute2.wav | 1.241 seconds |

Source catalog: https://www.wavsource.com/tv/lost_in_space.htm

Files were retrieved from the publicly linked media directory
https://www.wavsource.com/snds_2020-10-01_3728627494378403/tv/lost_in_space/
on 2026-09-18. The original WAV bytes are embedded unaltered. Revision 04 also
includes 44.1 kHz, 96 kbps MP3 copies for compatibility playback; the primary
player converts original PCM samples to a Web Audio buffer. Total excerpt
duration is approximately 3.92 seconds, with no additional dialogue introduced.

These are original recordings, not synthesized speech or voice cloning.
No public-website reuse licence has been established by this project. The audio
is separate from the MIT-licensed Three.js renderer. The demo starts with all sound disabled.

PCM structure, duration and samples were checked locally. Revision 04 renders
the actual PCM playback graph with a software Web Audio engine and checks
output energy, completion, mute and cancellation. MP3 fallback error handling
uses a test double. Speaker output in the user's browser is still unverified.

## Revision 12: authentic recordings only

The user requested removal of all generic computer voices. The four synthesized
lines introduced in revision 11 and all speech-synthesis playback code are now
removed. Both selectors and the occasional-lines routine contain only the three
embedded original recordings above. No new audio was added or modified.

Unknown lines requested programmatically display captions without sound.
Failed clip playback never falls back to a synthesized voice. MP3 fallback
plays the same original recording. Muted startup is retained.
