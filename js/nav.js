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

    /* Services mega menu */
    + '<li class="dropdown"><a href="#">Services</a>'
    + '<div class="mega-menu">'
    + '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0;width:100%">'
    + '<a href="' + base + 'services/blockchain/" class="mega-item"><div class="mega-icon"><img src="https://cdn.simpleicons.org/ethereum/627EEA" alt="Blockchain"></div><div><span class="mega-text-label">Blockchain &amp; Web3</span><span class="mega-text-desc">Smart contracts, DeFi, NFT platforms &amp; Web3 apps</span></div></a>'
    + '<a href="' + base + 'services/fullstack/" class="mega-item"><div class="mega-icon"><img src="https://cdn.simpleicons.org/react/61DAFB" alt="Full-Stack"></div><div><span class="mega-text-label">Full-Stack Development</span><span class="mega-text-desc">PHP, Laravel, MERN, Next.js, Angular, Django, FastAPI</span></div></a>'
    + '<a href="' + base + 'services/mobile/" class="mega-item"><div class="mega-icon"><img src="https://cdn.simpleicons.org/flutter/02569B" alt="Mobile"></div><div><span class="mega-text-label">Mobile App Development</span><span class="mega-text-desc">React Native, Flutter, iOS (Swift), Android (Kotlin)</span></div></a>'
    + '<a href="' + base + 'services/ai-ml/" class="mega-item"><div class="mega-icon"><img src="https://cdn.simpleicons.org/tensorflow/FF6F00" alt="AI/ML"></div><div><span class="mega-text-label">AI / ML Solutions</span><span class="mega-text-desc">TensorFlow, PyTorch, OpenAI APIs, OpenCV, predictive models</span></div></a>'
    + '<a href="' + base + 'services/bots/" class="mega-item"><div class="mega-icon"><img src="https://cdn.simpleicons.org/python/3776AB" alt="Bots"></div><div><span class="mega-text-label">Bots &amp; Automation</span><span class="mega-text-desc">Algo trading, scraping, Telegram, CRM &amp; Excel bots</span></div></a>'
    + '<a href="' + base + 'services/ecommerce/" class="mega-item"><div class="mega-icon"><img src="https://cdn.simpleicons.org/shopify/96BF48" alt="E-Commerce"></div><div><span class="mega-text-label">E-Commerce &amp; CMS</span><span class="mega-text-desc">Shopify, WordPress, WooCommerce &amp; Odoo ERP</span></div></a>'
    + '</div>'
    + '<div class="mega-menu-footer"><a href="' + base + 'portfolio/">View all case studies →</a></div>'
    + '</div></li>'

    /* Solutions mega menu */
    + '<li class="dropdown"><a href="#">Solutions</a>'
    + '<div class="mega-menu" style="width:480px">'
    + '<div class="mega-menu-grid">'
    + '<a href="' + base + 'solutions/web3/" class="mega-item"><div class="mega-icon"><img src="https://cdn.simpleicons.org/ethereum/627EEA" alt="Web3"></div><div><span class="mega-text-label">Web3 &amp; DeFi Platforms</span><span class="mega-text-desc">AMMs, lending protocols, DAOs &amp; cross-chain bridges</span></div></a>'
    + '<a href="' + base + 'solutions/saas/" class="mega-item"><div class="mega-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg></div><div><span class="mega-text-label">SaaS &amp; Enterprise Apps</span><span class="mega-text-desc">Full-stack SaaS platforms, dashboards &amp; internal tools</span></div></a>'
    + '<a href="' + base + 'solutions/payments/" class="mega-item"><div class="mega-icon"><img src="https://cdn.simpleicons.org/stripe/635BFF" alt="Payments"></div><div><span class="mega-text-label">Payment Integration</span><span class="mega-text-desc">Stripe, PayPal, crypto payments &amp; custom gateways</span></div></a>'
    + '<a href="' + base + 'solutions/ai/" class="mega-item"><div class="mega-icon"><img src="https://cdn.simpleicons.org/openai/ffffff" alt="AI"></div><div><span class="mega-text-label">AI-Powered Products</span><span class="mega-text-desc">GPT integrations, chatbots, vision AI &amp; ML pipelines</span></div></a>'
    + '</div>'
    + '<div class="mega-menu-footer"><a href="' + base + 'portfolio/">View all case studies →</a></div>'
    + '</div></li>'

    + '<li><a href="' + base + 'about/">About</a></li>'
    + '<li><a href="' + base + 'portfolio/">Portfolio</a></li>'
    + '<li><a href="' + base + 'blog/">Blog</a></li>'
    + '<li><a href="' + base + 'careers/">Careers</a></li>'
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
    + '<div class="footer-col-new"><h5>Services</h5><ul>'
    + '<li><a href="' + base + 'services/blockchain/">Blockchain &amp; Web3</a></li>'
    + '<li><a href="' + base + 'services/fullstack/">Full-Stack Development</a></li>'
    + '<li><a href="' + base + 'services/mobile/">Mobile App Development</a></li>'
    + '<li><a href="' + base + 'services/ai-ml/">AI / ML Solutions</a></li>'
    + '<li><a href="' + base + 'services/bots/">Bots &amp; Automation</a></li>'
    + '<li><a href="' + base + 'services/ecommerce/">E-Commerce &amp; CMS</a></li>'
    + '</ul></div>'
    + '<div class="footer-col-new"><h5>Solutions</h5><ul>'
    + '<li><a href="' + base + 'solutions/web3/">Web3 &amp; DeFi</a></li>'
    + '<li><a href="' + base + 'solutions/saas/">SaaS Platforms</a></li>'
    + '<li><a href="' + base + 'solutions/payments/">Payment Integration</a></li>'
    + '<li><a href="' + base + 'solutions/ai/">AI-Powered Products</a></li>'
    + '<li><a href="' + base + 'portfolio/">Portfolio</a></li>'
    + '</ul></div>'
    + '<div class="footer-col-new"><h5>Company</h5><ul>'
    + '<li><a href="' + base + 'about/">About Us</a></li>'
    + '<li><a href="' + base + 'blog/">Blog</a></li>'
    + '<li><a href="' + base + 'careers/">Careers</a></li>'
    + '<li><a href="' + base + 'contact/">Contact</a></li>'
    + '<li><a href="' + base + 'privacy/">Privacy Policy</a></li>'
    + '<li><a href="' + base + 'terms/">Terms of Service</a></li>'
    + '</ul></div>'
    + '<div class="footer-col-new"><h5>Resources</h5><ul>'
    + '<li><a href="' + base + 'blog/">Insights &amp; Trends</a></li>'
    + '<li><a href="' + base + 'portfolio/">Case Studies</a></li>'
    + '<li><a href="' + base + 'careers/">Open Positions</a></li>'
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
