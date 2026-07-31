function safeJsonArray(key){try{const value=JSON.parse(localStorage.getItem(key)||'[]');return Array.isArray(value)?value:[]}catch{return[]}}

const journeys = [
  {icon:'⌖', title:'Terres & provinces', text:'Cartes, villes, reliefs et frontières.', color:'#f0bd5b'},
  {icon:'≈', title:'Fleuves & forêts', text:'Le bassin du Congo et ses écosystèmes.', color:'#78aaa0'},
  {icon:'✦', title:'Peuples & langues', text:'Une mosaïque de langues et de traditions.', color:'#df7650'},
  {icon:'♫', title:'Arts & musique', text:'De la rumba congolaise aux arts vivants.', color:'#b9cf7b'},
  {icon:'◈', title:'Faune & nature', text:'Okapis, bonobos, gorilles et grands parcs.', color:'#90ae70'},
  {icon:'◆', title:'Minerais & savoir-faire', text:'Ressources, métiers et innovation responsable.', color:'#91a3a4'},
  {icon:'♨', title:'Saveurs du pays', text:'Plats, ingrédients et traditions culinaires.', color:'#e4a164'},
  {icon:'⌛', title:'Histoire & mémoire', text:'Des royaumes anciens à la RDC contemporaine.', color:'#c49e81'}
];

const lessonDetails = [
  {lead:'La RDC est un immense pays d’Afrique centrale organisé en 26 provinces, chacune avec son chef-lieu et son identité.',facts:[['26 provinces','Kinshasa possède à la fois le statut de ville et de province.'],['9 voisins','La RDC partage ses frontières avec neuf pays.'],['Reliefs variés','Bassin central, plateaux, montagnes et volcans façonnent le territoire.']]},
  {lead:'L’eau et la forêt relient les communautés, nourrissent une biodiversité exceptionnelle et influencent la vie quotidienne.',facts:[['Fleuve Congo','Un vaste réseau de cours d’eau traverse le cœur du pays.'],['Forêt tropicale','Une grande partie de la forêt du bassin du Congo se trouve en RDC.'],['Lacs de l’Est','Les lacs Tanganyika, Kivu, Édouard et Albert bordent ou touchent la RDC.']]},
  {lead:'La diversité humaine de la RDC se raconte à travers de nombreuses communautés, langues, récits et traditions.',facts:[['Français','C’est la langue officielle du pays.'],['4 langues nationales','Lingala, swahili, kikongo et tshiluba.'],['Transmission','Les proverbes et récits oraux transmettent savoirs et valeurs.']]},
  {lead:'La musique, la danse et les arts visuels congolais rayonnent bien au-delà des frontières du pays.',facts:[['Rumba congolaise','Elle est inscrite au patrimoine culturel immatériel de l’humanité.'],['Danse et scène','La musique accompagne fêtes, rencontres et récits populaires.'],['Arts multiples','Peinture, sculpture, mode, littérature et cinéma enrichissent la création.']]},
  {lead:'Des forêts profondes aux savanes, la RDC protège des espèces et des milieux naturels uniques.',facts:[['Okapi','Ce mammifère forestier est endémique de la RDC à l’état sauvage.'],['Bonobo','Ce grand singe ne vit naturellement qu’au sud du fleuve Congo.'],['Patrimoine mondial','Cinq sites naturels de RDC sont inscrits par l’UNESCO.']]},
  {lead:'Comprendre les minerais implique aussi de parler du travail, de l’environnement et du partage responsable.',facts:[['Cuivre et cobalt','Ils sont particulièrement associés au sud-est du pays.'],['De la mine à l’objet','Les minerais entrent dans la fabrication de nombreux outils modernes.'],['Responsabilité','Sécurité, traçabilité et protection de la nature sont essentielles.']]},
  {lead:'Les cuisines congolaises varient selon les régions et célèbrent les produits cultivés, pêchés et préparés localement.',facts:[['Fufu','Une pâte d’accompagnement préparée avec du manioc ou du maïs.'],['Pondu','Des feuilles de manioc pilées et longuement cuisinées.'],['Liboke','Une méthode de cuisson en papillote, souvent dans des feuilles.']]},
  {lead:'Explorer l’histoire, c’est relier les royaumes anciens, les échanges, la colonisation, l’indépendance et les voix contemporaines.',facts:[['Royaumes anciens','Les royaumes Kongo, Luba et Lunda comptent parmi les grands ensembles historiques.'],['30 juin 1960','Date de l’indépendance de la République démocratique du Congo.'],['Mémoire vivante','Archives, monuments, chants et témoignages transmettent l’histoire.']]}
];

const provinces = [
  ['Bas-Uele','Buta'],['Équateur','Mbandaka'],['Haut-Katanga','Lubumbashi'],['Haut-Lomami','Kamina'],['Haut-Uele','Isiro'],['Ituri','Bunia'],['Kasaï','Luebo'],['Kasaï-Central','Kananga'],['Kasaï-Oriental','Mbuji-Mayi'],['Kinshasa','Kinshasa'],['Kongo-Central','Matadi'],['Kwango','Kenge'],['Kwilu','Bandundu'],['Lomami','Kabinda'],['Lualaba','Kolwezi'],['Mai-Ndombe','Inongo'],['Maniema','Kindu'],['Mongala','Lisala'],['Nord-Kivu','Goma'],['Nord-Ubangi','Gbadolite'],['Sankuru','Lusambo'],['Sud-Kivu','Bukavu'],['Sud-Ubangi','Gemena'],['Tanganyika','Kalemie'],['Tshopo','Kisangani'],['Tshuapa','Boende']
];

const provinceDetails = [
  ['Nord','Rivière Uele','Forêts et savanes du nord autour de Buta.'],['Ouest','Fleuve Congo et rivière Ruki','Mbandaka se trouve près de la rencontre du Congo et de la Ruki.'],['Sud','Ceinture cuprifère','Lubumbashi est un grand centre culturel et économique du sud-est.'],['Sud','Plateaux et hauts bassins','Kamina est un carrefour important du sud du pays.'],['Nord','Parc national de la Garamba','La province associe savanes, rivières et espaces protégés.'],['Est','Lac Albert et forêt de l’Ituri','Bunia ouvre sur des paysages de forêt, de lac et de montagnes.'],['Centre','Rivière Kasaï','Luebo appartient au vaste bassin hydrographique du Kasaï.'],['Centre','Rivière Lulua','Kananga est un grand centre urbain au cœur du pays.'],['Centre','Diamant et rivière Sankuru','Mbuji-Mayi est connue comme un important centre diamantifère.'],['Ouest','Fleuve Congo','La capitale nationale fait face à Brazzaville sur le fleuve.'],['Ouest','Océan Atlantique et chutes d’Inga','C’est la seule province de RDC possédant une façade maritime.'],['Ouest','Rivière Kwango','Kenge se trouve dans une région de plateaux et de cours d’eau.'],['Ouest','Rivières Kwilu et Kasaï','Bandundu est située près du confluent du Kwilu et du Kasaï.'],['Centre','Rivière Lomami','Kabinda se trouve dans les paysages du centre-sud.'],['Sud','Cuivre, cobalt et Lualaba','Kolwezi est un centre majeur de la région minière du sud.'],['Ouest','Lac Mai-Ndombe','Inongo se trouve sur la rive du grand lac qui donne son nom à la province.'],['Est','Rivière Lualaba','Kindu est un port fluvial important au centre-est.'],['Nord','Fleuve Congo','Lisala domine une partie du grand couloir fluvial congolais.'],['Est','Lac Kivu et volcan Nyiragongo','Goma se situe entre le lac Kivu et la chaîne des Virunga.'],['Nord','Rivière Ubangi','Gbadolite se trouve dans les paysages boisés du nord-ouest.'],['Centre','Rivière Sankuru','Lusambo est liée au réseau fluvial du centre du pays.'],['Est','Lac Kivu et Kahuzi-Biega','Bukavu s’étend sur les rives du lac Kivu.'],['Nord','Bassin de l’Ubangi','Gemena est entourée de terres agricoles et de cours d’eau.'],['Est','Lac Tanganyika','Kalemie est une grande ville portuaire sur le lac Tanganyika.'],['Nord','Chutes Boyoma et fleuve Congo','Kisangani se trouve en aval des célèbres chutes Boyoma.'],['Nord','Rivière Tshuapa et forêt équatoriale','Boende se situe au cœur d’un vaste paysage forestier.']
];

