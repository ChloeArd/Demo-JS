//Premier exemple complet des objets introduction:

/*
let Personne = { //Personne ets un objet.
    nom: "Ardoise",
    prenom: "Chloé",
    age: 18,
    job: "Apprentissage au développement web",
    jobPlace: "UpTo",
    hobbies: ["Dessin", "Jeux vidéos"],

    //Return first and last name
    getNomPrenom: function () {
        return nom + " " + prenom;
    },

    // Return the current position
    getPosition: function () {
        return job + "at" + jobPlace;
    },

    //Return all hobbies.
    getHobbies: function () {
        let msg = "";
        for (let hobby of hobbies) {
            msg += hobby + ",";
        }
        return msg;
    }
};

console.log(Personne.getNomPrenom());
console.log(Personne.getPosition());
console.log(Personne.getHobbies());

//Lorque l'on souhaite accéder à une propriété (variable) ou à une méthode (fonction) de not objet,
//Nous devons utiliser le nom de l'objet suivi d'un point.
let phrase = Personne.age + "ans, " + Personne.prenom;
let fonction = Personne.getHobbies();
console.log(phrase);
console.log(fonction);
*/

//Objet Math et objet Number, ici on utilise des fonctions (méthodes).
let randomNumber = Math.random();
let nombre = Number.parseInt("45");

//Même les éléments que l'on récupère à partir de notre code HTML est objet.
//Ici on modifie la propriété (variable) de l'objet HMTLElement que l'on récupère à parti du DOM.
let element = document.getElementsByTagName("p");
element.innerHTML = "Je change de valeur de cette propriété";

/****
 ** L'objet String.
 ****/

/**
 *  .length
 * La propriété length permet d'obtenir la longueur d'une chaine de caractères, c'est une propriété de l'objet String.
 * On peut utiliser length sur une variable.
 */
let chaine = "Hello";
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");

console.log(chaine.length);// vaut 5

//On peut utiliser length directement sur innerHTML (innerHTM est une propriété qui contient une chaine de caractères)
console.log(p1.innerHTML.length);// vaut 0
console.log(p2.innerHTML.length);// vaut 0

//On peut également utiliser length sur une chaine directement !
console.log("Hello".length); //Affiche 5 en console

/**
 * includes()
 * permet de déterminer si une chaine de caractères est contenue dans une autre.
 * Params: 1 -> chaine à chercher.
 * Return: true or false
 */
let chaine2 = "Hello World !";
let chaineATrouver = "World !";

//Ici la chaine "Hello World !" contient bien la chaine "World".
if (chaine2.includes("World !")) {
    alert("La chaine contient bien la chaine 'World'");
}

//Ici, la chaine "Hello World !" contient bien la chaine "World !".
if (chaine2.includes(chaineATrouver)) {
    alert("La chaine contient bien la chaine 'World !'"); //Peut utiliser en paramètre une variable contenant une chaine de caractères
}

//Ici, la chaine "Hello World !" ne contient pas "world" car le "w" est en minuscule, pas sur la chaine de base.
if (chaine2.includes("world")) {
    alert("La chaine contient bien la chaine 'world'");
}

/**
 * startsWith()
 * permet de déterminer si une chaine de caractère commence par une certaine sous chaine.
 * Params: 1 -> chaine à chercher.
 * Return: true or false
 */

let aTrouver = "Hello";

//Renvooie TRUE si la chaine commence par "Hello".
if (chaine2.startsWith(aTrouver)) {
    console.log("startsWith: La chaine commence bien par 'Hello'");
}

//Cette méthode est sensible à la casse, 'Hello' est différent de 'hello'.
if (chaine2.startsWith("hello")) {
    console.log("startsWith: La chaine commence bien par 'hello'");
}
else {
    //comme "Hello" est différent de "hello", on passe dans le else, la méthode a renvoyé FALSE.
    console.log("startsWith: Cette méthode est sensible à la casse, hello n'est pas la même que Hello");
}

if (chaine2.startsWith("World")) {
    console.log("startsWith: La chaine commence bien pas 'World");
}

