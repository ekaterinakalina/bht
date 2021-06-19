
     let state = 0;
     let way = 0;
     let max = 8;
     const expression_array=['S','A','AOA','(A)','Z']; 
     const operator_array= ['+','-','*','/'];
     const numbers_array= ['1','2','3','4','5','6','7','8','9','0'];
     const bracket_array = ['(',')'];
     const all_array = ['+','-','*','/','1','2','3','4','5','6','7','8','9','0','(',')',' '];
     var word_array;
     var word = "";
     var time = 500;
     var stack_array= [];
     let fk2 = false;
     let isFinished = false;
     var end_sequence = true; 
     var sequence;
     var isSequence = false; 

     //Button events

     $("#speedtext").text(time+"ms")


     Array.prototype.insert = function (index, item) {
       this.splice(index, 0, item);
     };

     String.prototype.replaceAt = function(index,replacement) {
         return this.substr(0,index) + replacement + this.substr(0,index)+replacement + this.substr (index + replacement.length);
     }

     //Controll Funktionen

     function getRandomInt (min,max) {
        return min + Math.round(Math.random()*max);
     }


    function ShowWord() {
     $("#eingabefeld").val(Word);  /// Hier wird das Array gleich im Output angezeigt, muss nicht zwingend sein
    }
  
    function ShowArray(){
     $("#array").html(WordArray);
    }

     //Kellerautomat Funktionen
    function generateCorrect(){

    }
  