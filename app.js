/**
 * ============================================================
 *  MAD-AAG WEBSITE — MAIN ENGINE (app.js)
 *  Reads data from data/site.js, data/meetings.js, data/photos.js
 *  and renders all pages. You should NOT need to edit this file.
 * ============================================================
 */

/* ── ROUTER ─────────────────────────────────────────────── */
let currentMeetingYear = null;

function showPage(id, opts = {}) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
  document.querySelector('nav').classList.remove('open');

  const page = document.getElementById('page-' + id);
  if (page) {
    page.classList.add('active');
    // Mark nav item active
    document.querySelectorAll('.nav-link[data-page="' + id + '"]').forEach(a => a.classList.add('active'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (id === 'meeting-detail' && opts.year) {
    currentMeetingYear = opts.year;
    renderMeetingDetail(opts.year);
    location.hash = 'meeting-' + opts.year;
  } else {
    location.hash = id;
  }
}

/* ── HELPER: officer photo ──────────────────────────────── */
function officerPhotoHTML(officer) {
  const fname = officer.photo;
  const path  = fname && window.PHOTOS?.officers?.[fname];
  const initials = officer.name.split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase();

  if (path) {
    return `<div class="officer-photo-wrap">
      <img src="${path}" alt="${officer.name}" loading="lazy"
           onerror="this.parentElement.innerHTML='<div class=&quot;officer-avatar&quot;>${initials}</div>'">
    </div>`;
  }
  return `<div class="officer-photo-wrap">
    <div class="officer-avatar">${initials}</div>
  </div>`;
}

/* ── HELPER: photo grid ─────────────────────────────────── */
function photoGridHTML(photos, year) {
  return photos.map(p => {
    const src = (year && window.PHOTOS?.meetings?.[year]?.[p.src]) || p.src;
    const hasReal = src && !p.placeholder;
    return `<div class="photo-slot${p.tall ? ' tall' : ''}">
      ${hasReal
        ? `<img src="${src}" alt="${p.caption}" loading="lazy">`
        : `<div class="photo-placeholder"><div class="ico">📷</div><p>${p.caption}</p></div>`
      }
    </div>`;
  }).join('');
}

/* ── RENDER: HOME ───────────────────────────────────────── */
function renderHome() {
  const S = window.SITE;
  const meetings = (window.MEETINGS || []).sort((a,b) => b.year - a.year);
  const next = meetings[0] || {};

  // Facts bar
  document.getElementById('home-facts').innerHTML = S.facts.map(f =>
    `<div class="fact"><div class="fact-number">${f.number}</div><div class="fact-label">${f.label}</div></div>`
  ).join('');

  // About
  document.getElementById('home-about').textContent = S.about;

  // Latest news (from announcements)
  const news = (S.announcements || []).slice(0, 3);
  document.getElementById('home-news').innerHTML = news.map(n => {
    const tagClass = n.type === 'info' ? 'meeting' : 'announce';
    return `<div class="card" style="margin-bottom:14px;">
      <div class="card-date">${n.date}</div>
      <span class="tag tag-${tagClass}">${n.type === 'info' ? 'Update' : 'Announcement'}</span>
      <h3 style="color:var(--navy);font-size:1rem;margin-bottom:6px;">${n.title}</h3>
      <p style="font-size:.88rem;color:var(--muted);margin:0;">${n.body.slice(0, 120)}${n.body.length > 120 ? '…' : ''}</p>
    </div>`;
  }).join('');

  // Next meeting teaser
  document.getElementById('home-next-meeting').innerHTML = `
    <div class="card" style="max-width:700px;padding:32px;">
      <p class="eyebrow" style="margin-bottom:4px;">${next.status === 'upcoming' ? 'Upcoming' : 'Most Recent'}</p>
      <h2 style="margin-bottom:6px;color:var(--navy);">${next.title || ''}</h2>
      ${next.theme ? `<p style="font-style:italic;color:var(--teal);font-family:var(--ff-display);margin-bottom:14px;">"${next.theme}"</p>` : ''}
      <div style="display:flex;gap:22px;flex-wrap:wrap;margin-bottom:20px;font-size:.9rem;">
        <span>📅 ${next.date || ''}</span>
        <span>📍 ${next.location || ''}</span>
      </div>
      <a class="btn btn-primary" onclick="showPage('meetings');return false;">View Meeting Details →</a>
    </div>`;
}

/* ── RENDER: OFFICERS ───────────────────────────────────── */
function renderOfficers() {
  const officers = window.SITE.officers || [];
  document.getElementById('officers-grid').innerHTML = officers.map(o => `
    <div class="officer-card">
      ${officerPhotoHTML(o)}
      <div class="officer-top-bar"></div>
      <div class="officer-body">
        <div class="officer-role">${o.role}</div>
        <div class="officer-name">${o.name}</div>
        <div class="officer-inst">${o.institution}<br>${o.location}</div>
        ${o.bio ? `<p class="officer-bio">${o.bio}</p>` : ''}
        ${o.email ? `<div class="officer-email"><a href="mailto:${o.email}">${o.email}</a></div>` : ''}
      </div>
    </div>`).join('');
}

/* ── RENDER: MEMBERSHIP ─────────────────────────────────── */
function renderMembership() {
  const S = window.SITE;
  document.getElementById('membership-intro').textContent = S.membershipIntro || '';
  document.getElementById('membership-benefits').innerHTML = (S.membershipBenefits || []).map(b => `
    <div class="benefit-item">
      <div class="benefit-icon">${b.icon}</div>
      <div class="benefit-text"><h4>${b.title}</h4><p>${b.text}</p></div>
    </div>`).join('');
}

/* ── RENDER: MEETINGS LIST ──────────────────────────────── */
function renderMeetings() {
  const meetings = (window.MEETINGS || []).sort((a,b) => b.year - a.year);
  const next = meetings.find(m => m.status === 'upcoming') || meetings[0];
  const past = meetings.filter(m => m.status === 'past');

  if (!next) return;

  // Hero
  document.getElementById('mtg-hero-title').textContent = next.title;
  document.getElementById('mtg-hero-theme').textContent = next.theme ? `"${next.theme}"` : '';
  document.getElementById('mtg-hero-meta').innerHTML = `
    <div class="meta-chip"><span class="ico">📅</span>${next.date}</div>
    <div class="meta-chip"><span class="ico">📍</span>${next.location}</div>
    ${next.host ? `<div class="meta-chip"><span class="ico">🏛️</span>${next.host}</div>` : ''}`;
  document.getElementById('mtg-hero-actions').innerHTML = [
    next.cfpLink   ? `<a class="btn btn-primary" href="${next.cfpLink}" target="_blank">Submit Abstract</a>` : '',
    next.regLink   ? `<a class="btn btn-outline" href="${next.regLink}" target="_blank">Register</a>` : '',
    next.programLink ? `<a class="btn btn-outline" href="${next.programLink}" target="_blank">View Program</a>` : ''
  ].filter(Boolean).join('') || '<span style="color:rgba(255,255,255,.6);font-size:.9rem;">Registration details coming soon</span>';

  // Details
  document.getElementById('mtg-description').innerHTML = `<p style="color:var(--muted);">${next.description || ''}</p>`;
  if (next.keynote) {
    document.getElementById('mtg-description').innerHTML += `<p style="color:var(--muted);"><strong>Keynote:</strong> ${next.keynote}</p>`;
  }

  // Schedule
  document.getElementById('mtg-schedule').innerHTML = (next.schedule || []).length
    ? `<table class="schedule-table">
        ${next.schedule.map(s => `
          <tr><td class="schedule-time">${s.time}</td><td>${s.event}</td></tr>`).join('')}
       </table>`
    : `<p style="color:var(--muted);font-size:.9rem;">Schedule will be posted closer to the meeting date.</p>`;

  // Photos
  document.getElementById('mtg-photos').innerHTML = photoGridHTML(next.photos || [], next.year);

  // Past meetings list
  document.getElementById('mtg-past-list').innerHTML = past.map(m => `
    <div class="past-meeting-row">
      <div class="past-year">${m.year}</div>
      <div class="past-info">
        <div class="past-title">${m.title}</div>
        ${m.location ? `<div class="past-loc">📍 ${m.location}</div>` : ''}
      </div>
      <a class="past-link" onclick="showPage('meeting-detail', {year:${m.year}});return false;">View Archive →</a>
    </div>`).join('');
}

/* ── RENDER: MEETING DETAIL (archive) ──────────────────── */
function renderMeetingDetail(year) {
  const m = (window.MEETINGS || []).find(x => x.year == year);
  if (!m) { document.getElementById('meeting-detail-content').innerHTML = '<p>Meeting not found.</p>'; return; }

  document.getElementById('archive-year').textContent  = m.year;
  document.getElementById('archive-title').textContent = m.title;
  document.getElementById('archive-theme').textContent = m.theme ? `"${m.theme}"` : '';
  document.getElementById('archive-meta').innerHTML = `
    <div class="meta-chip"><span class="ico">📅</span>${m.date}</div>
    ${m.location ? `<div class="meta-chip"><span class="ico">📍</span>${m.location}</div>` : ''}
    ${m.host     ? `<div class="meta-chip"><span class="ico">🏛️</span>${m.host}</div>`     : ''}
    ${m.keynote  ? `<div class="meta-chip"><span class="ico">🎤</span>Keynote: ${m.keynote}</div>` : ''}`;

  // Action links
  document.getElementById('archive-links').innerHTML = [
    m.programLink ? `<a class="btn btn-primary btn-sm" href="${m.programLink}" target="_blank">View Program</a>` : '',
    m.cfpLink     ? `<a class="btn btn-ghost btn-sm" href="${m.cfpLink}" target="_blank">Original CFP</a>` : ''
  ].filter(Boolean).join('');

  document.getElementById('archive-description').innerHTML = `<p style="color:var(--muted);">${m.description || ''}</p>`;

  // Highlights
  document.getElementById('archive-highlights').innerHTML = (m.highlights || []).length
    ? `<ul class="highlights-list">${m.highlights.map(h => `<li>${h}</li>`).join('')}</ul>`
    : `<p style="color:var(--muted);font-size:.9rem;">No highlights recorded.</p>`;

  // Awards
  document.getElementById('archive-awards').innerHTML = (m.awards || []).length
    ? `<table class="awards-table">
         <thead><tr><th>Award</th><th>Recipient</th><th>Institution</th></tr></thead>
         <tbody>${m.awards.map(a => `
           <tr><td class="award-name">${a.award}</td><td>${a.recipient}</td><td>${a.institution}</td></tr>`).join('')}
         </tbody></table>`
    : `<p style="color:var(--muted);font-size:.9rem;">Award records not yet entered.</p>`;

  // Schedule
  document.getElementById('archive-schedule').innerHTML = (m.schedule || []).length
    ? `<table class="schedule-table">
        ${m.schedule.map(s => `<tr><td class="schedule-time">${s.time}</td><td>${s.event}</td></tr>`).join('')}
       </table>`
    : `<p style="color:var(--muted);font-size:.9rem;">Schedule not recorded.</p>`;

  // Photos
  document.getElementById('archive-photos').innerHTML = (m.photos || []).length
    ? photoGridHTML(m.photos, m.year)
    : `<p style="color:var(--muted);">No photos available for this meeting.</p>`;
}

/* ── RENDER: ANNOUNCEMENTS ──────────────────────────────── */
function renderAnnouncements() {
  const items = window.SITE.announcements || [];
  document.getElementById('announcements-list').innerHTML = items.map(a => `
    <div class="announce-item ${a.type || ''}">
      <div class="meta">Posted ${a.date}</div>
      <h3>${a.title}</h3>
      <p>${a.body}</p>
    </div>`).join('');
}

/* ── RENDER: NEWSLETTER ─────────────────────────────────── */
function renderNewsletter() {
  const S = window.SITE;
  document.getElementById('newsletter-intro').textContent = S.newsletterIntro || '';
  document.getElementById('newsletter-submit-text').textContent = S.newsletterSubmit || '';
  document.getElementById('newsletter-grid').innerHTML = (S.newsletters || []).map(n => `
    <div class="newsletter-card">
      <div class="newsletter-cover">
        <div class="vol">${n.volume}</div>
        <div class="issue-title">${n.title}</div>
      </div>
      <div class="newsletter-body">
        <p>${n.summary}</p>
        <a class="btn btn-teal btn-sm" ${n.link ? `href="${n.link}" target="_blank"` : ''}>
          ${n.link ? 'Read Issue →' : 'Coming Soon'}
        </a>
      </div>
    </div>`).join('');
}

/* ── BUILD MEETINGS DROPDOWN ────────────────────────────── */
function buildMeetingsDropdown() {
  const meetings = (window.MEETINGS || []).sort((a,b) => b.year - a.year);
  const upcoming = meetings.filter(m => m.status === 'upcoming');
  const past     = meetings.filter(m => m.status === 'past');

  let html = '';
  if (upcoming.length) {
    html += `<div class="dropdown-divider">Upcoming</div>`;
    upcoming.forEach(m => {
      html += `<a onclick="showPage('meetings');return false;"><span class="dropdown-year">${m.year}</span> ${m.title}</a>`;
    });
  }
  if (past.length) {
    html += `<div class="dropdown-divider">Past Meetings</div>`;
    past.forEach(m => {
      html += `<a onclick="showPage('meeting-detail',{year:${m.year}});return false;"><span class="dropdown-year">${m.year}</span> ${m.title}</a>`;
    });
  }
  document.getElementById('meetings-dropdown').innerHTML = html;
}

/* ── BUILD FOOTER QUICK LINKS ───────────────────────────── */
function buildFooter() {
  const S = window.SITE;
  document.getElementById('footer-year').textContent  = new Date().getFullYear();
  document.getElementById('footer-region').innerHTML  = S.region;
  document.getElementById('footer-aag-url').href      = S.aagUrl;
  document.getElementById('footer-aag-url').textContent = S.aagUrl.replace('https://', '');

  const meetings = (window.MEETINGS || []).sort((a,b) => b.year - a.year).slice(0, 4);
  document.getElementById('footer-meetings').innerHTML = meetings.map(m =>
    `<li><span onclick="showPage('meeting-detail',{year:${m.year}})">${m.year} — ${m.title.slice(0,30)}${m.title.length > 30 ? '…' : ''}</span></li>`
  ).join('');
}

/* ── ROUTE FROM HASH ────────────────────────────────────── */
function routeFromHash() {
  const h = (location.hash || '#home').replace('#', '');
  if (h.startsWith('meeting-') && h.length > 8) {
    const yr = parseInt(h.replace('meeting-', ''), 10);
    if (!isNaN(yr)) { showPage('meeting-detail', { year: yr }); return; }
  }
  const valid = ['home','officers','membership','meetings','meeting-detail','announcements','newsletter'];
  showPage(valid.includes(h) ? h : 'home');
}

/* ── MOBILE DROPDOWN TOGGLE ─────────────────────────────── */
function setupMobileDropdown() {
  document.querySelectorAll('.nav-dropdown > .nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      if (window.innerWidth <= 820) {
        e.preventDefault(); e.stopPropagation();
        this.closest('.nav-dropdown').classList.toggle('open');
      }
    });
  });
}

/* ── INIT ───────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderHome();
  renderOfficers();
  renderMembership();
  renderMeetings();
  renderAnnouncements();
  renderNewsletter();
  buildMeetingsDropdown();
  buildFooter();
  setupMobileDropdown();
  window.addEventListener('hashchange', routeFromHash);
  routeFromHash();
});
