<<<<<<< HEAD
var database = [{question:"Jaroslav Seifer napsal dílo 'Na vlnách T.S.F'",answer:true}, {question:"Skupina Surrealismus v ČSR byla založena roku 1924",answer:false},{question:"Období proletářské poezie se datuje kolem let 1920-1924",answer:true}];
//databáze všech otázek

var questionNumber = Math.floor(Math.random()*database.length);
// číslo náhodně zvolené otázky
console.log(questionNumber);//zobrazení čísla otázky

var h3 = document.getElementById("qH3");
h3.innerHTML = database[questionNumber].question;
//vloží do nadpisu znění otázky

function correct(){ //funkce aktivovaná v případě, že uživatel odpoví ANO
    if(database[questionNumber].answer){
=======
var database = [{ question: "Jaroslav Seifer napsal dílo 'Na vlnách T.S.F'", answer: true }, { question: "Skupina Surrealismus v ČSR byla založena roku 1924", answer: false }, { question: "Období proletářské poezie se datuje kolem let 1920-1924", answer: true }];
var questionNumber = Math.floor(Math.random() * database.length);
console.log(questionNumber);
var h3 = document.getElementById("qH3");
h3.innerHTML = database[questionNumber].question;
function correct() {
    if (database[questionNumber].answer) {
>>>>>>> 1f6d4c72d6b211a53308876565ae8168dad3c75b
        //správná odpověď
        alert("Ano, správně");
    } else {
        //špatná odpověď
        alert("Kdepak");
    }
}
<<<<<<< HEAD
function incorrect(){ // funkce aktivovaná v případě, že uživatel odpoví NE
    if(!database[questionNumber].answer){
=======
function incorrect() {
    if (!database[questionNumber].answer) {
>>>>>>> 1f6d4c72d6b211a53308876565ae8168dad3c75b
        //správná odpověď
        alert("Ano, správně");
    } else {
        //špatná odpověď
        alert("Kdepak");
    }
}
