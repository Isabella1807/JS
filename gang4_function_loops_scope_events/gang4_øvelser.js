


// document.getElementById("minKnap").addEventListener("click", knapFunction);
// let inputValue = 0;
//
// function knapFunction(){
//     document.getElementById("input").innerText = (inputValue++);
// }

function myFunction() {
    let value, text, inputObject;

inputObject = document.getElementById("klassenID");
value = parseFloat(inputObject.value); //Parsefloat laver inputtet til tal.. ?

if(isNaN(value)) { // ISNAN = Is not a number. Denne if tjekker om inputtet er et tal
    text = "input not valid";
} else {
    text = "input OK";
    inputObject.value=value+1;
}
console.log(text);
}