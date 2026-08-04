# ResearchBunny widget

Some publication cards carry a small ResearchBunny button next to "Read More". Clicking it
slides open a panel with an AI summary, audio brief, infographic, slides, video and a
chat-with-this-paper box — all without leaving the page.

It uses the [`@researchbunny/rb-widget`](https://www.npmjs.com/package/@researchbunny/rb-widget)
package in **Paper Drawer** (`v2`) mode: one widget per paper, mounted inline, no iframe.
See the [live demo](https://www.researchbunny.com/widget-v2-demo.html).

Three files are involved:

| File | Role |
| --- | --- |
| `src/*_PUBLICATIONS.json` | Which papers get a widget (`rbPaperId`) |
| `src/components/ResearchBunnyWidget.js` | Mounts the widget; holds the default options |
| `src/styles/Publications.css` | `.card-actions` / `.rb-widget-slot` layout |

## Add a widget to a paper

1. Sign in at [researchbunny.com](https://www.researchbunny.com) and open the **Widgets**
   section. Find the paper and copy its **paper ID** (looks like `cmrgjxfc1000n112h5vt5mgdp`).
2. Find that paper's record in the right JSON file under `src/` —
   `RESILIENCE_PUBLICATIONS.json`, `MOBILITY_PUBLICATIONS.json`, `SAFETY_PUBLICATIONS.json`,
   `TRANSIT_PUBLICATIONS.json`, `MECHANISMS_PUBLICATIONS.json`,
   `RESIDENTIAL_PUBLICATIONS.json` or `OTHER_PUBLICATIONS.json`.
3. Add one field:

```json
{
  "title": "Untapped capacity of place-based peer-to-peer resource sharing for community resilience",
  "journal": "Nature Cities, December 2024",
  "author": "Li, Z., Idziorek, K., Chen, A., and Chen, C.",
  "year": "2024",
  "link": "https://doi.org/10.1038/s44284-024-00175-w",
  "rbPaperId": "cmrgjxfc1000n112h5vt5mgdp"
}
```

That is the whole change. Nothing in `Publications.js` needs editing — every card checks for
`rbPaperId` and renders the widget only when it is present.

If the paper isn't on the page yet, add a normal publication record first
(`title` / `journal` / `author` / `year` / `link`), then give it an `rbPaperId`.

## Choose which tabs appear

By default the panel offers every tab the paper actually has assets for. To limit it, add an
optional `rbFormats` — a comma-separated list:

```json
"rbFormats": "audio,reels,infographic"
```

| `rbFormats` token | Tab the reader sees |
| --- | --- |
| `summary` | Summary |
| `audio` | Audio |
| `reels` | Video |
| `infographic` | Infographic |
| `carousel` | Slides |
| `insights` | Visibility |
| `chat` | Chat |

Overview is always shown. Omit `rbFormats` for all tabs — it **cannot** be empty (an empty
list throws rather than silently enabling everything).

## Change the look

Defaults live in `src/components/ResearchBunnyWidget.js` and can be overridden per card by
passing props in `Publications.js`:

- `theme` — `rb` (default), `rb2`, `midnight`, `navy`, `green`, `red`, `indigo`, `charcoal`.
  Sets the accent palette inside the panel.
- `style` — `tag` (default), `bar`, `underline`, `floating`. Shape of the entry button.
- `languages` — `"all"` (default) or a comma-separated list of ISO codes.

## Remove one widget

Delete the `rbPaperId` (and `rbFormats`) line from that paper's JSON record. The card goes
back to being a plain citation with "Read More".

## Uninstall completely

```bash
npm uninstall @researchbunny/rb-widget
```

Then:

1. Delete `src/components/ResearchBunnyWidget.js`.
2. In `src/pages/Publications.js`, remove the `ResearchBunnyWidget` import and, inside
   `PublicationCard`, drop the `{eachCard.rbPaperId && (...)}` block along with the
   `<div className="card-actions">` wrapper around `Card.Link`.
3. Strip every `rbPaperId` / `rbFormats` field from the `src/*_PUBLICATIONS.json` files.
4. In `src/styles/Publications.css`, delete the `.card-actions` and `.rb-widget-slot` rules.
   The `min-height` on `.card` and the scoped `.card-content > …` selectors are harmless to
   leave in place.

## Testing locally

> **The widget will not finish loading on `npm start`.** It sits on
> "Loading ResearchBunny…" forever, and that is expected, not a bug.

`widget.js` treats `localhost` / `127.0.0.1` as a ResearchBunny development host and requests
its paper data from a *relative* URL, which on `http://localhost:3000` hits our own dev server
instead of researchbunny.com. To see the widget actually render, open the dev server through
your machine's LAN address instead — `npm start` prints it as "On Your Network":

```
http://10.0.0.16:3000/think-lab/#/publications
```

Any non-localhost hostname works, including the deployed GitHub Pages site.

To confirm a paper ID is valid without a browser:

```bash
curl -s "https://www.researchbunny.com/api/widget-v2/paper?id=<PAPER_ID>" | head -c 300
```

A valid ID returns the paper's title; an unknown one returns an `error` object.

## Notes

- `widget.js` is fetched from researchbunny.com **once per page**, no matter how many
  widgets are on it.
- The widget mounts into the page (no iframe), so it inherits surrounding layout. That is why
  `.card` uses `min-height` rather than a fixed `height`, and why the card's `span` / `p`
  rules are scoped to `.card-content > …` — an unscoped `.card span { text-decoration:
  underline }` would underline text inside the widget too.