//On peut aussi tester si un chaine de caractère commence par un caractère spécifique !
//Renvoie TRUE si la chaine commence par H.
if (chaine2.startsWith("H")) {
    console.log("startsWith: La chaine commence bien par 'H'");
}

/**
 * endsWith()
 * permet de déterminer si une chaine de caractère se termine par une certaine sous chaine.
 * Params: 1 -> chaine à chercher.
 * Return: true or false
 */

//Renvoie TRUE si la chaine se termine par "World !"
if (chaine2.endsWith(chaineATrouver)) {
    console.log("endsWith: La chaine se termine bien par 'World !'");
}

//Cette méthode est sensible à la casse, 'World !' est différent de 'world !'.
if (chaine2.endsWith("world !")) {
    console.log("endsWith: La chaine se termine bien par 'world !'");
}
else {
    //comme "World !" est différent de "world !", on passe dans le else, la méthode a renvoyé FALSE.
    console.log("endsWith: Cette méthode est sensible à la casse, 'world !' n'est pas la même que 'World !'");
}

//On peut aussi tester si un chaine de caractère commence par un caractère spécifique !
//Renvoie TRUE si la chaine commence par !.
if (chaine2.endsWith("!")) {
    console.log("endssWith: La chaine se termine bien par '!'");
}

/**
 * substring()
 * retourne un morceau de la chaine courante à partir d'un indice de départ
 * Params: 1 -> Indice de départ
 *         2 optionnel -> Indice de fin
 * Return: Sous chaine (string)
 */

//Récupère "Hello".
let nouvelleChaine = chaine2.substring(0, 5);
console.log("substring: de 0 à 5 -> " +  nouvelleChaine); //nouvelle chaine à partir de l'index 0 jusqu'à l'index 5 (non compris).

nouvelleChaine = chaine2.substring(6); //nouvelle chaine à partir de l'index 6 jusqu'à la fin !
console.log("substring: de 6 à la fin -> " + nouvelleChaine);

/**
 * substr()
 * retourne la partie d'une chaine de carcatères comprise entre l'indice de départ et un certain nombre de
 * carcatères après celui-ci. Plus recommandée !!!
 *  Params: 1 -> Indice de départ
 *         2 optionnel -> Nombre de caractères
 * Return: Sous chaine (string)
 */

//Récupère "Hello".
let nouvelleChaine2 = chaine2.substr(0, 8);
console.log("substr: de 0 à 8 -> " +  nouvelleChaine2); //nouvelle chaine à partir de l'index 0 jusqu'à l'index 5 (non compris).

nouvelleChaine2 = chaine2.substr(6); //nouvelle chaine à partir de l'index 6 jusqu'à la fin !
console.log("substr: de 6 à la fin -> " + nouvelleChaine2);

/**
 * indexOf()
 * permet de trouver la position de la 1ère occurence d'un caractère ou d'une chaine de caractères dans une
 * chaine de caractères de base.
 * Params: 1 -> chaine de caractères ou caractère
 *         2 optionnel -> l'endroit où la recherche doit démarrer (number)
 * Return: l'index (position) du début de la chaine / du caractère (number) ou -1 si rien n'a été trouvé !
 */

let position = chaine2.indexOf('World');
console.log("indexOf: position du 'World' est " + position);

//Sensible à la casse, 'world' renverra -1 car la chaine ne sera pas trouvée !
position = chaine2.indexOf('world');
console.log("indexOf: position du 'world' est " + position + ", c'est à dire, qu'il ne l'a pas trouvé !");

/**
 * lastIndexOf()
 * fonctionne exactement de la même manière que indexOf() sauf qu'elle renvoie l'index de la dernière occurence
 * ou -1 si rien n'a été trouvé !
 */

//Renvoie le dernier index (positon) du caractère 'l'.
let position2 = chaine2.lastIndexOf("l");
console.log("lastIndexOf: position du dernier l dans la chaine est " + position2);

