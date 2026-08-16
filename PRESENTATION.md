# Mboka — Explorer la République démocratique du Congo

> Jeu éducatif bilingue, interactif, installable et utilisable hors connexion.

[Ouvrir Mboka](https://mboka.nuhar.se) · [Code source](https://github.com/MungangaThelly/mboka)

---

## Présentation en français

### Le projet

**Mboka** est une plateforme éducative qui aide les élèves, les familles et les enseignants à découvrir la République démocratique du Congo de manière ludique.

Le projet transforme la culture générale en parcours courts, jeux, cartes, quiz et défis. Son objectif est de développer la curiosité, la connaissance du pays et la fierté de son patrimoine, tout en respectant la diversité de ses populations et de ses régions.

### Public concerné

- Élèves du primaire et du secondaire
- Enseignants et établissements scolaires
- Parents et familles
- Diaspora congolaise
- Toute personne souhaitant mieux connaître la RDC

### Contenus éducatifs

Mboka introduit notamment :

- Le pays, ses symboles et sa géographie
- Les 26 provinces et leurs chefs-lieux
- Les fleuves, rivières, lacs, forêts et reliefs
- La faune, la biodiversité et les espaces protégés
- Les langues nationales et la diversité culturelle
- L’histoire et la mémoire collective
- La musique, la rumba congolaise et les arts
- Les aliments, plats et traditions culinaires
- Les minerais, les savoir-faire et l’exploitation responsable

Les regroupements régionaux et la carte intégrée servent à l’apprentissage. Les limites ouvertes des 26 provinces et des 145 territoires sont indicatives et ne remplacent pas une carte administrative officielle.

### Expérience d’apprentissage

- **Parcours thématiques** avec faits et explications
- **Profils bilingues des 26 provinces**
- **Carte vectorielle interactive à deux niveaux** montrant les 26 provinces et exactement 145 territoires regroupés par province
- **Quiz par âge** : Explorateur (7–10 ans), Aventurier (11–14 ans) et Maître (15 ans et plus)
- **Sprint des provinces** en solo ou en mode classe à deux équipes pour associer provinces et chefs-lieux
- **Jeu de mémoire** autour des trésors du Congo
- **Mathématiques du quotidien** avec 10 unités contextualisées et trois niveaux d’âge
- **Parcours musical interactif** pour écouter, lire une portée et jouer sur les touches blanches et noires, avec lecture WAV compatible iPhone
- **Laboratoire d’échecs interactif** en sept sections, des règles fondamentales au calcul positionnel, avec consignes vocales
- **Découverte quotidienne**, calendrier et série d’apprentissage
- **Audio accessible** pour écouter les provinces, chefs-lieux, introductions et consignes ; `🔊`/`🔇` identifient la parole, tandis que `♪`/`♫` restent associés à la musique
- **Badges, scores et progression** enregistrés sur l’appareil
- **Français et anglais** pour l’interface et les contenus principaux

### Outils pour les enseignants

L’espace enseignant permet de :

- Générer une fiche de 5 ou 10 questions
- Mélanger automatiquement les questions
- Ajouter ou masquer le corrigé
- Imprimer la fiche ou l’enregistrer en PDF
- Générer et imprimer un plan de leçon de 45 minutes
- Imprimer un rapport individuel de progression enregistré sur l’appareil
- Organiser une activité sans créer de compte

Le **Programme pilote** recueille des évaluations anonymes sur la facilité d’utilisation, le plaisir, l’apprentissage et l’activité préférée. Les réponses restent sur l’appareil et peuvent être exportées au format CSV.

### Confidentialité et sécurité

Mboka applique une approche de minimisation des données :

- Aucun compte utilisateur, mot de passe ou paiement
- Aucun nom ou courriel demandé dans le programme pilote
- Progression et réponses enregistrées localement dans le navigateur
- Aucune publicité, aucun cookie de suivi et aucun profilage
- Aucun accès à la caméra, au microphone ou à la position
- HTTPS, HSTS et politique de sécurité du contenu
- Protections contre l’intégration dans une page tierce et la détection incorrecte des fichiers
- Dépendances externes supprimées de l’interface principale

La politique complète, disponible en français et en anglais, se trouve sur la [page de confidentialité](https://mboka.nuhar.se/privacy.html).

### Installation et fonctionnement hors connexion

Mboka est une Progressive Web App (PWA). Depuis un navigateur compatible :

1. Ouvrir [mboka.nuhar.se](https://mboka.nuhar.se).
2. Sélectionner **Installer** dans l’interface ou le menu du navigateur.
3. Attendre le premier chargement complet.
4. Utiliser ensuite les contenus mis en cache, même sans connexion continue.

Chaque appareil doit charger et installer Mboka une première fois avec une connexion.

### Architecture technique

- HTML, CSS et JavaScript natifs
- Aucun framework ni dépendance d’exécution
- Stockage local du navigateur pour la progression
- Web Speech API pour la lecture audio
- Manifest PWA et service worker avec cache hors connexion
- Générateur de fiches et export CSV exécutés dans le navigateur
- Construction statique sans dépendance
- Hébergement HTTPS sur Vercel
- Code versionné sur GitHub

Commandes locales :

```powershell
npm test
npm run build
node server.js
```

Puis ouvrir `http://localhost:8080`.

### Validation automatisée

La commande `npm test` contrôle notamment :

- Les principaux en-têtes de sécurité
- La présence de la politique de confidentialité
- La présence de la politique de confidentialité complète en anglais
- L’absence de dépendance réseau dans la page principale
- Les 26 provinces et leurs données associées
- Les banques de questions françaises et anglaises
- La cohérence entre les fichiers construits et le cache hors connexion
- L’absence de champs d’identité dans le questionnaire pilote

### État et limites

Mboka constitue une fondation éducative fonctionnelle, mais ne prétend pas encore contenir tout le savoir sur la RDC.

Les contenus doivent continuer à être relus par des éducateurs, historiens, linguistes et spécialistes congolais. Les futurs développements pourront approfondir les fiches des territoires, les villes, les personnalités, les langues, les climats, les recettes, les œuvres, les périodes historiques et les réalités propres à chaque province.

### Feuille de route proposée

1. Organiser un pilote avec 5 à 10 élèves et un enseignant.
2. Analyser les réponses anonymes exportées.
3. Faire relire les contenus par des éducateurs congolais.
4. Ajouter des sources visibles aux leçons.
5. Développer Lingala, Swahili, Kikongo et Tshiluba avec des locuteurs qualifiés.
6. Faire relire et approfondir progressivement les profils déjà disponibles pour les 26 provinces.
7. Améliorer l’accessibilité et tester davantage d’appareils.

---

## English presentation

### The project

**Mboka** is an educational platform that helps students, families, and teachers discover the Democratic Republic of the Congo through play.

The project turns general knowledge into short journeys, games, maps, quizzes, and challenges. Its purpose is to build curiosity, knowledge of the country, and pride in its heritage while respecting the diversity of its people and regions.

### Intended audience

- Primary and secondary students
- Teachers and schools
- Parents and families
- The Congolese diaspora
- Anyone wishing to learn more about the DRC

### Educational content

Mboka introduces:

- The country, its symbols, and geography
- All 26 provinces and their capitals
- Rivers, lakes, forests, and landforms
- Wildlife, biodiversity, and protected areas
- National languages and cultural diversity
- History and collective memory
- Music, Congolese rumba, and the arts
- Food and culinary traditions
- Minerals, skills, and responsible use of resources

The regional groupings and built-in map are learning aids. Its open-data boundaries for the 26 provinces and 145 territories are indicative and do not replace an official administrative map.

### Learning experience

- **Thematic journeys** with facts and explanations
- **Bilingual profiles for all 26 provinces**
- **Two-level interactive vector map** showing all 26 provinces and exactly 145 territories grouped by province
- **Age-based quizzes**: Explorer (ages 7–10), Adventurer (ages 11–14), and Master (ages 15+)
- **Province Sprint** in solo or two-team classroom mode, matching provinces with their capitals
- **Memory game** featuring treasures of the Congo
- **Everyday mathematics** with 10 contextualised units and three age levels
- **Interactive music journey** for listening, staff reading, and playing white and black keys, with iPhone-compatible WAV playback
- **Seven-section interactive chess laboratory**, from fundamental rules to positional calculation, with spoken instructions
- **Daily discovery**, calendar, and learning streak
- **Audio** for province names, capitals, and lesson introductions
- **Badges, scores, and progress** stored on the device
- **French and English** for the interface and principal content

### Teacher tools

The teacher area can:

- Generate a 5- or 10-question worksheet
- Shuffle questions automatically
- Include or hide the answer key
- Print the worksheet or save it as a PDF
- Generate and print a 45-minute lesson plan
- Print an individual progress report stored on the device
- Run activities without creating accounts

The **Pilot Program** collects anonymous ratings for usability, enjoyment, learning, and favourite activities. Responses remain on the device and can be exported as CSV.

### Privacy and security

Mboka follows a data-minimisation approach:

- No user accounts, passwords, or payments
- No names or email addresses requested by the pilot program
- Progress and responses stored locally in the browser
- No advertising, tracking cookies, or profiling
- No access to the camera, microphone, or location
- HTTPS, HSTS, and Content Security Policy
- Protection against third-party framing and MIME sniffing
- External interface dependencies removed

The complete notice is available in French and English on the [privacy page](https://mboka.nuhar.se/privacy.html).

### Installation and offline use

Mboka is a Progressive Web App (PWA). From a compatible browser:

1. Open [mboka.nuhar.se](https://mboka.nuhar.se).
2. Select **Install** in Mboka or the browser menu.
3. Allow the first complete load to finish.
4. Continue using cached learning content without a continuous connection.

Each device must load and install Mboka once while connected.

### Technical architecture

- Native HTML, CSS, and JavaScript
- No runtime framework or dependencies
- Browser local storage for progress
- Web Speech API for spoken content, Web Audio for generated notes, and WAV fallback for reliable iPhone playback
- PWA manifest and service worker for offline caching
- In-browser worksheet generation and CSV export
- Zero-dependency static build
- HTTPS hosting on Vercel
- Source control on GitHub

Local commands:

```powershell
npm test
npm run build
node server.js
```

Then open `http://localhost:8080`.

### Automated validation

The `npm test` command checks:

- Principal security headers
- Presence of the privacy notice
- Presence of the complete English privacy information
- Absence of external network dependencies in the main page
- All 26 provinces and their associated data
- French and English question banks
- Alignment between build files and the offline cache
- Absence of identity fields in the pilot questionnaire

### Current status and limitations

Mboka is a functional educational foundation, but it does not yet claim to contain all knowledge about the DRC.

Congolese educators, historians, linguists, and subject specialists should continue reviewing the content. Future development can deepen coverage of territories, cities, notable people, languages, climates, recipes, art, historical periods, and the realities of each province.

### Proposed roadmap

1. Run a pilot with 5–10 students and one teacher.
2. Analyse the exported anonymous feedback.
3. Review the content with Congolese educators.
4. Add visible sources to lessons.
5. Develop Lingala, Swahili, Kikongo, and Tshiluba with qualified speakers.
6. Continue reviewing and deepening the profiles already available for all 26 provinces.
7. Improve accessibility and test more devices.

---

## Project links

- Live application: [https://mboka.nuhar.se](https://mboka.nuhar.se)
- Privacy: [https://mboka.nuhar.se/privacy.html](https://mboka.nuhar.se/privacy.html)
- GitHub: [https://github.com/MungangaThelly/mboka](https://github.com/MungangaThelly/mboka)
