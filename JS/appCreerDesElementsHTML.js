let div1 = document.getElementById('premier-div');
let div2 = document.getElementById('deuxieme-div');

//Le 1er objectif sera de créer un nouvel élement <span> et de l'ajouter au premier div (#premier-div)
let nouveauSpan = document.createElement("span"); // Phase 1 ==> Je crée l'élement.
nouveauSpan.id = "js-ajout"; //Je lui ajoute un ID.
nouveauSpan.className = "spanBackground"; //Eventuellement je lui ajoute une classe !
nouveauSpan.classList.add("spanTextColor"); //Ajouter une classe CSS (utilse si une autre classe a déjà été donnée, pour ne pas supprimer celle qui existe déjà).
nouveauSpan.classList.remove("blabla"); //Supprime une classe CSS de la liste des classes de l'élément.
nouveauSpan.innerHTML = "Quelque chose a mettre";

// Phase 2 ==> Je le place dans le bon parent.
// div1.prepend(nouveauSpan); // Ajoute à la fin du parent.
//div1.append(nouveauSpan); //Ajoute au début du parent.
let p2 = document.getElementById('p2');
div1.insertBefore(nouveauSpan, p2);

//Je veux une fonction qui créé tous le temps un span, on pourra juste lui donner en paramètre l'id qu'on lui donnera.
function createSpanElement(id, texte, parent) {
    let element = document.createElement("span");
    element.id = id;
    element.innerHTML = texte;
    parent.append(element);
    return element; //Sortir l'element quand la fonction sera terminé.
}

let geeks = createSpanElement("les-geeks", "Mon nouveau span", div1);
let students =createSpanElement("les-students", "JS c'est cool !", div2);
let studentsV2 = createSpanElement("les-students-v2", "JS c'est cool ! Pour sûr", document.body);

// studentsV2.remove(); //Suppression à partir de lui même
// students.parentElement.removeChild(students); //Supression à partir de l'élément parent, ancienne méthode toujours utilisée.
document.body.removeChild(studentsV2);
div2.removeChild(students);