//Quand je parle de retourner, je parle de résultat
//Avec les opérateurs de comparaison, ce qui sera retourné est TOUJOURS un booléen --> Soit true (vrai), soit false (faux)
// Qui dit retour dit variable ou structure de contrôle (if, while, etc... qu'on voit ensuite au prochain live !)

/*
 * == : teste l'égalité entre deux valeurs.
 * Je ne recommande pas d'utiliser le double égal, maitenant que vous comprenez pourquoi (voir exemples):
 */
console.log("--OPERATEUR ==")
// Tests avec les valeurs de types booléen
let result1 = true == true; //Retourne true, result1 contient la valeur true (vrai) car vrais est égal à vrais
let result2 = true == false; //Retourne false, result2 contient la valeur false (faux) car vrais est différent de faux
let result3 = false == false; //Retourne true, result3 contient la valeur true (vrai) car faux est égal à faux
let result4 = true == 1;
let result5 = true ==5;
let result6 = true == "1";
let result7 = true == "true";
let result8 = false == 0;
let result9 = false == "0";
let result10 = false == "false";

console.log("Result1 vaut: " + result1 + " ==> true == true");
console.log("Result2 vaut: " + result2 + " ==> true == false");
console.log("Result3 vaut: " + result3 + " ==> false == false");
console.log("Result4 vaut: " + result4 + " ==> true == 1");
console.log("Result5 vaut: " + result5 + " ==> true == 5");
console.log("Result6 vaut: " + result6 + " ==> true == \"1\"");
console.log("Result7 vaut: " + result7 + " ==> true == \"true\"");
console.log("Result8 vaut: " + result8 + " ==> false == 0");
console.log("Result9 vaut: " + result9 + " ==> false == \"0\"");
console.log("Result10 vaut: " + result10 + " ==> false == \"false\"");

/*
* === : teste l'égalité entre deux valeurs ET prend en compte aussi le type de donnée !!!!
 */

console.log("-- OPERATEUR ===")

// Tests avec les valeurs de types booléen
result1 = true === true; //Retourne true, result1 contient la valeur true (vrai) car vrais est égal à vrais
result2 = true === false; //Retourne false, result2 contient la valeur false (faux) car vrais est différent de faux
result3 = false === false; //Retourne true, result3 contient la valeur true (vrai) car faux est égal à faux
result4 = true === 1;
result6 = true === "1";
result7 = true === "true";
result8 = false === 0;
result9 = false === "0";
result10 = false === "false";

console.log("Result1 vaut: " + result1 + " ==> true === true");
console.log("Result2 vaut: " + result2 + " ==> true === false");
console.log("Result3 vaut: " + result3 + " ==> false === false");
console.log("Result4 vaut: " + result4 + " ==> true === 1");
console.log("Result5 vaut: " + result5 + " ==> true === 5");
console.log("Result6 vaut: " + result6 + " ==> true === \"1\"");
console.log("Result7 vaut: " + result7 + " ==> true === \"true\"");
console.log("Result8 vaut: " + result8 + " ==> false === 0");
console.log("Result9 vaut: " + result9 + " ==> false === \"0\"");
console.log("Result10 vaut: " + result10 + " ==> false === \"false\"");

// Egalité avec différentes valeurs ( en utilisant le triple égal ) ===
//Avec des nombres entiers
let result11 = 1 === 1; //Puisqu'on compare à la fois la valeur ET le type, le résultat sera TRUE
let result12 = 1 === 0; //Puisqu'on compare à la fois la valeur ET le type, le résultat sera FALSE
let result13 = -35 === 52; //Puisqu'on compare à la fois la valeur ET le type, le résultat sera FALSE
let result14 = "-35" === -35; //Puisqu'on compare à la fois la valeur ET le type, le résultat sera FALSE
let result15 = "-35" === "-35"; //Puisqu'on compare à la fois la valeur ET le type, le résultat sera TRUE
let result16 = "mon texte" === "mon texte 2"; //Puisqu'on compare à la fois la valeur ET le type, le résultat sera FALSE
let result17 = "mon texte pour tester" === "mon texte pour tester"; //Puisqu'on compare à la fois la valeur ET le type, le résultat sera TRUE

console.log("Result11 vaut: " + result11 + " ==> 1 === 1");
console.log("Result12 vaut: " + result12 + " ==> 1 === 0");
console.log("Result13 vaut: " + result13 + " ==> -35 === 52");
console.log("Result14 vaut: " + result14 + " ==> \"-35\" === -35");
console.log("Result15 vaut: " + result15 + " ==> \"-35\" === \"-35\"");

