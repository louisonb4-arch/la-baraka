# LEGAL-TODO — La Baraka, smash burgers · Nantes Pirmil

> **Ne pas mettre en ligne avant d'avoir traité la section 1.**
> État au 17 juillet 2026. Aucune donnée n'a été inventée : tout ce qui n'a pas pu être
> vérifié à une source est marqué `[à fournir]` / `[à confirmer]` et apparaît **en
> surbrillance rose sur le site lui-même**, exprès — pour qu'un trou se voie au lieu de se
> combler avec une supposition.

---

## 1. Bloquant avant la mise en ligne

### 1.1 Identité de l'éditeur (`mentions-legales.html`)

| Donnée | État |
|---|---|
| Capital social | **manquant** — obligatoire pour une SAS, ne figure dans aucun registre public |
| RCS | **à confirmer** — « RCS Nantes 931 996 607 » est la forme attendue, non vérifiée à une source |
| Directeur de la publication | **manquant** — voir § 1.2, c'est le point le plus inhabituel du dossier |
| E-mail | **manquant** — apparaît dans les mentions légales, la confidentialité et le bloc accessibilité |
| Enseigne « La Baraka » | **à confirmer** — voir § 1.3 |

Le téléphone (**06 99 84 49 55**) est repris du site actuel : il est déjà renseigné partout.
Aucune adresse e-mail n'est publiée nulle part sur le site — il n'y a donc rien à reprendre.

### 1.2 Deux présidents : lequel dirige la publication ?

Le registre national des entreprises déclare **deux présidents personnes physiques** pour la
SAS BARAKA :

- **Nur AHMED** — Président de SAS
- **Rabi Salim NEBTI** — Président de SAS

C'est un cas inhabituel (une SAS n'a normalement qu'un président ; il s'agit vraisemblablement
d'une présidence conjointe ou d'un changement mal radié au registre). Pour une SAS, le
directeur de la publication est le président, sauf désignation d'une autre personne —
**mais avec deux présidents au registre, il faut savoir lequel des deux assume la fonction.**
Tant que ce n'est pas tranché, le champ reste `[à fournir]`.

> À vérifier au passage auprès du client : la double présidence est-elle réelle et à jour, ou
> le registre est-il en retard sur un changement de dirigeant ?

### 1.3 Le rattachement de l'enseigne n'est pas prouvé

**Ce qui concorde** : la société s'appelle **BARAKA**, son siège est au **16 rue Esnoul des
Châtelets, 44200 Nantes** — l'adresse exacte affichée sur le site — et son code APE est
**56.10C, restauration de type rapide**, ce qui correspond bien à un smash burger.

**Ce qui manque** : **aucune enseigne n'est déclarée au registre**, et la fiche ne comporte
aucun établissement secondaire. Le rattachement du nom commercial « La Baraka » à la société
BARAKA repose donc uniquement sur la concordance du nom, de l'adresse et de l'activité — pas
sur une déclaration. Marqué `[à confirmer]` sur la page par prudence. **À faire confirmer par
le client d'un mot** ; c'est probablement une simple formalité, mais on n'affirme pas une
identité d'éditeur sur une déduction.

### 1.4 Hébergeur (article 6 III-1 LCEN — obligatoire)

Nom, adresse, téléphone et site de l'hébergeur. **Aucun hébergeur n'est mentionné nulle part
dans le site**, donc les quatre champs sont vides dans `mentions-legales.html`, et la durée de
conservation des journaux de connexion est vide dans `politique-confidentialite.html`.

> Un dossier `.vercel/` est présent dans le projet (projet `la-baraka`), ce qui laisse penser
> que l'hébergement se fera chez Vercel — **mais ce n'est pas une source, c'est un indice**.
> Rien n'a été écrit sur cette base. À confirmer, puis renseigner les quatre champs et vérifier
> le **transfert hors UE** (Vercel Inc. est une société américaine) dans la section
> correspondante de `politique-confidentialite.html`.
>
> L'ancien gabarit des mentions légales contenait une phrase « Si le site est hébergé sur
> Vercel : Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789 ». Elle a été **retirée** :
> c'était un exemple conditionnel, pas une donnée vérifiée, et une mention légale n'a pas à
> énoncer d'hypothèses.

### 1.5 La photo de la page d'accueil est chargée chez un tiers — et n'est pas licenciée

