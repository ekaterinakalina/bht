//Konstrukotren
   
   var time = 600;        //Zeit-Variable ist mit Slider einstellbar
   var grammatik_richtig = 
   ["1", //"2", "3", "4", "5", "6", "7", "8", "9", "0", 
    "(1)",// "(2)", "(3)", "(4)", "(5)", "(6)", "(7)", "(8)", "(9)", "(0)",
   //"3+6", "2*6", "9/1", "3*5", "6-2", "8+7", "3*9", "5-2", "6/3", "1+7",
   //"(4/2)", "(8+0)", "(2+4)", "(9/1)", "(3*3)", "(7*5)", "(7-6)", "(4-3)", "(4*7)", "(2+1)",
   //"(9+1)-2", "(4+8)*3", "(8/2)+2", "(5+5)/2", "(2-1)*8", "(5+6)-4", "(9+7)-3", "(5+8)/1", "(0+6)-4", "(3+6)+9",
   //"3+(3*6)", "1*(6/2)", "5+(7+1)", "4*(2-9)", "5-(2+1)", "1/(2+3)", "3-(7+3)", "9-(2+8)", "8+(2+2)", "0+(6+4)",
    ];                    //richtige Ausdrucke
    var ausgabe_richtig   //Variable für Funktion ausdruck_richtig 
   


   /**
    * Funktion für Ausgabe von richtigen Ausdrucken. 
    * Richtige Ausdrucke werden zufällig ausgegeben.
    */
    function ausdruck_richtig() {
    ausgabe_richtig = grammatik_richtig[Math.floor(Math.random()*grammatik_richtig.length)]; //zufällig 
    document.getElementById("generiere_ausdruck").innerHTML = ausgabe_richtig;
    
    

        switch (ausgabe_richtig) {
        case "1":
            document.getElementById("produktionsschritte").innerText = "A =1a=> Z =3=> z";
            $(function beispiel1(){    

                $("#start").on("click", function(){
                    $("#A").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                setTimeout(function(){                                                   
                    $("#A").animate({fontSize: "25px"});                                 
                    }, time);
                setTimeout(function(){
                    $("#aZ").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                    }, time); 
                setTimeout(function(){
                    $("#aZ").animate({fontSize: "25px"});
                    }, time);                                
                setTimeout(function(){
                    $("#Z").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                    }, time);
                setTimeout(function(){
                    $("#Z").animate({fontSize: "25px"});
                    }, time);                                                                  
                 });
                 $("#stop").click(function(){                                                 
                    $("span").stop(true, true); 
                });
            }); 
        break;
    
        
        case "(1)":
         document.getElementById("produktionsschritte").innerText = "A =1c=> (A) =1a=> Z =3=> z";
         $(function beispiel2(){    
            $("#start").on("click", function(){

              $("#A").animate({fontSize: "35px"}).css("color", "#8BCDAB");
               setTimeout(function(){                                  // Methode
                             $("#A").animate({fontSize: "25px"});     // Methode animiert jeweilige Regelelemente:
                             }, time);
                        setTimeout(function(){
                             $("#A2").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                             }, time); 
                        setTimeout(function(){
                             $("#A2").animate({fontSize: "25px"});
                             }, time);                                
                        setTimeout(function(){
                             $("#aZ").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                             }, time);
                        setTimeout(function(){
                             $("#aZ").animate({fontSize: "25px"});
                             }, time);
                        setTimeout(function(){
                             $("#Z").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                             }, time);
                        setTimeout(function(){
                            $("#Z").animate({fontSize: "25px"});
                            }, time);                              
                         });
                    $("#stop").click(function(){                                  
                        $("span").stop(true, true);  
                    }); 
                });
        break;   
        }
    }
 

        /**
        * Slider/Funktion.
        
        $("#slider").on("change",function(){
        time = $(this).val();
        });
        */


   


    


    
   
    
    /** 
    switch (ausgabe_richtig) {
        case ("3+6"):
        case ("2*6"):
        case ("9/1"):
        case ("3*5"):
        case ("6-2"):
        case ("8+7"):
        case ("3*9"):
        case ("5-2"):
        case ("6/3"):
        case ("1+7"):
            $(function tick3(){
                document.getElementById("produktionsschritte").innerText = "A =1c=> AOA =1a=> zOA =2=> zoA =1a=> zoz";
                var str = document.getElementById("produktionsschritte").innerText;
                var spans = '<span>' + str.split(/\s+/).join(' </span><span>') + '</span>';
                $(spans).hide().appendTo('body').each(function(i) {
                        $(this).delay(time*i).fadeIn().fadeOut(500);
                        $(this).css({"font-size": "40px", "font-weight": "bolder", "float": "left",
                                     "clear": "left", "clear":"bottom", "margin-left": "1380px", "margin-top": "-450px"});  
                        $("#kreis_A").css("background-color", "#8BCDAB");
                        $("#kreis_AOA").css("background-color", "#8BCDAB");
                        $("#kreis_z").css("background-color", "#8BCDAB");
                        $("#kreis_o").css("background-color", "#8BCDAB");
                        $("#kreis_z").css("background-color", "#8BCDAB");  
                });
            });
         break;
        }


    switch (ausgabe_richtig) {
        case ("(4/2)"):
        case ("(8+0)"):
        case ("(2+4)"):
        case ("(9/1)"):
        case ("(3*3)"):
        case ("(7*5)"):
        case ("(7-6)"):
        case ("(4-3)"):
        case ("(4*7)"):
        case ("(2+1)"):
            $(function tick4(){
                document.getElementById("produktionsschritte").innerText = "A =1b=> Z =3=> (A) =1c=> (AOA)" + "</br>" + "=1a=> (zOA) =2=> (zoA) =1a=> (zoz)";
                var str = document.getElementById("produktionsschritte").innerText;
                var spans = '<span>' + str.split(/\s+/).join(' </span><span>') + '</span>';
                $(spans).hide().appendTo('body').each(function(i) {
                        setTimeout(tick4,time);
                        $(this).delay(time*i).fadeIn().fadeOut(500);
                        $(this).css({"font-size": "40px", "font-weight": "bolder", "float": "left",
                                     "clear": "left", "clear":"bottom", "margin-left": "1380px", "margin-top": "-450px"});  
                        $("#kreis_A").css("background-color", "#8BCDAB");
                        $("#kreis_Z").css("background-color", "#8BCDAB");
                        $("#kreis_A2").css("background-color", "#8BCDAB");
                        $("#kreis_AOA").css("background-color", "#8BCDAB");
                        $("#kreis_z").css("background-color", "#8BCDAB");
                        $("#kreis_o").css("background-color", "#8BCDAB");
                        $("#kreis_z").css("background-color", "#8BCDAB"); 
                });
            });
         break;
        }

    /** 
    switch (ausgabe_richtig) {
        case "(9+1)-2": 
        case "(4+8)*3":
        case "(8/2)+2": 
        case "(5+5)/2":
        case "(2-1)*8": 
        case "(5+6)-4":  //"A =1b=> Z =3=> (A) =1a=> (z)"; 
        case "(9+7)-3":
        case "(5+8)/1":
        case "(0+6)-4": 
        case "(3+6)+9":
            
                });
            });
         break;
    }
}
*/

        /** 
         case ("3+(3*6)"):
         case ("1*(6/2)"):
         case ("5+(7+1)"): 
         case ("4*(2-9)"): 
         case ("5-(2+1)"): 
         case ("1/(2+3)"): 
         case ("3-(7+3)"): 
         case ("9-(2+8)"): 
         case ("8+(2+2)"): 
         case ("0+(6+4)"):
               $(function(){
                document.getElementById("produktionsschritte").innerText = "A =1c=> AOA =1b=> Z O A =3=> (A)OA =1c=> (AOA)OA =1a=> (zOA)OA =2=> (zoA)OA =1a=> (zoz) OA =2=> (zoz)oA =1a=> (zoz)oz";
                var str = document.getElementById("produktionsschritte").innerText;
                var spans = '<span>' + str.split(/\s+/).join(' </span><span>') + '</span>';
                $(spans).hide().appendTo('body').each(function(i) {
                        $(this).delay(2000*i).fadeIn().fadeOut(2000);
                        $(this).css({"font-size": "40px", "font-weight": "bolder", "float": "left",
                                     "clear": "left", "clear":"bottom", "margin-left": "1380px", "margin-top": "-450px"});  
                        $("#kreis_A").css("background-color", "#8BCDAB");
                        $("#kreis_AOA").css("background-color", "#8BCDAB");
                        $("#kreis_Z").css("background-color", "#8BCDAB");
                        $("#kreis_A2").css("background-color", "#8BCDAB");
                        $("#kreis_AOA").css("background-color", "#8BCDAB");
                        $("#kreis_z").css("background-color", "#8BCDAB");
                        $("#kreis_o").css("background-color", "#8BCDAB");
                        $("#kreis_z").css("background-color", "#8BCDAB");
                        $("#kreis_o").css("background-color", "#8BCDAB");
                        $("#kreis_z").css("background-color", "#8BCDAB");
                });
            });
         break;
    */

    /**         
    function ausdruck_falsch() {
    var grammatik_falsch = ["()", "-1", "-2"];
    var ausgabe_falsch = grammatik_falsch[Math.floor(Math.random()*grammatik_falsch.length)];
    document.getElementById("generiere_ausdruck").innerHTML = ausgabe_falsch;
    
    switch (ausgabe_falsch) {
        case "()":
            document.getElementById("produktionsschritte").innerHTML = "() geht nicht";
            break;
        case "-1":
            document.getElementById("produktionsschritte").innerHTML = "-1 geht nicht";
            break;
        case "-2":
            document.getElementById("produktionsschritte").innerHTML = "-2 geht nicht";
            break;
    }

    }
}

*/
//---------------------------------------Entwürfe---------------------------------------------------//

