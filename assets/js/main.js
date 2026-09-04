/**
 * SalvaMedic Innovation Clinic — Main Client-Side Logic
 */

// Initialize Lucide Icons & Defaults on Page Load
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
});

// Mobile Menu Drawer Toggle
function toggleMobileMenu() {
  const drawer = document.getElementById('mobileDrawer');
  if (drawer) {
    drawer.classList.toggle('hidden');
  }
}

// Facility Category Filtering
function filterFacilities(category, btnElement) {
  document.querySelectorAll('.facility-filter-btn').forEach(btn => {
    btn.classList.remove('bg-blue-600', 'text-white', 'shadow-2xs');
    btn.classList.add('text-slate-600');
  });
  
  btnElement.classList.add('bg-blue-600', 'text-white', 'shadow-2xs');
  btnElement.classList.remove('text-slate-600');

  const cards = document.querySelectorAll('.facility-card');
  cards.forEach(card => {
    if (category === 'all' || card.getAttribute('data-category') === category) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
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
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (modal) modal.classList.add('hidden');
}

// FAQ Accordion Toggle
function toggleFaq(button) {
  const item = button.closest('.faq-item');
  if (!item) return;
  
  const content = item.querySelector('.faq-content');
  const wrapper = item.querySelector('.faq-icon-wrapper');
  const isCurrentlyOpen = !content.classList.contains('hidden');

  // Close all other FAQs
  document.querySelectorAll('.faq-item').forEach(el => {
    const elContent = el.querySelector('.faq-content');
    const elWrapper = el.querySelector('.faq-icon-wrapper');
    if (elContent) elContent.classList.add('hidden');
    if (elWrapper) elWrapper.classList.remove('rotate-180', 'bg-blue-50');
  });

  // If clicked FAQ was closed, open it
  if (!isCurrentlyOpen) {
    content.classList.remove('hidden');
    if (wrapper) wrapper.classList.add('rotate-180', 'bg-blue-50');
  }
}

// Appointment Booking Drawer / Modal
function openBookingModal(serviceName, doctorName) {
  if (serviceName) {
    const serviceSelect = document.getElementById('modalServiceInput');
    if (serviceSelect) serviceSelect.value = serviceName;
  }
  if (doctorName) {
    const doctorSelect = document.getElementById('modalDoctorInput');
    if (doctorSelect) doctorSelect.value = doctorName;
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
    openBookingModal('Primary & Family Care', 'Dr. Maria Kovalenko, MD');
  }
}

function handleQuickSearch(term) {
  openBookingModal(term, 'Dr. Maria Kovalenko, MD');
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
      <div><strong>Ref Code:</strong> <span class="text-blue-600 font-bold">${refId}</span></div>
      <div><strong>Patient:</strong> ${name} (${phone})</div>
      <div><strong>Specialty:</strong> ${service}</div>
      <div><strong>Physician:</strong> ${doctor}</div>
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
