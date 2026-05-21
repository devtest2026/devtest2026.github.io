/* PumaPulse — Shared nav/footer injector v4 */
(function() {
  var path = window.location.pathname;
  var depth = (path.match(/\//g) || []).length - 1;
  var base = depth >= 2 ? '../../' : depth === 1 ? '../' : '';
  var home = depth >= 2 ? '../../' : depth === 1 ? '../' : '/';

  /* ── NAVBAR ── */
  var navHTML = ''
    + '<nav class="navbar" id="navbar">'
    + '<div class="navbar-inner">'

    /* Logo */
    + '<a href="' + home + '" class="nav-logo"><img src="' + base + 'img/logo.png" alt="PumaPulse"></a>'

    /* Center: tagline pill */
    + '<div style="display:flex;align-items:center;gap:6px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:50px;padding:6px 16px;font-size:11px;font-weight:600;color:rgba(200,215,235,0.55);letter-spacing:.04em;white-space:nowrap" class="nav-tagline-pill">'
    + '<span style="width:6px;height:6px;border-radius:50%;background:#c0202a;flex-shrink:0;box-shadow:0 0 6px rgba(192,32,42,0.8)"></span>'
    + 'Full-Stack &nbsp;·&nbsp; Mobile &nbsp;·&nbsp; AI/ML &nbsp;·&nbsp; Blockchain &nbsp;·&nbsp; Bots'
    + '</div>'

    /* Right: nav links + CTA */
    + '<div style="display:flex;align-items:center;gap:4px">'
    + '<ul class="nav-links" id="navLinks" style="display:flex;align-items:center;gap:2px;list-style:none;margin:0;padding:0">'
    + '<li><a href="' + base + 'about/" style="padding:8px 14px;border-radius:50px;font-size:0.87rem;font-weight:500;color:rgba(240,244,255,0.75);text-decoration:none;transition:all .2s;display:block" onmouseover="this.style.color=\'#fff\';this.style.background=\'rgba(255,255,255,0.08)\'" onmouseout="this.style.color=\'rgba(240,244,255,0.75)\';this.style.background=\'\'">About</a></li>'
    + '<li><a href="' + base + 'blog/" style="padding:8px 14px;border-radius:50px;font-size:0.87rem;font-weight:500;color:rgba(240,244,255,0.75);text-decoration:none;transition:all .2s;display:block" onmouseover="this.style.color=\'#fff\';this.style.background=\'rgba(255,255,255,0.08)\'" onmouseout="this.style.color=\'rgba(240,244,255,0.75)\';this.style.background=\'\'">Blog</a></li>'
    + '<li><a href="' + base + 'contact/" style="padding:8px 14px;border-radius:50px;font-size:0.87rem;font-weight:500;color:rgba(240,244,255,0.75);text-decoration:none;transition:all .2s;display:block" onmouseover="this.style.color=\'#fff\';this.style.background=\'rgba(255,255,255,0.08)\'" onmouseout="this.style.color=\'rgba(240,244,255,0.75)\';this.style.background=\'\'">Contact</a></li>'
    + '</ul>'
    + '<div style="margin-left:10px"><a href="' + base + 'contact/" class="btn btn-accent btn-sm">Get a Free Quote</a></div>'
    + '</div>'

    + '<div class="hamburger" id="hamburger"><span></span><span></span><span></span></div>'
    + '</div>'
    + '</nav>'
    /* Mobile nav tagline hide */
    + '<style>.nav-tagline-pill{display:flex}@media(max-width:900px){.nav-tagline-pill{display:none!important}}</style>';

  /* ── FOOTER ── */
  var footerHTML = ''
    + '<footer style="background:#000;border-top:1px solid rgba(255,255,255,0.07)">'
    + '<div style="max-width:1200px;margin:0 auto;padding:22px 44px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:14px">'

    /* Left: copyright + address */
    + '<div style="display:flex;align-items:center;gap:20px;flex-wrap:wrap">'
    + '<span style="font-size:12px;color:rgba(200,215,235,0.3)">© 2026 PumaPulse. All Rights Reserved.</span>'
    + '<span style="width:1px;height:12px;background:rgba(255,255,255,0.1);display:inline-block"></span>'
    + '<span style="display:flex;align-items:center;gap:5px;font-size:12px;color:rgba(200,215,235,0.3)">'
    + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:11px;height:11px;flex-shrink:0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>'
    + 'Via Monte Napoleone 8, Milan, Italy'
    + '</span>'
    + '</div>'

    /* Right: page links */
    + '<div style="display:flex;align-items:center;gap:20px;flex-wrap:wrap">'
    + '<a href="' + base + 'about/" style="font-size:12px;color:rgba(200,215,235,0.35);text-decoration:none;transition:color .2s" onmouseover="this.style.color=\'rgba(200,215,235,0.8)\'" onmouseout="this.style.color=\'rgba(200,215,235,0.35)\'">About</a>'
    + '<a href="' + base + 'blog/" style="font-size:12px;color:rgba(200,215,235,0.35);text-decoration:none;transition:color .2s" onmouseover="this.style.color=\'rgba(200,215,235,0.8)\'" onmouseout="this.style.color=\'rgba(200,215,235,0.35)\'">Blog</a>'
    + '<a href="' + base + 'contact/" style="font-size:12px;color:rgba(200,215,235,0.35);text-decoration:none;transition:color .2s" onmouseover="this.style.color=\'rgba(200,215,235,0.8)\'" onmouseout="this.style.color=\'rgba(200,215,235,0.35)\'">Contact</a>'
    + '<a href="' + base + 'privacy/" style="font-size:12px;color:rgba(200,215,235,0.35);text-decoration:none;transition:color .2s" onmouseover="this.style.color=\'rgba(200,215,235,0.8)\'" onmouseout="this.style.color=\'rgba(200,215,235,0.35)\'">Privacy</a>'
    + '<a href="' + base + 'terms/" style="font-size:12px;color:rgba(200,215,235,0.35);text-decoration:none;transition:color .2s" onmouseover="this.style.color=\'rgba(200,215,235,0.8)\'" onmouseout="this.style.color=\'rgba(200,215,235,0.35)\'">Terms</a>'
    + '</div>'

    + '</div>'
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
