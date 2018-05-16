$("#mainCircuit").hide(); // vše je schované, dokud se vše potřebné nenačte
let thQuestion = 0;
let canPlay = true;

const correctAudio = new Audio("../../../../packages/audio/RightSound.mp3");
const wrongAudio = new Audio("../../../../packages/audio/WrongSound.mp3");

//databáze všech otázek {question:"",a:"",b:"",c:",d:"",corr:,used:false}
let questionNumber = Math.floor(Math.random() * database.length);// číslo náhodně zvolené otázky
const ender = document.getElementById("end");
const enderHelp = document.getElementById("endFade");
let h3 = document.getElementById("qH3");

function detectCorr() {  ///////detekuje část elementu, podle korektní odpovědi
    if (database[questionNumber].corr == 1) {
        return $("#a");
    } else if (database[questionNumber].corr == 2) {
        return $("#b");
    } else if (database[questionNumber].corr == 3) {
        return $("#c");
    } else {
        return $("#d");
    }
}

function rollRandomQ() {  //roll random otázky
    questionNumber = Math.floor(Math.random() * database.length);
}

function chooseQ() { // v případě, že byla otázky již použita, najdi jinou + 
    while (database[questionNumber].used) {
        rollRandomQ();
    }
    h3.innerHTML = database[questionNumber].question; // vložení otázky do nadpisu
}

function next() { //Další otázka
    if(thQuestion>=database.length){
        $("#end").css("display","block");
    } else {
    $("#next").css("display","none");
    $(".yesOrNo").css("color","white");
    canPlay = true;
    chooseQ();
    $("#a").html(database[questionNumber].a);
    if (database[questionNumber].a.length > 35) {
        $("#a").css("font-size", "1.5em");
    }
    $("#b").html(database[questionNumber].b);
    if (database[questionNumber].b.length > 35) {
        $("#b").css("font-size", "1.5em");
    }    ////////////// v případě moc dlouhé odpovědi zmenší písmo, aby se vešla do boxíku
    $("#c").html(database[questionNumber].c);
    if (database[questionNumber].c.length > 35) {
        $("#c").css("font-size", "1.5em");
    }
    $("#d").html(database[questionNumber].d);
    if (database[questionNumber].d.length > 35) {
        $("#d").css("font-size", "1.5em");
    }
    h3.innerHTML = database[questionNumber].question; //vloží do nadpisu znění otázky
    }
}

function renderAns(x) {
    if (!canPlay) {
        console.log("nothing");
    } else if (x == a && database[questionNumber].corr == 1) {
        detectCorr().css("color", "green");
        correctAudio.play();
        canPlay = false;
        database[questionNumber].used=true;
        $("#next").css("display", "block");
        thQuestion+=1;
        console.log(thQuestion);
    } else if (x == b && database[questionNumber].corr == 2) {
        detectCorr().css("color", "green");
        correctAudio.play();
        canPlay = false;
        database[questionNumber].used=true;
        $("#next").css("display", "block");
        thQuestion+=1;
        console.log(thQuestion);
    } else if (x == c && database[questionNumber].corr == 3) {
        detectCorr().css("color", "green");
        correctAudio.play();
        canPlay = false;
        database[questionNumber].used=true;
        $("#next").css("display", "block");
        thQuestion+=1;
        console.log(thQuestion);
    } else if (x == d && database[questionNumber].corr == 4) {
        detectCorr().css("color", "green");
        correctAudio.play();
        canPlay = false;
        database[questionNumber].used=true;
        $("#next").css("display", "block");
        thQuestion+=1;
        console.log(thQuestion);
    } else {
        if (x == a) {
            $("#a").css("color", "red");
        } else if (x == b) {
            $("#b").css("color", "red");
        } else if (x == c) {
            $("#c").css("color", "red");
        } else if (x == d) {
            $("#d").css("color", "red");
        }
        detectCorr().css("color", "green");
        wrongAudio.play();
        canPlay = false;
        database[questionNumber].used=true;
        $("#next").css("display", "block");
        thQuestion+=1;
        console.log(thQuestion);
    }
}
