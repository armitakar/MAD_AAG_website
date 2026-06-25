# MAD-AAG Website

Middle Atlantic Division of the American Association of Geographers

---

## File Structure

```
mad-aag-v2/
│
├── index.html              ← Main website (do not edit)
├── style.css               ← Design styles (do not edit)
├── app.js                  ← Site engine (do not edit)
│
├── data/
│   ├── site.js             ← ✏️ Edit: general info, officers, announcements, newsletter
│   ├── meetings.js         ← ✏️ Edit: all annual meeting details, schedules, awards
│   └── photos.js           ← ✏️ Edit: map photo filenames to their slots
│
└── photos/
    ├── officers/           ← 📷 Drop officer portrait photos here
    │   ├── tracy-edwards.jpg
    │   ├── michael-allen.jpg
    │   └── ...
    └── meetings/           ← 📷 Drop meeting photos here, in year subfolders
        ├── 2025/
        │   ├── keynote.jpg
        │   └── reception.jpg
        ├── 2026/
        └── ...
```

---

## How to Update Content

### Change officer info or site text
Open `data/site.js` and edit the values. Comments guide every field.

### Update or add a meeting
Open `data/meetings.js`. Each meeting is one `{ ... }` block.
- To add a new year: copy the template at the bottom of the file.
- Fill in `title`, `theme`, `date`, `location`, `schedule`, etc.
- Set `status: "upcoming"` for the current/next meeting, `"past"` for all others.

### Add photos — officer portraits
1. Put the JPG/PNG in `photos/officers/`
2. In `data/site.js`, set the officer's `photo` field to the filename, e.g. `"tracy-edwards.jpg"`

### Add photos — meeting photos
1. Create a folder `photos/meetings/YEAR/` (e.g. `photos/meetings/2026/`)
2. Put your photos there
3. In `data/meetings.js`, set `src` to the filename (e.g. `"keynote.jpg"`) and `placeholder: false`
4. Register the path in `data/photos.js` under `meetings: { 2026: { "keynote.jpg": "photos/meetings/2026/keynote.jpg" } }`

### Add an announcement
Open `data/site.js`, find the `announcements` array, and paste a new item at the top:
```js
{
  type:  "info",       // "info" = teal, "urgent" = red, "" = gold
  date:  "Month YYYY",
  title: "Your Title",
  body:  "Your announcement text here."
},
```

### Add a newsletter issue
Open `data/site.js`, find the `newsletters` array, and add at the top:
```js
{
  volume: "Vol. 2026 · Fall",
  title:  "Issue Title",
  summary:"Brief description of this issue.",
  link:   "https://link-to-pdf-or-page.com"
},
```

---

## Publishing to GitHub Pages

1. Go to github.com → New repository → name it `mad-aag` (Public)
2. Upload the entire `mad-aag-v2/` folder contents to the root of the repo
3. Settings → Pages → Source: main branch, / (root) → Save
4. Your site will be live at: `https://YOUR-USERNAME.github.io/mad-aag/`

To update the site later: edit any file on GitHub directly, or upload new photo files via "Add file → Upload files". Changes go live within ~60 seconds.

---

## Photo Tips

- **Officer portraits**: 400×400 px square, JPG or PNG, under 500KB each
- **Meeting photos**: 1200×800 px landscape, JPG, under 1MB each
- Name files simply with no spaces: `keynote-2025.jpg` not `Keynote Photo 2025.jpg`