const mapPositions = [[53,14],[32,32],[65,86],[61,76],[67,17],[76,28],[40,63],[46,68],[52,67],[26,65],[20,74],[31,72],[34,60],[56,70],[51,85],[28,48],[61,53],[41,22],[78,42],[31,13],[52,56],[74,55],[24,22],[69,68],[58,34],[45,38]];

// Introductory snapshots: languages, foods and communities can cross borders.
const provinceProfiles = [
  ['Aketi, Bondo','Lingala, français et langues locales','Manioc, banane plantain et poisson de rivière','Agriculture, forêt et commerce local','Rivière Uele et paysages de savane'],
  ['Bikoro, Basankusu','Lingala, français et langues mongo','Poisson, chikwangue et produits forestiers','Pêche, agriculture et transport fluvial','Jardin botanique d’Eala et fleuve Congo'],
  ['Likasi, Kasumbalesa','Swahili, français et langues locales','Bukari, haricots et légumes-feuilles','Cuivre, cobalt, industrie et commerce frontalier','Chutes de la Lofoï et musées de Lubumbashi'],
  ['Bukama, Malemba-Nkulu','Swahili, français et langues locales','Maïs, manioc et poisson','Agriculture, pêche et transport ferroviaire','Parc national de l’Upemba'],
  ['Watsa, Dungu','Lingala, français, pazande et langues locales','Manioc, arachides et produits de savane','Agriculture, or et élevage','Parc national de la Garamba'],
  ['Aru, Mahagi, Mambasa','Swahili, français et langues de l’Ituri','Banane plantain, manioc et poisson','Agriculture, commerce, or et élevage','Réserve de faune à okapis et lac Albert'],
  ['Tshikapa, Ilebo','Tshiluba, français et langues locales','Fufu, feuilles de manioc et poisson','Diamant, agriculture et commerce','Rivière Kasaï et paysages de Tshikapa'],
  ['Tshimbulu, Demba','Tshiluba et français','Fufu de maïs ou manioc, légumes-feuilles','Agriculture, commerce et artisanat','Rivière Lulua et sites culturels de Kananga'],
  ['Miabi, Tshilenge','Tshiluba et français','Fufu, haricots et feuilles de manioc','Diamant, agriculture et commerce','Rivière Mbuji-Mayi et paysages du Kasaï'],
  ['Maluku, Nsele','Lingala et français, avec de nombreuses langues du pays','Liboke, pondu, chikwangue et cuisine urbaine','Services, commerce, culture et industries','Fleuve Congo, Mont Ngaliema et Académie des beaux-arts'],
  ['Boma, Muanda, Mbanza-Ngungu','Kikongo ya leta, français et langues kongo','Chikwangue, poisson, saka-saka et noix de palme','Ports, agriculture, énergie et commerce','Côte atlantique, Inga et ancien paysage de Mbanza Kongo'],
  ['Kasongo-Lunda, Popokabaka','Kikongo ya leta, français et langues locales','Manioc, maïs et produits agricoles','Agriculture, élevage et commerce','Rivière Kwango et plateaux du sud-ouest'],
  ['Kikwit, Bulungu, Idiofa','Kikongo ya leta, français et langues locales','Fufu, poisson et légumes-feuilles','Agriculture, commerce et transformation alimentaire','Rivières Kwilu et Kasaï'],
  ['Mwene-Ditu, Lubao','Tshiluba, français et langues locales','Fufu, manioc, maïs et arachides','Agriculture, transport et commerce','Rivière Lomami et carrefour de Mwene-Ditu'],
  ['Dilolo, Fungurume','Swahili, français et langues locales','Bukari, haricots et légumes','Cuivre, cobalt, industrie et transport','Gorges de la Lufira et paysages du plateau minier'],
  ['Kutu, Mushie','Lingala, kikongo ya leta, français et langues locales','Poisson, manioc et produits forestiers','Pêche, agriculture et transport lacustre','Lac Mai-Ndombe et forêt du bassin central'],
  ['Kasongo, Punia','Swahili, français et langues locales','Riz, manioc, poisson et banane plantain','Agriculture, or, étain et transport fluvial','Fleuve Lualaba et forêt de Maniema'],
  ['Bumba, Bongandanga','Lingala, français et langues locales','Poisson, manioc et banane plantain','Agriculture, forêt et transport fluvial','Fleuve Congo et plantations de Bumba'],
  ['Beni, Butembo','Swahili, français, kinande et autres langues locales','Banane plantain, haricots, manioc et pommes de terre','Agriculture, commerce et tourisme naturel','Virunga, lac Kivu et volcans Nyiragongo–Nyamulagira'],
  ['Bosobolo, Yakoma','Lingala, français et langues de l’Ubangi','Manioc, arachides, poisson et produits agricoles','Agriculture, élevage et commerce transfrontalier','Rivière Ubangi et paysages de Gbadolite'],
  ['Lodja, Kole','Tshiluba, lingala, français et langues locales','Manioc, maïs, poisson et produits forestiers','Agriculture, forêt et commerce','Rivière Sankuru et paysages du centre'],
  ['Uvira, Baraka','Swahili, français, mashi et autres langues locales','Sambaza, banane plantain, haricots et manioc','Agriculture, pêche, commerce et élevage','Lac Kivu, lac Tanganyika et parc de Kahuzi-Biega'],
  ['Zongo, Libenge','Lingala, français et langues de l’Ubangi','Manioc, maïs, poisson et arachides','Agriculture, commerce et transport fluvial','Rivière Ubangi et ville frontalière de Zongo'],
  ['Kongolo, Moba','Swahili, français et langues locales','Poisson du Tanganyika, manioc et maïs','Pêche, agriculture, mines et transport lacustre','Lac Tanganyika et parc national de Kundelungu'],
  ['Bafwasende, Banalia, Ubundu','Swahili, lingala, français et langues locales','Poisson, banane plantain, riz et manioc','Agriculture, forêt, commerce et transport fluvial','Chutes Boyoma et fleuve Congo'],
  ['Ikela, Monkoto','Lingala, français et langues mongo','Manioc, poisson et produits forestiers','Agriculture, forêt, pêche et transport fluvial','Rivière Tshuapa et parc national de la Salonga']
];

