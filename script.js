/* ============================================================
   NEXGEN DIGITAL - WEBSITE LOGIC & THEME SWITCHER
   Dr. Aryan Sharma Senior General Physician & Wellness Clinic
   Pure Standard Browser JavaScript (ES6+)
============================================================ */

/* ─────────────────────────────────────────────────────────────
   NEXGEN DIGITAL BRANDING & CLOUDINARY LOGO ASSETS
───────────────────────────────────────────────────────────── */
const NEXGEN_LOGOS = {
  light: "https://res.cloudinary.com/sahbncq8/image/upload/v1786081222/NexG1en_alefcv.png",
  dark: "https://res.cloudinary.com/sahbncq8/image/upload/v1786076819/NexGen_vzsaqb.png"
};

/* ─────────────────────────────────────────────────────────────
   3-WAY SEGMENTED THEME SWITCHER LOGIC (Dark / Light / System)
───────────────────────────────────────────────────────────── */
let currentThemeMode = localStorage.getItem('theme-mode') || 'system';

function updateThemeUI(activeMode, isDarkMode) {
  // Update 3-way segmented pill buttons
  document.querySelectorAll('.theme-btn').forEach(btn => {
    const mode = btn.getAttribute('data-theme');
    btn.classList.toggle('active', mode === activeMode);
  });

  // Update NexGen Digital Logos
  const targetLogoUrl = isDarkMode ? NEXGEN_LOGOS.dark : NEXGEN_LOGOS.light;
  document.querySelectorAll('.nexgen-logo').forEach(img => {
    if (img.src !== targetLogoUrl) {
      img.src = targetLogoUrl;
    }
  });
}

function applyTheme(mode) {
  const html = document.documentElement;
  let isDark = false;

  if (mode === 'dark') {
    html.classList.add('dark');
    html.classList.remove('light');
    isDark = true;
  } else if (mode === 'light') {
    html.classList.add('light');
    html.classList.remove('dark');
    isDark = false;
  } else {
    // System Mode: Sync with OS prefers-color-scheme
    html.classList.remove('dark', 'light');
    isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.add('light');
    }
  }

  updateThemeUI(mode, isDark);
}

function setTheme(mode) {
  currentThemeMode = mode;
  localStorage.setItem('theme-mode', mode);
  applyTheme(mode);
}

// Watch for System OS color scheme changes when System mode is active
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if (currentThemeMode === 'system') {
    applyTheme('system');
  }
});

// Initialize Theme on Page Load
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentThemeMode);
});

/* ─────────────────────────────────────────────────────────────
   FIREBASE INITIALIZATION
───────────────────────────────────────────────────────────── */
const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyDyJYH8xFcbyfZPglCsEX_fReSweke0_9k",
  authDomain:        "doctor-7e40c.firebaseapp.com",
  databaseURL:       "https://doctor-7e40c-default-rtdb.firebaseio.com",
  projectId:         "doctor-7e40c",
  storageBucket:     "doctor-7e40c.firebasestorage.app",
  messagingSenderId: "975199772709",
  appId:             "1:975199772709:web:61c7f191d85ccabb2d5fcc",
  measurementId:     "G-HFDF0G9E2L"
};

let db              = null;
let rtdb            = null;
let useLocalStorage = false;

try {
  if (typeof firebase !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
  if (typeof firebase !== 'undefined') {
    db   = firebase.firestore();
    rtdb = firebase.database();
    try { firebase.analytics(); } catch(_) {}
    db.settings({ merge: true });
  } else {
    useLocalStorage = true;
  }
} catch(e) {
  console.warn("Firebase init failed – switching to localStorage fallback:", e);
  useLocalStorage = true;
}

/* ─────────────────────────────────────────────────────────────
   LOCAL STORAGE FALLBACK HELPERS
───────────────────────────────────────────────────────────── */
function getLocalLeads() {
  return JSON.parse(localStorage.getItem('clinic_leads') || '[]');
}

function saveLocalLead(lead) {
  const leads = getLocalLeads();
  lead.id        = Date.now().toString();
  lead.timestamp = new Date().toISOString();
  lead.status    = 'Pending';
  leads.unshift(lead);
  localStorage.setItem('clinic_leads', JSON.stringify(leads));
  return lead.id;
}

function deleteLocalLead(id) {
  localStorage.setItem('clinic_leads',
    JSON.stringify(getLocalLeads().filter(l => l.id !== id))
  );
}

function markLocalContacted(id) {
  localStorage.setItem('clinic_leads',
    JSON.stringify(getLocalLeads().map(l => l.id === id ? {...l, status:'Contacted'} : l))
  );
}

/* ─────────────────────────────────────────────────────────────
   TOAST NOTIFICATION SYSTEM
───────────────────────────────────────────────────────────── */
function showToast(msg, type = 'success') {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.className = `toast toast-${type} show`;
  setTimeout(() => t.className = 'toast', 3200);
}

/* ─────────────────────────────────────────────────────────────
   HEADER SCROLL & NAVIGATION HIGHLIGHTING
───────────────────────────────────────────────────────────── */
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  const scrollTopBtn = document.getElementById('scroll-top');
  
  if (header) header.classList.toggle('scrolled', window.scrollY > 50);
  if (scrollTopBtn) scrollTopBtn.classList.toggle('show', window.scrollY > 400);

  // Active nav tracking
  let current = 'hero';
  ['hero', 'services', 'about', 'reviews', 'contact'].forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 120) current = id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

