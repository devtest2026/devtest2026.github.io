/* PumaPulse — Shared nav/footer injector v4 */
(function() {
  var path = window.location.pathname;
  var depth = (path.match(/\//g) || []).length - 1;
  var base = depth >= 2 ? '../../' : depth === 1 ? '../' : '';
  var home = depth >= 2 ? '../../' : depth === 1 ? '../' : '/';

  /* ── NAVBAR ── */
  var navHTML = '<nav class="navbar" id="navbar"><div class="navbar-inner">'
    + '<a href="' + home + '" class="nav-logo"><img src="' + base + 'img/logo.png" alt="PumaPulse"></a>'
    + '<ul class="nav-links" id="navLinks">'
    + '<li><a href="' + base + 'about/">About</a></li>'
    + '<li><a href="' + base + 'blog/">Blog</a></li>'
    + '<li><a href="' + base + 'contact/">Contact</a></li>'
    + '</ul>'
    + '<div class="nav-cta" id="navCta"><a href="' + base + 'contact/" class="btn btn-accent btn-sm">Get a Free Quote</a></div>'
    + '<div class="hamburger" id="hamburger"><span></span><span></span><span></span></div>'
    + '</div></nav>';

  /* ── FOOTER ── */
  var footerHTML = '<footer>'
    + '<div class="footer-top"><div class="container"><div class="footer-top-inner">'
    + '<div class="footer-brand-new">'
    + '<a href="' + home + '" class="nav-logo"><img src="' + base + 'img/logo.png" alt="PumaPulse"></a>'
    + '<p class="tagline">Passionate Full-Stack &amp; Mobile App developers blending cutting-edge AI/ML with high-performance engineering. We transform ideas into real-world digital products that feel fast, smart, and alive.</p>'
    + '</div>'
    + '<div class="footer-col-new"><h5>Company</h5><ul>'
    + '<li><a href="' + base + 'about/">About Us</a></li>'
    + '<li><a href="' + base + 'blog/">Blog</a></li>'
    + '<li><a href="' + base + 'contact/">Contact</a></li>'
    + '<li><a href="' + base + 'privacy/">Privacy Policy</a></li>'
    + '<li><a href="' + base + 'terms/">Terms of Service</a></li>'
    + '</ul></div>'
    + '</div></div></div>'
    + '<div class="container"><div class="footer-bottom-bar">'
    + '<p>© 2025 PumaPulse. All Rights Reserved.</p>'
    + '<div class="footer-contact-mini">'
    + '<a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>Via Monte Napoleone 8, Milan, Italy</a>'
    + '</div>'
    + '</div></div>'
    + '</footer>';

  /* ── Inject ── */
  var navEl = document.getElementById('nav-placeholder');
  if (navEl) navEl.outerHTML = navHTML;
  var footerEl = document.getElementById('footer-placeholder');
  if (footerEl) footerEl.outerHTML = footerHTML;

  /* ── Wire navbar scroll + hamburger ── */
  setTimeout(function() {
    var nb = document.querySelector('.navbar');
    if (nb) {
      window.addEventListener('scroll', function() {
        nb.classList.toggle('scrolled', window.scrollY > 30);
      }, { passive: true });
      if (window.scrollY > 30) nb.classList.add('scrolled');
    }
    var hb = document.querySelector('.hamburger');
    if (hb && !hb.dataset.wired) {
      hb.dataset.wired = '1';
      hb.addEventListener('click', function() {
        document.body.classList.toggle('nav-mobile-open');
        hb.classList.toggle('open');
      });
    }
  }, 0);
})();
