console.log("----------------------------------Opgave 1------------------------------------------");
// Alle 8 datatyper//
const string = "Hejsa";
const number = 24;
const boolean = true;
const bigint = 242809503498054350367468347643675465475888787878787878878787877787878788787878787877887788778783685;
const object = {
    firstName: "Isabella",
    age: "24",
};
let Undefined;

function calculator() {
    console.log(5 + 5);
}

const Null = null;

console.log("----------------------------------Opgave 2------------------------------------------");
//Output datatyperne//
console.log("Datatypen: " + typeof string + ". Indeholder: " + string);
console.log("Datatypen: " + typeof number + ". Indeholder: " + number);
console.log("Datatypen: " + typeof boolean + ". Indeholder: " + boolean);
console.log("Datatypen: " + typeof bigint + ". Indeholder: " + bigint);
console.log("Datatypen: " + typeof object + ". Indeholder: " + object);
console.log("Datatypen: " + typeof Undefined + ". Indeholder: " + Undefined);
calculator();
console.log("Datatypen: " + typeof Null + ". Indeholder: " + Null);

console.log("----------------------------------Opgave 3------------------------------------------");

//Sammentræk string med number//
console.log(string + number);

//Multiplicér number med boolean//
console.log(number * boolean);

//Sammenlign null værdien med undefined værdien ved at bruge == og === //
console.log(Null == Undefined); //Samme værdi? = True cause tom
console.log(Null === Undefined); //Samme værdi og type? = False cause de er ikke samme datatype

console.log("----------------------------------Opgave 1.2 ------------------------------------------");
console.log("----------------------------------Opgave 1 ------------------------------------------");

function checkUserInput(username, password) {
    if (username || password === false) {
    }
}

//Denne tjekker om de indeholder falske værdier, såsom null, undefined, false, 0 og nan istedet for den ovenover
function checkUserInput(username, password) {
    if (!username || !password) {
    }
}

// let americanMoney = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
// console.log(americanMoney.format(dkk));

//.toFixed kan ikke bruges på objekter

function convertCurrency(fromUSD) {
    let danishMoney = new Intl.NumberFormat('en-DK', {style: 'currency', currency: 'DKK'});
    return danishMoney.format(fromUSD * 7);
}

console.log(convertCurrency(1000));

Intl.NumberFormat



console.log("-------------------Opgave 1.5--------------------")
//Generer et tilfældigt tal mellem 66 og 500

//på linje 413, hvis vi ikke plusser min er fordi ellers kan vi ikke ramme 66 eller 500.
//min = 66 & max = 500 er default værdier, så med mindre andre argumenter er givet - går vi med default parametrene
let generateRandomNumber = (min = 66, max = 500) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(`Execute Order ${generateRandomNumber()}`);
console.log(`Execute Order ${generateRandomNumber(100, 200)}`);




console.log("----------------------------------Opgave 1.6 ------------------------------------------");
//Skaf datoen for i dag og tilføj et input og så fortæller den hvad dato det er baseret på inputtet.
let findFutureDate = (antalDage) => {
    const thisDay = new Date();
    thisDay.setDate(thisDay.getDate() + antalDage);

    return thisDay.toLocaleDateString();
}

console.log(findFutureDate(5));

console.log("----------------------------------Opgave 2.1 ------------------------------------------");

const myList = ["en","en","to","tre","fire","fem","seks","syv","otte","ni","ti","elleve"];

const formatList = (Locale) => {
    const formatted = new Intl.ListFormat(Locale, {style: 'short', type: 'unit'});
    return formatted.format(myList);
}

console.log(formatList('de-DE'));

console.log("----------------------------------Opgave 2.1 ------------------------------------------");
//Find eksempeler på brug af spread operatoren

const originalStringArray = ["en","en","to","to","tre","fire","fem","seks","dut","ti"];
const originalNumArray = [1,2,3,4,5,6,7,8,9];

//Kopiere arrays
const copiedArray = [...originalNumArray];
console.log(copiedArray);

//kombinere 2 arrays
const joinedArray = [...originalNumArray, ...originalStringArray]
console.log(joinedArray);


//Hver key SKAL være unik, så hvis det er 2 ens key value pairs på tværs af objekter, kombineres de.
const obj1 = {
    a: "1",
    b: "2",
}

const obj2 = {
    c: "3",
    d: "4"
}

const joinedObj = {...obj1, ...obj2};
console.log(joinedObj);

//Destruktering af arrays
const destruct = [first, ...rest] = [originalNumArray];
console.log(destruct);

console.log("---------------------------------- Opgave 2.3 ------------------------------------------");
//Lav denne function om til en arrow function. Funktionen finder alle elementer i arrayet der starter med d

//
function startsWithT(input){
    return input[0].toLowerCase() === "t";
}

//Altid en god ide at lave til lowercase, fordi js er case sensitive
startsWithD = (input) => {
    return input[0].toLowerCase() ==='d';
}
//.filter Går hver entry igennem
let liste = originalStringArray.filter(startsWithD);
console.log(`Disse starter med D: ${liste}`);

let liste2 = originalStringArray.filter(startsWithT);
console.log(`Disse starter med T: ${liste2}`);

console.log("---------------------------------- Opgave 2.4 ------------------------------------------");
//Skriv en kode som flytter værdier fra et array over i et set og så tilbage i et array
//komprimer det til kun af fylde et enkelt statement
//Output til konsollen

const myNewArray = ["Isa","Jens","Bo", "Thomas","Malina","Nicolaj","Caroline"];

const uniqueLifters =[...new Set(myNewArray)];
console.log(uniqueLifters);
