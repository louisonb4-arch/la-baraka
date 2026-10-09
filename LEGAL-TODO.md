# LEGAL-TODO — La Baraka, smash burgers · Nantes Pirmil

> Fichier interne : exclu du déploiement par `.vercelignore` (il était servi en public avant le 9 oct. 2026).
> État au **9 octobre 2026**.

---

## 1. Reste à fournir par le client

| Donnée | Où | État |
|---|---|---|
| **Adresse e-mail** | mentions légales (éditeur), confidentialité (contact) | `[adresse à communiquer]` en surbrillance rose — seul trou restant. Aucune adresse publique trouvée (Google, Instagram, Facebook). |
| **Directeur de la publication** | mentions légales § 2 | Renseigné **Nur Ahmed** (seul président à l'immatriculation, BODACC du 31/08/2024). Le RNE liste aussi **Rabi Salim Nebti** comme président : faire confirmer lequel assume la fonction. |
| **Téléphone** | partout | Passé de 06 99 84 49 55 (aucune source publique) à **07 68 19 34 23** (fiche Google + Restaurant Guru). Faire confirmer. |
| **Titres-restaurant** | badge carte | Repris de l'ancien site, non vérifiable en ligne. À confirmer ou retirer. |
| **Droits photos** | galerie, hero, dip, carte | Photos du compte Instagram de l'établissement (vidéos d'influenceurs recadrées). Confirmer l'accord des auteurs / personnes visibles. |

```bash
grep -rn "à communiquer" *.html   # doit finir par ne plus rien renvoyer
```

## 2. Vérifié (sources, 9 oct. 2026)

- **BODACC** (avis de création, 31/08/2024) : BARAKA, SAS, **capital 10 €**, **RCS Nantes 931 996 607**, immatriculée le **22/08/2024**, début d'activité 12/08/2024, président Nur Ahmed, activité « restauration rapide — vente de boissons non alcoolisées » (→ pas de section alcool). Dépôt des comptes 2026 : « SAS à associé unique ».
- **RNE** (recherche-entreprises.api.gouv.fr) : SIRET 931 996 607 00012, APE 56.10C, TVA FR44931996607, actif, présidents Nur Ahmed + Rabi Salim Nebti, aucune enseigne déclarée.
- **Google Maps** : 4,8★ · 5 765 avis ; horaires Lun-Mar-Jeu 11h30–14h / 17h30–00h, Mer 11h30–14h30 / 17h30–00h, Ven 17h30–01h, Sam 11h30–01h, Dim 11h30–00h ; tél. 07 68 19 34 23.
- **Le Bonbon** (9 juil. 2025) : N°1 du top 30 Sunday des restos les mieux notés sur Google à Nantes (30 juin 2025) ; citation « Des burgers délicieusement régressifs… ».
- **Instagram** : « Ouvert 7j/7 », halal (حلال).
- **Carte** : prix cohérents avec la fiche Uber Eats indexée (Triple 12 €, menu 15 €, Krunchy 11/13 €, frites cheddar 5,50 €).
- **Hébergeur** : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723 (politique de confidentialité Vercel) ; certifié EU-US Data Privacy Framework. Téléphone +1 951 383 6898 = celui cité par les mentions légales d'autres sites hébergés chez Vercel (Vercel n'en publie pas).

Corrigé sur le site par rapport à l'ancienne version : note 4,9 → **4,8**, horaires (11h → 11h30, 17h15 → 17h30, dim. 23h45 → minuit), téléphone, date d'immatriculation (12 → 22 août 2024), avis Uber Eats invérifiables → extraits d'avis Google datés.

## 3. Pages légales

| Page | Statut |
|---|---|
| `/mentions-legales` | éditeur, publication, hébergeur, PI, carte/allergènes, **conditions d'utilisation (§ 8)** |
| `/politique-confidentialite` | RGPD : responsable, rien de collecté, mesure d'audience sans cookie, journaux Vercel + transfert DPF, droits, CNIL |
| `/cookies` | inventaire (0 cookie), réglage opt-out de la mesure d'audience |
| `/cgu` | redirige vers `/mentions-legales#cgu` — site vitrine sans compte : pas de page CGU dédiée (règle socle Vokum) |
| CGV | sans objet : rien n'est vendu sur le site (téléphone / Uber Eats) |
| Bannière cookies | sans objet : aucun cookie, mesure d'audience exemptée (CNIL) + opt-out |

## 4. Mesure d'audience

`assets/stats.js` charge Vercel Web Analytics (sans cookie) en production, sauf opt-out (`localStorage baraka-stats=off`), GPC ou DNT.
**À activer une fois par le titulaire du compte Vercel** (confirmation interactive obligatoire) :

```bash
cd la-baraka-nantes && npx vercel project web-analytics enable
```

Tant que ce n'est pas fait, `/_vercel/insights/script.js` répond 404 (aucun impact visible).

## 5. À trancher

- **Statut du site** : maquette de prospection, **masquée des moteurs** depuis le 9 oct. 2026 (`<meta name="robots" content="noindex, nofollow">` sur l'accueil + en-tête `X-Robots-Tag` dans `vercel.json`), comme Jimmy's. À la validation par l'établissement : retirer les deux, garder `robots.txt` et `sitemap.xml` tels quels.
- **Domaine** : `la-baraka-jet.vercel.app`. En cas de nom de domaine propre, mettre à jour canonical, `og:url`, `og:image`, JSON-LD, `sitemap.xml`, `robots.txt`.
