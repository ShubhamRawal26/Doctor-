/**
 * SalvaMedic Innovation Clinic — Main Client-Side Logic
 */

// Initialize Lucide Icons, Date Defaults, and Scroll-Triggered Reveal Animations
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
  
  // Set default appointment date to tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateStr = tomorrow.toISOString().split('T')[0];
  const dateInput = document.getElementById('modalDateInput');
  if (dateInput) {
    dateInput.value = dateStr;
  }

  // Sequential Scroll-Triggered Animation Observer
  initScrollAnimations();
});

/**
 * Sequential Intersection Observer:
 * Animates elements one by one as they scroll into view.
 */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.scroll-reveal');
  
  if (!('IntersectionObserver' in window)) {
    // Fallback if browser does not support IntersectionObserver
    revealElements.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target); // Reveal once smoothly
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));
}

// Mobile Menu Drawer Toggle
function toggleMobileMenu() {
  const drawer = document.getElementById('mobileDrawer');
  if (drawer) {
    drawer.classList.toggle('hidden');
  }
}

// 4K Facility Lightbox Modal
function openLightbox(imgSrc, title, dept) {
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  const titleEl = document.getElementById('lightboxTitle');
  const deptEl = document.getElementById('lightboxDept');

  if (img) img.src = imgSrc;
  if (titleEl) titleEl.textContent = title;
  if (deptEl) deptEl.textContent = dept;
  if (modal) modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (modal) modal.classList.add('hidden');
  document.body.style.overflow = '';
}

// Facility Category Filtering
function filterFacilities(category, btnElement) {
  document.querySelectorAll('.facility-filter-btn').forEach(btn => {
    btn.classList.remove('bg-blue-600', 'text-white', 'shadow-xs');
    btn.classList.add('text-slate-600');
  });
  
  if (btnElement) {
    btnElement.classList.add('bg-blue-600', 'text-white', 'shadow-xs');
    btnElement.classList.remove('text-slate-600');
  }

  const cards = document.querySelectorAll('.facility-card');
  cards.forEach(card => {
    if (category === 'all' || card.getAttribute('data-category') === category) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// FAQ Accordion Toggle
function toggleFAQ(id) {
  const answer = document.getElementById(`faq-answer-${id}`);
  const icon = document.getElementById(`faq-icon-${id}`);
  if (!answer) return;

  const isHidden = answer.classList.contains('hidden');
  if (isHidden) {
    answer.classList.remove('hidden');
    if (icon) icon.classList.add('rotate-180', 'text-blue-600');
  } else {
    answer.classList.add('hidden');
    if (icon) icon.classList.remove('rotate-180', 'text-blue-600');
  }
}

// Appointment Booking Modal
function openBookingModal(serviceName, doctorName) {
  if (serviceName) {
    const serviceSelect = document.getElementById('modalServiceInput');
    if (serviceSelect) serviceSelect.value = serviceName;
  }
  if (doctorName) {
    const doctorInput = document.getElementById('modalDoctorInput');
    if (doctorInput) {
      doctorInput.value = doctorName;
    }
  }
  
  const formContainer = document.getElementById('bookingFormContainer');
  const successContainer = document.getElementById('bookingSuccessContainer');
  const modal = document.getElementById('bookingModal');

  if (formContainer) formContainer.classList.remove('hidden');
  if (successContainer) successContainer.classList.add('hidden');
  if (modal) modal.classList.remove('hidden');
  
  document.body.style.overflow = 'hidden';
  if (window.lucide) window.lucide.createIcons();
}

function closeBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (modal) modal.classList.add('hidden');
  document.body.style.overflow = '';
}

// Hero Search Handlers
function handleSearchSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('heroSearchInput');
  const query = input ? input.value.trim() : '';
  if (query) {
    openBookingModal(query, 'Dr. Maria Kovalenko, MD');
  } else {
    openBookingModal('General Doctor Visit', 'Dr. Maria Kovalenko, MD');
  }
}

// Booking Form Submission
function handleBookingSubmit(e) {
  e.preventDefault();
  const service = document.getElementById('modalServiceInput')?.value || '';
  const doctor = document.getElementById('modalDoctorInput')?.value || '';
  const date = document.getElementById('modalDateInput')?.value || '';
  const time = document.getElementById('modalTimeInput')?.value || '';
  const name = document.getElementById('modalNameInput')?.value || '';
  const phone = document.getElementById('modalPhoneInput')?.value || '';

  const refId = 'SLV-' + Math.floor(100000 + Math.random() * 900000);

  const summaryDiv = document.getElementById('bookingSummaryDetails');
  if (summaryDiv) {
    summaryDiv.innerHTML = `
      <div><strong>Appointment Code:</strong> <span class="text-blue-600 font-bold">${refId}</span></div>
      <div><strong>Patient Name:</strong> ${name} (${phone})</div>
      <div><strong>Department / Service:</strong> ${service}</div>
      <div><strong>Assigned Doctor:</strong> ${doctor}</div>
      <div><strong>Date & Time:</strong> ${date} &bull; ${time}</div>
    `;
  }

  const formContainer = document.getElementById('bookingFormContainer');
  const successContainer = document.getElementById('bookingSuccessContainer');

  if (formContainer) formContainer.classList.add('hidden');
  if (successContainer) successContainer.classList.remove('hidden');
  if (window.lucide) window.lucide.createIcons();
}

// Global Keyboard ESC Listener
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeBookingModal();
    closeLightbox();
  }
});
