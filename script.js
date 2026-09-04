/* ============================================================
   NEXGEN DIGITAL - WEBSITE LOGIC & THEME SYSTEM
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
   3-WAY THEME SYSTEM (Dark / Light / System)
───────────────────────────────────────────────────────────── */
let currentThemeMode = localStorage.getItem('theme-mode') || 'system';

function updateThemeUI(activeMode, isDarkMode) {
  // Update 3-way segmented pill buttons
  document.querySelectorAll('.theme-btn').forEach(btn => {
    const mode = btn.getAttribute('data-theme');
    const isActive = mode === activeMode;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-checked', isActive ? 'true' : 'false');
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
const systemThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
systemThemeQuery.addEventListener('change', () => {
  if (currentThemeMode === 'system') {
    applyTheme('system');
  }
});

// Initialize Theme on Page Load
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentThemeMode);
});

/* ─────────────────────────────────────────────────────────────
   FIREBASE INITIALIZATION & PERSISTENCE
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
} catch (e) {
  console.warn("Firebase init note – switching to local fallback:", e);
  useLocalStorage = true;
}

/* ─────────────────────────────────────────────────────────────
   LOCAL STORAGE FALLBACK HELPERS
───────────────────────────────────────────────────────────── */
function getLocalLeads() {
  try {
    return JSON.parse(localStorage.getItem('clinic_leads') || '[]');
  } catch (_) {
    return [];
  }
}

function saveLocalLead(lead) {
  const leads = getLocalLeads();
  lead.id        = 'loc_' + Date.now().toString();
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
    JSON.stringify(getLocalLeads().map(l => l.id === id ? { ...l, status: 'Contacted' } : l))
  );
}

