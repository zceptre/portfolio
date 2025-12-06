const container = document.querySelector('.container');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

let currentSection = 0;

// ============================================
// HAMBURGER MENU TOGGLE
// ============================================
hamburger.addEventListener('click', () => {
  const isActive = hamburger.classList.toggle('active');
  navMenu.classList.toggle('active', isActive);
  hamburger.setAttribute('aria-expanded', isActive);
});

// ============================================
// NAVIGATION LINK CLICK HANDLER
// ============================================
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Close hamburger menu
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    
    // Get section index from data-section attribute
    const sectionIndex = parseInt(link.getAttribute('data-section'), 10);
    
    // Scroll to section smoothly
    const targetSection = sections[sectionIndex];
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Update current section and active link
    currentSection = sectionIndex;
    updateActiveNavLink();
  });
});

// ============================================
// DETECT CURRENT SECTION ON SCROLL
// ============================================
window.addEventListener('scroll', () => {
  let closestSection = 0;
  let closestDistance = Infinity;
  
  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    const distance = Math.abs(rect.top);
    
    if (distance < closestDistance) {
      closestDistance = distance;
      closestSection = index;
    }
  });
  
  if (closestSection !== currentSection) {
    currentSection = closestSection;
    updateActiveNavLink();
  }
}, { passive: true });

// ============================================
// UPDATE ACTIVE NAVIGATION LINK
// ============================================
function updateActiveNavLink() {
  navLinks.forEach((link) => {
    const linkSection = parseInt(link.getAttribute('data-section'), 10);
    const isActive = linkSection === currentSection;
    link.classList.toggle('active', isActive);
  });
}

// ============================================
// PAGE LOAD OPTIMIZATION
// ============================================
window.addEventListener('load', () => {
  console.log('Portfolio loaded successfully');
  document.body.classList.add('loaded');
  updateActiveNavLink();
}, { passive: true });

