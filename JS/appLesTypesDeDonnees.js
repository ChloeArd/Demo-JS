/**
 *Les différents types de données que vous pouvez utiliser en JS sont
 * En fonction du type de donnée, vous pourrez ou ne pourrez pas effectuer certaines choses !
 * String --> Chaîne de caractères.
 * Number --> Un nombre, qu'il soit entier (sans virgule), positif ou négatif, ou encore à virgule (décimal).
 * Boolean --> VRAI (true) ou FAUX (false) --> Utilisé pour les conditions et les boucles, ne prend que ces 2 valeurs, rien d'autre !
 * Null --> Ne contient rien du tout !
 * Undefined --> Etat d'une variable non initialisée !
 */

/**
 * Le type de données String
 */
// String --> Chaine de caractères, toujours entourée de guillemets !!!!
// Tout ce qui est entouré de guillemets simples ou doubles est une chaîne de caractères !!!
    // TOUTE donnée que vous récupérez de votre fichier HTML avec JS, est une chiane de caractères.
let stringTest = "Ma chaine de caractères qui est TOUJOURS entourer de guillemets, ici des doubles";
// Une chaine de caractère peut aussi s'écrire comme ca:
let stringTest2 = 'Ma chaine de caractères qui est TOUJOURS entourer de guillemets, ici des simples';
//Si vous devez utiliser le simple ou le double guillemets à l'intérieur d'une chaine, alors vous devrez l'échapper.
let stringTest3 = "Une chaine de caractères avec \" inside !!!";
// Pareil pour les simples guillemets !!
let stringTest4 = 'Une autre chaine de caractères avec un simple \' dedans !!!';

// Utiliser un simple ou double ne pose pas de problème dans le cas ou vous utilisez les doubles, vous pourrez utiliser des simples dans votre chaine
let stringTest5 = "Une chaine avec un ' dedans"
let stringTest6 = 'Une chaine avec un " dedans'

console.log(stringTest3); //avec le double guillemet
console.log(stringTest4); //avec le simple guillemet
console.log(stringTest5); //guillemet simple dans une chaine initialisée avec des double guillemets
console.log(stringTest6); //guillemet double dans une chaine initialisée avec de simples guillemets

/**
 *Le type de données Number
 */
//Un number est un nombre, il est défini sans guillemets.
let numberTest = 24; // Ceci est une variable qui contient une donnée de type Number (un nombre quoi).
let numberTest2 = '24'; //Ca c'est pas un nombre, c'est une chaine de caractères.
let numberTest3 = "24"; //Ca non plus, guillemets, donc pas un nombre mais bel et bien une chaine de caractères !!
// Si vous séparez par une virgule dans une console.log, alors vous aurez le contenu des variables précisées sur une seul ligne!
// Le typeof vous donne le Type de données contenu dans une variable !! Très pratique dans certains cas (lorsqu'on débute surtout).
console.log(typeof numberTest, typeof numberTest2, typeof numberTest3);
//                  number             string              string

//Un nombre négatif
let numberTest4 = -45;

//Un nombre décimal, en JS, il n'y a pas de virgule, c'est la notation anglophone, on utilise des points.
let numberTest5 = 5.45;

//Un nombre négatif décimal
let numberTest6 = -6.544455;

/**
 * Boolean
 */
let testBoolean = true; //Soit vrai
let testBoolean2 = false; //Soit fausse

/**
 * Null
 */
let testNull = null; //Uniquement null, absence de valeur !!

/**
 * Undefined
 * Signifie qu'il y a eu aucune initialisation de la variable
 * Ou que la variable n'existe pas
 * Ou que l'élément HTML que vous tentez de récupérer n'existe tout simplement pas (généralement problème d'écriture de l'ID ou de la classe)
 */
let testUndefined; // Celui la est identique a celui d'en bas.
let testUndefined2 = undefined;
