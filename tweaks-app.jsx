/* ════════════════════════════════════════════════════════════
   Tweaks app — panneau pour ajuster les 3 couleurs charte en live.
   Monté quand l'utilisateur active "Tweaks" depuis la toolbar.
   Source de vérité : window.__riotTweakDefaults (cf. app.js).
   ════════════════════════════════════════════════════════════ */

const DEFAULTS = window.__riotTweakDefaults || {
  riotRed:    "#D72E3E",
  riotGold:   "#F4B324",
  riotViolet: "#6B4FBB",
};

// Palettes alternatives proposées pour chacune des 3 couleurs.
// Chaque palette = un set de 3 couleurs (red, gold, violet) que l'on peut
// permuter via le bouton "Palette" dans le panneau.
const RED_OPTIONS = [
  "#D72E3E", // Riot Red (charte)
  "#B71C2C",
  "#E84545",
  "#F26B5C",
  "#A91D24",
];
const GOLD_OPTIONS = [
  "#F4B324", // Riot Gold (charte)
  "#F5D03A",
  "#E89B0E",
  "#FFC857",
  "#D69408",
];
const VIOLET_OPTIONS = [
  "#6B4FBB", // Riot Violet (charte)
  "#4B2BA8",
  "#8B5CF6",
  "#5A3FCC",
  "#3F1E94",
];

function RiotTweaks() {
  const [tweaks, setTweak] = useTweaks(DEFAULTS);

  // Applique les tweaks en live aux CSS vars du :root via app.js
  React.useEffect(() => {
    if (window.__riotApplyTweaks) window.__riotApplyTweaks(tweaks);
  }, [tweaks]);

  // Preset : remet la charte officielle
  const resetCharte = () => setTweak({
    riotRed: "#D72E3E",
    riotGold: "#F4B324",
    riotViolet: "#6B4FBB",
  });

  return (
    <TweaksPanel title="Charte Riot — Tweaks">
      <TweakSection label="Couleurs charte">
        <TweakColor
          label="Riot Red"
          value={tweaks.riotRed}
          options={RED_OPTIONS}
          onChange={(v) => setTweak("riotRed", v)}
        />
        <TweakColor
          label="Riot Gold"
          value={tweaks.riotGold}
          options={GOLD_OPTIONS}
          onChange={(v) => setTweak("riotGold", v)}
        />
        <TweakColor
          label="Riot Violet"
          value={tweaks.riotViolet}
          options={VIOLET_OPTIONS}
          onChange={(v) => setTweak("riotViolet", v)}
        />
      </TweakSection>
      <TweakSection label="Preset">
        <TweakButton onClick={resetCharte}>↺ Restaurer la charte v1.0</TweakButton>
      </TweakSection>
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById("tweaks-root")).render(<RiotTweaks />);
