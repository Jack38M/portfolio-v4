# Portfolio Jacques Micholier — édité via Pages CMS

Site statique (charte « Riot »). Le contenu courant se modifie **sans toucher au code**,
depuis Pages CMS (app.pagescms.org). Aucune connaissance technique requise.

## Comment c'est organisé

- **`content/site.json`** — le contenu éditable : profil, LinkedIn, CV, bio,
  « À propos », parcours, contact, pied de page. **C'est ce que Pages CMS modifie.**
- **`data.base.js`** — la structure : projets, catégories, design. (Pas géré par le CMS.)
- **`build.js`** — fusionne les deux en `data.js` au déploiement.
- **`data.js`** — fichier **généré**, lu par le site. Ne pas l'éditer à la main.

À chaque enregistrement dans Pages CMS, GitHub reçoit la modif, Netlify lance
`node build.js` (régénère `data.js`) puis publie. Tout est automatique.

## Modifier le contenu

1. Aller sur **app.pagescms.org**, se connecter avec GitHub.
2. Ouvrir ce dépôt → **« Contenu du site »**.
3. Modifier, **Enregistrer** → le site se met à jour tout seul en ~1 min.

## Aperçu en local (optionnel)

```bash
node build.js            # régénère data.js depuis content/site.json
python3 -m http.server   # puis ouvrir http://localhost:8000
```
