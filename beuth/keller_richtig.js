
$(function () { //jQuery Funktion

//----------------------------------------- Variablen ---------------------------------------------------//
//Zeit-Variable ist mit Slider einstellbar 
 var time = 1500;  
 //richtige Ausdrucke
 var keller_ausdrucke_richtig =  
 ["1", "2", "3", "4", "0", 
 "(5)", "(6)", "(7)", "(8)", "(9)", 
 "2*6", "8+7", "5-2", "9/3", 
 "(4/2)", "(8+0)", "(3*3)", "(8-7)", 
 "((((2)*1)+7)/3*9)", "((((6)*2)+5)/2*4)",
 "(8)-3", "(2)*9"];

 //--------------------------------------- Button Events--------------------------------------------------//
 //Button "richtiger Ausdruck" 
 $("#play_richtig").click(keller_richtig);
 //Slider-Funktion lässt die Geschwindigkeit einstellen
 $("#slider").on("change",function(){                                          
     time = $(this).val();
 });
 //Popover Funktion für HTML-Elemnte
 $('[data-toggle="popover"]').popover({
     placement : 'top',
     trigger : 'hover'
 });


 //--------------------------------------- Mouseenter/mouseleave Nodes-->Tabelle----------------------------//
 //Knoten
 $("#node_q0").on({ 
    //wenn Mauszeiger auf dem Element ist, dann...
    mouseenter: function(){
        //Knoten, Tabellenzeilen, Kanten: grün
        $(this).css("background", "#8BCDAB");
        $("#q0_ε_ε").css("background", "#8BCDAB");
        $("#edge1").css("color", "#8BCDAB");
    },
    //wenn Mauszeiger NICHT auf dem Element ist, dann...
    mouseleave: function(){
        //Knoten, Tabellenzeilen, Kanten: Originalfarben
        $(this).css("background", "#443B3B");
        $("#q0_ε_ε").css("background", "#A59C9C");
        $("#edge1").css("color", "#443B3B");
    }
})

//Knoten
$("#node_q1").on({
    //wenn Mauszeiger auf dem Element ist, dann...
    mouseenter: function(){
        //Knoten, Tabellenzeilen, Kanten: grün
        $(this).css("background", "#8BCDAB");
        $("#q1_klammer_ε, #q1_int_ε").css("background", "#8BCDAB");
        $("#edge2, #edge3").css("color", "#8BCDAB");
    },
     //wenn Mauszeiger NICHT auf dem Element ist, dann...
    mouseleave: function(){
        //Knoten, Tabellenzeilen, Kanten: Originalfarben
        $(this).css("background", "#443B3B");
        $("#q1_klammer_ε, #q1_int_ε").css("background", "#A59C9C");
        $("#edge2, #edge3").css("color", "#443B3B");
    }
})

//Knoten
$("#node_q2").on({ 
    mouseenter: function(){
        //Knoten, Tabellenzeilen, Kanten: grün
        $(this).css("background", "#8BCDAB");
        $("#q2_klammer_zu, #q2_o_ε").css("background", "#8BCDAB");
        $("#edge4, #edge6").css("color", "#8BCDAB");
    },
    mouseleave: function(){
        //Knoten, Tabellenzeilen, Kanten: Originalfarben
        $(this).css("background", "#443B3B");
        $("#q2_klammer_zu, #q2_o_ε").css("background", "#A59C9C");
        $("#edge4, #edge6").css("color", "#443B3B");
    }
})

//Knoten
$("#node_q3").on({
    mouseenter: function(){
        //Knoten, Tabellenzeilen, Kanten: grün
        $(this).css("background", "#8BCDAB");
        $("#keller_end").css("background", "#8BCDAB");
        $("#edge5").css("color", "#8BCDAB");
    },
    mouseleave: function(){
        //Knoten, Tabellenzeilen, Kanten: Originalfarben
        $(this).css("background", "#443B3B");
        $("#keller_end").css("background", "#A59C9C");
        $("#edge5").css("color", "#443B3B");
    }
})

//--------------------------------------- Mouseenter/mouseleave Tabelle-->Nodes----------------------------//

//Tabellenzeilen
$("#q0_ε_ε").on({
    mouseenter: function(){
        //Knoten, Tabellenzeilen, Kanten: grün
        $(this).css("background", "#8BCDAB");
        $("#node_q0").css("background", "#8BCDAB");
        $("#edge1").css("color", "#8BCDAB");
    },
    mouseleave: function(){
        //Knoten, Tabellenzeilen, Kanten: Originalfarben
        $(this).css("background", "#A59C9C");
        $("#node_q0").css("background", "#443B3B");
        $("#edge1").css("color", "#443B3B");
    }
})

//Tabellenzeilen
$("#q1_klammer_ε").on({ 
    mouseenter: function(){
        //Knoten, Tabellenzeilen, Kanten: grün
        $(this).css("background", "#8BCDAB");
        $("#node_q1").css("background", "#8BCDAB");
        $("#edge2").css("color", "#8BCDAB");
    },
    mouseleave: function(){
        //Knoten, Tabellenzeilen, Kanten: Originalfarben
        $(this).css("background", "#A59C9C");
        $("#node_q1").css("background", "#443B3B");
        $("#edge2").css("color", "#443B3B");
    }
})

//Tabellenzeilen
$("#q1_int_ε").on({ 
    mouseenter: function(){
        //Knoten, Tabellenzeilen, Kanten: grün
        $(this).css("background", "#8BCDAB");
        $("#node_q1").css("background", "#8BCDAB");
        $("#edge3").css("color", "#8BCDAB");
    },
    mouseleave: function(){
        //Knoten, Tabellenzeilen, Kanten: Originalfarben
        $(this).css("background", "#A59C9C");
        $("#node_q1").css("background", "#443B3B");
        $("#edge3").css("color", "#443B3B");
    }
})

//Tabellenzeilen
$("#q2_klammer_zu").on({ 
    mouseenter: function(){
        //Knoten, Tabellenzeilen, Kanten: grün
        $(this).css("background", "#8BCDAB");
        $("#node_q2").css("background", "#8BCDAB");
        $("#edge4").css("color", "#8BCDAB");
    },
    mouseleave: function(){
        //Knoten, Tabellenzeilen, Kanten: Originalfarben
        $(this).css("background", "#A59C9C");
        $("#node_q2").css("background", "#443B3B");
        $("#edge4").css("color", "#443B3B");
    }
})

//Tabellenzeilen
$("#q2_o_ε").on({ 
    mouseenter: function(){
        //Knoten, Tabellenzeilen, Kanten: grün
        $(this).css("background", "#8BCDAB");
        $("#node_q2").css("background", "#8BCDAB");
        $("#edge6").css("color", "#8BCDAB");
    },
    mouseleave: function(){
        //Knoten, Tabellenzeilen, Kanten: Originalfarben
        $(this).css("background", "#A59C9C");
        $("#node_q2").css("background", "#443B3B");
        $("#edge6").css("color", "#443B3B");
    }
})

//Tabellenzeilen
$("#keller_end").on({ 
    mouseenter: function(){
        //Knoten, Tabellenzeilen, Kanten: grün
        $(this).css("background", "#8BCDAB");
        $("#node_q3").css("background", "#8BCDAB");
        $("#edge5").css("color", "#8BCDAB");
    },
    mouseleave: function(){
        //Knoten, Tabellenzeilen, Kanten: Originalfarben
        $(this).css("background", "#A59C9C");
        $("#node_q3").css("background", "#443B3B");
        $("#edge5").css("color", "#443B3B");
    }
})


//----------------------------------------- Richtige Ausdrucke -------------------------------------------------------//
/**
* Funktion für Ausgabe von richtigen Ausdrucken für den Kellerautomat. 
* Richtige Ausdrucke werden zufällig ausgegeben und farbig animiert (Knoten,Kanten,Tabellenzeilen).
*/
function keller_richtig(){
    //zufällige falsche Ausdrucke werden aus dem Array mit richtigen Ausdrucken ausgegeben
    var keller_ausgabe_richtig = keller_ausdrucke_richtig[Math.floor(Math.random()*keller_ausdrucke_richtig.length)];
    //die Ausgabe wird im HTML-Element "ausdruck_text" gezeigt  
    document.getElementById("ausdruck_text").innerHTML = keller_ausgabe_richtig;
  
    switch (keller_ausgabe_richtig) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
            //Buttons disabled
            $('#play_richtig').prop('disabled', true);
            $('#play_falsch').prop('disabled', true);

            // Statustext: richtig
            $("#state_container").css('background', "#8BCDAB")
            document.getElementById("check_text").innerHTML = 
            "Ausdruck ist richtig und wird vom Kellerautomat akzeptiert!";
            //Start
            setTimeout(function(){
            $("#node_q0").css("background", "#8BCDAB");
            $("#edge1").css("color", "#8BCDAB");
            $("#q0_ε_ε").css("background","#8BCDAB");
            }, time);
            // Int 0-9
            setTimeout(function(){
            $("#node_q1").css("background", "#8BCDAB");
            $("#edge3").css("color", "#8BCDAB");
            $("#q1_int_ε").css("background", "#8BCDAB");
            }, time*2)
            //Keller End
            setTimeout(function(){
            $("#node_q2").css("background", "#8BCDAB");
            $("#edge5").css("color", "#8BCDAB");
            }, time*3)
            setTimeout(function(){
            $("#node_q3").css("background", "#8BCDAB");
            $("#keller_end").css("background", "#8BCDAB");
            }, time*4)

            //Zurück zu den Originalfarben
            setTimeout(function(){
            $("#node_q0, #node_q1, #node_q2, #node_q3").css("background", "#443B3B");
            $("#edge1, #edge3, #edge5").css("color", "#443B3B");
            $("tr").css("background", "#A59C9C");

            //Buttons enabled
            $('#play_richtig').prop('disabled', false);
            $('#play_falsch').prop('disabled', false);
            }, time*5);
        break 
          

        case "(5)": 
        case "(6)": 
        case "(7)":
        case "(8)": 
        case "(9)": 
            //Buttons disabled
            $('#play_richtig').prop('disabled', true);
            $('#play_falsch').prop('disabled', true);

            // Statustext: richtig
            $("#state_container").css('background', "#8BCDAB")
            document.getElementById("check_text").innerHTML = 
            "Ausdruck ist richtig und wird vom Kellerautomat akzeptiert!";
            
            //Start
            setTimeout(function(){
            $("#edge1").css("color", "#8BCDAB");
            $("#node_q0").css("background", "#8BCDAB");
            $("#q0_ε_ε").css("background","#8BCDAB");
            }, time);

            //Klammer ( auf
            setTimeout(function(){
            $("#edge2").css("color", "#8BCDAB");
            $("#node_q1").css("background", "#8BCDAB");
            $("#q1_klammer_ε").css("background", "#8BCDAB"); 
            }, time*2)

            //Int 0-9
            setTimeout(function(){
            $("#edge3").css("color", "#8BCDAB");
            $("#q1_int_ε").css("background", "#8BCDAB");
            }, time*3)

            //Klammer ) zu
            setTimeout(function(){
            $("#edge4").css("color", "#8BCDAB");
            $("#node_q2").css("background", "#8BCDAB");
            $("#q2_klammer_zu").css("background", "#8BCDAB");
            }, time*4)

            //Kellerend
            setTimeout(function(){
            $("#edge5").css("color", "#8BCDAB");
            $("#node_q3").css("background", "#8BCDAB");
            $("#keller_end").css("background", "#8BCDAB");
            }, time*5)

            //Zurück zu den Originalfarben
            setTimeout(function(){
            $("#node_q0, #node_q1, #node_q2, #node_q3").css("background", "#443B3B");
            $("#edge1, #edge2, #edge3, #edge4, #edge5").css("color", "#443B3B");
            $("tr").css("background", "#A59C9C");
    
            //Buttons enabled
            $('#play_richtig').prop('disabled', false);
            $('#play_falsch').prop('disabled', false);
            }, time*6)
       
        break 


        case "2*6":
        case "8+7": 
        case "5-2":
        case "9/3": 
            //Buttons disabled
            $('#play_richtig').prop('disabled', true);
            $('#play_falsch').prop('disabled', true);

            // Statustext: richtig
            $("#state_container").css('background', "#8BCDAB")
            document.getElementById("check_text").innerHTML = 
            "Ausdruck ist richtig und wird vom Kellerautomat akzeptiert!";

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
            }, time*2)
            //Int 0-9 zu Originalfarben
            setTimeout(function(){
            $("#edge3").css("color", "#443B3B");
            $("#node_q1").css("background", "#443B3B");
            $("#q1_int_ε").css("background", "#A59C9C");
            }, time*3)

            //Operatoren
            setTimeout(function(){
            $("#edge6").css("color", "#8BCDAB");
            $("#node_q2").css("background", "#8BCDAB");
            $("#q2_o_ε").css("background", "#8BCDAB");
            }, time*3)

            //Int 0-9 wieder grün
            setTimeout(function(){
            $("#edge3").css("color", "#8BCDAB");
            $("#node_q1").css("background", "#8BCDAB");
            $("#q1_int_ε").css("background", "#8BCDAB");
            }, time*4)

            //Kellerend
            setTimeout(function(){
            $("#edge5").css("color", "#8BCDAB");
            $("#node_q3").css("background", "#8BCDAB");
            $("#keller_end").css("background", "#8BCDAB");
            }, time*5)
            
            //Zurück zu den Originalfarben    
            setTimeout(function(){
            $("#node_q0, #node_q1, #node_q2, #node_q3").css("background", "#443B3B");
            $("#edge1, #edge2, #edge3, #edge4, #edge5, #edge6").css("color", "#443B3B");
            $("tr").css("background", "#A59C9C");
    
            //Buttons enabled
            $('#play_richtig').prop('disabled', false);
            $('#play_falsch').prop('disabled', false);
            }, time*6);
        break


        case "(4/2)":
        case "(8+0)":
        case "(3*3)":
        case "(8-7)":
            //Buttons disabled
            $('#play_richtig').prop('disabled', true);
            $('#play_falsch').prop('disabled', true);

            // Statustext: richtig
            $("#state_container").css('background', "#8BCDAB")
            document.getElementById("check_text").innerHTML = 
            "Ausdruck ist richtig und wird vom Kellerautomat akzeptiert!";
           
            //Start
            setTimeout(function(){
            $("#edge1").css("color", "#8BCDAB");
            $("#node_q0").css("background", "#8BCDAB");
            $("#q0_ε_ε").css("background","#8BCDAB");
            }, time);

            //Klammer ( auf
            setTimeout(function(){
            $("#edge2").css("color", "#8BCDAB");
            $("#node_q1").css("background", "#8BCDAB");
            $("#q1_klammer_ε").css("background", "#8BCDAB"); 
            }, time*2)

            //Int 0-9
            setTimeout(function(){
            $("#edge3").css("color", "#8BCDAB");
            $("#node_q1").css("background", "#8BCDAB");
            $("#q1_int_ε").css("background", "#8BCDAB");
            }, time*3)

            //Int 0-9 zu Originalfarben
            setTimeout(function(){
            $("#edge3").css("color", "#443B3B");
            $("#node_q1").css("background", "#443B3B");
            $("#q1_int_ε").css("background", "#A59C9C");
            }, time*4)

            //Operatoren
            setTimeout(function(){
            $("#edge6").css("color", "#8BCDAB");
            $("#node_q2").css("background", "#8BCDAB");
            $("#q2_o_ε").css("background", "#8BCDAB");
            }, time*5)

            //Int 0-9 wieder grün
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
           
            //Buttons enabled
            $('#play_richtig').prop('disabled', false);
            $('#play_falsch').prop('disabled', false);
            }, time*9);
        break


        case"((((2)*1)+7)/3*9)": 
        case "((((6)*2)+5)/2*4)":
            //Buttons disabled
            $('#play_richtig').prop('disabled', true);
            $('#play_falsch').prop('disabled', true);

            // Statustext: richtig
            $("#state_container").css('background', "#8BCDAB")
            document.getElementById("check_text").innerHTML = 
            "Ausdruck ist richtig und wird vom Kellerautomat akzeptiert!";
            
            setTimeout(function(){
            $("#edge1").css("color", "#8BCDAB");
            $("#node_q0").css("background", "#8BCDAB");
            $("#q0_ε_ε").css("background","#8BCDAB");
            }, time);
            //Klammer (1 auf
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
            //Klammer (2 auf
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
            //Klammer (3 auf
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
            //Klammer (4 auf
            setTimeout(function(){
            $("#edge2").css("color", "#8BCDAB");
            $("#node_q1").css("background", "#8BCDAB");
            $("#q1_klammer_ε").css("background", "#8BCDAB");
            }, time*7);
            //Int 0-9 
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
               
            //Buttons enabled
            $('#play_richtig').prop('disabled', false);
            $('#play_falsch').prop('disabled', false);
            }, time*33);
        break


        case "(8)-3":
        case "(2)*9":
            //Buttons disabled
            $('#play_richtig').prop('disabled', true);
            $('#play_falsch').prop('disabled', true);

            // Statustext: richtig
            $("#state_container").css('background', "#8BCDAB")
            document.getElementById("check_text").innerHTML = 
            "Ausdruck ist richtig und wird vom Kellerautomat akzeptiert!";
            
            //Start
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
                   
             //Buttons enabled
             $('#play_richtig').prop('disabled', false);
             $('#play_falsch').prop('disabled', false);
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
    //Text im HTML-Element #alert_text
    swal("Dokumentation für Projektaufgabe 3: Kellerautomat", document.getElementById("alert_text").innerText) 
}


