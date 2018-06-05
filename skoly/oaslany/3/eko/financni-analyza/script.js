$("#mainCircuit").hide(); // vše je schované, dokud se vše potřebné nenačte
const loadingScreen = $("#loadingScreen");
const theme = "Finanční analýza"; // otázky z tématu:

const database = [
    { questionInput: "Který z výroků správně NEDEFINUJE pojem 'Finanční analýza'?", answerA: "Rozbor hospodářského podniku, hodnocení uplynulého období", answerB: "Součást podnikového řízení, spojeno s fin. řízením podniku", answerC: "Schopnost získávat cizí zdroje k úhradě závazků", answerD: "Poměření získaných údajů a rozšíření jejich vypovídacích schopností", correctRank: 3, used: false },
    {questionInput: "Mezi účely finanční analýzy patří: volba nejvhodnějších směrů činností do budoucna a zjištění příčiny zlepšení/zhoršení fin. stránky podniku. Jaký další účel znáte?", answerA:"Vyjádření komplexní finanční situace podniku.", answerB:"",answerC:""}
    
];
// {questionInput:"",answerA:"",answerB:"",answerC:"",answerD:"",correctRank:,used:false} šablona pro otázky

//databáze všech otázek {question:"",answer:,verdict:""}
$("#totalQuestions").append(database.length); // v modalu okně -> kolik je dohromady otázek v databázi
$("#theme").append(theme); // Otázky z tématu: ......
$("#title").html(theme);

// po úplném načtení platformy, se vše zobrazí
$(document).ready(function () {
    setTimeout(() => {
        $("#mainCircuit").fadeIn(1500);
        loadingScreen.fadeOut();
        next();
    }, 1000)

})