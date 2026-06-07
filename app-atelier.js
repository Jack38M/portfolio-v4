/* ════════════════════════════════════════════════════════════
   Portfolio · Jacques Micholier — app.js
   Rendu de la home depuis data.js (window.PORTFOLIO)
   + interactions : scroll-spy nav, FR/EN toggle, reveal.
   ════════════════════════════════════════════════════════════ */

(function () {
  const D = window.PORTFOLIO;
  if (!D) { console.error("Portfolio: data.js manquant"); return; }

  /* ── i18n ─────────────────────────────────────────────── */
  let lang = "fr";
  const t = (obj) => {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    if (typeof obj === "object" && "fr" in obj) {
      return obj[lang] || obj.fr;
    }
    return obj;
  };

  // Rendu des morceaux de titre (tokens i/n/br)
  function renderTitleParts(parts) {
    return (parts || []).map((p) => {
      if (p.br) return "<span class=\"br\"></span>";
      if (p.i) return `<i>${escapeHTML(p.i)}</i>`;
      if (p.n) return escapeHTML(p.n).replace(/ /g, "&nbsp;").replace(/&nbsp;/g, " "); // garder espaces normaux
      return "";
    }).join("");
  }
  function escapeHTML(s) {
    return String(s).replace(/[&<>"]/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;",
    }[c]));
  }

  /* ── Logo SVG (ornement signature) ────────────────────── */
  const LOGO_SVG = `
    <svg class="logo-mark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="12" cy="12" r="11" stroke="currentColor" stroke-width="1.2"/>
      <path d="M8.5 7v8.2c0 1.4-1 2.3-2.3 2.3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M16.2 7l-2.5 7.5L11 17" stroke="#d9421e" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

  /* ── NAV ──────────────────────────────────────────────── */
  function renderNav() {
    const links = D.nav.links.map((l) =>
      `<a href="#${l.id}" data-nav="${l.id}">${t(l.label)}</a>`
    ).join("");

    document.getElementById("nav-root").innerHTML = `
      <div class="nav-inner">
        <a href="#top" class="logo" aria-label="Jacques Micholier">
          ${LOGO_SVG}<span data-i18n-name>${escapeHTML(D.profile.name.replace(D.profile.nameItalic, "")).trim()} <em>${escapeHTML(D.profile.nameItalic)}</em></span>
        </a>
        <nav class="nav-links" aria-label="Principal">${links}</nav>
        <div style="display:flex; gap:10px; align-items:center;">
          <span class="nav-status" title="${escapeHTML(t(D.profile.availability))}">
            <span class="pulse" aria-hidden="true"></span>
            <span class="lbl-long">${escapeHTML(t(D.profile.availability))}</span>
          </span>
          <div class="lang-toggle" role="group" aria-label="Langue">
            <button data-lang="fr" class="is-active">FR</button>
            <button data-lang="en" disabled title="Bientôt disponible">EN</button>
          </div>
        </div>
      </div>`;

    // Lang toggle
    document.querySelectorAll("[data-lang]").forEach((b) => {
      b.addEventListener("click", () => {
        if (b.disabled) return;
        lang = b.dataset.lang;
        document.querySelectorAll("[data-lang]").forEach((x) => x.classList.toggle("is-active", x === b));
        renderAll();
      });
    });
  }

  /* ── HERO ────────────────────────────────────────────── */
  function renderHero() {
    const metas = D.hero.metaItems.map((m) => `
      <div class="cell">
        <span class="lbl">${escapeHTML(t(m.label))}</span>
        <span class="val">${escapeHTML(t(m.value))}</span>
      </div>`).join("");

    document.getElementById("hero-root").innerHTML = `
      <div class="wrap">
        <div class="hero-eyebrow">
          <span class="num">${escapeHTML(t(D.hero.eyebrow))}</span>
          <span class="rule"></span>
          <span class="num">Saint-Étienne · ${new Date().getFullYear()}</span>
        </div>
        <div class="hero-grid">
          <h1 class="hero-title">${renderTitleParts(t(D.hero.title))}</h1>
          <aside class="hero-aside">
            <span class="aside-label">${escapeHTML(t(D.hero.asideLabel))}</span>
            ${escapeHTML(t(D.hero.aside))}
          </aside>
        </div>
        <div class="hero-meta">${metas}</div>
      </div>`;
  }

  /* ── TRAVAUX ─────────────────────────────────────────── */
  function projectIndex(slug) {
    return D.projects.findIndex((p) => p.slug === slug);
  }
  function cardNum(slug) {
    const i = projectIndex(slug);
    return String(i + 1).padStart(2, "0");
  }
  function renderCard(p, idx, opts = {}) {
    const tones = p.tones || {};
    const styleVars = `--card-bg:${tones.bg || "#e1dbc9"}; --card-ink:${tones.ink || "#161512"}; --card-accent:${tones.accent || "#fff"};`;
    const num = String(idx + 1).padStart(2, "0");
    const href = `projets/${p.slug}.html`;
    const featureCls = opts.feature ? " feature" : "";
    const ttlIt = t(p.titleItalic);
    const ttlFull = t(p.title);
    const ttlHtml = ttlIt
      ? escapeHTML(ttlFull).replace(escapeHTML(ttlIt), `<i>${escapeHTML(ttlIt)}</i>`)
      : escapeHTML(ttlFull);

    return `
      <a href="${href}" class="card${featureCls}" style="${styleVars}" data-card="${p.slug}">
        <div class="card-visual">
          <img src="${escapeHTML(p.image)}" alt="${escapeHTML(ttlFull)}" loading="lazy"
               onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';" />
          <div class="ph" style="display:none;">
            <span>${escapeHTML(t(p.titleItalic) || t(p.title))}</span>
          </div>
        </div>
        <div class="card-meta">
          <span class="num">№ ${num} / ${String(D.projects.length).padStart(2, "0")}</span>
          <span class="chip">${escapeHTML(t(p.category))}</span>
        </div>
        <div class="card-foot">
          <h3 class="ttl">${ttlHtml}</h3>
          <span class="arr" aria-hidden="true">↗</span>
        </div>
      </a>`;
  }

  function renderTravaux() {
    const head = `
      <div class="sec-head">
        <div>
          <span class="eyebrow">${escapeHTML(t(D.travaux.eyebrow))}</span>
          <h2 class="h2">${renderTitleParts(t(D.travaux.titleParts))}</h2>
        </div>
        <p class="intro">${escapeHTML(t(D.travaux.intro))}</p>
      </div>`;

    const featured = D.projects.find((p) => p.featured);
    const others = D.projects.filter((p) => !p.featured);

    const featuredHtml = featured
      ? `<div class="work-feature">${renderCard(featured, projectIndex(featured.slug), { feature: true })}</div>`
      : "";

    const gridCards = others.map((p, i) => {
      // Position dans la mosaïque selon l'ordre fourni
      const cls = `card-${i + 1}`;
      const realIdx = projectIndex(p.slug);
      return renderCard(p, realIdx).replace(
        'class="card',
        `class="card mosaic ${cls}`
      );
    }).join("");

    document.getElementById("travaux-root").innerHTML = `
      <span class="section-mark">§ 01 · Travaux</span>
      <div class="wrap">
        ${head}
        ${featuredHtml}
        <div class="work-grid">${gridCards}</div>
      </div>`;
  }

  /* ── À PROPOS ────────────────────────────────────────── */
  function renderApropos() {
    const paras = t(D.about.paragraphs).map((p) => `<p>${escapeHTML(p)}</p>`).join("");
    const tl = D.about.timeline.map((row) => `
      <div class="tl-row">
        <span class="period">${escapeHTML(row.period)}</span>
        <span class="role">${escapeHTML(t(row.role))}</span>
        <span class="org">${escapeHTML(row.org)}</span>
        <span class="note">${escapeHTML(t(row.note))}</span>
      </div>`).join("");

    document.getElementById("apropos-root").innerHTML = `
      <span class="section-mark">§ 02 · À propos</span>
      <div class="wrap">
        <div class="sec-head">
          <div>
            <span class="eyebrow">${escapeHTML(t(D.about.eyebrow))}</span>
            <h2 class="h2">${renderTitleParts(t(D.about.titleParts))}</h2>
          </div>
        </div>
        <div class="about-grid">
          <div class="portrait" aria-label="Portrait de ${escapeHTML(D.profile.name)}">${escapeHTML(D.about.portraitInitials)}</div>
          <div class="about-bio">${paras}</div>
        </div>
        <div class="timeline">${tl}</div>
      </div>`;
  }

  /* ── CONTACT ─────────────────────────────────────────── */
  function renderContact() {
    const p = D.profile;
    document.getElementById("contact-root").innerHTML = `
      <span class="section-mark">§ 03 · Contact</span>
      <div class="wrap">
        <span class="eyebrow">${escapeHTML(t(D.contact.eyebrow))}</span>
        <h2 class="contact-title">${renderTitleParts(t(D.contact.titleParts))}</h2>
        <p class="contact-sub lede">${escapeHTML(t(D.contact.subtitle))}</p>
        <div class="pills">
          <a class="pill primary" href="mailto:${p.email}">
            <span>${escapeHTML(p.email)}</span>
            <span class="arr">↗</span>
          </a>
          <a class="pill" href="${p.linkedin}" target="_blank" rel="noopener">
            <span>LinkedIn</span>
            <span class="arr">↗</span>
          </a>
          <a class="pill" href="tel:${p.phone.replace(/\s/g, "")}">
            <span>${escapeHTML(p.phone)}</span>
            <span class="arr">↗</span>
          </a>
          <a class="pill" href="${p.cv}" target="_blank" rel="noopener">
            <span>${lang === "fr" ? "Télécharger CV" : "Download CV"} (PDF)</span>
            <span class="arr">↗</span>
          </a>
        </div>
      </div>`;
  }

  /* ── FOOTER ──────────────────────────────────────────── */
  function renderFooter() {
    document.getElementById("footer-root").innerHTML = `
      <div class="wrap footer-inner">
        <span>${escapeHTML(t(D.footer.copyright))}</span>
        <span>${escapeHTML(t(D.footer.place))}</span>
        <span class="sig">${escapeHTML(t(D.footer.signature))}</span>
      </div>`;
  }

  /* ── Scroll-spy + nav state ──────────────────────────── */
  function setupScroll() {
    const nav = document.getElementById("nav-root");
    const sections = ["travaux", "apropos", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const onScroll = () => {
      nav.classList.toggle("is-scrolled", window.scrollY > 30);

      // Active link
      let active = null;
      const mid = window.scrollY + window.innerHeight * 0.35;
      for (const s of sections) {
        if (s.offsetTop <= mid) active = s.id;
      }
      document.querySelectorAll("[data-nav]").forEach((a) => {
        a.classList.toggle("is-active", a.dataset.nav === active);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ── Reveal on scroll ────────────────────────────────── */
  function setupReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      }
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.05 });
    els.forEach((el) => io.observe(el));
  }

  /* ── Smooth scroll for nav anchors ───────────────────── */
  function setupSmoothScroll() {
    document.addEventListener("click", (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href").slice(1);
      if (!id || id === "top") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        const y = el.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    });
  }

  /* ── Render all ──────────────────────────────────────── */
  function renderAll() {
    renderNav();
    renderHero();
    renderTravaux();
    renderApropos();
    renderContact();
    renderFooter();
    // Re-mark reveal targets
    document.querySelectorAll(".reveal").forEach((el) => el.classList.remove("in"));
    setupReveal();
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderAll();
    setupScroll();
    setupSmoothScroll();
  });
})();
