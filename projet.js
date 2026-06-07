/* ════════════════════════════════════════════════════════════
   Pages projet — projets/*.html
   Rendu commun depuis window.PORTFOLIO + window.__projectSlug.
   Chaque wrapper HTML expose son slug puis charge ce script.
   ════════════════════════════════════════════════════════════ */

(function () {
  const D = window.PORTFOLIO;
  const slug = window.__projectSlug;
  if (!D || !slug) { console.error("projet.js: data.js ou slug manquant"); return; }

  const project = D.projects.find((p) => p.slug === slug);
  if (!project) {
    document.body.innerHTML = `<div style="padding:80px;font-family:var(--sans);">
      <h1>Projet introuvable : <code>${slug}</code></h1>
      <p><a href="../index.html#travaux">← Retour aux travaux</a></p>
    </div>`;
    return;
  }

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

  /* ── Tokens couleur + photos depuis sidecar racine ──── */
  // image-slot ne peut écrire son sidecar qu'à la racine. Les pages projet
  // vivent dans projets/, donc on s'interdit de poser des slots ici (ça
  // écraserait le sidecar racine partagé par toute la home). À la place, on
  // lit le sidecar racine et on applique l'image comme background-image.
  const covers = {}; // id -> data URL
  // image-slot lit son sidecar par fetch relatif. Depuis projets/*.html, on
  // veut taper le .image-slots.state.json racine — sinon les drops faits ici
  // ne ré-apparaîtraient pas, et un nouveau drop écraserait le sidecar parent.
  window.__imageSlotsFetchUrl = "../.image-slots.state.json";
  async function loadCovers() {
    try {
      const r = await fetch("../.image-slots.state.json");
      if (!r.ok) return;
      const j = await r.json();
      for (const k in j) {
        const v = j[k];
        const url = (v && v.u) || (typeof v === "string" ? v : null);
        if (url && /^data:image\//.test(url)) covers[k] = url;
      }
    } catch {}
  }
  function applyTones() {
    const r = document.documentElement;
    const tones = project.tones || {};
    r.style.setProperty("--proj-bg", tones.bg || "var(--riot-red)");
    r.style.setProperty("--proj-fg", tones.ink || "var(--paper)");
    r.style.setProperty("--proj-accent", tones.accent || "var(--riot-gold)");
    // Defaults charte (modifiables via tweaks home)
    const def = window.__riotTweakDefaults || {};
    r.style.setProperty("--riot-red",    def.riotRed    || "#D72E3E");
    r.style.setProperty("--riot-gold",   def.riotGold   || "#F4B324");
    r.style.setProperty("--riot-violet", def.riotViolet || "#6B4FBB");
  }

  /* ── NAV ──────────────────────────────────────────────── */
  function renderNav() {
    const links = D.nav.links.map((l) =>
      `<a href="../index.html#${l.id}" data-nav="${l.id}">${escapeHTML(t(l.label))}</a>`
    ).join("");
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

  /* ── HERO PROJET ──────────────────────────────────────── */
  function renderHero() {
    const idx = D.projects.findIndex((p) => p.slug === slug);
    const num = String(idx + 1).padStart(2, "0");
    const total = String(D.projects.length).padStart(2, "0");

    const ttlIt = t(project.titleItalic);
    const ttlFull = t(project.title);
    const ttlHtml = ttlIt
      ? escapeHTML(ttlFull).replace(escapeHTML(ttlIt), `<span class="hi">${escapeHTML(ttlIt)}</span>`)
      : escapeHTML(ttlFull);

    const kpis = (project.kpis || []).map((k) => `
      <div class="kpi">
        <span class="val">${escapeHTML(k.value)}</span>
        <span class="lbl">${escapeHTML(t(k.label))}</span>
        ${k.note ? `<span class="note">${escapeHTML(t(k.note))}</span>` : ""}
      </div>`).join("");

    document.getElementById("hero-root").innerHTML = `
      <span class="glyph" aria-hidden="true">${num}</span>
      <div class="wrap">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;margin-bottom:clamp(32px,4vw,56px);">
          <a class="back" href="../index.html#travaux">
            <span class="arr">←</span>
            <span>Retour aux travaux</span>
          </a>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            <span class="badge tip">PROJET ${num}/${total}</span>
          </div>
        </div>
        <div class="projet-eyebrow">
          <span class="marker solid">${escapeHTML(project.client)}</span>
          <span class="marker">${escapeHTML(t(project.period))}</span>
          <span class="marker">${escapeHTML(t(project.category))}</span>
        </div>
        <h1 class="projet-title">${ttlHtml}</h1>
        ${project.pitch ? `<p class="projet-pitch">${escapeHTML(t(project.pitch))}</p>` : ""}
        ${kpis ? `<div class="kpis">${kpis}</div>` : ""}
      </div>`;
  }

  /* ── BRIEF / CONTEXTE ────────────────────────────────── */
  function renderBrief() {
    const meta = [
      { lbl: "Client",   val: project.client, display: true, accent: true },
      { lbl: "Période",  val: t(project.period) },
      { lbl: "Rôle",     val: t(project.role) },
      { lbl: "Équipe",   val: t(project.team) },
    ];
    const metaHtml = meta.filter((m) => m.val).map((m) => `
      <div class="row">
        <span class="lbl">${escapeHTML(m.lbl)}</span>
        <span class="val ${m.display ? "display" : ""} ${m.accent ? "accent" : ""}">${escapeHTML(m.val)}</span>
      </div>`).join("");

    const brief = t(project.brief);
    const context = t(project.context);
    const bodyHtml = `
      <h2>Le <span class="hi">brief</span>.</h2>
      ${brief ? `<p>${escapeHTML(brief)}</p>` : ""}
      ${context ? `<p>${escapeHTML(context)}</p>` : ""}
    `;

    document.getElementById("brief-root").innerHTML = `
      <div class="wrap">
        <div class="grid">
          <div class="projet-meta">${metaHtml}</div>
          <div class="projet-body">${bodyHtml}</div>
        </div>
      </div>`;
  }

  /* ── BLOCS DE CONTENU ─────────────────────────────────── */
  // Insertés entre Brief et Méthode. Types : split, video, quote, media.
  // Les images se déposent par <image-slot> — le sidecar racine est partagé.
  function renderBlocks() {
    const root = document.getElementById("blocks-root");
    if (!root) return;
    const blocks = project.blocks;
    if (!blocks || !blocks.length) { root.parentElement.style.display = "none"; return; }

    const slotAttr = (id, placeholder, shape = "rect") =>
      `<image-slot id="${escapeHTML(id)}" shape="${shape}" fit="cover" placeholder="${escapeHTML(placeholder)}"></image-slot>`;

    const renderSplit = (b, i) => {
      const layout = b.layout === "image-left" ? "image-left" : "image-right";
      const num = String(i + 1).padStart(2, "0");
      return `
        <div class="block split ${layout}" data-block="${i}">
          <div class="block-visual">
            ${slotAttr(b.imageId || `block-${slug}-${i}`, t(b.caption) || "Déposer une image")}
            ${b.caption ? `<span class="block-caption">${escapeHTML(t(b.caption))}</span>` : ""}
          </div>
          <div class="block-text">
            <span class="block-num" aria-hidden="true">${num}</span>
            ${b.label ? `<span class="block-label">${escapeHTML(t(b.label))}</span>` : ""}
            ${b.title ? `<h3 class="block-title">${escapeHTML(t(b.title))}</h3>` : ""}
            ${b.body ? `<p class="block-body">${escapeHTML(t(b.body))}</p>` : ""}
          </div>
        </div>`;
    };

    const isEmbed = (u) => /^(https?:)?\/\/(www\.)?(youtube\.com|youtu\.be|vimeo\.com|player\.vimeo\.com)/i.test(u || "");
    const toEmbed = (u) => {
      if (!u) return "";
      const ytShort = u.match(/youtu\.be\/([\w-]+)/i);
      const ytLong = u.match(/youtube\.com\/watch\?v=([\w-]+)/i);
      if (ytShort) return `https://www.youtube.com/embed/${ytShort[1]}`;
      if (ytLong)  return `https://www.youtube.com/embed/${ytLong[1]}`;
      const vim = u.match(/vimeo\.com\/(\d+)/i);
      if (vim) return `https://player.vimeo.com/video/${vim[1]}`;
      return u;
    };

    const renderVideo = (b, i) => {
      const num = String(i + 1).padStart(2, "0");
      let media;
      if (b.src && isEmbed(b.src)) {
        media = `<div class="video-frame"><iframe src="${escapeHTML(toEmbed(b.src))}" title="${escapeHTML(t(b.title) || 'Vidéo')}" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>`;
      } else if (b.src) {
        media = `<div class="video-frame"><video controls preload="metadata" playsinline src="${escapeHTML(b.src)}"></video></div>`;
      } else {
        // Placeholder : grosse zone avec poster déposable + bouton play déco
        media = `
          <div class="video-frame is-placeholder">
            ${slotAttr(b.poster || `block-${slug}-video-${i}`, "Déposer une vignette de vidéo")}
            <span class="video-play" aria-hidden="true">▶</span>
            <span class="video-todo">VIDÉO À INTÉGRER</span>
          </div>`;
      }
      return `
        <div class="block video" data-block="${i}">
          <div class="block-text wide">
            <span class="block-num" aria-hidden="true">${num}</span>
            ${b.label ? `<span class="block-label">${escapeHTML(t(b.label))}</span>` : ""}
            ${b.title ? `<h3 class="block-title">${escapeHTML(t(b.title))}</h3>` : ""}
            ${b.body ? `<p class="block-body">${escapeHTML(t(b.body))}</p>` : ""}
          </div>
          <div class="block-visual full">
            ${media}
            ${b.caption ? `<span class="block-caption">${escapeHTML(t(b.caption))}</span>` : ""}
          </div>
        </div>`;
    };

    const renderQuote = (b) => `
      <div class="block quote">
        <span class="quote-mark" aria-hidden="true">“</span>
        <blockquote class="quote-text">${escapeHTML(t(b.text))}</blockquote>
        ${b.author ? `<cite class="quote-author">— ${escapeHTML(t(b.author))}</cite>` : ""}
      </div>`;

    const renderMedia = (b, i) => {
      const ratio = b.ratio || "16/9";
      return `
        <div class="block media" style="--ratio:${escapeHTML(ratio.replace('/', '/'))};" data-block="${i}">
          <div class="block-visual full">
            ${slotAttr(b.imageId || `block-${slug}-media-${i}`, t(b.caption) || "Déposer une image")}
          </div>
          ${b.caption ? `<span class="block-caption">${escapeHTML(t(b.caption))}</span>` : ""}
        </div>`;
    };

    const html = blocks.map((b, i) => {
      switch (b.type) {
        case "split": return renderSplit(b, i);
        case "video": return renderVideo(b, i);
        case "quote": return renderQuote(b, i);
        case "media": return renderMedia(b, i);
        default: return "";
      }
    }).join("");

    root.innerHTML = `
      <div class="wrap">
        <div class="blocks-head">
          <span class="block-label">Déroulé du projet</span>
          <h2>Au <span class="hi">détail</span>.</h2>
        </div>
        <div class="blocks-stream">${html}</div>
      </div>`;
  }

  /* ── STEPS ────────────────────────────────────────────── */
  function renderSteps() {
    const root = document.getElementById("steps-root");
    const steps = t(project.steps);
    if (!steps || !steps.length) { root.parentElement.style.display = "none"; return; }
    const items = steps.map((s, i) => `
      <div class="step">
        <span class="num">${String(i + 1).padStart(2, "0")}</span>
        <span class="t">${escapeHTML(s.t)}</span>
        <span class="d">${escapeHTML(s.d)}</span>
      </div>`).join("");
    root.innerHTML = `
      <div class="wrap">
        <div class="steps-head">
          <h2>La <span class="hi">méthode</span>.</h2>
        </div>
        <div class="steps">${items}</div>
      </div>`;
  }

  /* ── NEXT PROJET ──────────────────────────────────────── */
  function renderNext() {
    const idx = D.projects.findIndex((p) => p.slug === slug);
    const next = D.projects[(idx + 1) % D.projects.length];
    const tones = next.tones || {};
    const nextNum = String(((idx + 1) % D.projects.length) + 1).padStart(2, "0");
    const total = String(D.projects.length).padStart(2, "0");

    const ttlIt = t(next.titleItalic);
    const ttlFull = t(next.title);
    const ttlHtml = ttlIt
      ? escapeHTML(ttlFull).replace(escapeHTML(ttlIt), `<span class="hi">${escapeHTML(ttlIt)}</span>`)
      : escapeHTML(ttlFull);

    const styleVars = [
      `--bg:${tones.bg || "var(--paper-2)"}`,
      `--fg:${tones.ink || "var(--ink)"}`,
      `--accent:${tones.accent || "var(--riot-gold)"}`,
      `--glyph:${tones.ink || "var(--ink)"}`,
    ].join(";");

    document.getElementById("next-root").innerHTML = `
      <div class="wrap">
        <div class="next-head">
          <div>
            <span class="lbl">Suivant — ${nextNum}/${total}</span>
            <h2>Projet <span class="hi">suivant</span>.</h2>
          </div>
          <a class="back" href="../index.html#travaux">
            <span>Voir tous les travaux</span>
            <span class="arr">→</span>
          </a>
        </div>
        <a href="./${next.slug}.html" class="card feature next-card" style="${styleVars}">
          <div class="card-meta">
            <span class="left">
              <span class="num">№ ${nextNum} / ${total}</span>
            </span>
            <span class="chip">${escapeHTML(t(next.category))}</span>
          </div>
          <div class="card-foot">
            <div>
              <div class="client">${escapeHTML(next.client)} · ${escapeHTML(next.year)}</div>
              <h3 class="ttl">${ttlHtml}</h3>
            </div>
            <span class="arr" aria-hidden="true">↗</span>
          </div>
        </a>
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

  /* ── Application des photos (background) sur héro + carte suivante ── */
  function applyCoverPhotos() {
    const heroUrl = covers[`cover-${slug}`];
    if (heroUrl) {
      const hero = document.getElementById("hero");
      hero.classList.add("has-cover");
      hero.style.setProperty("--cover-url", `url("${heroUrl}")`);
    }
    const idx = D.projects.findIndex((p) => p.slug === slug);
    const next = D.projects[(idx + 1) % D.projects.length];
    const nextUrl = covers[`cover-${next.slug}`];
    if (nextUrl) {
      const nextCard = document.querySelector(".next-card");
      if (nextCard) {
        nextCard.classList.add("has-cover");
        nextCard.style.setProperty("--cover-url", `url("${nextUrl}")`);
      }
    }
  }

  /* ── Init ────────────────────────────────────────────── */
  document.addEventListener("DOMContentLoaded", async () => {
    document.title = `${t(project.title)} — ${D.profile.name}`;
    applyTones();
    await loadCovers();
    renderNav();
    renderHero();
    renderBrief();
    renderBlocks();
    renderSteps();
    renderNext();
    renderFooter();
    applyCoverPhotos();
  });
})();
