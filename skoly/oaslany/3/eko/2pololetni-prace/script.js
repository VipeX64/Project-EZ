$("#mainCircuit").hide(); // vše je schované, dokud se vše potřebné nenačte
const loadingScreen = $("#loadingScreen");
const theme = "2. pololetní práce z ekonomiky"; // otázky z tématu:

const database = [
    { questionInput: "Který z výroků správně NEDEFINUJE pojem 'Finanční analýza'?", answerA: "Rozbor hospodářského podniku, hodnocení uplynulého období", answerB: "Součást podnikového řízení, spojeno s finančním řízením podniku", answerC: "Poměření získaných údajů a rozšíření jejich vypovídacích schopností", answerD: "Schopnost získávat cizí zdroje k úhradě závazků", correctRank: 4, used: false },
    {questionInput: "Mezi účely finanční analýzy patří: volba nejvhodnějších směrů činností do budoucna nebo také zjištění příčiny zlepšení či zhoršení finanční stránky podniku. Jaký další účel znáte?", answerA:"Výpočet mezd", answerB:"Sestavení podnikatelského záměru",answerC:"Detailní přehled o daňové evidenci",answerD:"Vyjádření komplexní finanční situace podniku", correctRank:4,used:false},
    {questionInput:"Soubor finančních výkazů vypovídající o finančních poměrech se jmenuje?",answerA:"Rozvahovka",answerB:"Výkaz Cash flow",answerC:"Výsledovka",answerD:"Účetní závěrka",correctRank:4,used:false},
    {questionInput:"Účetní závěrka obsahuje...",answerA:"Rozvahu, výsledovku, přílohu a cashflow",answerB:"Rozvahu, výpis z bankovního účtu, přílohu a cashflow",answerC:"Rozvahu, výsledovku, přílohu a pohledávky",answerD:"Závazky, výpis z bankovního účtu, pohledávky a nezaplacené faktury",correctRank:"1",used:false},
    {"questionInput":"Účetní výkazy mají funkci...","answerA":"Finanční a ukazovací","answerB":"Informační a dokazovací","answerC":"Informační a průkazní","answerD":"Informační a ukazovací","correctRank":"3","used":"false"},
    {"questionInput":"Jaké jsou funkce účetních výkazů?","answerA":"Informační a průkazní ","answerB":"Provozní a finanční ","answerC":"Příkazové a inkasní ","answerD":"","correctRank":"1","used":"false"},
    {"questionInput":"Uživatelé finanční analýzy jsou...","answerA":"Investoři, manažeři, zákazníci a dodavatelé, zaměstnanci a banky","answerB":"Investoři, vláda, zákazníci a dodavatelé, zaměstnanci a banky","answerC":"Finanční úřad, vláda, zákazníci a dodavatelé, zaměstnanci a banky","answerD":"Investoři, manažeři, zákazníci a dodavatelé, centrální banky a Evropská unie","correctRank":"1","used":"false"},
    {questionInput:"Definice které z funkcí účetních výkazů zní: poskytování pravdivých a věcných informací o finanční a hospodářské situaci",answerA:"Informační funkce",answerB:"Průkazní funkce",answerC:"",answerD:"",correctRank:1,used:false},
    {questionInput:"Definice které z funkcí účetních výkazů zní: prokazuje uchování majetkové podstaty podniku, prokazuje tvorbu a rozdělení hospodářského výsledku",answerA:"Informační funkce",answerB:"Průkazní funkce",answerC:"",answerD:"",correctRank:2,used:false},
    {"questionInput":"Co je to likvidita?","answerA":"Rozbor hospodaření podniku ","answerB":"Doplnění a objasnění informací z rozvahy a vysledovky ","answerC":"Vyjádření všech změn ve finanční situaci podniku ","answerD":"Momentální schopnost podniku splácet krátkodobé závazky ","correctRank":"4","used":"false"},
    {"questionInput":"Při finanční analýze se analyzují absolutní vstupní data, což jsou...","answerA":"Rozvaha, výsledovka, závazky, pohledávky","answerB":"Závazky, pohledávky, stav bankovního účtu a pokladny","answerC":"Rozvaha, výsledovka, příloha, výkaz cashflow","answerD":"Odpisy majetku a tržby za služby a zboží","correctRank":"3","used":"false"},
    {"questionInput":"Jaké jsou poměrové ukazatele finanční analýzy?","answerA":"Rozvaha, výkaz zisků a ztrát, příloha a přehled o peněžních tocích ","answerB":"Zadluženost, likvidita, rentabilita, aktivita, produktivita, ukazatelé tržní hodnoty ","answerC":"Aktiva, pasiva ","answerD":"Rozvaha, výsledovka, příloha, cash flow","correctRank":"2","used":"false"},
    {"questionInput":"Rozvaha je...","answerA":"Přehled zisků a ztrát za uplynulé časové období","answerB":"Přehled o finanční a majetkové situaci podniku k určitému dni","answerC":"Přehled o cenných papírech v našem vlastnictví","answerD":"Přehled o stavu materiálu a zboží na skladě","correctRank":"2","used":"false"},
    {"questionInput":"Aktiva můžeme členit z hlediska finanční analýzy podle...","answerA":"Stupně likvidnosti","answerB":"Jejich hodnoty","answerC":"Podle způsobu jejich nabytí (koupí, vlastní výrobou...)","answerD":"","correctRank":"1","used":"false"},
    {"questionInput":"Výkaz zisků a ztrát informuje o tom, zda podnik...","answerA":"Vyplácí mzdy zaměstnancům","answerB":"Dosahuje přiměřeného zisku z vloženého kapitálu","answerC":"Je schopen splácet své závazky včas","answerD":"","correctRank":"2","used":"false"},
    {"questionInput":"Co je to zadluženost?","answerA":"Vyjádření všech změn ve finančních tocích podniku ","answerB":"Rozbor hospodaření podniku ","answerC":"Prokazování tvorby a rozdělení HV","answerD":"Skutečnost, že podnik využívá k financování svých aktiv a činností cizi zdroje ","correctRank":"4","used":"false"},
    {"questionInput":"Výkaz zisků a ztrát dělíme na...","answerA":"Několikastupňový výkaz","answerB":"Jednostupňový výkaz a dvoustupňový výkaz","answerC":"Jednostupňový výkaz a vícestupňový výkaz","answerD":"","correctRank":"3","used":"false"},
    {"questionInput":"Vyber možnost, která není správně:","answerA":"Cash flow je vyjádření všech změn ve finanční situaci podniku","answerB":"Cash flow zjišťuje zdroje tvorby peněžních prostředku a jejich užití","answerC":"Cash flow vysvětluje přírůstky a úbytky peněžních prostředků","answerD":"Cash flow ukazuje koeficient zadluženosti podniku","correctRank":"4","used":"false"},
    {"questionInput":"Cash flow nemůžeme sestavit z...","answerA":"Provozní činnosti","answerB":"Investiční činnosti","answerC":"Prodejní činnosti","answerD":"Finanční činnosti","correctRank":"3","used":"false"},
    {questionInput:"Jak funguje přímá metoda u sestavení výkazu cash flow?",answerA:"Upravuje se hospodářský výsledek o daně",answerB:"Třídením účetních případů, které se týkají pohybu peněžních prostředků",answerC:"Maximalizuje příjmu podniku",answerD:"Zjišťuje efektivitu pracovního nasazení",correctRank:2,used:false},
    {"questionInput":"Výkaz cash flow můžeme sestavit metodou...","answerA":"Přímou, nepřímou a náhradní přímou metodou","answerB":"Přímou, nepřímou a náhradní nepřímou metodou","answerC":"","answerD":"","correctRank":"1","used":"false"},
    {"questionInput":"Co je to cash flow?","answerA":"Schopnost podniku dosahovat zisku použitím investovaného kapitálu ","answerB":"Vyjádření všech změn ve finanční situaci podniku ","answerC":"Vyjádření skutečnosti, že podnik využívá k financování svých aktiv cizí zdroje ","answerD":"Momentální schopnost podniku splácet krátkodobé závazky ","correctRank":"2","used":"false"},
    {"questionInput":"Příloha z hlediska finanční analýzy obsahuje...","answerA":"Právní formu, jméno a příjmení vlastníka podniku a bilanci","answerB":"Rok založení podniku, hlavní činnost a počet zaměstnanců","answerC":"Název, sídlo, právní formu, hlavní činnost","answerD":"","correctRank":"3","used":"false"},
    {"questionInput":"Jaké jsou funkce účetních výkazů?","answerA":"Informační a technologická fuknce","answerB":"Informační a průkazní funkce","answerC":"Správná a špatná fuknce","answerD":"Holetní funkce","correctRank":"2","used":"false"},
    {"questionInput":"Jaký je vzoreček ukazatele celkové zadluženosti?","answerA":"Zat = placené úroky/(zisk+placené úroky) x 100%","answerB":"Zad = celkové závazky/celková aktivita x 100%","answerC":"ROE = čistý zisk/vlastní kapitál x 100%","answerD":"P/E = tržní cena akcie/zisk na jednu akcii ","correctRank":"2","used":"false"},
    //konec fin. analýzy
    
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