//--------------------------------------- Intro.js: Tour starten ------------------------------------------//
 
 /**
  * Schrittweise Darstellung der Funktionen/des Interfaces mit Framework Intro.js
  */
 async function tour(){
    introJs().setOptions({ 
        steps: [
            //Hauptintro
            {intro: "Welcome!👋 Diese Seite widmet sich dem Thema von Kellerautomaten (push-down automata)."},
            
            {element: document.querySelector(".keller_feld"),
             intro: "Kellerautomat: Graph und Vokabular. Dieser Kellerautomat kann einfache arithmetische Ausdrücke mit Zahlen {0-9},Operatoren {+;-;*;/} und beliebig vielen Klammern {(,)} akzeptieren. Führen Sie den Zeiger auf die Knoten, um zu sehen, mit welchen Schritten aus der Tabelle sie verbunden sind."
            },

            //Intro Kellertabelle
            {element: document.querySelector("#keller_tabelle"),
             intro: "Tabelle: Überführungsfunktion und einzelne Schritte. Führen Sie den Zeiger auf die Zeilen, um zu sehen, mit welchen Knoten sie verbunden sind."
            },
            
            //Intro Button "richtiger Ausdruck"
            {element: document.querySelector("#play_richtig"),
             intro: "Generiert einen richtigen arithmetischen Ausdruck."
            }, 

            //Intro Button "falscher Ausdruck"
            {element: document.querySelector("#play_falsch"),
             intro: "Generiert einen falschen arithmetischen Ausdruck"
            }, 

            //Intro Slider"
            {element: document.querySelector(".slider_box"),
             intro: "Reguliert die Geschwindigkeit der Animation."
            }, 

            //Intro Output Ausdruckfeld
            {element: document.querySelector("#ausdruck_container"),
             intro: "Hier wird einen richtigen/falschen arithmetischen Ausdruck gezeigt."
            }, 

             //Intro Output Statustext
            {element: document.querySelector("#state_container"),
             intro: "Der Statustext zeigt, ob der Ausdruck vom Kellerautomaten akzeptiert wird."
            }, 

             //Intro Button Techstack
            {element: document.querySelector("#tech"),
             intro: "Dokumentation zu dieser Anwendung."
            }, 
        ],
    }).start();
}




