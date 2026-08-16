# Mboka — Explore the Democratic Republic of the Congo

> Plateforme éducative bilingue, interactive, installable et utilisable hors connexion.  
> A bilingual educational platform that is interactive, installable, and available offline.

[Application en production / Live application](https://mboka.nuhar.se) · [Présentation complète / Full presentation](PRESENTATION.md) · [Historique / Changelog](CHANGELOG.md) · [Confidentialité / Privacy](https://mboka.nuhar.se/privacy.html)

## Français

Mboka aide les élèves, familles et enseignants à explorer la République démocratique du Congo par des parcours courts, des profils provinciaux, une carte interactive et des jeux.

### Fonctionnalités

- Carte vectorielle interactive à deux niveaux : limites des 26 provinces, couche des 145 territoires regroupés par province et profils provinciaux bilingues
- Histoire des royaumes Kongo, Luba, Lunda et Kuba
- Communautés, langues, environnement, ressources, cuisine, musique, arts et personnalités
- Quiz adaptés aux âges de 7–10 ans, 11–14 ans et 15 ans et plus
- Sprint des provinces en solo ou à deux équipes
- Jeu de mémoire, défi de lingala et découverte quotidienne
- Mathématiques du quotidien avec 10 unités et trois niveaux d’âge
- Parcours musical interactif : notes, portée, touches blanches et touches noires, avec fichiers WAV de secours sur iPhone
- Laboratoire d’échecs interactif en sept sections : règles, tactiques, finales, jeu positionnel et consignes vocales
- Audio par synthèse vocale disponible sur l’appareil, avec `🔊`/`🔇` pour la parole et `♪`/`♫` réservés à la musique
- Badges, scores et progression conservés localement
- Fiches d’activités, plans de leçon et rapports de progression imprimables
- Programme pilote anonyme avec export CSV local
- Installation PWA et fonctionnement hors connexion
- Navigation rapide entre les modules, mise en page adaptative, focus clavier visible et prise en charge de la réduction des animations

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

- Two-level interactive vector map covering all 26 provinces and exactly 145 territories grouped by province, plus bilingual provincial profiles
- History of the Kongo, Luba, Lunda, and Kuba kingdoms
- Communities, languages, environment, resources, food, music, arts, and notable people
- Age-based quizzes for ages 7–10, 11–14, and 15+
- Province Sprint in solo or two-team mode
- Memory game, Lingala challenge, and daily discovery
- Everyday mathematics with 10 units and three age levels
- Interactive music journey covering notes, staff reading, white keys, and black keys, with WAV fallback on iPhone
- Seven-section interactive chess laboratory covering rules, tactics, endings, positional play, and spoken instructions
- Device-provided speech synthesis, using `🔊`/`🔇` for spoken audio and reserving `♪`/`♫` for music
- Badges, scores, and progress stored locally
- Printable worksheets, lesson plans, and progress reports
- Anonymous pilot feedback with local CSV export
- PWA installation and offline use
- Quick module navigation, responsive layout, visible keyboard focus, and reduced-motion support

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

The static production build is generated in `dist/` and deployed through Vercel. `npm test` verifies core security configuration, privacy coverage, bilingual content counts, question banks, all 26 provinces, exactly 145 territories, teacher tools, team mode, mathematics and music content, the seven chess sections, iPhone audio fallback, spoken controls, and offline asset coverage.

Production: [mboka.nuhar.se](https://mboka.nuhar.se)

Photo de l’okapi : [Grace Tshiyonga, via Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Okapi_2.jpg), sous [licence CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).

Limites provinciales : [geoBoundaries COD ADM1](https://www.geoboundaries.org/api/current/gbOpen/COD/ADM1/), données OpenStreetMap/Wambacher sous licence ODbL 1.0. Les limites sont indicatives et utilisées à des fins pédagogiques.

Limites territoriales : [geoBoundaries COD ADM2](https://www.geoboundaries.org/api/current/gbOpen/COD/ADM2/), source Référentiel Géographique Commun/OCHA RDC sous licence CC BY 3.0 IGO. Le catalogue des 145 territoires est recoupé avec la CAID et les publications gouvernementales du PDL-145T.

## Project status

Mboka is production-ready as a privacy-first, device-local educational PWA. Content should continue to be reviewed and expanded with Congolese educators, historians, linguists, and subject specialists. Online accounts or classroom data storage are not currently implemented.
