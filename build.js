/* build.js — régénère data.js depuis la structure (data.base.js) + le contenu
   éditable (content/site.json, géré par Pages CMS). Lancé par Netlify au déploiement. */
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;
function loadBase(){
  const code = fs.readFileSync(path.join(ROOT,'data.base.js'),'utf8');
  const window = {};
  eval(code);
  return window.PORTFOLIO;
}
function deepMerge(base, over){
  if (Array.isArray(over)) return over.slice();
  if (over && typeof over==='object'){
    const out = (base && typeof base==='object' && !Array.isArray(base)) ? {...base} : {};
    for (const k of Object.keys(over)) out[k] = deepMerge(out[k], over[k]);
    return out;
  }
  return over;
}
const base = loadBase();
const site = JSON.parse(fs.readFileSync(path.join(ROOT,'content','site.json'),'utf8'));
const merged = deepMerge(base, site);
const header =
`/* ════════════════════════════════════════════════════════════
   data.js — FICHIER GÉNÉRÉ. NE PAS ÉDITER À LA MAIN.
   Contenu éditable  : content/site.json  (via Pages CMS)
   Structure/projets : data.base.js
   Régénéré par build.js au déploiement Netlify.
   ════════════════════════════════════════════════════════════ */
`;
fs.writeFileSync(path.join(ROOT,'data.js'), header + 'window.PORTFOLIO = ' + JSON.stringify(merged,null,2) + ';\n');
console.log('OK data.js régénéré');
