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
// DETECT CURRENT SECTION ON SCROLL (THROTTLED)
// ============================================
let lastScrollCheck = 0;
const SCROLL_THROTTLE = 100; // Check every 100ms max

window.addEventListener('scroll', () => {
  const now = Date.now();
  if (now - lastScrollCheck < SCROLL_THROTTLE) return;
  
  lastScrollCheck = now;
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
// SCROLL TO TOP BUTTON (Lower Right Corner)
// ============================================
const scrollTopBtn = document.getElementById('scrollTopBtn');
let lastScrollTopCheck = 0;
const SCROLL_TOP_THROTTLE = 150;

if (scrollTopBtn) {
  // Show/hide button based on scroll position (throttled)
  window.addEventListener('scroll', () => {
    const now = Date.now();
    if (now - lastScrollTopCheck < SCROLL_TOP_THROTTLE) return;
    
    lastScrollTopCheck = now;
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  }, { passive: true });

  // Scroll to top when button is clicked
  scrollTopBtn.addEventListener('click', () => {
    // Use instant scroll on mobile, smooth on desktop
    const isMobile = window.innerWidth < 768;
    window.scrollTo({
      top: 0,
      behavior: isMobile ? 'auto' : 'smooth'
    });
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

// ============================================
// AI CHAT WIDGET
// ============================================
const aiChatButton = document.getElementById('aiChatButton');
const aiChatPanel = document.getElementById('aiChatPanel');
const aiChatClose = document.getElementById('aiChatClose');
const aiChatInput = document.getElementById('aiChatInput');
const aiChatSend = document.getElementById('aiChatSend');
const aiChatMessages = document.getElementById('aiChatMessages');

let isWaitingForResponse = false;

// Open/Close chat panel
aiChatButton.addEventListener('click', () => {
  aiChatPanel.classList.toggle('active');
  if (aiChatPanel.classList.contains('active')) {
    aiChatInput.focus();
  }
});

aiChatClose.addEventListener('click', () => {
  aiChatPanel.classList.remove('active');
});

// Send message on button click
aiChatSend.addEventListener('click', sendMessage);

// Send message on Enter key
aiChatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && !isWaitingForResponse) {
    sendMessage();
  }
});

async function sendMessage() {
  const message = aiChatInput.value.trim();
  
  if (!message || isWaitingForResponse) return;

  addMessage(message, 'user');
  aiChatInput.value = '';
  aiChatSend.disabled = true;
  isWaitingForResponse = true;
  showTypingIndicator();

  try {
    const response = await askAI(message);
    
    console.log('Full response object:', response);
    
    removeTypingIndicator();

    // Handle text response directly
    let aiMessage = '';
    
    if (typeof response === 'string') {
      aiMessage = response;
    } else if (response && response.response) {
      aiMessage = response.response;
    } else if (response && response.output) {
      aiMessage = response.output;
    } else {
      aiMessage = JSON.stringify(response);
    }

    addMessage(aiMessage, 'assistant');
    
  } catch (error) {
    console.error('Chat error:', error);
    removeTypingIndicator();
    addMessage('Error: ' + error.message, 'assistant');
  } finally {
    aiChatSend.disabled = false;
    isWaitingForResponse = false;
    aiChatInput.focus();
  }
}

function addMessage(text, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `ai-chat-message ${sender}`;
  
  const bubbleDiv = document.createElement('div');
  bubbleDiv.className = 'ai-chat-bubble';
  bubbleDiv.textContent = text;
  
  messageDiv.appendChild(bubbleDiv);
  aiChatMessages.appendChild(messageDiv);
  
  // Scroll to bottom
  aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
}

function showTypingIndicator() {
  const messageDiv = document.createElement('div');
  messageDiv.className = 'ai-chat-message assistant';
  messageDiv.id = 'typingIndicator';
  
  const typingDiv = document.createElement('div');
  typingDiv.className = 'ai-chat-typing';
  typingDiv.innerHTML = '<span></span><span></span><span></span>';
  
  messageDiv.appendChild(typingDiv);
  aiChatMessages.appendChild(messageDiv);
  
  // Scroll to bottom
  aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
}

function removeTypingIndicator() {
  const typingIndicator = document.getElementById('typingIndicator');
  if (typingIndicator) {
    typingIndicator.remove();
  }
}

