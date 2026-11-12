(() => {
  "use strict";
  const $ = (selector, root=document) => root.querySelector(selector);
  const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
  const langToggle = $("#langToggle");
  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();

  function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.body.dir = lang === "ar" ? "rtl" : "ltr";
    $$("[data-en][data-ar]").forEach(el => { el.textContent = el.dataset[lang]; });
    if (langToggle) langToggle.textContent = lang === "en" ? "العربية" : "English";
    try { localStorage.setItem("portfolio-language", lang); } catch (_) {}
  }
  let savedLang = "en";
  try { savedLang = localStorage.getItem("portfolio-language") || "en"; } catch (_) {}
  setLanguage(savedLang);
  if (langToggle) langToggle.addEventListener("click", () => setLanguage(document.documentElement.lang === "en" ? "ar" : "en"));

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const header = $(".site-header");
  const sections = $$("main section");
  const revealTargets = $$(".hero-copy > *, .hero-visual, .section-kicker, .intro-content h2, .intro-text, .section-heading, .expertise-card, .project-card, .timeline-item, .credential, .contact-inner, .site-footer > *");

  document.documentElement.classList.add("motion-enabled");
  if (!reduceMotion && "IntersectionObserver" in window) {
    revealTargets.forEach((el, index) => {
      if (!el.closest(".hero")) {
        el.classList.add("motion-reveal");
        el.style.setProperty("--motion-delay", (index % 4) * 100 + "ms");
      } else {
        el.classList.add("motion-hero-item");
        el.style.setProperty("--motion-delay", (index % 5) * 120 + "ms");
      }
    });
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("motion-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });
    revealTargets.forEach(el => revealObserver.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add("motion-visible"));
  }

  if (!reduceMotion && "IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("motion-section-visible");
      });
    }, { threshold: 0.1 });
    sections.forEach(section => sectionObserver.observe(section));
  }

  const progress = document.createElement("div");
  progress.className = "motion-progress";
  progress.setAttribute("aria-hidden", "true");
  progress.innerHTML = "<span></span>";
  document.body.appendChild(progress);
  const progressBar = $("span", progress);
  let framePending = false;
  function updateScroll() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    progressBar.style.transform = "scaleX(" + ratio + ")";
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 20);
    framePending = false;
  }
  window.addEventListener("scroll", () => {
    if (!framePending) { requestAnimationFrame(updateScroll); framePending = true; }
  }, { passive: true });
  window.addEventListener("resize", updateScroll);
  updateScroll();

  const navLinks = $$(".desktop-nav a");
  const navSections = navLinks.map(link => $(link.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window) {
    const navObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) navLinks.forEach(link => link.classList.toggle("is-active", link.getAttribute("href") === "#" + entry.target.id));
      });
    }, { rootMargin: "-25% 0px -60% 0px" });
    navSections.forEach(section => navObserver.observe(section));
  }

  const hero = $(".hero-visual");
  const portrait = $(".portrait-frame");
  if (!reduceMotion && hero && portrait && window.matchMedia("(hover:hover) and (pointer:fine)").matches) {
    hero.addEventListener("pointermove", event => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      portrait.style.transform = "perspective(900px) rotateY(" + (x * 9) + "deg) rotateX(" + (-y * 7) + "deg) translateY(-4px)";
    });
    hero.addEventListener("pointerleave", () => { portrait.style.transform = ""; });
  }
})();