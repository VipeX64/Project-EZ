$("#mainCircuit").hide(); // vše je schované, dokud se vše potřebné nenačte
let thQuestion = 0;
let canPlay = true;
let correctAnswer = 0;
let canAppend = true;

const correctAudio = new Audio("../../../../packages/audio/RightSound.mp3");
const wrongAudio = new Audio("../../../../packages/audio/WrongSound.mp3");

//databáze všech otázek {question:"",a:"",b:"",c:",d:"",corr:,used:false}
let questionNumber;
rollRandomQ();  // číslo náhodně zvolené otázky
const ender = document.getElementById("end");
const enderHelp = document.getElementById("endFade");
let h3 = document.getElementById("qH3");

function detectCorr() {  ///////detekuje část elementu, podle korektní odpovědi
    if (database[questionNumber].correctRank== 1) {
        return $("#a");
    } else if (database[questionNumber].correctRank== 2) {
        return $("#b");
    } else if (database[questionNumber].correctRank== 3) {
        return $("#c");
    } else {
        return $("#d");
    }
}

function rollRandomQ() {  //roll random otázky
    questionNumber = Math.floor(Math.random() * database.length);
    database[questionNumber].used = (database[questionNumber].used === "false" || database[questionNumber].used === false) ? false : true;  
}

function chooseQ() { // v případě, že byla otázky již použita, najdi jinou +
    while (database[questionNumber].used) {
        rollRandomQ();
    }
    h3.innerHTML = database[questionNumber].questionInput; // vložení otázky do nadpisu
}

function next() { //Další otázka
    if (thQuestion >= database.length) {
        $("#end").css("display", "block");
        if (canAppend) {
            $("#score").append(renderPercentage() + "%");
            canAppend = false;
        } else {
            console.log("nothing");
        }
    } else {
        $("#next").css("display", "none");
        $(".yesOrNo").css("color", "black");
        canPlay = true;
        chooseQ();
        $("#a").html(database[questionNumber].answerA);
        if (database[questionNumber].answerA.length > 35) {
            $("#a").css("font-size", "1.5em");
        }
        $("#b").html(database[questionNumber].answerB);
        if (database[questionNumber].answerB.length > 35) {
            $("#b").css("font-size", "1.5em");
        }    ////////////// v případě moc dlouhé odpovědi zmenší písmo, aby se vešla do boxíku
        $("#c").html(database[questionNumber].answerC);
        if (database[questionNumber].answerC.length > 35) {
            $("#c").css("font-size", "1.5em");
        }
        $("#d").html(database[questionNumber].answerD);
        if (database[questionNumber].answerD.length > 35) {
            $("#d").css("font-size", "1.5em");
        }
        h3.innerHTML = database[questionNumber].questionInput; //vloží do nadpisu znění otázky
    }
}

function renderAns(x) {
    if (!canPlay) {
        console.log("nothing");
    } else if (x == a && database[questionNumber].correctRank== 1) {
        detectCorr().css("color", "green");
        correctAudio.play();
        canPlay = false;
        database[questionNumber].used = true;
        $("#next").css("display", "block");
        thQuestion += 1;
        correctAnswer += 1;
        console.log(thQuestion);
        console.log(correctAnswer + "points");
    } else if (x == b && database[questionNumber].correctRank== 2) {
        detectCorr().css("color", "green");
        correctAudio.play();
        canPlay = false;
        database[questionNumber].used = true;
        $("#next").css("display", "block");
        thQuestion += 1;
        correctAnswer += 1;
        console.log(thQuestion);
        console.log(correctAnswer + "points");
    } else if (x == c && database[questionNumber].correctRank== 3) {
        detectCorr().css("color", "green");
        correctAudio.play();
        canPlay = false;
        database[questionNumber].used = true;
        $("#next").css("display", "block");
        thQuestion += 1;
        correctAnswer += 1;
        console.log(thQuestion);
        console.log(correctAnswer + "points");
    } else if (x == d && database[questionNumber].correctRank== 4) {
        detectCorr().css("color", "green");
        correctAudio.play();
        canPlay = false;
        database[questionNumber].used = true;
        $("#next").css("display", "block");
        thQuestion += 1;
        correctAnswer += 1;
        console.log(thQuestion);
        console.log(correctAnswer + "points");
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
        database[questionNumber].used = true;
        $("#next").css("display", "block");
        thQuestion += 1;
        console.log(thQuestion);
    }
}
function renderPercentage() {
    return correctAnswer / thQuestion * 100;
}