$("#mainCircuit").hide(); // vše je schované, dokud se vše potřebné nenačte
let thQuestion = 0;
let canPlay = true;
let correctAnswer = 0;
let canAppend = true;
let startWidth = window.screen.availWidth;
let mobile;
let currentProgress = 0;

if (startWidth < 800) {
    mobile = true;
} else if (startWidth >= 800) {
    mobile = false;
}

const correctAudio = new Audio("../../../../../packages/audio/RightSound.mp3");
const wrongAudio = new Audio("../../../../../packages/audio/WrongSound.mp3");

//databáze všech otázek {question:"",a:"",b:"",c:",d:"",corr:,used:false}
let questionNumber;
rollRandomQ();  // číslo náhodně zvolené otázky
const ender = document.getElementById("end");
const enderHelp = document.getElementById("endFade");
let h3 = document.getElementById("qH3");

function muteUnmute(){
    if(!correctAudio.muted){
        muted = true; // vypne se zvuk
        correctAudio.muted = true;
        wrongAudio.muted = true;
        $("#muteMusic").css("background-image","url(../../../../../packages/img/volume_off.png)")
    } else if (correctAudio.muted){
        muted = false; // zapne se zvuk
        correctAudio.muted = false;
        wrongAudio.muted = false;
        $("#muteMusic").css("background-image","url(../../../../../packages/img/volume_on.png)")
    }

}

function checkWidth() { // každou půlsekundu to zjistí, zda se nezměnila velikost stránky
    let currentWidth = window.screen.availWidth;

    if (currentWidth !== startWidth) {
        startWidth = currentWidth;
        mobile = currentWidth < 800 ? true : false;
        correctFont();
    }
    setTimeout(function () {
        checkWidth();
    }, 500);
}
checkWidth();

function detectCorr() {  ///////detekuje část elementu, podle korektní odpovědi
    if (database[questionNumber].correctRank == 1) {
        return $("#a");
    } else if (database[questionNumber].correctRank == 2) {
        return $("#b");
    } else if (database[questionNumber].correctRank == 3) {
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
    setBarSize();
    if (thQuestion >= database.length) {
        $("#end").css("display", "block");
        if (canAppend) {
            $("#score").append(renderPercentage() + "%");
            canAppend = false;
        } else {
            //nothing
        }
    } else {
        $("#next").css("visibility","hidden");
        $(".yesOrNo").css("color", "black");
        canPlay = true;
        chooseQ();
        correctFont();
        h3.innerHTML = database[questionNumber].questionInput;
    }
}

function renderAns(x) {
    if (!canPlay) {
        // console.log("nothing");
    } else if (x == a && database[questionNumber].correctRank == 1) {
        scotWork();
    } else if (x == b && database[questionNumber].correctRank == 2) {
        scotWork();
    } else if (x == c && database[questionNumber].correctRank == 3) {
        scotWork();
    } else if (x == d && database[questionNumber].correctRank == 4) {
        scotWork();
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
        $("#next").css("visibility","visible");
        thQuestion += 1;
        // console.log(thQuestion);
    }
}
function renderPercentage() {
    var num = correctAnswer / thQuestion * 100;
    return num.toFixed(2);
}
function setBarSize() {
    portion = (100 / database.length).toFixed(2);
    console.log(portion);
    console.log(currentProgress);
    if(currentProgress >99.1){
        currentProgress = 100;
        $(".progressQuestionBar").addClass("active");
    }
    $("#progressQuestionBar").css("width", currentProgress + "%").attr("aria-valuenow", currentProgress);
    // $("#progressQuestionBar").css("width", currentProgress + "%").attr("aria-valuenow", currentProgress).text(Number(currentProgress).toFixed(2) + "%");
    currentProgress = Number(currentProgress) + Number(portion);
};

function scotWork() {
    detectCorr().css("color", "green");
    correctAudio.play();
    canPlay = false;
    database[questionNumber].used = true;
    $("#next").css("visibility","visible");
    thQuestion += 1;
    correctAnswer += 1;
    // console.log(thQuestion);
    // console.log(correctAnswer + "points");
}
$(document).keydown(function (event) {
    if (event.keyCode == 123) { // Prevent F12
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
        return false;
    }
});
$(document).on("contextmenu", function (e) {
    e.preventDefault();
});
function correctFont() {
    // console.log("it rendered");
    // console.log(mobile);
    let currentBlock;
    let answer;
    let depends;
    let shortie = database[questionNumber];
    let variable = [{ currentBlock: "#a", currentAnswer: "answerA" }, { currentBlock: "#b", currentAnswer: "answerB" }, { currentBlock: "#c", currentAnswer: "answerC" }, { currentBlock: "#d", currentAnswer: "answerD" }];
    for (let i = 0; i < 4; i++) {
        currentBlock = $(variable[i].currentBlock);
        answer = shortie[variable[i].currentAnswer];
        currentBlock.html(answer);
        if (answer.length > 50 && mobile) {
            currentBlock.css("font-size", "2em");
        } else if (answer.length > 50) {
            currentBlock.css("font-size", "1.6em");
        } else if (answer.length > 35 && mobile) {
            currentBlock.css("font-size", "2.4em");
        } else if (answer.length > 35) {
            currentBlock.css("font-size", "2em");
        } else if (answer.length <= 35 && mobile) {
            currentBlock.css("font-size", "2.8em");
        } else if (answer.length <= 35) {
            currentBlock.css("font-size", "2em");
        } else {
            // console.log("weird, but nobody came");
        }
        if (mobile) {
            $("#qH3").css("font-size", "3em");
        }
    }
}