/* ════════════════════════════════════════════════════════════
   Directions DA — 3 partis pris visuels pour le portfolio.
   Même contenu, palette et typographie radicalement différentes.
   ════════════════════════════════════════════════════════════ */

const { useState } = React;

/* ── Contenu commun aux trois artboards ──────────────────── */
const HERO_TITLE_PARTS = [
  { n: "Brand &" }, { br: true },
  { i: "Marketing" }, { br: true },
  { i: "Manager." }, { n: " Je construis" }, { br: true },
  { n: "des marques qui " }, { i: "durent" }, { n: "." },
];

const META = [
  { l: "Basé à", v: "Saint-Étienne" },
  { l: "Expérience", v: "8 années" },
  { l: "Langues", v: "FR · EN · IT" },
  { l: "Statut", v: "Ouvert aux opportunités" },
];

/* ════════════════════════════════════════════════════════════
   DIRECTION A — "CONSOLE"
   Tech-noir gaming-coded. Mono pour les titres. Cyan néon.
   ════════════════════════════════════════════════════════════ */
const A = {
  bg: "#0b0d12",
  surface: "#13161e",
  ink: "#e8e5dc",
  muted: "rgba(232,229,220,.55)",
  line: "rgba(232,229,220,.12)",
  accent: "#42e3d4",
  accent2: "#b9ff66",
  display: "'JetBrains Mono', ui-monospace, monospace",
  sans: "'JetBrains Mono', ui-monospace, monospace",
  mono: "'JetBrains Mono', ui-monospace, monospace",
  italic: "'Instrument Serif', serif",
};

