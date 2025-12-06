const container = document.querySelector('.container');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

let currentSection = 0;
let isScrolling = false;
const sections = document.querySelectorAll('.section');
const totalSections = sections.length;

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close menu on link click
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    
    const sectionIndex = parseInt(link.getAttribute('data-section'));
    scrollToSection(sectionIndex);
  });
});

function scrollToSection(index) {
  if (index < 0 || index >= totalSections || isScrolling) return;

  isScrolling = true;
  currentSection = index;
  const scrollPosition = index * window.innerHeight;

  container.scrollTo({
    top: scrollPosition,
    behavior: 'smooth'
  });

  setTimeout(() => {
    isScrolling = false;
  }, 900);
}

// Wheel scroll with momentum
let wheelTimeout;
container.addEventListener('wheel', (e) => {
  e.preventDefault();
  clearTimeout(wheelTimeout);

  if (e.deltaY > 0) {
    scrollToSection(currentSection + 1);
  } else {
    scrollToSection(currentSection - 1);
  }

  wheelTimeout = setTimeout(() => {}, 100);
}, { passive: false });

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown' || e.key === ' ') {
    scrollToSection(currentSection + 1);
  } else if (e.key === 'ArrowUp') {
    scrollToSection(currentSection - 1);
  }
});

// Detect current section on scroll
container.addEventListener('scroll', () => {
  const scrollTop = container.scrollTop;
  currentSection = Math.round(scrollTop / window.innerHeight);
});

// Touch swipe support for mobile
let touchStart = 0;
let touchEnd = 0;

container.addEventListener('touchstart', (e) => {
  touchStart = e.changedTouches[0].screenY;
});

container.addEventListener('touchend', (e) => {
  touchEnd = e.changedTouches[0].screenY;
  handleSwipe();
});

function handleSwipe() {
  if (touchStart - touchEnd > 50) {
    scrollToSection(currentSection + 1);
  }
  if (touchEnd - touchStart > 50) {
    scrollToSection(currentSection - 1);
  }
}

// Page load animation trigger
window.addEventListener('load', () => {
  console.log('Portfolio loaded');
});

