/* redesign preview subpages: menu sheet + current-page marker */
(function(){
  var sheet = document.getElementById('sheet'), btn = document.getElementById('menuBtn'), close = document.getElementById('sheetClose');
  function open(){ sheet.classList.add('open'); sheet.setAttribute('aria-hidden', 'false'); btn.setAttribute('aria-expanded', 'true'); }
  function shut(){ sheet.classList.remove('open'); sheet.setAttribute('aria-hidden', 'true'); btn.setAttribute('aria-expanded', 'false'); }
  if (btn) btn.addEventListener('click', open);
  if (close) close.addEventListener('click', shut);
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape') shut(); });
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .sheet a.big').forEach(function(a){
    if (a.getAttribute('href') === here) a.setAttribute('aria-current', 'page');
  });
})();

/* phone scroll cue: shows on load when the page has a hero, fades on first scroll, tap = scroll down */
(function(){
  var hero = document.querySelector(".pg-hero"); if (!hero || window.scrollY > 40) return;
  var c = document.createElement("a"); c.className = "scroll-cue"; c.href = "#"; c.textContent = "Tap / scroll for more \u2193";
  c.addEventListener("click", function(e){ e.preventDefault(); window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" }); });
  document.body.appendChild(c);
  function hide(){ if (window.scrollY > 60){ c.classList.add("gone"); window.removeEventListener("scroll", hide); setTimeout(function(){ c.remove(); }, 400); } }
  window.addEventListener("scroll", hide, { passive: true });
})();