const questions = [
  {topic:'GÉOGRAPHIE', q:'Quelle est la capitale de la RDC ?', a:['Kinshasa','Kisangani','Lubumbashi','Matadi'], correct:0, fact:'Kinshasa est la capitale et une ville-province.'},
  {topic:'PROVINCES', q:'Combien de provinces compte la RDC ?', a:['10','18','26','32'], correct:2, fact:'Depuis le découpage territorial appliqué en 2015, la RDC compte 26 provinces.'},
  {topic:'NATURE', q:'Quel animal rare est un symbole naturel de la RDC ?', a:['Le panda','L’okapi','Le kangourou','Le lama'], correct:1, fact:'L’okapi vit à l’état sauvage dans les forêts du nord-est de la RDC.'},
  {topic:'LANGUES', q:'Quelle est la langue officielle de la RDC ?', a:['Le français','Le portugais','L’anglais','L’arabe'], correct:0, fact:'Le français est la langue officielle; le lingala, le swahili, le kikongo et le tshiluba sont des langues nationales.'},
  {topic:'EAUX', q:'Quel grand fleuve traverse une vaste partie du pays ?', a:['Le Nil','Le Niger','Le Congo','Le Zambèze'], correct:2, fact:'Le fleuve Congo structure la géographie, les transports et de nombreuses vies locales.'},
  {topic:'PROVINCES', q:'Quel est le chef-lieu du Haut-Katanga ?', a:['Goma','Lubumbashi','Bunia','Boende'], correct:1, fact:'Lubumbashi est le chef-lieu du Haut-Katanga.'},
  {topic:'CULTURE', q:'Quel style musical congolais est inscrit au patrimoine culturel immatériel de l’UNESCO ?', a:['Le flamenco','La rumba congolaise','Le reggae','Le tango'], correct:1, fact:'La rumba congolaise est partagée par la RDC et la République du Congo.'},
  {topic:'FORÊTS', q:'La grande forêt de la RDC fait partie de quel bassin ?', a:['Du bassin du Congo','Du bassin amazonien','Du bassin du Danube','Du bassin du Gange'], correct:0, fact:'Le bassin du Congo abrite la deuxième plus grande forêt tropicale humide du monde.'},
  {topic:'VOLCANS', q:'Dans quelle région trouve-t-on les volcans Nyiragongo et Nyamulagira ?', a:['Le Kasaï','Le Kongo-Central','Les Virunga','Le Kwango'], correct:2, fact:'La chaîne des Virunga se situe dans l’est de la RDC et les pays voisins.'},
  {topic:'PROVINCES', q:'Quel est le chef-lieu du Kongo-Central ?', a:['Matadi','Kenge','Kindu','Isiro'], correct:0, fact:'Matadi, près du fleuve Congo, est le chef-lieu du Kongo-Central.'}
];

const explorerQuestions=[
  {topic:'PAYS',q:'Quelle est la capitale de la RDC ?',a:['Kinshasa','Goma','Bunia','Matadi'],correct:0,fact:'Kinshasa est la capitale et la plus grande ville du pays.'},
  {topic:'ANIMAUX',q:'Quel animal aux pattes rayées vit dans les forêts de la RDC ?',a:['L’okapi','Le zèbre','Le lama','Le panda'],correct:0,fact:'L’okapi ressemble un peu à une girafe et porte des rayures sur les pattes.'},
  {topic:'EAUX',q:'Comment s’appelle le grand fleuve du pays ?',a:['Congo','Nil','Sénégal','Orange'],correct:0,fact:'Le fleuve Congo et ses affluents forment un immense réseau d’eau.'},
  {topic:'PROVINCES',q:'Combien de provinces peut-on explorer en RDC ?',a:['12','20','26','40'],correct:2,fact:'La RDC compte 26 provinces, y compris la ville-province de Kinshasa.'},
  {topic:'LANGUES',q:'Quelle est la langue officielle de la RDC ?',a:['Français','Japonais','Espagnol','Allemand'],correct:0,fact:'Le français est officiel et quatre langues ont le statut de langues nationales.'},
  {topic:'MUSIQUE',q:'Quelle musique célèbre fait danser les deux Congo ?',a:['Rumba congolaise','Polka','Samba','Country'],correct:0,fact:'La rumba congolaise associe musique, danse et transmission culturelle.'},
  {topic:'NATURE',q:'Quel grand milieu naturel couvre une partie importante du pays ?',a:['La forêt tropicale','Le désert de glace','La toundra','La banquise'],correct:0,fact:'La forêt de la RDC appartient au grand bassin du Congo.'},
  {topic:'PROVINCES',q:'Quel est le chef-lieu du Nord-Kivu ?',a:['Goma','Kananga','Boende','Kenge'],correct:0,fact:'Goma se trouve au bord du lac Kivu, près des Virunga.'},
  {topic:'DRAPEAU',q:'Quelle couleur forme le fond du drapeau de la RDC ?',a:['Bleu','Vert','Noir','Orange'],correct:0,fact:'Le drapeau a un fond bleu, une étoile jaune et une bande rouge bordée de jaune.'},
  {topic:'LACS',q:'Sur quel grand lac se trouve la ville de Kalemie ?',a:['Tanganyika','Tchad','Victoria','Malawi'],correct:0,fact:'Kalemie est une ville portuaire sur le lac Tanganyika.'}
];
const masterQuestions=[
  {topic:'HYDROGRAPHIE',q:'Quelle particularité mondiale est associée au fleuve Congo ?',a:['C’est le plus profond','C’est le plus long','Il ne traverse aucune forêt','Il est entièrement artificiel'],correct:0,fact:'Le Congo est reconnu comme le fleuve le plus profond du monde.'},
  {topic:'PATRIMOINE',q:'Combien de sites naturels de RDC figurent sur la Liste du patrimoine mondial ?',a:['3','5','7','10'],correct:1,fact:'Virunga, Garamba, Kahuzi-Biega, Salonga et la Réserve de faune à okapis sont inscrits.'},
  {topic:'GÉOGRAPHIE',q:'Quel est le seul territoire provincial doté d’une façade atlantique ?',a:['Kongo-Central','Kwilu','Kinshasa','Mai-Ndombe'],correct:0,fact:'Le Kongo-Central relie l’intérieur du pays à l’océan Atlantique.'},
  {topic:'BIODIVERSITÉ',q:'Quel grand singe est endémique de la RDC ?',a:['Bonobo','Orang-outan','Gibbon','Babouin'],correct:0,fact:'Le bonobo vit naturellement uniquement en RDC, au sud du fleuve Congo.'},
  {topic:'PROVINCES',q:'Mbandaka est située près de la rencontre du Congo et de quelle rivière ?',a:['Ruki','Kwango','Lomami','Lufira'],correct:0,fact:'La rivière Ruki rejoint le fleuve Congo près de Mbandaka.'},
  {topic:'RELIEF',q:'À quel grand ensemble géologique appartiennent les Virunga ?',a:['Rift Albertin','Atlas','Drakensberg','Hoggar'],correct:0,fact:'Les Virunga se trouvent dans le secteur du Rift Albertin, branche occidentale du Rift est-africain.'},
  {topic:'MINERAIS',q:'Dans quelle partie du pays se concentre la ceinture du cuivre ?',a:['Sud-est','Nord-ouest','Centre-nord','Côte atlantique'],correct:0,fact:'Le cuivre et le cobalt sont fortement associés au Haut-Katanga et au Lualaba.'},
  {topic:'HISTOIRE',q:'À quelle date la RDC a-t-elle accédé à l’indépendance ?',a:['30 juin 1960','4 janvier 1959','17 mai 1997','1 août 1885'],correct:0,fact:'L’indépendance vis-à-vis de la Belgique a été proclamée le 30 juin 1960.'},
  {topic:'PROVINCES',q:'Quelle province a pour chef-lieu Lusambo ?',a:['Sankuru','Lomami','Tshuapa','Kwango'],correct:0,fact:'Lusambo est le chef-lieu de la province du Sankuru.'},
  {topic:'CONSERVATION',q:'Quel parc protège notamment le gorille de Grauer ?',a:['Kahuzi-Biega','Garamba','Upemba','Kundelungu'],correct:0,fact:'Kahuzi-Biega abrite une population majeure de gorilles de Grauer, endémiques de la RDC.'}
];
const levelQuestionBanks={explorer:explorerQuestions,adventurer:questions,master:masterQuestions};
let quizLevel=localStorage.getItem('mbokaQuizLevel')||'adventurer';

