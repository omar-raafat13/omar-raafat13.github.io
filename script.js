const langToggle=document.getElementById("langToggle");const year=document.getElementById("year");if(year)year.textContent=new Date().getFullYear();function setLanguage(lang){document.documentElement.lang=lang;document.body.dir=lang==="ar"?"rtl":"ltr";document.querySelectorAll("[data-en][data-ar]").forEach(el=>{el.textContent=el.dataset[lang]});if(langToggle)langToggle.textContent=lang==="en"?"العربية":"English";try{localStorage.setItem("portfolio-language",lang)}catch(e){}}if(langToggle)langToggle.addEventListener("click",()=>setLanguage(document.documentElement.lang==="en"?"ar":"en"));let savedLang="en";try{savedLang=localStorage.getItem("portfolio-language")||"en"}catch(e){}setLanguage(savedLang);

const reduceMotion=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealTargets=document.querySelectorAll(".section-kicker,.intro-content h2,.intro-text,.section-heading,.expertise-card,.project-card,.timeline-item,.credential,.contact-inner");
if(!reduceMotion&&"IntersectionObserver"in window){
  revealTargets.forEach((el,index)=>{el.setAttribute("data-reveal","");el.style.setProperty("--reveal-delay",((index%6)*110)+"ms")});
  document.body.classList.add("motion-ready");
  const revealObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");revealObserver.unobserve(entry.target)}})},{threshold:.16,rootMargin:"0px 0px -55px 0px"});
  revealTargets.forEach(el=>revealObserver.observe(el));
}else{revealTargets.forEach(el=>el.classList.add("is-visible"))}

/* Scroll progress and sticky header. */
const progress=document.createElement("div");progress.className="motion-progress";progress.setAttribute("aria-hidden","true");progress.innerHTML="<span></span>";document.body.appendChild(progress);const progressBar=progress.firstElementChild;const header=document.querySelector(".site-header");let ticking=false;function updateScrollUI(){const max=document.documentElement.scrollHeight-window.innerHeight;const amount=max>0?window.scrollY/max:0;progressBar.style.transform="scaleX("+Math.max(0,Math.min(1,amount))+")";if(header)header.classList.toggle("is-scrolled",window.scrollY>12);ticking=false}window.addEventListener("scroll",()=>{if(!ticking){window.requestAnimationFrame(updateScrollUI);ticking=true}},{passive:true});window.addEventListener("resize",updateScrollUI);updateScrollUI();

/* Active section in navigation. */
const navLinks=[...document.querySelectorAll(".desktop-nav a")];const navSections=navLinks.map(link=>document.querySelector(link.getAttribute("href"))).filter(Boolean);if("IntersectionObserver"in window&&navSections.length){const navObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(link=>link.classList.toggle("is-active",link.getAttribute("href")==="#"+entry.target.id))}})},{rootMargin:"-25% 0px -60% 0px"});navSections.forEach(section=>navObserver.observe(section))}

/* Subtle pointer parallax on desktop only. */
const heroVisual=document.querySelector(".hero-visual");const portrait=document.querySelector(".portrait-frame");if(!reduceMotion&&heroVisual&&portrait&&window.matchMedia("(hover:hover) and (pointer:fine)").matches){heroVisual.addEventListener("pointermove",event=>{const rect=heroVisual.getBoundingClientRect();const x=(event.clientX-rect.left)/rect.width-.5;const y=(event.clientY-rect.top)/rect.height-.5;portrait.style.transform="rotateY("+(x*5)+"deg) rotateX("+(-y*4)+"deg) translateY(-3px)"});heroVisual.addEventListener("pointerleave",()=>{portrait.style.transform=""})}
