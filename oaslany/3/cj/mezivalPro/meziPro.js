$("#mainCircuit").hide(); // vše je schované, dokud se vše potřebné nenačte
var loadingScreen = $("#loadingScreen");
var theme = "Meziválečná próza"; // otázky z tématu:
var thQuestion = 1;

var database = [
{used:false, question: "Dlouhodobý majetek se rozděluje na finančí, oběžný a abstraktní.", answer: false, verdict: "Dlouhodobý majetek se dělí na hmotný, nehmotný a finanční." }, 
{used:false, question: "Dle zákona o účetnictví musí být vstupní cena dlouhodobého hmotného majetku nad 40.000,- Kč.", answer: false, verdict: "Každá účetní jednotka si dle zákona o účetnictví může ve směrnici nastavit vstupní cenu svého majetku." }, 
{used:false, question: "Účetní operace jako např: výměna oleje v autě, oprava rozbitých dveří nebo aplikace termální pasty na procesor se účtují na účet 511 - Opravy a udržování.", answer: true, verdict: "Nejedná se zde o technické zhodnocení, neměníme zde žádné parametry majetku, proto se zde jedná o opravy a údržbu." }, 
{used:false, question: "Pořízení DDM účtujeme na účet 041 a 042.", answer: true, verdict: "Pořízení hmotného DM se účtuje na účet 042 a pořízení nehmotného DM na účet 041." }, 
{used:false, question: "Každá účetní jednotka je povinna vést jak účetní tak daňové odepisování majetku.",answer:false,verdict:"Účetní jednotka je povinna vést daňové odepisování, účetní způsob odepisování slouží pouze pro ÚJ jakožto přehled o skutečném opotřebení majetku."},
{used:false, question: "ÚJ je povinna odepisovat veškerý hmotný majetek, bez výjimek.",answer:false,verdict:"Pozemky a mistrovská díla nelze odepisovat, tudíž nemůžeme odepisovat všechen DHM."},
{used:false, question: "ÚJ má v případě krádeže majetku právo na poloviční odpis",answer:true,verdict:"V případě dokázaného odcizení majetku má ÚJ právo na snížení základu daně o poloviční odpis."},
{used:false, question: "V případě, že si DM vyrobí podnik sám, tak se zavedení majetku do provozu účtuje na účet 588 - Aktivace dlouhodobého hmotného majetku.",answer:true,verdict:"A v případě že si podnik sám naprogramuje software tak se účtuje na účet 587 - Aktivace dlouhodobého hmotného majetku."}
];
//databáze všech otázek {question:"",answer:,verdict:""}
$("#totalQuestions").append(database.length);
$("#theme").append(theme); // Otázky z tématu: ......
var questionNumber = Math.floor(Math.random() * database.length);// číslo náhodně zvolené otázky
var questionNumber = Math.floor(Math.random() * database.length);// číslo náhodně zvolené otázky
var ender = document.getElementById("end");
var enderHelp = document.getElementById("endFade");
var h3 = document.getElementById("qH3");
$("#qNum").html(thQuestion);
console.log(questionNumber); //zobrazení čísla otázky
h3.innerHTML = database[questionNumber].question; //vloží do nadpisu znění otázky

function rollRandomQ(){
    questionNumber = Math.floor(Math.random() * database.length);
}

function chooseQ(){
    while(database[questionNumber].used){
        rollRandomQ();
    }
    h3.innerHTML = database[questionNumber].question; // vložení otázky do nadpisu
}

function correct() { //funkce aktivovaná v případě, že uživatel odpoví ANO
    if (database[questionNumber].answer && thQuestion!=database.length) {
        //správná odpověď
        database[questionNumber].used = true;
        chooseQ();
        thQuestion = thQuestion+1;
        $("#qNum").html(thQuestion);
    } else if(!database[questionNumber].answer && thQuestion!=database.length) {
        //špatná odpověď
        database[questionNumber].used = true;
        chooseQ();
        thQuestion = thQuestion+1;
        $("#qNum").html(thQuestion);
    } else {
        ender.style.display="block";
        enderHelp.style.display="block";
    }
}
function incorrect() { // funkce aktivovaná v případě, že uživatel odpoví NE
    if (!database[questionNumber].answer && thQuestion!=database.length) {
        //správná odpověď
        database[questionNumber].used = true;
        chooseQ();
        thQuestion = thQuestion+1;
        $("#qNum").html(thQuestion);
    } else if (database[questionNumber].answer && thQuestion!=database.length) {
        //špatná odpověď
        database[questionNumber].used = true;
        chooseQ();
        thQuestion = thQuestion+1;
        $("#qNum").html(thQuestion);
    } else {
        ender.style.display="block";
        enderHelp.style.display="block";
    }
}


// po úplném načtení platformy, se vše zobrazí
$(document).ready(function () {
    $("#mainCircuit").fadeIn(1500);
    console.log("yeis");
    loadingScreen.fadeOut();
    

})