const dailyFacts=[
  {topic:['NATURE','NATURE'],fact:['L’okapi ne vit à l’état sauvage qu’en RDC.','The okapi lives in the wild only in the DRC.'],explain:['Ce mammifère forestier, parent de la girafe, porte des rayures caractéristiques sur les pattes.','This forest mammal, related to the giraffe, has distinctive stripes on its legs.']},
  {topic:['EAUX','WATER'],fact:['Le fleuve Congo forme un immense réseau avec ses affluents.','The Congo River forms a vast network with its tributaries.'],explain:['Les cours d’eau relient des villes, des villages, des forêts et des zones agricoles.','Waterways connect cities, villages, forests and farming areas.']},
  {topic:['MUSIQUE','MUSIC'],fact:['La rumba congolaise est un patrimoine culturel de l’humanité.','Congolese rumba is cultural heritage of humanity.'],explain:['Cette musique et cette danse sont partagées par la RDC et la République du Congo.','This music and dance are shared by the DRC and the Republic of the Congo.']},
  {topic:['PROVINCES','PROVINCES'],fact:['Kinshasa est à la fois une ville et une province.','Kinshasa is both a city and a province.'],explain:['Elle est aussi la capitale nationale, située sur la rive du fleuve Congo.','It is also the national capital, located on the Congo River.']},
  {topic:['LANGUES','LANGUAGES'],fact:['La RDC compte quatre langues nationales.','The DRC has four national languages.'],explain:['Il s’agit du lingala, du swahili, du kikongo et du tshiluba; le français est officiel.','They are Lingala, Swahili, Kikongo and Tshiluba; French is official.']},
  {topic:['GÉOGRAPHIE','GEOGRAPHY'],fact:['Le Kongo-Central possède la façade atlantique de la RDC.','Kongo-Central contains the DRC’s Atlantic coastline.'],explain:['Cette ouverture relie le vaste territoire congolais à l’océan Atlantique.','This opening connects the vast Congolese territory to the Atlantic Ocean.']},
  {topic:['FAUNE','WILDLIFE'],fact:['Le bonobo est endémique de la RDC.','The bonobo is endemic to the DRC.'],explain:['À l’état sauvage, ce grand singe vit uniquement au sud du fleuve Congo.','In the wild, this great ape lives only south of the Congo River.']},
  {topic:['LACS','LAKES'],fact:['Le lac Tanganyika borde l’est de la RDC.','Lake Tanganyika borders eastern DRC.'],explain:['Kalemie, chef-lieu du Tanganyika, est une importante ville portuaire sur le lac.','Kalemie, capital of Tanganyika, is an important port city on the lake.']},
  {topic:['HISTOIRE','HISTORY'],fact:['La RDC célèbre son indépendance le 30 juin.','The DRC celebrates independence on 30 June.'],explain:['Le pays a accédé à l’indépendance le 30 juin 1960.','The country gained independence on 30 June 1960.']},
  {topic:['FORÊTS','FORESTS'],fact:['Une grande partie du bassin forestier du Congo se trouve en RDC.','A large part of the Congo forest basin lies in the DRC.'],explain:['Ces forêts abritent une biodiversité remarquable et jouent un rôle climatique majeur.','These forests shelter remarkable biodiversity and play a major climate role.']}
];
function localDateKey(date=new Date()){return`${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`}
function dailyHistory(){return safeJsonArray('mbokaDailyHistory').filter(value=>/^\d{4}-\d{2}-\d{2}$/.test(value))}
function calculateDailyStreak(){const done=new Set(dailyHistory());let cursor=new Date(),streak=0;if(!done.has(localDateKey(cursor)))cursor.setDate(cursor.getDate()-1);while(done.has(localDateKey(cursor))){streak++;cursor.setDate(cursor.getDate()-1)}return streak}
function renderDaily(){
  const english=localStorage.getItem('mbokaLang')==='en',today=new Date(),todayKey=localDateKey(today),history=dailyHistory(),done=new Set(history),dayNumber=Math.floor(new Date(today.getFullYear(),today.getMonth(),today.getDate()).getTime()/86400000),fact=dailyFacts[((dayNumber%dailyFacts.length)+dailyFacts.length)%dailyFacts.length],streak=calculateDailyStreak();
  document.querySelector('#dailyTopic').textContent=fact.topic[english?1:0];document.querySelector('#dailyFact').textContent=fact.fact[english?1:0];document.querySelector('#dailyExplanation').textContent=fact.explain[english?1:0];document.querySelector('#dailyStreak').textContent=streak;document.querySelector('#streakPlural').textContent=streak===1?'':'s';
  const button=document.querySelector('#completeDaily');button.disabled=done.has(todayKey);button.textContent=done.has(todayKey)?(english?'Learned today ✓':'Appris aujourd’hui ✓'):(english?'I learned this fact ✓':'J’ai appris ce fait ✓');document.querySelector('#streakMessage').textContent=streak?(english?`${streak} day${streak===1?'':'s'} in a row. Keep exploring!`:`${streak} jour${streak===1?'':'s'} de suite. Continue !`):(english?'Learn one fact today to begin your streak.':'Apprends un fait aujourd’hui pour commencer ta série.');
  const days=[];for(let offset=6;offset>=0;offset--){const date=new Date();date.setHours(12,0,0,0);date.setDate(date.getDate()-offset);days.push(date)}const completed=days.filter(d=>done.has(localDateKey(d))).length,names=english?['Sun','Mon','Tue','Wed','Thu','Fri','Sat']:['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'];document.querySelector('#weekDays').innerHTML=days.map(d=>`<div class="week-day ${done.has(localDateKey(d))?'done':''} ${localDateKey(d)===todayKey?'today':''}"><span>${d.getDate()}</span><small>${names[d.getDay()]}</small></div>`).join('');document.querySelector('#weekProgress').textContent=`${completed} / 7`;
  const next=[3,7,14,30].find(n=>streak<n)||30;document.querySelector('#rewardProgress').style.width=`${Math.min(streak/next*100,100)}%`;document.querySelector('#nextReward').textContent=english?`${next}-day milestone`:`Palier de ${next} jours`;
}
document.querySelector('#completeDaily').addEventListener('click',()=>{const history=new Set(dailyHistory());history.add(localDateKey());localStorage.setItem('mbokaDailyHistory',JSON.stringify([...history].sort()));renderDaily();showAudioNotice(localStorage.getItem('mbokaLang')==='en'?'Daily discovery completed! +50 points':'Découverte du jour terminée ! +50 points')});

const explored=safeJsonArray('mbokaExplored').filter(value=>Number.isInteger(value)&&value>=0&&value<journeys.length);
document.querySelector('#journeyGrid').innerHTML = journeys.map((j,i)=>`<article class="journey-card ${explored.includes(i)?'completed':''}" style="background:${j.color}" tabindex="0" role="button" data-journey="${i}"><span class="icon">${j.icon}</span><div><small>PARCOURS ${String(i+1).padStart(2,'0')}</small><h3>${j.title}</h3><p>${j.text}</p></div><span class="go">→</span></article>`).join('');

