//Une condition sert à éxecuter un bout de code lorsqu'un test (opérateur logique) est TRUE (vrai).
// Si le test est FALSE (faux) alors le bout de code est ignoré !

// if ==> SI
let age = 19;

// Le code contenu dans cette condition ne sera éxécuté que si le contenu de la variable age est plus petit que 18 (strictement).
//if ... else ==> SI ... SINON
// SI age est plus petit que 18 ==> alors on est mineur !
if (age < 18) {
    //Vous êtes libre d'ajouter autant de code que vous le souhaitez ici !
    console.log("Vous êtes mineur");
}
// SINON ce n'st pas le cas, alors vous êtes majeur !
else {
// .... Si c'est faux, le code reprend ici !
    console.log("Ce n'est pas le cas, vous êtes majeur !");
}

// Si on a besoin de tester qu'une seul valeur alors on peut se passer du else !!!
// Exemple :
//L'utilisateur peut entrer un chiffre
let day = 24 //prompt("Entrez un numéro de jour");
day = parseInt(day) // parseInt transforme une chaine de caractère en nombre
let message = "Hello, nous sommes ";

if (day === 24) {
    day = " la veille de noël, "
}
console.log(message + "le " + day);

// Technique pour être sûr que le
console.log(parseInt("35"));
console.log(parseInt("test")); // Vous obtiendez NaN --> Not a number (pas un nombre)
// Quand vous faites un prompt, vous n'êtes jamais sûr que l'utilisateur va entre un nombre.
// De manière générale NTWUI --> Never Trust What User Input ! (Ne croyez jamais ce que l'utilisateur vous dit / entre)
let dataNumber = prompt("Donnez moi un nombre");
dataNumber = parseInt(dataNumber);
if (isNaN(dataNumber)) { //La fonction isNaN() vérifie si une variable est différente d'un nombre et pas autre chose après un parseInt() (par exemple).
    console.log("Wesh gros, t'as essayé de m'entuber ! Ca c'est pas un nombre");
    dataNumber = 0; // Si ce n'est pas un nombre, alors on peut décider que la variable sera égal à 0.
}

// Du coup maintenant on est certain que dataNumber contient un nombre et pas autre chose !
console.log("La valeur de dataNumber est: " + dataNumber);

// Du coup, on aimerait faire quelque chose si les nombres sont soit 2 - 3 - 4 - 5 - ou 6, autre chose si ce n'est pas le cas.

//Si la variable vaut 2
//Si dataNumber ===2
if (dataNumber === 2) {
    console.log("DataNumber vaut actuellement 2");
}

//Si la variable vaut 3
//SINON SI dataNumber === 3
else if (dataNumber === 3) {
    console.log("DataNumber vaut actuellement 3");
}

//Si la variable vaut 4
//SINON SI dataNumber === 4
else if (dataNumber === 4) {
    console.log("DataNumber vaut actuellement 4");
}

//Si la variable vaut 5
//SINON SI dataNumber === 5
else if (dataNumber === 5) {
    console.log("DataNumber vaut actuellement 5");
}

//Si la variable vaut 6
// SINON SI dataNumber === 6
else if (dataNumber === 6) {
    console.log("DataNumber vaut actuellement 6");
}

//Dans tous les autres cas (pas 2, ni 3, ni 4, ni 5 et ni 6).
// SINON, dans tous les autres cas !
else {
    console.log("DataNumber vaut actuellement autre chose que 2, que 3, que 4, que 5 ou que 6");
}

//On peut faire la même chose de manière beaucoup plus propre en utilisant un switch
// Un switch permet de tester différentes valeurs pour une variable donnée.
//On sait qu'on a une variable dataNumber et on sait que soit elle vaut 2, soit 3, soit 4, soit 5, soit 6 OU autre chose !
//Uniquement pour tester une suite de cas (dans le cadre d'égalités).
switch (dataNumber) {
    case 2:
        console.log("DataNumber vaut actuellement 2");
        break; //Quand valeur trouver, alors on sort.
    case 3:
        console.log("DataNumber vaut actuellement 3");
        break;
    case 4:
        console.log("DataNumber vaut actuellement 4");
        break;
    case 5:
        console.log("DataNumber vaut actuellement 5");
        break;
    case 6:
        console.log("DataNumber vaut actuellement 6");
        break;
    default:
        console.log("DataNumber vaut actuellement autre chose que 2, que 3, que 4, que 5 ou que 6");
}

/**
 * Les opérateurs logiques !
 * && --> AND --> ET
 * || --> OR --> OU
 * ! --> NOT --> NON
 */

// Quasiment tout le temps utilisés dans des conditions !
//Par exemple, je veux tester que a soit plus petit que 5 ET que b soit plus grand que 6.
let a = 4;
let b = 7;
// Jusqu'à présent, vous ne pouviez tester que sur une seul variable, avec les opérateurs logique, il est possible de tester plusieurs variables
//Testons que a < 5 et que b > 6.
// SI a < 5 ET SI b > 6 <-- il va donc falloir que les 2 tests soient VRAI (true) sinon on passe pas dedans !!!
if (a < 5 && b > 6) {
    console.log("A est plus petit que 5 mais pas que, car b est plus grand que 6 !!!! En même temps !!!");
    console.log("Si b avait été plus petit que 6, alors on n'aurait pas pu entrer ici en discothèque");
}



//Exemples

let name = prompt("Entre votre nom, sans majuscule ni accent");

switch (name) {
    case "chloe":
        alert("Bonjour, " + name);
        break;
    case "Patrick":
        alert("Bonjour, " + name);
        break;
    case "Audrey":
        alert("Bonjour, " + name);
        break;
    default:
        alert("Bonjour, inconnu");
}