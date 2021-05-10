

$(document).ready(function () {


    //-----------------input focus und Buttons default----//
     
   
   
       $("input").focus(function(){
         $(this).css("background-color", "2796A8");
       });
       $("input").blur(function(){
         $(this).css("background-color", "#E2DDDD"); 
       });
   
       $("#kreis_start").on({
         mouseenter: function(){
           $(this).css("background-color", "rgb(118, 150, 205)");
           $("#1_row").css("background-color", "rgb(118, 150, 205)");
         },
             
         mouseleave: function(){
           $(this).css("background-color", "rgb(157, 245, 177)");;
           $("#1_row").css("background-color", "rgb(196, 196, 196)");
         },
       });
   
       $("#kreis_finish").on({
         mouseenter: function(){
           $(this).css("background-color", "rgb(118, 150, 205)");
           $("#12_row").css("background-color", "rgb(157, 245, 177)");
         },
             
         mouseleave: function(){
           $(this).css("background-color", "rgb(157, 245, 177)");;
           $("#12_row").css("background-color", "rgb(196, 196, 196)");
         },
       });
   
       $("#kreis1").on({
         mouseenter: function(){
           $(this).css("background-color", "rgb(118, 150, 205)");
           $("#2_row").css("background-color", "rgb(118, 150, 205)");
           $("#3_row").css("background-color", "rgb(118, 150, 205)");
         },
             
         mouseleave: function(){
           $(this).css("background-color", "rgb(157, 245, 177)");;
           $("#2_row").css("background-color", "rgb(196, 196, 196)");
           $("#3_row").css("background-color", "rgb(196, 196, 196)");
         },
       });
   
       $("#kreis2").on({
         mouseenter: function(){
           $(this).css("background-color", "rgb(118, 150, 205)");
           $("#4_row").css("background-color", "rgb(118, 150, 205)");
           $("#5_row").css("background-color", "rgb(118, 150, 205)");
         },
             
         mouseleave: function(){
           $(this).css("background-color", "rgb(157, 245, 177)");
           $("#4_row").css("background-color", "rgb(196, 196, 196)");
           $("#5_row").css("background-color", "rgb(196, 196, 196)");
         },
       });
       $("#kreis3").on({
         mouseenter: function(){
           $(this).css("background-color", "rgb(118, 150, 205)");
           $("#6_row").css("background-color", "rgb(118, 150, 205)");
           $("#7_row").css("background-color", "rgb(118, 150, 205)");
         },
             
         mouseleave: function(){
           $(this).css("background-color", "rgb(157, 245, 177)");
           $("#6_row").css("background-color", "rgb(196, 196, 196)");
           $("#7_row").css("background-color", "rgb(196, 196, 196)");
         },
       });
       $("#kreis4").on({
         mouseenter: function(){
           $(this).css("background-color", "rgb(118, 150, 205)");
           $("#8_row").css("background-color", "rgb(118, 150, 205)");
           $("#9_row").css("background-color", "rgb(118, 150, 205)");
           
         },
             
         mouseleave: function(){
           $(this).css("background-color", "rgb(157, 245, 177)");
           $("#8_row").css("background-color", "rgb(196, 196, 196)");
           $("#9_row").css("background-color", "rgb(196, 196, 196)");
         },
       });
       $("#kreis5").on({
         mouseenter: function(){
           $(this).css("background-color", "rgb(118, 150, 205)");
           $("#10_row").css("background-color", "rgb(118, 150, 205)");
           $("#11_row").css("background-color", "rgb(118, 150, 205)");
         },
             
         mouseleave: function(){
           $(this).css("background-color", "rgb(157, 245, 177)");
           $("#10_row").css("background-color", "rgb(196, 196, 196)");
           $("#11_row").css("background-color", "rgb(196, 196, 196)");
         },
       });
       $("#kreis6").on({
         mouseenter: function(){
           $(this).css("background-color", "rgb(118, 150, 205)");
           $("#12_row").css("background-color", "rgb(118, 150, 205)"); 
         },
             
         mouseleave: function(){
           $(this).css("background-color", "rgb(157, 245, 177)");
           $("#12_row").css("background-color", "rgb(196, 196, 196)");
         },
       });
   
   
       
   
   
          /*-------------------Variablen/Konstanten----------------------*/
    
       let arword=["B"];
       var ar1=["T","P"];
       var ar2=["S","X"];
       var ar3=["T","V"];
       var ar4=["S","X"];
       var ar5=["V","P"];

       let word="";
       let isrebber=true;
       let stepstate=false;
       let currentstep=0;
       let state=0;
       const letters= ["B","T","P","S","X","V","E"];
       var reeberarray=[];
       let index;
       let input;
       var time=800;
       $("#speed_text").text(time+"ms");
  
         
         /*-------------------------------Funktionen----------------------*/
   
       function check(){
         state=0;
         rebberarray=[];
         isreeber=true,
         index=0;
         currentstep=0;
         word="";
         let fehler;
         let input=document.getElementById("eingabefeld").value;
         if(input===""){
           $("#statustext").text("Geben Sie ein Wort ein");
         }
         word=input.toUpperCase();
         for(i=0;i<word.length; i++){
           rebberarray.push(word.charAt(i));
           if(letters.includes(word.charAt(i))){
             isrebber=true;
           }else{
             isrebber=false;
             fehler=word.charAt(i);
             break;
           }
         }
         $("#status").css("background-color", "rgb(118, 150, 205)");
         if (isrebber){
           $("#statustext").html("Zeichen gehören zum Alphabet Σ={B,T,P,S,X,V,E}. <br/> Der Automat mit <i>play</i> starten");
         }else{
           $("#statustext").html("Zeichen "+fehler+" gehört nicht zum Alphabet: \u03A3={B,T,P,S,X,V,E}");
           $("#status").css("background-color", "rgb(245, 138, 138)");
         }
         $(".kreis").css("background-color", "rgb(68, 59, 59)");
       };
   /*------------------------------------------------Sequence/Step-----------------------------------------------------------------------*/
   
   
     function step(){
       let input= document.getElementById("eingabefeld").value;
       rebberarray=Array.from(input);
       state=0;
       isrebber=true;
       stepstate=true;
       const map={
         0:start,
         1:state1,
         2:state2,
         3:state3,
         4:state4,
         5:state5,
         6:state6,
       };
       map[currentstep]();
     };
   
       function startsequence(){
         stepstate=false;
         $("tr").css("background-color", "rgb(196,196,196)"); 
         disablebuttons();
         start();
       };
       
       function start(){
         $("tr").css("background-color", "rgb(196,196,196)");
         $(".kreis").css("background-color", "rgb(68, 59, 59)");
         let startinput= document.getElementById("eingabefeld").value;
         input=startinput;
         rebberarray=Array.from(startinput);
         state=0;
         index=0;
         $("#status").css("background-color", "rgb(196,196,196)");
         $("#statustext").html(" Wort: "+ input +"<br/>  Zeichen: " + rebberarray[index]+"  Neuer Zustand: " +(state+1));
         isrebber=true;
         switch(rebberarray[0]){
         case "B": 
           isrebber=true;
           state=1;
           $("#kreis1").css("background-color", "157, 245, 177"); 
           $("#1_row").css("background-color", "rgb(157, 245, 177)"); 
           if(!stepstate){
             setTimeout(state1,time);
           }else{
             currentstep=1;
           }
         break;
         default: 
           isrebber=false;
           checkfault();
         break;
         };
       };
   
       function state1 (){
           state=1;
           index+=1;
           $("#1_row").css("background-color", "rgb(196,196,196)");
           $("#statustext").html(" Wort: "+ input +"<br/>  Zeichen: " + rebberarray[index] +"  Neuer Zustand: " +(state+1));
           $("#status").css("background-color", "rgb(196,196,196)");
           switch(rebberarray[index]){
             case "T": 
             $("#kreis1").css("background-color", "rgb(157, 245, 177");
             $("#kreis2").css("background-color", "157, 245, 177");
             $("#2_row").css("background-color", "rgb(157, 245, 177");
             if(!stepstate){
               setTimeout(state2,time);
             }else{
               currentstep=2;
             }
             break;
             case "P": 
             $("#kreis1").css("background-color", "rgb(157, 245, 177");
             $("#kreis3").css("background-color", "157, 245, 177");
             $("#3_row").css("background-color", "rgb(157, 245, 177)");
             if(!stepstate){
               setTimeout(state3,time);
             }else{
               currentstep=3;
             }
             break;
             default:
               isrebber=false;
               checkfault();
             break;
           }
       };
       
       function state2(){  
           state=2;  
           index+=1; 
           $("#2_row").css("background-color", "rgb(196,196,196)");
           $("#statustext").html(" Wort: "+ input +"<br/>  Zeichen: " + rebberarray[index] +"  Neuer Zustand: "  +(state+1));   
           $("#status").css("background-color", "rgb(196,196,196)");
           switch(rebberarray[index]){
             case "S":
               $("#kreis2").css("background-color", "157, 245, 177");
               $("#4_row").css("background-color", "rgb(157, 245, 177)");
               setTimeout(k2green,(3*time/4));
               if(!stepstate){
                 setTimeout(state2,time);
               }else{
                 currentstep=2;
               };
             break;
             case "X": 
               $("#kreis2").css("background-color", "rgb(157, 245, 177");
               $("#kreis4").css("background-color", "157, 245, 177");
               $("#5_row").css("background-color", "rgb(157, 245, 177)");
               $("#4_row").css("background-color", "rgb(196,196,196)"); 
               if(!stepstate){
                 setTimeout(state4,time);
               }else{
                 currentstep=4;
               };
             break;
             default:
               isrebber=false;
               checkfault();
             break;
           };
       };
   
       function k2green(){
         $("#kreis2").css("background-color", "rgb(157, 245, 177)");
       };
   
       function k3green(){
         $("#kreis3").css("background-color", "rgb(157, 245, 177)");
       };
         
         
   
       function state3(){
         $("#3_row").css("background-color", "rgb(196,196,196)"); 
         $("#8_row").css("background-color", "rgb(196,196,196)"); 
           state=3;
           index+=1;
           $("#statustext").html(" Wort: "+ input +"<br/> Zeichen: " + rebberarray[index] +"  Neuer Zustand:  " +(state+1));
           $("#status").css("background-color", "rgb(196,196,196)");
           switch(rebberarray[index]){
             case "T":
               $("#6_row").css("background-color", "rgb(157, 245, 177)");
               $("#kreis3").css("background-color", "157, 245, 177");
               setTimeout(k3green,(3*time/4));
               if(!stepstate){
                 setTimeout(state3,time);
               }else{
                 currentstep=3;
               }; 
             break;
             case "V": 
               $("#kreis3").css("background-color", "rgb(157, 245, 177");
               $("#kreis5").css("background-color", "157, 245, 177");
               $("#7_row").css("background-color", "rgb(157, 245, 177)");
               $("#6_row").css("background-color", "rgb(157, 245, 177)"); 
               if(!stepstate){
                 setTimeout(state5,time);
               }else{
                 currentstep=5;
               };
             break;
             default:
               isrebber=false;
               checkfault();
             break;   
           }   
       };
         
       function state4(){
         $("#10_row").css("background-color", "rgb(196,196,196)"); 
         $("#5_row").css("background-color", "rgb(196,196,196)"); 
          state=4;
           index+=1;
           $("#statustext").html(" Wort: "+ input +"<br/>  Zeichen: " + rebberarray[index] +"  Neuer Zustand: " +(state+1));
           $("#status").css("background-color", "rgb(196,196,196)");
           switch(rebberarray[index]){
             case "S": 
               $("#kreis4").css("background-color", "rgb(157, 245, 177");
               $("#kreis6").css("background-color", "157, 245, 177");
               $("#9_row").css("background-color", "rgb(157, 245, 177)");
               if(!stepstate){
                 setTimeout(state6,time);
               }else{
                 currentstep=6;
               };
             break;
             case "X":  
               $("#kreis4").css("background-color", "rgb(157, 245, 177");
               $("#kreis3").css("background-color", "157, 245, 177");
               $("#8_row").css("background-color", "rgb(157, 245, 177)");
               if(!stepstate){
                 setTimeout(state3,time);
               }else{
                 currentstep=3;
               };
             break;
             default:
               isrebber=false;
               checkfault();
             break;
           }  
       };
   
         
       function state5(){
         state=5;
         index+=1;
         $("#statustext").html(" Wort: "+ input +"<br/> Zeichen: " + rebberarray[index] +"  Neuer Zustand: " +(state+1));
         $("#status").css("background-color", "rgb(196,196,196)");
         $("#6_row").css("background-color", "rgb(196,196,196)");
         $("#7_row").css("background-color", "rgb(196,196,196)"); 
         switch(rebberarray[index]){
           case "P": 
             $("#kreis5").css("background-color", "rgb(157, 245, 177");
             $("#kreis4").css("background-color", "157, 245, 177");
             $("#10_row").css("background-color", "rgb(157, 245, 177)");
             if(!stepstate){
               setTimeout(state4,time);
             }else{
               currentstep=4;
             };
           break;
           case "V": 
             $("#kreis5").css("background-color", "rgb(157, 245, 177");
             $("#kreis6").css("background-color", "157, 245, 177");
             $("#11_row").css("background-color", "rgb(157, 245, 177)");
             if(!stepstate){
               setTimeout(state6,time);
             }else{
               currentstep=6;
             };
           break;
           default:
             isrebber=false;
             checkfault();
             break;
         }   
       };
   
       function state6(){
         state=6;
         index+=1;
         $("#statustext").html(" Wort: "+ input +"<br/> Zeichen: " + rebberarray[index] +"  Neuer Zustand: " +(state+1));
         $("#status").css("background-color", "rgb(196,196,196)");
         $("#9_row").css("background-color", "rgb(196,196,196)"); 
         $("#11_row").css("background-color", "rgb(196,196,196)"); 
         switch(rebberarray[index]){
           case "E":
             finished();
             $("#kreis6").css("background-color", "rgb(157, 245, 177");
             break;
           default:
             isrebber=false;
             checkfault();
           break;
           }
       };
   
   
       function checkfault(){
         $("#statustext").html( "Nicht definiert bei Zustand "+state+" Zeichen: " +rebberarray[index]);
         $("#status").css("background-color", "245, 138, 138");
         if (state==1){
           $("#kreis1").css("background-color", "245, 138, 138");
         }else if(state==2){
           $("#kreis2").css("background-color", "245, 138, 138");
         }else if(state==3){
           $("#kreis3").css("background-color", "245, 138, 138");
         }else if(state==4){
           $("#kreis4").css("background-color", "245, 138, 138");
         }else if(state==5){
           $("#kreis5").css("background-color", "245, 138, 138");
         }else if(state==6){
           $("#kreis6").css("background-color", "245, 138, 138");
         }
         ar4=["S","X"];
         ar5=["P","V"];
         enablebuttons();
       };
   
   
   
         
   
       function checkstate(){
         alert("Zeichen: "+rebberarray+"-----State: "+state +"-----isreeber: "+isrebber+"-----index: "+ index+ "-----Zeichen:"+ rebberarray[index]);
       };
   
       function finished(){
         $("#statustext").text("Ende der Simulation");
         $("#status").css("background-color", "rgb(157, 245, 177)");
         $("#12_row").css("background-color", "rgb(157, 245, 177)"); 
         currentstep=0;
         stepstate=false;
         enablebuttons();
       };
       
       /*----------------------------------------------Wort Generator---------------------------------------------------*/
   
       function getRandomInt(max) {
         return Math.floor(Math.random() * max);
       };
       /*
       let rannumber= getRandomInt(2);
       arword.push(ar1[rannumber]);
       */
   
       function f1(){
         $(".kreis").css("background-color", "rgb(157, 245, 177)");
         $("tr").css("background-color", "rgb(196, 196, 196)");
         let rannumber= getRandomInt(2);
         let x=ar1[rannumber];
         arword.push(x);
         switch(x){
           case "T":
             f2();
           break;
           case "P":
            f3();
           break;
         };
       };
   
         
   
         function f2(){
           let rannumber= getRandomInt(2);
           let x=ar2[rannumber];
           arword.push(x);
           switch(x){
             case "S":
               f2();
             break;
             case "X":
              f4();
             break;
           };
         };
   
   
         function f3(){
           let rannumber= getRandomInt(2);
           let x=ar3[rannumber];
           arword.push(x);
           switch(x){
             case "T":
               f3();
             break;
             case "V":
              f5();
             break;
           };
         };
   
   
         function f4(){
           let rannumber= getRandomInt(2);
           let x=ar4[rannumber];
           arword.push(x);
           switch(x){
             case "S":
               f6();
             break;
             case "X":
              f3();
             break;
           default:
             f5();
           };
         };
   
         function f5(){
           let rannumber= getRandomInt(2);
           let x=ar5[rannumber];
           arword.push(x);
           switch(x){
             case "V":
               f6();
             break;
             case "P":
              f4();
             break;
             default:
               f6();
           };
         };
   
         function f6(){
           arword.push("E");
           index2=0;
           $("#eingabefeld").val(arword.join(""));
           arword=["B"];
           $("#status").css("background-color", "rgb(196, 196, 196)");
           $("#statustext").html("Ein Rebberwort wurde generiert! <br/>  Der Automat mit <i>play</i> starten ");
           currentstep=0;
           stepstate=false;
         };
   
   
       function generatenonreeber(){
         $(".kreis").css("background-color", "rgb(68, 59, 59)");
         $("tr").css("background-color", "rgb(196, 196, 196)");
         ar4=["P","V"];
         ar5=["S","X"];
         f1();
         currentstep=0;
         stepstate=false;
       };
         
       
       //---------------------------------------Button Events--------------------------------------------//
         
   
       $("#enter_word").click(function(){
         $("#statustext").text("Geben sie ein Wort ein");
         $("#eingabefeld").focus();
         $("#status").css("background-color", "rgb(196, 196, 196)");
         $("#eingabefeld").val("");
         $("tr").css("background-color", "rgb(196, 196, 196)");
       });
   
       $("#random_word").click(f1);
   
   
       $("#play").click(startsequence);
   
       $("#wrong_word").click(generatenonreeber);
   

   
       $("#check_word").click(check);
   
       function disablebuttons (){
         $("button").prop('disabled', true);
       }
   
       function enablebuttons(){
         $("button").prop('disabled', false);
       }
   
   
   
       //--------------------------Slider-------------------------------//
   
       $("#slider").on("change",function(){
         time = $(this).val();
         $("#speed_text").text(time+"ms");
       });
         
   
   
   });
   
   