//Sensible à la casse, "world" renverra -1 car la chaine ne sera pas trouvée !
position2 = chaine2.lastIndexOf('coucou');
console.log("lastIndexOf: position du 'coucou' est " + position2 + ", il n'existe pas !");

/**
 * slice()
 * extrait une section d'une chaine de caractères et la retourne comme une nouvelle chaine de caractères.
 * La chaine de départ n'est pas modifiée.
 * Params: 1 -> La position de départ
 *         2 optionnel ->  La position où s'arrêter
 * Return: retourne une nouvelle chaine de caractères
 */

//Renvoie une nouvelle chiane à partir de l'index 5.
let nouvelle = chaine2.slice(6); //World !
console.log("slice: " + nouvelle);

//Avec début et index de fin.
nouvelle = chaine2.slice(6, 11); // World
console.log("slice: " + nouvelle);

//Avec index négatif, démarre à la fin de la chaine
nouvelle = chaine2.slice(-3); // d !
console.log("slice :" + nouvelle);

nouvelle = chaine2.slice(-7, -2); // World
console.log("slice :" + nouvelle);

/**
 * replace()
 * permet de rechercher une chaine (caractère) dans une chaine de caractères et de la remplacer par une autre.
 * Ne remplace que la 1ère trouvée, s'il en existe plusieurs, il en existe d'autres méthodes.
 * Params: 1 -> chaine ou carcatère à rechercher
 *         2 -> chaine ou carcatètre avec laquelle / lequel on la rmeplacer param1 si trouvé
 * Return:  renvoie une nouvelle chaine de caractères, ne modifie pas la chaine qui invoque la méthode !
 */

let nouvelle2 = chaine2.replace('World', 'Guys');
console.log("replace: remplace World par Guys -> " + nouvelle2);

/**
 * toLowerCase()
 * retourne une chaine de caractères en minuscules !
 * Params: aucun
 * Return: Nouvelle chaine de caractère en minuscule.
 */

nouvelle2 = chaine2.toLowerCase();
console.log("toLowerCase: Hello World ! devient -> " + nouvelle2);

/**
 * toUpperCase()
 * retourne une chaine de caractères en majuscules !
 * Params: aucun
 * Return: Nouvelle chaine de caractère en majuscules.
 */

nouvelle2 = chaine2.toUpperCase();
console.log("toUpperCase: Hello World ! devient -> " + nouvelle2);

/**
 * trim()
 * supprime les espaces ou les blancs en début et en fin de chaine.
 * Pratique quand on veut nettoyer des données pour ensuite effectuer des opérations dessus (formulaires ou API).
 * Params: aucun
 * Return: une nouvelle chaine de carcatères
 */

let chaine3 = " Hello World ! "
console.log("Sans trim: Longueur de la 1ère chaine: " + chaine3.length)

nouvelle2 = chaine3.trim();
console.log("Avec trim: Longueur de la 1ère chaine: " + nouvelle2.length)

/**
 * split()
 * permet de diviser une chaine de caractères à partir d'un séparateur pour fournir un tableau de sous-chaines.
 * Params: Séparateur sous forme de chaines de caractères
 * Return: Un tableau contenant les différents mots de la chaine de caractères
 */

//Split avec les espaces comme séparateurs sur chaque mots, caractères.
let tableau = chaine2.split(" ");
console.log("Split: " + tableau);

//Split avec les espaces comme séparateurs sur chaque lettres, caractères.
let tableau2 = chaine2.split("");
console.log("Split: " + tableau2);

/**
 * Chaines commes des tableaux
 * traiter une chaine de caractères comme s'il s'agissait d'un tableau
 */

//Affichage du 1er carcatère de la chaine dans notre console.
console.log("1er caractère de la chaine -> " + chaine2[0]);

//On peut également traiter une chaine de caractères dans une boucle, tout comme vous le feriez pour
// un tableau ou pour une collection d'éléments HTML réupérée en JS.
for (let i = 0; i < chaine2.length; i++) {
    console.log("Toute la chaine de caractères -> " + chaine2[i]);
}
