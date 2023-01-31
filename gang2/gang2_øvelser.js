// alert("I ekstern");

console.log("Isabella");

// document.body.innerHTML = "<h1>Mit nye website</h1>";

const hunderace = "Dalmatiner";
let hundealder = 20;

const hunden = hunderace + " er " + hundealder + " år gammel.";

// = er en tildelings operator
// + - * er operatorer
// når to ting lægges sammen er det en matematik operator f.eks. var = 5 + 5  (plusset er en matematisk operator)

document.getElementById("Hunden").innerText = hunden;

//getelementbyid går ind i DOM'en og tager fat i id'et og gør noget med det
//GetElementById er et objekt
//Hvis jeg havde brugt GetElementById, skulle man tilføje en masse andre ting, fordi at CLASS indeholder en liste, men ID indeholder kun én ting

const fornavn = "Isabella";
const efternavn = "Christiansen";
const fulde_navn = fornavn + " " + efternavn;
const output = document.getElementById("mitNavn")
//Eftersom jeg skal bruge mitNavn id'et flere gange, kan jeg lave det om til en variabel

output.innerText = fulde_navn;
output.style.color = "#ff0000";
//InnerHTML kan ændre hele tagget, så man kan lave et p tag om til en h1
//InnerText ændre kun indholdet af et tag
