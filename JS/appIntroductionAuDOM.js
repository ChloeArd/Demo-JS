/**
 * Récupérer un élément sur base de son ID HTML.
 */

/*** Récupération par getElementById() ***/
//On récupère <p id="p1">Paragraphe 1</p>
let paragraphe1 = document.getElementById('p1'); // Pas besoin de mettre le dièse (#) !!! C'est même interdit !

/*** Manipulation du contenu d'un élément HTML ***/
paragraphe1.innerHTML = "Changer tout son contenu !"; //On change tout le contenu.
//On peut ajouter du texte / du HTML à la suite du contenu déjà en place dans l'élément !
paragraphe1.innerHTML += "Mon texte ajouté, avec par exemple une balise <span> Span en plus !</span>";

/*** Manipulation du style d'un élément HTML, lorsque le style n'existe pas ! ***/
//On peut éventuellement changer le style CSS d'un élément  !
paragraphe1.style.backgroundColor = "darkgrey";
paragraphe1.style.fontWeight = 'bold'; // Tout sous forme de chaine de caractères, doubles ou simples guillemets.
// Astuce pour les tailles.
paragraphe1.style.fontSize = '16px';
paragraphe1.style.fontSize = (16*2) + 'px';

//Admettons, je veux 2 fois la taille de texte actuelle !
paragraphe1.style.fontSize = (parseInt(paragraphe1.style.fontSize) * 2) + 'px';
//On peut utiliser une propriété tout comme on utiliserait une variable !!! Important, ca vous facilitera la vie !

/**** Récupération du 2è paragraphe ****/
//Jusqu'à présent, on créait des valeurs qui venaient s'ajouter dans l'attribut style, c'est variable si la règle + valeur n'existe pas côté fichier CSS!
/* Admettons qu'on ait pas encore entrer de valeurs avec style.quelquechose */
//Ici, je récupère le 1ER élément qui dispose de la classe .classeTest. querySelector() renvoie TOUJOURS un seul élément !!! Peu importe votre sélecteur !
let paragraphe3 = document.querySelector('.classeTest'); //Avec toutes les fonctions querySelector ... utilisez les sélecteurs CSS.
paragraphe3.style.fontSize = '100px';
//paragraphe3.style.left = "100px"; // Dans certains cas ca ne fonctionnera pas !
//Solutions
let cssStyle = window.getComputedStyle(paragraphe3);
let left = cssStyle.getPropertyValue('left'); //Ici on récupère une valeur calculée par le navigateur !
console.log(left);
cssStyle.setProperty('left', '4000px'); //On remplace la valeur calculée par le navigateur par notre propre valeur !
console.log(cssStyle.getPropertyValue('left')); // On doit récupérer la valeur recalculée.


/**
 *Récupérer plusieurs éléments
 */

