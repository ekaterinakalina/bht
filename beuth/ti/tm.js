
$(function () {  //jQuery Funktion


 //------------------------------------_--- Button Events--------------------------------------------------//
 //Button "richtiger Ausdruck" 
 $("#play_richtig").click(tm_richtig);
 $("#play_falsch").click(tm_falsch);
 $("#reset").click(reset);
 $("#tour").click(tour)


 /*Popover Funktion für HTML-Elemnte*/
 $('[data-toggle="popover"]').popover({
     placement : 'top',
     trigger : 'hover'
 });

/*Buttons disabled*/
 function disablebuttons(){
       $('#play_richtig').prop('disabled', true);
       $('#play_falsch').prop('disabled', true);
       $('#dokumentation').prop('disabled', true);
       $("#tour").prop('disabled', true);
 }

/*Buttons enabled*/
 function enablebuttons(){
    $('#play_richtig').prop('disabled', false);
    $('#play_falsch').prop('disabled', false);
    $('#dokumentation').prop('disabled', false);
    $("#tour").prop('disabled', false);
    $('h2').show();
}

/*Reset*/
function reset(){
        $(".node").css("background", "#443B3B");
        $("tr").css("background", "#A59C9C");
        $(".edge").css("color", "#443B3B");
        $(".status").css('background', '#A59C9C', "filter", 'opacity(0.7)');
        $("#status_text").html("Click auf <i>richtiger/falscher Ausdruck,</i><br>um Simulation zu starten!");
        $("#status_word").html("");
        enablebuttons()
        clearTimeout (tm_ausgabe_richtig);
    }


 // Slider
 $('#ex1').slider({
	formatter: function(time) {
		return 'Current value: ' + time;
	}
});



/*----------------------------------------- Variablen ---------------------------------------------------*/
 //Zeit-Variable ist mit Slider einstellbar 
 var time = 800;  
 //richtige Ausdrucke
 var tm_ausdrucke_richtig =  
 ["BTBPSXSETE", "BPBTVPSEPE", "BTBTTVVETE", "BPBPSSXXTTVVEPE", "BTBPXSETE"];
 var tm_ausdrucke_falsch =  
 ["BTBPSXSEPE", "BPBVXSEPE", "BPBTVPSETE", "BPBTTTTXVEPE"];
/*----------------------------------------- Richtige Ausdrucke ------------------------------------------*/
/**
* Funktion für Ausgabe von richtigen Ausdrucken für den Kellerautomat. 
* Richtige Ausdrucke werden zufällig ausgegeben und farbig animiert (Knoten,Kanten,Tabellenzeilen).
*/
function tm_richtig(){
    //zufällige falsche Ausdrucke werden aus dem Array mit richtigen Ausdrucken ausgegeben
    var tm_ausgabe_richtig = tm_ausdrucke_richtig[Math.floor(Math.random()*tm_ausdrucke_richtig.length)];
    //die Ausgabe wird im HTML-Element gezeigt  
    document.getElementById("status_word").innerHTML = tm_ausgabe_richtig;
  
    switch (tm_ausgabe_richtig) {
        case "BTBPSXSETE":
            richtig_text()
         
             setTimeout(function(){
                disablebuttons();   //disabled Buttons inside setTimeout
                q0_B()
                }, time);
            setTimeout(function(){
                q1_T()
                }, time*2);
            setTimeout(function(){
                q3_B()
                }, time*3);
            setTimeout(function(){
                state1_P()
                }, time*4);
            setTimeout(function(){
                state2_S()
                }, time*5);
            setTimeout(function(){
                state2_X()
                }, time*6);
            setTimeout(function(){
                state4_S()
                }, time*7);
            setTimeout(function(){
                state6_E()
                }, time*8);
            setTimeout(function(){
                q4_T()
                }, time*9);
            setTimeout(function(){
                q6_E()
                }, time*10);
            setTimeout(function(){
                q8_T()
                }, time*11);
            setTimeout(function(){
                q9_out()
                }, time*12);
            setTimeout(function(){
                q9_in()
                enablebuttons();   //enabled Buttons inside setTimeout
                originalcolors();  //zurück zu den originalen Einstellungen
                }, time*15);
        break


        case "BPBTVPSEPE":
            richtig_text()
         
            setTimeout(function(){
                disablebuttons();   
                q0_B()
                }, time);
            setTimeout(function(){
                q1_P()
                }, time*2);
            setTimeout(function(){
                q2_B()
                }, time*3);
            setTimeout(function(){
                state1_T()
                }, time*4);
            setTimeout(function(){
                state3_V()
                }, time*5);
            setTimeout(function(){
                state5_P()
                }, time*6);
            setTimeout(function(){
                state4_S()
                }, time*7);
            setTimeout(function(){
                state6_E()
                }, time*8);
            setTimeout(function(){
                q4_P()
                }, time*9);
            setTimeout(function(){
                q5_E()
                }, time*10);
            setTimeout(function(){
                q7_P()
                }, time*11);
            setTimeout(function(){
                q9_out()
                }, time*12);
            setTimeout(function(){
                q9_in()
                enablebuttons();  
                originalcolors();  
                }, time*15);
        break

        case "BTBTTVVETE":
            richtig_text()

            setTimeout(function(){
                disablebuttons();   
                q0_B()
                }, time);
            setTimeout(function(){
                q1_T()
                }, time*2);
            setTimeout(function(){
                q3_B()
                }, time*3);
            setTimeout(function(){
                state1_T()
                }, time*4);
            setTimeout(function(){
                state3_T()
                }, time*5);
            setTimeout(function(){
                state3_V()
                }, time*6);
            setTimeout(function(){
                state5_V()
                }, time*7);
            setTimeout(function(){
                state6_E()
                }, time*8);
            setTimeout(function(){
                q4_T()
                }, time*9);
            setTimeout(function(){
                q6_E()
                }, time*10);
            setTimeout(function(){
                q8_T()
                }, time*11);
            setTimeout(function(){
                q9_out()
                }, time*12);
            setTimeout(function(){
                q9_in()
                enablebuttons();  
                originalcolors();  
                }, time*15);
        break

        case "BPBPSSXXTTVVEPE":
            richtig_text()

            setTimeout(function(){
                disablebuttons();   
                q0_B()
                }, time);
            setTimeout(function(){
                q1_P()
                }, time*2);
            setTimeout(function(){
                q2_B()
                }, time*3);
            setTimeout(function(){
                state1_P()
                }, time*4);
            setTimeout(function(){
                state2_S()
                }, time*5);
            setTimeout(function(){
                state2_S()
                }, time*6);
            setTimeout(function(){
                state2_X()
                }, time*7);
            setTimeout(function(){
                state4_X()
                }, time*8);
            setTimeout(function(){
                state3_T()
                }, time*9);
            setTimeout(function(){
                state3_T()
                }, time*10);
            setTimeout(function(){
                state3_V()
                }, time*11);
            setTimeout(function(){
                state5_V()
                }, time*12);
            setTimeout(function(){
                state6_E()
                }, time*13);
            setTimeout(function(){
                q4_P()
                }, time*14);
            setTimeout(function(){
                q5_E()
                }, time*15);
            setTimeout(function(){
                q7_P()
                }, time*16);
            setTimeout(function(){
                q9_out()
                }, time*17);
            setTimeout(function(){
                q9_in()
                enablebuttons();  
                originalcolors();  
                }, time*20);
        break

        case "BTBPXSETE":
            richtig_text()

            setTimeout(function(){
                disablebuttons();   
                q0_B()
                }, time);
            setTimeout(function(){
                q1_T()
                }, time*2);
            setTimeout(function(){
                q3_B()
                }, time*3);
            setTimeout(function(){
                state1_P()
                }, time*4);
            setTimeout(function(){
                state2_X()
                }, time*5);
            setTimeout(function(){
              //  state4_S()
                }, time*6);
            setTimeout(function(){
                state6_E()
                }, time*7);
            setTimeout(function(){
                q4_T()
                }, time*8);
            setTimeout(function(){
                q6_E()
                }, time*9);
            setTimeout(function(){
                q8_T()
                }, time*10);
            setTimeout(function(){
                q9_out()
                }, time*11);
            setTimeout(function(){
                q9_in()
                enablebuttons();  
                originalcolors();  
                }, time*14);
        break
    }

}


/*----------------------------------------- Falsche Ausdrucke ------------------------------------------*/
/**
* Funktion für Ausgabe von FALSCHEN Ausdrucken für den Kellerautomat. 
* FALSCHE Ausdrucke werden zufällig ausgegeben und farbig animiert (Knoten,Kanten,Tabellenzeilen).
*/
function tm_falsch(){
    //zufällige falsche Ausdrucke werden aus dem Array mit richtigen Ausdrucken ausgegeben
    var tm_ausgabe_falsch = tm_ausdrucke_falsch[Math.floor(Math.random()*tm_ausdrucke_falsch.length)];
    //die Ausgabe wird im HTML-Element gezeigt  
    document.getElementById("status_word").innerHTML = tm_ausgabe_falsch;
  
    switch (tm_ausgabe_falsch) {
        case "BTBPSXSEPE":
    
             setTimeout(function(){
                disablebuttons();   //disabled Buttons inside setTimeout
                q0_B()
                }, time);
            setTimeout(function(){
                q1_T()
                }, time*2);
            setTimeout(function(){
                q3_B()
                }, time*3);
            setTimeout(function(){
                state1_P()
                }, time*4);
            setTimeout(function(){
                state2_S()
                }, time*5);
            setTimeout(function(){
                state2_X()
                }, time*6);
            setTimeout(function(){
                state4_S()
                }, time*7);
            setTimeout(function(){
                state6_E()
                }, time*8);
            setTimeout(function(){
                $("#node_q4").css("background", "#F58A8A");
                $("#edge17").css("color", "#F58A8A");
                $("#line17").css("background", "#F58A8A");
                rejectstate();
                }, time*9);
            setTimeout(function(){
                enablebuttons();   
                originalcolors();  
                }, time*12);
        break
    }
}


/*Richtiger Ausdruck Text*/
function richtig_text(){
    //Statustext: richtig
    $("h2").hide();
    $(".status").css('background', "#8BCDAB");
    document.getElementById("status_text").innerHTML = 
    "Ausdruck ist richtig und wird von<br>Turing Machine akzeptiert!<br>Simulation läuft.";
}

function rejectstate(){
    $("h2").hide();
    $(".status").css('background', "#F58A8A");
    $(".status").css('background', '#A59C9C', "filter", 'opacity(0.7)');
    $(".status").css('background', "#F58A8A");
    $(".status").css('background', '#A59C9C', "filter", 'opacity(0.7)');
    $(".status").css('background', "#F58A8A");
    document.getElementById("status_text").innerHTML = 
    "Qreject wurde erreicht.<br> Das Wort wird  von Turing Machine nicht akzeptiert.";
}

/*Elemente zurück zu den originalen Farben*/
function originalcolors(){
    $(".node").css("background", "#443B3B");
    $("tr").css("background", "#A59C9C");
    $(".edge").css("color", "#443B3B");
    $(".status").css('background', '#A59C9C', "filter", 'opacity(0.7)');
    $("#status_text").html("Click auf <i>richtiger/falscher Ausdruck,</i><br>um Simulation zu starten!");
    $("#status_word").html("");
}



/*---------------------------------------------------- Animation:Übergänge ----------------------------------------------------*/
function q0_B(){
$("#node_q0").css("background", "#8BCDAB");
$("#edge1").css("color", "#8BCDAB");
$("#line1").css("background","#8BCDAB");
}
function q1_P(){
$("#node_q1").css("background", "#8BCDAB");
$("#edge2").css("color", "#8BCDAB");
$("#line2").css("background","#8BCDAB");
}
function q1_T(){
    $("#node_q1").css("background", "#8BCDAB");
    $("#edge3").css("color", "#8BCDAB");
    $("#line3").css("background","#8BCDAB");
}
function q2_B(){
    $("#node_q2").css("background", "#8BCDAB");
    $("#edge4").css("color", "#8BCDAB");
    $("#line4").css("background","#8BCDAB");
}
function q3_B(){
    $("#node_q3").css("background", "#8BCDAB");
    $("#edge5").css("color", "#8BCDAB");
    $("#line5").css("background","#8BCDAB");
}
function state1_P(){
$("#node_1").css("background", "#8BCDAB");
$("#edge6").css("color", "#8BCDAB");
$("#line6").css("background","#8BCDAB");
}
function state1_T(){
    $("#node_1").css("background", "#8BCDAB");
    $("#edge7").css("color", "#8BCDAB");
    $("#line7").css("background","#8BCDAB");
}
function state2_S(){
    $("#node_2").css("background", "#8BCDAB");
    $("#edge8").css("color", "#8BCDAB");
    $("#line8").css("background","#8BCDAB");
}
function state2_X(){
    $("#node_3").css("background", "#8BCDAB");
    $("#edge10").css("color", "#8BCDAB");
    $("#line9").css("background","#8BCDAB");
}
function state3_T(){
    $("#node_4").css("background", "#8BCDAB");
    $("#edge9").css("color", "#8BCDAB");
    $("#line10").css("background","#8BCDAB");
}
function state3_V(){
    $("#node_4").css("background", "#8BCDAB");
    $("#edge11").css("color", "#8BCDAB");
    $("#line11").css("background","#8BCDAB");
}
function state4_X(){
    $("#node_3").css("background", "#8BCDAB");
    $("#edge12").css("color", "#8BCDAB");
    $("#line12").css("background","#8BCDAB");
}
function state4_S(){
    $("#node_3").css("background", "#8BCDAB");
    $("#edge14").css("color", "#8BCDAB");
    $("#line13").css("background","#8BCDAB");
}
function state5_P(){
    $("#node_5").css("background", "#8BCDAB");
    $("#edge13").css("color", "#8BCDAB");
    $("#line14").css("background","#8BCDAB");
}
function state5_V(){
    $("#node_5").css("background", "#8BCDAB");
    $("#edge15").css("color", "#8BCDAB");
    $("#line15").css("background","#8BCDAB");
}
function state6_E(){
    $("#node_6").css("background", "#8BCDAB");
    $("#edge16").css("color", "#8BCDAB");
    $("#line16").css("background","#8BCDAB");
}
function q4_P(){
    $("#node_q4").css("background", "#8BCDAB");
    $("#edge17").css("color", "#8BCDAB");
    $("#line17").css("background","#8BCDAB");
}
function q4_T(){
    $("#node_q4").css("background", "#8BCDAB");
    $("#edge18").css("color", "#8BCDAB");
    $("#line18").css("background","#8BCDAB");
}
function q5_E(){
    $("#node_q5").css("background", "#8BCDAB");
    $("#edge19").css("color", "#8BCDAB");
    $("#line19").css("background","#8BCDAB");
}
function q6_E(){
    $("#node_q6").css("background", "#8BCDAB");
    $("#edge20").css("color", "#8BCDAB");
    $("#line20").css("background","#8BCDAB");
}
function q7_L(){
    $("#node_q7").css("background", "#8BCDAB");
    $("#edge21").css("color", "#8BCDAB");
    $("#line21").css("background","#8BCDAB");
}
function q7_P(){
    $("#node_q7").css("background", "#8BCDAB");
    $("#edge23").css("color", "#8BCDAB");
    $("#line22").css("background","#8BCDAB");
}
function q8_L(){
    $("#node_q8").css("background", "#8BCDAB");
    $("#edge22").css("color", "#8BCDAB");
    $("#line23").css("background","#8BCDAB");
}
function q8_T(){
    $("#node_q8").css("background", "#8BCDAB");
    $("#edge24").css("color", "#8BCDAB");
    $("#line24").css("background","#8BCDAB");
}
function q9_out(){
    $("#node_q9").css("background", "#8BCDAB").animate({width: "103px"},"slow");
}
function q9_in(){
    $("#node_q9").css("background", "#8BCDAB").animate({width: "63px"},"slow");
}


 /*--------------------------------------- Mouseenter/mouseleave Tabellenzeilen --> Knoten + Kanten----------------------------*/
 //Tabelle
 $("#line1").on({ 
    //wenn Mauszeiger auf dem Element ist, dann...
    mouseenter: function(){
        //Knoten, Tabellenzeilen, Kanten: grün
        $(this).css("background", "#8BCDAB");
        $("#node_q0").css("background", "#8BCDAB");
        $("#edge1").css("color", "#8BCDAB");
    },
    //wenn Mauszeiger NICHT auf dem Element ist, dann...
    mouseleave: function(){
        //Knoten, Tabellenzeilen, Kanten: Originalfarben
        $(this).css("background", "#A59C9C");
        $("#node_q0").css("background", "#443B3B");
        $("#edge1").css("color", "#443B3B");
    }
}); 
 //Tabelle
 $("#line2, #line3").on({ 
    //wenn Mauszeiger auf dem Element ist, dann...
    mouseenter: function(){
        //Knoten, Tabellenzeilen, Kanten: grün
        $("#line2, #line3").css("background", "#8BCDAB");
        $("#node_q1").css("background", "#8BCDAB");
        $("#edge2, #edge3").css("color", "#8BCDAB");
    },
    //wenn Mauszeiger NICHT auf dem Element ist, dann...
    mouseleave: function(){
        //Knoten, Tabellenzeilen, Kanten: Originalfarben
        $("#line2, #line3").css("background", "#A59C9C");
        $("#node_q1").css("background", "#443B3B");
        $("#edge2, #edge3").css("color", "#443B3B");
    }
}); 

//Tabelle
$("#line4").on({ 
    //wenn Mauszeiger auf dem Element ist, dann...
    mouseenter: function(){
        //Knoten, Tabellenzeilen, Kanten: grün
        $(this).css("background", "#8BCDAB");
        $("#node_q2").css("background", "#8BCDAB");
        $("#edge4").css("color", "#8BCDAB");
    },
    //wenn Mauszeiger NICHT auf dem Element ist, dann...
    mouseleave: function(){
        //Knoten, Tabellenzeilen, Kanten: Originalfarben
        $(this).css("background", "#A59C9C");
        $("#node_q2").css("background", "#443B3B");
        $("#edge4").css("color", "#443B3B");
    }
}); 
//Tabelle
$("#line5").on({ 
    //wenn Mauszeiger auf dem Element ist, dann...
    mouseenter: function(){
        //Knoten, Tabellenzeilen, Kanten: grün
        $(this).css("background", "#8BCDAB");
        $("#node_q3").css("background", "#8BCDAB");
        $("#edge5").css("color", "#8BCDAB");
    },
    //wenn Mauszeiger NICHT auf dem Element ist, dann...
    mouseleave: function(){
        //Knoten, Tabellenzeilen, Kanten: Originalfarben
        $(this).css("background", "#A59C9C");
        $("#node_q3").css("background", "#443B3B");
        $("#edge5").css("color", "#443B3B");
    }
});
//Tabelle
$("#line6, #line7").on({ 
    //wenn Mauszeiger auf dem Element ist, dann...
    mouseenter: function(){
        //Knoten, Tabellenzeilen, Kanten: grün
        $("#line6, #line7").css("background", "#8BCDAB");
        $("#node_1").css("background", "#8BCDAB");
        $("#edge6, #edge7").css("color", "#8BCDAB");
    },
    //wenn Mauszeiger NICHT auf dem Element ist, dann...
    mouseleave: function(){
        //Knoten, Tabellenzeilen, Kanten: Originalfarben
        $("#line6, #line7").css("background", "#A59C9C");
        $("#node_1").css("background", "#443B3B");
        $("#edge6, #edge7").css("color", "#443B3B");
    }
}); 

//Tabelle
$("#line8, #line9").on({ 
    //wenn Mauszeiger auf dem Element ist, dann...
    mouseenter: function(){
        //Knoten, Tabellenzeilen, Kanten: grün
        $("#line8, #line9").css("background", "#8BCDAB");
        $("#node_2").css("background", "#8BCDAB");
        $("#edge8, #edge10").css("color", "#8BCDAB");
    },
    //wenn Mauszeiger NICHT auf dem Element ist, dann...
    mouseleave: function(){
        //Knoten, Tabellenzeilen, Kanten: Originalfarben
        $("#line8, #line9").css("background", "#A59C9C");
        $("#node_2").css("background", "#443B3B");
        $("#edge8, #edge10").css("color", "#443B3B");
    }
}); 

$("#line10, #line11").on({ 
    //wenn Mauszeiger auf dem Element ist, dann...
    mouseenter: function(){
        //Knoten, Tabellenzeilen, Kanten: grün
        $("#line10, #line11").css("background", "#8BCDAB");
        $("#node_4").css("background", "#8BCDAB");
        $("#edge9, #edge11").css("color", "#8BCDAB");
    },
    //wenn Mauszeiger NICHT auf dem Element ist, dann...
    mouseleave: function(){
        //Knoten, Tabellenzeilen, Kanten: Originalfarben
        $("#line10, #line11").css("background", "#A59C9C");
        $("#node_4").css("background", "#443B3B");
        $("#edge9, #edge11").css("color", "#443B3B");
    }
}); 

$("#line12, #line13").on({ 
    //wenn Mauszeiger auf dem Element ist, dann...
    mouseenter: function(){
        //Knoten, Tabellenzeilen, Kanten: grün
        $("#line12, #line13").css("background", "#8BCDAB");
        $("#node_3").css("background", "#8BCDAB");
        $("#edge12, #edge14").css("color", "#8BCDAB");
    },
    //wenn Mauszeiger NICHT auf dem Element ist, dann...
    mouseleave: function(){
        //Knoten, Tabellenzeilen, Kanten: Originalfarben
        $("#line12, #line13").css("background", "#A59C9C");
        $("#node_3").css("background", "#443B3B");
        $("#edge12, #edge14").css("color", "#443B3B");
    }
}); 

$("#line14, #line15").on({ 
    //wenn Mauszeiger auf dem Element ist, dann...
    mouseenter: function(){
        //Knoten, Tabellenzeilen, Kanten: grün
        $("#line14, #line15").css("background", "#8BCDAB");
        $("#node_5").css("background", "#8BCDAB");
        $("#edge13, #edge15").css("color", "#8BCDAB");
    },
    //wenn Mauszeiger NICHT auf dem Element ist, dann...
    mouseleave: function(){
        //Knoten, Tabellenzeilen, Kanten: Originalfarben
        $("#line14, #line15").css("background", "#A59C9C");
        $("#node_5").css("background", "#443B3B");
        $("#edge13, #edge15").css("color", "#443B3B");
    }
}); 

$("#line16").on({ 
    //wenn Mauszeiger auf dem Element ist, dann...
    mouseenter: function(){
        //Knoten, Tabellenzeilen, Kanten: grün
        $(this).css("background", "#8BCDAB");
        $("#node_6").css("background", "#8BCDAB");
        $("#edge16").css("color", "#8BCDAB");
    },
    //wenn Mauszeiger NICHT auf dem Element ist, dann...
    mouseleave: function(){
        //Knoten, Tabellenzeilen, Kanten: Originalfarben
        $(this).css("background", "#A59C9C");
        $("#node_6").css("background", "#443B3B");
        $("#edge16").css("color", "#443B3B");
    }
}); 
$("#line17, #line18").on({ 
    //wenn Mauszeiger auf dem Element ist, dann...
    mouseenter: function(){
        //Knoten, Tabellenzeilen, Kanten: grün
        $("#line17, #line18").css("background", "#8BCDAB");
        $("#node_q4").css("background", "#8BCDAB");
        $("#edge17, #edge18").css("color", "#8BCDAB");
    },
    //wenn Mauszeiger NICHT auf dem Element ist, dann...
    mouseleave: function(){
        //Knoten, Tabellenzeilen, Kanten: Originalfarben
        $("#line17, #line18").css("background", "#A59C9C");
        $("#node_q4").css("background", "#443B3B");
        $("#edge17, #edge18").css("color", "#443B3B");
    }
}); 
$("#line19").on({ 
    //wenn Mauszeiger auf dem Element ist, dann...
    mouseenter: function(){
        //Knoten, Tabellenzeilen, Kanten: grün
        $(this).css("background", "#8BCDAB");
        $("#node_q5").css("background", "#8BCDAB");
        $("#edge19").css("color", "#8BCDAB");
    },
    //wenn Mauszeiger NICHT auf dem Element ist, dann...
    mouseleave: function(){
        //Knoten, Tabellenzeilen, Kanten: Originalfarben
        $(this).css("background", "#A59C9C");
        $("#node_q5").css("background", "#443B3B");
        $("#edge19").css("color", "#443B3B");
    }
}); 
$("#line20").on({ 
    //wenn Mauszeiger auf dem Element ist, dann...
    mouseenter: function(){
        //Knoten, Tabellenzeilen, Kanten: grün
        $(this).css("background", "#8BCDAB");
        $("#node_q6").css("background", "#8BCDAB");
        $("#edge20").css("color", "#8BCDAB");
    },
    //wenn Mauszeiger NICHT auf dem Element ist, dann...
    mouseleave: function(){
        //Knoten, Tabellenzeilen, Kanten: Originalfarben
        $(this).css("background", "#A59C9C");
        $("#node_q6").css("background", "#443B3B");
        $("#edge20").css("color", "#443B3B");
    }
}); 
$("#line21, #line22").on({ 
    //wenn Mauszeiger auf dem Element ist, dann...
    mouseenter: function(){
        //Knoten, Tabellenzeilen, Kanten: grün
        $("#line21, #line22").css("background", "#8BCDAB");
        $("#node_q7, #node_q9").css("background", "#8BCDAB");
        $("#edge21, #edge23").css("color", "#8BCDAB");
    },
    //wenn Mauszeiger NICHT auf dem Element ist, dann...
    mouseleave: function(){
        //Knoten, Tabellenzeilen, Kanten: Originalfarben
        $("#line21, #line22").css("background", "#A59C9C");
        $("#node_q7, #node_q9").css("background", "#443B3B");
        $("#edge21, #edge23").css("color", "#443B3B");
    }
}); 
$("#line23, #line24").on({ 
    //wenn Mauszeiger auf dem Element ist, dann...
    mouseenter: function(){
        //Knoten, Tabellenzeilen, Kanten: grün
        $("#line23, #line24").css("background", "#8BCDAB");
        $("#node_q8, #node_q9").css("background", "#8BCDAB");
        $("#edge22, #edge24").css("color", "#8BCDAB");
    },
    //wenn Mauszeiger NICHT auf dem Element ist, dann...
    mouseleave: function(){
        //Knoten, Tabellenzeilen, Kanten: Originalfarben
        $("#line23, #line24").css("background", "#A59C9C");
        $("#node_q8, #node_q9").css("background", "#443B3B");
        $("#edge22, #edge24").css("color", "#443B3B");
    }
}); 


async function tour(){
    introJs().setOptions({ 
        steps: [
            //Hauptintro
            {intro: "Welcome to Turing Machine!"},
            
            {element: document.querySelector("graph_container"),
             intro: "Turing Machine: Graph und Vokabular. Diese TM kann Wörter mit Buchstaben B, T, P, S, V, X, E akzeptieren. Die TM stellt Embedded Reber Gramma dar. Wichtig: die vorletzten Zeichen des Wortes müssen identisch sein (T || P)!"
            },

            //Intro Button "richtiger Ausdruck"
            {element: document.querySelector("#play_richtig"),
             intro: "Generiert ein richtiges Reber-Wort."
            }, 

            //Intro Button "falscher Ausdruck"
            {element: document.querySelector("#play_falsch"),
             intro: "Generiert ein falsches Reber-Wort."
            }, 

            //Intro Status
            {element: document.querySelector(".status"),
             intro: "Status des Wortes prüfen."
            }, 

             //Intro Button Techstack
            {element: document.querySelector("#dokumentation"),
             intro: "Dokumentation zu dieser Anwendung."
            }, 
        ],
    }).start();
}

}); // end of jQuery function 


    
    
    
    