const list = document.querySelector('#provinceList');
const count = document.querySelector('#provinceCount');
let currentProvinceRegion='Toutes';
function renderProvinces(query=''){
  const filtered=provinces.filter((p,i)=>p.join(' ').toLowerCase().includes(query.toLowerCase().trim())&&(currentProvinceRegion==='Toutes'||provinceDetails[i][0]===currentProvinceRegion));
  list.innerHTML=filtered.map(p=>{const d=provinceDetails[provinces.indexOf(p)];return`<div class="province" tabindex="0" role="button" data-province="${p[0]}"><div class="province-info"><strong>${p[0]}</strong><span class="province-region">${d[0]}</span></div><span class="province-capital">${p[1]}</span><button class="province-speak" data-speak-province="${p[0]}" aria-label="Écouter ${p[0]} et ${p[1]}">♪</button></div>`}).join('') || '<p>Aucune province trouvée.</p>';
  count.textContent=`${filtered.length} province${filtered.length>1?'s':''} affichée${filtered.length>1?'s':''}`;
}
renderProvinces();
document.querySelector('#provinceSearch').addEventListener('input',e=>renderProvinces(e.target.value));
document.querySelector('#regionFilters').addEventListener('click',e=>{const button=e.target.closest('[data-region]');if(!button)return;currentProvinceRegion=button.dataset.region;document.querySelectorAll('#regionFilters button').forEach(b=>b.classList.toggle('active',b===button));renderProvinces(document.querySelector('#provinceSearch').value)});

const modal=document.querySelector('#learningModal');
function openLesson(data, options={}){
  document.querySelector('#lessonIcon').textContent=data.icon||'⌖';
  document.querySelector('#lessonNumber').textContent=options.number||'CARNET DE DÉCOUVERTE';
  document.querySelector('#lessonVisual').style.background=data.color||'#f0bd5b';
  document.querySelector('#lessonLabel').textContent=options.label||'PARCOURS';
  document.querySelector('#lessonTitle').textContent=data.title;
  document.querySelector('#lessonLead').textContent=data.lead;
  document.querySelector('#lessonFacts').innerHTML=data.facts.map((f,i)=>`<div class="lesson-fact"><span>${i+1}</span><div><strong>${f[0]}</strong><p>${f[1]}</p></div></div>`).join('');
  modal.hidden=false; document.body.style.overflow='hidden'; document.querySelector('.modal-close').focus();
}
function closeLesson(){modal.hidden=true;document.body.style.overflow=''}
document.querySelectorAll('[data-close-modal]').forEach(el=>el.addEventListener('click',closeLesson));
document.querySelector('#lessonQuiz').addEventListener('click',closeLesson);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!modal.hidden)closeLesson()});
document.querySelector('#journeyGrid').addEventListener('click',e=>{
  const card=e.target.closest('[data-journey]'); if(!card)return; const i=Number(card.dataset.journey);
  if(!explored.includes(i)){explored.push(i);localStorage.setItem('mbokaExplored',JSON.stringify(explored));card.classList.add('completed')}
  openLesson({...journeys[i],...lessonDetails[i]},{number:`PARCOURS ${String(i+1).padStart(2,'0')}`});
});
document.querySelector('#journeyGrid').addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.dataset.journey!==undefined){e.preventDefault();e.target.click()}});
function openProvinceProfile(index){
  const p=provinces[index],english=localStorage.getItem('mbokaLang')==='en';
  const d=english&&window.enContent?window.enContent.provinces[index]:provinceDetails[index];
  const x=english&&window.enContent?window.enContent.provinceProfiles[index]:provinceProfiles[index];
  const labels=english?['Broad region','Capital','Major towns','Languages spoken','Food traditions','Economy and resources','Famous places']:['Zone d’exploration','Chef-lieu','Villes importantes','Langues parlées','Traditions culinaires','Économie et ressources','Lieux célèbres'];
  const lead=english?`${p[1]} is the capital of ${p[0]} province. ${d[2]}`:`${p[1]} est le chef-lieu de la province ${p[0]}. ${d[2]}`;
  openLesson({icon:'⌖',title:p[0],color:'#f0bd5b',lead,facts:[[labels[0],d[0]],[labels[1],p[1]],...x.map((value,i)=>[labels[i+2],value])]},{label:english?'PROVINCE PROFILE':'PROFIL PROVINCE',number:english?`PROVINCE ${String(index+1).padStart(2,'0')} OF 26`:`PROVINCE ${String(index+1).padStart(2,'0')} SUR 26`});
}
document.querySelector('#provinceList').addEventListener('click',e=>{
  const audio=e.target.closest('[data-speak-province]');if(audio){e.stopPropagation();const i=provinces.findIndex(p=>p[0]===audio.dataset.speakProvince),p=provinces[i];speakPhrase(`${p[0]}. ${localStorage.getItem('mbokaLang')==='en'?'Capital':'Chef-lieu'}: ${p[1]}.`,audio);return}
  const item=e.target.closest('[data-province]'); if(!item)return;openProvinceProfile(provinces.findIndex(x=>x[0]===item.dataset.province));
});
document.querySelector('#provinceList').addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.dataset.province){e.preventDefault();e.target.click()}});

const mapMarkers=document.querySelector('#mapMarkers');let selectedMapProvince=-1;
mapMarkers.innerHTML=provinces.map((p,i)=>`<button class="map-marker" style="left:${mapPositions[i][0]}%;top:${mapPositions[i][1]}%" data-map-index="${i}" data-short="${p[0]}" aria-label="${p[0]}, chef-lieu ${p[1]}"></button>`).join('');
function selectMapProvince(index){
  selectedMapProvince=index;const p=provinces[index],d=provinceDetails[index];document.querySelectorAll('.map-marker').forEach((m,i)=>m.classList.toggle('active',i===index));document.querySelector('#mapZone').textContent=d[0];document.querySelector('#mapProvince').textContent=p[0];document.querySelector('#mapDescription').textContent=d[2];document.querySelector('#mapCapital').textContent=p[1];document.querySelector('#mapLandmark').textContent=d[1];document.querySelector('#openMapProfile').disabled=false;document.querySelector('#mapSpeak').disabled=false;window.refreshLanguage?.();
}
mapMarkers.addEventListener('click',e=>{const marker=e.target.closest('[data-map-index]');if(marker)selectMapProvince(Number(marker.dataset.mapIndex))});
document.querySelector('#openMapProfile').addEventListener('click',()=>{if(selectedMapProvince>=0)openProvinceProfile(selectedMapProvince)});

