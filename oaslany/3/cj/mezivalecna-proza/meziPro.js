$("#mainCircuit").hide(); // vše je schované, dokud se vše potřebné nenačte
const loadingScreen = $("#loadingScreen");
const theme = "Meziválečná próza"; // otázky z tématu:

const database = [
    { questionInput: "Karel Čapek a Josef Čapek se zasloužili o zmezinárodnění jakého slova?", answerA: "Kvído", answerB: "Motor", answerC: "Robot", answerD: "Televize", correctRank: 3, used: false },
    { questionInput: "Kde se narodil Karel Čapek a jakého povolání byla hlava rodiny?", answerA: "V Pardubicích, právník", answerB: "Ve Skalici, lékař", answerC: "V Benešově, vojenský generál", answerD: "V Malých Svatoňovicích v podhůří Krkonoš, lékař", correctRank: 4, used: false },
    { questionInput: "Co je to sloupek?", answerA: "Krátký odstavec kritizující politickou činnost", answerB: "Modernější obdoba Nerudova fejetonu s vtipným zpracováním", answerC: "Obrázek složený z různých písmenek", answerD: "Menší podstavec navržený pro exponáty v muzeu", correctRank: 2, used: false },
    { questionInput: "Ve kterém ze svých vývojových období napsal Karel Čapek sbírku sedmi povídek Zářivé hlubiny a čím byla stejnojmenná povídka inspirována?", answerA: "2. období, vynález knihtisku", answerB: "1. období, zkázou Titaniku", answerC: "4. období, smrtí svého bratra", answerD: "1. období, cestami po světě", correctRank: 2, used: false },
    { questionInput: "Co to byla Francouzská poezie nové doby?", answerA: "Překlady z tvorby moderních francouzských básníků", answerB: "Důkladné popisy bitev ve Versailles", answerC: "Krycí jméno pro bitvu u Waterloo", answerD: "Hnutí za zavedení nového uměleckého směru", correctRank: 1, used: false },
    { questionInput: "V jakých letech probíhalo 2. vývojové období Karla Čapka a co je po toto období typické?", answerA: "1911-1915, psaní povídek", answerB: "1899-1910, líčení příběhů z cest", answerC: "1921-1927, tvorba dramatických a románových utopií", answerD: "1930-1940, kritika tehdejšího politického režimu", correctRank: 3, used: false },
    { questionInput: "Které z těchto děl nepatří mezi dramata od Karla Čapka?", answerA: "Ze života hmyzu", answerB: "R. U. R.", answerC: "Věc Makropulos", answerD: "30 případů Majora Zemana", correctRank: 4, used: false },
    { questionInput: "Které z těchto děl patří mezi fantastsicko-utopické romány od Karla Čapka?", answerA: "Továrna na absolutno", answerB: "Tisíc a jedna noc", answerC: "Vítězná hvězda", answerD: "Bylo nás 5", correctRank: 1, used: false },
    { questionInput: "Který z těchto výroků není pravdivý o Karlu Čapkovi?", answerA: "Studoval gymnázium v Hradci Králové, v Praze, poté filozofii na UK v Praze", answerB: "Se svým bratrem Josefem podnikl studijní cestu do Paříže", answerC: "Působil jako novinář v Národních listech (1917-1921)", answerD: "Oslavoval technický pokrok, podporoval větší rozvoj technologické civilizace", correctRank: 4, used: false },
    { questionInput: "Který z těchto výroků není pravdivý o Karlu Čapkovi?", answerA: "Po mnichovské kapitulaci r. 1938 byl politicky napadán, odmítal emigrovat", answerB: "Onemocněl zápalem plic a umíra o Vánocích 1938", answerC: "Měl nenávistný vztah se svým bratrem", answerD: "V roce 1935 se oženil s herečkou Olgou Scheinpfflugovou", correctRank: 3, used: false }
];

//databáze všech otázek {question:"",answer:,verdict:""}
$("#totalQuestions").append(database.length); // v modalu okně -> kolik je dohromady otázek v databázi
$("#theme").append(theme); // Otázky z tématu: ......

// po úplném načtení platformy, se vše zobrazí
$(document).ready(function () {
    setTimeout(() => {
        $("#mainCircuit").fadeIn(1500);
        loadingScreen.fadeOut();
        next();
    }, 1000)

})