/**
 * !== teste l'inégalité entre 2 valeurs ET prend en compte aussi le type de donnée !!!!!
 * Je préfére que vous n'utilisiez pas le != (ne teste pas le type) mais utilisez plutôt le !== .
 */
console.log("--OPERATEUR !==");
let result18 = 1 !== 1; //Puisqu'on compare à la fois la valeur ET le type, le résultat sera FALSE (car 1 est bien strictement égal à 1 et non différent)
let result19 = 1 !== 0; //Puisqu'on compare à la fois la valeur ET le type, le résultat sera TRUE (car le type est le même mais pas la valeur)
let result20 = -35 !== 52; //Puisqu'on compare à la fois la valeur ET le type, le résultat sera TRUE (car le type de donnée identique mais valeurs différentes)
let result21 = "-35" !== -35; //Puisqu'on compare à la fois la valeur ET le type, le résultat sera TRUE (car la valeur est la même mais le type de donnée est différentes (stirng et number))
let result22 = "-35" !== "-35"; //Puisqu'on compare à la fois la valeur ET le type, le résultat sera FALSE (car -35 est bien strictement égale à -35 et du même type (string))
let result23 = "mon texte" !== "mon texte 2"; //Puisqu'on compare à la fois la valeur ET le type, le résultat sera TRUE (car le type de donnée est identique mais la valeur est différentes)
let result24 = "mon texte pour tester" !== "mon texte pour tester"; //Puisqu'on compare à la fois la valeur ET le type, le résultat sera FALSE (car même valeur et même type (string))


console.log("Result18 vaut: " + result18 + " ==> 1 !== 1");
console.log("Result19 vaut: " + result19 + " ==> 1 !== 0");
console.log("Result20 vaut: " + result20 + " ==> -35 !== 52");
console.log("Result21 vaut: " + result21 + " ==> \"-35\" !== -35");
console.log("Result22 vaut: " + result22 + " ==> \"-35\" !== \"-35\"");
console.log("Result23 vaut: " + result23 + " ==> \"mon texte\" !== \" mon texte 2\"");
console.log("Result24 vaut: " + result24 + " ==> \"mon texte pour tester\" !== \"mon texte pour tester\"");

/**
 * > teste que la valeur de gauche est plus grande que la valeur de droite !!!!!
 * Ici, on parle bien de la valeur.
 */
let chaineDemo = "Hello World" //Les espaces comptes

console.log("--OPERATEUR >");
let result25 = 5 > 6; // Pas de surprise, le résultat est FALSE car 5 est bien plus petit que 6
let result26 = 6 > 5; // TRUE car 6 est bel et bien plus grand que 5
let result27 = 6 > 6; // FALSE  car les valeurs sont identiques
let result28 = 6 > "Hello"; // FALSE puisque je compare un nombre avec une chaine, ca n'a pas de sens !
// length contient la longueur de la chaine de caractère, il ne transforme pas en nombre, mais contient un nombre représentant le nombre de caractères de la chaine, c'est une PROPRIETE
let result29 = 6 > "Hello".length; // TRUE
let result30 = 6 > chaineDemo.length; // FALSE

// length = propriété, length() = fonction

console.log("6 est il plus grand que Hello: " + result28);
console.log("6 est il plus grand que la taille de la chaine de caractère hello(5) " + result29);
console.log("6 est il plus grand que la longeur de la chaine de caractère dans la variable chaineDemo(11): " + result30);

/**
 * < teste que la valeur de gauche est plus petite que la valeur de droite !!!!!
 * Ici, on parle bien de la valeur.
 */
console.log("--OPERATEUR <");
let result31 = 5 < 6; // TRUE
let result32 = "HELLO WORLD".length < 10; // Hello world(11) plus petit que 10 => FALSE !


/**
 * >= teste que la valeur de gauche est plus grande ou égal que la valeur de droite !!!!!
 * Ici, on parle bien de la valeur.
 */
console.log("--OPERATEUR >=");
let result33 = 6 >= 6; // TRUE car 6 est plus grand ou égal à 6

/**
 * <= teste que la valeur de gauche est plus petite ou égal que la valeur de droite !!!!!
 * Ici, on parle bien de la valeur.
 */
console.log("--OPERATEUR <=");
let result34 = 2 <= 3; // TRUE
let result35 = 2 <= 2; // TRUE
let result36 = 3 <= 2; // FALSE
