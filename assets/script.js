// ---------- CONFIG (datos reales de Sanart) ----------
const CONFIG = {
  WHATSAPP_NUMBER: "573186228700",
  INSTAGRAM_URL: "https://www.instagram.com/sanartodontologiaintegral?stkn=MTcyaG16dTV1eHNvbQ==",
  FACEBOOK_URL: "https://www.facebook.com/share/1HwuPZL4Wn/",
  TIKTOK_URL: "https://www.tiktok.com/@sanartodontologia?_r=1&_t=ZS-99uiwZS51Pz",
  SANART_ADDRESS: "Cra 42 # 3-30, Santiago de Cali, Colombia · C.P. 76001"
};
const genericMsg = "Hola Sanart, me gustaría más información sobre sus tratamientos.";

function waLink(message){
  return `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Header scroll state + logo swap (claro sobre el hero oscuro, oscuro ya con scroll)
const header = document.getElementById('siteHeader');
const headerLogo = document.getElementById('headerLogo');
if (header){
  const hasDarkHero = document.body.hasAttribute('data-dark-hero');
  function updateHeader(){
    const scrolled = window.scrollY > 40;
    header.classList.toggle('scrolled', scrolled);
    if (headerLogo){
      if (!hasDarkHero){ headerLogo.src = headerLogo.dataset.dark; }
      else { headerLogo.src = scrolled ? headerLogo.dataset.dark : headerLogo.dataset.light; }
    }
  }
  window.addEventListener('scroll', updateHeader, { passive:true });
  updateHeader();
}

// Mobile menu
const hamburger = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu){
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    hamburger.classList.remove('open'); mobileMenu.classList.remove('open');
  }));
}

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length){
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));
}

// Gallery filters
const filterBtns = document.querySelectorAll('.filter-btn');
const gItems = document.querySelectorAll('.g-item');
if (filterBtns.length && gItems.length){
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      gItems.forEach(item => item.classList.toggle('hide', f !== 'all' && item.dataset.cat !== f));
    });
  });
}

// Lightbox
const lightbox = document.getElementById('lightbox');
if (lightbox){
  const lightboxImg = document.getElementById('lightboxImg');
  let currentGallery = [];
  let currentIndex = 0;
  function openLightbox(index){
    currentGallery = Array.from(document.querySelectorAll('.g-item:not(.hide) img'));
    currentIndex = index;
    lightboxImg.src = currentGallery[currentIndex].src;
    lightboxImg.alt = currentGallery[currentIndex].alt;
    lightbox.classList.add('open');
  }
  document.querySelectorAll('.g-item').forEach((item) => {
    item.addEventListener('click', () => {
      const visible = Array.from(document.querySelectorAll('.g-item:not(.hide) img'));
      const img = item.querySelector('img');
      openLightbox(visible.indexOf(img));
    });
  });
  document.getElementById('lightboxClose').addEventListener('click', () => lightbox.classList.remove('open'));
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.classList.remove('open'); });
  document.getElementById('lightboxNext').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % currentGallery.length;
    lightboxImg.src = currentGallery[currentIndex].src;
  });
  document.getElementById('lightboxPrev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    lightboxImg.src = currentGallery[currentIndex].src;
  });
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') lightbox.classList.remove('open');
    if (e.key === 'ArrowRight') document.getElementById('lightboxNext').click();
    if (e.key === 'ArrowLeft') document.getElementById('lightboxPrev').click();
  });
}

// Booking options
let selectedOption = "Valoración general";
const optionCards = document.querySelectorAll('.option-card');
if (optionCards.length){
  optionCards.forEach(card => {
    card.addEventListener('click', () => {
      optionCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selectedOption = card.dataset.option;
    });
  });
}
const waBookBtn = document.getElementById('whatsappBookBtn');
if (waBookBtn){
  waBookBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const msg = `Hola, Sanart. Me gustaría solicitar información sobre "${selectedOption}" y conocer la disponibilidad para agendar una cita.`;
    window.open(waLink(msg), '_blank');
  });
}

// WhatsApp floating + CTA final (cualquier elemento con esta clase)
document.querySelectorAll('.js-wa-generic').forEach(el => {
  el.addEventListener('click', (e) => { e.preventDefault(); window.open(waLink(genericMsg), '_blank'); });
});

// Contact info fill from CONFIG (cualquier página que tenga estos ids)
function setContactLinks(){
  const phoneEl = document.getElementById('contactPhoneLink');
  const addrEl = document.getElementById('contactAddress');
  const instaEl = document.getElementById('contactInstaLink');
  const fbEl = document.getElementById('contactFbLink');
  const tiktokEl = document.getElementById('contactTiktokLink');
  const footerWa = document.getElementById('footerWhatsapp');
  const footerInsta = document.getElementById('footerInsta');
  const footerFb = document.getElementById('footerFb');
  const footerTiktok = document.getElementById('footerTiktok');

  if (phoneEl){ phoneEl.textContent = "+" + CONFIG.WHATSAPP_NUMBER.replace(/^57/, "57 "); phoneEl.href = waLink(genericMsg); }
  if (footerWa) footerWa.href = waLink(genericMsg);
  if (addrEl) addrEl.textContent = CONFIG.SANART_ADDRESS;
  if (instaEl) instaEl.href = CONFIG.INSTAGRAM_URL;
  if (footerInsta) footerInsta.href = CONFIG.INSTAGRAM_URL;
  if (fbEl) fbEl.href = CONFIG.FACEBOOK_URL;
  if (footerFb) footerFb.href = CONFIG.FACEBOOK_URL;
  if (tiktokEl) tiktokEl.href = CONFIG.TIKTOK_URL;
  if (footerTiktok) footerTiktok.href = CONFIG.TIKTOK_URL;
}
setContactLinks();

// Contact form — sin backend: arma el mensaje y abre WhatsApp
const contactForm = document.getElementById('contactForm');
if (contactForm){
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('f-name').value.trim();
    const phone = document.getElementById('f-phone').value.trim();
    const interest = document.getElementById('f-interest').value;
    const message = document.getElementById('f-message').value.trim();
    let msg = `Hola Sanart, soy ${name} (tel: ${phone}). Me interesa: ${interest}.`;
    if (message) msg += ` ${message}`;
    window.open(waLink(msg), '_blank');
    document.getElementById('formMsg').classList.add('show');
    e.target.reset();
  });
}

// Turismo — formulario de valoración virtual (mismo patrón: arma mensaje y abre WhatsApp)
const tourismForm = document.getElementById('tourismForm');
if (tourismForm){
  tourismForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('t-name').value.trim();
    const country = document.getElementById('t-country').value.trim();
    const plan = document.getElementById('t-plan').value;
    let msg = `Hola Sanart, soy ${name}, escribo desde ${country}. Me interesa el ${plan} de turismo dental y quiero agendar mi valoración virtual.`;
    window.open(waLink(msg), '_blank');
    document.getElementById('tourismFormMsg').classList.add('show');
    e.target.reset();
  });
}

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
