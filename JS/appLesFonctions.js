/**
 * Exemple avec des éléments passés en paramètre.
 * @param idElement
 * @param couleur
 * @param couleurText
 * @param taille
 * @param largeur
 */
// Le but, ca va être de modifier des trucs sur le paragraphes.
//Tous nos changements seront identiques, d'où la raison d'une fonction
function colorElement(idElement, couleur, couleurText, taille, largeur) {
    let element = document.getElementById(idElement);
    element.style.backgroundColor = couleur;
    element.style.border = "1px solid black";
    element.style.color = couleurText;
    element.style.fontSize = (taille * 2) + "px";
    element.style.width = largeur + "rem";
    console.log(element);
}

colorElement('p1', "darkgrey", "white", 16, 200);
colorElement('p2', "yellow", "black", 5, 200);
colorElement('p3', "blue", "yellow", 12, 120);
colorElement('p4', "coral", "blue", 18, 300);
colorElement('p5', "coral", "blue");

//entrez un nombre pour faire un calcul
/**
 * Exemple avec des calculs.
 * @param nombre1
 * @returns {*}
 */
function calcul(nombre1) {
    return nombre1 + 10;
}

let result = calcul(5);
console.log(result);
console.log(calcul(6));

let result2 = calcul(10) + calcul(20);

//Je veux une fonction qui prend 2 paramètres, le 1er paramètre devra être multiplié par le second paramètre, puis être affiché dans #p1
function multiplication (nombreA, nombreB) {
    return nombreA * nombreB;
}

multiplication( 5, 10);

let result3 = multiplication(5, 10) + calcul(5);
console.log("Mon résultat: " + result3);

// On va récupérer une valeur à partir d'un paragraphe dont l'id sera donné en paramètre.
function getParagraph (id) {
    let valeur =  document.getElementById(id).innerHTML;
    valeur = parseInt(valeur)
    if (isNaN(valeur)) {//Si la valeur n'est pas numérique (chaine de caractère qui contient un nombre)
        valeur = 0;
    }

    return valeur;
}

getParagraph('p1');

//On va créer une fonction simple qui soustrait nombre 1 de nombre 2, on veut récupérer le résultat pour le stocker en variable.
function soustraction(nombre1, nombre2) {
    return nombre1 - nombre2;
}

let result4 = soustraction(60, 10);
console.log("Résultat: " + result4);