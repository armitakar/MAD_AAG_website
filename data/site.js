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
      name:        "Jeremy Tasch",
      institution: "Towson University",
      location:    "Towson, MD",
      email:       "JTasch@Towson.edu",
      photo:       "jeremy-tasch.jpg",
      bio:         "Dr. Tasch represents MAD on the AAG Council and focuses on political geography."
    },
    {
      role:        "Vice-Chair",
      name:        "Wataru Morioka",
      institution: "Salisbury University",
      location:    "Salisbury, MD",
      email:       "WXMORIOKA@salisbury.edu",
      photo:       "wataru-morioka.jpg",
      bio:         "Dr. Morioka's research focuses on space-time analytics and visual communication using GIScience."
    },
     {
      role:        "Treasurer",
      name:        "Tracy Edwards",
      institution: "Frostburg State University",
      location:    "Frostburg, MD",
      email:       "MADRD@communities.aag.org",
      photo:       "tracy-edwards.jpg",
      bio:         "Dr. Edwards specializes in physical geography and environmental science. She has served MAD in various capacities since 2018."
    },
    {
      role:        "Secretary",
      name:        "Armita Kar",
      institution: "George Mason University",
      location:    "Fairfax, VA",
      email:       "akar3@gmu.edu",
      photo:       "armita-kar.jpg",
      bio:         "Dr. Kar's work spans human mobility, spatial cognition, and environmental health."
    },
    {
      role:        "Regional Councilor",
      name:        "Louise Kiskowski",
      institution: "",
      location:    "",
      email:       "louiekiskowski@gmail.com",
      photo:       "louise-kiskowski.jpg",
      bio:         ""
    },
    {
      role:        "GeoBowl Coordinator",
      name:        "Christopher Elcik",
      institution: "Salisbury University",
      location:    "Salisbury, MD",
      email:       "cjelcik@salisbury.edu",
      photo:       "christopher-elcik.jpg",
      bio:         ""
    },
    {
      role:        "Student Board Representative",
      name:        "Victor Irekponor",
      institution: "University of Maryland",
      location:    "Maryland, MD",
      email:       "vireks@terpmail.umd.edu",
      photo:       "victor-irekponor:.jpg",
      bio:         ""
    }
  ],

  /* ── PAST OFFICERS ───────────────────────────────────────
     Add one entry per term. Most recent terms at the TOP.
     photo and bio are optional — use "" to leave them blank.
     terms: the year range the person served in that role.
  ──────────────────────────────────────────────────────── */
  pastOfficers: [
    {
      term: "2023–2025",
      officers: [
        { role: "Chair",             name: "John P. Harrington",   institution: "Towson University",              location: "Towson, MD",       photo: "", bio: "" },
        { role: "Vice-Chair",        name: "Tracy Edwards",         institution: "Frostburg State University",     location: "Frostburg, MD",    photo: "", bio: "" },
        { role: "Treasurer",         name: "Andrea Presotto",       institution: "Salisbury University",           location: "Salisbury, MD",    photo: "", bio: "" },
        { role: "Secretary",         name: "Jaime Barrett",         institution: "Univ. of Maryland, BC",          location: "Catonsville, MD",  photo: "", bio: "" },
        { role: "Regional Councilor",name: "Jeremy Tasch",          institution: "Towson University",              location: "Towson, MD",       photo: "", bio: "" }
      ]
    },
    {
      term: "2021–2023",
      officers: [
        { role: "Chair",             name: "John P. Harrington",   institution: "Towson University",              location: "Towson, MD",       photo: "", bio: "" },
        { role: "Vice-Chair",        name: "Tracy Edwards",         institution: "Frostburg State University",     location: "Frostburg, MD",    photo: "", bio: "" },
        { role: "Treasurer",         name: "Andrea Presotto",       institution: "Salisbury University",           location: "Salisbury, MD",    photo: "", bio: "" },
        { role: "Secretary",         name: "Jaime Barrett",         institution: "Univ. of Maryland, BC",          location: "Catonsville, MD",  photo: "", bio: "" },
        { role: "Regional Councilor",name: "Jeremy Tasch",          institution: "Towson University",              location: "Towson, MD",       photo: "", bio: "" }
      ]
    }
    /* ── ADD MORE TERMS ABOVE THIS LINE ──
       Copy this block as a template:

    {
      term: "YYYY–YYYY",
      officers: [
        { role: "Chair",             name: "Full Name", institution: "University", location: "City, ST", photo: "", bio: "" },
        { role: "Vice-Chair",        name: "Full Name", institution: "University", location: "City, ST", photo: "", bio: "" },
        { role: "Treasurer",         name: "Full Name", institution: "University", location: "City, ST", photo: "", bio: "" },
        { role: "Secretary",         name: "Full Name", institution: "University", location: "City, ST", photo: "", bio: "" },
        { role: "Regional Councilor",name: "Full Name", institution: "University", location: "City, ST", photo: "", bio: "" }
      ]
    },
    ── */
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
  /*
   * ANNOUNCEMENTS
   * ─────────────────────────────────────────────────────────
   * type:      "info" (teal), "urgent" (red), "" (gold)
   * date:      Display date, e.g. "June 2026"
   * title:     Short headline shown in the collapsed card
   * body:      Full text shown when the card is expanded.
   *            Cards with body longer than ~130 characters get a
   *            "click to expand" chevron automatically.
   * link:      (optional) URL for a button inside the expanded post
   * linkLabel: (optional) Button label, defaults to "Learn More"
   *
   * Add newest items at the TOP of the list.
   */
  announcements: [
    {
      type:  "info",
      date:  "June 2026",
      title: "Save the Date: MAD 2026 Annual Meeting",
      body:  `The 2026 Annual Meeting is planned for Fall 2026. We are currently finalizing the host institution and theme.
              Details on location, registration, and the call for papers will be announced by late summer.
              All AAG members in the Mid-Atlantic region are welcome to attend and submit abstracts.
              Watch this page for updates, or join the AAG Community Hub for real-time notifications.`,
      link:      "",
      linkLabel: "View Meeting Page"
    },
    {
      type:  "",
      date:  "May 2026",
      title: "Officer Election Results",
      body:  `The 2026 MAD officer elections have concluded. Congratulations to all newly elected officers —
              results were announced to the full membership list in May.
              Newly elected officers will begin their terms at the close of the 2026 Annual Meeting.
              Thank you to all candidates and members who participated in the democratic process that keeps our division strong.`
    },
    {
      type:  "info",
      date:  "March 2026",
      title: "Geography Awareness Week — Call for Ideas",
      body:  `Geography Awareness Week takes place each November. Members are encouraged to plan local events —
              public lectures, map exhibitions, K-12 school visits, or social media campaigns — to celebrate
              and promote the discipline in their communities.
              If you are organizing an event, please share your plans with the Secretary so we can help publicize them
              through the division newsletter and social channels.`
    },
    {
      type:  "",
      date:  "January 2026",
      title: "AAG Annual Meeting — MAD Member Participation",
      body:  `Many MAD members will be presenting research at the AAG Annual Meeting this spring.
              Look out for the MAD informal networking dinner — we gather each year to connect with
              regional colleagues in person during the conference.
              Details on the dinner location and RSVP will be posted to the AAG Community Hub approximately
              three weeks before the meeting. Check the hub or contact any officer for information.`,
      link:      "https://community.aag.org/communities/community-home?communitykey=2d830a49-06ea-468e-9f44-6bda5210aca8",
      linkLabel: "Visit Community Hub"
    }
    /* ── ADD NEW ANNOUNCEMENTS ABOVE THIS LINE ── */
  ],

  /*
   * ARCHIVED ANNOUNCEMENTS (from the original MAD-AAG Google Site, 2010–2013)
   * These appear in a collapsible "Historical Archive" section at the bottom
   * of the Announcements page. Do not edit these — they are preserved as-is.
   */
  archivedAnnouncements: [
    {
      type: "meeting",
      date: "June 10, 2013",
      title: "2013 MAD-AAG Conference Announcement",
      body: `MAD-AAG is pleased to announce that the 2013 meeting will be held jointly with the Applied Geography Specialty Group of the AAG. The joint conference is October 30 through November 1 at the Westin Hotel in Annapolis, Maryland.

Michael Ratcliffe (US Census Bureau) is working with Dr. Jay Lee (Ohio State University) in organizing the conference. Registration information and links are provided on the Applied Geography Specialty Group website. Contact Mr. Ratcliffe at michael.r.ratcliffe@census.gov for questions and information.`,
      link: "http://applied.geog.kent.edu/",
      linkLabel: "Applied Geography Specialty Group"
    },
    {
      type: "meeting",
      date: "August 29, 2012",
      title: "Call for Papers — 2012 Joint MAD-AAG & PGS Meeting",
      body: `Salisbury University, on Maryland's Eastern Shore, is hosting a joint annual meeting for the Middle Atlantic Division of the AAG (MAD-AAG) and the Pennsylvania Geographical Society (PGS), on November 2 & 3. Please see the attached Call for Papers for details. Registration is online via the PGS website at www.thepgs.org. We look forward to seeing you there!`
    },
    {
      type: "meeting",
      date: "July 23, 2012",
      title: "MAD-AAG Annual Meeting Announcement — Salisbury, MD 2012",
      body: `The 2012 meeting of the Middle Atlantic Division of the Association of American Geographers is scheduled on November 2–3 in Salisbury, Maryland. The Department of Geography and Geosciences of Salisbury University is hosting the meeting. We are joining the Pennsylvania Geographical Society this year.

We will have the Geography Bowl of college teams from our region and will select team members to represent MAD at the national AAG meeting in Los Angeles. Faculty are encouraged to support students in submitting papers, posters, and maps.

Friday luncheon keynote speaker is Gerald R. Webster, Professor and Chair, Department of Geography, University of Wyoming. The Friday banquet will be at the Ward Museum of Wildfowl Art.

On Friday afternoon, November 2nd, 2:00–5:00 PM, geographic educators plan a workshop for middle and high school teachers, covering GIS, integrative geography units, and STEM applications. Contact Cathy Cooper (410-822-3451 / coopercw@goeaston.net) for workshop information.`
    },
    {
      type: "",
      date: "July 23, 2012",
      title: "MAD-AAG Annual Meeting: Teacher Workshop — Geography Adds Perspective",
      body: `A teacher professional development workshop titled "Geography Adds Perspective to Science and Social Studies" is planned for Middle and High School grades as part of the 2012 MAD-AAG Annual Meeting at Salisbury University on November 2. The workshop covers integrative geography units, browser-based GIS investigation, and networking with teachers from Delaware and Maryland. Contact Cathy Cooper for details: coopercw@goeaston.net.`
    },
    {
      type: "info",
      date: "November 4, 2011",
      title: "MAD-AAG Annual Meeting Photos — 2011",
      body: `Photos from the 2011 MAD-AAG annual meeting are now available. The MAD-AAG Geographer of the Year award went to Mike Ratcliffe. In the photo are also Martha Geores (president of MAD-AAG) and Mark DeSocio (incoming president of MAD-AAG). Photos are archived in the division Google Drive folder.`
    },
    {
      type: "meeting",
      date: "October 21, 2011",
      title: "MAD-AAG Meeting Information — Updated Details",
      body: `Updated information on the upcoming 2011 annual meeting at the University of Maryland–College Park has been posted. Please refer to the attached documents for the full program, registration details, and logistics.`
    },
    {
      type: "meeting",
      date: "August 31, 2011",
      title: "MAD Annual Meeting October 28–29, 2011 — Full Program",
      body: `Middle Atlantic Division of the Association of American Geographers Annual Meeting
Location: Lefrak Hall, University of Maryland at College Park, MD 20742

OCTOBER 28, 2011:
• Career Fair 9 AM–12 PM (Room 1124 Lefrak) — open to all students and professional geographers
• Light refreshments 12–1 PM
• Presentation sessions (posters and papers) — abstracts to Martha Geores by October 15
• Student poster contest with prizes
• Dinner at restaurant TBA
• Speaker: AAG President Audrey Kobayashi, Queen's University

OCTOBER 29, 2011:
• 9:30 AM–12 PM: Geography Bowl — register teams by October 1 via Mark de Socio, Salisbury University
• Business meeting 12–12:30 PM
• Field trips 12:30–3 PM`
    },
    {
      type: "info",
      date: "February 7, 2011",
      title: "MAD-AAG Geography Bowl Photos",
      body: `Photos from the MAD-AAG Geography Bowl competition at the 2010 annual meeting are now available in the division Google Drive archive.`
    },
    {
      type: "info",
      date: "February 3, 2011",
      title: "Geography Bowl at the AAG Meeting — 2011 MAD Team Named",
      body: `The MAD Geography Bowl competition at the annual meeting determined the students who will represent MAD at the AAG meeting in April in Seattle.

Team members for the Geography Bowl at the AAG meeting in Seattle are:
• Victoria Roman, George Washington University
• Trevor Tisler, George Washington University
• Chris Dube, University of Maryland–College Park
• Colin Reisser, George Washington University
• Gavin Caupp, Frostburg State University (alternate)
• Sean Adkins, Salisbury University
• Wes Skeeter, Salisbury University
• Bonnie Epstein, George Washington University (alternate)

Go MAD!`
    },
    {
      type: "meeting",
      date: "February 3, 2011",
      title: "Save the Date: MAD 2011 Annual Meeting — University of Maryland",
      body: `SAVE THE DATE — MAD 2011 ANNUAL MEETING
Friday, October 28, 2011
Location: University of Maryland – College Park

Full details to follow.`
    },
    {
      type: "info",
      date: "November 2, 2010",
      title: "New MAD Officers Elected for 2011",
      body: `The votes are in, and the slate was elected! The winners in the election of 2011 officers for the AAG Middle Atlantic Division are:

• Chair: Martha Geores, Associate Professor, University of Maryland–College Park
• Vice Chair: Tracy Edwards, Frostburg State University (previously served as Treasurer)
• Secretary & Webmaster: Alex Aguilar, Assistant Professor, Salisbury University (continuing)
• Treasurer: Karen DeLong, Montgomery College

Thanks to all MAD members who utilized the SurveyMonkey method of voting. We look forward to the annual meeting joining the Pennsylvania Geographical Society, and to the coming year of MAD within the AAG.

— Cathy Cooper, Chair, Middle Atlantic Division`
    },
    {
      type: "",
      date: "September 24, 2010",
      title: "Election of MAD-AAG Officers — Vote Now",
      body: `The Nominating Committee has assembled a slate of officers for 2011 and requests your participation in the election. The ballot is available on the Internet on the SurveyMonkey site. Voting is open until October 15th. Results will be announced in late October. Each member can vote only once.

Remember the MAD annual meeting November 5–6 in York, Pennsylvania. See the MAD website for registration details and for submission of papers and posters.

— Cathy Cooper, Chair, Middle Atlantic Division
Email: cooopercw@goeaston.net`
    },
    {
      type: "",
      date: "September 3, 2010",
      title: "Call for Nominations — 2011 Officer Election",
      body: `The Middle Atlantic Division (MAD) of the AAG is seeking nominations for the officer positions of Chair, Vice Chair, Secretary, and Treasurer. Officers serve for a one-year period.

Please provide the name, affiliation, and email address of each candidate, along with a brief biographical sketch. Before nominating, please verify that the candidate is willing to serve. Self-nominations are welcome.

Submit nominations to Cathy Cooper (coopercw@goeaston.net), Mike Ratcliffe (michael.r.ratcliffe@census.gov), or David Rain (drain@gwu.edu).

Nominations due by September 15, 2010. Election will be held prior to the annual meeting, November 5–6, 2010 in York, Pennsylvania.`
    },
    {
      type: "meeting",
      date: "September 2, 2010",
      title: "PGS / MAD-AAG Meeting Registration Now Open",
      body: `The PGS annual meeting registration is now open. Please go to www.thepgs.org to register for this year's joint meeting in York, PA. More meeting information is available on the PGS website.`
    },
    {
      type: "meeting",
      date: "August 23, 2010",
      title: "Annual Meeting of MAD-AAG — York, PA 2010",
      body: `The annual meeting of the Middle Atlantic Division of the Association of American Geographers is scheduled for November 5–6, 2010 in York, Pennsylvania, held jointly with the Pennsylvania Geographical Society. The flyer has details of activities, submission deadlines, and registration procedures. Brent Zaprowski is managing registrations; MAD members register the same way as PGS members, preferably online.

We will have the Geography Bowl of college teams from our region and will select team members to represent MAD at the national AAG meeting in April in Seattle, Washington. Faculty are encouraged to have students submit papers, posters, and maps.

— Cathy Cooper, Chair, Middle Atlantic Division, AAG
Email: coopercw@goeaston.net`
    },
    {
      type: "info",
      date: "June 11, 2010",
      title: "Mike Scott Elected MAD Regional Councillor",
      body: `On behalf of the Nominating Committee of the Middle Atlantic Division, it is a pleasure to announce that Dr. Michael S. Scott, Professor at Salisbury University, will be representing MAD as Regional Councillor of the Association of American Geographers.

Dr. Scott managed local arrangements for the annual meeting of MAD in September 2008. He directs the program of Master of Science in GIS and Public Administration at Salisbury University's Geography Department, and is Director of the Eastern Shore Regional GIS Cooperative.

Thanks to Molly Brown for ably serving on the AAG Council for several years, and to the other candidates, Mike Ratcliffe and David Pashane.

— Cathy Cooper, Chair, Middle Atlantic Division`
    },
    {
      type: "",
      date: "May 24, 2010",
      title: "MAD-AAG By-Laws Published",
      body: `The By-Laws of the MAD-AAG have been published and are available under the Membership section of the MAD-AAG website. Members are encouraged to review them.`
    },
    {
      type: "",
      date: "May 24, 2010",
      title: "MAD-AAG Business Meeting Minutes Posted",
      body: `The minutes from the October 3 Business Meeting have been posted under the Membership section of the MAD-AAG website. Members can access them there for review.`
    },
    {
      type: "",
      date: "May 5, 2010",
      title: "Voting Underway for Regional Councillor Position",
      body: `An online site has been set up to conduct the election for the position of AAG Middle Atlantic Region Council representative. Read candidate biographies and cast your vote via SurveyMonkey.

Please note that each member can vote only once. Close of voting is May 31. Results will be announced on June 1.`
    },
    {
      type: "",
      date: "April 7, 2010",
      title: "Call for Nominations — Regional Councillor Position",
      body: `The Middle Atlantic Region is seeking nominations for the position of Councilor. The Middle Atlantic Regional Councilor serves on the Council of the AAG — the decision-making body of the organization. Regional Councilors serve for a period of 3 years, representing their region and setting policy in consultation with the Executive Director. The AAG Council meets twice a year.

Please provide the name, affiliation, and email address of each candidate (biographical information is not required). Submit nominations to Molly Brown (molly.brown@nasa.gov), Cathy Cooper (ccooper@ngs.org), or Martha Geores (mgeores@geog.umd.edu).

Nominations are due by May 1, 2010. The election is expected in early June.

— Molly Brown, Current Middle Atlantic Regional Councilor and Chair of MAD Nominating Committee`
    },
    {
      type: "info",
      date: "March 19, 2010",
      title: "MAD Student Geographers to Compete at AAG Annual Meeting",
      body: `The Geography Bowl, that quintessential competition for undergraduate and graduate geography students from across the country, is scheduled at the AAG Annual Meeting on Thursday, April 15 evening, beginning at 7:30 PM. Come and follow our MAD team and CHEER them on!`
    },
    {
      type: "meeting",
      date: "March 19, 2010",
      title: "Annual Meeting 2010 — Save the Date: York, PA",
      body: `Looking Ahead — Save the Date!

The annual meeting of MAD is scheduled for Friday–Saturday, November 5–6, 2010. This will be a joint meeting with the Pennsylvania Geographical Society and will be held in York, Pennsylvania, at York College of Pennsylvania.

We have had joint meetings in the past, but this is the first with PGA. It should be informative, interesting, and fun — we will have the typical events including the student Geography Bowl competition, paper sessions, field trips, and business meeting.

— Cathy Cooper, Chair, MAD`
    }
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
