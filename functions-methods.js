// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailAdressen te checken.
// Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben,
// dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht 1 */
// Schrijf een functie genaamd getEmailDomain, die een emailAdres verwacht en de domeinnaam teruggeeft.
// Een domeinnaam is het geen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

function getEmailDomain(email) {
    const indexSearch = email.indexOf('@');
    const domain = email.substring(indexSearch + 1);
    return domain;
}
console.log(getEmailDomain("n.eeken@novi-education.nl"));
console.log(getEmailDomain("t.mellink@novi.nl"));
console.log(getEmailDomain("a.wiersma@outlook.com"));


/* Opdracht 2 */
// Schrijf een functie genaamd typeOfEmail, die een emailAdres verwacht. De functie checkt of het emailAdres
// een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

function typeOfEmail(type) {
    if (type.includes("@novi-education.nl"))
        return "Student"
    if (type.includes("@novi.nl"))
        return "Medewerker"
    else {
        return "Extern"
    }
}
console.log(typeOfEmail("n.eeken@novi-education.nl"));
console.log(typeOfEmail("t.mellink@novi.nl"));
console.log(typeOfEmail("a.wiersma@outlook.com"));
console.log(typeOfEmail("novi.nlaapjesk@outlook.com"));


/* Opdracht 3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailAdres verwacht en checkt of het emailAdres geldig is.
// De functie returned true of false, afhankelijk van de uitkomst.
// Een emailAdres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén [,] in voorkomt
// * Er géén [.] in voorkomt als allerlaatste karakter (dus hotmail.com is geldig, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

function checkEmailValidity(email) {
    const containsMonkeyTail = email.includes("@");
    const containsComma = email.includes(",");
    const containsDot = email.lastIndexOf(".");

    const checkDot = containsDot !== email.length -1;

    if (containsMonkeyTail && !containsComma && checkDot) {
        return true;
    } else {
        return false;
    }
}
const validity1 = checkEmailValidity("n.eeken@novi.nl");
const validity2 = checkEmailValidity("tessmellink@novi.nl");
const validity3 = checkEmailValidity("n.eekenanovi.nl");
const validity4 = checkEmailValidity("n.eeken@novinl.");
const validity5 = checkEmailValidity("tessmellink@novi,nl");

console.log(validity1);
console.log(validity2);
console.log(validity3);
console.log(validity4);
console.log(validity5);