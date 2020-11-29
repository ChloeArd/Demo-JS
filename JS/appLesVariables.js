/**
 *  ATTENTION : un fichier JS est lu par votre navigateur TOUJOURS de haut en bas !!!!
 */

/*  Retenez qu'on utilise presque tout le temps le mot clé let pour une variable*/
/* Une variable ne peut pas commencer par un nombre, pas de caractère spécial et pas d'accent !! */
/* Une variable, on met absolument ce qu'on veut dedans, un nombre, un élement HTML, etc...*/
/* Une variable ne peut être déclarée qu'une seul fois ! */
/* let sert uniquement à déclarer la variable, donc pour une variable vous ne l'utiliserez le mot clé qu'une seul fois !!*/
/* Une variable ne peut contenir qu'une seul chose */

/* Déclarer une variable = utiliser let + nom de la variable*/
/* Si on ne met rien dans la variable, elle est undefined (rien dedans) */
/* En gros, une variable = un seul let */
let testDeclaration;
console.log(testDeclaration);

/* De préférence un nom de variable pas trop long*/
/* Un nom de variable doit être explicite !! On doit comprendre ce a quoi elle se rapporte */

/**
 * Exemple d'initialisation d'une variable - Exemple 1.
 * Déclaration et initialisation un peu plus loin.
 */
let testInitialisationUn;
console.log(testInitialisationUn); // J'affiche ce qu'il y a dedans dans ma console (uniquement pour vous, ne le laissez pas !!!)
// Ici, j'INITIALISE ma variable = Mettre quelque chose dedans pour la TOUTE PREMIERE FOIS !!!
testInitialisationUn = "Ma variable est initialisée !!";
// Voyez le résultat de l'initialisation dans votre console de développeur !
console.log(testInitialisationUn);

/**
 * Exemple d'initialisation d'une variable - Exemple 2.
 * Forme utilisée le plus souvent !
 */

let testInitialisationDeux = 52; //Forme la plus utilisée.
console.log("Déclaration et initialisation en une seul ligne: " + testInitialisationDeux);

/**
 * Le contenu d'une variable peut changer à n'importe quel moment !!! c'est vous qui décidez !!!
 */
// Si maintenant je change le contenu de testInitialisationDeux et que j'affcihe le résultat...
// A partir du moment ou on utilise = suivi d'une valeur, on vient écraser l'ancienne valeur de testInitialisationDeux !!
testInitialisationDeux = "Ma nouvelle valeur pour testInitialisationDeux !!!"
console.log(testInitialisationDeux);

/**
 * Les constantes, s'écrivent en MAJUSCULE de préférence !
 * Une constante ne change JAMAIS de valeur, utile quand on utilise plusieurs fois la même valeur dans un code .
 */
const PI = 3.145;
console.log(PI)
console.log(PI)
console.log(PI)