// Memory game: pair a Congolese treasure with its meaning.
const memoryPairs=[
  {id:'okapi',a:['🦓','Okapi','ANIMAL'],b:['🌿','Forêts du nord-est','SON HABITAT']},
  {id:'rumba',a:['🎸','Rumba congolaise','MUSIQUE'],b:['♫','Danse et patrimoine','SON UNIVERS']},
  {id:'pondu',a:['🥬','Pondu','CUISINE'],b:['🍲','Feuilles de manioc','INGRÉDIENT']},
  {id:'congo',a:['≈','Fleuve Congo','GÉOGRAPHIE'],b:['🚤','Grande voie d’eau','SON RÔLE']},
  {id:'virunga',a:['🌋','Virunga','NATURE'],b:['🦍','Volcans et gorilles','À DÉCOUVRIR']},
  {id:'kinshasa',a:['🏙️','Kinshasa','VILLE'],b:['★','Capitale de la RDC','SON STATUT']}
];
let memoryFirst=null,memorySecond=null,memoryMoves=0,memoryMatches=0,memoryLocked=false;
const memoryBoard=document.querySelector('#memoryBoard'),memoryMovesEl=document.querySelector('#memoryMoves'),memoryPairsEl=document.querySelector('#memoryPairs'),memoryBestEl=document.querySelector('#memoryBest');
function startMemory(){
  memoryFirst=null;memorySecond=null;memoryMoves=0;memoryMatches=0;memoryLocked=false;document.querySelector('#memoryComplete').hidden=true;memoryMovesEl.textContent=0;memoryPairsEl.textContent='0/6';
  const cards=shuffled(memoryPairs.flatMap(pair=>[pair.a,pair.b].map((side,index)=>({pair:pair.id,side,index}))));
  memoryBoard.innerHTML=cards.map((card,i)=>`<button class="memory-card" data-pair="${card.pair}" aria-label="Carte cachée ${i+1}"><span class="memory-card-inner"><span class="memory-face memory-back"><small>MBOKA</small></span><span class="memory-face memory-front"><span class="memory-icon">${card.side[0]}</span><strong>${card.side[1]}</strong><small>${card.side[2]}</small></span></span></button>`).join('');
  memoryBestEl.textContent=localStorage.getItem('mbokaMemoryBest')||'—';
}
function flipMemory(card){
  if(memoryLocked||card===memoryFirst||card.classList.contains('matched'))return;card.classList.add('flipped');card.setAttribute('aria-label',`Carte ${card.querySelector('strong').textContent}`);
  if(!memoryFirst){memoryFirst=card;return}memorySecond=card;memoryMoves++;memoryMovesEl.textContent=memoryMoves;
  if(memoryFirst.dataset.pair===memorySecond.dataset.pair){memoryFirst.classList.add('matched');memorySecond.classList.add('matched');memoryFirst=null;memorySecond=null;memoryMatches++;memoryPairsEl.textContent=`${memoryMatches}/6`;if(memoryMatches===6)finishMemory();return}
  memoryLocked=true;setTimeout(()=>{memoryFirst.classList.remove('flipped');memorySecond.classList.remove('flipped');memoryFirst=null;memorySecond=null;memoryLocked=false},750);
}
function finishMemory(){
  const previous=Number(localStorage.getItem('mbokaMemoryBest')||0);const best=previous?Math.min(previous,memoryMoves):memoryMoves;localStorage.setItem('mbokaMemoryBest',best);localStorage.setItem('mbokaMemoryComplete','1');memoryBestEl.textContent=best;document.querySelector('#memoryComplete').hidden=false;document.querySelector('#memoryTitle').textContent=memoryMoves<=9?'Mémoire exceptionnelle !':'Les six trésors sont réunis !';document.querySelector('#memoryMessage').textContent=`Partie terminée en ${memoryMoves} coups. Ton record est de ${best}.`;
}
memoryBoard.addEventListener('click',e=>{const card=e.target.closest('.memory-card');if(!card)return;if(card.classList.contains('matched')){speakPhrase(`${card.querySelector('strong').textContent}. ${card.querySelector('small').textContent}.`,card);return}flipMemory(card)});
document.querySelector('#memoryRestart').addEventListener('click',startMemory);

// Province Sprint: a replayable capital-matching challenge.
let sprintDeck=[], sprintIndex=0, sprintScore=0, sprintStreak=0, sprintLives=3, sprintAnswered=false;
const sprintBest=document.querySelector('#sprintBest'), sprintProvince=document.querySelector('#sprintProvince'), sprintOptions=document.querySelector('#sprintOptions'), sprintFeedback=document.querySelector('#sprintFeedback'), sprintNext=document.querySelector('#sprintNext');
function shuffled(items){return [...items].sort(()=>Math.random()-.5)}
function startSprint(){
  sprintDeck=shuffled(provinces).slice(0,10); sprintIndex=0; sprintScore=0; sprintStreak=0; sprintLives=3;
  document.querySelector('#sprintPlay').hidden=false; document.querySelector('#sprintResult').hidden=true; showSprintRound();
}
function showSprintRound(){
  sprintAnswered=false; const correct=sprintDeck[sprintIndex]; const distractors=shuffled(provinces.filter(p=>p[1]!==correct[1])).slice(0,3).map(p=>p[1]); const choices=shuffled([correct[1],...distractors]);
  sprintProvince.textContent=correct[0]; document.querySelector('#sprintRound').textContent=`${sprintIndex+1} / 10`; sprintOptions.innerHTML=choices.map(city=>`<button class="sprint-option" data-city="${city}">${city}</button>`).join(''); sprintFeedback.textContent=''; sprintFeedback.className='sprint-feedback'; sprintNext.classList.remove('show'); updateSprintStatus();
}
function updateSprintStatus(){
  document.querySelector('#sprintStreak').textContent=`${sprintStreak} 🔥`; document.querySelector('#sprintLives').textContent=`${'♥ '.repeat(sprintLives)}${'♡ '.repeat(3-sprintLives)}`.trim(); document.querySelector('#sprintScore').textContent=sprintScore;
}
function answerSprint(city){
  if(sprintAnswered)return; sprintAnswered=true; const correct=sprintDeck[sprintIndex][1]; const buttons=[...sprintOptions.children]; buttons.forEach(b=>{b.disabled=true;if(b.dataset.city===correct)b.classList.add('correct')});
  if(city===correct){sprintStreak++;const gain=100+(sprintStreak-1)*20;sprintScore+=gain;sprintFeedback.textContent=`Exact ! ${correct} est bien le chef-lieu. +${gain} points`;sprintFeedback.classList.add('good')}else{sprintLives--;sprintStreak=0;buttons.find(b=>b.dataset.city===city).classList.add('wrong');sprintFeedback.textContent=`La bonne réponse était ${correct}.`;sprintFeedback.classList.add('bad')}
  updateSprintStatus(); sprintNext.textContent=(sprintIndex===9||sprintLives===0)?'Voir mon résultat →':'Manche suivante →'; sprintNext.classList.add('show');
}
function finishSprint(){
  document.querySelector('#sprintPlay').hidden=true;document.querySelector('#sprintResult').hidden=false;document.querySelector('#sprintFinalScore').textContent=`${sprintScore} points`;document.querySelector('#sprintResultTitle').textContent=sprintScore>=1200?'Maître des provinces !':sprintScore>=700?'Très beau parcours !':'Continue ton exploration !';document.querySelector('#sprintResultText').textContent=`Tu as terminé ${sprintIndex+1} manche${sprintIndex?'s':''}. Rejoue : les provinces et les réponses changent à chaque sprint.`;
  const best=Math.max(sprintScore,Number(localStorage.getItem('mbokaSprintBest')||0));localStorage.setItem('mbokaSprintBest',best);sprintBest.textContent=best;
}
sprintOptions.addEventListener('click',e=>{const button=e.target.closest('[data-city]');if(button)answerSprint(button.dataset.city)});
sprintNext.addEventListener('click',()=>{if(sprintIndex===9||sprintLives===0)finishSprint();else{sprintIndex++;showSprintRound()}});
document.querySelector('#sprintRestart').addEventListener('click',startSprint);
sprintBest.textContent=localStorage.getItem('mbokaSprintBest')||0;
startSprint();

