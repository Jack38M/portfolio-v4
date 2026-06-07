/* ──────────────────────────────────────────────────────────
   Portfolio · Jacques Micholier
   Source de vérité unique. Modifier ici suffit.
   Structure i18n prête : { fr, en } — laisser en vide pour
   l'instant, il suffira de remplir pour activer le toggle.
   ────────────────────────────────────────────────────────── */

const T = (fr, en = "") => ({ fr, en });

window.PORTFOLIO = {
  /* ── Profil ─────────────────────────────────────────── */
  profile: {
    name: "Jacques Micholier",
    nameItalic: "Micholier", // partie en italique dans le logo
    role: T(
      "Brand & Marketing Manager",
      "Brand & Marketing Manager"
    ),
    location: T("Saint-Étienne, France", "Saint-Étienne, France"),
    languages: "FR · EN",
    experience: T("8 ans", "8 years"),
    availability: T("Disponible · Q4 2026", "Available · Q4 2026"),
    email: "jacques.micholier@gmail.com",
    phone: "+33 6 95 58 53 89",
    linkedin: "#", // À COMPLÉTER : URL LinkedIn
    cv: "#",       // À COMPLÉTER : lien CV PDF
  },

  /* ── Nav ────────────────────────────────────────────── */
  nav: {
    links: [
      { id: "travaux", label: T("Travaux", "Work") },
      { id: "apropos", label: T("À propos", "About") },
      { id: "contact", label: T("Contact", "Contact") },
    ],
  },

  /* ── Hero ───────────────────────────────────────────── */
  hero: {
    eyebrow: T("Portfolio", "Portfolio"),
    // Le titre est segmenté pour permettre les italiques par token.
    // i = italique tomate · n = normal · br = saut de ligne
    title: T(
      [
        { n: "Brand &" }, { br: true },
        { i: "Marketing" }, { br: true },
        { i: "Manager." },
      ],
      [
        { n: "Brand &" }, { br: true },
        { i: "Marketing" }, { br: true },
        { i: "Manager." },
      ]
    ),
    aside: T(
      "5 ans chez Schär — leader européen du sans-gluten. Aujourd'hui, refonte de marque chez Ludinnov, jeux cognitifs. Cap sur le gaming et le divertissement.",
      ""
    ),
    asideLabel: T("Bio — courte version", "Bio — short version"),
    metaItems: [
      { label: T("Mobilité", "Mobility"), value: T("France", "France") },
      { label: T("Langues", "Languages"), value: T("FR · EN", "FR · EN") },
      { label: T("Statut", "Status"), value: T("Ouvert aux opportunités", "Open to opportunities") },
    ],
  },

  /* ── Section Travaux ────────────────────────────────── */
  travaux: {
    eyebrow: T("§ 01 — Travaux sélectionnés", "§ 01 — Selected work"),
    titleParts: T(
      [{ n: "Mes " }, { i: "réalisations" }, { n: "." }],
      [{ n: "My " }, { i: "work" }, { n: "." }]
    ),
    intro: T(
      "Retrouvez quelques unes des mes réalisations : campagnes, lancements produits, trade marketing et bien d'autres encore.",
      ""
    ),
    // Toggle de la home : Grille | Catégories.
    toggle: {
      grid:       T("Grille",     "Grid"),
      categories: T("Catégories", "Categories"),
    },
  },

  /* ── Catégories de travaux ──────────────────────────── */
  // Taxonomie éditoriale. Chaque projet pointe vers une `categoryKey`.
  // L'ordre détermine la disposition mosaïque (card-1, card-2, card-3, card-4).
  categories: [
    {
      key: "campagnes",
      label: T("Campagnes", "Campaigns"),
      sub: T("Brand · Intégrées · Saisonnières", "Brand · Integrated · Seasonal"),
      pitch: T(
        "Construire la voix de la marque sur la durée. Films, digital, RP, influence — synchronisés autour d'un même propos.",
        ""
      ),
      tones: { bg: "#d9421e", ink: "#f3efe5", accent: "#f7b76b" },
      glyph: "★",
      image: "uploads/campagne-noel.png",
    },
    {
      key: "produits",
      label: T("Produits", "Products"),
      sub: T("Innovation · Go-to-market", "Innovation · Go-to-market"),
      pitch: T(
        "Du brief R&D au lancement en GMS : positioning, packaging, plan média, sell-in. Le marketing qui finit en linéaire.",
        ""
      ),
      tones: { bg: "#e88a3a", ink: "#1a1410", accent: "#fbd9a8" },
      glyph: "◐",
      image: "uploads/lancement-produits.png",
    },
    {
      key: "trade",
      label: T("Trade marketing", "Trade marketing"),
      sub: T("Shopper activation · Retail", "Shopper activation · Retail"),
      pitch: T(
        "Faire émerger la marque au moment de la décision d'achat. PLV, plans de masse, formation force de vente.",
        ""
      ),
      tones: { bg: "#f0c84a", ink: "#1a1410", accent: "#d9421e" },
      glyph: "✕",
      image: "uploads/trade-marketing.jpg",
    },
    {
      key: "refonte",
      label: T("Refonte de marque", "Rebranding"),
      sub: T("Plateforme · Identité · Système", "Platform · Identity · System"),
      pitch: T(
        "Redéfinir la marque de l'intérieur : positionnement, ton, identité, styleguide. Un système qui survit à toutes ses applications.",
        ""
      ),
      tones: { bg: "#5b46c7", ink: "#f3efe5", accent: "#fbd06b" },
      glyph: "✦",
      image: "uploads/etoiles-photos.svg",
    },
  ],

  /* ── Projets ────────────────────────────────────────── */
  // L'ordre détermine la numérotation 01 → 05.
  // featured: true → cover pleine largeur en haut de la grille.
  // shape: 'tall' | 'wide' | 'square' → contrôle la cellule grid.
  projects: [
    {
      slug: "noel-schar",
      categoryKey: "campagnes",
      featured: true,
      shape: "feature",
      client: "Schär",
      year: "2023",
      period: T("2023 · Q4", "2023 · Q4"),
      category: T("Campagne 360°", "Integrated campaign"),
      role: T("Brand Manager", "Brand Manager"),
      team: T("Schär FR · agences créa, média, RP", "Schär FR · creative, media, PR agencies"),
      title: T("Campagne de Noël Schär", "Schär Christmas campaign"),
      titleItalic: T("Noël", "Christmas"),
      pitch: T(
        "Faire du sans-gluten un moment de partage, pas une contrainte.",
        ""
      ),
      brief: T(
        "Schär est leader sans-gluten en GMS, mais reste perçu comme « produit médical ». L'objectif fin d'année : déplacer la marque sur le terrain de l'émotion, du partage et de l'occasion familiale.",
        ""
      ),
      context: T(
        "J'ai piloté le brief créatif, le casting du personnage gingerbread, le plan média multi-canal et l'activation retail. Travail à 4 mains avec les équipes Italie et les agences françaises.",
        ""
      ),
      // À COMPLÉTER : KPIs réels
      kpis: [
        { value: "+", label: T("Reach TV national", "National TV reach"), note: T("chiffres à confirmer", "tbc") },
        { value: "Q4", label: T("Pic de saisonnalité", "Seasonal peak"), note: T("octobre — décembre", "October — December") },
        { value: "360°", label: T("Canaux activés", "Channels activated"), note: T("TV · digital · RP · retail", "TV · digital · PR · retail") },
      ],
      steps: T(
        [
          { t: "Brief créatif", d: "Cadrage stratégique avec les agences. Repositionner Schär sur le partage, pas sur la restriction." },
          { t: "Casting & DA", d: "Choix du personnage gingerbread comme totem. Direction artistique chaude, papier, encre — un Noël illustré." },
          { t: "Plan média", d: "TV nationale, digital, social, RP. Synchronisation avec la grille saisonnière des GMS." },
          { t: "Activation retail", d: "PLV permanente et événementielle, plan de masse, formation force de vente." },
        ],
        []
      ),
      image: "assets/campagne-noel.png",
      // Tonalité du placeholder si l'image manque
      tones: { bg: "#d9421e", ink: "#f3efe5", accent: "#f7b76b" },
      glyph: "★",
      // Blocs de contenu déroulés entre Brief et Méthode.
      // type : 'split' | 'video' | 'quote' | 'media'
      // Les images se déposent par drag&drop sur leur emplacement (id partagé
      // avec le sidecar racine .image-slots.state.json).
      blocks: [
        {
          type: "split",
          layout: "image-right",
          label: T("01 — Insight", "01 — Insight"),
          title: T("Le sans-gluten, c'est d'abord une table.", ""),
          body: T(
            "On a quitté le rayon « santé » pour aller chercher la marque sur le terrain de l'émotion : un Noël en famille où personne ne se sent à part. Le gingerbread devient le totem chaleureux d'une marque qui réunit.",
            ""
          ),
          imageId: "block-noel-schar-01",
          caption: T("Direction artistique — illustration & papier.", ""),
        },
        {
          type: "video",
          // À COMPLÉTER : url YouTube/Vimeo ou fichier .mp4
          src: "",
          poster: "block-noel-schar-video",
          label: T("02 — Film", "02 — Film"),
          title: T("Le spot 20s.", ""),
          body: T(
            "Diffusion TV nationale + déclinaisons digitales 6s / 15s pour les pre-rolls. Le gingerbread porte la signature.",
            ""
          ),
          caption: T("Film TV — 20 secondes — diffusion Q4.", ""),
        },
        {
          type: "quote",
          text: T(
            "Notre métier, c'est de transformer un produit nécessaire en produit désiré.",
            ""
          ),
          author: T("Note d'intention — brief créatif.", ""),
        },
        {
          type: "split",
          layout: "image-left",
          label: T("03 — Retail", "03 — Retail"),
          title: T("En linéaire, partout en France.", ""),
          body: T(
            "PLV permanente et événementielle, plans de masse négociés avec la grande distribution, formation de la force de vente. La campagne ne s'arrête pas à l'écran — elle finit en rayon.",
            ""
          ),
          imageId: "block-noel-schar-02",
          caption: T("Activation retail — GMS France.", ""),
        },
      ],
    },
    {
      slug: "lancements",
      categoryKey: "produits",
      shape: "tall",
      client: "Schär",
      year: "2019 — 2024",
      period: T("2019 → 2024", "2019 → 2024"),
      category: T("Innovation & Go-to-market", "Innovation & Go-to-market"),
      role: T("Brand Manager", "Brand Manager"),
      team: T("Schär R&D · marketing · ventes", "Schär R&D · marketing · sales"),
      title: T("Lancements produits Schär", "Schär product launches"),
      titleItalic: T("Lancements", "Launches"),
      pitch: T(
        "30+ innovations gluten-free déployées sur le marché français.",
        ""
      ),
      brief: T(
        "Portfolio Schär en renouvellement constant : Bio, Melto, Madeleines, pain frais, biscuits. Chaque lancement = positionnement, packaging, PLV, plan média et activation influence.",
        ""
      ),
      context: T(
        "Responsable du go-to-market complet pour la France : briefs, négociation référencement, plans de lancement.",
        ""
      ),
      kpis: [
        { value: "30+", label: T("Innovations lancées", "Innovations launched") },
        { value: "5", label: T("Catégories couvertes", "Categories covered") },
        { value: "FR", label: T("Marché pilote", "Lead market") },
      ],
      image: "assets/lancements-2.png",
      tones: { bg: "#e88a3a", ink: "#1a1410", accent: "#fbd9a8" },
      glyph: "◐",
      blocks: [
        {
          type: "split",
          layout: "image-left",
          label: T("01 — Portfolio", "01 — Portfolio"),
          title: T("Cinq catégories, trente innovations.", ""),
          body: T(
            "Bio, Melto, Madeleines, pain frais, biscuits. Chaque lancement engage un cycle complet : positioning, packaging, PLV, plan média, activation influence. Cohérence de la plateforme, singularité de chaque produit.",
            ""
          ),
          imageId: "block-lancements-01",
          caption: T("Photos packshot — gamme 2019—2024.", ""),
        },
        {
          type: "media",
          imageId: "block-lancements-02",
          caption: T("Plan de lancement — mécaniques GMS.", ""),
          ratio: "21/9",
        },
        {
          type: "split",
          layout: "image-right",
          label: T("02 — Go-to-market", "02 — Go-to-market"),
          title: T("Référencement, négociation, sell-in.", ""),
          body: T(
            "Construction des dossiers commerciaux avec les enseignes, calage des plans média sur les fenêtres promo, coordination avec la R&D pour les briefs produit. Le marketing finit toujours par un linéaire et un chiffre.",
            ""
          ),
          imageId: "block-lancements-03",
          caption: T("Dossiers de référencement — enseignes nationales.", ""),
        },
      ],
    },
    {
      slug: "ludinnov",
      categoryKey: "refonte",
      shape: "wide",
      client: "Ludinnov",
      year: "2024 →",
      period: T("2024 → en cours", "2024 → ongoing"),
      category: T("Branding · Plateforme de marque", "Branding · Brand platform"),
      role: T("Marketing Manager", "Marketing Manager"),
      team: T("Ludinnov · studio créa externe", "Ludinnov · external creative studio"),
      title: T("Refonte de marque Ludinnov", "Ludinnov rebrand"),
      titleItalic: T("Refonte", "Rebrand"),
      pitch: T(
        "Une nouvelle identité pour faire émerger Ludinnov sur le marché des jeux cognitifs.",
        ""
      ),
      brief: T(
        "Plateforme de marque, styleguide, site, déclinaisons retail et catalogues. Le projet en cours qui m'occupe.",
        ""
      ),
      context: T(
        "Audit, workshop d'alignement, sélection du studio, pilotage des livrables, déploiement progressif sur les supports de vente.",
        ""
      ),
      kpis: [
        { value: "0→1", label: T("Plateforme de marque", "Brand platform") },
        { value: "12+", label: T("Supports redessinés", "Touchpoints redesigned") },
        { value: "B2B/C", label: T("Audiences cibles", "Target audiences") },
      ],
      image: "assets/ludinnov-rebrand.png",
      tones: { bg: "#5b46c7", ink: "#f3efe5", accent: "#fbd06b" },
      glyph: "✦",
      blocks: [
        {
          type: "split",
          layout: "image-right",
          label: T("01 — Plateforme", "01 — Platform"),
          title: T("Une marque pour penser, jouer, apprendre.", ""),
          body: T(
            "Audit interne, workshop d'alignement avec les fondateurs, écriture du positionnement et de la mission. La plateforme tient en une page, mais elle structure tout ce qui suit — du packaging au discours commercial.",
            ""
          ),
          imageId: "block-ludinnov-01",
          caption: T("Plateforme de marque — synthèse.", ""),
        },
        {
          type: "quote",
          text: T(
            "Une identité, ce n'est pas un logo. C'est un système qui survit à toutes ses applications.",
            ""
          ),
          author: T("Principe de travail — Ludinnov.", ""),
        },
        {
          type: "split",
          layout: "image-left",
          label: T("02 — Styleguide", "02 — Styleguide"),
          title: T("Logo, typographie, couleurs, ton.", ""),
          body: T(
            "Styleguide complet livré au studio créa et à l'équipe interne. Chaque composant testé en conditions réelles : packaging produit, fiche e-commerce, support de salon professionnel, slide investisseur.",
            ""
          ),
          imageId: "block-ludinnov-02",
          caption: T("Extraits styleguide — système d'identité.", ""),
        },
        {
          type: "media",
          imageId: "block-ludinnov-03",
          caption: T("Déploiement — packaging & retail.", ""),
          ratio: "16/9",
        },
      ],
    },
    {
      slug: "brand",
      categoryKey: "campagnes",
      shape: "wide-sm",
      client: "Schär",
      year: "2021 — 2023",
      period: T("2021 → 2023", "2021 → 2023"),
      category: T("Campagne de marque", "Brand campaigns"),
      role: T("Brand Manager", "Brand Manager"),
      team: T("Schär · agences créa, média, RP", "Schär · creative, media, PR agencies"),
      title: T("Brand campaigns Schär", "Schär brand campaigns"),
      titleItalic: T("campaigns", "campaigns"),
      pitch: T(
        "Déployer la plateforme de marque Schär sur trois ans.",
        ""
      ),
      brief: T(
        "Faire évoluer la perception : passer du « produit nécessité » au « choix de vie ». Campagnes TV, digital, social. Collaborations influence.",
        ""
      ),
      context: T(
        "Pilotage des agences créa, média et RP sur l'ensemble du cycle annuel.",
        ""
      ),
      kpis: [
        { value: "3 ans", label: T("Déploiement", "Rollout") },
        { value: "TV+", label: T("Multi-canal", "Multi-channel") },
        { value: "FR", label: T("Marché", "Market") },
      ],
      image: "assets/brand-campaigns.png",
      tones: { bg: "#2a2723", ink: "#f3efe5", accent: "#d9421e" },
      glyph: "◇",
      blocks: [
        {
          type: "video",
          src: "",
          poster: "block-brand-video",
          label: T("01 — Film de marque", "01 — Brand film"),
          title: T("Trois ans, une voix.", ""),
          body: T(
            "Cycle annuel de campagnes TV + digital qui fait basculer la perception : Schär n'est plus une contrainte médicale, c'est un choix de vie. Continuité visuelle d'une campagne à l'autre, montée en puissance émotionnelle.",
            ""
          ),
          caption: T("Film de marque — diffusion nationale.", ""),
        },
        {
          type: "split",
          layout: "image-right",
          label: T("02 — Influence", "02 — Influence"),
          title: T("Collaborations long terme.", ""),
          body: T(
            "Partenariats avec des créateurs alignés sur la promesse de marque, pas sur le seul reach. Mesure de l'impact en EMV mais aussi en évolution de perception — la marque se renforce, pas seulement sa notoriété.",
            ""
          ),
          imageId: "block-brand-01",
          caption: T("Campagnes influence — créateurs sélectionnés.", ""),
        },
        {
          type: "split",
          layout: "image-left",
          label: T("03 — RP", "03 — PR"),
          title: T("Construire la conversation.", ""),
          body: T(
            "Coordination avec l'agence RP pour aligner les angles presse sur les temps forts de la marque. Lifestyle, food, santé — trois territoires, une même voix.",
            ""
          ),
          imageId: "block-brand-02",
          caption: T("Retombées presse — sélection.", ""),
        },
      ],
    },
    {
      slug: "trade",
      categoryKey: "trade",
      shape: "tall-sm",
      client: "Schär",
      year: "2019 — 2024",
      period: T("2019 → 2024", "2019 → 2024"),
      category: T("Retail · Activation commerciale", "Retail · Trade activation"),
      role: T("Brand Manager", "Brand Manager"),
      team: T("Schär · force de vente · agences PLV", "Schär · sales force · POS agencies"),
      title: T("Trade marketing Schär", "Schär trade marketing"),
      titleItalic: T("Trade", "Trade"),
      pitch: T(
        "La marque Schär en linéaire, partout en France.",
        ""
      ),
      brief: T(
        "Faire émerger Schär en GMS face aux MDD. Visibilité linéaire, opérations commerciales, formation des équipes terrain.",
        ""
      ),
      context: T(
        "PLV permanente et événementielle, plans de masse, opérations promo, prospectus, formation force de vente.",
        ""
      ),
      kpis: [
        { value: "GMS", label: T("Réseau couvert", "Network covered") },
        { value: "FR", label: T("Périmètre", "Scope") },
        { value: "1", label: T("Marque sans-gluten leader", "Leading gluten-free brand") },
      ],
      image: "assets/trade-marketing.jpg",
      tones: { bg: "#f0c84a", ink: "#1a1410", accent: "#d9421e" },
      glyph: "✕",
      blocks: [
        {
          type: "split",
          layout: "image-left",
          label: T("01 — PLV", "01 — POS"),
          title: T("La marque, en relief, en rayon.", ""),
          body: T(
            "PLV permanente et événementielle pensée comme un prolongement de la campagne : mêmes codes, mêmes couleurs, même typo. Le consommateur retrouve en magasin ce qu'il a vu à l'écran.",
            ""
          ),
          imageId: "block-trade-01",
          caption: T("PLV permanente — réseau GMS.", ""),
        },
        {
          type: "media",
          imageId: "block-trade-02",
          caption: T("Plan de masse — temps forts annuels.", ""),
          ratio: "21/9",
        },
        {
          type: "split",
          layout: "image-right",
          label: T("02 — Force de vente", "02 — Sales"),
          title: T("Former, outiller, embarquer.", ""),
          body: T(
            "Création des supports de vente, formations terrain, kits prospectus. La force de vente est la dernière ligne — sans elle, aucun lancement ne tient son objectif.",
            ""
          ),
          imageId: "block-trade-03",
          caption: T("Kits force de vente — saisonniers.", ""),
        },
        {
          type: "quote",
          text: T(
            "Une marque qui ne vit pas en rayon ne vit pas du tout.",
            ""
          ),
          author: T("Note de cadrage — trade Schär.", ""),
        },
      ],
    },
  ],

  /* ── À propos ───────────────────────────────────────── */
  about: {
    eyebrow: T("§ 02 — À propos", "§ 02 — About"),
    titleParts: T(
      [{ n: "Brand & " }, { i: "Product Marketing" }, { n: "." }],
      [{ n: "Brand & " }, { i: "Product Marketing" }, { n: "." }]
    ),
    paragraphs: T(
      [
        "Passionné par le marketing, j'aime travailler les marques dans tous leurs détails : du positionnement et de l'identité jusqu'aux campagnes et aux lancements produits.",
        "J'ai construit cette expérience dans des secteurs exigeants — l'agroalimentaire premium chez Schär, leader européen du sans-gluten, puis les dispositifs médicaux — avant de rejoindre Ludinnov, où j'accompagne le développement de marques sur de nouveaux marchés.",
        "Ce qui me motive : les projets concrets, où la stratégie se voit et se vit. Et aujourd'hui, je regarde vers des univers plus proches du divertissement et du lifestyle.",
      ],
      []
    ),
    timeline: [
      { period: "2024 →", role: T("Marketing Manager", "Marketing Manager"), org: "Ludinnov", note: T("Jeux cognitifs", "Cognitive games") },
      { period: "2018 — 2024", role: T("Brand Manager", "Brand Manager"), org: "Schär", note: T("Food · gluten-free", "Food · gluten-free") },
      { period: "2017 — 2018", role: T("Junior Product Manager", "Junior Product Manager"), org: "Gibaud", note: T("Dispositifs médicaux · alternance", "Medical devices · apprenticeship") },
      { period: "À COMPLÉTER", role: T("Assistant Category Manager", "Assistant Category Manager"), org: "Pierre Martinet", note: T("", "") },
    ],
    portraitInitials: "JM",
    portraitImage: "uploads/photo-profil.jpg",
  },

  /* ── Contact ────────────────────────────────────────── */
  contact: {
    eyebrow: T("§ 03 — Contact", "§ 03 — Get in touch"),
    titleParts: T(
      [
        { n: "À disposition pour " }, { i: "plus d'information" }, { n: "." },
      ],
      [
        { n: "Available for " }, { i: "more information" }, { n: "." },
      ]
    ),
    subtitle: T(
      "",
      ""
    ),
  },

  /* ── Footer ─────────────────────────────────────────── */
  footer: {
    copyright: T("© 2026 Jacques Micholier", "© 2026 Jacques Micholier"),
    place: T("Saint-Étienne — Lyon", "Saint-Étienne — Lyon"),
    signature: T("Conçu à la main. HTML & encre.", "Hand-built. HTML & ink."),
  },
};
