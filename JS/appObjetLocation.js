//Objet location
//URL est composé de plusieurs parties:

/**
 * Ex:
 * URL: https://localhost:63342/cours/index.html?_ijt=vns060tbrhh6g2s09gncjddpjd&age=36
 */

/**
 ***** search
 * retourne la partie recherche si l'URL en possède une
 * La recherche est toute la protion de texte après le "?" et chaque paramètre est sépar" de "&"
 */

//?_ijt=vns060tbrhh6g2s09gncjddpjd&age=36

//paramètre _ijt ayant pour valeur le token vns060tbrhh6g2s09gncjddpjd
//paramètre age ayant pour valeur 36

console.log("search: " + window.location.search);

/**
 ***** pathname
 * retourne le chemin de l'URL précé par un "/" (route)
 */

// /cours/index.html

console.log("pathname: " + window.location.pathname);

/**
 ***** href
 * retourne l'URL complète
 */

//https://localhost:63342/cours/index.html?_ijt=vns060tbrhh6g2s09gncjddpjd&age=36

console.log("href: " + window.location.href);

/**
 ***** hostname
 * retourne le nom de l'hôte (hôte = serveur)
 */

//localhost

console.log("hostname: " + window.location.hostname);

/**
 ***** port
 * Retourne le port de l’URL, le port est un chiffre, dans le cas de l’HTTP classique, le port est toujours
 80, en ce qui concerne l’HTTPS, le port est tout le temps 443. Le port est séparé du hostname par ‘:’. PhpStorm
 utilise un port particulier pour ne pas bloquer votre port 80, c’est un peu complexe...
 */

//63342

console.log("port: " + window.location.port);

/**
 ***** protocol
 * Retourne le protocole de l’URL: Le protocole peut être HTTP, HTTPS dans le cadre du web. HTTPS pour
 sécurisé ( petit cadenas à côté de l’adresse dans le navigateur ).
 */

//http:

console.log("protocol: " + window.location.protocol);

/**
 ***** host
 * Retourne le nom de l’hôte (hostname) et le port relatif à l’URL
 */

//localhost:63342

console.log("host: " + window.location.protocol);

/**
 ***** origin
 * Retourne le nom de l’hôte (hostname), le port et le protocole de l’URL
 */

//https://localhost:63342

console.log("origin: " + window.location.origin);

/**
 ****************** Location dispose de 3 méthode utiles
 */

/**
 * assign()
 * charge une ressource à partir d'une URL passée en paramètre (change de page)
 */

document.getElementById("result1").addEventListener("click", function () {
    window.location.assign("http://www.google.fr");
})

/**
 * reload()
 * recharge la page actuelle
 */

document.getElementById("result2").addEventListener("click", function () {
    window.location.reload();
})

/**
 * replace()
 * remplacer la page actuelle par une autre (change de page)
 */

document.getElementById("result3").addEventListener("click", function () {
    window.location.replace("http://www.google.fr");
})