function HeroConsole() {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: A.bg, color: A.ink,
      fontFamily: A.sans,
      padding: "32px 48px", boxSizing: "border-box",
      display: "flex", flexDirection: "column",
      overflow: "hidden",
      position: "relative",
    }}>
      {/* Grid overlay décoratif */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", opacity: .35,
        backgroundImage: `linear-gradient(${A.line} 1px, transparent 1px), linear-gradient(90deg, ${A.line} 1px, transparent 1px)`,
        backgroundSize: "64px 64px",
      }}/>
      {/* Nav */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${A.line}`, paddingBottom: 18, position: "relative", zIndex: 2 }}>
        <div style={{ fontFamily: A.mono, fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase" }}>
          <span style={{ color: A.accent }}>▮</span> J.MICHOLIER <span style={{ color: A.muted }}>/ PORTFOLIO_v2026</span>
        </div>
        <div style={{ display: "flex", gap: 18, fontFamily: A.mono, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase" }}>
          <span>[ TRAVAUX ]</span><span style={{ color: A.muted }}>[ À PROPOS ]</span><span style={{ color: A.muted }}>[ CONTACT ]</span>
        </div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 12px", border: `1px solid ${A.accent}`, color: A.accent, fontFamily: A.mono, fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase" }}>
          <span style={{ width: 6, height: 6, background: A.accent, borderRadius: "50%", boxShadow: `0 0 12px ${A.accent}` }}/>
          ONLINE · Q4_2026
        </div>
      </div>
      {/* Eyebrow */}
      <div style={{ marginTop: 36, fontFamily: A.mono, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: A.muted, position: "relative", zIndex: 2 }}>
        ╳ PORTFOLIO · 2018 — 2026 · LOG.001
      </div>
      {/* Title */}
      <h1 style={{
        margin: "16px 0 0",
        fontFamily: A.display, fontWeight: 500,
        fontSize: 96, lineHeight: .96, letterSpacing: "-.02em",
        textTransform: "uppercase",
        position: "relative", zIndex: 2,
      }}>
        BRAND &<br/>
        <span style={{ fontFamily: A.italic, fontStyle: "italic", color: A.accent, textTransform: "none", letterSpacing: "-.01em", fontWeight: 400, fontSize: "1.05em" }}>Marketing</span><br/>
        <span style={{ fontFamily: A.italic, fontStyle: "italic", color: A.accent, textTransform: "none", letterSpacing: "-.01em", fontWeight: 400, fontSize: "1.05em" }}>Manager.</span> JE CONSTRUIS<br/>
        DES MARQUES QUI <span style={{ fontFamily: A.italic, fontStyle: "italic", color: A.accent, textTransform: "none", fontWeight: 400, fontSize: "1.05em" }}>durent</span>.
      </h1>
      {/* Meta */}
      <div style={{ marginTop: "auto", paddingTop: 28, borderTop: `1px solid ${A.line}`, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, position: "relative", zIndex: 2 }}>
        {META.map((m, i) => (
          <div key={i}>
            <div style={{ fontFamily: A.mono, fontSize: 10, letterSpacing: ".18em", color: A.muted, textTransform: "uppercase", marginBottom: 6 }}>› {m.l}</div>
            <div style={{ fontFamily: A.mono, fontSize: 16, letterSpacing: ".02em" }}>{m.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CardConsole() {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: A.bg, color: A.ink,
      fontFamily: A.sans,
      padding: "32px 48px", boxSizing: "border-box",
      display: "flex", flexDirection: "column", gap: 24,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", borderBottom: `1px solid ${A.line}`, paddingBottom: 12 }}>
        <span style={{ fontFamily: A.mono, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: A.muted }}>§ 01 — SÉLECTION DE TRAVAUX</span>
        <span style={{ fontFamily: A.mono, fontSize: 11, letterSpacing: ".14em", color: A.accent }}>05 PROJETS</span>
      </div>
      <h2 style={{ margin: 0, fontFamily: A.display, fontWeight: 500, fontSize: 56, textTransform: "uppercase", letterSpacing: "-.01em", lineHeight: 1 }}>
        SÉLECTION DE <span style={{ fontFamily: A.italic, fontStyle: "italic", color: A.accent, textTransform: "none", fontWeight: 400, fontSize: "1.05em" }}>travaux</span>.
      </h2>
      {/* Card */}
      <div style={{
        flex: 1, position: "relative",
        background: "#1a2030",
        border: `1px solid ${A.line}`,
        padding: 24, display: "flex", flexDirection: "column", justifyContent: "space-between",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: .9,
          background: `radial-gradient(60% 80% at 80% 20%, ${A.accent}33, transparent 60%), radial-gradient(80% 60% at 10% 100%, ${A.accent2}1a, transparent 60%)`,
        }}/>
        <div style={{ position: "relative", display: "flex", justifyContent: "space-between", fontFamily: A.mono, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase" }}>
          <span style={{ color: A.accent }}>№ 01 / 05</span>
          <span style={{ border: `1px solid ${A.accent}`, color: A.accent, padding: "3px 9px" }}>CAMPAGNE 360°</span>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ fontFamily: A.mono, fontSize: 11, letterSpacing: ".14em", color: A.muted, textTransform: "uppercase", marginBottom: 10 }}>SCHÄR · 2023</div>
          <div style={{ fontFamily: A.display, fontWeight: 500, fontSize: 44, lineHeight: 1, textTransform: "uppercase", letterSpacing: "-.01em" }}>
            CAMPAGNE DE <span style={{ fontFamily: A.italic, fontStyle: "italic", color: A.accent, textTransform: "none", fontWeight: 400, fontSize: "1.05em" }}>Noël</span> SCHÄR
            <span style={{ marginLeft: 16, display: "inline-block", width: 44, height: 44, border: `1.5px solid ${A.accent}`, color: A.accent, textAlign: "center", lineHeight: "40px", verticalAlign: "middle" }}>↗</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   DIRECTION B — "MÉTRONOME"
   Stark monochrome + cobalt unique. Grotesk moderne, italique serif rare.
   ════════════════════════════════════════════════════════════ */
const B = {
  bg: "#fbfaf7",
  surface: "#f0eee8",
  ink: "#0a0a08",
  muted: "rgba(10,10,8,.55)",
  line: "rgba(10,10,8,.1)",
  accent: "#2348ff",
  display: "'Schibsted Grotesk', system-ui, sans-serif",
  sans: "'Schibsted Grotesk', system-ui, sans-serif",
  italic: "'Newsreader', serif",
};

function HeroMetronome() {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: B.bg, color: B.ink,
      fontFamily: B.sans,
      padding: "32px 48px", boxSizing: "border-box",
      display: "flex", flexDirection: "column",
    }}>
      {/* Nav */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontFamily: B.display, fontWeight: 600, fontSize: 18, letterSpacing: "-.01em" }}>
          Jacques<span style={{ fontFamily: B.italic, fontStyle: "italic", fontWeight: 400 }}> Micholier</span>
        </div>
        <div style={{ display: "flex", gap: 28, fontFamily: B.sans, fontWeight: 500, fontSize: 13 }}>
          <span>Travaux</span><span style={{ color: B.muted }}>À propos</span><span style={{ color: B.muted }}>Contact</span>
        </div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: B.sans, fontSize: 12, fontWeight: 500 }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: B.accent }}/>
          Disponible — Q4 2026
        </div>
      </div>
      {/* Big number marker */}
      <div style={{ display: "flex", alignItems: "baseline", gap: 18, marginTop: 56, fontFamily: B.sans, fontWeight: 500, fontSize: 12, letterSpacing: ".06em", textTransform: "uppercase" }}>
        <span style={{ fontFamily: B.display, fontWeight: 600, fontSize: 14, color: B.accent }}>·</span>
        <span>Portfolio</span><span style={{ color: B.muted }}>2018 — 2026</span>
        <span style={{ flex: 1, height: 1, background: B.ink, opacity: .8 }}/>
        <span style={{ color: B.muted }}>05 projets sélectionnés</span>
      </div>
      {/* Title */}
      <h1 style={{
        margin: "32px 0 0",
        fontFamily: B.display, fontWeight: 500,
        fontSize: 124, lineHeight: .9, letterSpacing: "-.04em",
      }}>
        Brand &<br/>
        <span style={{ fontFamily: B.italic, fontStyle: "italic", fontWeight: 400, color: B.accent, letterSpacing: "-.025em" }}>Marketing</span><br/>
        <span style={{ fontFamily: B.italic, fontStyle: "italic", fontWeight: 400, color: B.accent, letterSpacing: "-.025em" }}>Manager.</span> Je construis<br/>
        des marques qui <span style={{ fontFamily: B.italic, fontStyle: "italic", fontWeight: 400, color: B.accent, letterSpacing: "-.025em" }}>durent</span>.
      </h1>
      {/* Meta */}
      <div style={{ marginTop: "auto", paddingTop: 28, borderTop: `1px solid ${B.ink}`, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
        {META.map((m, i) => (
          <div key={i}>
            <div style={{ fontFamily: B.sans, fontWeight: 500, fontSize: 11, letterSpacing: ".08em", color: B.muted, textTransform: "uppercase", marginBottom: 6 }}>{m.l}</div>
            <div style={{ fontFamily: B.sans, fontWeight: 500, fontSize: 17 }}>{m.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CardMetronome() {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: B.bg, color: B.ink,
      fontFamily: B.sans,
      padding: "32px 48px", boxSizing: "border-box",
      display: "flex", flexDirection: "column", gap: 28,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <div>
          <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: ".08em", color: B.muted, textTransform: "uppercase", marginBottom: 8 }}>§ 01 — Travaux</div>
          <h2 style={{ margin: 0, fontFamily: B.display, fontWeight: 500, fontSize: 68, lineHeight: 1, letterSpacing: "-.035em" }}>
            Sélection de <span style={{ fontFamily: B.italic, fontStyle: "italic", color: B.accent, fontWeight: 400 }}>travaux</span>.
          </h2>
        </div>
        <div style={{ fontFamily: B.sans, fontSize: 13, color: B.muted, maxWidth: 280, lineHeight: 1.5 }}>
          Cinq projets, deux marques, six ans. Campagnes intégrées, lancements, refonte d'identité.
        </div>
      </div>
      <div style={{
        flex: 1, position: "relative",
        background: B.accent, color: "#fff",
        padding: 32, display: "flex", flexDirection: "column", justifyContent: "space-between",
        borderRadius: 2,
        overflow: "hidden",
      }}>
        {/* Cercle blanc décoratif derrière */}
        <div style={{
          position: "absolute", right: -120, bottom: -160, width: 380, height: 380,
          border: "1px solid rgba(255,255,255,.35)", borderRadius: "50%",
        }}/>
        <div style={{
          position: "absolute", right: -80, bottom: -120, width: 260, height: 260,
          border: "1px solid rgba(255,255,255,.25)", borderRadius: "50%",
        }}/>
        <div style={{ position: "relative", display: "flex", justifyContent: "space-between", fontFamily: B.sans, fontWeight: 500, fontSize: 12 }}>
          <span>№ 01 / 05</span>
          <span style={{ background: "#fff", color: B.accent, padding: "4px 12px", borderRadius: 999, fontSize: 11, letterSpacing: ".04em" }}>Campagne 360°</span>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ fontFamily: B.sans, fontWeight: 500, fontSize: 12, opacity: .8, marginBottom: 12 }}>Schär · 2023</div>
          <div style={{ fontFamily: B.display, fontWeight: 500, fontSize: 56, lineHeight: 1, letterSpacing: "-.03em", display: "flex", alignItems: "center", gap: 16 }}>
            <span>Campagne de <span style={{ fontFamily: B.italic, fontStyle: "italic", fontWeight: 400 }}>Noël</span> Schär</span>
            <span style={{ display: "inline-block", width: 52, height: 52, borderRadius: "50%", background: "#fff", color: B.accent, textAlign: "center", lineHeight: "48px", fontSize: 22, flexShrink: 0 }}>↗</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   DIRECTION C — "TROPIQUE"
   Éditorial pop. Bichromie chaude. Serif italique XL + grotesk.
   ════════════════════════════════════════════════════════════ */
const C = {
  bg: "#efe8d8",
  surface: "#18142a",
  ink: "#18142a",
  muted: "rgba(24,20,42,.55)",
  line: "rgba(24,20,42,.12)",
  primary: "#ff4e7d",
  secondary: "#ffc943",
  display: "'Newsreader', 'Times New Roman', serif",
  sans: "'Bricolage Grotesque', system-ui, sans-serif",
};
// Palettes alternatives — même structure, recoloration
const C_PALETTES = {
  original: { bg: "#efe8d8", ink: "#18142a", primary: "#ff4e7d", secondary: "#ffc943", name: "Original (rose + jaune)" },
  solaire:  { bg: "#efe8d8", ink: "#1a1410", primary: "#e58a1a", secondary: "#ffb900", name: "Solaire (orange + jaune)" },
  terre:    { bg: "#ede4d0", ink: "#1a1410", primary: "#c44a1e", secondary: "#d6a429", name: "Terre (terracotta + ocre)" },
  foret:    { bg: "#ece6d4", ink: "#16201a", primary: "#3f6b3d", secondary: "#d97a5e", name: "Forêt (sauge + argile)" },
  cobalt:   { bg: "#efe8d8", ink: "#0d1230", primary: "#2348ff", secondary: "#ff7a3d", name: "Cobalt (bleu + orange)" },
  // Variantes violettes
  royal:      { bg: "#efe8d8", ink: "#1c1339", primary: "#5b46c7", secondary: "#ffc943", name: "Royal (violet + jaune)" },
  aubergine:  { bg: "#ece4d2", ink: "#1f0f23", primary: "#4a1e4d", secondary: "#f5b189", name: "Aubergine (prune + pêche)" },
  electrique: { bg: "#efe8d8", ink: "#190c2a", primary: "#7c3aed", secondary: "#d4f64a", name: "Électrique (violet + chartreuse)" },
  lavande:    { bg: "#ede6da", ink: "#2a1d3d", primary: "#7c5fc4", secondary: "#d97a5e", name: "Lavande (mauve + argile)" },
  // 2e vague — plus divergentes
  tonal:      { bg: "#ece4dc", ink: "#1f0f3a", primary: "#3a1f7d", secondary: "#a89bd8", name: "Tonal (monochrome violet)" },
  nocturne:   { bg: "#1f1442", ink: "#efe8d8", primary: "#c4a8ff", secondary: "#ffb4a8", name: "Nocturne (fond violet + crème)" },
  sorbet:     { bg: "#f1e9e7", ink: "#3a1e5a", primary: "#b89dd6", secondary: "#a6c8e0", name: "Sorbet (mauve glacé + bleu poudré)" },
  emeraude:   { bg: "#efe8d8", ink: "#1d0f3a", primary: "#6b3fb7", secondary: "#0d8a5a", name: "Émeraude (violet + vert)" },
  vinyle:     { bg: "#f0e8d8", ink: "#0a0a0a", primary: "#a020a0", secondary: "#0a0a0a", name: "Vinyle (magenta-violet + noir)" },
  bruyere:    { bg: "#1a1224", ink: "#f0e6d8", primary: "#d96aa8", secondary: "#7cc26a", name: "Bruyère (violet sombre + rose + vert)" },
};

function HeroTropique({ palette = C_PALETTES.original }) {
  const p = palette;
  return (
    <div style={{
      width: "100%", height: "100%",
      background: p.bg, color: p.ink,
      fontFamily: C.sans,
      padding: "32px 48px", boxSizing: "border-box",
      display: "flex", flexDirection: "column",
      position: "relative", overflow: "hidden",
    }}>
      {/* Décoratif : disque primary en arrière-plan */}
      <div style={{
        position: "absolute", right: -80, top: 120, width: 380, height: 380,
        background: p.primary, borderRadius: "50%", opacity: .22, filter: "blur(2px)",
      }}/>
      <div style={{
        position: "absolute", left: -60, bottom: 100, width: 180, height: 180,
        background: p.secondary, borderRadius: "50%", opacity: .55,
      }}/>
      {/* Nav */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative", zIndex: 2 }}>
        <div style={{ fontFamily: C.display, fontStyle: "italic", fontWeight: 400, fontSize: 22, color: p.ink }}>
          Jacques Micholier<span style={{ color: p.primary }}>.</span>
        </div>
        <div style={{ display: "flex", gap: 4, fontFamily: C.sans, fontSize: 13, fontWeight: 500 }}>
          <span style={{ padding: "8px 14px", borderRadius: 999, background: p.ink, color: p.bg }}>Travaux</span>
          <span style={{ padding: "8px 14px", borderRadius: 999, color: `${p.ink}88` }}>À propos</span>
          <span style={{ padding: "8px 14px", borderRadius: 999, color: `${p.ink}88` }}>Contact</span>
        </div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 14px", borderRadius: 999, background: p.secondary, fontFamily: C.sans, fontSize: 12, fontWeight: 600, color: p.ink }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: p.ink }}/>
          Disponible Q4 2026
        </div>
      </div>
      {/* Eyebrow */}
      <div style={{ marginTop: 44, position: "relative", zIndex: 2, fontFamily: C.sans, fontWeight: 500, fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", color: p.ink }}>
        <span style={{ background: p.primary, color: p.bg, padding: "4px 10px", borderRadius: 999, marginRight: 12 }}>Portfolio</span>
        2018 — 2026 · Saint-Étienne
      </div>
      {/* Title */}
      <h1 style={{
        margin: "20px 0 0", position: "relative", zIndex: 2,
        fontFamily: C.display, fontWeight: 400,
        fontSize: 132, lineHeight: .88, letterSpacing: "-.025em",
        color: p.ink,
      }}>
        Brand &amp;<br/>
        <span style={{ fontStyle: "italic", color: p.primary }}>Marketing</span><br/>
        <span style={{ fontStyle: "italic", color: p.primary }}>Manager.</span> <span style={{ fontFamily: C.sans, fontWeight: 500, fontSize: "0.55em", verticalAlign: "0.18em" }}>Je construis</span><br/>
        des marques qui <span style={{ fontStyle: "italic", color: p.primary }}>durent</span>.
      </h1>
      {/* Meta */}
      <div style={{ marginTop: "auto", paddingTop: 28, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, position: "relative", zIndex: 2, borderTop: `1px solid ${p.ink}` }}>
        {META.map((m, i) => (
          <div key={i}>
            <div style={{ fontFamily: C.sans, fontWeight: 500, fontSize: 11, letterSpacing: ".08em", color: `${p.ink}88`, textTransform: "uppercase", marginBottom: 6 }}>{m.l}</div>
            <div style={{ fontFamily: C.display, fontStyle: i % 2 ? "italic" : "normal", fontSize: 22, lineHeight: 1.1, color: p.ink }}>{m.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CardTropique({ palette = C_PALETTES.original }) {
  const p = palette;
  return (
    <div style={{
      width: "100%", height: "100%",
      background: p.bg, color: p.ink,
      fontFamily: C.sans,
      padding: "32px 48px", boxSizing: "border-box",
      display: "flex", flexDirection: "column", gap: 28,
    }}>
      <div>
        <div style={{ display: "inline-block", background: p.ink, color: p.bg, padding: "5px 12px", borderRadius: 999, fontSize: 11, fontWeight: 500, letterSpacing: ".08em", textTransform: "uppercase", marginBottom: 14 }}>§ 01 — Travaux</div>
        <h2 style={{ margin: 0, fontFamily: C.display, fontWeight: 400, fontSize: 76, lineHeight: .95, letterSpacing: "-.02em", color: p.ink }}>
          Sélection de <span style={{ fontStyle: "italic", color: p.primary }}>travaux</span>.
        </h2>
      </div>
      <div style={{
        flex: 1, position: "relative",
        background: p.primary, color: "#fff",
        padding: 32, display: "flex", flexDirection: "column", justifyContent: "space-between",
        borderRadius: 6,
        overflow: "hidden",
      }}>
        {/* secondary sun motif */}
        <div style={{
          position: "absolute", right: -40, top: -40, width: 220, height: 220,
          background: p.secondary, borderRadius: "50%",
        }}/>
        <div style={{
          position: "absolute", left: 40, bottom: 40, width: 80, height: 80,
          border: `2px solid ${p.secondary}`, borderRadius: "50%", opacity: .8,
        }}/>
        <div style={{ position: "relative", display: "flex", justifyContent: "space-between", fontFamily: C.sans, fontWeight: 500, fontSize: 12, textTransform: "uppercase", letterSpacing: ".08em" }}>
          <span>№ 01 / 05</span>
          <span style={{ background: "#fff", color: p.ink, padding: "4px 12px", borderRadius: 999 }}>Campagne 360°</span>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ fontFamily: C.sans, fontSize: 12, fontWeight: 500, opacity: .85, marginBottom: 10, textTransform: "uppercase", letterSpacing: ".08em" }}>Schär · 2023</div>
          <div style={{ fontFamily: C.display, fontWeight: 400, fontSize: 60, lineHeight: 1, letterSpacing: "-.02em", display: "flex", alignItems: "center", gap: 16 }}>
            <span>Campagne de <span style={{ fontStyle: "italic", color: p.secondary }}>Noël</span> Schär</span>
            <span style={{ display: "inline-block", width: 52, height: 52, borderRadius: "50%", background: "#fff", color: p.primary, textAlign: "center", lineHeight: "48px", fontSize: 22, flexShrink: 0 }}>↗</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   DIRECTION D — "ATELIER"
   Magazine français haut de gamme. Serif italique XL roi.
   Blanc cassé, encre, terracotta. Quasi pas de sans.
   ════════════════════════════════════════════════════════════ */
const D = {
  bg: "#ffffff",
  surface: "#f2ece0",
  ink: "#131313",
  muted: "rgba(19,19,19,.5)",
  line: "rgba(19,19,19,.14)",
  accent: "#c44a1e",
  display: "'DM Serif Display', 'Times New Roman', serif",
  sans: "'Geist', system-ui, sans-serif",
};

function HeroAtelier() {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: D.bg, color: D.ink,
      fontFamily: D.sans,
      padding: "32px 56px", boxSizing: "border-box",
      display: "flex", flexDirection: "column",
    }}>
      {/* Nav */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${D.ink}`, paddingBottom: 18 }}>
        <div style={{ fontFamily: D.display, fontStyle: "italic", fontSize: 24, fontWeight: 400, letterSpacing: "-.02em" }}>
          Jacques Micholier
        </div>
        <div style={{ display: "flex", gap: 32, fontFamily: D.sans, fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", fontWeight: 500 }}>
          <span style={{ fontStyle: "italic", fontFamily: D.display, fontSize: 16, letterSpacing: 0, textTransform: "none" }}>Travaux</span>
          <span style={{ color: D.muted, fontStyle: "italic", fontFamily: D.display, fontSize: 16, letterSpacing: 0, textTransform: "none" }}>À propos</span>
          <span style={{ color: D.muted, fontStyle: "italic", fontFamily: D.display, fontSize: 16, letterSpacing: 0, textTransform: "none" }}>Contact</span>
        </div>
        <div style={{ fontFamily: D.sans, fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: D.accent }}>
          ● Disponible · Q4 2026
        </div>
      </div>
      {/* Eyebrow with folio number */}
      <div style={{ marginTop: 40, display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <div style={{ fontFamily: D.sans, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: D.muted }}>
          Folio I — Portfolio · MMXVIII / MMXXVI
        </div>
        <div style={{ fontFamily: D.display, fontStyle: "italic", fontSize: 22, color: D.accent }}>n° 001</div>
      </div>
      {/* Title — quasi entièrement en italique serif */}
      <h1 style={{
        margin: "8px 0 0",
        fontFamily: D.display, fontStyle: "italic", fontWeight: 400,
        fontSize: 156, lineHeight: .88, letterSpacing: "-.03em",
      }}>
        Brand &amp;<br/>
        <span style={{ color: D.accent }}>Marketing</span><br/>
        <span style={{ color: D.accent }}>Manager</span><span style={{ fontStyle: "normal", color: D.ink }}>.</span><br/>
        <span style={{ fontFamily: D.sans, fontStyle: "normal", fontWeight: 400, fontSize: ".22em", letterSpacing: ".06em", textTransform: "uppercase", verticalAlign: "0.7em", marginRight: 14, color: D.muted }}>chap. I — </span>
        <span style={{ fontStyle: "normal", fontFamily: D.display }}>Des marques qui durent.</span>
      </h1>
      {/* Meta — en serif normal + italique */}
      <div style={{ marginTop: "auto", paddingTop: 28, borderTop: `1px solid ${D.line}`, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28 }}>
        {META.map((m, i) => (
          <div key={i}>
            <div style={{ fontFamily: D.sans, fontWeight: 500, fontSize: 10, letterSpacing: ".18em", color: D.muted, textTransform: "uppercase", marginBottom: 8 }}>{m.l}</div>
            <div style={{ fontFamily: D.display, fontStyle: "italic", fontSize: 24, color: D.ink, lineHeight: 1.1 }}>{m.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CardAtelier() {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: D.bg, color: D.ink,
      fontFamily: D.sans,
      padding: "32px 56px", boxSizing: "border-box",
      display: "flex", flexDirection: "column", gap: 24,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderBottom: `1px solid ${D.line}`, paddingBottom: 16 }}>
        <div>
          <div style={{ fontFamily: D.sans, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: D.muted, marginBottom: 4 }}>§ 01 — Folio des travaux</div>
          <h2 style={{ margin: 0, fontFamily: D.display, fontStyle: "italic", fontWeight: 400, fontSize: 72, lineHeight: 1, letterSpacing: "-.025em" }}>
            <span style={{ fontStyle: "normal" }}>Sélection de</span> <span style={{ color: D.accent }}>travaux</span><span style={{ fontStyle: "normal" }}>.</span>
          </h2>
        </div>
        <div style={{ fontFamily: D.display, fontStyle: "italic", fontSize: 18, color: D.accent }}>05 entrées</div>
      </div>
      {/* Card — pleine surface chaude, image+texte */}
      <div style={{
        flex: 1, position: "relative",
        background: D.surface,
        display: "flex",
        overflow: "hidden",
      }}>
        {/* Bandeau gauche : numéro géant */}
        <div style={{ width: 200, borderRight: `1px solid ${D.line}`, padding: 24, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ fontFamily: D.sans, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: D.muted }}>N°</div>
          <div style={{ fontFamily: D.display, fontStyle: "italic", fontSize: 200, color: D.accent, lineHeight: .8, letterSpacing: "-.04em" }}>01</div>
          <div style={{ fontFamily: D.sans, fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: D.muted }}>de cinq</div>
        </div>
        <div style={{ flex: 1, padding: 32, display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: D.sans, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: D.muted }}>
            <span>Schär — 2023</span>
            <span style={{ fontStyle: "italic", fontFamily: D.display, fontSize: 17, letterSpacing: 0, textTransform: "none", color: D.ink }}>Campagne 360°</span>
          </div>
          <div>
            <div style={{ fontFamily: D.display, fontStyle: "italic", fontWeight: 400, fontSize: 64, lineHeight: .95, letterSpacing: "-.025em" }}>
              <span style={{ fontStyle: "normal" }}>Campagne de</span> <span style={{ color: D.accent }}>Noël</span> <span style={{ fontStyle: "normal" }}>Schär.</span>
            </div>
            <div style={{ marginTop: 16, fontFamily: D.sans, fontSize: 13, color: D.muted, maxWidth: 480, lineHeight: 1.5 }}>
              Faire du sans-gluten un moment de partage, pas une contrainte. → Lire le projet.
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", top: 24, right: 24, fontFamily: D.display, fontStyle: "italic", fontSize: 28, color: D.accent }}>↗</div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   DIRECTION E — "CRÉPUSCULE"
   Dark cinématique, chaud. Encre aubergine, os, or pâle.
   Italique Garamond + mono. Criterion Collection vibe.
   ════════════════════════════════════════════════════════════ */
const E = {
  bg: "#1a1310",
  surface: "#231a16",
  ink: "#e8e1d4",
  muted: "rgba(232,225,212,.55)",
  line: "rgba(232,225,212,.14)",
  accent: "#c4a35a",
  display: "'EB Garamond', 'Times New Roman', serif",
  sans: "'JetBrains Mono', ui-monospace, monospace",
};

function HeroCrepuscule() {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: E.bg, color: E.ink,
      fontFamily: E.sans,
      padding: "32px 56px", boxSizing: "border-box",
      display: "flex", flexDirection: "column",
      position: "relative", overflow: "hidden",
    }}>
      {/* Halo doré */}
      <div style={{
        position: "absolute", right: -200, top: -100, width: 600, height: 600,
        background: `radial-gradient(closest-side, ${E.accent}26, transparent 70%)`,
        pointerEvents: "none",
      }}/>
      {/* Nav */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative", zIndex: 2 }}>
        <div style={{ fontFamily: E.display, fontSize: 22, fontStyle: "italic", color: E.ink }}>
          Jacques <span style={{ color: E.accent }}>Micholier</span>
        </div>
        <div style={{ display: "flex", gap: 28, fontFamily: E.sans, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase" }}>
          <span>Travaux</span><span style={{ color: E.muted }}>À propos</span><span style={{ color: E.muted }}>Contact</span>
        </div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: E.sans, fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: E.accent }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: E.accent }}/>
          Disponible · Q4 26
        </div>
      </div>
      {/* Eyebrow */}
      <div style={{ marginTop: 56, fontFamily: E.sans, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: E.muted, position: "relative", zIndex: 2 }}>
        — Portfolio · 2018 / 2026 —
      </div>
      {/* Title */}
      <h1 style={{
        margin: "12px 0 0", position: "relative", zIndex: 2,
        fontFamily: E.display, fontWeight: 400,
        fontSize: 140, lineHeight: .9, letterSpacing: "-.02em",
      }}>
        Brand &amp;<br/>
        <span style={{ fontStyle: "italic", color: E.accent }}>Marketing</span><br/>
        <span style={{ fontStyle: "italic", color: E.accent }}>Manager</span><span>.</span> <span style={{ fontFamily: E.sans, fontWeight: 400, fontSize: ".2em", letterSpacing: ".04em", textTransform: "uppercase", verticalAlign: "0.8em", color: E.muted }}>Je construis</span><br/>
        <span>des marques qui </span><span style={{ fontStyle: "italic", color: E.accent }}>durent</span><span>.</span>
      </h1>
      {/* Meta */}
      <div style={{ marginTop: "auto", paddingTop: 24, borderTop: `1px solid ${E.line}`, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28, position: "relative", zIndex: 2 }}>
        {META.map((m, i) => (
          <div key={i}>
            <div style={{ fontFamily: E.sans, fontSize: 10, letterSpacing: ".18em", color: E.muted, textTransform: "uppercase", marginBottom: 8 }}>· {m.l}</div>
            <div style={{ fontFamily: E.display, fontStyle: i % 2 ? "italic" : "normal", fontSize: 22, lineHeight: 1.1 }}>{m.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CardCrepuscule() {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: E.bg, color: E.ink,
      fontFamily: E.sans,
      padding: "32px 56px", boxSizing: "border-box",
      display: "flex", flexDirection: "column", gap: 24,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <div>
          <div style={{ fontFamily: E.sans, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: E.muted, marginBottom: 8 }}>I. — Sélection</div>
          <h2 style={{ margin: 0, fontFamily: E.display, fontWeight: 400, fontSize: 68, lineHeight: 1, letterSpacing: "-.02em" }}>
            Sélection de <span style={{ fontStyle: "italic", color: E.accent }}>travaux</span>.
          </h2>
        </div>
        <div style={{ fontFamily: E.sans, fontSize: 11, letterSpacing: ".14em", color: E.accent, textTransform: "uppercase" }}>—— Cinq</div>
      </div>
      <div style={{
        flex: 1, position: "relative",
        background: E.surface,
        padding: 32, display: "flex", flexDirection: "column", justifyContent: "space-between",
        border: `1px solid ${E.line}`,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: .8,
          background: `radial-gradient(70% 90% at 80% 20%, ${E.accent}33, transparent 60%)`,
        }}/>
        <div style={{ position: "relative", display: "flex", justifyContent: "space-between", fontFamily: E.sans, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase" }}>
          <span style={{ color: E.accent }}>N° 01 / 05</span>
          <span style={{ border: `1px solid ${E.accent}`, color: E.accent, padding: "4px 10px" }}>Campagne 360°</span>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ fontFamily: E.sans, fontSize: 11, letterSpacing: ".14em", color: E.muted, textTransform: "uppercase", marginBottom: 14 }}>Schär · MMXXIII</div>
          <div style={{ fontFamily: E.display, fontWeight: 400, fontSize: 60, lineHeight: 1, letterSpacing: "-.02em", display: "flex", alignItems: "center", gap: 18 }}>
            <span>Campagne de <span style={{ fontStyle: "italic", color: E.accent }}>Noël</span> Schär</span>
            <span style={{ display: "inline-block", width: 52, height: 52, borderRadius: "50%", border: `1px solid ${E.accent}`, color: E.accent, textAlign: "center", lineHeight: "50px", fontSize: 22, fontFamily: E.sans, flexShrink: 0 }}>↗</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   DIRECTION F — "CARBONE"
   Brutalist poster. Noir, blanc, jaune néon.
   Caps grotesk lourd. Italique serif rare en accent. Aucun gradient.
   ════════════════════════════════════════════════════════════ */
const F = {
  bg: "#0a0a0a",
  surface: "#161616",
  ink: "#ffffff",
  muted: "rgba(255,255,255,.5)",
  line: "rgba(255,255,255,.18)",
  accent: "#ecff00",
  display: "'Bricolage Grotesque', system-ui, sans-serif",
  sans: "'JetBrains Mono', monospace",
  italic: "'Instrument Serif', serif",
};

function HeroCarbone() {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: F.bg, color: F.ink,
      fontFamily: F.sans,
      padding: "32px 48px", boxSizing: "border-box",
      display: "flex", flexDirection: "column",
      position: "relative",
    }}>
      {/* Nav */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `2px solid ${F.ink}`, paddingBottom: 16 }}>
        <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 18, letterSpacing: ".02em", textTransform: "uppercase" }}>
          MICHOLIER<span style={{ color: F.accent }}>·</span>J
        </div>
        <div style={{ display: "flex", gap: 4, fontFamily: F.sans, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 500 }}>
          <span style={{ padding: "6px 12px", background: F.accent, color: F.bg }}>Travaux</span>
          <span style={{ padding: "6px 12px", border: `1px solid ${F.line}`, color: F.muted }}>À propos</span>
          <span style={{ padding: "6px 12px", border: `1px solid ${F.line}`, color: F.muted }}>Contact</span>
        </div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 12px", background: F.accent, color: F.bg, fontFamily: F.sans, fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 600 }}>
          ✕ DISPO · Q4'26
        </div>
      </div>
      {/* Marker line */}
      <div style={{ marginTop: 32, display: "flex", alignItems: "center", gap: 18, fontFamily: F.sans, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase" }}>
        <span style={{ background: F.ink, color: F.bg, padding: "3px 8px", fontWeight: 600 }}>001 / 005</span>
        <span style={{ color: F.muted }}>PORTFOLIO — 2018→2026</span>
        <span style={{ flex: 1, borderTop: `2px dashed ${F.line}` }}/>
        <span style={{ color: F.accent }}>EST. SAINT-ÉTIENNE</span>
      </div>
      {/* Title — caps grotesk énorme */}
      <h1 style={{
        margin: "20px 0 0",
        fontFamily: F.display, fontWeight: 800,
        fontSize: 144, lineHeight: .88, letterSpacing: "-.04em",
        textTransform: "uppercase",
      }}>
        BRAND &amp;<br/>
        <span style={{ background: F.accent, color: F.bg, padding: "0 .08em" }}>MARKETING</span><br/>
        <span style={{ background: F.accent, color: F.bg, padding: "0 .08em" }}>MANAGER.</span><br/>
        DES MARQUES{" "}
        <span style={{ fontFamily: F.italic, fontStyle: "italic", fontWeight: 400, textTransform: "none", color: F.accent, letterSpacing: "-.02em", fontSize: "1.05em" }}>qui durent</span>.
      </h1>
      {/* Meta */}
      <div style={{ marginTop: "auto", paddingTop: 24, borderTop: `2px solid ${F.ink}`, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
        {META.map((m, i) => (
          <div key={i}>
            <div style={{ fontFamily: F.sans, fontSize: 10, letterSpacing: ".18em", color: F.accent, textTransform: "uppercase", marginBottom: 6, fontWeight: 600 }}>// {m.l}</div>
            <div style={{ fontFamily: F.display, fontWeight: 700, fontSize: 18, textTransform: "uppercase", letterSpacing: "-.005em" }}>{m.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CardCarbone() {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: F.bg, color: F.ink,
      fontFamily: F.sans,
      padding: "32px 48px", boxSizing: "border-box",
      display: "flex", flexDirection: "column", gap: 24,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderBottom: `2px solid ${F.ink}`, paddingBottom: 16 }}>
        <div>
          <div style={{ display: "inline-block", background: F.accent, color: F.bg, padding: "3px 10px", fontFamily: F.sans, fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", fontWeight: 600, marginBottom: 10 }}>§ 01 — Travaux</div>
          <h2 style={{ margin: 0, fontFamily: F.display, fontWeight: 800, fontSize: 76, lineHeight: .92, letterSpacing: "-.035em", textTransform: "uppercase" }}>
            SÉLECTION DE <span style={{ fontFamily: F.italic, fontStyle: "italic", color: F.accent, fontWeight: 400, textTransform: "none" }}>travaux</span>.
          </h2>
        </div>
        <div style={{ fontFamily: F.sans, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: F.muted }}>05 OUTPUT</div>
      </div>
      <div style={{
        flex: 1, position: "relative",
        background: F.accent, color: F.bg,
        padding: 32, display: "flex", flexDirection: "column", justifyContent: "space-between",
        overflow: "hidden",
      }}>
        {/* Geometry */}
        <div style={{
          position: "absolute", right: -60, top: -60, width: 220, height: 220,
          background: F.bg,
        }}/>
        <div style={{
          position: "absolute", right: 60, top: 60, width: 100, height: 100,
          border: `3px solid ${F.bg}`,
        }}/>
        <div style={{ position: "relative", display: "flex", justifyContent: "space-between", fontFamily: F.sans, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", fontWeight: 600 }}>
          <span>№ 001 / 005</span>
          <span style={{ background: F.bg, color: F.accent, padding: "3px 10px" }}>CAMPAGNE 360°</span>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ fontFamily: F.sans, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", fontWeight: 600, marginBottom: 12 }}>SCHÄR · 2023</div>
          <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 64, lineHeight: .95, letterSpacing: "-.035em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 18 }}>
            <span>CAMPAGNE DE <span style={{ fontFamily: F.italic, fontStyle: "italic", color: F.bg, textTransform: "none", fontWeight: 400 }}>Noël</span> SCHÄR</span>
            <span style={{ display: "inline-block", width: 52, height: 52, background: F.bg, color: F.accent, textAlign: "center", lineHeight: "52px", fontSize: 22, fontFamily: F.sans, flexShrink: 0, fontWeight: 600 }}>↗</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   DIRECTION G — "CAHIER"
   Personnel, écrit. Crème, marker jaune, encre, annotation manuscrite.
   Caveat handwritten + Cormorant Garamond italique.
   ════════════════════════════════════════════════════════════ */
const G = {
  bg: "#f8f3e6",
  ink: "#2a1f17",
  muted: "rgba(42,31,23,.55)",
  line: "rgba(42,31,23,.18)",
  marker: "#ffd966",  // surligneur jaune
  blueInk: "#1e3a8a", // stylo bleu
  display: "'Cormorant Garamond', serif",
  sans: "'Geist', system-ui, sans-serif",
  hand: "'Caveat', cursive",
};

function HeroCahier() {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: G.bg, color: G.ink,
      fontFamily: G.sans,
      padding: "32px 56px", boxSizing: "border-box",
      display: "flex", flexDirection: "column",
      position: "relative",
      backgroundImage: `repeating-linear-gradient(0deg, transparent 0, transparent 28px, ${G.line} 28px, ${G.line} 29px)`,
    }}>
      {/* Marge gauche style cahier */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 32, borderRight: `1px solid ${G.marker}`, opacity: .8 }}/>
      {/* Nav */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 16, position: "relative", zIndex: 2 }}>
        <div style={{ fontFamily: G.hand, fontSize: 28, fontWeight: 600, color: G.blueInk, transform: "rotate(-1deg)" }}>
          Jacques Micholier
        </div>
        <div style={{ display: "flex", gap: 24, fontFamily: G.hand, fontSize: 22, color: G.ink }}>
          <span style={{ borderBottom: `2px wavy ${G.marker}`, paddingBottom: 1 }}>travaux</span>
          <span style={{ color: G.muted }}>à propos</span>
          <span style={{ color: G.muted }}>contact</span>
        </div>
        <div style={{ fontFamily: G.hand, fontSize: 18, color: G.blueInk, display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: G.blueInk }}/>
          disponible Q4 2026
        </div>
      </div>
      {/* Eyebrow annotation */}
      <div style={{ marginTop: 28, position: "relative", zIndex: 2, fontFamily: G.hand, fontSize: 18, color: G.blueInk, display: "flex", alignItems: "baseline", gap: 12 }}>
        <span style={{ transform: "rotate(-2deg)", display: "inline-block" }}>↳ portfolio · 2018 → 2026</span>
        <span style={{ fontFamily: G.sans, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: G.muted, marginLeft: 12 }}>n° 001 / 005</span>
      </div>
      {/* Title — serif classique + mots surlignés + annotation manuscrite */}
      <h1 style={{
        margin: "12px 0 0", position: "relative", zIndex: 2,
        fontFamily: G.display, fontWeight: 400,
        fontSize: 142, lineHeight: .94, letterSpacing: "-.015em",
      }}>
        Brand &amp;<br/>
        <span style={{ background: `linear-gradient(transparent 50%, ${G.marker} 50%, ${G.marker} 92%, transparent 92%)`, paddingRight: ".08em", fontStyle: "italic" }}>Marketing</span><br/>
        <span style={{ background: `linear-gradient(transparent 50%, ${G.marker} 50%, ${G.marker} 92%, transparent 92%)`, paddingRight: ".08em", fontStyle: "italic" }}>Manager.</span>
        <span style={{ fontFamily: G.hand, fontSize: ".26em", color: G.blueInk, marginLeft: 18, verticalAlign: "0.55em", transform: "rotate(-2deg)", display: "inline-block" }}>← c'est moi</span><br/>
        des marques qui <span style={{ fontStyle: "italic", color: G.blueInk, textDecoration: `underline ${G.blueInk} wavy`, textUnderlineOffset: 8 }}>durent</span>.
      </h1>
      {/* Meta — comme une fiche bristol */}
      <div style={{ marginTop: "auto", paddingTop: 24, borderTop: `1px dashed ${G.ink}`, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, position: "relative", zIndex: 2 }}>
        {META.map((m, i) => (
          <div key={i}>
            <div style={{ fontFamily: G.hand, fontSize: 18, color: G.blueInk, marginBottom: 4 }}>{m.l} :</div>
            <div style={{ fontFamily: G.display, fontSize: 22, lineHeight: 1.1 }}>{m.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   DIRECTION H — "STADIUM"
   Scoreboard / sport pep. Condensé. Charbon + cream + orange flamme.
   Big Shoulders Display caps. Pour signaler le gaming sans le pastiche.
   ════════════════════════════════════════════════════════════ */
const H = {
  bg: "#0e1014",
  surface: "#161a22",
  ink: "#f0ede4",
  muted: "rgba(240,237,228,.55)",
  line: "rgba(240,237,228,.14)",
  accent: "#ff6b1c",
  accent2: "#1ae864",
  display: "'Big Shoulders Display', 'Impact', sans-serif",
  sans: "'JetBrains Mono', monospace",
  italic: "'Instrument Serif', serif",
};

function HeroStadium() {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: H.bg, color: H.ink,
      fontFamily: H.sans,
      padding: "28px 48px", boxSizing: "border-box",
      display: "flex", flexDirection: "column",
      position: "relative",
    }}>
      {/* Top scoreboard bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${H.line}`, paddingBottom: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ display: "inline-block", padding: "4px 10px", background: H.accent, color: H.bg, fontFamily: H.display, fontWeight: 800, fontSize: 16, letterSpacing: ".02em" }}>JM</span>
          <span style={{ fontFamily: H.display, fontWeight: 700, fontSize: 18, letterSpacing: ".06em", textTransform: "uppercase" }}>MICHOLIER · PORTFOLIO</span>
        </div>
        <div style={{ display: "flex", gap: 28, fontFamily: H.display, fontWeight: 600, fontSize: 14, letterSpacing: ".14em", textTransform: "uppercase" }}>
          <span style={{ color: H.accent }}>● TRAVAUX</span><span style={{ color: H.muted }}>À PROPOS</span><span style={{ color: H.muted }}>CONTACT</span>
        </div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: H.sans, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase" }}>
          <span style={{ width: 8, height: 8, background: H.accent2, borderRadius: "50%", boxShadow: `0 0 12px ${H.accent2}` }}/>
          LIVE · Q4'26
        </div>
      </div>
      {/* Score-line eyebrow */}
      <div style={{ marginTop: 32, display: "flex", alignItems: "baseline", gap: 20, fontFamily: H.sans, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase" }}>
        <span style={{ fontFamily: H.display, fontWeight: 800, fontSize: 22, color: H.accent, letterSpacing: ".02em" }}>2018→26</span>
        <span style={{ color: H.muted }}>· SEASON N°08</span>
        <span style={{ flex: 1, borderTop: `1px solid ${H.line}` }}/>
        <span style={{ color: H.accent2 }}>● ON THE FIELD</span>
      </div>
      {/* Title — condensé caps massif, scoreboard */}
      <h1 style={{
        margin: "12px 0 0",
        fontFamily: H.display, fontWeight: 900,
        fontSize: 178, lineHeight: .88, letterSpacing: "-.02em",
        textTransform: "uppercase",
      }}>
        BRAND<span style={{ color: H.accent }}> ·</span> <span style={{ fontFamily: H.italic, fontStyle: "italic", fontWeight: 400, textTransform: "none", color: H.accent, fontSize: ".92em", letterSpacing: "-.02em" }}>marketing</span><br/>
        <span style={{ fontFamily: H.italic, fontStyle: "italic", fontWeight: 400, textTransform: "none", color: H.accent, fontSize: ".92em", letterSpacing: "-.02em" }}>manager.</span> <span style={{ color: H.ink }}>JE</span><br/>
        <span style={{ color: H.ink }}>CONSTRUIS</span> <span style={{ color: H.accent }}>DES</span><br/>
        <span style={{ color: H.ink }}>MARQUES </span><span style={{ fontFamily: H.italic, fontStyle: "italic", fontWeight: 400, textTransform: "none", color: H.accent2, fontSize: ".92em" }}>qui durent</span>.
      </h1>
      {/* Meta — comme une feuille de match */}
      <div style={{ marginTop: "auto", paddingTop: 18, borderTop: `2px solid ${H.accent}`, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28 }}>
        {META.map((m, i) => (
          <div key={i} style={{ borderLeft: i ? `1px solid ${H.line}` : "none", paddingLeft: i ? 18 : 0 }}>
            <div style={{ fontFamily: H.sans, fontSize: 10, letterSpacing: ".18em", color: H.muted, textTransform: "uppercase", marginBottom: 6 }}>{m.l}</div>
            <div style={{ fontFamily: H.display, fontWeight: 800, fontSize: 22, textTransform: "uppercase", letterSpacing: "-.005em" }}>{m.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   DIRECTION I — "SPÉCIMEN"
   Type-specimen comme portfolio. Bodoni Moda XXL contrast.
   Crème + encre + bordeaux. Quasi pas d'UI, le type est le sujet.
   ════════════════════════════════════════════════════════════ */
const I = {
  bg: "#f6f1e6",
  ink: "#16100a",
  muted: "rgba(22,16,10,.5)",
  line: "rgba(22,16,10,.16)",
  accent: "#7d1a2e",
  display: "'Bodoni Moda', 'Didot', serif",
  sans: "'Geist', system-ui, sans-serif",
};

function HeroSpecimen() {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: I.bg, color: I.ink,
      fontFamily: I.sans,
      padding: "28px 56px", boxSizing: "border-box",
      display: "flex", flexDirection: "column",
      position: "relative",
    }}>
      {/* Nav — minimaliste, presque rien */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 12, borderBottom: `1px solid ${I.line}` }}>
        <div style={{ fontFamily: I.display, fontWeight: 500, fontSize: 16, letterSpacing: ".02em" }}>
          J·M
        </div>
        <div style={{ display: "flex", gap: 28, fontFamily: I.sans, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", fontWeight: 500 }}>
          <span style={{ borderBottom: `1px solid ${I.accent}` }}>Travaux</span>
          <span style={{ color: I.muted }}>À propos</span>
          <span style={{ color: I.muted }}>Contact</span>
        </div>
        <div style={{ fontFamily: I.sans, fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: I.accent }}>
          ◆ Q4 · 2026
        </div>
      </div>
      {/* Top metadata line */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 18, fontFamily: I.sans, fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: I.muted }}>
        <span>JACQUES MICHOLIER</span>
        <span>BRAND &amp; MARKETING MANAGER</span>
        <span>SAINT-ÉTIENNE · FR</span>
        <span>SPÉCIMEN N° 001</span>
      </div>
      {/* Specimen showcase — gros caractère + composition */}
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 2fr", marginTop: 24, gap: 32, alignItems: "stretch", borderTop: `2px solid ${I.ink}`, borderBottom: `2px solid ${I.ink}`, paddingTop: 24, paddingBottom: 24 }}>
        {/* Glyph géant */}
        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", borderRight: `1px solid ${I.line}` }}>
          <div style={{ fontFamily: I.display, fontWeight: 800, fontStyle: "italic", fontSize: 480, lineHeight: .82, color: I.accent, letterSpacing: "-.04em" }}>
            M
          </div>
          <div style={{ position: "absolute", top: 8, left: 8, fontFamily: I.sans, fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: I.muted }}>
            ↳ M · 800 ITALIC
          </div>
          <div style={{ position: "absolute", bottom: 8, right: 8, fontFamily: I.sans, fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: I.muted }}>
            BODONI MODA · 480PX
          </div>
        </div>
        {/* Title — varié, comme spécimen */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ fontFamily: I.display, fontWeight: 400, fontSize: 96, lineHeight: .92, letterSpacing: "-.015em" }}>
            Brand &amp;
          </div>
          <div style={{ fontFamily: I.display, fontWeight: 800, fontStyle: "italic", fontSize: 92, lineHeight: .92, letterSpacing: "-.025em", color: I.accent }}>
            Marketing
          </div>
          <div style={{ fontFamily: I.display, fontWeight: 600, fontSize: 86, lineHeight: .92, letterSpacing: "-.02em" }}>
            <span style={{ fontStyle: "italic", color: I.accent }}>Manager.</span>
          </div>
          <div style={{ fontFamily: I.sans, fontSize: 14, color: I.muted, lineHeight: 1.5, maxWidth: 540 }}>
            Construire des marques qui <span style={{ fontFamily: I.display, fontStyle: "italic", color: I.accent, fontSize: 18 }}>durent</span>. Au croisement du brand, du produit et du commercial.
          </div>
        </div>
      </div>
      {/* Bottom info line */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginTop: 16 }}>
        {META.map((m, i) => (
          <div key={i}>
            <div style={{ fontFamily: I.sans, fontSize: 9, letterSpacing: ".2em", color: I.muted, textTransform: "uppercase", marginBottom: 4 }}>{m.l}</div>
            <div style={{ fontFamily: I.display, fontWeight: 500, fontSize: 20, lineHeight: 1.1 }}>{m.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   DIRECTION J — "ARENA" (inspirée Riot · Stink Studios)
   Custom geometric sans (Space Grotesk, proxy de Riot Sans) +
   palette secondaire saturée + splash brush + duo Core/Expressive.
   ════════════════════════════════════════════════════════════ */
const J = {
  white: "#f6f4ef",
  cream: "#f0e8d8",
  black: "#0a0a0c",
  red: "#d83036",
  purple: "#5b3aab",
  yellow: "#e8a838",
  mint: "#7ee0a7",
  navy: "#1a2540",
  sky: "#4ba0d6",
  ink: "#0a0a0c",
  muted: "rgba(10,10,12,.55)",
  mutedOnDark: "rgba(246,244,239,.55)",
  display: "'Space Grotesk', system-ui, sans-serif",
  sans: "'Space Grotesk', system-ui, sans-serif",
};

// Palettes "poster" — bg + splash + type/contre-type
const J_POSTERS = {
  red:    { bg: J.red,    splash: J.yellow, type: J.white, ink: J.black, name: "Rouge" },
  purple: { bg: J.purple, splash: J.yellow, type: J.white, ink: J.cream, name: "Violet royal" },
  cream:  { bg: J.cream,  splash: J.yellow, type: J.black, ink: J.red,   name: "Crème" },
  navy:   { bg: J.navy,   splash: J.red,    type: J.white, ink: J.sky,   name: "Bleu nuit" },
  mint:   { bg: "#3a4f3c", splash: J.mint,  type: J.cream, ink: J.mint,  name: "Vert champ" },
};

// Pattern hex utilisable en background (SVG inline)
const J_HEX_PATTERN = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 86.6' width='80' height='69.3'><polygon points='25,0 75,0 100,43.3 75,86.6 25,86.6 0,43.3' fill='none' stroke='%23d83036' stroke-width='1.4'/></svg>")`;
const J_GRID_PATTERN = `linear-gradient(${J.red}26 1px, transparent 1px), linear-gradient(90deg, ${J.red}26 1px, transparent 1px)`;

// Splash SVG — pinceau anguleux genre Riot
function Splash({ color, style = {}, rotate = 0 }) {
  return (
    <svg viewBox="0 0 240 280" style={{ ...style, transform: `rotate(${rotate}deg)` }} aria-hidden="true">
      <path
        d="M130,8 L186,18 L208,52 L194,92 L226,118 L218,170 L186,202 L210,242 L162,266 L106,254 L60,266 L34,224 L52,180 L18,148 L36,98 L18,56 L66,32 Z"
        fill={color}
      />
      <path
        d="M156,42 L168,60 L162,80 L178,98 L168,118 L182,138 L172,158 L154,172"
        fill="none" stroke={color} strokeWidth="6" strokeLinecap="round" opacity="0.85"
      />
    </svg>
  );
}

// Logo "mark" carré inspiré du fist Riot
function JMark({ size = 28, fg = "#fff", bg = "#0a0a0c" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" aria-hidden="true">
      <rect x="2" y="2" width="24" height="24" fill={bg}/>
      <path d="M7 14 L14 7 L21 14 L14 21 Z" fill={fg}/>
    </svg>
  );
}

/* Variante 1 — CORE : minimal, blanc, rouge sur un mot */
function HeroArenaCore() {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: J.white, color: J.ink,
      fontFamily: J.sans,
      padding: "32px 56px", boxSizing: "border-box",
      display: "flex", flexDirection: "column",
      position: "relative", overflow: "hidden",
    }}>
      {/* Pattern grid très subtil */}
      <div style={{ position: "absolute", inset: 0, opacity: .18, backgroundImage: J_GRID_PATTERN, backgroundSize: "44px 44px", pointerEvents: "none" }}/>

      {/* Nav */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 18, borderBottom: `2px solid ${J.ink}`, position: "relative", zIndex: 2 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* Fist mark : un petit logo géométrique */}
          <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
            <rect x="2" y="2" width="24" height="24" fill={J.ink}/>
            <path d="M7 14 L14 7 L21 14 L14 21 Z" fill={J.red}/>
          </svg>
          <span style={{ fontFamily: J.display, fontWeight: 700, fontSize: 18, letterSpacing: "-.01em", textTransform: "uppercase" }}>MICHOLIER / JM</span>
        </div>
        <div style={{ display: "flex", gap: 28, fontFamily: J.display, fontWeight: 600, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase" }}>
          <span style={{ borderBottom: `2px solid ${J.red}`, paddingBottom: 2 }}>Travaux</span>
          <span style={{ color: J.muted }}>À propos</span>
          <span style={{ color: J.muted }}>Contact</span>
        </div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 12px", background: J.red, color: J.white, fontFamily: J.display, fontWeight: 700, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase" }}>
          <span style={{ width: 7, height: 7, background: J.white, borderRadius: "50%" }}/>
          DISPO · Q4 / 2026
        </div>
      </div>

      {/* Eyebrow */}
      <div style={{ marginTop: 32, position: "relative", zIndex: 2, display: "flex", alignItems: "center", gap: 18 }}>
        <span style={{ fontFamily: J.display, fontWeight: 700, fontSize: 12, letterSpacing: ".18em", textTransform: "uppercase", color: J.red }}>◤ CORE</span>
        <span style={{ flex: 1, borderTop: `1px dashed ${J.muted}` }}/>
        <span style={{ fontFamily: J.display, fontWeight: 600, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: J.muted }}>FILE 001 / 005 — PORTFOLIO · S.08</span>
      </div>

      {/* Title : sans bold + un mot rouge "expressive" en outline rouge */}
      <h1 style={{
        margin: "20px 0 0", position: "relative", zIndex: 2,
        fontFamily: J.display, fontWeight: 700,
        fontSize: 168, lineHeight: .9, letterSpacing: "-.045em",
        textTransform: "uppercase",
      }}>
        BRAND<span style={{ color: J.red }}>·</span>MKT.<br/>
        <span style={{ color: J.red, WebkitTextStroke: `2px ${J.red}` }}>MANAGER</span><br/>
        <span style={{ fontFamily: J.display, fontWeight: 500, fontSize: ".48em", letterSpacing: "-.01em", textTransform: "uppercase" }}>JE CONSTRUIS DES MARQUES</span><br/>
        <span style={{ color: "transparent", WebkitTextStroke: `2.5px ${J.ink}`, letterSpacing: "-.045em" }}>QUI DURENT.</span>
      </h1>

      {/* Meta — feuille de scoreboard */}
      <div style={{ marginTop: "auto", paddingTop: 18, borderTop: `2px solid ${J.ink}`, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, position: "relative", zIndex: 2 }}>
        {META.map((m, i) => (
          <div key={i} style={{ borderLeft: i ? `1px solid ${J.muted}` : "none", paddingLeft: i ? 18 : 0 }}>
            <div style={{ fontFamily: J.display, fontWeight: 600, fontSize: 10, letterSpacing: ".22em", color: J.red, textTransform: "uppercase", marginBottom: 6 }}>// {m.l}</div>
            <div style={{ fontFamily: J.display, fontWeight: 700, fontSize: 18, textTransform: "uppercase", letterSpacing: "-.005em" }}>{m.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Variante 2 — EXPRESSIVE : noir, plate photo, pattern hex, character-forward */
function HeroArenaExpressive() {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: J.black, color: J.white,
      fontFamily: J.sans,
      boxSizing: "border-box",
      display: "grid",
      gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
      position: "relative", overflow: "hidden",
    }}>
      {/* Colonne gauche : type-led */}
      <div style={{ padding: "32px 48px", display: "flex", flexDirection: "column", position: "relative" }}>
        {/* Pattern overlay */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: J_HEX_PATTERN, backgroundSize: "80px 69.3px", opacity: .12, pointerEvents: "none" }}/>

        {/* Nav */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 18, borderBottom: `1px solid ${J.mutedOnDark}`, position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <JMark size={26} fg={J.black} bg={J.red} />
            <span style={{ fontFamily: J.display, fontWeight: 700, fontSize: 17, letterSpacing: "-.01em", textTransform: "uppercase" }}>MICHOLIER · JM</span>
          </div>
          <div style={{ fontFamily: J.display, fontWeight: 700, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: J.red }}>◤ EXPRESSIVE MODE</div>
        </div>

        {/* Eyebrow */}
        <div style={{ marginTop: 30, position: "relative", zIndex: 2, fontFamily: J.display, fontWeight: 600, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: J.mutedOnDark }}>
          PLAYER PROFILE — RANK : BRAND MGR · S.08
        </div>

        {/* Title */}
        <h1 style={{
          margin: "12px 0 0", position: "relative", zIndex: 2,
          fontFamily: J.display, fontWeight: 700,
          fontSize: 124, lineHeight: .88, letterSpacing: "-.045em",
          textTransform: "uppercase",
        }}>
          BRAND <span style={{ color: J.red }}>&amp;</span><br/>
          MARKET-<br/>
          <span style={{ color: J.red }}>ING MGR.</span><br/>
          <span style={{ fontFamily: J.display, fontWeight: 500, fontSize: ".42em", letterSpacing: "-.01em", color: J.white }}>JE CONSTRUIS DES MARQUES </span>
          <span style={{ fontFamily: J.display, fontWeight: 700, fontSize: ".42em", letterSpacing: "-.01em", color: J.red, background: `${J.red}1f`, padding: "0 .15em" }}>QUI DURENT.</span>
        </h1>

        {/* Meta with red bullets */}
        <div style={{ marginTop: "auto", paddingTop: 16, borderTop: `1px solid ${J.mutedOnDark}`, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px 24px", position: "relative", zIndex: 2 }}>
          {META.map((m, i) => (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "baseline" }}>
              <span style={{ color: J.red, fontFamily: J.display, fontWeight: 700, fontSize: 11 }}>▮</span>
              <span style={{ fontFamily: J.display, fontWeight: 600, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: J.mutedOnDark }}>{m.l}</span>
              <span style={{ flex: 1, borderTop: `1px dotted ${J.mutedOnDark}`, opacity: .5, alignSelf: "center" }}/>
              <span style={{ fontFamily: J.display, fontWeight: 700, fontSize: 13, letterSpacing: "-.005em", textTransform: "uppercase" }}>{m.v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Colonne droite : splash + character placeholder */}
      <div style={{ position: "relative", overflow: "hidden", background: J.purple }}>
        {/* Splash yellow décoratif */}
        <Splash color={J.yellow} style={{ position: "absolute", top: "10%", left: "-20%", width: "120%", height: "80%", opacity: .92 }} rotate={-18} />
        {/* Splash secondaire mint */}
        <Splash color={J.mint} style={{ position: "absolute", bottom: "-15%", right: "-25%", width: "80%", height: "60%", opacity: .55 }} rotate={140} />
        {/* JM en outline géant */}
        <div style={{
          position: "absolute", inset: 0,
          display: "grid", placeItems: "center",
          fontFamily: J.display, fontWeight: 800,
          fontSize: 360, color: "transparent", WebkitTextStroke: `4px ${J.cream}`,
          letterSpacing: "-.07em",
        }}>
          JM
        </div>
        {/* Top-right tag */}
        <div style={{ position: "absolute", top: 24, right: 24, fontFamily: J.display, fontWeight: 700, fontSize: 10, letterSpacing: ".22em", textTransform: "uppercase", color: J.cream, opacity: .9 }}>
          PORTRAIT · S.08 / SHOT 001
        </div>
        {/* Bottom ribbon */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          background: J.red, color: J.white,
          padding: "14px 24px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          fontFamily: J.display, fontWeight: 700, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase",
        }}>
          <span>● DISPONIBLE · Q4 / 2026</span>
          <span>SAINT-ÉTIENNE / FR ↗</span>
        </div>
        {/* Vertical caps label */}
        <div style={{
          position: "absolute", top: 24, left: 24,
          writingMode: "vertical-rl", transform: "rotate(180deg)",
          fontFamily: J.display, fontWeight: 700, fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase", color: J.cream,
        }}>
          // PLAYER 001 · BRAND OPERATOR
        </div>
      </div>
    </div>
  );
}

/* ── Poster Card : reprend la grammaire "SLAY WITH STYLE" pour un projet ── */
function PosterCard({ palette, topWord, bottomWord, num, client, year, chip, glyph }) {
  const p = palette;
  return (
    <div style={{
      position: "relative",
      background: p.bg, color: p.type,
      fontFamily: J.sans,
      width: "100%", height: "100%",
      overflow: "hidden",
      display: "flex", flexDirection: "column",
      padding: 22, boxSizing: "border-box",
    }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", position: "relative", zIndex: 3 }}>
        <JMark size={22} fg={p.bg} bg={p.type} />
        <span style={{ fontFamily: J.display, fontWeight: 700, fontSize: 9, letterSpacing: ".22em", textTransform: "uppercase", background: p.type, color: p.bg, padding: "3px 8px" }}>{chip}</span>
      </div>
      {/* TOP huge word */}
      <h3 style={{ margin: "10px 0 0", fontFamily: J.display, fontWeight: 700, fontSize: 56, lineHeight: .88, letterSpacing: "-.04em", textTransform: "uppercase", position: "relative", zIndex: 3 }}>
        {topWord}
      </h3>
      {/* Splash + center glyph */}
      <div style={{ position: "absolute", inset: "30% 0 30% 0", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1, pointerEvents: "none" }}>
        <div style={{ position: "absolute", width: 320, height: 380 }}>
          <Splash color={p.splash} style={{ width: "100%", height: "100%", opacity: .95 }} rotate={-12} />
        </div>
        <div style={{ fontFamily: J.display, fontWeight: 800, fontSize: 180, color: p.ink, lineHeight: .8, position: "relative", letterSpacing: "-.04em", textShadow: `4px 4px 0 ${p.type}33` }}>
          {glyph || num}
        </div>
      </div>
      {/* BOTTOM huge word + meta */}
      <div style={{ marginTop: "auto", position: "relative", zIndex: 3 }}>
        <h3 style={{ margin: 0, fontFamily: J.display, fontWeight: 700, fontSize: 56, lineHeight: .88, letterSpacing: "-.04em", textTransform: "uppercase" }}>
          {bottomWord}
        </h3>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10, fontFamily: J.display, fontWeight: 600, fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase", opacity: .92 }}>
          <span>{client} · {year}</span>
          <span style={{ color: p.ink, fontWeight: 700 }}>№ {num}/05 ↗</span>
        </div>
      </div>
    </div>
  );
}

/* ── Roster : 5 projets en poster-cards, palette différente par projet ── */
function ArenaRoster() {
  const roster = [
    { topWord: "CAMPAGNE", bottomWord: "DE NOËL", num: "01", client: "SCHÄR", year: "2023", chip: "360°",       palette: J_POSTERS.red,    glyph: "01" },
    { topWord: "LANCE-",   bottomWord: "MENTS",   num: "02", client: "SCHÄR", year: "2019→24", chip: "GTM",      palette: J_POSTERS.cream,  glyph: "02" },
    { topWord: "REFONTE",  bottomWord: "LUDINNOV",num: "03", client: "LUDINNOV", year: "2024→", chip: "BRANDING", palette: J_POSTERS.purple, glyph: "03" },
    { topWord: "BRAND",    bottomWord: "CAMPAIGNS",num:"04", client: "SCHÄR", year: "2021→23", chip: "BRAND",    palette: J_POSTERS.navy,   glyph: "04" },
    { topWord: "TRADE",    bottomWord: "MARKETING",num:"05", client: "SCHÄR", year: "2019→24", chip: "RETAIL",   palette: J_POSTERS.mint,   glyph: "05" },
  ];
  return (
    <div style={{
      width: "100%", height: "100%",
      background: J.black, color: J.cream,
      fontFamily: J.sans,
      padding: "28px 36px", boxSizing: "border-box",
      display: "flex", flexDirection: "column", gap: 20,
    }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <div style={{ fontFamily: J.display, fontWeight: 700, fontSize: 11, letterSpacing: ".22em", color: J.red, textTransform: "uppercase", marginBottom: 8 }}>// ROSTER — TRAVAUX SÉLECTIONNÉS</div>
          <h2 style={{ margin: 0, fontFamily: J.display, fontWeight: 700, fontSize: 64, lineHeight: .9, letterSpacing: "-.04em", textTransform: "uppercase" }}>
            FIVE <span style={{ color: J.red }}>POSTERS,</span> ONE <span style={{ color: J.yellow }}>OPERATOR.</span>
          </h2>
        </div>
        <div style={{ fontFamily: J.display, fontWeight: 700, fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase", color: J.mutedOnDark }}>S.08 — 2018→26</div>
      </div>
      {/* Roster strip */}
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 14 }}>
        {roster.map((r, i) => (
          <PosterCard key={i} {...r} />
        ))}
      </div>
      {/* Footer caption */}
      <div style={{ display: "flex", justifyContent: "space-between", fontFamily: J.display, fontWeight: 600, fontSize: 10, letterSpacing: ".22em", textTransform: "uppercase", color: J.mutedOnDark }}>
        <span>★ TOOLKIT FLEX · UNE PALETTE PAR PROJET, UN SYSTÈME COMMUN</span>
        <span>RIOTGAMES.COM/MICHOLIER</span>
      </div>
    </div>
  );
}

/* ── Featured poster XL — un projet en poster pleine surface ── */
function ArenaFeatured({ palette = J_POSTERS.red, topWord = "CAMPAGNE", bottomWord = "DE NOËL", num = "01", client = "SCHÄR", year = "2023", chip = "CAMPAGNE 360°", glyph = "01" }) {
  const p = palette;
  return (
    <div style={{
      position: "relative",
      background: p.bg, color: p.type,
      fontFamily: J.sans,
      width: "100%", height: "100%",
      overflow: "hidden",
      display: "flex", flexDirection: "column",
      padding: "32px 48px", boxSizing: "border-box",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", position: "relative", zIndex: 3 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <JMark size={28} fg={p.bg} bg={p.type} />
          <span style={{ fontFamily: J.display, fontWeight: 700, fontSize: 14, letterSpacing: "-.01em", textTransform: "uppercase" }}>MICHOLIER / PORTFOLIO</span>
        </div>
        <span style={{ fontFamily: J.display, fontWeight: 700, fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase", background: p.type, color: p.bg, padding: "5px 12px" }}>{chip}</span>
      </div>
      <h3 style={{ margin: "16px 0 0", fontFamily: J.display, fontWeight: 700, fontSize: 168, lineHeight: .88, letterSpacing: "-.045em", textTransform: "uppercase", position: "relative", zIndex: 3 }}>
        {topWord}
      </h3>
      {/* Splash + huge glyph */}
      <div style={{ position: "absolute", inset: "22% 0 22% 0", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1, pointerEvents: "none" }}>
        <div style={{ position: "absolute", width: 720, height: 760 }}>
          <Splash color={p.splash} style={{ width: "100%", height: "100%", opacity: .9 }} rotate={-12} />
        </div>
        <div style={{ fontFamily: J.display, fontWeight: 800, fontSize: 520, color: p.ink, lineHeight: .8, position: "relative", letterSpacing: "-.04em" }}>
          {glyph}
        </div>
      </div>
      <div style={{ marginTop: "auto", position: "relative", zIndex: 3 }}>
        <h3 style={{ margin: 0, fontFamily: J.display, fontWeight: 700, fontSize: 168, lineHeight: .88, letterSpacing: "-.045em", textTransform: "uppercase" }}>
          {bottomWord}
        </h3>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 14, fontFamily: J.display, fontWeight: 700, fontSize: 12, letterSpacing: ".22em", textTransform: "uppercase" }}>
          <span>{client} · {year} · CAMPAIGN PATCH 23.4</span>
          <span style={{ color: p.ink }}>VOIR LE CASE STUDY ↗</span>
        </div>
      </div>
    </div>
  );
}

function CardArena() {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: J.white, color: J.ink,
      fontFamily: J.sans,
      padding: "32px 48px", boxSizing: "border-box",
      display: "flex", flexDirection: "column", gap: 24,
      position: "relative", overflow: "hidden",
    }}>
      {/* Subtle hex pattern */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: J_HEX_PATTERN, backgroundSize: "80px 69.3px", opacity: .08, pointerEvents: "none" }}/>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderBottom: `2px solid ${J.ink}`, paddingBottom: 16, position: "relative", zIndex: 2 }}>
        <div>
          <div style={{ fontFamily: J.display, fontWeight: 700, fontSize: 11, letterSpacing: ".22em", color: J.red, textTransform: "uppercase", marginBottom: 10 }}>// FILE 01 — TRAVAUX</div>
          <h2 style={{ margin: 0, fontFamily: J.display, fontWeight: 700, fontSize: 82, lineHeight: .9, letterSpacing: "-.04em", textTransform: "uppercase" }}>
            SÉLECTION DE<br/>
            <span style={{ color: J.red }}>TRAVAUX.</span>
          </h2>
        </div>
        <div style={{ fontFamily: J.display, fontWeight: 700, fontSize: 12, letterSpacing: ".22em", textTransform: "uppercase", color: J.muted }}>5 ROSTER ENTRIES</div>
      </div>
      <div style={{
        flex: 1, position: "relative",
        background: J.black, color: J.white,
        padding: 28, display: "flex", flexDirection: "column", justifyContent: "space-between",
        overflow: "hidden",
        border: `1px solid ${J.ink}`,
      }}>
        {/* Pattern */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: J_HEX_PATTERN, backgroundSize: "80px 69.3px", opacity: .22, pointerEvents: "none" }}/>
        {/* Red diagonal */}
        <div style={{ position: "absolute", right: -40, top: -40, width: 0, height: 0,
          borderTop: `260px solid ${J.red}`, borderLeft: "260px solid transparent" }}/>
        <div style={{ position: "absolute", right: 28, top: 28, fontFamily: J.display, fontWeight: 700, fontSize: 18, letterSpacing: ".12em", color: J.white }}>↗</div>

        <div style={{ position: "relative", display: "flex", justifyContent: "space-between", fontFamily: J.display, fontWeight: 700, fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase" }}>
          <span style={{ color: J.red }}>№ 001 / 005</span>
          <span style={{ border: `1px solid ${J.red}`, color: J.red, padding: "4px 10px" }}>CAMPAGNE 360°</span>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ fontFamily: J.display, fontSize: 11, letterSpacing: ".22em", color: J.mutedOnDark, textTransform: "uppercase", marginBottom: 10, fontWeight: 600 }}>SCHÄR · 2023 · CHRISTMAS PATCH</div>
          <div style={{ fontFamily: J.display, fontWeight: 700, fontSize: 62, lineHeight: .92, letterSpacing: "-.035em", textTransform: "uppercase" }}>
            CAMPAGNE DE<br/>
            <span style={{ color: J.red }}>NOËL</span> SCHÄR.
          </div>
        </div>
      </div>
    </div>
  );
}
/* ════════════════════════════════════════════════════════════
   DIRECTION K — "RIOT"
   D'après la charte graphique RIOT (PDF fourni).
   • Couleurs : Riot Red · Riot Gold · Riot Violet · Off-white · Ink black
   • Typo    : Impact (caps XL, tracking serré) + Inter (Black → Regular)
   • Signatures : cartes diagonales · éclairs/splashes · badges NEW/PRO
                  · blocs & boutons Primary/Secondary/Ghost
   ════════════════════════════════════════════════════════════ */
const K = {
  red:    "#D72E3E",
  gold:   "#F4B324",
  violet: "#6B4FBB",
  paper:  "#F5EFE0",
  ink:    "#0F0F12",
  muted:  "rgba(15,15,18,.55)",
  line:   "rgba(15,15,18,.14)",
  display: "'Impact', 'Anton', 'Big Shoulders Display', 'Haettenschweiler', sans-serif",
  sans:    "'Inter', system-ui, sans-serif",
};

/* ── Petits primitives charte ─────────────────────────────── */
// Éclair / bolt SVG — élément signature de la charte
function KBolt({ color = K.gold, size = 120, rotate = 0, style = {} }) {
  return (
    <svg viewBox="0 0 60 100" width={size} height={size * 100 / 60}
      style={{ display: "block", transform: `rotate(${rotate}deg)`, ...style }}>
      <path d="M34 2 L4 56 L26 56 L20 98 L56 38 L34 38 Z" fill={color} stroke={K.ink} strokeWidth="2.5" strokeLinejoin="miter"/>
    </svg>
  );
}
// Splash organique — second motif charte
function KSplash({ color = K.gold, size = 220, style = {} }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} style={{ display: "block", ...style }}>
      <path
        d="M100 8 L122 30 L150 18 L154 50 L188 56 L168 82 L196 108 L160 118 L172 154 L138 146 L130 188 L102 162 L74 192 L66 154 L30 162 L42 124 L8 110 L36 84 L14 56 L48 50 L46 16 L78 32 Z"
        fill={color}
      />
    </svg>
  );
}
// Badge plein (NEW / PRO / BETA / TIP)
function KBadge({ kind = "new", style = {} }) {
  const colors = {
    new:  { bg: K.red,    fg: K.paper, label: "NEW"  },
    pro:  { bg: K.violet, fg: K.paper, label: "PRO"  },
    beta: { bg: K.ink,    fg: K.gold,  label: "BETA" },
    tip:  { bg: K.gold,   fg: K.ink,   label: "TIP"  },
  };
  const c = colors[kind] || colors.new;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center",
      background: c.bg, color: c.fg,
      fontFamily: K.sans, fontWeight: 900, fontSize: 11,
      letterSpacing: ".08em", padding: "4px 9px 3px",
      border: `1.5px solid ${K.ink}`,
      boxShadow: `3px 3px 0 ${K.ink}`,
      ...style,
    }}>{c.label}</span>
  );
}
// Wordmark JM
function KMark({ size = 36 }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 10,
    }}>
      <span style={{
        display: "inline-grid", placeItems: "center",
        width: size, height: size,
        background: K.red, color: K.paper,
        border: `2px solid ${K.ink}`, boxShadow: `3px 3px 0 ${K.ink}`,
        fontFamily: K.display, fontSize: size * 0.55, lineHeight: 1,
        letterSpacing: "-.04em",
      }}>JM</span>
      <span style={{ fontFamily: K.sans, fontWeight: 800, fontSize: 16, letterSpacing: "-.01em", color: K.ink }}>
        MICHOLIER<span style={{ color: K.red }}>.</span>
      </span>
    </span>
  );
}

function HeroRiot() {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: K.paper, color: K.ink,
      fontFamily: K.sans,
      padding: "28px 44px", boxSizing: "border-box",
      display: "flex", flexDirection: "column",
      position: "relative", overflow: "hidden",
    }}>
      {/* Grille 12 col, repère discret */}
      <div aria-hidden style={{
        position: "absolute", inset: "0 44px", pointerEvents: "none", opacity: .08,
        backgroundImage: `linear-gradient(90deg, ${K.ink} 1px, transparent 1px)`,
        backgroundSize: "calc((100% - 44px*2) / 12) 100%",
      }}/>

      {/* Éclairs décoratifs */}
      <div style={{ position: "absolute", right: -20, top: 180, zIndex: 1, pointerEvents: "none" }}>
        <KBolt color={K.gold} size={140} rotate={18} />
      </div>
      <div style={{ position: "absolute", left: 540, top: 60, zIndex: 1, pointerEvents: "none" }}>
        <KSplash color={K.violet} size={140} style={{ opacity: .85 }}/>
      </div>

      {/* Nav */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        borderBottom: `2px solid ${K.ink}`, paddingBottom: 16,
        position: "relative", zIndex: 3,
      }}>
        <KMark size={36}/>
        <div style={{ display: "flex", gap: 4, fontFamily: K.sans, fontWeight: 700, fontSize: 13, letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ padding: "8px 14px", background: K.ink, color: K.paper, border: `2px solid ${K.ink}` }}>Travaux</span>
          <span style={{ padding: "8px 14px", color: K.ink, border: `2px solid transparent` }}>À&nbsp;propos</span>
          <span style={{ padding: "8px 14px", color: K.ink, border: `2px solid transparent` }}>Contact</span>
        </div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: K.red, color: K.paper,
            fontFamily: K.sans, fontWeight: 900, fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase",
            padding: "7px 12px",
            border: `2px solid ${K.ink}`, boxShadow: `3px 3px 0 ${K.ink}`,
          }}>
            <span style={{ width: 8, height: 8, background: K.gold, border: `1.5px solid ${K.ink}` }}/>
            DISPO · Q4&nbsp;2026
          </span>
        </div>
      </div>

      {/* Eyebrow line — badges + folio */}
      <div style={{
        marginTop: 32, display: "flex", alignItems: "center", gap: 14,
        position: "relative", zIndex: 3,
      }}>
        <KBadge kind="new"/>
        <KBadge kind="pro"/>
        <span style={{ fontFamily: K.sans, fontWeight: 700, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: K.ink }}>
          PORTFOLIO &nbsp;·&nbsp; 2018 → 2026 &nbsp;·&nbsp; LOG_001
        </span>
        <span style={{ flex: 1, borderTop: `2px dashed ${K.ink}`, opacity: .35 }}/>
        <span style={{ fontFamily: K.sans, fontWeight: 800, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: K.violet }}>
          ⚡ SAINT-ÉTIENNE / FR
        </span>
      </div>

      {/* Title — Impact caps + tracking serré.
          MARKETING en RIOT RED, MANAGER en outline violet pour rappeler les 3 couleurs charte. */}
      <h1 style={{
        margin: "22px 0 0",
        fontFamily: K.display, fontWeight: 400,
        fontSize: 196, lineHeight: .86, letterSpacing: "-.022em",
        textTransform: "uppercase",
        position: "relative", zIndex: 3,
      }}>
        BRAND&nbsp;<span style={{ color: K.gold, WebkitTextStroke: `2px ${K.ink}`, textShadow: `5px 5px 0 ${K.ink}` }}>&amp;</span><br/>
        <span style={{ color: K.red, textShadow: `6px 6px 0 ${K.ink}` }}>MARKETING</span><br/>
        <span style={{
          color: "transparent",
          WebkitTextStroke: `2.5px ${K.violet}`,
        }}>MANAGER.</span>
      </h1>

      {/* Sub-line en Inter Black, "structurer" le titre */}
      <div style={{
        marginTop: 16, position: "relative", zIndex: 3,
        display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap",
      }}>
        <span style={{ fontFamily: K.sans, fontWeight: 900, fontSize: 24, letterSpacing: "-.01em", color: K.ink }}>
          Je construis des marques qui durent.
        </span>
        {/* Primary button */}
        <a style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          background: K.red, color: K.paper,
          fontFamily: K.sans, fontWeight: 900, fontSize: 13, letterSpacing: ".08em", textTransform: "uppercase",
          padding: "12px 18px",
          border: `2px solid ${K.ink}`, boxShadow: `4px 4px 0 ${K.ink}`,
        }}>
          Voir les travaux <span style={{ fontSize: 16 }}>↗</span>
        </a>
        {/* Ghost button */}
        <a style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          background: "transparent", color: K.ink,
          fontFamily: K.sans, fontWeight: 800, fontSize: 13, letterSpacing: ".08em", textTransform: "uppercase",
          padding: "12px 18px",
          border: `2px dashed ${K.ink}`,
        }}>
          Lire la bio
        </a>
      </div>

      {/* Meta bottom — 4 cellules, top border épais, badges TIP/BETA en accent */}
      <div style={{
        marginTop: "auto", paddingTop: 18,
        borderTop: `3px solid ${K.ink}`,
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20,
        position: "relative", zIndex: 3,
      }}>
        {META.map((m, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{
                fontFamily: K.sans, fontWeight: 900, fontSize: 10, letterSpacing: ".18em",
                color: K.ink, textTransform: "uppercase",
                background: i === 0 ? K.gold : i === 3 ? K.gold : "transparent",
                padding: i === 0 || i === 3 ? "2px 6px" : "0",
                border: i === 0 || i === 3 ? `1.5px solid ${K.ink}` : "none",
              }}>{("0" + (i + 1)).slice(-2)} · {m.l}</span>
            </div>
            <div style={{ fontFamily: K.sans, fontWeight: 800, fontSize: 18, letterSpacing: "-.005em", color: K.ink }}>{m.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Carte diagonale — composant signature de la charte ────── */
function KDiagonalCard({ variant = "hero", title, italicWord, num, client, year, chip, badge, big = false, accent }) {
  // Variants charte : HERO (red) · FEATURE (off-white) · SPOTLIGHT (violet) · NEUTRAL (ink)
  const variants = {
    hero:      { bg: K.red,    fg: K.paper, splash: K.gold,   numCol: K.gold,   chipBg: K.ink,    chipFg: K.gold,   accentTxt: K.gold },
    feature:   { bg: K.paper,  fg: K.ink,   splash: K.red,    numCol: K.violet, chipBg: K.ink,    chipFg: K.paper,  accentTxt: K.red },
    spotlight: { bg: K.violet, fg: K.paper, splash: K.gold,   numCol: K.gold,   chipBg: K.paper,  chipFg: K.ink,    accentTxt: K.gold },
    neutral:   { bg: K.ink,    fg: K.paper, splash: K.violet, numCol: K.red,    chipBg: K.gold,   chipFg: K.ink,    accentTxt: K.red },
  };
  const v = variants[variant] || variants.hero;
  return (
    <div style={{
      position: "relative", overflow: "hidden",
      background: v.bg, color: v.fg,
      // Coupe diagonale signature : coin bas-droit cisaillé
      clipPath: big
        ? "polygon(0 0, 100% 0, 100% 84%, 88% 100%, 0 100%)"
        : "polygon(0 0, 100% 0, 100% 78%, 84% 100%, 0 100%)",
      border: `2.5px solid ${K.ink}`,
      width: "100%", height: "100%",
      display: "flex", flexDirection: "column",
      padding: big ? "26px 28px 36px" : "20px 22px 28px",
      boxSizing: "border-box",
      boxShadow: `6px 6px 0 ${K.ink}`,
    }}>
      {/* Splash décoratif arrière-plan */}
      <KSplash color={v.splash} size={big ? 280 : 180}
        style={{ position: "absolute", right: big ? -50 : -40, top: big ? -70 : -50, opacity: .92, zIndex: 0 }} />
      {/* Numéro géant arrière */}
      <div style={{
        position: "absolute",
        right: big ? 24 : 16, bottom: big ? 42 : 36,
        fontFamily: K.display, fontWeight: 400,
        fontSize: big ? 280 : 180,
        lineHeight: .8, letterSpacing: "-.04em",
        color: v.numCol, opacity: .25,
        zIndex: 0, pointerEvents: "none",
      }}>{num}</div>

      {/* Top row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", position: "relative", zIndex: 2 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{
            fontFamily: K.sans, fontWeight: 900, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase",
            background: v.chipBg, color: v.chipFg,
            padding: "4px 9px", border: `1.5px solid ${K.ink}`,
          }}>№ {num} / 05</span>
          {badge && <KBadge kind={badge}/>}
        </div>
        <span style={{
          fontFamily: K.sans, fontWeight: 800, fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase",
          color: v.fg, opacity: .8,
        }}>{chip}</span>
      </div>

      {/* Title block — bas */}
      <div style={{ marginTop: "auto", position: "relative", zIndex: 2 }}>
        <div style={{
          fontFamily: K.sans, fontWeight: 700, fontSize: big ? 13 : 11,
          letterSpacing: ".14em", textTransform: "uppercase",
          opacity: .9, marginBottom: big ? 12 : 8,
        }}>{client} · {year}</div>
        <h3 style={{
          margin: 0,
          fontFamily: K.display, fontWeight: 400,
          fontSize: big ? 88 : 38,
          lineHeight: .88, letterSpacing: "-.022em",
          textTransform: "uppercase",
        }}>
          {italicWord ? (
            <>
              {title.split(italicWord)[0]}
              <span style={{ color: v.accentTxt, textShadow: `${big ? 4 : 2}px ${big ? 4 : 2}px 0 ${K.ink}` }}>{italicWord}</span>
              {title.split(italicWord)[1]}
            </>
          ) : title}
        </h3>
        <div style={{ marginTop: big ? 18 : 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{
            fontFamily: K.sans, fontWeight: 900, fontSize: big ? 12 : 10,
            letterSpacing: ".18em", textTransform: "uppercase",
            color: v.fg,
          }}>VOIR LE CASE STUDY</span>
          <span style={{
            display: "grid", placeItems: "center",
            width: big ? 56 : 38, height: big ? 56 : 38,
            background: v.fg, color: v.bg,
            border: `2px solid ${K.ink}`,
            fontFamily: K.display, fontSize: big ? 26 : 18,
          }}>↗</span>
        </div>
      </div>
    </div>
  );
}

function CardRiot() {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: K.paper, color: K.ink,
      fontFamily: K.sans,
      padding: "28px 44px 32px", boxSizing: "border-box",
      display: "flex", flexDirection: "column", gap: 22,
      position: "relative", overflow: "hidden",
    }}>
      {/* Bolt décoratif */}
      <KBolt color={K.gold} size={120} rotate={-22}
        style={{ position: "absolute", left: 380, top: 24, opacity: .9, zIndex: 1 }} />

      {/* Section header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderBottom: `3px solid ${K.ink}`, paddingBottom: 18, position: "relative", zIndex: 2 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <span style={{
              fontFamily: K.sans, fontWeight: 900, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase",
              background: K.ink, color: K.gold, padding: "4px 10px",
              border: `2px solid ${K.ink}`,
            }}>§ 01 — TRAVAUX</span>
            <KBadge kind="new"/>
            <KBadge kind="pro"/>
          </div>
          <h2 style={{
            margin: 0,
            fontFamily: K.display, fontWeight: 400,
            fontSize: 96, lineHeight: .9, letterSpacing: "-.022em",
            textTransform: "uppercase",
          }}>
            SÉLECTION DE&nbsp;<span style={{ color: K.red, textShadow: `4px 4px 0 ${K.ink}` }}>TRAVAUX.</span>
          </h2>
        </div>
        {/* Boutons charte : Primary / Secondary / Ghost */}
        <div style={{ display: "flex", gap: 8 }}>
          <a style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: K.red, color: K.paper,
            fontFamily: K.sans, fontWeight: 900, fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase",
            padding: "10px 14px",
            border: `2px solid ${K.ink}`, boxShadow: `3px 3px 0 ${K.ink}`,
          }}>Voir tout ↗</a>
          <a style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: K.paper, color: K.ink,
            fontFamily: K.sans, fontWeight: 900, fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase",
            padding: "10px 14px",
            border: `2px solid ${K.ink}`,
          }}>Filtrer</a>
          <a style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "transparent", color: K.ink,
            fontFamily: K.sans, fontWeight: 800, fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase",
            padding: "10px 14px",
            border: `2px dashed ${K.ink}`,
          }}>Grille</a>
        </div>
      </div>

      {/* Grille 12 col : grand HERO à gauche (8 col) + 2 petites empilées (4 col) */}
      <div style={{
        flex: 1, display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gridTemplateRows: "1fr 1fr",
        gap: 18,
        position: "relative", zIndex: 2,
      }}>
        <div style={{ gridColumn: "1 / 2", gridRow: "1 / 3" }}>
          <KDiagonalCard
            variant="hero" big
            title="CAMPAGNE DE NOËL SCHÄR"
            italicWord="NOËL"
            num="01" client="SCHÄR" year="2023"
            chip="CAMPAGNE 360°"
            badge="new"
          />
        </div>
        <div>
          <KDiagonalCard
            variant="spotlight"
            title="REFONTE LUDINNOV"
            italicWord="LUDINNOV"
            num="03" client="LUDINNOV" year="2024 →"
            chip="BRANDING"
            badge="pro"
          />
        </div>
        <div>
          <KDiagonalCard
            variant="neutral"
            title="LANCEMENTS PRODUITS"
            italicWord="PRODUITS"
            num="02" client="SCHÄR" year="2019 → 24"
            chip="GTM"
            badge="tip"
          />
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   DIRECTION L — "VOLTAGE"
   Deuxième lecture de la charte Riot. Mêmes tokens (R/G/V/off-white/ink).
   Parti pris radicalement différent du K :
   • Le BOLT devient architectural (split vertical 60/40, pas décoratif)
   • Violet dominant en mur de couleur (premium · magique selon la charte)
   • Type Impact en EMPILEMENT serré, alterne plein / outline / surligné
   • Splash en SCEAU autour d'un mot-clé
   • Aucune ombre offset (vs. K brutalist) — on reste typographique
   • Système de chiffres en colonne droite (RIOT scoreboard editorial)
   ════════════════════════════════════════════════════════════ */
const L = K; // partage les tokens charte

// Bolt en pleine hauteur qui sépare deux zones — vertical, massif
function LBoltDivider({ color = L.gold }) {
  return (
    <svg viewBox="0 0 120 600" width="100%" height="100%" preserveAspectRatio="none"
      style={{ display: "block" }}>
      <path
        d="M70 0 L0 280 L52 280 L40 600 L120 320 L66 320 L96 0 Z"
        fill={color} stroke={L.ink} strokeWidth="3" strokeLinejoin="miter"
      />
    </svg>
  );
}

// Sceau — splash + texte radial autour d'un mot
function LSeal({ word = "MARKETING", color = L.gold, size = 320 }) {
  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <KSplash color={color} size={size} style={{ position: "absolute", inset: 0 }}/>
      <div style={{
        position: "absolute", inset: 0,
        display: "grid", placeItems: "center",
        fontFamily: L.display, fontWeight: 400,
        fontSize: size * 0.18,
        letterSpacing: "-.025em",
        textTransform: "uppercase",
        color: L.ink,
        transform: "rotate(-6deg)",
      }}>{word}</div>
    </div>
  );
}

function HeroVoltage() {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: L.paper, color: L.ink,
      fontFamily: L.sans,
      display: "grid",
      gridTemplateColumns: "1fr 80px 480px",
      position: "relative", overflow: "hidden",
    }}>
      {/* ── COLONNE GAUCHE : type empilé ──────────────── */}
      <div style={{
        padding: "28px 36px 28px 44px",
        display: "flex", flexDirection: "column",
        position: "relative",
      }}>
        {/* Nav */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `2px solid ${L.ink}`, paddingBottom: 14 }}>
          <KMark size={32}/>
          <div style={{ display: "flex", gap: 4, fontFamily: L.sans, fontWeight: 800, fontSize: 12, letterSpacing: ".02em", textTransform: "uppercase" }}>
            <span style={{ padding: "7px 12px", background: L.ink, color: L.paper }}>Travaux</span>
            <span style={{ padding: "7px 12px" }}>À propos</span>
            <span style={{ padding: "7px 12px" }}>Contact</span>
          </div>
        </div>

        {/* Eyebrow */}
        <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 12 }}>
          <KBadge kind="new"/>
          <span style={{ fontFamily: L.sans, fontWeight: 800, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: L.ink }}>
            PORTFOLIO · ISSUE 001 · 2018→2026
          </span>
          <span style={{ flex: 1, borderTop: `1.5px solid ${L.ink}`, opacity: .25 }}/>
        </div>

        {/* TITLE — empilement avec mots alternés : plein / sceau-superposé / outline / surligné */}
        <h1 style={{
          margin: "18px 0 0",
          fontFamily: L.display, fontWeight: 400,
          fontSize: 168, lineHeight: .82, letterSpacing: "-.028em",
          textTransform: "uppercase",
          position: "relative",
          flex: 1,
        }}>
          <span style={{ display: "block", color: L.ink }}>BRAND</span>
          <span style={{ display: "block", color: L.ink, position: "relative" }}>
            <span style={{ position: "relative", zIndex: 2 }}>&amp;</span>
            <span style={{
              position: "absolute", left: 130, top: -22, zIndex: 1,
              fontFamily: L.sans, fontWeight: 900, fontSize: 16, letterSpacing: ".14em", textTransform: "uppercase",
              color: L.red,
            }}>// CHAPTER&nbsp;01</span>
          </span>
          <span style={{
            display: "block",
            color: "transparent",
            WebkitTextStroke: `2.5px ${L.red}`,
            fontStyle: "normal",
          }}>MARKETING</span>
          <span style={{
            display: "block",
            color: L.paper,
            background: L.ink,
            padding: "0 .04em",
            width: "fit-content",
          }}>MANAGER<span style={{ color: L.gold }}>.</span></span>
        </h1>

        {/* Sub-line + buttons */}
        <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{
            fontFamily: L.sans, fontWeight: 800, fontSize: 18, lineHeight: 1.35,
            letterSpacing: "-.005em", maxWidth: 520,
          }}>
            Je construis des marques qui <span style={{ background: L.gold, padding: "1px 6px", border: `1.5px solid ${L.ink}` }}>durent.</span>
            <span style={{ fontWeight: 400, color: L.muted, display: "block", marginTop: 4 }}>
              8 ans · Schär (FRB) · Ludinnov · Saint-Étienne / FR.
            </span>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <a style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: L.violet, color: L.paper,
              fontFamily: L.sans, fontWeight: 900, fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase",
              padding: "11px 16px",
              border: `2px solid ${L.ink}`,
            }}>Voir les travaux ↗</a>
            <a style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: L.paper, color: L.ink,
              fontFamily: L.sans, fontWeight: 900, fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase",
              padding: "11px 16px",
              border: `2px solid ${L.ink}`,
            }}>Contact</a>
          </div>
        </div>
      </div>

      {/* ── COLONNE CENTRE : bolt vertical architectural ──── */}
      <div style={{
        background: L.gold,
        borderLeft: `3px solid ${L.ink}`,
        borderRight: `3px solid ${L.ink}`,
        position: "relative",
        overflow: "hidden",
      }}>
        <LBoltDivider color={L.gold}/>
        {/* Marquee texte vertical */}
        <div style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          height: "100%",
          writingMode: "vertical-rl",
          fontFamily: L.sans, fontWeight: 900,
          fontSize: 14, letterSpacing: ".42em", textTransform: "uppercase",
          color: L.ink,
          display: "flex", alignItems: "center", gap: 24,
          padding: "32px 0",
        }}>
          ⚡ BUILD WITH IMPACT · BUILD WITH IMPACT · BUILD WITH IMPACT ⚡
        </div>
      </div>

      {/* ── COLONNE DROITE : mur violet, sceau, fiche meta ── */}
      <div style={{
        background: L.violet, color: L.paper,
        padding: "28px 32px",
        display: "flex", flexDirection: "column",
        position: "relative", overflow: "hidden",
      }}>
        {/* Sceau gold en haut */}
        <div style={{ position: "absolute", right: -60, top: -60, transform: "rotate(12deg)" }}>
          <LSeal word="PORTFOLIO" color={L.gold} size={260}/>
        </div>

        {/* Top status */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative", zIndex: 2 }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: L.red, color: L.paper,
            fontFamily: L.sans, fontWeight: 900, fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase",
            padding: "5px 10px",
            border: `2px solid ${L.ink}`,
          }}>
            <span style={{ width: 7, height: 7, background: L.gold, border: `1px solid ${L.ink}` }}/>
            DISPO Q4·26
          </span>
        </div>

        {/* Folio number géant */}
        <div style={{
          marginTop: 56, position: "relative", zIndex: 2,
          fontFamily: L.display, fontWeight: 400,
          fontSize: 240, lineHeight: .82, letterSpacing: "-.04em",
          color: L.paper,
        }}>
          N°<br/><span style={{ color: L.gold }}>001</span>
        </div>

        {/* Fiche meta — empilée, alignement rigide */}
        <div style={{
          marginTop: "auto", position: "relative", zIndex: 2,
          display: "flex", flexDirection: "column",
          borderTop: `2px solid ${L.paper}`,
        }}>
          {META.map((m, i) => (
            <div key={i} style={{
              display: "flex", justifyContent: "space-between", alignItems: "baseline",
              padding: "10px 0",
              borderBottom: i < META.length - 1 ? `1px solid rgba(245,239,224,.25)` : "none",
            }}>
              <span style={{
                fontFamily: L.sans, fontWeight: 900, fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase",
                color: L.gold,
              }}>{("0" + (i + 1)).slice(-2)} · {m.l}</span>
              <span style={{
                fontFamily: L.sans, fontWeight: 800, fontSize: 14, letterSpacing: "-.005em",
                color: L.paper, textAlign: "right",
              }}>{m.v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Tile signature (poster carré, splash + bolt + numéro) ── */
function LTile({ variant = "violet", num, client, year, topWord, bottomWord, chip, badge }) {
  const variants = {
    violet: { bg: L.violet, fg: L.paper, splash: L.gold, num: L.gold,   stamp: L.red },
    red:    { bg: L.red,    fg: L.paper, splash: L.gold, num: L.paper,  stamp: L.violet },
    gold:   { bg: L.gold,   fg: L.ink,   splash: L.red,  num: L.violet, stamp: L.ink },
    paper:  { bg: L.paper,  fg: L.ink,   splash: L.violet, num: L.red,  stamp: L.ink },
    ink:    { bg: L.ink,    fg: L.paper, splash: L.violet, num: L.gold, stamp: L.red },
  };
  const v = variants[variant] || variants.violet;
  return (
    <div style={{
      position: "relative", overflow: "hidden",
      background: v.bg, color: v.fg,
      border: `2.5px solid ${L.ink}`,
      width: "100%", height: "100%",
      display: "flex", flexDirection: "column",
      padding: "16px 18px 18px",
      boxSizing: "border-box",
    }}>
      {/* Splash arrière */}
      <KSplash color={v.splash} size={200}
        style={{ position: "absolute", right: -52, bottom: -52, opacity: .85, zIndex: 0 }}/>
      {/* Numéro géant en filigrane */}
      <div style={{
        position: "absolute", left: -8, bottom: -42, zIndex: 1, pointerEvents: "none",
        fontFamily: L.display, fontWeight: 400,
        fontSize: 220, lineHeight: .8, letterSpacing: "-.05em",
        color: v.num, opacity: .22,
      }}>{num}</div>

      {/* Top row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", position: "relative", zIndex: 3 }}>
        <span style={{
          fontFamily: L.sans, fontWeight: 900, fontSize: 9, letterSpacing: ".18em", textTransform: "uppercase",
          background: v.fg, color: v.bg, padding: "3px 7px",
          border: `1.5px solid ${L.ink}`,
        }}>{chip}</span>
        {badge && <KBadge kind={badge}/>}
      </div>

      {/* Center title — empilé caps */}
      <div style={{ marginTop: "auto", position: "relative", zIndex: 3 }}>
        <div style={{
          fontFamily: L.sans, fontWeight: 800, fontSize: 9, letterSpacing: ".18em", textTransform: "uppercase",
          opacity: .85, marginBottom: 6,
        }}>{client} · {year}</div>
        <div style={{
          fontFamily: L.display, fontWeight: 400,
          fontSize: 32, lineHeight: .9, letterSpacing: "-.025em",
          textTransform: "uppercase",
        }}>
          {topWord}<br/>
          <span style={{ color: v.stamp }}>{bottomWord}</span>
        </div>
        <div style={{
          marginTop: 10,
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <span style={{ fontFamily: L.sans, fontWeight: 900, fontSize: 9, letterSpacing: ".18em", textTransform: "uppercase" }}>
            № {num}/05
          </span>
          <span style={{
            display: "grid", placeItems: "center",
            width: 26, height: 26,
            background: v.fg, color: v.bg,
            border: `1.5px solid ${L.ink}`,
            fontFamily: L.display, fontSize: 14,
          }}>↗</span>
        </div>
      </div>
    </div>
  );
}

function CardVoltage() {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: L.paper, color: L.ink,
      fontFamily: L.sans,
      padding: "28px 44px 32px", boxSizing: "border-box",
      display: "flex", flexDirection: "column", gap: 20,
      position: "relative", overflow: "hidden",
    }}>
      {/* Bolts décoratifs en coin */}
      <KBolt color={L.gold} size={90} rotate={32}
        style={{ position: "absolute", right: 40, top: 40, opacity: .9, zIndex: 1 }}/>

      {/* Section header — typo dominante, pas de boutons */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderBottom: `3px solid ${L.ink}`, paddingBottom: 18, position: "relative", zIndex: 2 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <span style={{
              fontFamily: L.sans, fontWeight: 900, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase",
              background: L.violet, color: L.paper, padding: "4px 10px",
              border: `2px solid ${L.ink}`,
            }}>§ 01 — TRAVAUX</span>
            <KBadge kind="new"/>
            <KBadge kind="beta"/>
          </div>
          <h2 style={{
            margin: 0,
            fontFamily: L.display, fontWeight: 400,
            fontSize: 104, lineHeight: .88, letterSpacing: "-.026em",
            textTransform: "uppercase",
          }}>
            CINQ PROJETS,<br/>
            <span style={{
              color: "transparent",
              WebkitTextStroke: `2px ${L.red}`,
            }}>UNE MARQUE :</span> <span style={{ background: L.gold, padding: "0 .04em", border: `2px solid ${L.ink}` }}>MOI<span style={{ color: L.red }}>.</span></span>
          </h2>
        </div>
        <div style={{ fontFamily: L.sans, fontWeight: 900, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: L.ink, textAlign: "right", lineHeight: 1.5 }}>
          ROSTER · 005<br/>
          <span style={{ color: L.muted }}>2018 → 2026</span>
        </div>
      </div>

      {/* Grille type "magazine planche" : 5 vignettes posters de tailles variées */}
      <div style={{
        flex: 1, display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gridTemplateRows: "repeat(2, 1fr)",
        gap: 14,
        position: "relative", zIndex: 2,
      }}>
        <div style={{ gridColumn: "1 / 3", gridRow: "1 / 3" }}>
          <LTile variant="violet" num="01" client="SCHÄR" year="2023"
            topWord="CAMPAGNE DE" bottomWord="NOËL." chip="CAMPAGNE 360°" badge="new"/>
        </div>
        <div style={{ gridColumn: "3 / 4", gridRow: "1 / 2" }}>
          <LTile variant="red" num="02" client="SCHÄR" year="2019→24"
            topWord="30+" bottomWord="LANCEMENTS" chip="GTM" badge="pro"/>
        </div>
        <div style={{ gridColumn: "4 / 6", gridRow: "1 / 2" }}>
          <LTile variant="gold" num="03" client="LUDINNOV" year="2024 →"
            topWord="REFONTE" bottomWord="LUDINNOV." chip="BRANDING" badge="beta"/>
        </div>
        <div style={{ gridColumn: "3 / 5", gridRow: "2 / 3" }}>
          <LTile variant="ink" num="04" client="SCHÄR" year="2021→23"
            topWord="BRAND" bottomWord="CAMPAIGNS" chip="BRAND" badge="tip"/>
        </div>
        <div style={{ gridColumn: "5 / 6", gridRow: "2 / 3" }}>
          <LTile variant="paper" num="05" client="SCHÄR" year="2019→24"
            topWord="TRADE" bottomWord="MKT." chip="RETAIL"/>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <DesignCanvas
      title="Directions DA · Portfolio Micholier"
      subtitle="Dix partis pris distincts — même contenu, même structure. Pick one."
    >
      <DCSection id="dir-a" title="A · Console" description="Tech-noir, gaming-coded. Mono dominante, italique serif rare en accent cyan. Pour parler aux studios.">
        <DCArtboard id="a-hero" label="Hero" width={1280} height={820}><HeroConsole /></DCArtboard>
        <DCArtboard id="a-work" label="Travaux — premier écran" width={1280} height={820}><CardConsole /></DCArtboard>
      </DCSection>
      <DCSection id="dir-b" title="B · Métronome" description="Monochrome moderne + cobalt unique. Grotesk net, italique serif Newsreader sur les accents. Linear-esque, premium.">
        <DCArtboard id="b-hero" label="Hero" width={1280} height={820}><HeroMetronome /></DCArtboard>
        <DCArtboard id="b-work" label="Travaux — premier écran" width={1280} height={820}><CardMetronome /></DCArtboard>
      </DCSection>
      <DCSection id="dir-c" title="C · Tropique — violets · vague 1" description="Quatre violets « classiques » : du royal au mauve poudré. Tous sur fond crème.">
        <DCArtboard id="c-royal"      label="C₁ · Royal (violet + jaune)" width={1280} height={820}><HeroTropique palette={C_PALETTES.royal} /></DCArtboard>
        <DCArtboard id="c-aubergine"  label="C₂ · Aubergine (prune + pêche)" width={1280} height={820}><HeroTropique palette={C_PALETTES.aubergine} /></DCArtboard>
        <DCArtboard id="c-electrique" label="C₃ · Électrique (violet + chartreuse)" width={1280} height={820}><HeroTropique palette={C_PALETTES.electrique} /></DCArtboard>
        <DCArtboard id="c-lavande"    label="C₄ · Lavande (mauve + argile)" width={1280} height={820}><HeroTropique palette={C_PALETTES.lavande} /></DCArtboard>
      </DCSection>
      <DCSection id="dir-c2" title="C · Tropique — violets · vague 2" description="Six stratégies plus divergentes : monochrome, fond inversé, sorbet, tension complémentaire, magenta vinyle, ambiance bruyère.">
        <DCArtboard id="c-tonal"     label="C₅ · Tonal (monochrome violet — pas de 2e couleur)" width={1280} height={820}><HeroTropique palette={C_PALETTES.tonal} /></DCArtboard>
        <DCArtboard id="c-nocturne"  label="C₆ · Nocturne (fond violet, texte crème — inversion)" width={1280} height={820}><HeroTropique palette={C_PALETTES.nocturne} /></DCArtboard>
        <DCArtboard id="c-sorbet"    label="C₇ · Sorbet (mauve glacé + bleu poudré — pastel)" width={1280} height={820}><HeroTropique palette={C_PALETTES.sorbet} /></DCArtboard>
        <DCArtboard id="c-emeraude"  label="C₈ · Émeraude (violet + vert complémentaire)" width={1280} height={820}><HeroTropique palette={C_PALETTES.emeraude} /></DCArtboard>
        <DCArtboard id="c-vinyle"    label="C₉ · Vinyle (magenta-violet + noir + crème)" width={1280} height={820}><HeroTropique palette={C_PALETTES.vinyle} /></DCArtboard>
        <DCArtboard id="c-bruyere"   label="C₁₀ · Bruyère (violet sombre + rose + vert)" width={1280} height={820}><HeroTropique palette={C_PALETTES.bruyere} /></DCArtboard>
      </DCSection>
      <DCSection id="dir-d" title="D · Atelier" description="Magazine français haut de gamme. Blanc cassé, terracotta, serif italique XL dominant. Numérotation en folio (n° 001, MMXXIII). Posture d'auteur, très print.">
        <DCArtboard id="d-hero" label="Hero" width={1280} height={820}><HeroAtelier /></DCArtboard>
        <DCArtboard id="d-work" label="Travaux — premier écran" width={1280} height={820}><CardAtelier /></DCArtboard>
      </DCSection>
      <DCSection id="dir-e" title="E · Crépuscule" description="Dark cinématique chaud. Encre aubergine, os, accent or pâle. Garamond italique + mono. Esprit Criterion Collection / fiche cinéma.">
        <DCArtboard id="e-hero" label="Hero" width={1280} height={820}><HeroCrepuscule /></DCArtboard>
        <DCArtboard id="e-work" label="Travaux — premier écran" width={1280} height={820}><CardCrepuscule /></DCArtboard>
      </DCSection>
      <DCSection id="dir-f" title="F · Carbone" description="Brutalist poster. Noir, blanc, jaune néon. Caps grotesk lourd, italique serif rare en respiration. Aucun gradient, blocs francs. Risque maximum, mémoire maximale.">
        <DCArtboard id="f-hero" label="Hero" width={1280} height={820}><HeroCarbone /></DCArtboard>
        <DCArtboard id="f-work" label="Travaux — premier écran" width={1280} height={820}><CardCarbone /></DCArtboard>
      </DCSection>
      <DCSection id="dir-g" title="G · Cahier" description="Personnel, manuscrit. Crème ligné comme un cahier, surligneur jaune, stylo bleu, annotations Caveat à la main. Italique Cormorant pour le texte sérieux. Le plus humain, le plus chaud — fait penser à un carnet de DA.">
        <DCArtboard id="g-hero" label="Hero" width={1280} height={820}><HeroCahier /></DCArtboard>
      </DCSection>
      <DCSection id="dir-h" title="H · Stadium" description="Scoreboard / sport pep. Charbon profond + cream + orange flamme + vert live. Big Shoulders Display condensé en caps massif. Signale le gaming par le métier (sport, compétition), pas par les codes tech. Énergie maximale.">
        <DCArtboard id="h-hero" label="Hero" width={1280} height={820}><HeroStadium /></DCArtboard>
      </DCSection>
      <DCSection id="dir-i" title="I · Spécimen" description="Type-specimen comme portfolio. Bodoni Moda à contraste extrême, glyphe géant en accent bordeaux, le type EST le sujet. Crème, encre noire, bordeaux. Très foundry / studio graphique. Signal craft fort.">
        <DCArtboard id="i-hero" label="Hero" width={1280} height={820}><HeroSpecimen /></DCArtboard>
      </DCSection>
      <DCSection id="dir-l" title="L · Voltage (charte Riot · deuxième lecture)" description="Mêmes tokens charte (Red/Gold/Violet/off-white/ink, Impact + Inter) mais lecture inverse : le bolt devient architectural (split 3-colonnes vertical), violet en mur premium, type empilé en alternance plein/outline/surligné. Aucune ombre offset — on reste typographique et editorial.">
        <DCArtboard id="l-hero" label="L · Hero" width={1280} height={820}><HeroVoltage /></DCArtboard>
        <DCArtboard id="l-work" label="L · Travaux (planche poster)" width={1280} height={820}><CardVoltage /></DCArtboard>
      </DCSection>
      <DCSection id="dir-k" title="K · Riot (charte graphique fournie)" description="Application stricte de la charte v1.0 : Riot Red / Gold / Violet sur off-white & ink. Impact en caps XL (tracking serré) + Inter Black/Regular. Coupes diagonales signature, éclairs, splashes, badges NEW/PRO/BETA/TIP, blocs & boutons Primary/Secondary/Ghost.">
        <DCArtboard id="k-hero" label="K · Hero" width={1280} height={820}><HeroRiot /></DCArtboard>
        <DCArtboard id="k-work" label="K · Travaux (cartes diagonales)" width={1280} height={820}><CardRiot /></DCArtboard>
      </DCSection>
      <DCSection id="dir-j" title="J · Arena (inspirée Riot · Stink Studios)" description="Vocabulaire Riot Games / Brand Evolution : custom geometric sans (Space Grotesk, proxy de Riot Sans), rouge saturé, duo Core ↔ Expressive, pattern hex game-coded. Toolkit qui scale d'un post social à une bannière d'arène. Signal gaming le plus direct du panel, sans tomber dans le pastiche console.">
        <DCArtboard id="j-core"       label="J · CORE (minimal, scoreboard sobre)" width={1280} height={820}><HeroArenaCore /></DCArtboard>
        <DCArtboard id="j-expressive" label="J · EXPRESSIVE (plate photo, hex pattern, rouge dominant)" width={1280} height={820}><HeroArenaExpressive /></DCArtboard>
        <DCArtboard id="j-work"       label="J · Travaux — premier écran" width={1280} height={820}><CardArena /></DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
