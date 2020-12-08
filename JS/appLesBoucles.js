/**
 *La boucle while
 */
let elements = document.getElementsByTagName('p'); //On récupère tous les éléments de type paragraphe. (TOUS) et il y en a plusieurs.
console.log(elements); //On a bien plusieurs éléments.
console.log("Test de la taille de la collection: " + elements.length); // La propriété length contient le nombre d'éléments que nous avons récupéré.

//Pour accéder à chaque élément, il faudra boucler sur la collection ! Pas d'autre choix !
let i = 0; //On dit souvent qu'un passage dans une boucle est une itération.

while (i < elements.length) { //ici, nous avons 8 éléments, la propriété length contient donc la valeur "8".
    let paragraphe = elements.item(i); //On récupère à chaque fois un élément d'index i.
    // On aurait pu aussi récupérer l'élement individuel de la manière suivante:
    let demoCrochetsParagraphe = elements[i];
    console.log("Element: " + paragraphe + " " + i);
    paragraphe.innerHTML = "Je suis le paragraphe d'index: " + i;

    i++; //Correspond à i = i + 1 OU ENCORE i += 1.
}

/**
 *La boucle do ... while
 */

i = 0;
let spans = document.getElementsByTagName('span');
console.log("Il y a un nombre total de " + spans.length + " spans");

do {
    //Même principe que pour la boucle while, sauf qu'on passe au moins une fois dans la boucle !
    console.log("Je suis passé dans la boucle ! A l'heure actuelle i vaut : " + i);
    i++;
}
while (i < spans.length);


/**
 *La boucle for
 */
let i1 = 0;
while (i1 < 10) {
    console.log("i1 vaut: " + i1);
    i1++;
}


//Mettre le même texte dans tous les span
let spanTest = document.getElementsByTagName('span')

for(let i1 = 0; i1 < spanTest.length; i1++) {
        spanTest.item(i1).innerHTML = "blabla";
}

let elementsFor = document.getElementsByClassName('maClasse'); //Pas besoin du point ! (sauf si querySelector() ou querySelectorAll().)
for(let item = 0; item < elementsFor.length; item++) {
    let pMaClasse = elementsFor[item]; //On aurait pu utiliser aussi elementsFor.item(item);
}

for(let bonjour = 10; bonjour > 5; bonjour--) {
    console.log("bonjour vaut: " + bonjour);
}