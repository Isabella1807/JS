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

function calculator(){
    console.log(5+5);
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
console.log(string+number);

//Multiplicér number med boolean//
console.log(number*boolean);

//Sammenlign null værdien med undefined værdien ved at bruge == og === //
console.log(Null==Undefined); //Samme værdi? = True cause tom
console.log(Null===Undefined); //Samme værdi og type? = False cause de er ikke samme datatype

console.log("----------------------------------Opgave 1.2 ------------------------------------------");
console.log("----------------------------------Opgave 1 ------------------------------------------");

function checkUserInput (username, password){
    if (username || password === false){
    }
}

//Denne tjekker om de indeholder falske værdier, såsom null, undefined, false, 0 og nan istedet for den ovenover
function checkUserInput (username, password){
    if (!username || !password){
    }
}

// let americanMoney = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
// console.log(americanMoney.format(dkk));

//.toFixed kan ikke bruges på objekter

function convertCurrency (fromUSD){
    let danishMoney = new Intl.NumberFormat('en-DK', {style: 'currency', currency: 'DKK'});
    return danishMoney.format(fromUSD * 7);
}

console.log(convertCurrency(1000));


Intl.NumberFormat



