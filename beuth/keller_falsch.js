$(function () { //jQuery Funktion
//----------------------------------------- Variablen --------------------------------------------------//
//Zeit-Variable ist mit Slider einstellbar
var time = 1500;   
//falsche Ausdrucke
var keller_ausdrucke_falsch =  
["99)", "17)", 
"(21", "(12",
"48/2", "14*3",
"+2", "/9", "*3", 
"7(8)+", "5(1)/"]


//--------------------------------------- Button Events--------------------------------------------------//
//Button falscher Ausdruck
$("#play_falsch").click(keller_falsch); 
//Slider-Funktion lässt die Geschwindigkeit einstellen
$("#slider").on("change",function(){                                          
     time = $(this).val();
    });
    
 

//----------------------------------------- Falsche Ausdrucke -------------------------------------------//
/**
* Funktion für Ausgabe von falschen Ausdrucken für den Kellerautomat. 
* Falsche Ausdrucke werden zufällig ausgegeben und farbig animiert (Knoten,Kanten,Tabellenzeilen).
*/
function keller_falsch(){
    //zufällige falsche Ausdrucke werden aus dem Array mit falschen Ausdrucken ausgegeben
    var keller_ausgabe_falsch = keller_ausdrucke_falsch[Math.floor(Math.random()*keller_ausdrucke_falsch.length)];
    //die Ausgabe wird im HTML-Element "ausdruck_text" gezeigt  
    document.getElementById("ausdruck_text").innerHTML = keller_ausgabe_falsch;

    switch (keller_ausgabe_falsch){
        case "99)":
        case "17)":
        case "48/2":
        case "14*3":    
            //Buttons disabled
            $("#play_richtig").prop('disabled', true);
            $("#play_falsch").prop('disabled', true);
            
            // Statustext: falsch
            $("#state_container").css('background', "#F58A8A")
            document.getElementById("check_text").innerHTML = 
            "Ausdruck ist falsch und kann nicht den Endzustand erreichen.";

            //Start 
            setTimeout(function(){
            $("#edge1").css("color", "#8BCDAB");
            $("#node_q0").css("background", "#8BCDAB");
            $("#q0_ε_ε").css("background","#8BCDAB");
            }, time);
            //Int 0-9 falsch, blinking
            setTimeout(function(){
            $("#edge3").css("color", "#F58A8A");
            $("#node_q1").css("background", "#F58A8A");
            $("#q1_int_ε").css("background", "#F58A8A");
            }, time*2);
            setTimeout(function(){
            $("#edge3").css("color", "#443B3B");
            $("#node_q1").css("background", "#443B3B");
            $("#q1_int_ε").css("background", "#A59C9C");
            }, time*3);    
            setTimeout(function(){
            $("#edge3").css("color", "#F58A8A");
            $("#node_q1").css("background", "#F58A8A");
            $("#q1_int_ε").css("background", "#F58A8A");
            }, time*4);
            setTimeout(function(){
            $("#edge3").css("color", "#443B3B");
            $("#node_q1").css("background", "#443B3B");
            $("#q1_int_ε").css("background", "#A59C9C");
            }, time*5);    
            setTimeout(function(){
            $("#edge3").css("color", "#F58A8A");
            $("#node_q1").css("background", "#F58A8A");
            $("#q1_int_ε").css("background", "#F58A8A");
            }, time*6);

            //Zurück zu den Originalfarben
            setTimeout(function(){
            $("#node_q0, #node_q1, #node_q2, #node_q3").css("background", "#443B3B");
            $("#edge1, #edge2, #edge3, #edge4, #edge5, #edge6").css("color", "#443B3B");
            $("tr").css("background", "#A59C9C");

            //Buttons enabled
            $("#play_richtig").prop('disabled', false);
            $('#play_falsch').prop('disabled', false);
            }, time*7);
        break


        case "(21": 
        case "(12":
            //Buttons disabled
            $("#play_richtig").prop('disabled', true);
            $("#play_falsch").prop('disabled', true);
            
            // Statustext: falsch
            $("#state_container").css('background', "#F58A8A")
            document.getElementById("check_text").innerHTML = 
            "Ausdruck ist falsch und kann nicht den Endzustand erreichen.";

            //Start 
            setTimeout(function(){
            $("#edge1").css("color", "#8BCDAB");
            $("#node_q0").css("background", "#8BCDAB");
            $("#q0_ε_ε").css("background","#8BCDAB");
            }, time);
            //Klammer auf
            setTimeout(function(){
            $("#edge2").css("color", "#8BCDAB");
            $("#node_q1").css("background", "#8BCDAB");
            $("#q1_klammer_ε").css("background", "#8BCDAB");
            }, time*2); 
            //Int 0-9 
            setTimeout(function(){
            $("#edge3").css("color", "#8BCDAB");
            $("#node_q2").css("background", "#8BCDAB");
            $("#q1_int_ε").css("background", "#8BCDAB");
            }, time*3);

            //Int 0-9 falsch, blinking
            setTimeout(function(){
            $("#edge3").css("color", "#F58A8A");
            $("#node_q1").css("background", "#F58A8A");
            $("#q1_int_ε").css("background", "#F58A8A");
            }, time*4);
            setTimeout(function(){
            $("#edge3").css("color", "#443B3B");
            $("#node_q1").css("background", "#443B3B");
            $("#q1_int_ε").css("background", "#A59C9C");
            }, time*5);    
            setTimeout(function(){
            $("#edge3").css("color", "#F58A8A");
            $("#node_q1").css("background", "#F58A8A");
            $("#q1_int_ε").css("background", "#F58A8A");
            }, time*6);
            setTimeout(function(){
            $("#edge3").css("color", "#443B3B");
            $("#node_q1").css("background", "#443B3B");
            $("#q1_int_ε").css("background", "#A59C9C");
            }, time*7);    
            setTimeout(function(){
            $("#edge3").css("color", "#F58A8A");
            $("#node_q1").css("background", "#F58A8A");
            $("#q1_int_ε").css("background", "#F58A8A");
            }, time*8);

            //Zurück zu den Originalfarben
            setTimeout(function(){
            $("#node_q0, #node_q1, #node_q2, #node_q3").css("background", "#443B3B");
            $("#edge1, #edge2, #edge3, #edge4, #edge5, #edge6").css("color", "#443B3B");
            $("tr").css("background", "#A59C9C");
          
            //Buttons enabled
            $("#play_richtig").prop('disabled', false);
            $('#play_falsch').prop('disabled', false);
            }, time*9);  
        break  
        

        case "+2":
        case "/9":
        case "*3": 
             //Buttons disabled
             $("#play_richtig").prop('disabled', true);
             $("#play_falsch").prop('disabled', true);
            
             // Statustext: falsch
             $("#state_container").css('background', "#F58A8A")
             document.getElementById("check_text").innerHTML = 
             "Ausdruck ist falsch und kann nicht den Endzustand erreichen.";

             //Start 
             setTimeout(function(){
             $("#edge1").css("color", "#8BCDAB");
             $("#node_q0").css("background", "#8BCDAB");
             $("#q0_ε_ε").css("background","#8BCDAB");
             }, time);
            
             //Int 0-9 falsch, blinking red
             setTimeout(function(){
             $("#edge3").css("color", "#F58A8A");
             $("#node_q1").css("background", "#F58A8A");
             $("#q1_int_ε").css("background", "#F58A8A");
             }, time*2);
             setTimeout(function(){
             $("#edge3").css("color", "#443B3B");
             $("#node_q1").css("background", "#443B3B");
             $("#q1_int_ε").css("background", "#A59C9C");
             }, time*3);    
             setTimeout(function(){
             $("#edge3").css("color", "#F58A8A");
             $("#node_q1").css("background", "#F58A8A");
             $("#q1_int_ε").css("background", "#F58A8A");
             }, time*4);
             setTimeout(function(){
             $("#edge3").css("color", "#443B3B");
             $("#node_q1").css("background", "#443B3B");
             $("#q1_int_ε").css("background", "#A59C9C");
             }, time*5);    
             setTimeout(function(){
             $("#edge3").css("color", "#F58A8A");
             $("#node_q1").css("background", "#F58A8A");
             $("#q1_int_ε").css("background", "#F58A8A");
             }, time*6);   


             //Zurück zu den Originalfarben
             setTimeout(function(){
             $("#node_q0, #node_q1, #node_q2, #node_q3").css("background", "#443B3B");
             $("#edge1, #edge2, #edge3, #edge4, #edge5, #edge6").css("color", "#443B3B");
             $("tr").css("background", "#A59C9C");
              
             //Buttons enabled
             $("#play_richtig").prop('disabled', false);
             $('#play_falsch').prop('disabled', false);
             }, time*7); 
        break 


        case "7(8)+":
        case "5(1)/":
             //Buttons disabled
             $("#play_richtig").prop('disabled', true);
             $("#play_falsch").prop('disabled', true);

             // Statustext: falsch
             $("#state_container").css('background', "#F58A8A")
             document.getElementById("check_text").innerHTML = 
             "Ausdruck ist falsch und kann nicht den Endzustand erreichen.";
          
             //Start 
             setTimeout(function(){
             $("#edge1").css("color", "#8BCDAB");
             $("#node_q0").css("background", "#8BCDAB");
             $("#q0_ε_ε").css("background","#8BCDAB");
             }, time);
             //Int 0-9
             setTimeout(function(){
             $("#edge3").css("color", "#8BCDAB");
             $("#node_q1").css("background", "#8BCDAB");
             $("#q1_int_ε").css("background", "#8BCDAB");
             }, time*2);
             //Klammer auf
             setTimeout(function(){
             $("#edge2").css("color", "#8BCDAB");
             $("#node_q1").css("background", "#8BCDAB");
             $("#q1_klammer_ε").css("background", "#8BCDAB");
             }, time*3); 
             //Int 0-9
             setTimeout(function(){
             $("#edge3").css("color", "#443B3B");
             $("#node_q1").css("background", "#443B3B");
             $("#q1_int_ε").css("background", "#A59C9C");
             }, time*4);
             setTimeout(function(){
             $("#edge3").css("color", "#8BCDAB");
             $("#node_q1").css("background", "#8BCDAB");
             $("#q1_int_ε").css("background", "#8BCDAB");
             }, time*5);
             //Klammer ) zu
             setTimeout(function(){
             $("#edge4").css("color", "#8BCDAB");
             $("#node_q2").css("background", "#8BCDAB");
             $("#q2_klammer_zu").css("background", "#8BCDAB");
            }, time*6)
             //Operator, blinking red
             setTimeout(function(){
             $("#edge6").css("color", "#F58A8A");
             $("#node_q2").css("background", "#F58A8A");
             $("#q2_o_ε").css("background", "#F58A8A");            
             }, time*7);
             setTimeout(function(){
             $("#edge6").css("color", "#443B3B");
             $("#node_q2").css("background", "#443B3B");
             $("#q2_o_ε").css("background", "#A59C9C");            
             }, time*8);
             setTimeout(function(){
             $("#edge6").css("color", "#F58A8A");
             $("#node_q2").css("background", "#F58A8A");
             $("#q2_o_ε").css("background", "#F58A8A");            
             }, time*9);
             setTimeout(function(){
             $("#edge6").css("color", "#443B3B");
             $("#node_q2").css("background", "#443B3B");
             $("#q2_o_ε").css("background", "#A59C9C");            
             }, time*10);
             setTimeout(function(){
             $("#edge6").css("color", "#F58A8A");
             $("#node_q2").css("background", "#F58A8A");
             $("#q2_o_ε").css("background", "#F58A8A");            
             }, time*11);
                  
    
             //Zurück zu den Originalfarben
             setTimeout(function(){
             $("#node_q0, #node_q1, #node_q2, #node_q3").css("background", "#443B3B");
             $("#edge1, #edge2, #edge3, #edge4, #edge5, #edge6").css("color", "#443B3B");
             $("tr").css("background", "#A59C9C");
              
             //Buttons enabled
             $("#play_richtig").prop('disabled', false);
             $('#play_falsch').prop('disabled', false);
             }, time*12);  
        break  
    }
}

})