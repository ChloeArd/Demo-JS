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

//Créer un span
let nouvelElement = document.createElement("span");
nouvelElement.id = "new";
nouvelElement.innerHTML = "Wesh canne à pêche !";
nouvelElement.style.backgroundColor = "yellow";
nouvelElement.style.color = "grey";
nouvelElement.style.border = "2px solid black";
nouvelElement.style.fontSize = 80 + "px";
nouvelElement.style.borderRadius = "10px "
nouvelElement.style.display = "block";
nouvelElement.style.paddingLeft = "300px";

//Créer un lien
let nouveauLien =  document.createElement("a");
nouveauLien.id = "lienN";
nouveauLien.href = "https://r.search.yahoo.com/cbclk2/dWU9MEEzMDA0RUJFMDU4NDAyRSZ1dD0xNjA3NDMwNTQ1OTgzJnVvPTgwNDAxODQwMjEzMDc2Jmx0PTImcz0xJmVzPXB4Y0syRTBHUFMuZTNGcFRPdU1vY19WdGlwbU5INm51Nzg3ZTJEeXBrM0c5bUUwLQ--/RV=2/RE=1607459346/RO=10/RU=https%3a%2f%2fwww.bing.com%2faclick%3fld%3de8b1icH9Ji3l-gh9qRfHmQnzVUCUwJNFIMmKXeDXnPiZMY8ZXqqBtKTorqBj8Bk8nYfnR20IuCZY0fdfNYaFXzAXnQeP2xXi5Tql_YyLYrcqYZvhANlgtypiVFEkPfxpDPByDnUt5Vpw5sF1kz-08sSuUJOeDK0FAY8O573av4qlRla14pQFUp5DZNNl03dzZEmUmM7A%26u%3daHR0cHMlM2ElMmYlMmZ3d3cuem9vbWFsaWEuY29tJTJmYW5pbWFsZXJpZSUyZmFjY2Vzc29pcmVzLXBvdXItY2hpZW4tYy0xLTEuaHRtbCUzZm1rd2lkJTNkc19kYyUyNnBjcmlkJTNkJTI2cGt3JTNkcHJvZHVpdHMlMjUyMCUyNTJCY2hpZW4lMjZtYXRjaCUzZGIlMjZ0cmklM2QlMjZtc2Nsa2lkJTNkMTdmYTAwN2M2NmE0MWNjNzgwMTc1ZmIzMTczNmM3Y2QlMjZ1dG1fc291cmNlJTNkYmluZyUyNnV0bV9tZWRpdW0lM2RjcGMlMjZ1dG1fY2FtcGFpZ24lM2RTJTI1MjAtJTI1MjBDaGllbiUyNTIwLSUyNTIwUHJvZHVpdHMlMjZ1dG1fdGVybSUzZHByb2R1aXRzJTI1MjAlMjUyQmNoaWVuJTI2dXRtX2NvbnRlbnQlM2RHJTI1MjAtJTI1MjBBdXRyZXM%26rlid%3d17fa007c66a41cc780175fb31736c7cd/RK=2/RS=kHlgtMBHEGK_EJqn_hfsufF2yWw-;_ylt=AwrP4o6Rcc9fKCwABLQk24lQ;_ylu=Y29sbwNpcjIEcG9zAzIEdnRpZAMEc2VjA292LXRvcA--;_ylc=X3IDMgRydAMw?IG=0acfe28ead004b45b700000000f187cc";
nouveauLien.innerHTML = " clique sur: Chiens";
nouveauLien.style.color = "orange";
nouveauLien.style.fontSize = 40 + "px";

document.getElementById("troisieme-div").append(nouvelElement);
document.getElementById("troisieme-div").prepend(nouveauLien);

//Créer un élèment identique d'un déjà crée
let nouveauElement2 = nouvelElement.cloneNode(true);
nouveauElement2.id = "new2";
nouvelElement.parentElement.append(nouveauElement2);