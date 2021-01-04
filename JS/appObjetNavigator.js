//Les propriété de l'objet navigator sont:

let result = document.getElementById("result");

result.innerHTML = `
    Langue: ${navigator.language} <br>
    Cookies activités: ${navigator.cookieEnabled} <br>
    Plateforme: ${navigator.platform} <br>
    Nom du navigateur: ${navigator.appName} <br>
    Nom de code du navigateur: ${navigator.appCodeName} <br>
    Version du navigateur: ${navigator.appVersion} <br>
    User agent utilisé: ${navigator.userAgent}
`;

/**
 * Geolocation
 * méthode getCurrentPosition() permet d'obtenir la position acutelle du périphérique visitant votre page
 * Params: fonction à éxecuter lorque les données sont récupérées.
 * Return: un objet Position qui contient 2 propriétés:
 *      coords -> retourne un objet Coordinates contenant les coordonnées de position
 *      timestamp -> représente le moment où la position a été récupérée
 */

let result2 = document.getElementById("result2");

let printPosition = function (coordinates) {
    result2.innerHTML = `
        Latitude: ${coordinates.coords.latitude.toFixed(1)} <br>
        Longitude: ${coordinates.coords.longitude.toFixed(1)} <br>
    `;
    console.log(coordinates);
}

navigator.geolocation.getCurrentPosition(printPosition);