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
    { questionInput: "Který z těchto výroků není pravdivý o Karlu Čapkovi?", answerA: "Po mnichovské kapitulaci r. 1938 byl politicky napadán, odmítal emigrovat", answerB: "Onemocněl zápalem plic a umíra o Vánocích 1938", answerC: "Měl nenávistný vztah se svým bratrem", answerD: "V roce 1935 se oženil s herečkou Olgou Scheinpfflugovou", correctRank: 3, used: false },
    { questionInput: "Karel Čapek od působil od r. 1921 v jakých novinách?", answerA: "Lidové noviny", answerB: "Tisk lidu", answerC: "Praha dnes", answerD: "Národní list", correctRank: 1, used: false },
    { questionInput: "Od jakého roku se časuje 1. vývojové období Karla Čapka?", answerA: "1918", answerB: "1921", answerC: "1929", answerD: "1938", correctRank: 2, used: false },
    { questionInput: "Co je charakteristické pro 3. vývojové období Karla Čapka, které se časuje v letech 1928 - 1933", answerA: "Cestopisy", answerB: "Horrory a detektivky", answerC: "Krátké povídky, fejetony a sloupky", answerD: "Citově zabarvené básně, milostná a přírodní tématika", correctRank: 3, used: false },
    { questionInput: "Které z těchto děl se neřadí do 3. období Karla Čapka?", answerA: "Povídky z jedné a druhé kapsy", answerB: " Dášenka čili život štěněte", answerC: "Devatero pohádek a ještě jedna od Josefa Čapka jako přívažek", answerD: "Krakatit", correctRank: 4, used: false },
    { questionInput: "Pro které z vývojových období Karla Čapka je typická volná románová neoteická trilogie/noetika", answerA: "1. období", answerB: "2. období", answerC: "3. období", answerD: "4. období", correctRank: 4, used: false },
    { questionInput: "Čím je ovlivněno poslední vývojové období Karla Čapka trvající v letech 1935 - 1938?", answerA: "Předzvěstí 2. sv. války a nastupujícím fašismem", answerB: "Smrtí bratra", answerC: "Tehdejším politickým režimem v ČSR", answerD: "Stálým technologickým pokrokem", correctRank: 1, used: false },
    // konec Čapka
    { questionInput: "Který z těchto výroků NENÍ PRAVDIVÝ o Karlu Poláčkovi?", answerA: "Pocházel z východní Čech, z židovské rodiny", answerB: "Roku 1914 bojoval na frontě 1. sv. války", answerC: "Zahynul v koncentračním táboře Osvětim", answerD: "Byl lhostejný vůči ostatním českým židům", correctRank: 4, used: false },
    {questionInput:"Karel Poláček napsal román Muži v ofsajdu, charakterizujte dílo.",answerA:"Humoristická próza o venkovských lázních",answerB:"Vyprávění padlých vojáků 1. sv. války",answerC:"Humoristická próza o fanoušcích fotbalu",answerD:"Společenská kritika a satira",correctRank:3,used:false},
    {questionInput:"Karel Poláček napsal které z těchto děl?",answerA:"Bylo nás pět",answerB:"Továrna na absolutno",answerC:"Cirkus Humberto",answerD:"Petrolejové lampy",correctRank:1,used:false},
    {questionInput:"Kterou z vybraných možností Eduard Bass nepsal?",answerA:"Fejetony",answerB:"Reportáže",answerC:"Básně",answerD:"Sloupky",correctRank:3,used:false},
    {questionInput:"",answerA:"",answerB:"",answerC:"",answerD:"",correctRank:,used:false}
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