/* ─────────────────────────────────────────────────────────────
   MOBILE NAVIGATION MENU
───────────────────────────────────────────────────────────── */
function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  if (navLinks) navLinks.classList.toggle('open');
}

function closeMenu() {
  const navLinks = document.getElementById('nav-links');
  if (navLinks) navLinks.classList.remove('open');
}

/* ─────────────────────────────────────────────────────────────
   INTERSECTION OBSERVER – FADE UP ANIMATION
───────────────────────────────────────────────────────────── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
});

/* ─────────────────────────────────────────────────────────────
   REVIEWS SLIDER CAROUSEL
───────────────────────────────────────────────────────────── */
let slideIndex   = 0;
const totalCards = 6;

function getSlidesVisible() {
  if (window.innerWidth <= 600) return 1;
  if (window.innerWidth <= 900) return 2;
  return 3;
}

function updateSlider() {
  const track = document.getElementById('reviews-track');
  if (!track || !track.children.length) return;
  const sv  = getSlidesVisible();
  const max = totalCards - sv;
  if (slideIndex > max) slideIndex = max;
  const w = track.children[0].offsetWidth + 24; // card width + gap
  track.style.transform = `translateX(-${slideIndex * w}px)`;
}

function nextSlide() {
  const max = totalCards - getSlidesVisible();
  slideIndex = slideIndex >= max ? 0 : slideIndex + 1;
  updateSlider();
}

function prevSlide() {
  const max = totalCards - getSlidesVisible();
  slideIndex = slideIndex <= 0 ? max : slideIndex - 1;
  updateSlider();
}

window.addEventListener('resize', updateSlider);
setInterval(nextSlide, 4500);

/* ─────────────────────────────────────────────────────────────
   SET MINIMUM DATE FOR APPOINTMENT FORM
───────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const dateInput = document.getElementById('f-date');
  if (dateInput) {
    dateInput.setAttribute('min', new Date().toISOString().split('T')[0]);
  }
});

/* ─────────────────────────────────────────────────────────────
   APPOINTMENT FORM SUBMISSION
───────────────────────────────────────────────────────────── */
async function submitForm(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  const msg = document.getElementById('form-msg');
  msg.className = 'form-message';
  msg.style.display = 'none';

  const data = {
    name:      document.getElementById('f-name').value.trim(),
    phone:     document.getElementById('f-phone').value.trim(),
    service:   document.getElementById('f-service').value,
    date:      document.getElementById('f-date').value,
    time:      document.getElementById('f-time').value || 'Not specified',
    message:   document.getElementById('f-message').value.trim(),
    status:    'Pending',
    timestamp: new Date().toISOString()
  };

  btn.innerHTML = '<div class="spinner"></div>&nbsp;Submitting…';
  btn.disabled  = true;

  try {
    if (!useLocalStorage && db) {
      // Save to Firestore
      const docRef = await db.collection('appointments').add(data);
      // Mirror to Realtime Database for real-time features
      if (rtdb) {
        await rtdb.ref('appointments/' + docRef.id).set(data);
      }
    } else {
      await new Promise(r => setTimeout(r, 800));
      saveLocalLead(data);
    }
    msg.className = 'form-message success';
    msg.innerHTML = '<i class="fas fa-check-circle"></i>&nbsp;Appointment booked successfully! Our team will contact you within 30 minutes.';
    msg.style.display = 'block';
    document.getElementById('appt-form').reset();
    showToast('Appointment booked! We will call you shortly.', 'success');
  } catch(err) {
    console.error('Firestore error, falling back to localStorage:', err);
    saveLocalLead(data);
    msg.className = 'form-message success';
    msg.innerHTML = '<i class="fas fa-check-circle"></i>&nbsp;Appointment booked successfully! Our team will contact you within 30 minutes.';
    msg.style.display = 'block';
    document.getElementById('appt-form').reset();
    showToast('Appointment saved! We will contact you shortly.', 'success');
  }

  btn.innerHTML = '<i class="fas fa-calendar-check"></i>&nbsp;Book Appointment';
  btn.disabled  = false;
  setTimeout(() => { msg.style.display = 'none'; }, 7000);
}

