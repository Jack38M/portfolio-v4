/* ════════════════════════════════════════════════════════════
   Pages catégorie — categories/*.html
   Rendu commun depuis window.PORTFOLIO + window.__categoryKey.
   Chaque wrapper HTML expose son key puis charge ce script.
   ════════════════════════════════════════════════════════════ */

(function () {
  const D = window.PORTFOLIO;
  const key = window.__categoryKey;
  if (!D || !key) { console.error("categorie.js: data.js ou key manquant"); return; }

  const category = D.categories.find((c) => c.key === key);
  if (!category) {
    document.body.innerHTML = `<div style="padding:80px;font-family:var(--sans);">
      <h1>Catégorie introuvable : <code>${key}</code></h1>
      <p><a href="../index.html#travaux=cats">← Retour aux catégories</a></p>
    </div>`;
    return;
  }

  // sidecar racine pour image-slot lecture (cf. projet.js)
  window.__imageSlotsFetchUrl = "../.image-slots.state.json";

  let lang = "fr";
  const t = (obj) => {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    if (typeof obj === "object" && "fr" in obj) return obj[lang] || obj.fr;
    return obj;
  };
  const escapeHTML = (s) => String(s).replace(/[&<>"]/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;",
  }[c]));

  /* ── Application des tons charte ─────────────────────── */
  function applyTones() {
    const r = document.documentElement;
    const tones = category.tones || {};
    r.style.setProperty("--cat-bg", tones.bg || "var(--riot-red)");
    r.style.setProperty("--cat-fg", tones.ink || "var(--paper)");
    r.style.setProperty("--cat-accent", tones.accent || "var(--riot-gold)");
    const def = window.__riotTweakDefaults || {};
    r.style.setProperty("--riot-red",    def.riotRed    || "#D72E3E");
    r.style.setProperty("--riot-gold",   def.riotGold   || "#F4B324");
    r.style.setProperty("--riot-violet", def.riotViolet || "#6B4FBB");
  }

  /* ── NAV ──────────────────────────────────────────────── */
  function renderNav() {
    const links = D.nav.links.map((l) => {
      const target = l.id === "travaux"
        ? "../index.html#travaux=cats"
        : `../index.html#${l.id}`;
      return `<a href="${target}" data-nav="${l.id}">${escapeHTML(t(l.label))}</a>`;
    }).join("");
    document.getElementById("nav-root").innerHTML = `
      <div class="nav-inner">
        <a href="../index.html" class="logo" aria-label="Jacques Micholier">
          <span class="mark">JM</span>
          <span class="wordmark">MICHOLIER<span class="dot">.</span></span>
        </a>
        <nav class="nav-links" aria-label="Principal">${links}</nav>
        <span class="nav-status">
          <span class="dot" aria-hidden="true"></span>
          <span>DISPO · Q4&nbsp;26</span>
        </span>
      </div>`;
  }

  /* ── HERO CATÉGORIE ───────────────────────────────────── */
  function renderHero() {
    const idx = D.categories.findIndex((c) => c.key === key);
    const num = String(idx + 1).padStart(2, "0");
    const total = String(D.categories.length).padStart(2, "0");
    const count = D.projects.filter((p) => p.categoryKey === key).length;

    document.getElementById("hero-root").innerHTML = `
      <span class="glyph" aria-hidden="true">${escapeHTML(category.glyph || num)}</span>
      <div class="wrap">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;margin-bottom:clamp(32px,4vw,56px);">
          <a class="back" href="../index.html#travaux=cats">
            <span class="arr">←</span>
            <span>Retour aux catégories</span>
          </a>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            <span class="badge tip">CATÉGORIE ${num}/${total}</span>
          </div>
        </div>
        <div class="cat-eyebrow">
          <span class="marker solid">${escapeHTML(t(category.sub))}</span>
          <span class="marker">${count} ${count > 1 ? "projets" : "projet"}</span>
        </div>
        <h1 class="cat-title">${escapeHTML(t(category.label))}<span class="hi">.</span></h1>
        ${category.pitch ? `<p class="cat-pitch">${escapeHTML(t(category.pitch))}</p>` : ""}
      </div>`;
  }

  /* ── LISTE ÉDITORIALE ─────────────────────────────────── */
  function renderList() {
    const projects = D.projects.filter((p) => p.categoryKey === key);
    const root = document.getElementById("list-root");

    if (!projects.length) {
      root.innerHTML = `
        <div class="wrap">
          <div class="cat-empty">
            <p>Pas encore de projet dans cette catégorie.</p>
            <a class="back" href="../index.html#travaux=cats">
              <span class="arr">←</span><span>Voir les autres catégories</span>
            </a>
          </div>
        </div>`;
      return;
    }

    const rows = projects.map((p, i) => {
      const num = String(i + 1).padStart(2, "0");
      const total = String(projects.length).padStart(2, "0");
      const ttlIt = t(p.titleItalic);
      const ttlFull = t(p.title);
      const ttlHtml = ttlIt
        ? escapeHTML(ttlFull).replace(escapeHTML(ttlIt), `<span class="hi">${escapeHTML(ttlIt)}</span>`)
        : escapeHTML(ttlFull);

      const kpis = (p.kpis || []).slice(0, 3).map((k) => `
        <div class="kpi">
          <span class="val">${escapeHTML(k.value)}</span>
          <span class="lbl">${escapeHTML(t(k.label))}</span>
        </div>`).join("");

      return `
        <a class="cat-row" href="../projets/${p.slug}.html" data-slug="${p.slug}">
          <div class="cat-row-num" aria-hidden="true">${num}<span class="sep">/</span>${total}</div>
          <div class="cat-row-body">
            <div class="cat-row-meta">
              <span class="marker">${escapeHTML(p.client)}</span>
              <span class="marker">${escapeHTML(t(p.period))}</span>
              <span class="marker accent">${escapeHTML(t(p.category))}</span>
            </div>
            <h3 class="cat-row-title">${ttlHtml}</h3>
            ${p.pitch ? `<p class="cat-row-pitch">${escapeHTML(t(p.pitch))}</p>` : ""}
            ${kpis ? `<div class="cat-row-kpis">${kpis}</div>` : ""}
          </div>
          <div class="cat-row-cta" aria-hidden="true">
            <span class="cta-arr">↗</span>
            <span class="cta-lbl">Voir le projet</span>
          </div>
        </a>`;
    }).join("");

    root.innerHTML = `
      <div class="wrap">
        <div class="cat-list-head">
          <span class="block-label">Les projets de la catégorie</span>
          <h2>Au <span class="hi">travail</span>.</h2>
        </div>
        <div class="cat-list">${rows}</div>
      </div>`;
  }

  /* ── AUTRES CATÉGORIES ────────────────────────────────── */
  function renderOther() {
    const others = D.categories.filter((c) => c.key !== key);
    const cards = others.map((c, i) => {
      const tones = c.tones || {};
      const count = D.projects.filter((p) => p.categoryKey === c.key).length;
      const styleVars = [
        `--bg:${tones.bg || "var(--paper-2)"}`,
        `--fg:${tones.ink || "var(--ink)"}`,
        `--accent:${tones.accent || "var(--riot-gold)"}`,
      ].join(";");
      return `
        <a class="cat-other" href="./${c.key}.html" style="${styleVars}">
          <span class="cat-other-glyph" aria-hidden="true">${escapeHTML(c.glyph || "·")}</span>
          <div class="cat-other-body">
            <span class="cat-other-count">${count} ${count > 1 ? "projets" : "projet"}</span>
            <h3 class="cat-other-title">${escapeHTML(t(c.label))}</h3>
            <span class="cat-other-sub">${escapeHTML(t(c.sub))}</span>
          </div>
          <span class="arr" aria-hidden="true">↗</span>
        </a>`;
    }).join("");

    document.getElementById("other-root").innerHTML = `
      <div class="wrap">
        <div class="next-head">
          <div>
            <span class="lbl">Continuer</span>
            <h2>Autres <span class="hi">catégories</span>.</h2>
          </div>
          <a class="back" href="../index.html#travaux=cats">
            <span>Toutes les catégories</span>
            <span class="arr">→</span>
          </a>
        </div>
        <div class="cat-others">${cards}</div>
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

  /* ── Init ────────────────────────────────────────────── */
  document.addEventListener("DOMContentLoaded", () => {
    document.title = `${t(category.label)} — ${D.profile.name}`;
    applyTones();
    renderNav();
    renderHero();
    renderList();
    renderOther();
    renderFooter();
  });
})();
