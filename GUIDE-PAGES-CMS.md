# Guide — mettre le portfolio sous Pages CMS

Trois étapes, ~10 min en tout. À faire une seule fois. Ensuite, tu édites ton
contenu depuis une interface web, sans jamais retoucher au code.

Avant de commencer : **dézippe** le fichier livré. Tu obtiens un dossier avec
`index.html`, `.pages.yml`, `content/`, `uploads/`, etc.

---

## 1. GitHub — déposer le site (~5 min)

1. Sur **github.com**, en haut à droite : **+** → **New repository**.
2. Nom : `portfolio` (par ex.). Laisse **Public** ou choisis **Private**, peu importe.
   Ne coche rien d'autre. **Create repository**.
3. Sur la page du dépôt vide : lien **« uploading an existing file »**
   (ou **Add file → Upload files**).
4. Ouvre le dossier dézippé, **sélectionne tout ce qu'il contient**
   (les fichiers *et* les sous-dossiers `content`, `categories`, `projets`, `uploads`…)
   et **glisse-les** dans la zone d'upload.
   > Important : dépose le **contenu** du dossier, pas le dossier lui-même —
   > `index.html` et `.pages.yml` doivent être à la **racine** du dépôt.
5. En bas : **Commit changes**. Attends que tout soit envoyé.

---

## 2. Netlify — brancher le dépôt (~3 min)

1. Sur **app.netlify.com** : **Add new site** → **Import an existing project**.
2. **Deploy with GitHub** → autorise → choisis ton dépôt `portfolio`.
3. Netlify lit déjà la config (`netlify.toml`) : commande `node build.js`,
   publication à la racine. Ne touche à rien → **Deploy**.
4. Quand c'est en ligne : **Site configuration → Change site name** →
   `jacques-micholier` → l'URL devient `jacques-micholier.netlify.app`.

> À partir de là, le drag-and-drop est fini : chaque modif via le CMS se
> déploie toute seule. Ton ancien site (`creative-belekoy-…`) peut être supprimé.

---

## 3. Pages CMS — activer l'édition (~2 min)

1. Va sur **app.pagescms.org** → **Sign in with GitHub**.
2. Il te demande d'installer l'app **Pages CMS** sur ton compte : autorise
   l'accès **au dépôt `portfolio`** (tu peux limiter à ce seul dépôt).
3. Ouvre le dépôt dans Pages CMS → tu vois **« Contenu du site »**.

C'est prêt. 🎉

---

## Éditer ton contenu (au quotidien)

Dans Pages CMS → **Contenu du site**, tu retrouves des formulaires clairs :

- **Profil** — y compris **URL LinkedIn** et **Lien CV (PDF)** (remplace les `#`).
- **Accueil** — la phrase d'accroche (« Je construis des marques qui **durent.** ») :
  modifie-la, ou **vide les deux champs** pour la masquer complètement.
- **À propos** — paragraphes + **Parcours** (corrige la période **Pierre Martinet**).
- **Contact**, **Pied de page**.

Clique **Save** → Netlify redéploie automatiquement, en ligne en ~1 min.

> Ce qui n'est pas (encore) dans le CMS : les **projets** et **catégories**
> détaillés (textes riches, blocs, images). Ils restent dans `data.base.js`.
> Si tu veux les éditer aussi depuis le CMS un jour, c'est faisable — demande.
