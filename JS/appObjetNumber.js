/****
 **** Objet - Number
 ****/

/*
 * isInteger()
 * permet de déterminer si une valeur est un entier valide
 * Params: aucun
 * Return: True si la valeur est une entier, False si la valeur n'est pas un entier
*/

let nombre = 52;

if (Number.isInteger(nombre)) {
    console.log("isInteger: Mon nombre est bien un entier");
}

//La méthode ne fonctionne que sur les nombres.
if (Number.isInteger("54")) {
    console.log("isInteger: Ca va...");
}

//Avec un nombre flottant, la méthode renverra false !
if (Number.isInteger(54.9875)) {
    console.log("isInteger: Nombre entier");
}
else {
    console.log("isInteger: Mon nombre n'est pas un nombre entier");
}

/*
 *isNaN()
 * permet de déterminer si la valeur passée en argument est la valeur NaN (valeur qui appartient au type Number).
 * Params: 1 -> La valeur à tester (number, string, ...)
 * Returns: True si la valeur représentée n'est pas un nombre, false si la valeur représentée est un nombre.
 */

let nombre2 = "52";

if (Number.isNaN(nombre)) {
    console.log("isNaN: La contenu de la variable n'est pas un nombre");
}
else {
    console.log("isNaN: Le contenu de la variable est bel est bien un nombre");
}

//Peut aussi s'écrire sans Number.
if (isNaN(nombre2)) {
    console.log("isNaN: Le contenu de la variable n'est pas un nombre");
}
else  {
    console.log("isNaN: Le contenu de la variable est bel et bien un nombre");
}

/*
 * parseFloat()
 * permet de convertir une chaine de caractères en un nombre décimal.
 * Params: 1 -> La chaine de caractères à transformer
 * Returns: un Number décimal
 */

let value = "54.675rem";

//Peut également être utilisé sans spécifier Number.
console.log("parseFloat :" + Number.parseFloat(value));

/*
 * parseInt()
 * permet de convertir une chaine de caractères en un entier (Number)
 * Params: 1 -> La chaine à transformer en entier
 *         2 optionnel -> une base autre que la base 10 -> (2, 8, 16, ...)
 * Return: Un entier parsé sous forme de Number
 */

let value1 = "287.457rem";
let value2 = "200px";
let value3 = "20px457px";
let value4 = "px25px258";

//Peut également être utilisée sans spécifier Number.
console.log("parseInt: " + Number.parseInt(value1)); // 287

//Ne tient pas compte d'autre chose que les nombres.
console.log("parseInt: " + Number.parseInt(value2)); //200

//Ne prend pas en compte qu'une valeur numérique continue
console.log("parseInt: " + Number.parseInt(value3)); //20

//Si la chaine ne commence pas par un nombre, alors NaN est renvoyé !
console.log("parseInt: " + Number.parseInt(value4)); //NaN

/*
 * toFixed()
 * permet de formater un nombre en indiquant le nombre de chiffres après la virgule à garder. En fonction des cas,
 * arrondis à la décimale plus proche.
 * Params: 1 -> Nombre de décimales à conserver
 * Return: chaine de caractères contenant le nombre à virgule formaté
 */

value1 = 54.368;

value1 = value1.toFixed(2); //"54.37"
//Attention, toFixed() renvoie une chaine de caractères.
console.log("toFixed: " + typeof value1 + " ==> passe de 54.368 à " + value1);

/*
 * toString()
 * permet de transformer un nombre en une chaine de caractères
 * Params: 1 optionnel -> base 2, 8, 10, 16, ...
 * Return: chaine de caractères
 */

value1 = 54.368;
console.log("toString: " + value1.toString());

