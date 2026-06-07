/* ════════════════════════════════════════════════════════════
   Portfolio · Jacques Micholier — RIOT v2 app.js
   Rendu depuis data.js (window.PORTFOLIO).
   Aesthetic : charte Riot v1.0 (Red dominant, Gold/Violet accents).
   ════════════════════════════════════════════════════════════ */

(function () {
  const D = window.PORTFOLIO;
  if (!D) { console.error("Portfolio: data.js manquant"); return; }

  /* ── i18n ─────────────────────────────────────────────── */
  let lang = "fr";
  const t = (obj) => {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    if (typeof obj === "object" && "fr" in obj) return obj[lang] || obj.fr;
    return obj;
  };

  // tokens parts {i, n, br} → spans avec classe Riot accent
  function renderParts(parts, accentClass = "word-red") {
    return (parts || []).map((p) => {
      if (p.br) return '<span class="br"></span>';
      if (p.i) return `<span class="${accentClass}">${escapeHTML(p.i)}</span>`;
      if (p.n) return escapeHTML(p.n);
      return "";
    }).join("");
  }
  function escapeHTML(s) {
    return String(s).replace(/[&<>"]/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;",
    }[c]));
  }

  /* ── SVG primitives charte (bolt) ─────────────────────── */
  const BOLT = (color = "var(--riot-gold)", size = 80, rotate = 0) => `
    <svg class="bolt" viewBox="0 0 60 100" width="${size}" height="${size * 100 / 60}"
         style="transform: rotate(${rotate}deg)" aria-hidden="true">
      <path d="M34 2 L4 56 L26 56 L20 98 L56 38 L34 38 Z"
            fill="${color}" stroke="var(--ink)" stroke-width="2.5" stroke-linejoin="miter"/>
    </svg>`;

  /* ── NAV ──────────────────────────────────────────────── */
  function renderNav() {
    const links = D.nav.links.map((l) =>
      `<a href="#${l.id}" data-nav="${l.id}">${escapeHTML(t(l.label))}</a>`
    ).join("");

    document.getElementById("nav-root").innerHTML = `
      <div class="nav-inner">
        <a href="#top" class="logo" aria-label="Jacques Micholier">
          <span class="mark">JM</span>
          <span class="wordmark">MICHOLIER<span class="dot">.</span></span>
        </a>
        <nav class="nav-links" aria-label="Principal">${links}</nav>
        <span class="nav-status" title="${escapeHTML(t(D.profile.availability))}">
          <span class="dot" aria-hidden="true"></span>
          <span>DISPO · Q4&nbsp;26</span>
        </span>
      </div>`;
  }

  /* ── HERO ────────────────────────────────────────────── */
  // Le titre Riot est composé : "BRAND & / MARKETING / MANAGER." en trois lignes.
  // On ignore le `parts` de data.js ici pour le mapping coloré charte.
  function renderHero() {
    const metas = D.hero.metaItems.map((m, i) => `
      <div class="cell ${i === 0 || i === 3 ? "highlight" : ""}">
        <span class="lbl">${String(i + 1).padStart(2, "0")} · ${escapeHTML(t(m.label))}</span>
        <span class="val">${escapeHTML(t(m.value))}</span>
      </div>`).join("");

    const year = new Date().getFullYear();

    document.getElementById("hero-root").innerHTML = `
      <div class="wrap">
        <div class="hero-eyebrow">
          <span class="badge new">NEW</span>
          <span class="badge pro">PRO</span>
          <span class="marker">${escapeHTML(t(D.hero.eyebrow))} · LOG_001</span>
          <span class="rule"></span>
        </div>

        <h1 class="hero-title">
          BRAND&nbsp;<span class="amp">&amp;</span><span class="br"></span>
          <span class="word-red">MARKETING</span><span class="br"></span>
          <span class="word-outline">MANAGER.</span>
        </h1>

        <div class="hero-actions">
          ${(t(D.hero.subtitle) || t(D.hero.subtitleAccent)) ? `<p class="hero-sub">
            ${escapeHTML(t(D.hero.subtitle))}${t(D.hero.subtitleAccent) ? `<span class="hi">${escapeHTML(t(D.hero.subtitleAccent))}</span>` : ""}
          </p>` : ""}
          <a class="btn primary" href="#travaux">
            <span>Voir les travaux</span>
            <span class="arr">↗</span>
          </a>
          <a class="btn ghost" href="#apropos">
            <span>Lire la bio</span>
          </a>
        </div>

        <div class="hero-meta">${metas}</div>
      </div>`;
  }

  /* ── TRAVAUX — cartes diagonales ─────────────────────── */
  function badgeFor(i) {
    // Distribuer les 4 badges charte sur les projets
    return ["new", "tip", "pro", "beta", "new"][i] || "new";
  }
  function renderCard(p, idx, isFeature = false) {
    const tones = p.tones || {};
    const styleVars = [
      `--bg:${tones.bg || "var(--paper-2)"}`,
      `--fg:${tones.ink || "var(--ink)"}`,
      `--accent:${tones.accent || "var(--riot-gold)"}`,
      `--glyph:${tones.ink || "var(--ink)"}`,
    ].join(";");

    const num = String(idx + 1).padStart(2, "0");
    const total = String(D.projects.length).padStart(2, "0");
    const href = `projets/${p.slug}.html`;
    const ttlIt = t(p.titleItalic);
    const ttlFull = t(p.title);
    const ttlHtml = ttlIt
      ? escapeHTML(ttlFull).replace(escapeHTML(ttlIt), `<span class="hi">${escapeHTML(ttlIt)}</span>`)
      : escapeHTML(ttlFull);

    const featureCls = isFeature ? " feature" : "";

    // Image-slot derrière les overlays. Sur la feature comme sur les
    // mosaïques : la photo (si déposée) remplace le fond coloré ; sinon le
    // fond coloré + glyphe N° reste comme avant.
    // ID partagé `cover-{slug}` entre home/hero projet/next-card → une seule
    // photo à déposer par projet, elle apparaît partout.
    const visual = `
      <image-slot id="cover-${p.slug}" class="card-image"
        placeholder="Glissez une photo"></image-slot>
      <span class="drop-hint">📷 Glissez une photo</span>
      ${isFeature ? "" : `<span class="card-glyph" aria-hidden="true">${num}</span>`}
    `;

    return `
      <a href="${href}" class="card${featureCls}" style="${styleVars}" data-card="${p.slug}">
        ${visual}
        <div class="card-meta">
          <span class="left">
            <span class="num">№ ${num} / ${total}</span>
            <span class="badge ${badgeFor(idx)}">${badgeFor(idx).toUpperCase()}</span>
          </span>
          <span class="chip">${escapeHTML(t(p.category))}</span>
        </div>
        <div class="card-foot">
          <div>
            <div class="client">${escapeHTML(p.client)} · ${escapeHTML(p.year)}</div>
            <h3 class="ttl">${ttlHtml}</h3>
          </div>
          <span class="arr" aria-hidden="true">↗</span>
        </div>
      </a>`;
  }
  function projectIndex(slug) { return D.projects.findIndex((p) => p.slug === slug); }

  function renderTravaux() {
    const featured = D.projects.find((p) => p.featured);
    const others = D.projects.filter((p) => !p.featured);

    const featuredHtml = featured
      ? `<div class="work-feature">${renderCard(featured, projectIndex(featured.slug), true)}</div>`
      : "";

    const gridCards = others.map((p, i) => {
      const cls = `card-${i + 1}`;
      const realIdx = projectIndex(p.slug);
      return renderCard(p, realIdx).replace('class="card', `class="card mosaic ${cls}`);
    }).join("");

    // ── Catégories — mosaïque 4 cartes (même langage que la grille projets)
    const categoryCard = (c, i) => {
      const tones = c.tones || {};
      const styleVars = [
        `--bg:${tones.bg || "var(--paper-2)"}`,
        `--fg:${tones.ink || "var(--ink)"}`,
        `--accent:${tones.accent || "var(--riot-gold)"}`,
        `--glyph:${tones.ink || "var(--ink)"}`,
      ].join(";");
      const num = String(i + 1).padStart(2, "0");
      const total = String(D.categories.length).padStart(2, "0");
      const count = D.projects.filter((p) => p.categoryKey === c.key).length;
      const cls = `card-${i + 1}`;
      const countLbl = count > 1 ? `${count} projets` : `${count} projet`;
      const bgImage = c.image ? `<img class="cat-card-bg" src="${c.image}" alt="" aria-hidden="true">` : "";
      return `
        <a href="categories/${c.key}.html" class="card mosaic ${cls} cat-card${c.image ? ' has-image' : ''}" style="${styleVars}" data-cat="${c.key}">
          ${bgImage}
          <span class="card-glyph" aria-hidden="true">${escapeHTML(c.glyph || num)}</span>
          <div class="card-meta">
            <span class="left">
              <span class="num">CAT ${num} / ${total}</span>
              <span class="badge tip">${countLbl.toUpperCase()}</span>
            </span>
            <span class="chip">${escapeHTML(t(c.sub))}</span>
          </div>
          <div class="card-foot">
            <div>
              <div class="client">${escapeHTML(t(c.pitch)).slice(0, 90)}${t(c.pitch).length > 90 ? "…" : ""}</div>
              <h3 class="ttl">${escapeHTML(t(c.label))}<span class="hi">.</span></h3>
            </div>
            <span class="arr" aria-hidden="true">↗</span>
          </div>
        </a>`;
    };
    const catGrid = D.categories.map((c, i) => categoryCard(c, i)).join("");

    // ── Toggle Grille | Catégories
    const tg = D.travaux.toggle;
    const toggleHtml = `
      <div class="view-toggle" role="tablist" aria-label="Vue des travaux">
        <button type="button" class="vt-btn is-active" role="tab" aria-selected="true" data-view="grid">
          <span class="vt-dot" aria-hidden="true"></span>
          <span>${escapeHTML(t(tg.grid))}</span>
        </button>
        <button type="button" class="vt-btn" role="tab" aria-selected="false" data-view="cats">
          <span class="vt-dot" aria-hidden="true"></span>
          <span>${escapeHTML(t(tg.categories))}</span>
        </button>
      </div>`;

    document.getElementById("travaux-root").innerHTML = `
      <div class="wrap">
        ${BOLT("var(--riot-gold)", 70, -22).replace('class="bolt"', 'class="bolt travaux-bolt"')}
        <div class="sec-head with-aside">
          <div>
            <div class="marks">
              <span class="sec-tag">§ 01 — TRAVAUX</span>
              <span class="badge new">NEW</span>
              <span class="badge pro">PRO</span>
            </div>
            <h2 class="h2">
              SÉLECTION DE&nbsp;<span class="word-red">TRAVAUX.</span>
            </h2>
          </div>
          <div class="sec-aside">
            <p class="intro">${escapeHTML(t(D.travaux.intro))}</p>
            ${toggleHtml}
          </div>
        </div>
        <div class="view view-grid is-active" data-view="grid">
          ${featuredHtml}
          <div class="work-grid">${gridCards}</div>
        </div>
        <div class="view view-cats" data-view="cats">
          <div class="work-grid cats-grid">${catGrid}</div>
        </div>
      </div>`;

    setupViewToggle();
  }

  /* ── Toggle Grille / Catégories ──────────────────────── */
  function setupViewToggle() {
    const root = document.getElementById("travaux-root");
    if (!root) return;
    const btns = root.querySelectorAll(".vt-btn");
    const views = root.querySelectorAll(".view");
    btns.forEach((b) => {
      b.addEventListener("click", () => {
        const v = b.dataset.view;
        btns.forEach((x) => {
          const on = x === b;
          x.classList.toggle("is-active", on);
          x.setAttribute("aria-selected", on ? "true" : "false");
        });
        views.forEach((x) => x.classList.toggle("is-active", x.dataset.view === v));
        try { history.replaceState(null, "", v === "cats" ? "#travaux=cats" : "#travaux"); } catch {}
      });
    });
    // Sync initial avec le hash (deep-link depuis page catégorie ← retour)
    if (/[?#&]view=cats|#travaux=cats/.test(location.href)) {
      const cat = root.querySelector('.vt-btn[data-view="cats"]');
      if (cat) cat.click();
    }
  }

  /* ── À PROPOS ─────────────────────────────────────────── */
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
      <div class="wrap">
        <div class="sec-head">
          <div class="marks">
            <span class="sec-tag">§ 02 — À PROPOS</span>
            <span class="badge tip">TIP</span>
          </div>
          <h2 class="h2">BRAND & <span class="word-red">PRODUCT MARKETING.</span></h2>
        </div>
        <div class="about-grid">
          <div class="portrait" aria-label="Portrait de ${escapeHTML(D.profile.name)}">
            ${D.about.portraitImage
              ? `<img class="portrait-photo" src="${D.about.portraitImage}" alt="Portrait de ${escapeHTML(D.profile.name)}">`
              : `<image-slot id="portrait" class="portrait-image" placeholder="Glissez votre portrait"></image-slot>
                 <span class="drop-hint">📷 Glissez votre portrait</span>
                 <span class="portrait-fallback">${escapeHTML(D.about.portraitInitials)}</span>`}
          </div>
          <div class="about-bio">${paras}</div>
        </div>
        <div class="timeline">${tl}</div>
      </div>`;
  }

  /* ── CONTACT ──────────────────────────────────────────── */
  function renderContact() {
    const p = D.profile;
    document.getElementById("contact-root").innerHTML = `
      <div class="wrap">
        ${BOLT("var(--riot-gold)", 90, 28).replace('class="bolt"', 'class="bolt contact-bolt b1"')}
        <div class="marks" style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
          <span class="sec-tag">§ 03 — CONTACT</span>
          <span class="badge new">NEW</span>
        </div>
        <h1 class="contact-title">
          PARLONS D'<span class="word-red">UN PROJET.</span><span class="br"></span>
          OU JUSTE, <span class="word-gold-hi">PARLONS.</span>
        </h1>
        <p class="contact-sub">${escapeHTML(t(D.contact.subtitle))}</p>
        <div class="pills">
          <a class="btn primary" href="mailto:${escapeHTML(p.email)}">
            <span>${escapeHTML(p.email)}</span>
            <span class="arr">↗</span>
          </a>
          <a class="btn secondary" href="${escapeHTML(p.linkedin)}" target="_blank" rel="noopener">
            <span>LinkedIn</span>
            <span class="arr">↗</span>
          </a>
          <a class="btn secondary" href="tel:${p.phone.replace(/\s/g, "")}">
            <span>${escapeHTML(p.phone)}</span>
            <span class="arr">↗</span>
          </a>
          <a class="btn ghost" href="${escapeHTML(p.cv)}" target="_blank" rel="noopener">
            <span>${lang === "fr" ? "Télécharger CV (PDF)" : "Download CV (PDF)"}</span>
            <span class="arr">↗</span>
          </a>
        </div>
      </div>`;
  }

  /* ── FOOTER ──────────────────────────────────────────── */
  function renderFooter() {
    document.getElementById("footer-root").innerHTML = `
      <div class="wrap footer-inner">
        <span class="footer-mark"><span class="dot"></span>${escapeHTML(t(D.footer.copyright))}</span>
        <span>${escapeHTML(t(D.footer.place))}</span>
        <span class="sig">${escapeHTML(t(D.footer.signature))}</span>
      </div>`;
  }

  /* ── Scroll-spy + nav state ──────────────────────────── */
  function setupScroll() {
    const nav = document.getElementById("nav-root").parentElement;
    const sections = ["travaux", "apropos", "contact"]
      .map((id) => document.getElementById(id)).filter(Boolean);

    const onScroll = () => {
      nav.classList.toggle("is-scrolled", window.scrollY > 30);
      let active = null;
      const mid = window.scrollY + window.innerHeight * 0.35;
      for (const s of sections) if (s.offsetTop <= mid) active = s.id;
      document.querySelectorAll("[data-nav]").forEach((a) => {
        a.classList.toggle("is-active", a.dataset.nav === active);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ── Reveal on scroll ────────────────────────────────── */
  // Visible par défaut (failsafe). On ajoute .fade-init *avant* d'attacher
  // l'observer ; dès que l'élément croise le viewport, .in remet à 1.
  function setupReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    els.forEach((el) => el.classList.add("fade-init"));
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.02 });
    els.forEach((el) => io.observe(el));
  }

  /* ── Smooth scroll ───────────────────────────────────── */
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

  /* ── Tweaks Panel (live edit des 3 couleurs charte) ──── */
  // Le panneau apparaît quand l'utilisateur active "Tweaks" depuis la toolbar.
  // Le protocole __edit_mode est géré par tweaks-panel.jsx ; ici on relaie
  // juste les couleurs aux CSS vars du :root.

  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "riotRed":    "#D72E3E",
    "riotGold":   "#F4B324",
    "riotViolet": "#6B4FBB"
  }/*EDITMODE-END*/;

  function applyTweaks(t) {
    const r = document.documentElement;
    r.style.setProperty("--riot-red",    t.riotRed);
    r.style.setProperty("--riot-gold",   t.riotGold);
    r.style.setProperty("--riot-violet", t.riotViolet);
  }
  applyTweaks(TWEAK_DEFAULTS);

  // Le panneau est rendu côté React par tweaks-panel.jsx + tweaks-app.jsx.
  // On expose un global pour synchroniser :
  window.__riotApplyTweaks = applyTweaks;
  window.__riotTweakDefaults = TWEAK_DEFAULTS;

  /* ── Render all ──────────────────────────────────────── */
  function renderAll() {
    renderNav();
    renderHero();
    renderTravaux();
    renderApropos();
    renderContact();
    renderFooter();
    document.querySelectorAll(".reveal").forEach((el) => el.classList.remove("in"));
    setupReveal();
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderAll();
    setupScroll();
    setupSmoothScroll();
  });
})();
