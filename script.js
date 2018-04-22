var database = [{ question: "Jaroslav Seifer napsal dílo 'Na vlnách T.S.F'", answer: true }, { question: "Skupina Surrealismus v ČSR byla založena roku 1924", answer: false }, { question: "Období proletářské poezie se datuje kolem let 1920-1924", answer: true }];
var questionNumber = Math.floor(Math.random() * database.length);
console.log(questionNumber);
var h3 = document.getElementById("qH3");
h3.innerHTML = database[questionNumber].question;
function correct() {
    if (database[questionNumber].answer) {
        //správná odpověď
        alert("Ano, správně");
    } else {
        //špatná odpověď
        alert("Kdepak");
    }
}
function incorrect() {
    if (!database[questionNumber].answer) {
        //správná odpověď
        alert("Ano, správně");
    } else {
        //špatná odpověď
        alert("Kdepak");
    }
}
