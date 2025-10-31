<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>AIforAll Global — Empowered Minds. Equitable Communities. An Inclusive Future.</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="AIforAll Global empowers students, creators, and communities to turn curiosity into capability with ethical, inclusive AI education and tools." />
  <meta name="color-scheme" content="light dark" />
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'%3E%3Crect width='128' height='128' rx='24' fill='%23000'/%3E%3Ctext x='50%25' y='54%25' text-anchor='middle' font-family='Arial' font-size='52' fill='%23F6EBE7'%3EAI%3C/text%3E%3Ctext x='50%25' y='90%25' text-anchor='middle' font-family='Arial' font-size='22' fill='%23F6EBE7' opacity='.9'%3EforAll%3C/text%3E%3C/svg%3E" />

  <!-- Open Graph -->
  <meta property="og:title" content="AIforAll Global" />
  <meta property="og:description" content="Igniting the Future: AI for Every Mind, Everywhere." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://aiforall.global/" />

  <style>
    :root{
      --bg: #0b0b0c;
      --panel:#111114;
      --muted:#6b7280;
      --text:#f5f6f7;
      --accent:#F6EBE7; /* per your icon prefs */
      --accent-ink:#0f0f12;
      --ring: 0 0 0 3px color-mix(in oklab, var(--accent) 35%, transparent);
      --radius: 18px;
      --shadow: 0 10px 30px rgba(0,0,0,.35), 0 2px 8px rgba(0,0,0,.25);
      --grad: radial-gradient(1200px 600px at 80% -10%, #5d5df51a, transparent 60%),
              radial-gradient(800px 500px at -10% 110%, #38bdf81a, transparent 60%);
    }
    @media (prefers-color-scheme: light){
      :root{
        --bg:#fafafa; --panel:#ffffff; --text:#0b0b0c; --muted:#4b5563;
        --shadow: 0 8px 24px rgba(0,0,0,.08), 0 2px 6px rgba(0,0,0,.06);
        --grad: radial-gradient(1200px 600px at 80% -10%, #6366f11a, transparent 60%),
                radial-gradient(800px 500px at -10% 110%, #06b6d41a, transparent 60%);
      }
    }
    *{box-sizing:border-box}
    html,body{height:100%}
    body{
      margin:0; font:16px/1.5 system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif;
      color:var(--text); background:var(--bg); background-image:var(--grad);
    }
    .wrap{max-width:1100px; margin-inline:auto; padding:32px; }
    header{
      display:grid; grid-template-columns: 72px 1fr auto; gap:20px; align-items:center; margin-top:10px;
    }
    .logo{
      width:72px;height:72px;border-radius:16px;background:linear-gradient(135deg,#0f172a, #111827);
      display:grid; place-items:center; box-shadow:var(--shadow); border:1px solid #1f2937;
    }
    .logo svg{width:60%; height:60%}
    .brand h1{margin:0; font-size:clamp(22px, 3vw, 28px); letter-spacing:.2px}
    .brand p{margin:.2rem 0 0; color:var(--muted); font-size:14px}
    .cta-top{display:flex; gap:12px; flex-wrap:wrap}
    .btn{
      appearance:none; border:0; border-radius:999px; padding:.8rem 1.1rem; font-weight:600; cursor:pointer;
      background:var(--accent); color:var(--accent-ink); box-shadow:var(--shadow);
      transition: transform .12s ease, box-shadow .12s ease; text-decoration:none; display:inline-flex; align-items:center; gap:.55rem;
    }
    .btn:hover{transform:translateY(-1px); box-shadow:0 16px 40px rgba(0,0,0,.35)}
    .btn.secondary{
      background:transparent; color:var(--text); border:1px solid color-mix(in oklab, var(--text) 15%, transparent);
      box-shadow:none;
    }
    main{margin-top:34px; display:grid; gap:24px}
    .hero{
      border-radius:var(--radius); padding:40px; background:linear-gradient(180deg, color-mix(in oklab, var(--panel) 80%, transparent), var(--panel));
      box-shadow:var(--shadow); position:relative; overflow:hidden; border:1px solid color-mix(in oklab, var(--text) 12%, transparent);
    }
    .tags{display:flex; gap:10px; flex-wrap:wrap; margin-bottom:14px}
    .tag{
      font-size:12px; color:var(--accent-ink); background:color-mix(in oklab, var(--accent) 85%, white 0%);
      border-radius:999px; padding:.35rem .7rem; font-weight:700; letter-spacing:.2px;
    }
    .hero h2{margin:.2rem 0; font-size:clamp(26px, 4.4vw, 44px); line-height:1.15}
    .hero p{margin:.6rem 0 0; color:var(--muted); font-size:clamp(14px, 1.6vw, 18px)}
    .grid{display:grid; gap:18px; grid-template-columns:repeat(12,1fr)}
    .card{
      grid-column: span 12; padding:22px; border-radius:16px; background:var(--panel); border:1px solid color-mix(in oklab, var(--text) 12%, transparent);
      box-shadow:var(--shadow);
    }
    @media (min-width:760px){
      .card.span-6{grid-column: span 6}
      .card.span-4{grid-column: span 4}
    }
    .card h3{margin:.1rem 0 8px; font-size:1.2rem}
    .dim{color:var(--muted)}
    ul.clean{margin:.4rem 0 0; padding-left:1.05rem}
    .contact-card{
      display:grid; gap:14px;
    }
    .contact-rows{display:grid; gap:10px}
    .row{
      display:flex; gap:10px; align-items:center; padding:10px 12px; border-radius:12px;
      background:linear-gradient(180deg, color-mix(in oklab, var(--panel) 85%, transparent), var(--panel));
      border:1px dashed color-mix(in oklab, var(--text) 14%, transparent);
    }
    .row code{font-family:ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size:.92rem}
    footer{margin:40px 0 10px; color:var(--muted); font-size:.9rem; display:flex; justify-content:space-between; gap:16px; flex-wrap:wrap}
    a.inline{color:inherit}
    /* Accessibility focus */
    a:focus, button:focus {outline: none; box-shadow: var(--ring); border-radius: 12px}
  </style>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AIforAll Global",
    "legalName": "Stichting AIforAll Global",
    "url": "https://aiforall.global/",
    "sameAs": [
      "https://www.linkedin.com/company/ai-for-all-global/",
      "https://linktr.ee/aiforallglobal"
    ],
    "slogan": "Empowered Minds. Equitable Communities. An Inclusive Future.",
    "foundingLocation": "Amstelveen, Netherlands",
    "contactPoint": [{
      "@type": "ContactPoint",
      "contactType": "General",
      "url": "https://linktr.ee/aiforallglobal"
    }]
  }
  </script>
</head>
<body>
  <div class="wrap">
    <header aria-label="Site header">
      <div class="logo" aria-hidden="true">
        <svg viewBox="0 0 64 64" role="img" aria-label="AIforAll Global logo">
          <defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#F6EBE7"/><stop offset="1" stop-color="#ffffff"/></linearGradient></defs>
          <rect x="6" y="6" width="52" height="52" rx="12" fill="none" stroke="url(#g)" stroke-width="4"/>
          <text x="50%" y="54%" text-anchor="middle" font-size="24" font-family="Inter, Arial, sans-serif" fill="#F6EBE7">AI</text>
        </svg>
      </div>
      <div class="brand">
        <h1>AIforAll Global</h1>
        <p>Empowered Minds. Equitable Communities. An Inclusive Future.</p>
      </div>
      <nav class="cta-top" aria-label="Quick actions">
        <a class="btn" href="https://linktr.ee/aiforallglobal" target="_blank" rel="noopener">Connect with us</a>
        <a class="btn secondary" href="https://www.linkedin.com/company/ai-for-all-global/" target="_blank" rel="noopener">LinkedIn</a>
      </nav>
    </header>

    <main>
      <section class="hero" aria-labelledby="hero-title">
        <div class="tags" aria-hidden="true">
          <span class="tag">Inclusive AI</span>
          <span class="tag">Education & Tools</span>
          <span class="tag">Ethics & Impact</span>
        </div>
        <h2 id="hero-title">Igniting the Future: AI for Every Mind, Everywhere</h2>
        <p>We empower students, creators, and communities to turn curiosity into capability and potential into progress — with practical learning, accessible tools, and ethical frameworks that foster inclusive innovation and responsible AI adoption worldwide.</p>
        <div style="margin-top:18px; display:flex; gap:12px; flex-wrap:wrap">
          <a class="btn" href="https://linktr.ee/aiforallglobal" target="_blank" rel="noopener" aria-label="Open AIforAll Global Linktree">Open Contact Card</a>
          <a class="btn secondary" href="https://aiforall.global/" target="_blank" rel="noopener">Visit Website</a>
        </div>
      </section>

      <section class="grid" aria-label="What we stand for">
        <article class="card span-6">
          <h3>Our Promise</h3>
          <p class="dim">AI is here. Everyone deserves to understand it.</p>
          <ul class="clean">
            <li>We don’t just talk about AI — we make it make sense.</li>
            <li>We don’t just teach tools — we unlock confidence.</li>
            <li>We don’t follow the hype — we build real understanding.</li>
          </ul>
        </article>

        <article class="card span-6">
          <h3>What We Do</h3>
          <ul class="clean">
            <li>Hands-on AI learning tracks for students, educators, and professionals.</li>
            <li>Community programs focused on the Global South and underserved groups.</li>
            <li>Ethical AI frameworks and practical toolkits for real-world use.</li>
          </ul>
        </article>

        <article class="card span-4">
          <h3>Vision</h3>
          <p class="dim">An equitable and inclusive AI future where people everywhere have the skills, tools, and confidence to thrive — and lead meaningful change in their communities.</p>
        </article>

        <article class="card span-4">
          <h3>Mission</h3>
          <p class="dim">Ignite potential through access to AI education, tools, and ethics — enabling inclusive innovation, social impact, and responsible adoption worldwide.</p>
        </article>

        <article class="card span-4 contact-card" aria-labelledby="contact">
          <h3 id="contact">Contact & Links</h3>
          <div class="contact-rows" role="list">
            <div class="row" role="listitem">
              <strong>Linktree</strong> — <a class="inline" href="https://linktr.ee/aiforallglobal" target="_blank" rel="noopener">/aiforallglobal</a>
            </div>
            <div class="row" role="listitem">
              <strong>Website</strong> — <a class="inline" href="https://aiforall.global/" target="_blank" rel="noopener">aiforall.global</a>
            </div>
            <div class="row" role="listitem">
              <strong>LinkedIn</strong> — <a class="inline" href="https://www.linkedin.com/company/ai-for-all-global/" target="_blank" rel="noopener">@AIforAll Global</a>
            </div>
            <div class="row" role="listitem" aria-label="QR tip">
              <span class="dim">Tip:</span>&nbsp;<span>Bookmark the Linktree as your one-stop contact card.</span>
            </div>
          </div>
          <div style="margin-top:10px; display:flex; gap:10px; flex-wrap:wrap">
            <a class="btn" href="https://linktr.ee/aiforallglobal" target="_blank" rel="noopener" aria-label="Open Linktree contact card">Open Contact Card</a>
            <a class="btn secondary" href="https://www.linkedin.com/company/ai-for-all-global/" target="_blank" rel="noopener">Follow on LinkedIn</a>
          </div>
        </article>
      </section>
    </main>

    <footer aria-label="Footer">
      <span>© <span id="year"></span> AIforAll Global</span>
      <span class="dim">Legal Entity: <strong>Stichting AIforAll Global</strong> · Registered Office: Amstelveen, NL</span>
    </footer>
  </div>

  <script>
    // Set current year without external dependencies
    document.getElementById('year').textContent = new Date().getFullYear();
  </script>
</body>
</html>
