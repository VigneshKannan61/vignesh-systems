/**
 * Main JavaScript File
 * Vignesh Kannan - Personal Brand Website
 * Features:
 * - Accessible mobile menu toggle
 * - Accessible FAQ accordion
 * - Smooth scroll behavior with header offset
 * - Dynamic current year for footer copyright
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initFaqAccordion();
  initSmoothScroll();
  initCopyrightYear();
  initCalFallback();
  initScrollVideoAutoplay();
});

/**
 * Mobile Navigation Drawer Toggle
 */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const drawer = document.getElementById('mobile-nav');
  const navLinks = document.querySelectorAll('.mobile-nav-link, .mobile-nav-action a');

  if (!toggleBtn || !drawer) return;

  function toggleMenu(show) {
    const isExpanded = show !== undefined ? show : toggleBtn.getAttribute('aria-expanded') === 'true';
    const newState = !isExpanded;

    toggleBtn.setAttribute('aria-expanded', String(newState));
    if (newState) {
      drawer.removeAttribute('hidden');
      // Allow display before adding animation class
      requestAnimationFrame(() => {
        drawer.classList.add('is-active');
      });
    } else {
      drawer.classList.remove('is-active');
      setTimeout(() => {
        if (!drawer.classList.contains('is-active')) {
          drawer.setAttribute('hidden', '');
        }
      }, 250);
    }
  }

  toggleBtn.addEventListener('click', () => {
    toggleMenu();
  });

  // Close menu when any navigation link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(true); // Close
    });
  });

  // Close menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggleBtn.getAttribute('aria-expanded') === 'true') {
      toggleMenu(true);
      toggleBtn.focus();
    }
  });
}

/**
 * FAQ Accordion Interactivity
 * Compliant with WAI-ARIA disclosure pattern
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const panel = item.querySelector('.faq-panel');

    if (!trigger || !panel) return;

    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      const newState = !isExpanded;

      // Close other open items for a neat accordion feel
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          const otherTrigger = otherItem.querySelector('.faq-trigger');
          const otherPanel = otherItem.querySelector('.faq-panel');
          if (otherTrigger && otherPanel) {
            otherTrigger.setAttribute('aria-expanded', 'false');
            otherPanel.classList.remove('is-active');
            otherPanel.setAttribute('hidden', '');
            otherItem.classList.remove('is-open');
          }
        }
      });

      // Toggle current item
      trigger.setAttribute('aria-expanded', String(newState));
      if (newState) {
        panel.removeAttribute('hidden');
        panel.classList.add('is-active');
        item.classList.add('is-open');
      } else {
        panel.classList.remove('is-active');
        panel.setAttribute('hidden', '');
        item.classList.remove('is-open');
      }
    });
  });
}

/**
 * Smooth Scroll Offset Handler
 */
function initSmoothScroll() {
  const scrollTriggers = document.querySelectorAll('a[href^="#"]');
  const header = document.querySelector('.site-header');

  scrollTriggers.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Set focus to target for accessibility
        targetElement.setAttribute('tabindex', '-1');
        targetElement.focus({ preventScroll: true });
      }
    });
  });
}

/**
 * Dynamic Copyright Year
 */
function initCopyrightYear() {
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

/**
 * Cal.com Popup Graceful Fallback
 * Ensures discovery call buttons remain 100% functional even if external Cal.com embed is blocked
 */
function initCalFallback() {
  const calButtons = document.querySelectorAll('.cal-booking-btn');
  const targetUrl = 'https://cal.com/vigneshkannan/15min';

  calButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Check if Cal object loaded and initialized
      if (!window.Cal || !window.Cal.loaded) {
        // Fallback directly to booking link in new tab
        window.open(targetUrl, '_blank', 'noopener,noreferrer');
      }
    });
  });
}

/**
 * Scroll-based Video Autoplay (Intersection Observer)
 * Autoplays video when scrolled into view, pauses when out of view
 */
function initScrollVideoAutoplay() {
  const video = document.querySelector('.workflow-video');
  if (!video) return;

  // Use Intersection Observer for performance and precision
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Play video when at least 30% visible
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {
              // Browser policy fallback if autoplay was prevented
            });
          }
        } else {
          // Pause when user scrolls away to save resources
          video.pause();
        }
      });
    }, {
      threshold: 0.3
    });

    observer.observe(video);
  }
}