/**
 * Nicht zu Ende: Step-Funktion
 * Problem: Schritte (Text) werde nur einmal abgespielt, statt mehrmals.
 * Buf bei Animation 
 */

/** 
$(function beispiel1_schritte(){ 
    $("#button_step").click(function(){
        $("#step").text("A");
        $("#A").animate({fontSize: "35px"}).css("color", "#8BCDAB");
        
        $("#button_step").click(function(){
            $("#step").text("=1a=>");
            
        $("#button_step").click(function(){
            $("#step").text("Z");
            $("#Z").animate({fontSize: "35px"}).css("color", "#8BCDAB");
            
            $("#button_step").click(function(){
                $("#step").hide();
                $("#A").animate({fontSize: "25px"}).css("color", "#443B3B");
                $("#Z").animate({fontSize: "25px"}).css("color", "#443B3B");
    });         
}); 
}); 
}); 
}); 
*/


/**
 * Funktion
 */

/**
switch (ausgabe_richtig) {
case ("(4/2)"):
case ("(8+0)"):
case ("(2+4)"):
case ("(9/1)"):
case ("(3*3)"):
case ("(7*5)"):
case ("(7-6)"):
case ("(4-3)"):
case ("(4*7)"):
case ("(2+1)"):
$(function tick4(){
document.getElementById("produktionsschritte").innerText = "A =1b=> Z =3=> (A) =1c=> (AOA)" + "</br>" + "=1a=> (zOA) =2=> (zoA) =1a=> (zoz)";
var str = document.getElementById("produktionsschritte").innerText;
var spans = '<span>' + str.split(/\s+/).join(' </span><span>') + '</span>';
$(spans).hide().appendTo('body').each(function(i) {
setTimeout(tick4,time);
$(this).delay(time*i).fadeIn().fadeOut(500);
$(this).css({"font-size": "40px", "font-weight": "bolder", "float": "left",
             "clear": "left", "clear":"bottom", "margin-left": "1380px", "margin-top": "-450px"});  
$("#kreis_A").css("background-color", "#8BCDAB");
$("#kreis_Z").css("background-color", "#8BCDAB");
$("#kreis_A2").css("background-color", "#8BCDAB");
$("#kreis_AOA").css("background-color", "#8BCDAB");
$("#kreis_z").css("background-color", "#8BCDAB");
$("#kreis_o").css("background-color", "#8BCDAB");
$("#kreis_z").css("background-color", "#8BCDAB"); 
});
});
break;
}
 */

 
