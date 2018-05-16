$("#mainCircuit").hide(); // vše je schované, dokud se vše potřebné nenačte
var loadingScreen = $("#loadingScreen");
var theme = "Meziválečná próza"; // otázky z tématu:
var thQuestion = 1;
var correctAudio = new Audio("../../../../packages/audio/RightSound.mp3");
var wrongAudio = new Audio("../../../../packages/audio/WrongSound.mp3");

var database = [
    { question: "Karel Čapek a Josef Čapek se zasloužili o zmezinárodnění jakého slova?", a: "Kvído", b: "Motor", c: "Robot", d: "Televize", corr: 3, used:false },
    { question: "Kde se narodil Karel Čapek a jakého povolání byla hlava rodiny?", a: "V Pardubicích, právník", b: "Ve Skalici, lékař", c: "V Benešově, vojenský generál",d:"V Malých Svatoňovicích v podhůří Krkonoš, lékař",corr:4, used:false},
    { question:"Co je to sloupek?", a:"Krátký odstavec kritizující politickou činnost",b:"Modernější obdoba Nerudova fejetonu s vtipným zpracováním",c:"Obrázek složený z různých písmenek",d:"Menší podstavec navržený pro exponáty v muzeu",corr:2, used:false}
];

//databáze všech otázek {question:"",answer:,verdict:""}
$("#totalQuestions").append(database.length); // v modalu okně -> kolik je dohromady otázek v databázi
$("#theme").append(theme); // Otázky z tématu: ......

var questionNumber = Math.floor(Math.random() * database.length);// číslo náhodně zvolené otázky
var ender = document.getElementById("end");
var enderHelp = document.getElementById("endFade");
var h3 = document.getElementById("qH3");

function detectCorr(){
    if(database[questionNumber].corr == 1){
        return $("#a");
    } else if(database[questionNumber].corr==2){
        return $("#b");
    } else if (database[questionNumber].corr ==3){
        return $("#c");
    } else {
        return $("#d");
    }
}
////////////////////////////////////////////////////////////////////////
$("#a").html(database[questionNumber].a);
if(database[questionNumber].a.length > 35){
    $("#a").css("font-size","1.5em");
}
$("#b").html(database[questionNumber].b);
if(database[questionNumber].b.length > 35){
    $("#b").css("font-size","1.5em");
}    /////////////////////////////////////////////// v případě moc dlouhé odpovědi zmenší písmo, aby se vešla do boxíku
$("#c").html(database[questionNumber].c);
if(database[questionNumber].c.length > 35){
    $("#c").css("font-size","1.5em");
}
$("#d").html(database[questionNumber].d);
if(database[questionNumber].d.length > 35){
    $("#d").css("font-size","1.5em");
}
/////////////////////////////////////////////////////////////////////////
$("#qNum").html(thQuestion);
console.log(questionNumber); //zobrazení čísla otázky
h3.innerHTML = database[questionNumber].question; //vloží do nadpisu znění otázky





function rollRandomQ() {
    questionNumber = Math.floor(Math.random() * database.length);
}

function chooseQ() {
    while (database[questionNumber].used) {
        rollRandomQ();
    }
    h3.innerHTML = database[questionNumber].question; // vložení otázky do nadpisu
}
///////////////////////////////////////////////////////////////////////////
function a() {                                                           //
    if(database[questionNumber].corr == 1){                              //
        //turn green                                                     //
        $("#a").css("color", "green");
        correctAudio.play();                                   //
    } else {                                                             //
        // turn red and find correct answer -> green it                  //
        $("#a").css("color", "red");
        wrongAudio.play();                                     //        
        detectCorr().css("color", "green");                              //
                                                                         // 
    }                                                                    //
}                                                                        // 
                                                                         //
function b() {                                                           //
    if(database[questionNumber].corr == 2){                              // 
        //turn green                                                     //
        $("#b").css("color", "green");
        correctAudio.play();                                             //
    } else {                                                             //
        // turn red and find correct answer -> green it                  //
        $("#b").css("color", "red");                                     //
        detectCorr().css("color", "green");
        wrongAudio.play();                                               //
                                                                         //
    }                                                                    // funkce zvýrazňující správné a špatné odpovědi
}                                                                        // 
                                                                         //                                               
function c() {                                                           // 
    if(database[questionNumber].corr == 3){                              //  
        //turn green
        correctAudio.play();                                             //       
        $("#c").css("color", "green");                                   //                         
    } else {                                                             //                             
        // turn red and find correct answer -> green it                  //                                          
        $("#c").css("color", "red");                                     //                                                     
        detectCorr().css("color", "green");
        wrongAudio.play();                                               //                              
                                                                         //                 
    }                                                                    //                      
}                                                                        //                                                
                                                                         //                 
function d() {                                                           //                               
    if(database[questionNumber].corr == 4){                              //                              
        //turn green
        correctAudio.play();                                             //                                     
        $("#d").css("color", "green");                                   //                                                       
    } else {                                                             //                             
        // turn red and find correct answer -> green it                  //                                          
        $("#d").css("color", "red");                                     //                       
        detectCorr().css("color", "green");
        wrongAudio.play();                                               //                              
                                                                         //                 
    }                                                                    //                      
}                                                                        //                  
///////////////////////////////////////////////////////////////////////////
// function correct() { //funkce aktivovaná v případě, že uživatel odpoví ANO
//     if (database[questionNumber].answer && thQuestion!=database.length) {
//         //správná odpověď
//         database[questionNumber].used = true;
//         chooseQ();
//         thQuestion = thQuestion+1;
//         $("#qNum").html(thQuestion);
//     } else if(!database[questionNumber].answer && thQuestion!=database.length) {
//         //špatná odpověď
//         database[questionNumber].used = true;
//         chooseQ();
//         thQuestion = thQuestion+1;
//         $("#qNum").html(thQuestion);
//     } else {
//         ender.style.display="block";
//         enderHelp.style.display="block";
//     }
// }
// function incorrect() { // funkce aktivovaná v případě, že uživatel odpoví NE
//     if (!database[questionNumber].answer && thQuestion!=database.length) {
//         //správná odpověď
//         database[questionNumber].used = true;
//         chooseQ();
//         thQuestion = thQuestion+1;
//         $("#qNum").html(thQuestion);
//     } else if (database[questionNumber].answer && thQuestion!=database.length) {
//         //špatná odpověď
//         database[questionNumber].used = true;
//         chooseQ();
//         thQuestion = thQuestion+1;
//         $("#qNum").html(thQuestion);
//     } else {
//         ender.style.display="block";
//         enderHelp.style.display="block";
//     }
// }


// po úplném načtení platformy, se vše zobrazí
$(document).ready(function () {
    $("#mainCircuit").fadeIn(1500);
    console.log("yeis");
    loadingScreen.fadeOut();


})