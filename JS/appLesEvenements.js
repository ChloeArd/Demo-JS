let button = document.getElementById('bouton');
let buttonDelete = document.getElementById('delete-event');
let input = document.getElementById('input1');

//Ajout d'un évènement (listener) de type click, sur le bouton
button.addEventListener('click', function () {
    console.log("Le texte que tu veux");
});

//Ajout d'un évènement de type mouseenter sur l'élèment input
input.addEventListener('mouseenter',function (){
    //this.previousElementSibling.style.backgroundColor = "yellow";
    //this.previousElementSibling.style.color = "red";
    document.getElementById('label1').style.backgroundColor = "yellow";
});

//Ajout d'un évènement lord de la sortie de l'input, on remet notre background à son état d'origine.
input.addEventListener('mouseleave', function (){
    document.getElementById('label1').style.backgroundColor = "initial";
});

function buttonClick() {
    this.style.width = "500px";
}

button.addEventListener('click', buttonClick);

//Ajout d'un évènement sur le bouton delete event pour supprimer l'évenement click + buttonClick() de button
buttonDelete.addEventListener('click', function (){
    button.removeEventListener('click', buttonClick);
});


//BONUS !!!!
let elements = document.getElementsByTagName('p');
for (let i = 0; i < elements.length; i++) {
    elements.item(i).style.backgroundColor = "black";
}

for (let paragraphe of elements) {
    paragraphe.style.backgroundColor = "red";
}

/** for (let i in elements) {
    elements.item(i).style.backgroundColor = "ghostwhite";
}
 */