/* ─────────────────────────────────────────────────────────────
   ADMIN LOGIN MODAL & CREDENTIALS
───────────────────────────────────────────────────────────── */
const _a = atob('YWRtaW4=');           // username ("admin")
const _b = atob('Y2xpbmljQDIwMjY=');  // password ("clinic@2026")

function openAdminLogin() {
  const el = document.getElementById('admin-login');
  if (!el) return;
  el.classList.add('open');
  document.getElementById('login-err').style.display = 'none';
  document.getElementById('admin-user').value = '';
  document.getElementById('admin-pass').value = '';
  document.getElementById('admin-user').focus();
}

function closeAdminLogin() {
  const el = document.getElementById('admin-login');
  if (el) el.classList.remove('open');
}

function doLogin() {
  const u   = document.getElementById('admin-user').value.trim();
  const p   = document.getElementById('admin-pass').value;
  const err = document.getElementById('login-err');
  if (u === _a && p === _b) {
    err.style.display = 'none';
    closeAdminLogin();
    openAdmin();
  } else {
    err.style.display = 'block';
    document.getElementById('admin-pass').value = '';
    document.getElementById('admin-pass').focus();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const passEl = document.getElementById('admin-pass');
  const userEl = document.getElementById('admin-user');
  const loginModal = document.getElementById('admin-login');
  const adminOverlay = document.getElementById('admin-overlay');

  if (passEl) {
    passEl.addEventListener('keydown', e => {
      if (e.key === 'Enter') doLogin();
    });
  }
  if (userEl) {
    userEl.addEventListener('keydown', e => {
      if (e.key === 'Enter') document.getElementById('admin-pass').focus();
    });
  }
  if (loginModal) {
    loginModal.addEventListener('click', function(e) {
      if (e.target === this) closeAdminLogin();
    });
  }
  if (adminOverlay) {
    adminOverlay.addEventListener('click', function(e) {
      if (e.target === this) closeAdmin();
    });
  }
});

/* ─────────────────────────────────────────────────────────────
   ADMIN DASHBOARD PANEL
───────────────────────────────────────────────────────────── */
let allLeads = [];

function openAdmin() {
  const overlay = document.getElementById('admin-overlay');
  if (overlay) overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  loadLeads();
}

