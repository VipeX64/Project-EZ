$("#mainCircuit").hide(); // vše je schované, dokud se vše potřebné nenačte
const loadingScreen = $("#loadingScreen");
const theme = "Ekonomická stránka podniku"; // otázky z tématu:

const database = [
    {questionInput:"Co je to NÁKLAD?",answerA:"Účelové vynaložení prostředků a práce při uskutečňování hospodářské činnosti podniku",answerB:"Úbytek hospodářských prostředků",answerC:"Výkon podniku vyjádřený v peněžních jednotkách. Vzniká realizací výrobků, základem jsou tržby",answerD:"Přírůstek hospodářských prostředků v peněžním vyjádření",correctRank:1,used:false},
    {questionInput:"Co je to VÝDAJ?",answerA:"Účelové vynaložení prostředků a práce při uskutečňování hospodářské činnosti podniku",answerB:"Úbytek hospodářských prostředků",answerC:"Výkon podniku vyjádřený v peněžních jednotkách. Vzniká realizací výrobků, základem jsou tržby",answerD:"Přírůstek hospodářských prostředků v peněžním vyjádření",correctRank:2,used:false},
    {questionInput:"Co je to VÝNOS?",answerA:"Účelové vynaložení prostředků a práce při uskutečňování hospodářské činnosti podniku",answerB:"Úbytek hospodářských prostředků",answerC:"Výkon podniku vyjádřený v peněžních jednotkách. Vzniká realizací výrobků, základem jsou tržby",answerD:"Přírůstek hospodářských prostředků v peněžním vyjádření",correctRank:3,used:false},
    {questionInput:"Co je to PŘÍJEM?",answerA:"Účelové vynaložení prostředků a práce při uskutečňování hospodářské činnosti podniku",answerB:"Úbytek hospodářských prostředků",answerC:"Výkon podniku vyjádřený v peněžních jednotkách. Vzniká realizací výrobků, základem jsou tržby",answerD:"Přírůstek hospodářských prostředků v peněžním vyjádření",correctRank:4,used:false},
    {questionInput:"Jaké je dvojí kritérium posuzování podnikové činnosti?",answerA:"Přímé a nepřímé",answerB:"Hmotné a finanční",answerC:"Dokladové a účetní",answerD:"Externí a interní",correctRank:2,used:false},
    {questionInput:"Co nepatří mezi základní cíle podnikání",answerA:"Dosahování přiměřeného zisku",answerB:"Zajištění dlouhodobé existence",answerC:"Rozvoj podniku (inovace, snižování nákladů)",answerD:"Zaměstnávat co nejvíce zaměstnanců",correctRank:4,used:false},
    {questionInput:"Klasifikace nákladů podle druhu rozdělujeme na:",answerA:"Vlastní x cizí A nové x staré",answerB:"externí x interní A prvotní x druhotné",answerC:"Účetní a vázané",answerD:"Zaknihované x depotní",correctRank:2,used:false},
    {questionInput:"Členění nákladů podle vztahu k objemu výroby?",answerA:"Výnosové a nákladové",answerB:"Variabilní (proměnlivé) a fixní (stálé)",answerC:"Rostoucí a klesající",answerD:"Výrobní a nevýrobní",correctRank:2,used:false},
    {questionInput:"Jaký z nákladů nepatří mezi variabilní (proměnlivé) náklady ze vztahu k objemu výroby?",answerA:"Proporcionální (lineární)",answerB:"Odproporcionální (konstantní)",answerC:"Nadproporcionální (progresivní)",answerD:"Podproporcionální (degresivní)",correctRank:2,used:false},
    {questionInput:"Vzoreček pro výpočet celkových nákladů dle vztahu k objemu výroby?",answerA:"TC = VC - FC",answerB:"TC = VC + FC",answerC:"FC = TC - VC",answerD:"VC = TC * FC",correctRank:2,used:false},
    {questionInput:"Členění nákladů podle účelu?",answerA:"Jednicové (přímé) a režijní (nepřímé)",answerB:"Dvojcové (rovné) a rozvité (rostoucí)",answerC:"Hmotné a finanční",answerD:"Externí a interní",correctRank:1,used:false},
    {questionInput:"Co nepatří do definice jednicových (přímých) nákladů?",answerA:"Náklady, které lze stanovit přímo na 1 kus výrobku",answerB:"Spotřeba základního materiálu",answerC:"Mzdy výrobních dělníků",answerD:"Mzdy THP (technicko hospodářských pracovníků)",correctRank:4,used:false},
    {questionInput:"Co nepatří do definice režijních (nepřímých) nákladů?",answerA:"Je nutné je rozpočítat na základě určitých vzorců",answerB:"Mzdy THP",answerC:"Spotřeba základního materiálu",answerD:"Pronájem budovy",correctRank:3,used:false},
    {questionInput:"Co je to kalkulace?",answerA:"Metoda stanovení vlastních nákladů",answerB:"Finanční plán budoucích tržeb",answerC:"Výkaz o nákladech i výnosech",answerD:"Činnost, prováděná na konci účetního období",correctRank:1,used:false},
    {questionInput:"Jaká z forem kalkulací sem nepatří?",answerA:"Nákupní",answerB:"Servisní",answerC:"Prodejní",answerD:"Výrobní",correctRank:2,used:false},
    {questionInput:"Jaké kalkulační metody sem nepatří?",answerA:"Kalkulace prostým dělením",answerB:"Kalkulace bikvadratického členu",answerC:"Kalkulace dělením s poměrovými čísly",answerD:"Kalkulace přirážková",correctRank:2,used:false},
    {questionInput:"Jak lze zvyšovat výnosy?",answerA:"Zvýšení objemu výroby",answerB:"Zmenšení objemu výroby",answerC:"",answerD:"",correctRank:1,used:false},
    {questionInput:"Jak lze zvyšovat výnosy?",answerA:"Snížením ceny výrobku",answerB:"Zvýšením ceny výrobku",answerC:"",answerD:"",correctRank:2,used:false},
    {questionInput:"Co nepatří mezi funkce zisku?",answerA:"Tvorba finančních zdrojů pro další rozvoj podniku",answerB:"Motivace podnikání a základ k motivaci zaměstnanců (odměny, podíly na HV...)",answerC:"Základ pro rozdělování důchodů mezi podniky a státem",answerD:"Základ pro výpočet daně odváděné státu",correctRank:4,used:false},
    {questionInput:"Co je to rozpočet?",answerA:"Plán vyjádřený v peněžních prostředcích",answerB:"Částka, kterou můžeme za rok utratit",answerC:"Účetní doklad, potřebný k závěrce",answerD:"Způsob zjištění hospodářského výsledku",correctRank:1,used:false},
    {questionInput:"Co je to bod zvratu?",answerA:"Objem produkce, kdy výnosy právě přesáhli vynaložené náklady",answerB:"Objem produkce, kdy výnosy právě klesly pod vynaložené náklady",answerC:"Objem produkce, kdy výnosy právě uhradí vynaložené náklady",answerD:"Moment, kdy podnik oficiálně krachnul",correctRank:3,used:false}
];
// {questionInput:"",answerA:"",answerB:"",answerC:"",answerD:"",correctRank:,used:false}, šablona pro otázky

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