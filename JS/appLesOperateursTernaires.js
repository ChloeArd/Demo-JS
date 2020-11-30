//Les opérateurs ternaires sont à utiliser avec parcimonie.
let a = 1;
let message;

if(a === 1) {
    message = "a est égal à 1";
}
else {
    message = "a est différent de 1";
}

console.log(message);

//Le ternaire n'est utile que si vous avez une structure conditionnelle simple !
//Utile lorsqu'on a qu'une affectation a effectuer !! Pas utile quand plusieurs opérations dans le bloc de code !
//ICI ==> On pose la question (a est-il égal à 1) ?
//           quoi retourner si OUI : quoi retourner si NON --> ture : false
//DONC ==> question ? OUI : NON
message = (a === 1) ? "a est égal à 1" : "a est différent de 1"; //ICI, c'est vrai --> ce qui est retourné est avant les :
console.log(message);

a = 2;
message = (a === 1) ? "a est égal à 1" : "a est différent de 1"; //ICI, c'est faux --> ce qui est retourné est après les :
console.log(message);



