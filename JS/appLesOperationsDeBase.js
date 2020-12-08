/**
 * Opérateurs arithmétiques
 */

/**** Additions ****/
//Exemple en décomposé
//On peut utiliser des variables différentes pour l'affectation de chaque calcul...
//Pas très optimisé, car dans notre cas, on a beasoin au final que de la variable res....
let res = 5 + 5; //resultat : 10
let res2 = res + 6; //res2 = res(10) + 6
let res3 = res2 + 4; //res3 = res(16) + 4
let res4 = res3 + 2; //res4 = res(20) + 2
let res5 = res4 + 1; //res5 = res(22) + 1
let res6 = res5 + 3; //res6 = res(23) + 3

// Version un peu plus optimisée.
//On calcule TOUJOURS et on affecte APRES le calcul (pendant le calcul, la variable result n'est JAMAIS écrasée)
let result = 5 + 5; //Une addition simple, result contiendra la valeur 10.
result = result + 6; // result = result(10) + 6. On peut réutiliser la vraiable result comme on le veut, et ce même pour écraser sa valeur.
// Le = c'est la dernière chose qui est faite, l'interpreteur commence par result + 6 et seulement apres il écrase la 1ere valeur de result du coup result vaut 16.
result = result + 4; // result = result(16) + 4
result = result + 2; // result = result(20) + 2
result = result + 1; //result = result(22) + 1
result = result + 3; //result = result(23) + 3
console.log(result) //result est affiché contenant 26 !
//Bien retenir que l'affectation ( = ) est la TOUTE dernière étape !!!

//Un peu plus corsé, on va utiliser 2 variables.
let a = "10";
let b = "1";
console.log(parseInt(a) + parseInt(b));
//Les chaines de caractères "10" et "1" sont devenu des nombres grâce à parseInt.

let x = 10;
let y = 1;
let resXY = x + y;
console.log("Le résultat de X + Y est: " + resXY);

//Soustractions
let resSoustraction = 5 - 4; //Resultat resSoustraction vaut 1
resSoustraction = resSoustraction - 1; //resSoustraction = resSoustraction(1) - 1
resSoustraction = resSoustraction - 2; //resSoustraction = resSoustraction(0) - 2
console.log(resSoustraction);

//Multiplications
let resMult;
let z = 5, w = 3;

resMult = 5 * (z + w);
console.log((5 * z) + w);
console.log(5 * (z + w));

//Divisions
let resDiv = 5 / (z + x);
console.log(resDiv);

//Exponentielle
let testExp = 5 ** 2; //Correspond à 5 * 5
let testExp2 = 5 ** 3; //Correspond à 5 * 5 * 5
let testExp3 = 5 ** 4; //Correspond à 5 * 5 * 5 * 5

//Modulo
console.log("Résultat de z / w: " + (z / w)); //On teste le résultat d'une division classique ... besoin pour la démonstration.
// Quand on fait un modulo, on fait en sorte de récupérer le reste d'une division entière, donc on récupère ce qui n'a pas pu être divisé !
console.log("Résultat du modulo: " + (z % w)); //Comme 3 ne peut être contenu q'une seule fois dans 5, le modulo nous donne le reste de ce qui n'a pas été divisé dans le cadre d'une division.
//Par exemple pour savoir si un nombre est multiple d'un autre !!! Avec modulo, merci la belle vie!!
/**
 * 5 / 3 = 1.666
 * 5 / 3 = 1
 * 1 * 3 = 3
 * 5 - 3 = 2
 */

let nombre1 = 6;
let nombre2 = 7;
let multiple = 3;

//Pour nombre 1
if((nombre1 % multiple) === 0) {
    console.log(nombre1 + " est multiple de " + multiple + " car après division, il reste " + (nombre1 % multiple));
}
else {
    console.log(nombre1 + " n'est pas multiple de " + multiple + " car après division, il reste " + (nombre1 % multiple));
}

//Pour nombre 2
if((nombre2 % multiple) === 0) {
    console.log(nombre2 + " est multiple de " + multiple + " car après division, il reste " + (nombre2 % multiple));
}
else {
    console.log(nombre2 + " n'est pas multiple de " + multiple + " car après division, il reste " + (nombre2 % multiple));
}

/**
 * Les opérateurs d'affectation.
 * Voyez ca un peu comme des raccourcis.
 */

// Exemple addition et affectation
let driveMyCar = 10;
let itBe = 1;
// itBe = itBe + driveMyCar --> itBe vaut 11
itBe += driveMyCar; // genre de raccourci, fait exactement le même que le code commenté juste à la ligne précédente !

console.log(itBe)

// Exemple soustraction et affectation
let comeTogether = 10;
let heyJude = 0;
//heyJude = heyJude - comeTogether --> heyJude vaut -10
heyJude -= comeTogether; // Exactement la même chose que le code commenté à la ligne précédente !

// Exemple multiplication et affectation
let allMyLoving = 20;
let askMeWhy = 1;
//askMeWhy = askMeWhy - allMyLoving --> askMeWhy vaut 20
askMeWhy *= allMyLoving;

// Exemple les division et affectation
let imagine = 5;
let anyTimeAtAll = 2;
//anyTimeAtAll = anyTimeAtAll / imagine
anyTimeAtAll /= imagine;

// Exemple les modulo et affectation
let chains = 60;
let dontLetMeDown = 3;
//dontLetMeDown = dontLetMeDown % chains
dontLetMeDown %= chains;

/**
 * La concaténation
 * Coller 2 chaines ensemble ! On forme une grande chaine de caractères avec de petites chaines de caractères par exemple !
 */
// Il n'y a pas d'espace qui se crée lorsqu'on colle 2 chaines !
let ch1 = "Hello ";
let ch2 = "world";
let ch3 = " how are you ?";

let concat = "December: " + ch1 + ch2 + ch3;
// ` ` --> sur la touche 7.
let concat2 = `December: ${ch1} ${ch2} ${ch3}`; // Date de l'ES6 (Ecmascript version 6, pas du tout obligatoire).
console.log(concat);
console.log(concat2);


//Exemples
let nb1 = prompt("entrez un chiffre");
let nb2 = prompt("Entrez un chiffre");
alert(parseInt(nb1) + parseInt(nb2));

let nb3 = prompt("entrez un chiffre");
let nb4 = prompt("entrez un chiffre");
alert((parseInt(nb1) * parseInt(nb4)) / (parseInt(nb2) - parseInt(nb3) ** 2));

alert(" nb2 += nb4 = " + (nb2 += nb4));

nb1 += 2;
console.log(nb1);

let chaine1 = "bonjour, ";
let chaine2 = prompt("Entre votre prénom");
alert(chaine1 + chaine2);

let input1 = document.getElementById("input1");
let button = document.getElementById("button");

function entrer() {
    button = 12;
    input1.value = button;
}

button.addEventListener("click", entrer);

let button2 = document.getElementById("button2");

function entrer2() {
    button2 = 3;
    input1.value = button2
}

button2.addEventListener("click", entrer2);

let resultat = document.getElementById("result");

function calculer() {
    button += button2
    input1.value = button;
}

resultat.addEventListener("click", calculer);