const loadingScreen = $("#loadingScreen");
const theme = "Meziválečná próza"; // otázky z tématu:

$("#questionLabel").append(theme);

let checkerForOk = location.hash;
function thx(){
    $("#thankYou").show();
    $("#thankYou").animate({top: "2em"}, "slow");
}

// if there is hash --> triffer function 

// $(document).keydown(function (event) {
//     if (event.keyCode == 123) { // Prevent F12
//         return false;
//     } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
//         return false;
//     }
// });
// $(document).on("contextmenu", function (e) {        
//     e.preventDefault();
// });

// if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
//     $("#header").css("height","0em");
//     $("#whiteSpace").css("height","0em");
//     $("#logo").css("display","none");
//    }


// po úplném načtení platformy, se vše zobrazí
$(document).ready(function () {
    setTimeout(() => {
        $("#mainCircuit").fadeIn(1500);
        loadingScreen.fadeOut();
        if(checkerForOk == "#ok"){
            thx();
        }
    }, 1000)

})