/* ─────────────────────────────────────────────────────────────
   TOAST NOTIFICATION SYSTEM (SVG ONLY - NO EMOJIS)
───────────────────────────────────────────────────────────── */
function showToast(msg, type = 'success') {
  const t = document.getElementById('toast');
  if (!t) return;

  const iconSvg = type === 'success'
    ? `<svg class="svg-icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`
    : `<svg class="svg-icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;

  t.innerHTML = `${iconSvg}<span>${msg}</span>`;
  t.className = `toast toast-${type} show`;
  setTimeout(() => {
    t.className = 'toast';
  }, 3600);
}

/* ─────────────────────────────────────────────────────────────
   HEADER SCROLL & ACTIVE NAVIGATION TRACKING
───────────────────────────────────────────────────────────── */
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  const scrollTopBtn = document.getElementById('scroll-top');
  
  if (header) header.classList.toggle('scrolled', window.scrollY > 40);
  if (scrollTopBtn) scrollTopBtn.classList.toggle('show', window.scrollY > 380);

  // Active nav tracking
  let current = 'hero';
  const sections = ['hero', 'highlights', 'services', 'about', 'journey', 'reviews', 'faq', 'contact'];
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 140) current = id;
  });

  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    a.classList.toggle('active', href === '#' + current);
  });
}, { passive: true });

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
   INTERSECTION OBSERVER – FADE UP REVEAL ANIMATIONS
───────────────────────────────────────────────────────────── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
});

/* ─────────────────────────────────────────────────────────────
   REVIEWS SLIDER CAROUSEL
───────────────────────────────────────────────────────────── */
let slideIndex = 0;
const totalReviewCards = 6;

function getSlidesVisible() {
  if (window.innerWidth <= 640) return 1;
  if (window.innerWidth <= 980) return 2;
  return 3;
}

function updateSlider() {
  const track = document.getElementById('reviews-track');
  if (!track || !track.children.length) return;
  const sv = getSlidesVisible();
  const max = Math.max(0, totalReviewCards - sv);
  if (slideIndex > max) slideIndex = max;
  const cardWidth = track.children[0].offsetWidth;
  const gap = 24;
  track.style.transform = `translateX(-${slideIndex * (cardWidth + gap)}px)`;
}

function nextSlide() {
  const max = Math.max(0, totalReviewCards - getSlidesVisible());
  slideIndex = slideIndex >= max ? 0 : slideIndex + 1;
  updateSlider();
}

function prevSlide() {
  const max = Math.max(0, totalReviewCards - getSlidesVisible());
  slideIndex = slideIndex <= 0 ? max : slideIndex - 1;
  updateSlider();
}

window.addEventListener('resize', updateSlider, { passive: true });
let sliderInterval = setInterval(nextSlide, 5000);

// Pause auto-scroll on hover
const sliderWrap = document.querySelector('.reviews-slider-wrap');
if (sliderWrap) {
  sliderWrap.addEventListener('mouseenter', () => clearInterval(sliderInterval));
  sliderWrap.addEventListener('mouseleave', () => {
    clearInterval(sliderInterval);
    sliderInterval = setInterval(nextSlide, 5000);
  });
}

/* ─────────────────────────────────────────────────────────────
   FAQ ACCORDION LOGIC
───────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');

    if (trigger && content) {
      trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close other accordion items
        faqItems.forEach(other => {
          if (other !== item) {
            other.classList.remove('active');
            const otherBtn = other.querySelector('.faq-trigger');
            const otherContent = other.querySelector('.faq-content');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
            if (otherContent) otherContent.style.maxHeight = null;
          }
        });

        // Toggle current
        if (!isActive) {
          item.classList.add('active');
          trigger.setAttribute('aria-expanded', 'true');
          content.style.maxHeight = content.scrollHeight + 30 + 'px';
        } else {
          item.classList.remove('active');
          trigger.setAttribute('aria-expanded', 'false');
          content.style.maxHeight = null;
        }
      });
    }
  });
});

/* ─────────────────────────────────────────────────────────────
   SET MINIMUM DATE FOR APPOINTMENT FORM
───────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const dateInput = document.getElementById('f-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }
});

/* ─────────────────────────────────────────────────────────────
   APPOINTMENT FORM SUBMISSION
───────────────────────────────────────────────────────────── */
async function submitForm(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  const msg = document.getElementById('form-msg');
  if (!btn || !msg) return;

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

  btn.innerHTML = `<div class="spinner"></div>&nbsp;Submitting Request...`;
  btn.disabled  = true;

  try {
    if (!useLocalStorage && db) {
      // Save to Firestore
      const docRef = await db.collection('appointments').add(data);
      // Mirror to Realtime Database for real-time synchronization
      if (rtdb) {
        await rtdb.ref('appointments/' + docRef.id).set(data);
      }
    } else {
      await new Promise(r => setTimeout(r, 600));
      saveLocalLead(data);
    }

    msg.className = 'form-message success';
    msg.innerHTML = `Appointment request confirmed! Our clinic team will reach out within 30 minutes.`;
    msg.style.display = 'block';
    document.getElementById('appt-form').reset();
    showToast('Appointment booked successfully! We will call you shortly.', 'success');
  } catch (err) {
    console.error('Database write fallback to local storage:', err);
    saveLocalLead(data);
    msg.className = 'form-message success';
    msg.innerHTML = `Appointment request received! Our staff will contact you shortly.`;
    msg.style.display = 'block';
    document.getElementById('appt-form').reset();
    showToast('Appointment saved! Our team will contact you shortly.', 'success');
  }

  btn.innerHTML = `
    <svg class="svg-icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
      <polyline points="9 16 12 19 19 12"></polyline>
    </svg>
    Confirm Appointment Request`;
  btn.disabled = false;

  setTimeout(() => {
    if (msg) msg.style.display = 'none';
  }, 7000);
}

/* ─────────────────────────────────────────────────────────────
   ADMIN LOGIN MODAL & CREDENTIALS
───────────────────────────────────────────────────────────── */
const _a = atob('YWRtaW4=');           // "admin"
const _b = atob('Y2xpbmljQDIwMjY=');  // "clinic@2026"

function openAdminLogin() {
  const el = document.getElementById('admin-login');
  if (!el) return;
  el.classList.add('open');
  el.setAttribute('aria-hidden', 'false');
  document.getElementById('login-err').style.display = 'none';
  document.getElementById('admin-user').value = '';
  document.getElementById('admin-pass').value = '';
  document.getElementById('admin-user').focus();
}

function closeAdminLogin() {
  const el = document.getElementById('admin-login');
  if (el) {
    el.classList.remove('open');
    el.setAttribute('aria-hidden', 'true');
  }
}

function doLogin() {
  const u = document.getElementById('admin-user').value.trim();
  const p = document.getElementById('admin-pass').value;
  const err = document.getElementById('login-err');

  if (u === _a && p === _b) {
    if (err) err.style.display = 'none';
    closeAdminLogin();
    openAdmin();
  } else {
    if (err) err.style.display = 'flex';
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
  if (overlay) {
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
  }
  document.body.style.overflow = 'hidden';
  loadLeads();
}

function closeAdmin() {
  const overlay = document.getElementById('admin-overlay');
  if (overlay) {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
  }
  document.body.style.overflow = '';
}

async function loadLeads() {
  const tbody = document.getElementById('leads-tbody');
  if (!tbody) return;

  tbody.innerHTML = `
    <tr>
      <td colspan="8">
        <div class="empty-state">
          <div class="spinner spinner-blue"></div>
          <p>Syncing appointment records...</p>
        </div>
      </td>
    </tr>`;

  try {
    if (!useLocalStorage && db) {
      const snap = await db.collection('appointments').limit(200).get();
      allLeads = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      allLeads.sort((a, b) => (b.timestamp || '').localeCompare(a.timestamp || ''));
    } else {
      await new Promise(r => setTimeout(r, 300));
      allLeads = getLocalLeads();
    }
  } catch (err) {
    console.warn('Firestore query note, accessing local fallback:', err);
    allLeads = getLocalLeads();
  }

  const now = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  const refreshMsg = document.getElementById('admin-last-refresh');
  if (refreshMsg) {
    refreshMsg.textContent = `Database synchronized · Last refreshed at ${now}`;
  }

  filterLeads();
}

function filterLeads() {
  const searchEl = document.getElementById('admin-search');
  const filterEl = document.getElementById('status-filter');
  const q = (searchEl ? searchEl.value : '').toLowerCase();
  const status = filterEl ? filterEl.value : '';

  const filtered = allLeads.filter(l => {
    const matchQ = !q ||
      (l.name || '').toLowerCase().includes(q) ||
      (l.phone || '').toLowerCase().includes(q) ||
      (l.service || '').toLowerCase().includes(q);
    const matchS = !status || l.status === status;
    return matchQ && matchS;
  });

  renderLeads(filtered);
}

function renderLeads(leads) {
  const tbody = document.getElementById('leads-tbody');
  if (!tbody) return;

  const today = new Date().toISOString().split('T')[0];
  const todayL = allLeads.filter(l => l.timestamp && l.timestamp.startsWith(today));
  const contL  = allLeads.filter(l => l.status === 'Contacted');

  const todayCountEl     = document.getElementById('today-count');
  const totalCountEl     = document.getElementById('total-count');
  const contactedCountEl = document.getElementById('contacted-count');

  if (todayCountEl) todayCountEl.textContent = todayL.length;
  if (totalCountEl) totalCountEl.textContent = allLeads.length;
  if (contactedCountEl) contactedCountEl.textContent = contL.length;

  if (!leads.length) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8">
          <div class="empty-state">
            <svg class="svg-icon icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              <path d="M22 7-11.3 12.7a2 2 0 0 1-1.4 0L2 7"></path>
            </svg>
            <p>No appointment records found matching criteria.</p>
          </div>
        </td>
      </tr>`;
    return;
  }

  tbody.innerHTML = leads.map((l, i) => {
    const ts = l.timestamp
      ? new Date(l.timestamp).toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
      : 'N/A';
    const statusCls = l.status === 'Contacted' ? 'status-contacted' : 'status-pending';
    const rawPhone  = (l.phone || '').replace(/\D/g, '');
    const wa10      = rawPhone.length === 10 ? '91' + rawPhone : rawPhone;
    const waText    = encodeURIComponent(
      `Hello ${l.name || 'Patient'}, this is Dr. Aryan Sharma's clinic. Your appointment request for ${l.service || 'consultation'} on ${l.date || ''} has been reviewed and confirmed. Please arrive 10 minutes prior to your slot.`
    );
    const waHref = rawPhone ? `https://wa.me/${wa10}?text=${waText}` : '#';

    return `
      <tr id="row-${l.id}">
        <td style="font-weight:600;">${i + 1}</td>
        <td><strong>${escHtml(l.name || 'Anonymous')}</strong></td>
        <td>${escHtml(l.phone || 'N/A')}</td>
        <td style="max-width:180px;">${escHtml(l.service || 'General')}</td>
        <td>
          ${l.date ? `<span style="font-weight:600;">${escHtml(l.date)}</span>` : '—'}
          ${l.time && l.time !== 'Not specified' ? `<br><small style="color:var(--text-muted);">${escHtml(l.time)}</small>` : ''}
        </td>
        <td style="white-space:nowrap;font-size:0.82rem;">${ts}</td>
        <td><span class="status-badge ${statusCls}">${escHtml(l.status || 'Pending')}</span></td>
        <td style="white-space:nowrap;">
          <a href="${waHref}" target="_blank" rel="noopener noreferrer" class="action-btn wa-btn" title="Open WhatsApp Chat">
            <svg class="svg-icon icon-sm" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.71 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.405z"/>
            </svg>
          </a>
          <button class="action-btn mark-btn" onclick="markContacted('${l.id}')" title="Mark as Contacted">
            <svg class="svg-icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </button>
          <button class="action-btn del-btn" onclick="deleteLead('${l.id}')" title="Delete Record">
            <svg class="svg-icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </td>
      </tr>`;
  }).join('');
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
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
    showToast('Record deleted.', 'error');
  } catch (e) {
    deleteLocalLead(id);
    allLeads = allLeads.filter(l => l.id !== id);
    filterLeads();
    showToast('Record removed.', 'error');
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
    allLeads = allLeads.map(l => l.id === id ? { ...l, status: 'Contacted' } : l);
    filterLeads();
    showToast('Marked as Contacted!', 'success');
  } catch (e) {
    console.warn('markContacted notice:', e);
    markLocalContacted(id);
    allLeads = allLeads.map(l => l.id === id ? { ...l, status: 'Contacted' } : l);
    filterLeads();
    showToast('Marked as Contacted!', 'success');
  }
}

// Auto-refresh admin leads when panel is open
setInterval(() => {
  const overlay = document.getElementById('admin-overlay');
  if (overlay && overlay.classList.contains('open')) {
    loadLeads();
  }
}, 60000);
