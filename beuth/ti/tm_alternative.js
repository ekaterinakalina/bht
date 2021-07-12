$ (function () {  //jQuery function
    

/*----------------------------------------- Button Events ---------------------------------------------------*/
$("#but1").click(reset);                     //Reset Button
$("#play_richtig").click(richtig_q1);        //generate Reeber
$("#play_falsch").click(ausdruck_falsch);    // generate nonReeber
$("#play").click(play);                      //Sequence
$("#step").click(step);                      //Step


function disablebuttons (){
    $("button").prop('disabled', true);
    $("#but1").prop('disabled', false);
    $("#but4").prop('disabled', false);
}

function enablebuttons(){
$("button").prop('disabled', false);
}

/*----------------------------------------- Variablen ---------------------------------------------------*/

let isreber=true
let state=0;
const reeber_letters=["B", "T", "P", "S", "X", "V", "E"];
var reberarray=[];
let index;
var time=1000;
let stepstate=false;
let currentstep=0;
//Speed
let input;
let zweitesZeichen;
let isreset=false;

let array_word=["B"];
var array_word1=["T","P"];
var array_word2=["S","X"];
var array_word3=["T","V"];
var array_word4=["S", "X"];
var array_word5=["V","P"];


function step() {
    time=200;
    input= document.getElementById('input').value;
    isreber=true;
    stepstate=true;
    const map={
        0:start,
        1:state1,
        2:state2,
        3:state3,
        4:state4,
        5:state5,
        6:state6,
        11:q1,
        12:q2,
        13:q3,
        14:q4,
        15:q5,
        16:q6,
        17:q7L,
        18:q8L,
        19:q7,
        20:q8,
        21:q9,
};
map[currentstep]();
};


function play(){
    time=200; //Speed!
    stepstate=false;
    $('tr').css("background-color", '#8BCDAB');
    disablebuttons();
    start();  
    // Grün



function start(){
    //Originalfarben
    $(".edge").css("color", "#443B3B");
    $("tr").css("background-color", "#A59C9C");
    $(".node").css("background-color", "#443B3B");
    $("#zustand_container").css("background-color", "#A59C9C", "filter", "opacity(0.7)");
    $("head_text").html("*");
    $('#zustand_container').animate({'left': 0},0,'linear');
    let startinput= document.getElementById("input").value;
    input=startinput;
    reberarray=Array.from(startinput);
    $("#head_array").html(reberarray);
    $("#status_text").html(reberarray);
    state=0;
    index=0;
    $(".status").css("background-color", "#A59C9C", "filter", "opacity(0.7)");
    $("#edge1").css("color", "#443B3B");
    isreset=false;

    isreber=true;
    switch(reberarray[0]){
        case 'B':
            isreber=true;
            state=11;
            //Grün: Kreis, Text, Tabellenzeile
            $("#node_q0").css("background-color", "#8BCDAB");  
            $("#edge1").css("background-color", "#8BCDAB");
            $("#line1").css("background-color", "#8BCDAB");
            
            if (!stepstate){
                setTimeout(q1,time);
            }else{
                currentstep=11;
            }
            reberarray[index]="_";
        break;
        default:
            isreber=false;
            checkfault();
        break;
    };
};

function q1(){
    state=11;
    index+=1;
    //Originalfarben Tabelle + Status Text + Kreis
    $(".edge").css("color", "#443B3B");
    $("tr").css("background-color", "#A59C9C");
    $(".status").css("background-color", "#A59C9C", "filter", "opacity(0.7)");
    $(".node").css("background-color", "#443B3B");
    //Grün Kreis
    $("#node_q1").css("background-color", "#8BCDAB");
    head_position();
    switch(reberarray[index]){
        case "P":
              //Grün: Kreis, Text, Tabellenzeile
              $("#line2").css("background-color", "#8BCDAB");
              $("#edge2").css("background-color", "#8BCDAB");
              //Kopfzeile Text 
              $("#head_array").html(reberarray);
              //Status Text
              $("#status_text").html(reberarray);

              if(!stepstate){
                setTimeout(q2,time);
              }else{
                currentstep=12;
              }
              break;
        case "T":
                //Grün: Kreis, Text, Tabellenzeile
                $("#line3").css("background-color", "#8BCDAB");
                $("#edge3").css("background-color", "#8BCDAB");
                //Kopfzeile Text 
                $("#head_array").html(reberarray);
                //Status Text
                $("#status_text").html(reberarray);
  
                if(!stepstate){
                  setTimeout(q3,time);
                }else{
                  currentstep=13;
                }
                break;
                default:
                    isreber=false;
                    checkfault();
                break;    
    };
};


function q2(){
    state=12;
    index+=1;
    //Originalfarben Tabelle + Status Text + Kreis
    $(".edge").css("color", "#443B3B");
    $("tr").css("background-color", "#A59C9C");
    $(".status").css("background-color", "#A59C9C", "filter", "opacity(0.7)");
    $("#status_text").html(reberarray);
    $("#head_array").html(reberarray);
    $(".node").css("background-color", "#443B3B");
    //Grün Kreis
    $("#node_q1").css("background-color", "#8BCDAB");
    head_position();
    switch(reberarray[index]){
        case "B":
              //Grün: Kreis, Text, Tabellenzeile
              $("#edge4").css("background-color", "#8BCDAB");
              $("#line4").css("background-color", "#8BCDAB");
              reberarray[index]="__";

              if(!stepstate){
                setTimeout(state1,time);
              }else{
                currentstep=1;
              }
              break;
              default:
                  isreber=false;
                  checkfault();
              break;   
    };
};

function q3(){
    state=13;
    index+=1;
    //Originalfarben Tabelle + Status Text + Kreis
    $("tr").css("background-color", "#A59C9C");
    $(".status").css("background-color", "#A59C9C", "filter", "opacity(0.7)");
    $("#status_text").html(reberarray);
    $("#head_array").html(reberarray);
    $(".node").css("background-color", "#443B3B");
    //Grün Kreis
    $("#node_q1").css("background-color", "#8BCDAB");
    head_position();
    switch(reberarray[index]){
        case "B":
              //Grün: Kreis, Text, Tabellenzeile
              $("#edge5").css("background-color", "#8BCDAB");
              $("#line5").css("background-color", "#8BCDAB");
              reberarray[index]="__";

              if(!stepstate){
                setTimeout(state1,time);
              }else{
                currentstep=1;
              }
              break;
              default:
                  isreber=false;
                  checkfault();
              break;   
    };
};

function state1(){
    state=1;
    index+=1;
    //Originalfarben Tabelle + Status Text + Kreis
    $(".edge").css("color", "#443B3B");
    $("tr").css("background-color", "#A59C9C");
    $(".status").css("background-color", "#A59C9C", "filter", "opacity(0.7)");
    $(".node").css("background-color", "#443B3B");
    //Grün Kreis
    $("#node_1").css("background-color", "#8BCDAB");
    head_position();
    $("#status_text").html(reberarray);
    $("#head_array").html(reberarray);
    switch(reberarray[index]){
      case "P":
      $("#line6").css("background-color", "#8BCDAB");
      $("#edge6").css("color", "#8BCDAB");
      reberarray[index]="_";
      
      if(!stepstate){
        setTimeout(state2,time);
      }else{
        currentstep=2;
      }
      break;
      case "T": 
      $("#line7").css("background-color", "#8BCDAB");
      $("#edge7").css("color", "#8BCDAB");
      reeberarray[index]="_";
      if(!stepstate){
        setTimeout(state4,time);
      }else{
        currentstep=4;
      }
      break;
      default:
        isreeber=false;
        checkfault();
      break;
    }
};

function state2(){

    state=2;  
    index+=1; 
    //Originalfarben Tabelle + Status Text + Kreis
    $(".edge").css("color", "#443B3B");
    $("tr").css("background-color", "#A59C9C");
    $(".node").css("background-color", "#443B3B");
    //Grün Kreis
    $("#node_2").css("background-color", "#8BCDAB");
    $("#status_text").html(reberarray);
    $("#head_array").html(reberarray);
    $(".status").css("background-color", "#A59C9C", "filter", "opacity(0.7)");
    head_position();
    switch(reeberarray[index]){
      case "S":
        $("#line8").css("background-color", "#8BCDAB");
        reeberarray[index]="_";
        //Originalfarben
        setTimeout(() => {
            $("#node_2").css("background-color", "#443B3B");
            $("#edge8").css("color", "#443B3B");
        }, 1*time/3);
        //Grün
        setTimeout(() => {
            $("#node_2").css("background-color", "#8BCDAB");
            $("#edge8").css("color", "#8BCDAB");
        }, 2*time/3);
        if(!stepstate){
          setTimeout(state2,time);
        }else{
          currentstep=2;
        };
      break;
      case "X": 
        $("#line9").css("background-color", "#8BCDAB");
        $("#edge10").css("color", "#8BCDAB");
        reeberarray[index]="_";
        if(!stepstate){
          setTimeout(state3,time);
        }else{
          currentstep=3;
        };
      break;
      default:
        isreeber=false;
        checkfault();
      break;
    };
};
};

function state3(){
    state=3;  
    index+=1; 
    //Originalfarben Tabelle + Status Text + Kreis
    $(".edge").css("color", "#443B3B");
    $("tr").css("background-color", "#A59C9C");
    $(".node").css("background-color", "#443B3B");
    //Grün Kreis
    $("#node_3").css("background-color", "#8BCDAB");
    $("#status_text").html(reberarray);
    $("#head_array").html(reberarray);
    $(".status").css("background-color", "#A59C9C", "filter", "opacity(0.7)");
    head_position();  
    
    switch(reberarray[index]){
      case "S": 
        $("#line8").css("background-color", "#8BCDAB");
        $("#edge8").css("color", "#8BCDAB");
        reberarray[index]="_";
        if(!stepstate){
          setTimeout(state6,time);
        }else{
          currentstep=6;
        };
      break;

      case "X":  
        $("#line9").css("background-color", "#8BCDAB");
        $("#edge10").css("color", "#8BCDAB");
        reeberarray[index]="_";
        if(!stepstate){
          setTimeout(state4,time);
        }else{
          currentstep=4;
        };
      break;
      default:
        isreeber=false;
        checkfault();
      break;
    }  
};

function state4(){
      
    state=4;  
    index+=1; 
    //Originalfarben Tabelle + Status Text + Kreis
    $(".edge").css("color", "#443B3B");
    $("tr").css("background-color", "#A59C9C");
    $(".node").css("background-color", "#443B3B");
    //Grün Kreis
    $("#node_4").css("background-color", "#8BCDAB");
    $("#status_text").html(reberarray);
    $("#head_array").html(reberarray);
    $(".status").css("background-color", "#A59C9C", "filter", "opacity(0.7)");
    head_position();
    switch(reberarray[index]){
      case "T":
        $("#line10").css("background-color", "#8BCDAB");
        
        reberarray[index]="_";
         //Originalfarben
         setTimeout(() => {
            $("#node_4").css("background-color", "#443B3B");
            $("#edge9").css("color", "#443B3B");
        }, 1*time/3);
        //Grün
        setTimeout(() => {
            $("#node_4").css("background-color", "#8BCDAB");
            $("#edge9").css("color", "#8BCDAB");
        }, 2*time/3);
        if(!stepstate){
          setTimeout(state4,time);
        }else{
          currentstep=4;
        }; 
      break;
      case "V":
        $("#line11").css("background-color", "#8BCDAB");
        $("#edge11").css("color", "#8BCDAB");
        reberarray[index]="_";
        if(!stepstate){
          setTimeout(state5,time);
        }else{
          currentstep=5;
        };
      break;
      default:
        isreeber=false;
        checkfault();
      break;   
    }   
};


function state5(){
    
    state=5;  
    index+=1; 
    //Originalfarben Tabelle + Status Text + Kreis
    $(".edge").css("color", "#443B3B");
    $("tr").css("background-color", "#A59C9C");
    $(".node").css("background-color", "#443B3B");
    //Grün Kreis
    $("#node_5").css("background-color", "#8BCDAB");
    $("#status_text").html(reberarray);
    $("#head_array").html(reberarray);
    $(".status").css("background-color", "#A59C9C", "filter", "opacity(0.7)");
    head_position();  
    switch(reberarray[index]){
      case "P": 
        $("#line14").css("background-color", "#8BCDAB");
        $("#edge13").css("color", "#8BCDAB");
        reberarray[index]="_";
        if(!stepstate){
          setTimeout(state3,time);
        }else{
          currentstep=3;
        };
      break;
      case "V": 
        $("#line15").css("background-color", "#8BCDAB");
        $("#edge15").css("color", "#8BCDAB");
        reberarray[index]="_";
        if(!stepstate){
          setTimeout(state6,time);
        }else{
          currentstep=6;
        };
      break;
      default:
        isreber=false;
        checkfault();
        break;
    }   
  };

  function state6(){
    state=6;  
    index+=1; 
    //Originalfarben Tabelle + Status Text + Kreis
    $(".edge").css("color", "#443B3B");
    $("tr").css("background-color", "#A59C9C");
    $(".node").css("background-color", "#443B3B");
    //Grün Kreis
    $("#node_6").css("background-color", "#8BCDAB");
    $("#status_text").html(reberarray);
    $("#head_array").html(reberarray);
    $(".status").css("background-color", "#A59C9C", "filter", "opacity(0.7)");
    head_position();
    switch(reberarray[index]){  
      case "E":
        $("#line19").css("background-color", "#8BCDAB");
        $("#edge16").css("color", "#8BCDAB");
        reberarray[index]="_";
        if(!stepstate){
          setTimeout(q4,time);
        }else{
          currentstep=14;
        };
    break;
    default:
        isreber=false;
        checkfault();
    break;
      }
  };


  function q4 (){
    state=14;  
    index+=1; 
    //Originalfarben Tabelle + Status Text + Kreis
    $(".edge").css("color", "#443B3B");
    $("tr").css("background-color", "#A59C9C");
    $(".node").css("background-color", "#443B3B");
    //Grün Kreis
    $("#node_q4").css("background-color", "#8BCDAB");
    $("#status_text").html(reberarray);
    $("#head_array").html(reberarray);
    $(".status").css("background-color", "#A59C9C", "filter", "opacity(0.7)");
    head_position();  
    switch(reberarray[index]){
      case "P":
      $("#line17").css("background-color", "#8BCDAB");
      $("#edge17").css("color", "#8BCDAB");
      reeberarray[index]="_";
      if(!stepstate){
        setTimeout(q5,time);
      }else{
        currentstep=15;
      }
      break;
      case "T": 
      $("#line18").css("background-color", "#8BCDAB");
      $("#edge18").css("color", "#8BCDAB");
      reeberarray[index]="_";
      if(!stepstate){
        setTimeout(q6,time);
      }else{
        currentstep=16;
      }
      break;
      default:
        isreeber=false;
        checkfault();
      break;
    }
    };


    function q5 (){
        state=15;  
        index+=1; 
        //Originalfarben Tabelle + Status Text + Kreis
        $(".edge").css("color", "#443B3B");
        $("tr").css("background-color", "#A59C9C");
        $(".node").css("background-color", "#443B3B");
        //Grün Kreis
        $("#node_q5").css("background-color", "#8BCDAB");
        $("#status_text").html(reberarray);
        $("#head_array").html(reberarray);
        $(".status").css("background-color", "#A59C9C", "filter", "opacity(0.7)");
        head_position();  
        switch(reberarray[index]){
          case "E": 
          $("#line19").css("background-color", "#8BCDAB");
          $("#edge19").css("color", "#8BCDAB");
          reberarray[index]="_";
          if(!stepstate){
            setTimeout(q7L,time);
          }else{
            currentstep=17;
          }
          break;
          default:
            isreber=false;
            checkfault();
          break;
        }
      };

      function q6(){
        state=16;
        index+=1;
        //Originalfarben Tabelle + Status Text + Kreis
        $(".edge").css("color", "#443B3B");
        $("tr").css("background-color", "#A59C9C");
        $(".node").css("background-color", "#443B3B");
        //Grün Kreis
        $("#node_q6").css("background-color", "#8BCDAB");
        $("#status_text").html(reberarray);
        $("#head_array").html(reberarray);
        $(".status").css("background-color", "#A59C9C", "filter", "opacity(0.7)");
        head_position();  
        switch(reberarray[index]){
          case "E": 
          $("#line20").css("background-color", "#8BCDAB");
          $("#edge20").css("color", "#8BCDAB");
          reberarray[index]="_";
          if(!stepstate){
            setTimeout(q8L,time);
          }else{
            currentstep=18;
          }
          break;
          default:
            isreber=false;
            checkfault();
          break;
        }
      };

      function q7L(){
        index=1;
        state=17
        
        //Originalfarben Tabelle + Status Text + Kreis
        $(".edge").css("color", "#443B3B");
        $("tr").css("background-color", "#A59C9C");
        $(".node").css("background-color", "#443B3B");
        
        $("#status_text").html(reberarray);
        $("#head_array").html(reberarray);
        head_position();
        $("#edge21").css("color", "#8BCDAB");
        $("#node_q7").css("background-color", "#8BCDAB");
        $("#line21").css("background-color", "#8BCDAB");
  
        $('#head_text').html("q7");
    
            if(!stepstate){
              setTimeout(q7,time);
            }else{
              currentstep=19;
            } 
      };


      function q7(){
        state=19;
        index=1;
        //Originalfarben Tabelle + Status Text + Kreis
        $(".edge").css("color", "#443B3B");
        $("tr").css("background-color", "#A59C9C");
        $(".node").css("background-color", "#443B3B");
        
        $("#node_q7").css("background-color", "#8BCDAB");
        $("#status_text").html(reberarray);
        $("#head_array").html(reberarray);
        $(".status").css("background-color", "#A59C9C", "filter", "opacity(0.7)");
        $('.zustand_container').animate({'left': 20},0,'linear');
        
        $('#head_text').html("q7");
        switch(reberarray[index]){
          case "P":
          $("#line22").css("background-color", "#8BCDAB");
          $("#edge23").css("color", "#8BCDAB");
            if(!stepstate){
              setTimeout(q9,time);
            }else{
              currentstep=21;
            } 
          break;
          default:
            isreber=false;
            checkfault();
          break;   
        }   
      };

    function q8L(){
        index=1;
        state=18;

        $("#status_text").html(reberarray);
        $("#head_array").html(reberarray);
        //Originalfarben Tabelle + Status Text + Kreis
        $("tr").css("background-color", "#A59C9C");
        $(".node").css("background-color", "#443B3B");
        head_position(); 
        $('#head_text').html("q8");

        $("#edge22").css("color", "#8BCDAB");
        $("#line23").css("background-color", "#8BCDAB");
        $("#node_q8").css("background-color", "#8BCDAB");
  
            if(!stepstate){
              setTimeout(q8,time);
            }else{
              currentstep=20;
            } 
      };


    function q8(){
      
        state=20;
        index=1;
        //Originalfarben Tabelle + Status Text + Kreis
        $(".edge").css("color", "#443B3B");
        $("tr").css("background-color", "#A59C9C");
        $(".node").css("background-color", "#443B3B");
        
        $("#node_q8").css("background-color", "#8BCDAB");
        $("#status_text").html(reberarray);
        $("#head_array").html(reberarray);
        $(".status").css("background-color", "rgb(190, 229, 255)");
        $("#head_text").html("q8");
        $('.zustand_container').animate({'left': 20},0,'linear');
        switch(reberarray[index]){
          case "T":
            $("#edge24").css("color", "#8BCDAB");
            $("#line24").css("background-color", "#8BCDAB");
            
            if(!stepstate){
              setTimeout(q9,time);
            }else{
              currentstep=21;
            } 
          break;
          default:
            isreber=false;
            checkfault();
          break;   
        }   
      };


      function q9(){
        state=21;

         //Originalfarben Tabelle + Status Text + Kreis
         $(".edge").css("color", "#443B3B");
         $("tr").css("background-color", "#A59C9C");
         $(".node").css("background-color", "#443B3B");
         $("#head_text").html("q9");
         head_position();
         finished();
      }



    function checkfault(){
      
        let x;
        $(".status").css("background-color", "#F58A8A", "filter", "opacity(0.7)");
        if (state==1){
          $("#node_1").css("background-color", "#F58A8A");
          x="1";
        }else if(state==2){
          $("#node_2").css("background-color", "#F58A8A");
          x="2";
        }else if(state==3){
          $("#node_3").css("background-color", "#F58A8A");
          x="3";
        }else if(state==4){
          $("#node_4").css("background-color", "#F58A8A");
          x="4";
        }else if(state==5){
          $("#node_5").css("background-color", "#F58A8A");
          x="5";
        }else if(state==6){
          $("#node_6").css("background-color", "#F58A8A");
          x="6";
        }else if(state==0){
          $("#node_q0").css("background-color", "#F58A8A");
          x="Start";
        
        }else if(state==11){
          $("#node_q1").css("background-color", "#F58A8A");
          x="q1";
        }else if(state==12){
          $("#node_q2").css("background-color", "#F58A8A");
          x="q2";
        }else if(state==13){
          $("#node_q3").css("background-color", "#F58A8A");
          x="q3";
        }
        else if(state==14){
          $("#node_q4").css("background-color", "#F58A8A");
          x="q4";
        }else if(state==15){
          $("#node_q5").css("background-color", "#F58A8A");
          x="q5";
        }else if(state==16){
          $("#node_q6").css("background-color", "#F58A8A");
          x="q6";
        }else if(state==17){
          $("#node_q7").css("background-color", "#F58A8A");
          x="q7";
        }else if(state==18){
          $("#node_q8").css("background-color", "#F58A8A");
          x="q8";
        }else if(state==19){
          $("#node_q7").css("background-color", "#F58A8A");
          x="q7";
        }else if(state==20){
          $("#node_q8").css("background-color", "#F58A8A");
          x="q8";
        }else if(state==21){
          $("#node_q9").css("background-color", "#F58A8A");
          x="q9";
        }

        $("#status_text").html( "Falscher Audruck (Qreject) bei : "+x+" Zeichen: " +reeberarray[index]);
        array_word4=["S", "X"];
        array_word5=["V","P"];
        enablebuttons();
        stepstate=true;
        currentstep=0;
        state=0;
        $(".zustand_container").css("background-color", "#F58A8A");
  
        if(input===""||input===" "){
          $("#status_text").html("Das Eingabefeld darf nicht leer sein.");
          $(".status").css("background-color", "#F58A8A", "filter", "opacity(0.7)");
        }
  
        if (isreset){
          $("#status_text").html("Simulation abgebrochen: bitte 'reset' drücken");
        }
      };
  
  
      function finished(){
        $("#status_text").html("Simulation erfolgreich abgeschlosen <br>"+reberarray.join(""));
        $(".status").css("background-color", "#8BCDAB");
        currentstep=0;
        state=0;
        stepstate=false;
        enablebuttons();
        $("#line24").css("background-color", "#8BCDAB");
        $("#node_q9").css("background-color", "#8BCDAB");
        $(".zustand_container").css("background-color", "#8BCDAB");
        $('#head_text').html("q9");
        
      };

    
    
    /*----------------------------------------------------Richtige/falsche Ausdrücke generieren---------------------------------------------*/

 
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      };
    
      function richtig_q1(){
        array_word=["B"];
        $(".edge").css("color", "#443B3B");
        $("tr").css("background-color", "#A59C9C");
        $(".node").css("background-color", "#443B3B");
        let random_number2=getRandomInt(2);
        zweitesZeichen=array_word1[random_number2];
        array_word.push(zweitesZeichen);
        array_word.push("B");
        let random_number = getRandomInt(2);
        let x=array_word1[random_number];
        array_word.push(x);
        switch(x){
          case "P":
            richtig_q2();
          break;
          case "T":
            richtig_q4();
          break;
        };
      };
  
        
  
        function richtig_q2(){
          random_number= getRandomInt(2);
          let x=ar2[random_number];
          array_word.push(x);
          switch(x){
            case "S":
               richtig_q2();
            break;
            case "X":
               richtig_q3();
            break;
          };
        };
  
  
        function richtig_q4(){
          let rannumber= getRandomInt(2);
          let x=ar3[rannumber];
          array_word.push(x);
          switch(x){
            case "T":
               richtig_q3();
            break;
            case "V":
               richtig_q5();
            break;
          };
        };
  
  
        function q3(){
          random_number= getRandomInt(2);
          let x=array_word4[random_number];
          array_word.push(x);
          switch(x){
            case "S":
               richtig_q6();
            break;
            case "X":
               richtig_q4();
            break;
          default:
               richtig_q5();
          };
        };
  
        function richtig_q5(){
          random_number= getRandomInt(2);
          let x=array_word5[random_number];
          array_word.push(x);
          switch(x){
            case "V":
                richtig_q6();
            break;
            case "P":
                richtig_q3();
            break;
            default:
                richtig_q6();
          };
        };
  
        function richtig_q6(){
          array_word.push("E");
          array_word.push(zweitesZeichen);
          array_word.push("E");
          index2=0;
          $("#input").val(array_word.join(""));
          $(".status").css("background-color", "rgb(190, 229, 255)");
          $("#status_text").html("Das Reberwort ist richtig und wird durch Turing Machine akzeptiert! <br/> Click <i>play</i> oder <i>step</i>");
          currentstep=0;
          stepstate=false;
          let startinput= document.getElementById("input").value;
          input=startinput;
          reberarray=Array.from(startinput);
          $("#head_array").html(reberarray);
          $(".zustand_container").css("background-color", "yellow");
          $('#head_text').html("*");
          $('.zustand_container').animate({'left': 0},0,'linear');
        };
  
  
      function ausdruck_falsch(){
        let x= getRandomInt(2);
        if(x==1){
         $(".edge").css("color", "#443B3B");
         $("tr").css("background-color", "#A59C9C");
         $(".node").css("background-color", "#443B3B");
          array_word4=["P","V"];
          array_word5=["S","X"];
          richtig_q1();
          currentstep=0;
          stepstate=false;
        }else{
         $(".edge").css("color", "#443B3B");
         $("tr").css("background-color", "#A59C9C");
         $(".node").css("background-color", "#443B3B");
          array_word5=["P","V"];
          array_word4=["S","X"];
          richtig_q1();
          currentstep=0;
          stepstate=false;
          if (array_word[1]==="T"){
            array_word[array_word.length-2]="P";
          }else if(array_word[1]=="P"){
            array_word[array_word.length-2]="T";
          }
        }
        $("#input").val(array_word.join(""));
        $("#head_array").html(reberarray);
        $(".zustand_container").css("background-color", "yellow");
        
      };
  
  
      function reset(){
        $("#status_text").text("Geben sie ein Wort in das Eingabefeld ein!");
        $("#input").focus();
        $(".status").css("background-color", "#A59C9C", "filter", "opacity(0.7)");
        $("#input").val("");
        $(".node").css("background-color", "#443B3B");
        $("tr").css("background-color", "#A59C9C");
        $(".n").css("background-color", "rgb(79, 202, 54)");
        $(".edge").css("color", "#443B3B");
        $('#head_text').html("*");
        $('.zustand_container').animate({'left': 0},10,'linear');
        
        
        stepstate=false;
        state=0;
        currentstep=0;
        reeberarray=[];
        $("#head_array").html(reeberarray);
        $(".zustand_container").css("background-color", "#A59C9C", "filter", "opacity(0.7)");
        isreset=true;
        enablebuttons();
  
      }
  
      
  
          

      
  


    

  function head_position(){
    var position1 = $('#zustand').position();
    $('.zustand_container').animate({'top':position1.top+0, 'left': position1.left+10},50,'linear');
    
    

    if (state==0){
        $('#head_text').html('*');
    }else if (state==11){
        $('#head_text').html('q1');
    }else if (state==12){
        $('#head_text').html('q2');
    }else if (state==13){
        $('#head_text').html('q3');
    }else if (state==1){
        $('#head_text').html('1');
    }else if (state==2){
        $('#head_text').html('2');
    }else if (state==3){
        $('#head_text').html('3');
    }else if (state==4){
        $('#head_text').html('4');
    }else if (state==5){
        $('#head_text').html('5');
    }else if (state==6){
        $('#head_text').html('6');
    }else if (state==14){
        $('#head_text').html('q4');
    }else if (state==15){
        $('#head_text').html('q5');
    }else if (state==16){
        $('#head_text').html('q6');
    }else if (state==17){
        $('#head_text').html('q7');
    }else if (state==18){
        $('#head_text').html('q8');
    }else if (state==19){
        $('#head_text').html('q7');
    }else if (state==20){
        $('#head_text').html('q8');
    }else if (state==21){
        $('#head_text').html('q9');
};
};

});