let current=0, score=0, answered=false;
const qNumber=document.querySelector('#questionNumber'), qTopic=document.querySelector('#questionTopic'), qText=document.querySelector('#questionText'), answers=document.querySelector('#answers'), feedback=document.querySelector('#feedback'), next=document.querySelector('#nextButton'), progress=document.querySelector('#progressBar');
function showQuestion(){
  answered=false; const bank=levelQuestionBanks[quizLevel],q=bank[current]; qNumber.textContent=`QUESTION ${current+1} SUR ${bank.length}`; qTopic.textContent=q.topic; qText.textContent=q.q; progress.style.width=`${(current+1)/bank.length*100}%`; feedback.innerHTML=''; next.classList.remove('show');
  answers.innerHTML=q.a.map((a,i)=>`<button class="answer" data-index="${i}"><span>${String.fromCharCode(65+i)}.</span> ${a}</button>`).join('');
  answers.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>choose(Number(b.dataset.index))));
}
function choose(index){
  if(answered)return; answered=true; const q=levelQuestionBanks[quizLevel][current]; const buttons=[...answers.children]; buttons.forEach(b=>b.disabled=true); buttons[q.correct].classList.add('correct');
  if(index===q.correct){score++; feedback.innerHTML=`<strong>Bien joué ! +100 points</strong>${q.fact}`;} else {buttons[index].classList.add('wrong'); feedback.innerHTML=`<strong>Pas tout à fait.</strong>${q.fact}`;}
  next.textContent=current===questions.length-1?'Voir mon résultat →':'Question suivante →'; next.classList.add('show');
}
next.addEventListener('click',()=>{current++; current<levelQuestionBanks[quizLevel].length?showQuestion():showResult()});
function showResult(){
  const bank=levelQuestionBanks[quizLevel];document.querySelector('#questionView').hidden=true; const view=document.querySelector('#resultView'); view.hidden=false; document.querySelector('#finalScore').textContent=`${score}/${bank.length}`; document.querySelector('#resultTitle').textContent=score>=8?'Explorateur remarquable !':score>=5?'Belle exploration !':'Ton voyage commence !'; document.querySelector('#resultMessage').textContent=score>=8?'Tu connais déjà très bien la RDC. Continue à explorer !':'Chaque question est une nouvelle découverte. Rejoue pour améliorer ton score.';
  const key=`mbokaBest-${quizLevel}`,legacy=quizLevel==='adventurer'?Number(localStorage.getItem('mbokaBest')||0):0,best=Math.max(score,Number(localStorage.getItem(key)||0),legacy); localStorage.setItem(key,best);if(quizLevel==='adventurer')localStorage.setItem('mbokaBest',best);document.querySelector('#bestScore').textContent=`${best}/10`;
}
document.querySelector('#restartButton').addEventListener('click',()=>{current=0;score=0;document.querySelector('#questionView').hidden=false;document.querySelector('#resultView').hidden=true;showQuestion()});
function storedLevelBest(level){return Number(localStorage.getItem(`mbokaBest-${level}`)||(level==='adventurer'?localStorage.getItem('mbokaBest'):0)||0)}
function updateQuizLevel(level){quizLevel=level;localStorage.setItem('mbokaQuizLevel',level);document.querySelectorAll('#levelPicker button').forEach(b=>b.classList.toggle('active',b.dataset.level===level));document.querySelector('#bestScore').textContent=`${storedLevelBest(level)}/10`;current=0;score=0;document.querySelector('#questionView').hidden=false;document.querySelector('#resultView').hidden=true;showQuestion()}
document.querySelector('#levelPicker').addEventListener('click',e=>{const button=e.target.closest('[data-level]');if(button&&button.dataset.level!==quizLevel)updateQuizLevel(button.dataset.level)});
document.querySelector('#bestScore').textContent=`${storedLevelBest(quizLevel)}/10`;document.querySelectorAll('#levelPicker button').forEach(b=>b.classList.toggle('active',b.dataset.level===quizLevel));
const badges=[
  {icon:'🌱',name:'Premier pas',desc:'Explorer un parcours',test:s=>s.journeys>=1},
  {icon:'🧭',name:'Cartographe',desc:'Explorer 4 parcours',test:s=>s.journeys>=4},
  {icon:'🌍',name:'Grand voyageur',desc:'Explorer les 8 parcours',test:s=>s.journeys>=8},
  {icon:'💡',name:'Esprit curieux',desc:'Obtenir 5/10 au quiz',test:s=>s.quiz>=5},
  {icon:'⭐',name:'Maître Mboka',desc:'Obtenir 9/10 au quiz',test:s=>s.quiz>=9},
  {icon:'🔥',name:'Sprinteur',desc:'Marquer 900 points',test:s=>s.sprint>=900},
  {icon:'🧠',name:'Mémoire du pays',desc:'Réunir les 6 trésors',test:s=>s.memory},
  {icon:'🔥',name:'Flamme du savoir',desc:'Apprendre pendant 3 jours',test:s=>s.dailyStreak>=3}
];
const profileModal=document.querySelector('#profileModal');
function getProfileStats(){return{journeys:safeJsonArray('mbokaExplored').filter(value=>Number.isInteger(value)&&value>=0&&value<journeys.length).length,quiz:Number(localStorage.getItem('mbokaBest')||0),sprint:Number(localStorage.getItem('mbokaSprintBest')||0),memory:localStorage.getItem('mbokaMemoryComplete')==='1',dailyStreak:calculateDailyStreak()}}
function renderProfile(){
  const stats=getProfileStats(); const percent=Math.round((stats.journeys/8*.4+stats.quiz/10*.3+Math.min(stats.sprint/1200,1)*.3)*100); const unlocked=badges.filter(b=>b.test(stats)).length;
  document.querySelector('#profileQuiz').textContent=`${stats.quiz}/10`;document.querySelector('#profileSprint').textContent=stats.sprint;document.querySelector('#profileJourneys').textContent=`${stats.journeys}/8`;document.querySelector('#profilePercent').textContent=`${percent}%`;document.querySelector('#profileProgress').style.width=`${percent}%`;document.querySelector('#badgeCount').textContent=`${unlocked} / ${badges.length}`;
  document.querySelector('#profileRank').textContent=percent>=90?'Maître du pays':percent>=60?'Grand explorateur':percent>=25?'Explorateur curieux':'Explorateur débutant';
  document.querySelector('#badgeGrid').innerHTML=badges.map(b=>`<div class="badge ${b.test(stats)?'':'locked'}"><span class="badge-icon">${b.test(stats)?b.icon:'🔒'}</span><strong>${b.name}</strong><p>${b.desc}</p></div>`).join('');
}
function openProfile(){renderProfile();profileModal.hidden=false;document.body.style.overflow='hidden';profileModal.querySelector('.modal-close').focus()}
function closeProfile(){profileModal.hidden=true;document.body.style.overflow=''}
document.querySelector('#profileButton').addEventListener('click',openProfile);
document.querySelectorAll('[data-close-profile]').forEach(el=>el.addEventListener('click',closeProfile));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!profileModal.hidden)closeProfile()});
document.querySelector('#resetProgress').addEventListener('click',()=>{if(confirm('Réinitialiser tous les scores, parcours et badges Mboka ?')){['mbokaBest','mbokaBest-explorer','mbokaBest-adventurer','mbokaBest-master','mbokaQuizLevel','mbokaSprintBest','mbokaExplored','mbokaMemoryBest','mbokaMemoryComplete','mbokaDailyHistory'].forEach(key=>localStorage.removeItem(key));location.reload()}});

