/**
 * Sparkleuk Ltd — Interactive Frontend Controller
 * Vanilla ES6+ JavaScript · Zero External Dependencies
 */
(function () {
  'use strict';

  // 1. Dynamic Copyright Year
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // 2. Sticky Header & Mobile Quick-Quote Bar
  const siteHeader = document.getElementById('site-header');
  const mobileStickyCta = document.getElementById('mobile-sticky-cta');
  const quoteSection = document.getElementById('quote');
  let quoteInView = false;

  if (quoteSection && 'IntersectionObserver' in window) {
    const quoteObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          quoteInView = entry.isIntersecting;
          updateScrollUI();
        });
      },
      { threshold: 0.12 }
    );
    quoteObserver.observe(quoteSection);
  }

  function updateScrollUI() {
    const scrollY = window.scrollY || window.pageYOffset;
    if (siteHeader) {
      siteHeader.classList.toggle('is-scrolled', scrollY > 18);
    }
    if (mobileStickyCta) {
      const shouldShow = scrollY > 460 && !quoteInView && !document.body.classList.contains('drawer-open');
      mobileStickyCta.classList.toggle('is-visible', shouldShow);
      mobileStickyCta.setAttribute('aria-hidden', shouldShow ? 'false' : 'true');
    }
  }

  window.addEventListener('scroll', updateScrollUI, { passive: true });
  updateScrollUI();

  // 3. Mobile Navigation Drawer
  const menuToggle = document.getElementById('menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileBackdrop = document.getElementById('mobile-drawer-backdrop');

  function setDrawerState(open) {
    if (!menuToggle || !mobileDrawer) return;
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    menuToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    if (open) {
      mobileDrawer.hidden = false;
      document.body.classList.add('drawer-open');
    } else {
      mobileDrawer.hidden = true;
      document.body.classList.remove('drawer-open');
    }
    updateScrollUI();
  }

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      setDrawerState(!isOpen);
    });

    if (mobileBackdrop) {
      mobileBackdrop.addEventListener('click', () => setDrawerState(false));
    }

    mobileDrawer.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', () => setDrawerState(false));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
        setDrawerState(false);
        menuToggle.focus();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1080 && menuToggle.getAttribute('aria-expanded') === 'true') {
        setDrawerState(false);
      }
    });
  }

  // 3b. Desktop Header Active-Section Scroll Spy
  const desktopNavLinks = document.querySelectorAll('.site-nav__link[href^="#"]');
  if (desktopNavLinks.length > 0 && 'IntersectionObserver' in window) {
    const observedSections = [];
    desktopNavLinks.forEach((link) => {
      const id = (link.getAttribute('href') || '').slice(1);
      const sec = id ? document.getElementById(id) : null;
      if (sec) observedSections.push({ id, sec, link });
    });

    const sectionSpy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            desktopNavLinks.forEach((l) => l.classList.remove('is-current'));
            const match = observedSections.find((item) => item.sec === entry.target);
            if (match) match.link.classList.add('is-current');
          }
        });
      },
      { rootMargin: '-28% 0px -58% 0px', threshold: 0 }
    );

    observedSections.forEach((item) => sectionSpy.observe(item.sec));
  }

  // 4. Interactive Service Category Filter
  const filterButtons = document.querySelectorAll('.service-tab[data-filter]');
  const serviceRows = document.querySelectorAll('.service-card[data-categories]');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const selected = btn.getAttribute('data-filter') || 'all';

      filterButtons.forEach((b) => {
        const active = b === btn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-pressed', active ? 'true' : 'false');
      });

      serviceRows.forEach((row) => {
        if (selected === 'all') {
          row.hidden = false;
        } else {
          const cats = (row.getAttribute('data-categories') || '').split(/\s+/);
          row.hidden = !cats.includes(selected);
        }
      });
    });
  });

  // 5. Accessible FAQ Accordion
  const faqTriggers = document.querySelectorAll('.faq-trigger');
  faqTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      const panelId = trigger.getAttribute('aria-controls');
      const panel = panelId ? document.getElementById(panelId) : null;

      // Close sibling items for clean single-focus reading
      faqTriggers.forEach((other) => {
        if (other !== trigger) {
          other.setAttribute('aria-expanded', 'false');
          const otherId = other.getAttribute('aria-controls');
          const otherPanel = otherId ? document.getElementById(otherId) : null;
          if (otherPanel) otherPanel.hidden = true;
        }
      });

      trigger.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
      if (panel) {
        panel.hidden = isExpanded;
      }
    });
  });

  // 6. Quote Scope Configurator & Pre-selection Links
  const quoteForm = document.getElementById('quote-form');
  const summaryOutput = document.getElementById('quote-summary-output');
  const summaryText = document.getElementById('quote-summary-text');
  const editBriefBtn = document.getElementById('edit-brief-btn');
  const copyBriefBtn = document.getElementById('copy-brief-btn');
  const copyFeedback = document.getElementById('copy-feedback');
  const comboBanner = document.getElementById('combo-banner');
  const serviceCheckboxes = document.querySelectorAll('input[name="services"]');

  function updateComboBanner() {
    if (!comboBanner) return;
    const checkedValues = Array.from(serviceCheckboxes)
      .filter((cb) => cb.checked)
      .map((cb) => cb.value);

    const hasPat = checkedValues.some((v) => v.includes('PAT Testing'));
    const hasClean = checkedValues.some((v) => !v.includes('PAT Testing'));
    comboBanner.hidden = !(hasPat && hasClean);
  }

  serviceCheckboxes.forEach((cb) => {
    cb.addEventListener('change', () => {
      updateComboBanner();
      const err = document.getElementById('services-error');
      if (err && cb.checked) err.hidden = true;
    });
  });

  // Pre-select service when clicking "Add to Quote" links across the page
  document.querySelectorAll('[data-preselect]').forEach((el) => {
    el.addEventListener('click', () => {
      const targetService = el.getAttribute('data-preselect');
      if (!targetService) return;

      // Ensure form is visible if summary was previously open
      if (quoteForm && summaryOutput && !summaryOutput.hidden) {
        summaryOutput.hidden = true;
        quoteForm.hidden = false;
      }

      serviceCheckboxes.forEach((cb) => {
        if (cb.value === targetService) {
          cb.checked = true;
        }
      });
      updateComboBanner();
    });
  });

  // Clear field errors on input
  ['property-type', 'client-name', 'client-postcode'].forEach((id) => {
    const input = document.getElementById(id);
    if (!input) return;
    input.addEventListener('input', () => {
      input.classList.remove('has-error');
      const map = {
        'property-type': 'property-error',
        'client-name': 'name-error',
        'client-postcode': 'postcode-error',
      };
      const errEl = document.getElementById(map[id]);
      if (errEl) errEl.hidden = true;
    });
    input.addEventListener('change', () => {
      input.classList.remove('has-error');
      const errEl = document.getElementById('property-error');
      if (id === 'property-type' && errEl) errEl.hidden = true;
    });
  });

  if (quoteForm && summaryOutput && summaryText) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const selectedServices = Array.from(serviceCheckboxes)
        .filter((cb) => cb.checked)
        .map((cb) => cb.value);

      const propertyType = document.getElementById('property-type');
      const scheduleType = document.getElementById('schedule-type');
      const clientName = document.getElementById('client-name');
      const clientPostcode = document.getElementById('client-postcode');
      const projectNotes = document.getElementById('project-notes');

      let valid = true;

      const servicesErr = document.getElementById('services-error');
      if (selectedServices.length === 0) {
        if (servicesErr) servicesErr.hidden = false;
        valid = false;
      } else if (servicesErr) {
        servicesErr.hidden = true;
      }

      if (!propertyType.value.trim()) {
        propertyType.classList.add('has-error');
        document.getElementById('property-error').hidden = false;
        valid = false;
      }

      if (!clientName.value.trim()) {
        clientName.classList.add('has-error');
        document.getElementById('name-error').hidden = false;
        valid = false;
      }

      if (!clientPostcode.value.trim()) {
        clientPostcode.classList.add('has-error');
        document.getElementById('postcode-error').hidden = false;
        valid = false;
      }

      if (!valid) {
        const firstErr = quoteForm.querySelector('.has-error, input[name="services"]');
        if (firstErr) firstErr.focus();
        return;
      }

      const lines = [
        'SPARKLEUK LTD — QUOTE ENQUIRY BRIEF',
        '----------------------------------------',
        `Client / Company: ${clientName.value.trim()}`,
        `Property Location: ${clientPostcode.value.trim()}`,
        `Property Sector: ${propertyType.value}`,
        `Schedule / Frequency: ${scheduleType ? scheduleType.value : 'One-Off'}`,
        '',
        'Requested Services:',
        ...selectedServices.map((s) => `  • ${s}`),
      ];

      if (projectNotes && projectNotes.value.trim()) {
        lines.push('', 'Property & Appliance Notes:', `  ${projectNotes.value.trim()}`);
      }

      lines.push(
        '',
        'Standard: Clear, fair-priced quote · Zero hidden fees · 2.5% profits to Help for Heroes'
      );

      summaryText.textContent = lines.join('\n');
      if (copyFeedback) copyFeedback.textContent = '';
      quoteForm.hidden = true;
      summaryOutput.hidden = false;
      summaryOutput.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  if (editBriefBtn && quoteForm && summaryOutput) {
    editBriefBtn.addEventListener('click', () => {
      summaryOutput.hidden = true;
      quoteForm.hidden = false;
    });
  }

  if (copyBriefBtn && summaryText) {
    copyBriefBtn.addEventListener('click', async () => {
      const text = summaryText.textContent || '';
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(text);
        } else {
          const area = document.createElement('textarea');
          area.value = text;
          document.body.appendChild(area);
          area.select();
          document.execCommand('copy');
          document.body.removeChild(area);
        }
        if (copyFeedback) {
          copyFeedback.textContent = 'Copied to clipboard.';
        }
      } catch (_err) {
        if (copyFeedback) {
          copyFeedback.textContent = 'Please select and copy the text manually.';
        }
      }
    });
  }
})();