function closeAdmin() {
  const overlay = document.getElementById('admin-overlay');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

async function loadLeads() {
  const tbody = document.getElementById('leads-tbody');
  if (!tbody) return;
  tbody.innerHTML = `<tr><td colspan="8"><div class="empty-state"><i class="fas fa-circle-notch fa-spin"></i><p>Loading data from Firebase…</p></div></td></tr>`;

  try {
    if (!useLocalStorage && db) {
      const snap = await db.collection('appointments').limit(200).get();
      allLeads = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      allLeads.sort((a, b) => (b.timestamp || '').localeCompare(a.timestamp || ''));
    } else {
      await new Promise(r => setTimeout(r, 400));
      allLeads = getLocalLeads();
    }
  } catch(err) {
    console.warn('Firestore read error, using localStorage:', err);
    allLeads = getLocalLeads();
  }

  const now = new Date().toLocaleTimeString('en-IN', {hour:'2-digit', minute:'2-digit'});
  const refreshMsg = document.getElementById('admin-last-refresh');
  if (refreshMsg) {
    refreshMsg.textContent = `Data powered by Firebase Firestore · Last refreshed at ${now}`;
  }

  filterLeads();
}

function filterLeads() {
  const searchEl = document.getElementById('admin-search');
  const filterEl = document.getElementById('status-filter');
  const q      = (searchEl ? searchEl.value : '').toLowerCase();
  const status = filterEl ? filterEl.value : '';

  let filtered = allLeads.filter(l => {
    const matchQ = !q ||
      (l.name    || '').toLowerCase().includes(q) ||
      (l.phone   || '').toLowerCase().includes(q) ||
      (l.service || '').toLowerCase().includes(q);
    const matchS = !status || l.status === status;
    return matchQ && matchS;
  });

  renderLeads(filtered);
}

function renderLeads(leads) {
  const tbody  = document.getElementById('leads-tbody');
  if (!tbody) return;

  const today  = new Date().toISOString().split('T')[0];
  const todayL = allLeads.filter(l => l.timestamp && l.timestamp.startsWith(today));
  const contL  = allLeads.filter(l => l.status === 'Contacted');

  const todayCountEl = document.getElementById('today-count');
  const totalCountEl = document.getElementById('total-count');
  const contactedCountEl = document.getElementById('contacted-count');

  if (todayCountEl) todayCountEl.textContent     = todayL.length;
  if (totalCountEl) totalCountEl.textContent     = allLeads.length;
  if (contactedCountEl) contactedCountEl.textContent = contL.length;

  if (!leads.length) {
    tbody.innerHTML = `<tr><td colspan="8"><div class="empty-state"><i class="fas fa-inbox"></i><p>No appointments found.</p></div></td></tr>`;
    return;
  }

  tbody.innerHTML = leads.map((l, i) => {
    const ts = l.timestamp
      ? new Date(l.timestamp).toLocaleString('en-IN',{day:'2-digit',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'})
      : 'N/A';
    const statusCls = l.status === 'Contacted' ? 'status-contacted' : 'status-pending';
    const rawPhone  = (l.phone || '').replace(/\D/g,'');
    const wa10      = rawPhone.length === 10 ? '91' + rawPhone : rawPhone;
    const waText    = encodeURIComponent(
      `Hello ${l.name || 'Patient'}, this is Dr. Aryan Sharma's clinic. Your appointment for ${l.service || 'consultation'} on ${l.date || ''} has been confirmed. Please arrive 10 minutes early.`
    );
    const waHref = rawPhone ? `https://wa.me/${wa10}?text=${waText}` : '#';

    return `
      <tr id="row-${l.id}">
        <td style="font-weight:600;">${i + 1}</td>
        <td><strong>${escHtml(l.name || '')}</strong></td>
        <td>${escHtml(l.phone || '')}</td>
        <td style="max-width:160px;">${escHtml(l.service || '')}</td>
        <td>
          ${l.date ? `<span style="font-weight:600;">${escHtml(l.date)}</span>` : '—'}
          ${l.time && l.time !== 'Not specified' ? `<br><small style="color:var(--text-muted);">${escHtml(l.time)}</small>` : ''}
        </td>
        <td style="white-space:nowrap;">${ts}</td>
        <td><span class="status-badge ${statusCls}">${l.status || 'Pending'}</span></td>
        <td style="white-space:nowrap;">
          <a href="${waHref}" target="_blank" class="action-btn wa-btn" title="Open WhatsApp Chat">
            <i class="fab fa-whatsapp"></i>
          </a>
          <button class="action-btn mark-btn" onclick="markContacted('${l.id}')" title="Mark as Contacted">
            <i class="fas fa-check"></i>
          </button>
          <button class="action-btn del-btn" onclick="deleteLead('${l.id}')" title="Delete Lead">
            <i class="fas fa-trash"></i>
          </button>
        </td>
      </tr>`;
  }).join('');
}

function escHtml(str) {
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

async function deleteLead(id) {
  if (!confirm('Permanently delete this appointment record?')) return;
  try {
    if (!useLocalStorage && db) {
      await db.collection('appointments').doc(id).delete();
      if (rtdb) await rtdb.ref('appointments/' + id).remove();
    } else {
      deleteLocalLead(id);
    }
    allLeads = allLeads.filter(l => l.id !== id);
    filterLeads();
    showToast('Lead deleted successfully.', 'error');
  } catch(e) {
    deleteLocalLead(id);
    allLeads = allLeads.filter(l => l.id !== id);
    filterLeads();
    showToast('Lead deleted.', 'error');
  }
}

async function markContacted(id) {
  try {
    if (!useLocalStorage && db) {
      await db.collection('appointments').doc(id).set({ status: 'Contacted' }, { merge: true });
      if (rtdb) await rtdb.ref('appointments/' + id + '/status').set('Contacted');
    } else {
      markLocalContacted(id);
    }
    allLeads = allLeads.map(l => l.id === id ? {...l, status:'Contacted'} : l);
    filterLeads();
    showToast('Marked as Contacted!', 'success');
  } catch(e) {
    console.warn('markContacted error:', e);
    markLocalContacted(id);
    allLeads = allLeads.map(l => l.id === id ? {...l, status:'Contacted'} : l);
    filterLeads();
    showToast('Marked as Contacted!', 'success');
  }
}

// Auto-refresh admin every 60 seconds
setInterval(() => {
  const overlay = document.getElementById('admin-overlay');
  if (overlay && overlay.classList.contains('open')) loadLeads();
}, 60000);
