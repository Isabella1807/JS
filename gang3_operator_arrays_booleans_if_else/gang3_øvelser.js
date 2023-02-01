console.log("JS virker");

let animals = ["panda", "lion","gorilla"];

if (animals[1]=="gorilla"){
    document.getElementById("Zoo").innerText="Der er en gorilla";
    alert("en gorilla");
} else {
    document.getElementById("Zoo").innerText="Der er ingen gorilla her";
    alert("Ingen gorilla");
}

document.getElementById("liste").innerHTML+="liste af dyr"
for (var i = 0; i < animals.length; i++) {
    document.getElementById("liste").innerHTML+= "<br>" + animals[i];
}
//i = 0 - lav en variable og giv den værdien 0
// i < animals.length - hvis i er mindre end længden af arreyet animals
// i++ - hvis i er mindre end animals, gør i større
//og den vil køre document.getelementbyid linje hvergang i ikke er større end animals
// += tilføjer istedet for at erstatte

