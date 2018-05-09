$("#mainCircuit").hide();


var database = [{ question: "Dlouhodobý majetek se rozděluje na finančí, oběžný a abstraktní.", answer: false, verdict: "Dlouhodobý majetek se dělí na hmotný, nehmotný a finanční." }, { question: "Dle zákona o účetnictví musí být vstupní cena dlouhodobého hmotného majetku nad 40.000,- Kč.", answer: false, verdict: "Každá účetní jednotka si dle zákona o účetnictví může ve směrnici nastavit vstupní cenu svého majetku." }, { question: "Účetní operace jako např: výměna oleje v autě, oprava rozbitých dveří nebo aplikace termální pasty na procesor se účtují na účet 511 - Opravy a udržování.", answer: true, verdict: "Nejedná se zde o technické zhodnocení, neměníme zde žádné parametry majetku, proto se zde jedná o opravy a údržbu." }, { question: "Pořízení DDM účtujeme na účet 041 a 042.", answer: true, verdict: "Pořízení hmotného DM se účtuje na účet 042 a pořízení nehmotného DM na účet 041." }, {question:"Každá účetní jednotka je povinna vést jak účetní tak daňové odepisování majetku.",answer:false,verdict:"Účetní jednotka je povinna vést daňové odepisování, účetní způsob odepisování slouží pouze pro ÚJ jakožto přehled o skutečném opotřebení majetku."},{question:"ÚJ je povinna odepisovat veškerý hmotný majetek, bez výjimek.",answer:false,verdict:"Pozemky a mistrovská díla nelze odepisovat, tudíž nemůžeme odepisovat všechen DHM"},{question:"ÚJ má v případě krádeže majetku právo na poloviční odpis",answer:true,verdict:"V případě dokázaného odcizení majetku má ÚJ právo na snížení základu daně o poloviční odpis."},{question:"V případě, že si DM vyrobí podnik sám, tak se zavedení majetku do provozu účtuje na účet 588 - Aktivace dlouhodobého hmotného majetku ",answer:true,verdict:"A v případě že si podnik sám naprogramuje software tak se účtuje na účet 587 - Aktivace dlouhodobého hmotného majetku, "}];
//databáze všech otázek {question:"",answer:,verdict:""}
$("#totalQuestions").append(database.length);
var questionNumber = Math.floor(Math.random() * database.length);
// číslo náhodně zvolené otázky
console.log(questionNumber);//zobrazení čísla otázky

var h3 = document.getElementById("qH3");
h3.innerHTML = database[questionNumber].question;
//vloží do nadpisu znění otázky

function correct() { //funkce aktivovaná v případě, že uživatel odpoví ANO
    if (database[questionNumber].answer) {
        //správná odpověď
        alert("Ano, správně");
    } else {
        //špatná odpověď
        alert("Kdepak");
    }
}
function incorrect() { // funkce aktivovaná v případě, že uživatel odpoví NE
    if (!database[questionNumber].answer) {
        //správná odpověď
        alert("Ano, správně");
    } else {
        //špatná odpověď
        alert("Kdepak");
    }
}


// po úplném načtení platformy, se vše zobrazí
$(document).ready(function () {
    $("#mainCircuit").fadeIn(1500);
    console.log("yeis");
})