$(function () {


//----------------------------------------- Variablen ---------------------------------------------------//
var time = 500;
var keller_ausdrucke_falsch = ["99)", "17)", "(21", "(12", "48/2", "+2", "/9", "*3", "7(8)+", "5(1)/"];


//--------------------------------------- Button Events--------------------------------------------------//
$("#play_falsch").click(keller_falsch);
$("#step").click();


//----------------------------------------- Falsche Ausdrucke -------------------------------------------------------//
/**
* Funktion für Ausgabe von falschen Ausdrucken für den Kellerautomat. 
* Falsche Ausdrucke werden zufällig ausgegeben und animiert.
*/
function keller_falsch(){
    var keller_ausgabe_falsch = keller_ausdrucke_falsch[Math.floor(Math.random()*keller_ausdrucke_falsch.length)];
    document.getElementById("ausdruck_text").innerHTML = keller_ausgabe_falsch;
}

})