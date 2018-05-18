$("#mainCircuit").hide(); // vše je schované, dokud se vše potřebné nenačte
const loadingScreen = $("#loadingScreen");
const theme = "Meziválečná próza"; // otázky z tématu:

const database = [
    {question: "Karel Čapek a Josef Čapek se zasloužili o zmezinárodnění jakého slova?", a: "Kvído", b: "Motor", c: "Robot", d: "Televize", corr: 3, used: false },
    {question: "Kde se narodil Karel Čapek a jakého povolání byla hlava rodiny?", a: "V Pardubicích, právník", b: "Ve Skalici, lékař", c: "V Benešově, vojenský generál", d: "V Malých Svatoňovicích v podhůří Krkonoš, lékař", corr: 4, used: false },
    {question: "Co je to sloupek?", a: "Krátký odstavec kritizující politickou činnost", b: "Modernější obdoba Nerudova fejetonu s vtipným zpracováním", c: "Obrázek složený z různých písmenek", d: "Menší podstavec navržený pro exponáty v muzeu", corr: 2, used: false },
    {question: "Ve kterém ze svých vývojových období napsal Karel Čapek sbírku sedmi povídek Zářivé hlubiny a čím byla stejnojmenná povídka inspirována?",a:"2. období, vynález knihtisku",b:"1. období, zkázou Titaniku",c:"4. období, smrtí svého bratra",d:"1. období, cestami po světě",corr:2,used:false},
    {question: "Co to byla Francouzská poezie nové doby?",a:"Překlady z tvorby moderních francouzských básníků",b:"Důkladné popisy bitev ve Versailles",c:"Krycí jméno pro bitvu u Waterloo",d:"Hnutí za zavedení nového uměleckého směru",corr:1,used:false},
    {question:"V jakých letech probíhalo 2. vývojové období Karla Čapka a co je po toto období typické?",a:"1911-1915, psaní povídek",b:"1899-1910, líčení příběhů z cest",c:"1921-1927, tvorba dramatických a románových utopií",d:"1930-1940, kritika tehdejšího politického režimu",corr:3,used:false},
    {question:"Které z těchto děl nepatří mezi dramata od Karla Čapka?",a:"Ze života hmyzu",b:"R. U. R.",c:"Věc Makropulos",d:"30 případů Majora Zemana",corr:4,used:false},
    {question:"Které z těchto děl patří mezi fantastsicko-utopické romány od Karla Čapka?",a:"Továrna na absolutno",b:"Tisíc a jedna noc",c:"Vítězná hvězda",d:"Bylo nás 5",corr:1,used:false},
    {question:"Který z těchto výroků není pravdivý o Karlu Čapkovi?",a:"Studoval gymnázium v Hradci Králové, v Praze, poté filozofii na UK v Praze",b:"Se svým bratrem Josefem podnikl studijní cestu do Paříže",c:"Působil jako novinář v Národních listech (1917-1921)",d:"Oslavoval technický pokrok, podporoval větší rozvoj technologické civilizace",corr:4,used:false},
    {question:"Který z těchto výroků není pravdivý o Karlu Čapkovi?",a:"Po mnichovské kapitulaci r. 1938 byl politicky napadán, odmítal emigrovat",b:"Onemocněl zápalem plic a umíra o Vánocích 1938",c:"Měl nenávistný vztah se svým bratrem",d:"V roce 1935 se oženil s herečkou Olgou Scheinpfflugovou",corr:3,used:false}
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