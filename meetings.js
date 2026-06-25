/**
 * ============================================================
 *  MAD-AAG — MEETINGS DATA
 *  ✏️  Add a new meeting by copying the template at the bottom
 *      and filling in the details. The most recent meeting
 *      (highest year) is automatically shown as "next/current."
 * ============================================================
 */

window.MEETINGS = [

  /* ══════════════════════════════════════════════════════════
     2026 MEETING  ← Update this block each year
  ══════════════════════════════════════════════════════════ */
  {
    year:     2026,
    title:    "MAD 2026 Annual Meeting",
    theme:    "Geography at the Crossroads: People, Place, and Policy",
    status:   "upcoming",          /* "upcoming" | "past" */
    date:     "Fall 2026 — Date TBA",
    dateISO:  "",                  /* e.g. "2026-11-13" once confirmed */
    location: "TBA — Mid-Atlantic Region",
    venue:    "",
    host:     "",
    cfpLink:  "",                  /* URL to call-for-papers form */
    regLink:  "",                  /* URL to registration */
    programLink: "",               /* URL to full program PDF */
    keynote:  "",                  /* Keynote speaker name */

    description: `The Middle Atlantic Division Annual Meeting brings together
      geographers from across Maryland, Northern Virginia, and Washington, DC
      for a full day of paper sessions, keynote lectures, and collegial exchange.
      We welcome contributions from all geographic subdisciplines and career
      stages, including graduate students.`,

    schedule: [
      { time: "8:00 AM",   event: "Registration & Coffee" },
      { time: "9:00 AM",   event: "Opening Remarks & Keynote" },
      { time: "10:30 AM",  event: "Paper Sessions (Round 1)" },
      { time: "12:00 PM",  event: "Lunch & Networking" },
      { time: "1:30 PM",   event: "Paper Sessions (Round 2)" },
      { time: "3:00 PM",   event: "Awards Ceremony" },
      { time: "3:30 PM",   event: "Closing Reception" }
    ],

    /* Photos: set src to filename inside photos/meetings/YEAR/ folder.
       Set placeholder: false once you add a real image. */
    photos: [
      { src: "", caption: "Keynote session",       placeholder: true, tall: true  },
      { src: "", caption: "Morning registration",   placeholder: true, tall: false },
      { src: "", caption: "Panel discussion",       placeholder: true, tall: false },
      { src: "", caption: "Poster presentations",   placeholder: true, tall: false },
      { src: "", caption: "Award ceremony",         placeholder: true, tall: false },
      { src: "", caption: "Closing reception",      placeholder: true, tall: false }
    ],

    highlights: [],   /* Short bullet strings e.g. "Best Paper Award: Jane Doe, UMD" */
    awards: []        /* { award: "Best Paper", recipient: "Jane Doe", institution: "UMD" } */
  },

  /* ══════════════════════════════════════════════════════════
     2025 MEETING
  ══════════════════════════════════════════════════════════ */
  {
    year:     2025,
    title:    "From Appalachia to the Atlantic",
    theme:    "From Appalachia to the Atlantic",
    status:   "past",
    date:     "November 21, 2025",
    dateISO:  "2025-11-21",
    location: "Mid-Atlantic Region",
    venue:    "",
    host:     "",
    cfpLink:  "https://www.aag.org/events/from-appalachia-to-the-atlantic-mad-2025/",
    regLink:  "",
    programLink: "",
    keynote:  "",

    description: `MAD 2025 explored the rich geographic diversity stretching from
      the Appalachian highlands to the Atlantic coastal plain — examining how
      landscape, culture, economy, and policy intersect across this storied corridor.`,

    schedule: [
      { time: "8:30 AM",  event: "Registration" },
      { time: "9:00 AM",  event: "Opening & Keynote" },
      { time: "10:30 AM", event: "Paper Sessions" },
      { time: "12:00 PM", event: "Lunch" },
      { time: "1:30 PM",  event: "Paper Sessions" },
      { time: "3:00 PM",  event: "Business Meeting & Awards" },
      { time: "3:45 PM",  event: "Reception" }
    ],

    photos: [
      { src: "", caption: "Keynote address",       placeholder: true, tall: true  },
      { src: "", caption: "Paper presentations",   placeholder: true, tall: false },
      { src: "", caption: "Networking lunch",      placeholder: true, tall: false },
      { src: "", caption: "Award recipients",      placeholder: true, tall: false }
    ],

    highlights: [
      "Record attendance from across the tri-state region",
      "Keynote exploring Appalachian landscape change",
      "Student paper competition with three finalists"
    ],

    awards: [
      /* { award: "Best Student Paper", recipient: "Name", institution: "University" } */
    ]
  },

  /* ══════════════════════════════════════════════════════════
     2024 MEETING
  ══════════════════════════════════════════════════════════ */
  {
    year:     2024,
    title:    "Geography Matters",
    theme:    "Geography Matters",
    status:   "past",
    date:     "November 22, 2024",
    dateISO:  "2024-11-22",
    location: "Mid-Atlantic Region",
    venue:    "",
    host:     "",
    cfpLink:  "https://www.aag.org/events/geography-matters-2024-middle-atlantic-division-aag-annual-meeting/",
    regLink:  "",
    programLink: "",
    keynote:  "",

    description: `The 2024 meeting centered on geography's relevance and impact
      across policy, education, and community — affirming that where we are
      shapes who we are and what we can become.`,

    schedule: [],

    photos: [
      { src: "", caption: "Opening session",     placeholder: true, tall: true  },
      { src: "", caption: "Presentations",       placeholder: true, tall: false },
      { src: "", caption: "Group discussion",    placeholder: true, tall: false },
      { src: "", caption: "Closing reception",   placeholder: true, tall: false }
    ],

    highlights: [],
    awards: []
  },

  /* ══════════════════════════════════════════════════════════
     2023 MEETING
  ══════════════════════════════════════════════════════════ */
  {
    year:     2023,
    title:    "2023 Middle Atlantic Regional Division Meeting",
    theme:    "",
    status:   "past",
    date:     "October 12–13, 2023",
    dateISO:  "2023-10-12",
    location: "Mid-Atlantic Region",
    venue:    "",
    host:     "",
    cfpLink:  "https://www.aag.org/events/2023-middle-atlantic-regional-division-meeting/",
    regLink:  "",
    programLink: "",
    keynote:  "",
    description: `The 2023 annual meeting brought together the MAD community for
      two days of presentations, discussions, and networking.`,
    schedule: [],
    photos: [
      { src: "", caption: "Day 1 sessions",    placeholder: true, tall: true  },
      { src: "", caption: "Day 2 sessions",    placeholder: true, tall: false },
      { src: "", caption: "Field excursion",   placeholder: true, tall: false }
    ],
    highlights: [],
    awards: []
  },

  /* ══════════════════════════════════════════════════════════
     2022 MEETING
  ══════════════════════════════════════════════════════════ */
  {
    year:     2022,
    title:    "Re-Imagining the 'Post'",
    theme:    "Resilience, Recovery, Reinvention",
    status:   "past",
    date:     "October 21–22, 2022",
    dateISO:  "2022-10-21",
    location: "Mid-Atlantic Region",
    venue:    "",
    host:     "",
    cfpLink:  "https://www.aag.org/events/mad-2022-re-imagining-the-post-resilience-recovery-reinvention/",
    regLink:  "",
    programLink: "",
    keynote:  "",
    description: `Post-pandemic geography took center stage as MAD members explored
      themes of urban resilience, community recovery, and reinventing geographic
      practice in a changed world.`,
    schedule: [],
    photos: [
      { src: "", caption: "Opening keynote",   placeholder: true, tall: true  },
      { src: "", caption: "Sessions",          placeholder: true, tall: false },
      { src: "", caption: "Networking",        placeholder: true, tall: false }
    ],
    highlights: [],
    awards: []
  }

  /* ══════════════════════════════════════════════════════════
     📋  TEMPLATE — Copy & paste above to add a new meeting
  ══════════════════════════════════════════════════════════
  {
    year:     2027,
    title:    "MAD 2027 Annual Meeting",
    theme:    "Your Theme Here",
    status:   "upcoming",
    date:     "Fall 2027 — Date TBA",
    dateISO:  "",
    location: "TBA",
    venue:    "",
    host:     "",
    cfpLink:  "",
    regLink:  "",
    programLink: "",
    keynote:  "",
    description: `Description of the meeting theme and goals.`,
    schedule: [
      { time: "8:00 AM", event: "Registration" },
      { time: "9:00 AM", event: "Keynote" }
    ],
    photos: [
      { src: "photo1.jpg", caption: "Caption", placeholder: false, tall: true },
      { src: "",           caption: "Caption", placeholder: true,  tall: false }
    ],
    highlights: ["Highlight 1", "Highlight 2"],
    awards: [
      { award: "Best Student Paper", recipient: "Name", institution: "University" }
    ]
  },
  ══════════════════════════════════════════════════════════ */

]; /* END window.MEETINGS */
