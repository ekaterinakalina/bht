
$(function () {

//----------------------------------------- Variablen ---------------------------------------------------//
 var time = 1500;  //Zeit-Variable ist mit Slider einstellbar
 var keller_ausdrucke_richtig = 
 ["1", "2", "3", "4", "0", 
 "(5)", "(6)", "(7)", "(8)", "(9)", 
 "2*6", "8+7", "5-2", "9/3", 
 "(4/2)", "(8+0)", "(3*3)", "(8-7)", 
 "((((2)*1)+7)/3*9)", "((((6)*2)+5)/2*4)",
 "(8)-3", "(2)*9"];

 //--------------------------------------- Button Events--------------------------------------------------//

 $("#play_richtig").click(keller_richtig);
 $("#step").click();
 //Slider-Funktion lässt die Geschwindigkeit einstellen
 $("#slider").on("change",function(){                                          
 time = $(this).val();
 });



//----------------------------------------- Richtige Ausdrucke -------------------------------------------------------//
/**
* Funktion für Ausgabe von richtigen Ausdrucken für den Kellerautomat. 
* Richtige Ausdrucke werden zufällig ausgegeben und animiert.
*/
function keller_richtig(){
    var keller_ausgabe_richtig = keller_ausdrucke_richtig[Math.floor(Math.random()*keller_ausdrucke_richtig.length)];
    document.getElementById("ausdruck_text").innerHTML = keller_ausgabe_richtig;

    switch (keller_ausgabe_richtig) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
            //Button "richtiger Ausdruck" disabled
            $('#play_richtig').prop('disabled', true);

            setTimeout(function(){
            $("#node_q0").css("background", "#8BCDAB");
            $("#edge1").css("color", "#8BCDAB");
            $("#q0_ε_ε").css("background","#8BCDAB");
            }, time);
            setTimeout(function(){
            $("#node_q1").css("background", "#8BCDAB");
            $("#edge3").css("color", "#8BCDAB");
            $("#q1_int_ε").css("background", "#8BCDAB");
            }, time*2)
            setTimeout(function(){
            $("#node_q2").css("background", "#8BCDAB");
            $("#edge5").css("color", "#8BCDAB");
            }, time*3)
            setTimeout(function(){
            $("#node_q3").css("background", "#8BCDAB");
            $("#keller_end").css("background", "#8BCDAB");
            }, time*4)

            setTimeout(function(){
            $("#node_q0, #node_q1, #node_q2, #node_q3").css("background", "#443B3B");
            $("#edge1, #edge3, #edge5").css("color", "#443B3B");
            $("tr").css("background", "#A59C9C");

            $('#play_richtig').prop('disabled', false);
            }, time*5);
        break 
          

        case "(5)": 
        case "(6)": 
        case "(7)":
        case "(8)": 
        case "(9)": 
            //Button "richtiger Ausdruck" disabled
            $('#play_richtig').prop('disabled', true);

            setTimeout(function(){
            $("#edge1").css("color", "#8BCDAB");
            $("#node_q0").css("background", "#8BCDAB");
            $("#q0_ε_ε").css("background","#8BCDAB");
            }, time);
            setTimeout(function(){
            $("#edge2").css("color", "#8BCDAB");
            $("#node_q1").css("background", "#8BCDAB");
            $("#q1_klammer_ε").css("background", "#8BCDAB"); 
            }, time*2)
            setTimeout(function(){
            $("#edge3").css("color", "#8BCDAB");
            $("#q1_int_ε").css("background", "#8BCDAB");
            }, time*3)
            setTimeout(function(){
            $("#edge4").css("color", "#8BCDAB");
            $("#node_q2").css("background", "#8BCDAB");
            $("#q2_klammer_zu").css("background", "#8BCDAB");
            }, time*4)
            setTimeout(function(){
            $("#edge5").css("color", "#8BCDAB");
            $("#node_q3").css("background", "#8BCDAB");
            $("#keller_end").css("background", "#8BCDAB");
            }, time*5)

                
            setTimeout(function(){
            $("#node_q0, #node_q1, #node_q2, #node_q3").css("background", "#443B3B");
            $("#edge1, #edge2, #edge3, #edge4, #edge5").css("color", "#443B3B");
            $("tr").css("background", "#A59C9C");
    
            $('#play_richtig').prop('disabled', false);
            }, time*6);
       
        break 


        case "2*6":
        case "8+7": 
        case "5-2":
        case "9/3": 
            //Button "richtiger Ausdruck" disabled
            $('#play_richtig').prop('disabled', true);

            setTimeout(function(){
            $("#edge1").css("color", "#8BCDAB");
            $("#node_q0").css("background", "#8BCDAB");
            $("#q0_ε_ε").css("background","#8BCDAB");
            }, time);
            setTimeout(function(){
            $("#edge3").css("color", "#8BCDAB");
            $("#node_q1").css("background", "#8BCDAB");
            $("#q1_int_ε").css("background", "#8BCDAB");
            }, time*2)
            setTimeout(function(){
            $("#edge3").css("color", "#443B3B");
            $("#node_q1").css("background", "#443B3B");
            $("#q1_int_ε").css("background", "#A59C9C");
            }, time*3)
            setTimeout(function(){
            $("#edge6").css("color", "#8BCDAB");
                $("#node_q2").css("background", "#8BCDAB");
                $("#q2_o_ε").css("background", "#8BCDAB");
                }, time*3)
                setTimeout(function(){
                $("#edge3").css("color", "#8BCDAB");
                $("#node_q1").css("background", "#8BCDAB");
                $("#q1_int_ε").css("background", "#8BCDAB");
                }, time*4)
                setTimeout(function(){
                $("#edge5").css("color", "#8BCDAB");
                $("#node_q3").css("background", "#8BCDAB");
                $("#keller_end").css("background", "#8BCDAB");
                }, time*5)
                
                setTimeout(function(){
                $("#node_q0, #node_q1, #node_q2, #node_q3").css("background", "#443B3B");
                $("#edge1, #edge2, #edge3, #edge4, #edge5, #edge6").css("color", "#443B3B");
                $("tr").css("background", "#A59C9C");
    
                $('#play_richtig').prop('disabled', false);
                }, time*6);
            break

        case "(4/2)":
        case "(8+0)":
        case "(3*3)":
        case "(8-7)":
            //Button "richtiger Ausdruck" disabled
            $('#play_richtig').prop('disabled', true);

            setTimeout(function(){
            $("#edge1").css("color", "#8BCDAB");
            $("#node_q0").css("background", "#8BCDAB");
            $("#q0_ε_ε").css("background","#8BCDAB");
            }, time);
            setTimeout(function(){
            $("#edge2").css("color", "#8BCDAB");
            $("#node_q1").css("background", "#8BCDAB");
            $("#q1_klammer_ε").css("background", "#8BCDAB"); 
            }, time*2)
            setTimeout(function(){
            $("#edge3").css("color", "#8BCDAB");
            $("#node_q1").css("background", "#8BCDAB");
            $("#q1_int_ε").css("background", "#8BCDAB");
            }, time*3)
            setTimeout(function(){
            $("#edge3").css("color", "#443B3B");
            $("#node_q1").css("background", "#443B3B");
            $("#q1_int_ε").css("background", "#A59C9C");
            }, time*4)
            setTimeout(function(){
            $("#edge6").css("color", "#8BCDAB");
            $("#node_q2").css("background", "#8BCDAB");
            $("#q2_o_ε").css("background", "#8BCDAB");
            }, time*5)
            setTimeout(function(){
            $("#edge3").css("color", "#8BCDAB");
            $("#node_q1").css("background", "#8BCDAB");
            $("#q1_int_ε").css("background", "#8BCDAB");
            }, time*6)
            //Klammer ) zu
            setTimeout(function(){
            $("#edge4").css("color", "#8BCDAB");
            $("#node_q2").css("background", "#8BCDAB");
            $("#q2_klammer_zu").css("background", "#8BCDAB");
            }, time*7)
            //Keller End
            setTimeout(function(){
            $("#edge5").css("color", "#8BCDAB");
            $("#node_q3").css("background", "#8BCDAB");
            $("#keller_end").css("background", "#8BCDAB");
            }, time*8)
            
            //Zurück zu den Originalfarben
            setTimeout(function(){
            $("#node_q0, #node_q1, #node_q2, #node_q3").css("background", "#443B3B");
            $("#edge1, #edge2, #edge3, #edge4, #edge5, #edge6").css("color", "#443B3B");
            $("tr").css("background", "#A59C9C");
           
            //Button "richtiger Ausdruck" enabled
            $('#play_richtig').prop('disabled', false);
            }, time*9);
        break


        case"((((2)*1)+7)/3*9)": 
        case "((((6)*2)+5)/2*4)":
            //Button "richtiger Ausdruck" disabled
            $('#play_richtig').prop('disabled', true);
            
            setTimeout(function(){
            $("#edge1").css("color", "#8BCDAB");
            $("#node_q0").css("background", "#8BCDAB");
            $("#q0_ε_ε").css("background","#8BCDAB");
            }, time);
            //Klammer (1
            setTimeout(function(){
            $("#edge2").css("color", "#8BCDAB");
            $("#node_q1").css("background", "#8BCDAB");
            $("#q1_klammer_ε").css("background", "#8BCDAB");
            }, time*2);
            setTimeout(function(){
            $("#edge2").css("color", "#443B3B");
            $("#node_q1").css("background", "#443B3B");
            $("#q1_klammer_ε").css("background", "#A59C9C");
            }, time*3);
            //Klammer (2
            setTimeout(function(){
            $("#edge2").css("color", "#8BCDAB");
            $("#node_q1").css("background", "#8BCDAB");
            $("#q1_klammer_ε").css("background", "#8BCDAB");
            }, time*3);
            setTimeout(function(){
            $("#edge2").css("color", "#443B3B");
            $("#node_q1").css("background", "#443B3B");
            $("#q1_klammer_ε").css("background", "#A59C9C");
            }, time*4);
            //Klammer (3
            setTimeout(function(){
            $("#edge2").css("color", "#8BCDAB");
            $("#node_q1").css("background", "#8BCDAB");
            $("#q1_klammer_ε").css("background", "#8BCDAB");
            }, time*5);
            setTimeout(function(){
            $("#edge2").css("color", "#443B3B");
            $("#node_q1").css("background", "#443B3B");
            $("#q1_klammer_ε").css("background", "#A59C9C");
            }, time*6);
            //Klammer (4
            setTimeout(function(){
            $("#edge2").css("color", "#8BCDAB");
            $("#node_q1").css("background", "#8BCDAB");
            $("#q1_klammer_ε").css("background", "#8BCDAB");
            }, time*7);
            //int 0-9 
            setTimeout(function(){
            $("#edge3").css("color", "#8BCDAB");
            $("#node_q2").css("background", "#8BCDAB");
            $("#q1_int_ε").css("background", "#8BCDAB");
            }, time*8);
            //Klammer ) zu
            setTimeout(function(){
            $("#edge4").css("color", "#8BCDAB");
            $("#node_q2").css("background", "#8BCDAB");
            $("#q2_klammer_zu").css("background", "#8BCDAB");
            }, time*9);

            setTimeout(function(){
            $("#node_q2").css("background", "#443B3B");
            }, time*10);

            //Operator
            setTimeout(function(){
            $("#edge6").css("color", "#8BCDAB");
            $("#node_q2").css("background", "#8BCDAB");
            $("#q2_o_ε").css("background", "#8BCDAB");            
            }, time*11);

            //Int 0-9
            setTimeout(function(){
            $("#edge3").css("color", "#443B3B");
            $("#node_q1").css("background", "#443B3B");
            $("#q1_int_ε").css("background", "#A59C9C");
            }, time*12);
            setTimeout(function(){
            $("#edge3").css("color", "#8BCDAB");
            $("#node_q1").css("background", "#8BCDAB");
            $("#q1_int_ε").css("background", "#8BCDAB");
            }, time*13);

            //Klammer ) zu
            setTimeout(function(){
            $("#edge4").css("color", "#443B3B");
            $("#node_q2").css("background", "#443B3B");
            $("#q2_klammer_zu").css("background", "#A59C9C");
            }, time*14);
            setTimeout(function(){
            $("#edge4").css("color", "#8BCDAB");
            $("#node_q2").css("background", "#8BCDAB");
            $("#q2_klammer_zu").css("background", "#8BCDAB");
            }, time*15)


            //Operator
            setTimeout(function(){
            $("#edge6").css("color", "#443B3B");
            $("#node_q2").css("background", "#443B3B");
            $("#q2_o_ε").css("background", "#A59C9C");            
            }, time*16);
            setTimeout(function(){
            $("#edge6").css("color", "#8BCDAB");
            $("#node_q2").css("background", "#8BCDAB");
            $("#q2_o_ε").css("background", "#8BCDAB");            
            }, time*17);
    
            //Int 0-9
            setTimeout(function(){
            $("#edge3").css("color", "#443B3B");
            $("#node_q1").css("background", "#443B3B");
            $("#q1_int_ε").css("background", "#A59C9C");
            }, time*18);
            setTimeout(function(){
            $("#edge3").css("color", "#8BCDAB");
            $("#node_q1").css("background", "#8BCDAB");
            $("#q1_int_ε").css("background", "#8BCDAB");
            }, time*19);
    
            //Klammer ) zu
            setTimeout(function(){
            $("#edge4").css("color", "#443B3B");
            $("#node_q2").css("background", "#443B3B");
            $("#q2_klammer_zu").css("background", "#A59C9C");
            }, time*20);
            setTimeout(function(){
            $("#edge4").css("color", "#8BCDAB");
            $("#node_q2").css("background", "#8BCDAB");
            $("#q2_klammer_zu").css("background", "#8BCDAB");
            }, time*21)

            //Operator
            setTimeout(function(){
            $("#edge6").css("color", "#443B3B");
            $("#node_q2").css("background", "#443B3B");
            $("#q2_o_ε").css("background", "#A59C9C");            
            }, time*22);
            setTimeout(function(){
            $("#edge6").css("color", "#8BCDAB");
            $("#node_q2").css("background", "#8BCDAB");
            $("#q2_o_ε").css("background", "#8BCDAB");            
            }, time*23);

            //Int 0-9
            setTimeout(function(){
            $("#edge3").css("color", "#443B3B");
            $("#node_q1").css("background", "#443B3B");
            $("#q1_int_ε").css("background", "#A59C9C");
            }, time*24);
            setTimeout(function(){
            $("#edge3").css("color", "#8BCDAB");
            $("#node_q1").css("background", "#8BCDAB");
            $("#q1_int_ε").css("background", "#8BCDAB");
            }, time*25);

             //Operator
            setTimeout(function(){
            $("#edge6").css("color", "#443B3B");
            $("#node_q2").css("background", "#443B3B");
            $("#q2_o_ε").css("background", "#A59C9C");            
            }, time*26);
            setTimeout(function(){
            $("#edge6").css("color", "#8BCDAB");
            $("#node_q2").css("background", "#8BCDAB");
            $("#q2_o_ε").css("background", "#8BCDAB");            
            }, time*27);

            //Int 0-9
            setTimeout(function(){
            $("#edge3").css("color", "#443B3B");
            $("#node_q1").css("background", "#443B3B");
            $("#q1_int_ε").css("background", "#A59C9C");
            }, time*28);
            setTimeout(function(){
            $("#edge3").css("color", "#8BCDAB");
            $("#node_q1").css("background", "#8BCDAB");
            $("#q1_int_ε").css("background", "#8BCDAB");
            }, time*29);

            //Klammer ) zu
            setTimeout(function(){
            $("#edge4").css("color", "#443B3B");
            $("#node_q2").css("background", "#443B3B");
            $("#q2_klammer_zu").css("background", "#A59C9C");
            }, time*30);
            setTimeout(function(){
            $("#edge4").css("color", "#8BCDAB");
            $("#node_q2").css("background", "#8BCDAB");
            $("#q2_klammer_zu").css("background", "#8BCDAB");
            }, time*31)

            //Keller End
            setTimeout(function(){
            $("#edge5").css("color", "#8BCDAB");
            $("#node_q3").css("background", "#8BCDAB");
            $("#keller_end").css("background", "#8BCDAB");
            }, time*32)

            //Zurück zu den Originalfarben
            setTimeout(function(){
            $("#node_q0, #node_q1, #node_q2, #node_q3").css("background", "#443B3B");
            $("#edge1, #edge2, #edge3, #edge4, #edge5, #edge6").css("color", "#443B3B");
            $("tr").css("background", "#A59C9C");
               
            //Button "richtiger Ausdruck" enabled
            $('#play_richtig').prop('disabled', false);
            }, time*33);
        break


        case "(8)-3":
        case "(2)*9":

             //Button "richtiger Ausdruck" disabled
            $('#play_richtig').prop('disabled', true);
            
             setTimeout(function(){
             $("#edge1").css("color", "#8BCDAB");
             $("#node_q0").css("background", "#8BCDAB");
             $("#q0_ε_ε").css("background","#8BCDAB");
             }, time);
             //Klammer (
             setTimeout(function(){
             $("#edge2").css("color", "#8BCDAB");
             $("#node_q1").css("background", "#8BCDAB");
             $("#q1_klammer_ε").css("background", "#8BCDAB");
             }, time*2);

             //Int 0-9
             setTimeout(function(){
             $("#edge3").css("color", "#8BCDAB");
             $("#node_q1").css("background", "#8BCDAB");
             $("#q1_int_ε").css("background", "#8BCDAB");
             }, time*3);

            //Klammer ) zu
             setTimeout(function(){
             $("#edge4").css("color", "#8BCDAB");
             $("#node_q2").css("background", "#8BCDAB");
             $("#q2_klammer_zu").css("background", "#8BCDAB");
             }, time*4)

             //Operator
             setTimeout(function(){
             $("#edge6").css("color", "#443B3B");
             $("#node_q2").css("background", "#443B3B");
             $("#q2_o_ε").css("background", "#A59C9C");            
             }, time*5);
             setTimeout(function(){
             $("#edge6").css("color", "#8BCDAB");
             $("#node_q2").css("background", "#8BCDAB");
             $("#q2_o_ε").css("background", "#8BCDAB");            
             }, time*6);

            //Int 0-9
             setTimeout(function(){
             $("#edge3").css("color", "#443B3B");
             $("#node_q1").css("background", "#443B3B");
             $("#q1_int_ε").css("background", "#A59C9C");
             }, time*7);
             setTimeout(function(){
             $("#edge3").css("color", "#8BCDAB");
             $("#node_q1").css("background", "#8BCDAB");
             $("#q1_int_ε").css("background", "#8BCDAB");
             }, time*8);

             //Keller End
             setTimeout(function(){
             $("#edge5").css("color", "#8BCDAB");
             $("#node_q3").css("background", "#8BCDAB");
             $("#keller_end").css("background", "#8BCDAB");
             }, time*9)
    
             //Zurück zu den Originalfarben
             setTimeout(function(){
             $("#node_q0, #node_q1, #node_q2, #node_q3").css("background", "#443B3B");
             $("#edge1, #edge2, #edge3, #edge4, #edge5, #edge6").css("color", "#443B3B");
             $("tr").css("background", "#A59C9C");
                   
             //Button "richtiger Ausdruck" enabled
             $('#play_richtig').prop('disabled', false);
             }, time*10);
        break
    }
}
})

 //----------------------------------------- Alert -------------------------------------------------------//
 /**
 * Alert-Funktion, JS Framework "Sweet ALert"
 */

  function myAlert() {
    //Text in der HTML-Datei
    swal("Dokumentation für Projektaufgabe 3: Kellerautomat", document.getElementById("alert_text").innerText) 
}
    



