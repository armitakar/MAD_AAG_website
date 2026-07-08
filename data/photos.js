/**
 * ============================================================
 *  MAD-AAG — PHOTOS MANIFEST
 *
 *  This file tells the website where to find all photos.
 *
 *  HOW TO ADD PHOTOS:
 *  1. Put the image file in the right folder:
 *       • Officer photos  → photos/officers/
 *       • Meeting photos  → photos/meetings/YEAR/
 *  2. Update the filename below (e.g. "tracy-edwards.jpg")
 *  3. Save this file and refresh your browser.
 *
 *  SUPPORTED FORMATS: .jpg  .jpeg  .png  .webp
 *  RECOMMENDED SIZE:
 *     Officer portraits  → 400×400 px (square)
 *     Meeting photos     → 1200×800 px landscape
 * ============================================================
 */

window.PHOTOS = {

  /* ── OFFICER PHOTOS ───────────────────────────────────────
     Match the "photo" field in data/site.js → officers[].
     Leave as "" if no photo yet — a placeholder avatar shows.
  ──────────────────────────────────────────────────────── */
  officers: {
    "tracy-edwards.jpg":   "photos/officers/tracy-edwards.jpg",
    "armita-kar.jpg":      "https://science.gmu.edu/sites/default/files/styles/medium_square/public/2024-09/headshot.jpg?h=e5aec6c8&itok=HMAOFcwF",
    "christopher-elcik.jpg": "https://www.salisbury.edu/_images/directory/cjelcik.jpg",
    "victor-irekponor.jpg":   "https://geospatial.umd.edu/sites/geospatial.umd.edu/files/styles/width320/public/smile.jpeg?itok=8LU9ieuU",
    "wataru-morioka.jpg":      "https://www.salisbury.edu/_images/directory/wxmorioka.jpg"
    "jeremy-tasch.jpg":    "https://cdn.theorg.com/ba9bea14-b0ca-4ef2-87e3-a3510f32aa83_medium.jpg"
  },

  /* ── MEETING PHOTOS ───────────────────────────────────────
     Organized by year. Each entry matches a photo src in
     data/meetings.js → MEETINGS[].photos[].src
  ──────────────────────────────────────────────────────── */
  meetings: {
    2026: {
      /* Add filenames once photos are available */
      /* "keynote.jpg": "photos/meetings/2026/keynote.jpg" */
    },
    2025: {
      /* "keynote.jpg": "photos/meetings/2025/keynote.jpg",
         "lunch.jpg":   "photos/meetings/2025/lunch.jpg"   */
    },
    2024: {},
    2023: {},
    2022: {}
  }

}; /* END window.PHOTOS */
