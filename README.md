SmartStream
1. Présentation du projet

SmartStream est une application web de streaming IPTV permettant aux utilisateurs de consulter un catalogue de chaînes de télévision en direct, de rechercher des chaînes et de visualiser le contenu d'une chaîne sélectionnée.

2. Objectifs du projet
Développer une interface IPTV intuitive et responsive.
Consommer des données depuis une API REST avec la Fetch API.
Utiliser MockAPI pour simuler un serveur Backend.
Organiser le code avec les modules JavaScript ES6.
Gérer les traitements asynchrones avec async/await et try/catch.
Implémenter la recherche et le filtrage instantané des chaînes.
Gérer les états de chargement et les erreurs HTTP.
Ajouter un lecteur vidéo interactif.
Afficher les informations EPG (Electronic Program Guide).
3. Documentation
3.1. Gestion des statuts HTTP
Code HTTP	Signification	Comportement
200	OK	Données récupérées avec succès.
404	Not Found	Ressource introuvable.
500	Internal Server Error	Erreur interne du serveur.
3.2. Méthodes JavaScript ES6+

trim()

La méthode trim() permet de supprimer les espaces blancs au début et à la fin d'une chaîne de caractères, sans modifier la chaîne d'origine.

filter()

La méthode filter() permet de créer un nouveau tableau contenant uniquement les éléments qui respectent une condition définie dans une fonction de rappel. Elle ne modifie pas le tableau d'origine.

Fetch API en JavaScript

La Fetch API est une interface moderne permettant d'effectuer des requêtes HTTP asynchrones en JavaScript. Elle utilise les promesses et facilite la récupération ou l'envoi de données vers un serveur.

3.3. Autres notions JavaScript

Importation de modules

javascript
import { a } from "./fichier.js";


Permet de récupérer un export nommé depuis un autre fichier JavaScript. Le nom importé doit correspondre au nom exporté.

element.disabled

Permet d'activer ou de désactiver un élément HTML, notamment un bouton. Cette propriété peut être utilisée pour empêcher l'envoi d'un formulaire tant que les données sont invalides.

API

Une API (Application Programming Interface) est une interface permettant à deux applications de communiquer et d'échanger des données.

Chaque API possède sa propre structure de données, qu'on peut examiner avec console.log(data).

Exemple : RandomUser est une API qui génère des utilisateurs aléatoires.

Array.from()

Permet de transformer un objet itérable ou une collection d'éléments, comme select.options, en véritable tableau JavaScript.

4. Questions et réponses
Quelle est la différence entre filter() et map() ?

filter() : permet de filtrer un tableau selon une condition et retourne un nouveau tableau contenant uniquement les éléments qui respectent cette condition.

map() : permet de transformer chaque élément d'un tableau et retourne un nouveau tableau contenant les éléments transformés.

Exemple
javascript
const numbers = [1, 2, 3, 4, 5];

// filter() : conserver les nombres pairs
const evenNumbers = numbers.filter(number => number % 2 === 0);

// map() : multiplier chaque nombre par 2
const doubledNumbers = numbers.map(number => number * 2);

console.log(evenNumbers);  // [2, 4]
console.log(doubledNumbers); // [2, 4, 6, 8, 10]