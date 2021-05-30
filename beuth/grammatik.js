
  //----------------------------------------- Konstruktoren ---------------------------------------------------//
   
var time = 1500;           //Zeit-Variable ist mit Slider einstellbar
var grammatik_richtig =    //alle mögliche richtige Ausdruke
["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", 
"(1)", "(2)", "(3)", "(4)", "(5)", "(6)", "(7)", "(8)", "(9)", "(0)",
"2*6", "8+7", "5-2", "(4/2)", "(8+0)", "(3*3)", "((((2)*1)+7)/3*9)", "((((6)*2)+5)/2*4)", 
"(1+3/(2))", "(6+2*(1))", "(8)-3", "(4)-1", "((((6)-8/4)-2*3)+7)-2",];                    
var grammatik_falsch =    //alle mögliche falsche Ausdrucke
["15", "22", "45", "37", "(99)", "(17)", "(21)", "48/2", "12+6", "32*1", "+2", "/9", "*3", "7(8)+", "5(1)/"];
var ausdruck_richtig      //switch-Variable richtig, Funktion ausdruck_richtig()
var ausgabe_falsch        //switch-Variable falsch, Funktion ausdruck_falsch()

     //----------------------------------------- Alert -------------------------------------------------------//
    
    /**
     * Alert-Funktion, JS Framework "Sweet ALert"
     */
    function myAlert() {
     swal("Dokumentation für Projektaufgabe 2: Kontextfreie Grammatik", document.getElementById("alert_text").innerText) //Text in der HTML-Datei
    }                                                                                                                    //wird erreicht



     //----------------------------------------- Richtige Ausdrucke  -------------------------------------------------------//
     /**
     * Funktion für Ausgabe von richtigen Ausdrucken. 
     * Richtige Ausdrucke werden zufällig ausgegeben und animiert.
     */
    
     function ausdruck_richtig() {
     ausgabe_richtig = grammatik_richtig[Math.floor(Math.random()*grammatik_richtig.length)]; //zufällige Ausdrucke werden aus Array grammatik_richtig gewählt
     document.getElementById("generiere_ausdruck").innerHTML = ausgabe_richtig;               //Ausgabe von Ausdrucken als HTML



     //Start-Funktion richtiger Ausdruck
      $("#generiere_ausdruck").on("click", function(){
        return ausdruck_richtig();
      });

     //Stop-Funktion
     $("#stop").click(function(){
         $("span").stop(true,false)
      });

        
        switch (ausgabe_richtig) {
        case "0":                                                                          //Ausdrucke aus dem Array grammatik_richtig
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        document.getElementById("produktionsschritte").innerHTML = "A =1a=> Z =3=> z";     //Produktionsschritte werden als HTMLText gezeigt"
                                                                                           //.innerHTML ermöglicht weitere Manipulation mit Text
                    $("#A").animate({fontSize: "35px"}).css("color", "#8BCDAB");           //Animation von Regeln-spans
                setTimeout(function(){                                                     //Verzögerung der Ausgabe: schrittweises Abspielen wird erreicht
                    $("#A").animate({fontSize: "25px"});                                 
                    }, time);                                                              //var time bestimmt Zeit der Verzögerung
                setTimeout(function(){
                    $("#aZ").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                    }, 2*time); 
                setTimeout(function(){
                    $("#aZ").animate({fontSize: "25px"});
                    }, 2*time);                                
                setTimeout(function(){
                    $("#Z").animate({fontSize: "28px"}).css("color", "#8BCDAB");
                    }, 3*time);
                setTimeout(function(){
                    $("#Z").animate({fontSize: "25px"});
                    }, 3*time);
                
                
                //Zurück zu der originalen Schriftfarbe und Größe
                    setTimeout(function(){
                        $("#A").animate({fontSize: "25px"}).css("color", "#5D4954")}, 4*time);       //x*time: x soll länger als in der Funktion davor sein
                    setTimeout(function(){
                        $("#aZ").animate({fontSize: "25px"}).css("color", "#5D4954")}, 4*time);
                    setTimeout(function(){
                        $("#AOA").animate({fontSize: "25px"}).css("color", "#5D4954")}, 4*time);
                    setTimeout(function(){
                        $("#A2").animate({fontSize: "25px"}).css("color", "#5D4954")}, 4*time);
                    setTimeout(function(){
                        $("#O").animate({fontSize: "25px"}).css("color", "#5D4954")}, 4*time);
                    setTimeout(function(){
                        $("#Z").animate({fontSize: "25px"}).css("color", "#5D4954")}, 4*time);
                    
                
                 //Slider-Funktion lässt die Geschwindigkeit einstellen
                    $("#slider").on("change",function(){                                          
                    time = $(this).val();
                   });
        break
    


         case "(0)":
         case "(1)":
         case "(2)":
         case "(3)":
         case "(4)":
         case "(5)":
         case "(6)":
         case "(7)":
         case "(8)":
         case "(9)":
         document.getElementById("produktionsschritte").innerHTML = "A =1c=> (A) =1a=> (Z) =3=> (z)";  
                        $("#A").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                        setTimeout(function(){                                 
                             $("#A").animate({fontSize: "25px"});     
                             }, time);
                        setTimeout(function(){
                             $("#A2").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                             }, 2*time); 
                        setTimeout(function(){
                             $("#A2").animate({fontSize: "25px"});
                             }, 2*time);                                
                        setTimeout(function(){
                             $("#aZ").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                             }, 3*time);
                        setTimeout(function(){
                             $("#aZ").animate({fontSize: "25px"});
                             }, 3*time);
                        setTimeout(function(){
                             $("#Z").animate({fontSize: "28px"}).css("color", "#8BCDAB");
                             }, 4*time);
                        setTimeout(function(){
                            $("#Z").animate({fontSize: "25px"});
                            }, 4*time);  

                        
                         //Zurück zu der originalen Schriftfarbe und Größe
                         setTimeout(function(){
                            $("#A").animate({fontSize: "25px"}).css("color", "#5D4954")}, 5*time);
                        setTimeout(function(){
                            $("#aZ").animate({fontSize: "25px"}).css("color", "#5D4954")}, 5*time);
                        setTimeout(function(){
                            $("#AOA").animate({fontSize: "25px"}).css("color", "#5D4954")}, 5*time);
                        setTimeout(function(){
                            $("#A2").animate({fontSize: "25px"}).css("color", "#5D4954")}, 5*time);
                        setTimeout(function(){
                            $("#O").animate({fontSize: "25px"}).css("color", "#5D4954")}, 5*time);
                        setTimeout(function(){
                            $("#Z").animate({fontSize: "25px"}).css("color", "#5D4954")}, 5*time);
                           
       
                     //Slider-Funktion lässt die Geschwindigkeit einstellen
                     $("#slider").on("change",function(){
                      time = $(this).val();
                     });
            break; 
            
            

         case "(4/2)":    
         case "(8+0)":
         case "(3*3)":
         document.getElementById("produktionsschritte").innerHTML = "A =1c=> (A) =1b=> (AOA)" + "<br/>" + "=1a=> (ZOZ) =2=> (ZoZ) =3=> (zoz)"; 
                         $("#A").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                         setTimeout(function(){                               
                             $("#A").animate({fontSize: "25px"});      
                             }, time);
                        setTimeout(function(){
                             $("#A2").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                             }, 2*time); 
                        setTimeout(function(){
                             $("#A2").animate({fontSize: "25px"});
                             }, 2*time);                                
                        setTimeout(function(){
                             $("#AOA").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                             }, 3*time);
                        setTimeout(function(){
                             $("#AOA").animate({fontSize: "25px"});
                             }, 3*time);
                        setTimeout(function(){
                             $("#aZ").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                             }, 4*time);
                        setTimeout(function(){
                            $("#aZ").animate({fontSize: "25px"});
                            }, 4*time);
                        setTimeout(function(){
                            $("#O").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                            }, 5*time);
                        setTimeout(function(){
                            $("#O").animate({fontSize: "25px"});
                            }, 5*time);    
                        setTimeout(function(){
                            $("#Z").animate({fontSize: "28px"}).css("color", "#8BCDAB");
                            }, 6*time);
                        setTimeout(function(){
                            $("#Z").animate({fontSize: "25px"});
                            }, 6*time);
  

                         //Zurück zu der originalen Schriftfarbe und Größe
                         setTimeout(function(){
                            $("#A").animate({fontSize: "25px"}).css("color", "#5D4954")}, 7*time);
                        setTimeout(function(){
                            $("#aZ").animate({fontSize: "25px"}).css("color", "#5D4954")}, 7*time);
                        setTimeout(function(){
                            $("#AOA").animate({fontSize: "25px"}).css("color", "#5D4954")}, 7*time);
                        setTimeout(function(){
                            $("#A2").animate({fontSize: "25px"}).css("color", "#5D4954")}, 7*time);
                        setTimeout(function(){
                            $("#O").animate({fontSize: "25px"}).css("color", "#5D4954")}, 7*time);
                        setTimeout(function(){
                            $("#Z").animate({fontSize: "25px"}).css("color", "#5D4954")}, 7*time);
                        
   
                          //Slider-Funktion lässt die Geschwindigkeit einstellen
                         $("#slider").on("change",function(){
                            time = $(this).val();
                        });

            break

 
         case "2*6":
         case "8+7":
         case "5-2":
         document.getElementById("produktionsschritte").innerHTML = "A =1b=> AOA =1a=> ZOZ =2=> ZoZ =3=> zoz"; 
                         $("#A").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                         setTimeout(function(){                                 
                             $("#A").animate({fontSize: "25px"});      
                             }, time);                           
                         setTimeout(function(){
                             $("#AOA").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                             }, 2*time);
                         setTimeout(function(){
                             $("#AOA").animate({fontSize: "25px"});
                             }, 2*time);
                         setTimeout(function(){
                             $("#aZ").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                             }, 3*time);
                         setTimeout(function(){
                            $("#aZ").animate({fontSize: "25px"});
                            }, 3*time);
                         setTimeout(function(){
                            $("#O").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                            }, 4*time);
                         setTimeout(function(){
                            $("#O").animate({fontSize: "25px"});
                            }, 4*time);    
                         setTimeout(function(){
                            $("#Z").animate({fontSize: "28px"}).css("color", "#8BCDAB");
                            }, 5*time);
                         setTimeout(function(){
                            $("#Z").animate({fontSize: "25px"});
                            }, 5*time);
  
                         //Zurück zu der originalen Schriftfarbe und Größe
                         setTimeout(function(){
                            $("#A").animate({fontSize: "25px"}).css("color", "#5D4954")}, 6*time);
                         setTimeout(function(){
                            $("#aZ").animate({fontSize: "25px"}).css("color", "#5D4954")}, 6*time);
                         setTimeout(function(){
                            $("#AOA").animate({fontSize: "25px"}).css("color", "#5D4954")}, 6*time);
                         setTimeout(function(){
                            $("#A2").animate({fontSize: "25px"}).css("color", "#5D4954")}, 6*time);
                         setTimeout(function(){
                            $("#O").animate({fontSize: "25px"}).css("color", "#5D4954")}, 6*time);
                         setTimeout(function(){
                            $("#Z").animate({fontSize: "25px"}).css("color", "#5D4954")}, 6*time);
                 
       
                         //Slider-Funktion lässt die Geschwindigkeit einstellen
                         $("#slider").on("change",function(){
                            time = $(this).val();
                        });
            break



            case "((((2)*1)+7)/3*9)":
            case "((((6)*2)+5)/2*4)":    
            document.getElementById("produktionsschritte").innerHTML = "A =1c=> (A) =1b=> (AOA) =1b=> (AOAOA)" +"<br/>" + "=1c=> ((A)OAOA) =1b=> ((AOA)OAOA) =1c=> (((A)OA)OAOA) =1b=> (((AOA)OA)OAOA)" + "<br/>" + "=1c=> ((((A)OA)OA)OAOA) =1a=> ((((Z)OZ)OZ)OZOZ)" + "<br/>" + "=2=> ((((Z)oZ)oZ)oZoZ)" + "<br/>" +"=3=> ((((z)oz)oz)ozoz) "; 
                            $("#A").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                             setTimeout(function(){                                
                                $("#A").animate({fontSize: "25px"});      
                                }, time);                           
                             setTimeout(function(){
                                $("#A2").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                                }, 2*time);
                             setTimeout(function(){
                                $("#A2").animate({fontSize: "25px"});
                                }, 2*time);
                             setTimeout(function(){
                                $("#AOA").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                                }, 3*time);
                             setTimeout(function(){
                                $("#AOA").animate({fontSize: "25px"});
                                }, 3*time); 
                             setTimeout(function(){
                                $("#AOA").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                                }, 4*time);
                             setTimeout(function(){
                                $("#AOA").animate({fontSize: "25px"});
                                }, 4*time);
                             setTimeout(function(){
                                $("#A2").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                                }, 5*time);
                             setTimeout(function(){
                                $("#A2").animate({fontSize: "25px"});
                                }, 5*time);
                             setTimeout(function(){
                                $("#AOA").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                                }, 6*time);
                             setTimeout(function(){
                                $("#AOA").animate({fontSize: "25px"});
                                }, 6*time);
                             setTimeout(function(){
                                $("#A2").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                                }, 7*time);
                             setTimeout(function(){
                                $("#A2").animate({fontSize: "25px"});
                                 },7*time);
                             setTimeout(function(){
                                 $("#AOA").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                                }, 8*time);
                             setTimeout(function(){
                                $("#AOA").animate({fontSize: "25px"});
                                }, 8*time);
                             setTimeout(function(){
                                $("#A2").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                                }, 9*time);
                             setTimeout(function(){
                                $("#A2").animate({fontSize: "25px"});
                                }, 9*time);
                             setTimeout(function(){
                                $("#aZ").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                                }, 10*time);
                             setTimeout(function(){
                                $("#aZ").animate({fontSize: "25px"});
                                }, 10*time);
                             setTimeout(function(){
                                $("#O").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                                },11*time);
                             setTimeout(function(){
                                 $("#O").animate({fontSize: "25px"});
                                 },11*time);
                             setTimeout(function(){
                                $("#Z").animate({fontSize: "28px"}).css("color", "#8BCDAB");
                                }, 12*time);
                             setTimeout(function(){
                                $("#Z").animate({fontSize: "25px"});
                                }, 12*time);

                            
                            //Zurück zu der originalen Schriftfarbe und Größe
                             setTimeout(function(){
                                $("#A").animate({fontSize: "25px"}).css("color", "#5D4954")}, 13*time);
                             setTimeout(function(){
                                $("#aZ").animate({fontSize: "25px"}).css("color", "#5D4954")}, 13*time);
                             setTimeout(function(){
                                $("#AOA").animate({fontSize: "25px"}).css("color", "#5D4954")}, 13*time);
                             setTimeout(function(){
                                $("#A2").animate({fontSize: "25px"}).css("color", "#5D4954")}, 13*time);
                             setTimeout(function(){
                                $("#O").animate({fontSize: "25px"}).css("color", "#5D4954")}, 13*time);
                             setTimeout(function(){
                                $("#Z").animate({fontSize: "25px"}).css("color", "#5D4954")}, 13*time);
        
                             //Slider-Funktion lässt die Geschwindigkeit einstellen
                             $("#slider").on("change",function(){
                               time = $(this).val();
                             });
                            
            break


            case "(2)+(4)":    
            case "(1)+(6)":
            document.getElementById("produktionsschritte").innerHTML = "A =1b=> AOA =1c=> (A)O(A) =1a=> (Z)O(Z) =2=> (Z)o(Z) =3=> (z)o(z)"; 
                           $("#A").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                             setTimeout(function(){                                
                                $("#A").animate({fontSize: "25px"});          
                                }, time);                           
                             setTimeout(function(){
                                $("#AOA").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                                }, 2*time);
                             setTimeout(function(){
                                $("#AOA").animate({fontSize: "25px"});
                                }, 2*time);
                             setTimeout(function(){
                                $("#A2").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                                }, 3*time);
                             setTimeout(function(){
                               $("#A2").animate({fontSize: "25px"});
                               }, 3*time);
                             setTimeout(function(){
                               $("#aZ").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                               }, 4*time);
                             setTimeout(function(){
                               $("#aZ").animate({fontSize: "25px"});
                               }, 4*time);    
                             setTimeout(function(){
                               $("#O").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                               }, 5*time);
                             setTimeout(function(){
                               $("#O").animate({fontSize: "25px"});
                               }, 5*time);
                             setTimeout(function(){
                                $("#Z").animate({fontSize: "28px"}).css("color", "#8BCDAB");
                                }, 6*time);
                             setTimeout(function(){
                                $("#Z").animate({fontSize: "25px"});
                                }, 6*time);
      
     
   
                             //Zurück zu der originalen Schriftfarbe und Größe
                             setTimeout(function(){
                                $("#A").animate({fontSize: "25px"}).css("color", "#5D4954")}, 7*time);
                             setTimeout(function(){
                                $("#aZ").animate({fontSize: "25px"}).css("color", "#5D4954")}, 7*time);
                             setTimeout(function(){
                                $("#AOA").animate({fontSize: "25px"}).css("color", "#5D4954")}, 7*time);
                             setTimeout(function(){
                                $("#A2").animate({fontSize: "25px"}).css("color", "#5D4954")}, 7*time);
                             setTimeout(function(){
                                $("#O").animate({fontSize: "25px"}).css("color", "#5D4954")}, 7*time);
                             setTimeout(function(){
                                $("#Z").animate({fontSize: "25px"}).css("color", "#5D4954")}, 7*time);
                        
            
                              //Slider-Funktion lässt die Geschwindigkeit einstellen
                             $("#slider").on("change",function(){
                               time = $(this).val();
                             });
               break
               

            case "(1+3/(2))":   
            case "(6+2*(1))":
            document.getElementById("produktionsschritte").innerHTML = "A =1c=> (A) =1b=> (AOA) =1b=> (AOAOA) =1c=> (AOAO(A))" + "<br/>" + "=1a=> (ZOZO(Z)) =2=> (ZoZo(Z)) =3=> (zozo(z))"; 
                           $("#A").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                             setTimeout(function(){                                 
                                $("#A").animate({fontSize: "25px"});            
                                }, time);                           
                             setTimeout(function(){
                                $("#A2").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                                }, 2*time);
                             setTimeout(function(){
                                $("#A2").animate({fontSize: "25px"});
                                }, 2*time);
                             setTimeout(function(){
                                $("#AOA").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                                }, 3*time);
                             setTimeout(function(){
                               $("#AOA").animate({fontSize: "25px"});
                               }, 3*time);
                             setTimeout(function(){
                               $("#AOA").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                               }, 4*time);
                             setTimeout(function(){
                               $("#AOA").animate({fontSize: "25px"});
                               }, 4*time);    
                             setTimeout(function(){
                               $("#A2").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                               }, 5*time);
                             setTimeout(function(){
                               $("#A2").animate({fontSize: "25px"});
                               }, 5*time);
                             setTimeout(function(){
                                $("#aZ").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                                }, 6*time);
                             setTimeout(function(){
                                $("#aZ").animate({fontSize: "25px"});
                                }, 6*time);
                             setTimeout(function(){
                                $("#O").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                                }, 7*time);
                             setTimeout(function(){
                                $("#O").animate({fontSize: "25px"});
                                }, 7*time);
                             setTimeout(function(){
                                 $("#Z").animate({fontSize: "28px"}).css("color", "#8BCDAB");
                                }, 8*time);
                             setTimeout(function(){
                                $("#Z").animate({fontSize: "25px"});
                                }, 8*time);
          
    
                           //Zurück zu der originalen Schriftfarbe und Größe
                             setTimeout(function(){
                               $("#A").animate({fontSize: "25px"}).css("color", "#5D4954")}, 9*time);
                             setTimeout(function(){
                               $("#aZ").animate({fontSize: "25px"}).css("color", "#5D4954")}, 9*time);
                             setTimeout(function(){
                               $("#AOA").animate({fontSize: "25px"}).css("color", "#5D4954")}, 9*time);
                             setTimeout(function(){
                               $("#A2").animate({fontSize: "25px"}).css("color", "#5D4954")}, 9*time);
                             setTimeout(function(){
                               $("#O").animate({fontSize: "25px"}).css("color", "#5D4954")}, 9*time);
                            setTimeout(function(){
                               $("#Z").animate({fontSize: "25px"}).css("color", "#5D4954")}, 9*time);
                        
            
                             //Slider-Funktion lässt die Geschwindigkeit einstellen
                             $("#slider").on("change",function(){
                                time = $(this).val();
                             });
               break



            case "(8)-3": 
            case "(4)-1":
            document.getElementById("produktionsschritte").innerHTML = "A =1b=> AOA =1c=> AO(A) =1a=> ZO(Z)" + "<br/>" + "=2=> Zo(Z) =3=> zo(z)"; 
                           $("#A").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                             setTimeout(function(){                                 
                                $("#A").animate({fontSize: "25px"});            
                                }, time);                           
                             setTimeout(function(){
                                $("#AOA").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                                }, 2*time);
                             setTimeout(function(){
                                $("#AOA").animate({fontSize: "25px"});
                                }, 2*time);
                             setTimeout(function(){
                                $("#A2").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                                }, 3*time);
                             setTimeout(function(){
                               $("#A2").animate({fontSize: "25px"});
                               }, 3*time);
                             setTimeout(function(){
                               $("#aZ").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                               }, 4*time);
                             setTimeout(function(){
                               $("#aZ").animate({fontSize: "25px"});
                               }, 4*time);    
                             setTimeout(function(){
                               $("#O").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                               }, 5*time);
                             setTimeout(function(){
                               $("#O").animate({fontSize: "25px"});
                               }, 5*time);
                            setTimeout(function(){
                                $("#Z").animate({fontSize: "28px"}).css("color", "#8BCDAB");
                                }, 6*time);
                             setTimeout(function(){
                                $("#Z").animate({fontSize: "25px"});
                                }, 6*time);
                           
    
                           //Zurück zu der originalen Schriftfarbe und Größe
                             setTimeout(function(){
                               $("#A").animate({fontSize: "25px"}).css("color", "#5D4954")}, 7*time);
                             setTimeout(function(){
                               $("#aZ").animate({fontSize: "25px"}).css("color", "#5D4954")}, 7*time);
                             setTimeout(function(){
                               $("#AOA").animate({fontSize: "25px"}).css("color", "#5D4954")}, 7*time);
                             setTimeout(function(){
                               $("#A2").animate({fontSize: "25px"}).css("color", "#5D4954")}, 7*time);
                             setTimeout(function(){
                               $("#O").animate({fontSize: "25px"}).css("color", "#5D4954")}, 7*time);
                             setTimeout(function(){
                               $("#Z").animate({fontSize: "25px"}).css("color", "#5D4954")}, 7*time);
                        
            
                             //Slider-Funktion lässt die Geschwindigkeit einstellen
                             $("#slider").on("change",function(){
                                 time = $(this).val();
                             });
               break


               case "((((6)-8/4)-2*3)+7)-2": 
               case "((((0)+2-2)-9/3)-7)+6":
               document.getElementById("produktionsschritte").innerHTML = "A =1b=> AOA =1c=> (A)OA =1b=> (AOA)OA =1c=> ((A)OA)OA" + "<br/>" + "=1b=> ((AOA)OA)OA =1b=> ((AOAOA)OA)OA" + "<br/>" + "=1c=> (((A)OAOA)OA)OA =1b=> (((AOA)OAOA)OA)OA" + "<br/>" + "=1b=> (((AOAOA)OAOA)OA)OA" + "<br/>" + "=1c=> ((((A)OAOA)OAOA)OA)OA" + "<br/>" + "=1a=> ((((Z)OZOZ)OZOZ)OZ)OZ =2=> ((((Z)oZoZ)oZoZ)oZ)oZ =3=> ((((z)ozoz)ozoz)oz)oz"; 
                              $("#A").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                                  setTimeout(function(){                                 
                                   $("#A").animate({fontSize: "25px"});            
                                   }, time);                           
                                 setTimeout(function(){
                                   $("#AOA").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                                   }, 2*time);
                                 setTimeout(function(){
                                   $("#AOA").animate({fontSize: "25px"});
                                   }, 2*time);
                                 setTimeout(function(){
                                   $("#A2").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                                   }, 3*time);
                                 setTimeout(function(){
                                  $("#A2").animate({fontSize: "25px"});
                                  }, 3*time);
                                 setTimeout(function(){
                                  $("#AOA").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                                  }, 4*time);
                                 setTimeout(function(){
                                  $("#AOA").animate({fontSize: "25px"});
                                  }, 4*time);    
                                 setTimeout(function(){
                                  $("#A2").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                                  }, 5*time);
                                 setTimeout(function(){
                                  $("#A2").animate({fontSize: "25px"});
                                   }, 5*time);
                                  setTimeout(function(){
                                   $("#AOA").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                                   }, 6*time);
                                 setTimeout(function(){
                                   $("#A0A").animate({fontSize: "25px"});
                                   }, 6*time);
                                  setTimeout(function(){
                                    $("#AOA").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                                    }, 7*time);
                                  setTimeout(function(){
                                    $("#A0A").animate({fontSize: "25px"});
                                    }, 7*time);
                                  setTimeout(function(){
                                    $("#A2").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                                    }, 8*time);
                                  setTimeout(function(){
                                    $("#A2").animate({fontSize: "25px"});
                                    }, 8*time);
                                  setTimeout(function(){
                                    $("#AOA").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                                    }, 9*time);
                                 setTimeout(function(){
                                    $("#AOA").animate({fontSize: "25px"});
                                    }, 9*time);
                                 setTimeout(function(){
                                    $("#AOA").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                                    }, 10*time);
                                 setTimeout(function(){
                                    $("#AOA").animate({fontSize: "25px"});
                                    }, 10*time);
                                 setTimeout(function(){
                                    $("#A2").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                                    }, 11*time);
                                 setTimeout(function(){
                                    $("#A2").animate({fontSize: "25px"});
                                    }, 11*time);
                                 setTimeout(function(){
                                    $("#aZ").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                                    }, 12*time);
                                 setTimeout(function(){
                                    $("#aZ").animate({fontSize: "25px"});
                                    }, 12*time);
                                 setTimeout(function(){
                                    $("#O").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                                    }, 13*time);
                                 setTimeout(function(){
                                    $("#O").animate({fontSize: "25px"});
                                    }, 13*time);
                                 setTimeout(function(){
                                    $("#Z").animate({fontSize: "28px"}).css("color", "#8BCDAB");
                                    }, 14*time);
                                 setTimeout(function(){
                                    $("#Z").animate({fontSize: "25px"});
                                    }, 14*time);
                                                  
                                              
                
                             //Zurück zu der originalen Schriftfarbe und Größe
                                 setTimeout(function(){
                                    $("#A").animate({fontSize: "25px"}).css("color", "#5D4954")}, 15*time);
                                 setTimeout(function(){
                                    $("#aZ").animate({fontSize: "25px"}).css("color", "#5D4954")}, 15*time);
                                 setTimeout(function(){
                                    $("#AOA").animate({fontSize: "25px"}).css("color", "#5D4954")}, 15*time);
                                 setTimeout(function(){
                                    $("#A2").animate({fontSize: "25px"}).css("color", "#5D4954")}, 15*time);
                                 setTimeout(function(){
                                    $("#O").animate({fontSize: "25px"}).css("color", "#5D4954")}, 15*time);
                                 setTimeout(function(){
                                    $("#Z").animate({fontSize: "25px"}).css("color", "#5D4954")}, 15*time);
                           
               
                                 //Slider-Funktion lässt die Geschwindigkeit einstellen
                                 $("#slider").on("change",function(){
                                     time = $(this).val();
                                 });
                  break



            }
  }

    //----------------------------------------- Falsche Ausdrucke  -------------------------------------------------------//  
     /**
     * Funktion für Ausgabe von falschen Ausdrucken. 
     * Falsche Ausdrucke werden zufällig ausgegeben und animiert.
     */
    
      function ausdruck_falsch() {
        ausgabe_falsch = grammatik_falsch[Math.floor(Math.random()*grammatik_falsch.length)]; //zufällige Ausdrucke werden aus Array grammatik_falsch gewählt
        document.getElementById("generiere_ausdruck").innerHTML = ausgabe_falsch;             //Ausgabe von Ausdrucken als HTML
   
         //Start-Funktion richtiger Ausdruck
         $("#generiere_ausdruck").on("click", function(){
           return ausdruck_falsch();
         });
         
        //Stop-Funktion
         $("#stop").click(function(){
         $("span").stop(true,false)
         });


           
           switch (ausgabe_falsch) {
             case "15":                                                                       //Ausdrucke aus dem Array grammatik_richtig
             case "22":  
             case "45":
             case "37":
             document.getElementById("produktionsschritte").innerHTML = "A =1a=> ZZ";        //Produktionsschritte werden als HTMLText gezeigt"
                                                                                             //.innerHTML ermöglicht weitere Manipulation mit Text
                       $("#A").animate({fontSize: "35px"}).css("color", "#8BCDAB");//Animation von Regeln-spans
                     setTimeout(function(){                                                   //Verzögerung der Ausgabe: schrittweises Abspielen wird erreicht
                       $("#A").animate({fontSize: "25px"});                                      
                       }, time);                                                             //var time bestimmt Zeit der Verzögerung
                     setTimeout(function(){
                       $("#aZ").animate({fontSize: "35px"}).css("color", "#F58A8A");         //ein falscher Ausdruck wird mit rot bezeichnet und nur vergroessert
                       }, 2*time);  
               
                   
                    //Zurück zu der originalen Schriftfarbe und Größe
                         setTimeout(function(){
                           $("#A").animate({fontSize: "25px"}).css("color", "#5D4954")}, 3*time);
                         setTimeout(function(){
                           $("#aZ").animate({fontSize: "25px"}).css("color", "#5D4954")}, 3*time);
                         setTimeout(function(){
                           $("#AOA").animate({fontSize: "25px"}).css("color", "#5D4954")}, 3*time);
                         setTimeout(function(){
                           $("#A2").animate({fontSize: "25px"}).css("color", "#5D4954")}, 3*time);
                         setTimeout(function(){
                           $("#O").animate({fontSize: "25px"}).css("color", "#5D4954")}, 3*time);
                         setTimeout(function(){
                           $("#Z").animate({fontSize: "25px"}).css("color", "#5D4954")}, 3*time);
                       
                   
                       //Slider Funktion
                       $("#slider").on("change",function(){
                       time = $(this).val();
                      });
             break


             case "(99)": 
             case "(17)": 
             case "(21)":
             document.getElementById("produktionsschritte").innerHTML = "A =1c=> (A) =1a=> (ZZ)";
           
                       $("#A").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                     setTimeout(function(){                                                   
                       $("#A").animate({fontSize: "25px"});                                 
                       }, time);
                     setTimeout(function(){
                       $("#A2").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                       }, 2*time); 
                     setTimeout(function(){
                        $("#A2").animate({fontSize: "25px"});
                        }, 2*time); 
                     setTimeout(function(){
                        $("#aZ").animate({fontSize: "35px"}).css("color", "#F58A8A");
                        }, 3*time); 
                    
                   
                     //Zurück zu der originalen Schriftfarbe und Größe
                      setTimeout(function(){
                           $("#A").animate({fontSize: "25px"}).css("color", "#5D4954")}, 4*time);
                       setTimeout(function(){
                           $("#aZ").animate({fontSize: "25px"}).css("color", "#5D4954")}, 4*time);
                       setTimeout(function(){
                           $("#AOA").animate({fontSize: "25px"}).css("color", "#5D4954")}, 4*time);
                       setTimeout(function(){
                           $("#A2").animate({fontSize: "25px"}).css("color", "#5D4954")}, 4*time);
                       setTimeout(function(){
                           $("#O").animate({fontSize: "25px"}).css("color", "#5D4954")}, 4*time);
                       setTimeout(function(){
                           $("#Z").animate({fontSize: "25px"}).css("color", "#5D4954")}, 4*time);
                       
                   
                       //Slider Funktion
                       $("#slider").on("change",function(){
                       time = $(this).val();
                      });
              break


              case "48/2": 
              case "12+6": 
              case "32*1":
              document.getElementById("produktionsschritte").innerHTML = "A =1a=> ZZOZ";
           
                     $("#A").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                     setTimeout(function(){                                                   
                         $("#A").animate({fontSize: "25px"});                                 
                        }, time);
                     setTimeout(function(){
                        $("#aZ").animate({fontSize: "35px"}).css("color", "#F58A8A");
                        }, 2*time); 
    
        
                     //Zurück zu der originalen Schriftfarbe und Größe
                     setTimeout(function(){
                        $("#A").animate({fontSize: "25px"}).css("color", "#5D4954")}, 3*time);
                     setTimeout(function(){
                        $("#aZ").animate({fontSize: "25px"}).css("color", "#5D4954")}, 3*time);
                     setTimeout(function(){
                        $("#AOA").animate({fontSize: "25px"}).css("color", "#5D4954")}, 3*time);
                     setTimeout(function(){
                        $("#A2").animate({fontSize: "25px"}).css("color", "#5D4954")}, 3*time);
                     setTimeout(function(){
                        $("#O").animate({fontSize: "25px"}).css("color", "#5D4954")}, 3*time);
                     setTimeout(function(){
                        $("#Z").animate({fontSize: "25px"}).css("color", "#5D4954")}, 3*time);
            
        
                     //Slider Funktion
                     $("#slider").on("change",function(){
                        time = $(this).val();
                     });    
             break


             case "+2":   
             case "/9": 
             case "*3":
             document.getElementById("produktionsschritte").innerHTML = "A =2=> O";
           
                    $("#A").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                     setTimeout(function(){                                                   
                         $("#A").animate({fontSize: "25px"});                                 
                        }, time);
                     setTimeout(function(){
                        $("#O").animate({fontSize: "35px"}).css("color", "#F58A8A");
                        }, 2*time); 
        
                     //Zurück zu der originalen Schriftfarbe und Größe
                     setTimeout(function(){
                        $("#A").animate({fontSize: "25px"}).css("color", "#5D4954")}, 3*time);
                     setTimeout(function(){
                        $("#aZ").animate({fontSize: "25px"}).css("color", "#5D4954")}, 3*time);
                     setTimeout(function(){
                        $("#AOA").animate({fontSize: "25px"}).css("color", "#5D4954")}, 3*time);
                     setTimeout(function(){
                        $("#A2").animate({fontSize: "25px"}).css("color", "#5D4954")}, 3*time);
                     setTimeout(function(){
                        $("#O").animate({fontSize: "25px"}).css("color", "#5D4954")}, 3*time);
                     setTimeout(function(){
                        $("#Z").animate({fontSize: "25px"}).css("color", "#5D4954")}, 3*time);
            
        
                     //Slider Funktion
                     $("#slider").on("change",function(){
                        time = $(this).val();
                    });    
             break

             case "7(8)+":    
             case "5(1)/": 
             document.getElementById("produktionsschritte").innerHTML = "A =1c=> (A) =1c=> Z(Z)O";
           
                    $("#A").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                     setTimeout(function(){                                                   
                         $("#A").animate({fontSize: "25px"});                                 
                        }, time);
                     setTimeout(function(){
                        $("#A2").animate({fontSize: "35px"}).css("color", "#8BCDAB");
                        }, 2*time); 
                     setTimeout(function(){
                        $("#A2").animate({fontSize: "25px"});
                        }, 2*time); 
                     setTimeout(function(){
                        $("#A2").animate({fontSize: "35px"}).css("color", "#F58A8A");;
                       }, 3*time); 
                     setTimeout(function(){
                        $("#Z").animate({fontSize: "28px"}).css("color", "#F58A8A");;
                        }, 3*time); 
                        
                    
        
                     //Zurück zu der originalen Schriftfarbe und Größe
                     setTimeout(function(){
                        $("#A").animate({fontSize: "25px"}).css("color", "#5D4954")}, 4*time);
                     setTimeout(function(){
                        $("#aZ").animate({fontSize: "25px"}).css("color", "#5D4954")}, 4*time);
                     setTimeout(function(){
                        $("#AOA").animate({fontSize: "25px"}).css("color", "#5D4954")}, 4*time);
                     setTimeout(function(){
                        $("#A2").animate({fontSize: "25px"}).css("color", "#5D4954")}, 4*time);
                     setTimeout(function(){
                        $("#O").animate({fontSize: "25px"}).css("color", "#5D4954")}, 4*time);
                     setTimeout(function(){
                        $("#Z").animate({fontSize: "25px"}).css("color", "#5D4954")}, 4*time);
            
        
                     //Slider Funktion
                     $("#slider").on("change",function(){
                        time = $(this).val();
                    });    
           break
        }
     }
   
   




//-----------------------------------------Entwürfe---------------------------------------------------//

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

