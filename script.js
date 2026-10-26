// Documentation navigation
function showDocSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('.docs-section').forEach(section => {
    section.classList.remove('active');
  });

  // Show selected section
  document.getElementById(sectionId).classList.add('active');

  // Update nav items
  document.querySelectorAll('.docs-nav-item').forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('data-doc') === sectionId) {
      item.classList.add('active');
    }
  });
}

// Copy code
function copyCode(button) {
  const codeBlock = button.closest('.code-block');
  const code = codeBlock.querySelector('pre').textContent;
  
  navigator.clipboard.writeText(code).then(() => {
    const originalHTML = button.innerHTML;
    button.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
    button.style.color = '#10b981';
    
    setTimeout(() => {
      button.innerHTML = originalHTML;
      button.style.color = '';
    }, 2000);
  });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
});

// Mobile menu toggle
function toggleMobileMenu() {
  const navLinks = document.querySelector('.nav-links');
  if (navLinks.style.display === 'flex') {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '100%';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = 'rgba(15, 23, 42, 0.95)';
    navLinks.style.backdropFilter = 'blur(20px)';
    navLinks.style.padding = '1rem';
    navLinks.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
  }
}

// Search functionality for docs
const docsSearch = document.getElementById('docsSearch');
if (docsSearch) {
  docsSearch.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const navItems = document.querySelectorAll('.docs-nav-item');
    
    navItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      if (text.includes(searchTerm)) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Add fade-in animation to elements
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe glass cards
  document.querySelectorAll('.glass-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
});
