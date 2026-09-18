# B-9 Web Companion

A little company for your website, inspired by the Robot from the original
*Lost in Space*.

B-9 waits behind a small **Meet B-9** button. Invite him in and he rolls to the
center of the page, turns toward you, waves hello, and starts exploring. He has
moving treads, red claws, a retracting bubble head, and a few familiar things to
say when you turn his sound on.

He starts hidden and silent. Visitors choose when to meet him, whether to hear
him, and when to send him on his way.

## Try it

Open [the compact preview](dist/classic-b9-remote.html) in your browser and click
**Meet B-9**. No installation is needed.

For all the buttons and settings, open [the full demo](dist/classic-b9-demo.html).
It includes controls for movement, gestures, size, sound, and optional 3D
rendering. Both pages use the same companion you can add to your own website.

Prefer running a local server? Use **Node.js 24 LTS, version 24.15 or later**:

```sh
npm ci
npm run build
npm start
```

Then open [the local preview](http://127.0.0.1:4173).

## Getting to know B-9

Once B-9 is on screen, the Meet button becomes his compact remote. From there
you can ask him to wave, turn, retract his head, sound a warning, or settle down.

- **Move him around.** Drag B-9 to another spot. If he was roaming, he'll pause
  for about three seconds before carrying on. A parked robot stays parked.
- **Give him a break.** Choose **Park here** to stop travelling, or **Pause
  motion** to stop his animation.
- **Say goodbye.** Choose **Hide robot**, or use the small X that appears when
  you hover over or focus him. He rolls away, leaving the Meet button ready for
  another visit.
- **Turn on sound.** Choose **Sound: off** in the remote to enable his voice.
  The Soundbites menu offers three short recordings from the original show.
  Sound always starts off when the page loads.
- **Move the remote, too.** Drag its button or top bar. With the top bar focused,
  use the arrow keys to move it or Home to reset its position. Escape closes it.

B-9 respects reduced-motion preferences with a stationary greeting. His
animation pauses when the browser tab is in the background.

## Add him to your website

Copy [dist/b9-companion.js](dist/b9-companion.js) into your site's assets folder,
then add these lines near the end of the page's body:

```html
<script defer src="/assets/b9-companion.js"></script>
<b9-companion id="site-robot" size="220"></b9-companion>
<b9-remote for="site-robot"></b9-remote>
```

That's the complete setup. The remote provides the Meet button, and the script
includes the artwork and recordings. It needs no framework or extra asset
downloads. You can see this setup in [the integration example](dist/embed-example.html);
keep that file beside `b9-companion.js` when trying it locally.

Change `size` to adjust B-9's size in pixels; small screens automatically limit
him to 220px. Keep the elements outside containers that clip their contents or
use CSS transforms, and check that he leaves your site's navigation accessible.

The default artwork uses animated SVG. If you'd like to try the optional 3D
model, add `renderer="3d"` to `<b9-companion>`. It falls back to SVG if 3D isn't
available. You can also add `parked` for a visible, stationary start, or
`autostart` to invite him in automatically. Sound still starts off.

## Use your own controls

You can keep the remote, or replace it with buttons that fit your site. For
example, this button opens the companion from the setup above:

```html
<button id="meet-b9">Meet B-9</button>
<script>
  customElements.whenDefined('b9-companion').then(() => {
    const robot = document.getElementById('site-robot');
    document.getElementById('meet-b9').addEventListener('click', () => {
      robot.show();
    });
  });
</script>
```

A few useful methods for your own buttons:

| Method | What B-9 does |
| --- | --- |
| `robot.show()` | Rolls in, waves hello, and starts roaming. |
| `robot.hide()` | Rolls off the page. |
| `robot.patrol()` | Starts roaming from his current position. |
| `robot.park(false)` | Stops travelling and stays where he is. |
| `robot.greet()` | Faces you and waves, then continues if he was roaming. |
| `robot.retractHead()` / `robot.restoreHead()` | Lowers or raises his head. |
| `robot.setMotion(false)` | Pauses animation. |
| `robot.warn()` | Displays a warning and gestures; speaks if sound is enabled. |

To enable sound, call `robot.setVoice(true)` from a button that clearly offers
to turn sound on. `robot.getQuotes()` lists the available recordings. Custom
text passed to `robot.warn('Your message')` appears as a caption; only text
matching one of the three recordings has audio.

The remote's `for` attribute matches the robot's `id`. It can connect even if
the robot is added later. If your application replaces a robot that is already
connected, call `remote.connect()` to bind to the replacement. For custom status
displays, listen for the robot's `robotstatechange` event.

## Working on the project

Edit the files in `src/`, then run `npm run build` to update `dist/`. The build
produces the reusable script, both standalone previews, and the integration
example. `npm start` serves those built files; it doesn't rebuild them.

Run `npm test` to rebuild and check movement, controls, geometry, rendered
artwork, and audio playback logic. These automated checks don't replace trying
the result in a real browser, especially dragging, optional 3D, and speaker
output.

The main files are [the companion](src/b9-companion.js),
[the remote](src/b9-remote.js), and the two page templates,
[full demo](src/demo.html) and [compact preview](src/remote-demo.html).
For design decisions and development history, see [the project notes](PROJECT-NOTES.md).

## Credits

This is an unofficial fan project inspired by *Lost in Space*. The three TV
recordings are credited to performer Dick Tufeld; their sources and reuse notes
are in [Audio credits](AUDIO-CREDITS.md). Public-website reuse rights for those
recordings have not been established.

The optional 3D renderer uses Three.js under its [MIT license](THREE-LICENSE.txt).