La photographie du dip (section « Le dip, c'est sacré ») n'est pas hébergée sur le site :

```html
<img src="https://uploads.lebonbon.fr/source/2025/july/2080138/la-baraka-ok_1_2000.jpg"
     onerror="… this.src='https://tb-static.uber.com/prod/image-proc/…jpeg' …">
```

Deux problèmes distincts, tous deux réels :

1. **Droit d'auteur** — c'est une photo de presse hébergée par **Le Bonbon**, reprise en
   *hotlink* sans licence documentée. Le secours pointe vers le **CDN d'Uber**. Aucun des deux
   n'appartient à la maison. `[licence à obtenir]` sur la page.
2. **Vie privée** — chaque ouverture de la page d'accueil fait contacter `uploads.lebonbon.fr`
   (derrière Cloudflare) par le navigateur du visiteur, ce qui lui transmet son **adresse IP**,
   le référent et son *user-agent*.

**Vérifié le 17 juillet 2026** (`curl -D -` sur les deux URL) : les deux répondent **HTTP 200**
et **aucune ne renvoie d'en-tête `Set-Cookie`**. Ce n'est donc **pas** un traceur au sens de
l'article 82 LIL, et cela ne déclenche pas d'obligation de bannière — mais la fuite d'IP existe
et est décrite honnêtement dans `politique-confidentialite.html`. **La phrase « aucune requête
tierce » ne peut pas être écrite sur ce site tant que cette image n'est pas rapatriée.**

**Correction attendue** : remplacer par une photo dont la maison détient les droits, déposée
dans `img/`. L'image n'a pas été rapatriée d'office : la copier sur le serveur du site
aggraverait le problème de droit d'auteur au lieu de le résoudre. C'est une décision client.

### 1.6 Vérifier avant publication

```bash
grep -rn "à fournir\|à confirmer\|à obtenir" *.html    # ne doit plus rien renvoyer
```

---

## 2. Ce qui a été vérifié (et n'est donc pas à redemander)

Relevé le **17 juillet 2026** au registre national des entreprises via l'API publique
`recherche-entreprises.api.gouv.fr` :

- Dénomination : **BARAKA**
- Forme : **SAS** (code INSEE 5710 — société par actions simplifiée)
- Siège : **16 rue Esnoul des Châtelets, 44200 Nantes**
- SIREN : **931 996 607** · SIRET siège : **931 996 607 00012**
- TVA : **FR44931996607**
- APE : **56.10C — Restauration de type rapide**
- Immatriculation : **12 août 2024**
- Présidents : **Nur Ahmed**, **Rabi Salim Nebti** (voir § 1.2)
- Sigle : aucun · Enseigne : **aucune déclarée** (voir § 1.3)
- Établissements secondaires : **aucun**
- Coordonnées GPS du siège : **47.196836135, -1.541084784**
- État administratif : **actif**

Repris du HTML publié par le client, après vérification :

- Téléphone : **06 99 84 49 55** (cohérent partout dans `index.html`)
- Instagram : **@labaraka_nantes**
- Uber Eats : lien sortant vers la boutique `la-baraka`
- Adresse affichée : **16 rue Esnoul des Châtelets, 44200 Nantes** — identique au siège, donc
  **pas de distinction siège / établissement à faire** dans les mentions légales.

---

## 3. Pages légales : ce qui a été créé, et ce qui ne l'a pas été

### Refaites (les noms de fichiers existants sont conservés)

| Page | Pourquoi |
|---|---|
| `mentions-legales.html` | Obligatoire (art. 6 III LCEN). **Le gabarit à crochets a été remplacé** par les données réelles du registre. |
| `politique-confidentialite.html` | Transparence RGPD. Contient la section cookies, désormais atteignable par l'ancre `#cookies`. |

> **Ce qui existait avant** : deux pages entièrement **génériques**, remplies de crochets
> (`[NOM DE L'ENTREPRISE]`, `[FORME JURIDIQUE]`, `[SIRET]`, `[N° TVA]`, `[NOM DU RESPONSABLE]`,
> `[EMAIL]`, `[NOM DE L'HÉBERGEUR]`…) et d'un exemple d'hébergeur conditionnel. Aucune donnée
> d'identité n'y était réelle. Elles portaient aussi la mention « Ces informations sont fournies
> à titre de base » — un site en ligne ne peut pas publier des mentions légales « à titre de
> base ». Tout cela est remplacé.

### Volontairement non créées

| Page | Pourquoi pas |
|---|---|
| **CGV** | Ce site ne vend rien : le bouton « Commander » ouvre le téléphone (`tel:`), et la livraison part en **lien sortant** vers Uber Eats, qui encaisse sur son propre site. Aucun contrat n'est conclu via ce site. Voir § 5. |
| **CGU** | Aucun compte, aucun contenu déposé par l'utilisateur, aucun service interactif. Sans objet. |
| **Droit de rétractation** | Pas de vente à distance depuis ce site. |
| **Section « Vente d'alcool »** | **La carte ne comporte aucun alcool** — vérifié ligne à ligne : burgers, corn dogs, frites, tiramisu, tarte Daim, et « boisson » incluse dans les menus sans plus de précision. L'art. L3342-1 du code de la santé publique n'a pas d'objet ici. À rouvrir si une carte de bières est ajoutée. |
| **Bannière de consentement cookies** | Voir § 4. |
| **`sitemap.xml`** | Voir § 6. |

---

## 4. Cookies, traceurs, données

### Ce que le site fait réellement — vérifié le 17 juillet 2026

| | |
|---|---|
| Cookies déposés | **aucun** — aucun `Set-Cookie`, y compris sur les deux hôtes tiers de la photo |
| Stockage local | **aucun** — aucune occurrence de `localStorage` / `sessionStorage` dans le code |
| Mesure d'audience | **aucune** — ni `gtag`, ni `analytics`, ni `fbq` |
| Formulaires | **aucun** — aucune balise `<form>` |
| Iframes / widgets | **aucun** — aucune balise `<iframe>` |
| Comptes utilisateurs | **aucun** |
| Newsletter | **aucune** |
| Paiement | **aucun** |
| Requêtes vers des tiers | **une** — la photo du dip, voir § 1.5. **Ce n'est pas zéro.** |

Commandes utilisées :

```bash
grep -rn -iE 'cookie|localStorage|sessionStorage|gtag|analytics|fbq|<iframe|<form' *.html
grep -rhoE '(src|href)="https?://[^"]*"' *.html
curl -s -o /dev/null -D - '<url de la photo>' | grep -i set-cookie
```

### Pourquoi il n'y a pas de bannière

L'article 82 de la loi Informatique et Libertés impose le consentement **avant tout dépôt de
cookie non strictement nécessaire**. Aucun cookie n'étant déposé — vérifié, y compris côté
tiers — il n'y a rien à consentir. Une bannière serait une gêne sans objet. C'est un choix
argumenté, pas un oubli.

**Ce qui déclencherait l'obligation d'en poser une :**

- ajouter Google Analytics, Matomo (en mode non exempté), un pixel Meta ou tout traceur ;
- **intégrer une carte Google Maps en `<iframe>`** (aujourd'hui l'itinéraire est un simple
  lien sortant, exprès) ;
- **intégrer le module de commande Uber Eats** dans les pages (aujourd'hui c'est un lien
  sortant, exprès) ;
- intégrer une vidéo, un widget Instagram ou TikTok ;
- **recharger les polices depuis Google Fonts** — voir ci-dessous.

Dans ces cas : dispositif Refuser / Accepter / Personnaliser, refus aussi simple que
l'acceptation, aucun dépôt avant consentement, lien permanent de modification du choix dans
le pied de page.

### Polices — ce qui a changé le 17 juillet 2026

Le site chargeait **Anton et Archivo depuis `fonts.googleapis.com` et `fonts.gstatic.com`**,
sur les **trois** pages. Chaque visite transmettait donc l'adresse IP du visiteur à Google,
sans consentement — le point précis sur lequel la CNIL et plusieurs autorités européennes ont
sanctionné des éditeurs.

Les deux familles sont désormais **auto-hébergées** dans `assets/font/` (licence SIL OFL 1.1,
sous-ensembles latin + latin-ext, **136 Ko** au total, 6 fichiers) :

- **Anton** — statique, un seul poids (400), 2 fichiers
- **Archivo** — **variable**, axe `wght` 100→900, 2 fichiers (une seule règle `@font-face` par
  sous-ensemble couvre les poids 400 à 800 utilisés par le site)
- **Archivo italique** — statique, poids 400, 2 fichiers

Les `@font-face` sont dans `assets/font/fonts.css`, appelé par les trois pages ; les `<link>`
vers Google et les `<link rel="preconnect">` ont été retirés partout, et deux
`<link rel="preload">` ont été ajoutés sur les woff2 principaux.

**Test de non-régression :**

```bash
grep -rn 'googleapis\|gstatic' . --include='*.html' --include='*.css'
```

Ne doit renvoyer que la ligne de commentaire de `assets/font/fonts.css` (qui explique
précisément pourquoi les polices ont été rapatriées) — aucune balise, aucune `url()`.

---

## 5. Vente en ligne : signalée, pas rédigée

Le site **ne vend rien** et n'encaisse rien. Mais la maison **vend réellement en ligne, via
Uber Eats**, sur `ubereats.com` : la commande, le paiement et la livraison s'y déroulent
entièrement, sous les conditions générales et la politique de confidentialité d'Uber, pas sous
celles de la maison.

Conséquence : **aucune CGV n'est à rédiger pour ce site**, et aucune n'a été rédigée. Il n'y a
pas non plus de CGV existantes à préserver — l'ancien site n'en a aucune, et aucun lien légal
ne pointe vers un site client antérieur.

> À vérifier auprès du client, pour mémoire : si un jour une commande ou un click & collect est
> ouvert **depuis ce site**, alors CGV, droit de rétractation (ou son exclusion pour les denrées
> périssables, art. L221-28 3° du code de la consommation) et médiateur de la consommation
> deviennent obligatoires. Ce n'est pas le cas aujourd'hui.

---

## 6. `sitemap.xml` : non créé, faute de domaine

Le brief prévoit d'ajouter les deux pages légales au `sitemap.xml` avec le domaine déjà utilisé
par le site. **Ce site n'a ni `sitemap.xml`, ni `robots.txt`, ni balise `<link rel="canonical">`,
ni `og:url`** : aucun domaine n'y est écrit nulle part. Le domaine n'a donc pas été inventé et
le fichier n'a pas été créé.

À faire une fois le domaine définitif connu — les deux pages étant en `noindex` (voir § 7), la
question du sitemap ne se pose de toute façon qu'après cet arbitrage.

---

## 7. Points à trancher avec le client

- **`noindex` sur les deux pages légales.** Les deux pages portent
  `<meta name="robots" content="noindex,follow">`, hérité du gabarit et **conservé tel quel**.
  Ce n'est pas illégal — les mentions légales doivent être *accessibles*, pas *indexées* — mais
  OBBO fait l'inverse (`index, follow`). À harmoniser selon la doctrine de l'agence.
- **« Site de démonstration »** dans le pied de page des trois pages. Mention **conservée**,
  elle n'a pas été supprimée en douce. Si le site est encore une démo Vokum non validée par la
  maison, alors **l'éditeur au sens de la LCEN est Vokum, pas la SAS BARAKA**, et l'identité
  publiée dans `mentions-legales.html` est prématurée. À trancher avant toute mise en ligne
  publique : soit la maison valide et devient éditrice, et la mention saute ; soit le site reste
  une démo, et c'est Vokum qui doit s'y déclarer comme éditeur.
- **`.dip-photo:hover { transform: … scale(1.02) }`** dans `index.html` — un zoom sur un
  conteneur de photo, contraire à la règle projet « aucun zoom sur les images ». Hors périmètre
  légal, **non modifié**, signalé pour information.

---

## 8. À vérifier après la mise en ligne

- [ ] `grep -rn "à fournir\|à confirmer\|à obtenir" *.html` ne renvoie plus rien
- [ ] La photo du dip est hébergée sur le site (§ 1.5) et les droits sont documentés
- [ ] Aucune requête tierce dans l'onglet Réseau — impossible tant que § 1.5 n'est pas fait
- [ ] `document.cookie` est vide
- [ ] Les quatre champs de l'hébergeur sont renseignés (§ 1.4)
- [ ] Le directeur de la publication est nommé (§ 1.2)
- [ ] `robots.txt` et `sitemap.xml` pointent le vrai domaine (§ 6)
- [ ] Les liens `/mentions-legales` et `/politique-confidentialite` répondent en production
      (`cleanUrls: true` dans `vercel.json` — les URL sans `.html` sont donc les bonnes)
- [ ] La fiche Google Business est cohérente avec les horaires du site
