/**
 * ============================================================
 *  MAD-AAG WEBSITE — SITE DATA
 *  ✏️  This is the main file to edit for site content.
 *  No HTML or CSS knowledge needed.
 *  After saving, refresh your browser to see changes.
 * ============================================================
 */

window.SITE = {

  /* ── GENERAL ──────────────────────────────────────────────
     Basic info shown in the header, footer, and home page.
  ──────────────────────────────────────────────────────── */
  name:     "Middle Atlantic Division",
  abbr:     "MAD",
  parent:   "American Association of Geographers",
  region:   "Maryland, Northern Virginia &amp; Washington, DC",
  email:    "MADRD@communities.aag.org",
  aagUrl:   "https://www.aag.org/regional-division/middle-atlantic-division/",
  communityUrl: "https://community.aag.org/communities/community-home?communitykey=2d830a49-06ea-468e-9f44-6bda5210aca8",

  about: `The Middle Atlantic Division (MAD) of the American Association of
    Geographers represents geographers and geography departments in Maryland,
    Northern Virginia, and Washington, DC. All AAG members who reside in this
    region are automatically members of this division. We host an annual
    meeting, publish a newsletter, and foster connections across the regional
    geographic community.`,

  facts: [
    { number: "3",     label: "States & DC" },
    { number: "20+",   label: "Member Institutions" },
    { number: "1951",  label: "Year Founded" },
    { number: "Annual", label: "Meeting Cycle" }
  ],

  /* ── OFFICERS ─────────────────────────────────────────────
     Update names, institutions, and emails each election cycle.
     photo: filename inside photos/officers/ folder.
             Use "" if no photo yet.
  ──────────────────────────────────────────────────────── */
  officers: [
    {
      role:        "Chair",
      name:        "Tracy Edwards",
      institution: "Frostburg State University",
      location:    "Frostburg, MD",
      email:       "MADRD@communities.aag.org",
      photo:       "tracy-edwards.jpg",
      bio:         "Dr. Edwards specializes in physical geography and environmental science. She has served MAD in various capacities since 2018."
    },
    {
      role:        "Vice-Chair",
      name:        "Michael Allen",
      institution: "Towson University",
      location:    "Towson, MD",
      email:       "",
      photo:       "michael-allen.jpg",
      bio:         "Dr. Allen's research focuses on urban geography and GIS applications in the Mid-Atlantic region."
    },
    {
      role:        "Treasurer",
      name:        "Andrea Presotto",
      institution: "Salisbury University",
      location:    "Salisbury, MD",
      email:       "",
      photo:       "andrea-presotto.jpg",
      bio:         "Dr. Presotto specializes in human geography and has managed division finances since 2022."
    },
    {
      role:        "Secretary",
      name:        "Jaime Barrett",
      institution: "University of Maryland, Baltimore County",
      location:    "Catonsville, MD",
      email:       "",
      photo:       "jaime-barrett.jpg",
      bio:         "Dr. Barrett's work spans cultural geography and geographic education."
    },
    {
      role:        "Regional Councilor",
      name:        "Jeremy Tasch",
      institution: "Towson University",
      location:    "Towson, MD",
      email:       "",
      photo:       "jeremy-tasch.jpg",
      bio:         "Dr. Tasch represents MAD on the AAG Council and focuses on political geography."
    }
  ],

  /* ── MEMBERSHIP ───────────────────────────────────────────*/
  membershipIntro: `All AAG members who live or work in Maryland, Northern Virginia,
    or Washington, DC are automatically part of the Middle Atlantic Division —
    no additional dues required. Joining AAG automatically enrolls you in
    your regional division.`,

  membershipBenefits: [
    { icon: "🗺️", title: "Annual Meeting",        text: "Attend and present at our regional conference with keynotes, panels, field trips, and networking." },
    { icon: "📰", title: "Division Newsletter",    text: "Receive timely updates on regional events, funding opportunities, and member achievements." },
    { icon: "🤝", title: "Professional Network",  text: "Connect with geographers at universities, government agencies, and private-sector firms across the region." },
    { icon: "🏆", title: "Awards & Recognition",  text: "Eligible for division awards recognizing outstanding research, teaching, and service." },
    { icon: "📢", title: "Voice in Governance",   text: "Vote in officer elections and help shape the division's direction." },
    { icon: "🌐", title: "AAG Community Access",  text: "Full access to the AAG online community hub for the Middle Atlantic Division." }
  ],

  /* ── ANNOUNCEMENTS ────────────────────────────────────────
     type options: "info" (teal), "urgent" (red), "" (gold)
     Add newest items at the TOP of the list.
  ──────────────────────────────────────────────────────── */
  announcements: [
    {
      type:  "info",
      date:  "June 2026",
      title: "Save the Date: MAD 2026 Annual Meeting",
      body:  "The 2026 Annual Meeting is planned for Fall 2026. Details on location, theme, and call for papers will be announced by late summer. Watch this page for updates."
    },
    {
      type:  "",
      date:  "May 2026",
      title: "Officer Election Results",
      body:  "Congratulations to all newly elected officers. Results were announced to the membership list in May. Thank you to all who participated."
    },
    {
      type:  "info",
      date:  "March 2026",
      title: "Geography Awareness Week — Call for Ideas",
      body:  "Members are encouraged to plan local events celebrating Geography Awareness Week in November 2026. Share your plans with the secretary."
    },
    {
      type:  "",
      date:  "January 2026",
      title: "AAG Annual Meeting — MAD Member Participation",
      body:  "Many MAD members will be presenting at the AAG Annual Meeting. Look for the MAD networking dinner — details forthcoming on the community hub."
    }
    /* ── ADD NEW ANNOUNCEMENTS ABOVE THIS LINE ── */
  ],

  /* ── NEWSLETTER ───────────────────────────────────────────
     link: URL to the PDF or page. Use "" if not yet available.
  ──────────────────────────────────────────────────────── */
  newsletterIntro: `The MAD Newsletter keeps members informed about regional geography
    news, meeting highlights, job opportunities, member accomplishments,
    and upcoming events. Issues are distributed by email to all division members.`,

  newsletterSubmit: `Have news to share? Send member accomplishments, job postings, event
    announcements, or research highlights to the division email and they may
    be featured in the next issue.`,

  newsletters: [
    {
      volume: "Vol. 2025 · Fall",
      title:  "Meeting Highlights & Member News",
      summary:"Recap of the MAD 2025 Annual Meeting, photos, award winners, and member updates.",
      link:   ""
    },
    {
      volume: "Vol. 2025 · Spring",
      title:  "Call for Papers & Spring Updates",
      summary:"Preview of the 2025 annual meeting theme, CFP details, and regional job postings.",
      link:   ""
    },
    {
      volume: "Vol. 2024 · Fall",
      title:  "Geography Matters — Annual Review",
      summary:"Coverage of the 2024 Annual Meeting, award recipients, and division accomplishments.",
      link:   ""
    }
    /* ── ADD NEW ISSUES AT THE TOP ── */
  ]

}; /* END window.SITE */
