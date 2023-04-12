
function getFruit(en_frugt, antal_frugt) {
    let str = "Her er ";
    str += antal_frugt;
    str += " ";
    str += en_frugt;

    if (antal_frugt !== 1) {
        str += "r";
    }
    str += ". ";
    str += "Det koster ";
    str += getFruitPrioze(antal_frugt);
    return str;
}

function getFruitPrioze(amount_frugter) {
    const pricePrFruit = getSingleFruitPriceFromDatabase();
    const totalPrice = pricePrFruit * amount_frugter;
    return totalPrice + "kr.";
}

function getSingleFruitPriceFromDatabase() {
    return 4.5;
}

const myFruit = getFruit("pære", 5);
const myOtherFruit = getFruit("vindrue", 0);
const myThordFruit = getFruit("æble", 15);

console.log("-----");

console.log(myFruit);
console.log(myOtherFruit);
console.log(myThordFruit);