// Teacher worksheet generator. It uses the same question bank as the game.
let worksheetSelection=[];
function generateWorksheet(){
  const count=Number(document.querySelector('#worksheetCount').value);worksheetSelection=shuffled(questions.map((q,index)=>({q,index}))).slice(0,count);renderWorksheet();
}
function renderWorksheet(){
  const english=localStorage.getItem('mbokaLang')==='en'&&window.enContent;const includeAnswers=document.querySelector('#worksheetAnswers').checked;
  document.querySelector('#worksheetQuestions').innerHTML=worksheetSelection.map(({q,index})=>{const source=english?window.enContent.questions[index]:q;return`<li class="print-question"><strong>${source.q}</strong><div class="print-options">${source.a.map((answer,i)=>`<span>○ ${String.fromCharCode(65+i)}. ${answer}</span>`).join('')}</div></li>`}).join('');
  const key=document.querySelector('#worksheetKey');key.innerHTML=includeAnswers?`<h2>${english?'Answer key':'Corrigé'}</h2><p>${worksheetSelection.map(({q,index},i)=>`${i+1}. ${String.fromCharCode(65+q.correct)} — ${(english?window.enContent.questions[index]:q).a[q.correct]}`).join('&nbsp;&nbsp;&nbsp; ')}</p>`:'';
  const sheet=document.querySelector('#printSheet');sheet.querySelector('h1').textContent=english?'Knowledge worksheet':'Fiche de connaissances';sheet.querySelector(':scope > p').textContent=english?'Circle the correct answer for each question.':'Entoure la bonne réponse pour chaque question.';sheet.querySelector('.print-fields').textContent=english?'Name: ____________________    Date: ______________':'Nom : ____________________    Date : ______________';
}
document.querySelector('#generateWorksheet').addEventListener('click',generateWorksheet);
document.querySelector('#worksheetCount').addEventListener('change',generateWorksheet);
document.querySelector('#worksheetAnswers').addEventListener('change',renderWorksheet);
document.querySelector('#printWorksheet').addEventListener('click',()=>{renderWorksheet();window.print()});
generateWorksheet();

// Anonymous, local-only pilot feedback for classroom evaluation.
function pilotFeedback(){return safeJsonArray('mbokaPilotFeedback').filter(item=>item&&typeof item==='object')}
function renderFeedbackCount(){const count=pilotFeedback().length;document.querySelector('#feedbackCount').textContent=count;document.querySelector('#exportFeedback').disabled=count===0;document.querySelector('#clearFeedback').disabled=count===0}
document.querySelector('#pilotForm').addEventListener('submit',event=>{
  event.preventDefault();const ease=document.querySelector('#feedbackEase').value,fun=document.querySelector('#feedbackFun').value,learning=document.querySelector('#feedbackLearning').value,status=document.querySelector('#pilotStatus'),english=localStorage.getItem('mbokaLang')==='en';
  if(!ease||!fun||!learning){status.textContent=english?'Please complete the three ratings.':'Merci de compléter les trois évaluations.';status.classList.add('error');return}
  const responses=pilotFeedback();responses.push({timestamp:new Date().toISOString(),role:document.querySelector('#feedbackRole').value,ease:Number(ease),fun:Number(fun),learning:Number(learning),favorite:document.querySelector('#feedbackFavorite').value,comment:document.querySelector('#feedbackComment').value.trim(),language:english?'en':'fr'});localStorage.setItem('mbokaPilotFeedback',JSON.stringify(responses));event.currentTarget.reset();status.textContent=english?'Thank you! Your anonymous feedback was saved on this device.':'Merci ! Ton retour anonyme est enregistré sur cet appareil.';status.classList.remove('error');renderFeedbackCount();
});
function csvCell(value){let text=String(value??'').replace(/"/g,'""');if(/^[=+\-@]/.test(text))text=`'${text}`;return`"${text}"`}
document.querySelector('#exportFeedback').addEventListener('click',()=>{const rows=pilotFeedback(),headers=['timestamp','role','ease','fun','learning','favorite','comment','language'],csv=[headers.map(csvCell).join(','),...rows.map(row=>headers.map(key=>csvCell(row[key])).join(','))].join('\r\n'),blob=new Blob(['\uFEFF',csv],{type:'text/csv;charset=utf-8'}),url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download=`mboka-pilot-${localDateKey()}.csv`;document.body.appendChild(link);link.click();link.remove();URL.revokeObjectURL(url)});
document.querySelector('#clearFeedback').addEventListener('click',()=>{const english=localStorage.getItem('mbokaLang')==='en';if(confirm(english?'Delete all pilot responses stored on this device?':'Effacer tous les retours pilotes enregistrés sur cet appareil ?')){localStorage.removeItem('mbokaPilotFeedback');renderFeedbackCount();document.querySelector('#pilotStatus').textContent=english?'Local responses deleted.':'Retours locaux effacés.'}});
renderFeedbackCount();
let soundEnabled=localStorage.getItem('mbokaSound')!=='off';
function updateSoundButton(){const button=document.querySelector('#soundToggle');button.textContent=soundEnabled?'♪':'×';button.title=soundEnabled?'Couper les sons':'Activer les sons';button.setAttribute('aria-pressed',String(soundEnabled))}
function showAudioNotice(message){const old=document.querySelector('.audio-notice');if(old)old.remove();const notice=document.createElement('div');notice.className='audio-notice';notice.textContent=message;document.body.appendChild(notice)}
function speakPhrase(text,control){
  if(!soundEnabled)return showAudioNotice(localStorage.getItem('mbokaLang')==='en'?'Audio is turned off.':'Le son est désactivé.');if(!('speechSynthesis'in window))return showAudioNotice(localStorage.getItem('mbokaLang')==='en'?'Speech is not supported by this browser.':'La lecture audio n’est pas disponible dans ce navigateur.');
  speechSynthesis.cancel();document.querySelectorAll('.speaking').forEach(el=>el.classList.remove('speaking'));const utterance=new SpeechSynthesisUtterance(text);utterance.lang=localStorage.getItem('mbokaLang')==='en'?'en-US':'fr-FR';utterance.rate=.88;const voice=speechSynthesis.getVoices().find(v=>v.lang.toLowerCase().startsWith(utterance.lang.slice(0,2).toLowerCase()));if(voice)utterance.voice=voice;if(control)control.classList.add('speaking');utterance.onend=utterance.onerror=()=>control?.classList.remove('speaking');speechSynthesis.speak(utterance);
}
document.querySelector('#soundToggle').addEventListener('click',()=>{soundEnabled=!soundEnabled;localStorage.setItem('mbokaSound',soundEnabled?'on':'off');if(!soundEnabled&&'speechSynthesis'in window)speechSynthesis.cancel();updateSoundButton()});
document.querySelector('#mapSpeak').addEventListener('click',e=>{if(selectedMapProvince<0)return;const p=provinces[selectedMapProvince],english=localStorage.getItem('mbokaLang')==='en',d=english&&window.enContent?window.enContent.provinces[selectedMapProvince]:provinceDetails[selectedMapProvince];speakPhrase(`${p[0]}. ${english?'Capital':'Chef-lieu'}: ${p[1]}. ${d[2]}`,e.currentTarget)});
document.querySelector('#lessonSpeak').addEventListener('click',e=>speakPhrase(`${document.querySelector('#lessonTitle').textContent}. ${document.querySelector('#lessonLead').textContent}`,e.currentTarget));
updateSoundButton();
showQuestion();
startMemory();
renderDaily();
