# Mboka — Explore the Democratic Republic of the Congo

> Plateforme éducative bilingue, interactive, installable et utilisable hors connexion.  
> A bilingual educational platform that is interactive, installable, and available offline.

[Application en production / Live application](https://mboka.nuhar.se) · [Présentation complète / Full presentation](PRESENTATION.md) · [Confidentialité / Privacy](https://mboka.nuhar.se/privacy.html)

## Français

Mboka aide les élèves, familles et enseignants à explorer la République démocratique du Congo par des parcours courts, des profils provinciaux, une carte interactive et des jeux.

### Fonctionnalités

- Profils bilingues des 26 provinces avec chefs-lieux, villes, langues, aliments, économie et lieux célèbres
- Histoire des royaumes Kongo, Luba, Lunda et Kuba
- Communautés, langues, environnement, ressources, cuisine, musique, arts et personnalités
- Quiz adaptés aux âges de 7–10 ans, 11–14 ans et 15 ans et plus
- Sprint des provinces en solo ou à deux équipes
- Jeu de mémoire, défi de lingala et découverte quotidienne
- Mathématiques du quotidien avec 10 unités et trois niveaux d’âge
- Audio par synthèse vocale disponible sur l’appareil
- Badges, scores et progression conservés localement
- Fiches d’activités, plans de leçon et rapports de progression imprimables
- Programme pilote anonyme avec export CSV local
- Installation PWA et fonctionnement hors connexion

### Démarrage local

Prérequis : une version récente de Node.js.

```powershell
npm test
npm run build
npm start
```

Ouvrir ensuite `http://localhost:8080`.

### Confidentialité

Mboka ne demande aucun compte, nom, courriel ou mot de passe. La progression et les réponses facultatives restent dans le stockage local du navigateur. La politique complète est disponible en [français et en anglais](https://mboka.nuhar.se/privacy.html).

## English

Mboka helps students, families, and teachers explore the Democratic Republic of the Congo through short learning journeys, provincial profiles, an interactive map, and games.

### Features

- Bilingual profiles for all 26 provinces, including capitals, towns, languages, food, economy, and notable places
- History of the Kongo, Luba, Lunda, and Kuba kingdoms
- Communities, languages, environment, resources, food, music, arts, and notable people
- Age-based quizzes for ages 7–10, 11–14, and 15+
- Province Sprint in solo or two-team mode
- Memory game, Lingala challenge, and daily discovery
- Everyday mathematics with 10 units and three age levels
- Device-provided speech synthesis
- Badges, scores, and progress stored locally
- Printable worksheets, lesson plans, and progress reports
- Anonymous pilot feedback with local CSV export
- PWA installation and offline use

### Local development

Requirement: a recent Node.js version.

```powershell
npm test
npm run build
npm start
```

Then open `http://localhost:8080`.

### Privacy

Mboka requires no account, name, email address, or password. Progress and optional feedback remain in browser local storage. The complete policy is available in [French and English](https://mboka.nuhar.se/privacy.html).

## Production and validation

The static production build is generated in `dist/` and deployed through Vercel. `npm test` verifies core security configuration, privacy coverage, bilingual content counts, question banks, all 26 provinces, teacher tools, team mode, and offline asset coverage.

Production: [mboka.nuhar.se](https://mboka.nuhar.se)

Photo de l’okapi : [Grace Tshiyonga, via Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Okapi_2.jpg), sous [licence CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).

## Project status

Mboka is production-ready as a privacy-first, device-local educational PWA. Content should continue to be reviewed and expanded with Congolese educators, historians, linguists, and subject specialists. Online accounts or classroom data storage are not currently implemented.
