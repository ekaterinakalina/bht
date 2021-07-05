
$(function (){

    //Alle rules_ divs verstecken
    $("#rules_hands").hide()
    $("#rules_mask").hide()
    $("#rules_distance").hide()
    $("#rules_attention").hide()
    $("#rules_stay").hide()
  
  
    //Popover Funktion für HTML-Elemnte
    $('[data-toggle="popover"]').popover({
        placement: "top",
        trigger: "hover"
    });
  
    
    //Click auf die Infokreise und sehe die Regel
    $("#wash_hands").click(function() {
        $("#rules_hands").fadeIn(3000);
    });
    $("#mask").click(function() {
        $("#rules_mask").fadeIn(3000);
    });
    $("#distance").click(function() {
        $("#rules_distance").fadeIn(3000);
    });
    $("#help").click(function() {
        $("#rules_attention").fadeIn(3000);
    });
    $("#stay_home").click(function() {
        $("#rules_stay").fadeIn(3000);
    });
    
  
    //Doubleclick auf die Infokreise und verstecke die Regel
    $("#wash_hands").dblclick(function() {
        $("#rules_hands").fadeOut(3000);
    });
    $("#mask").dblclick(function() {
        $("#rules_mask").fadeOut(3000);
    });
    $("#distance").dblclick(function() {
        $("#rules_distance").fadeOut(3000);
    });
    $("#help").dblclick(function() {
        $("#rules_attention").fadeOut(3000);
    });
    $("#stay_home").dblclick(function() {
        $("#rules_stay").fadeOut(3000);
    });
    
  
    //Infokreise werden und bleiben grün vbei mouseenter
    $("#wash_hands").on({
        mouseenter: function(){
            $(this).css("background", "#8BCDAB");
        }
    })
    $("#mask").on({
        mouseenter: function(){
            $(this).css("background", "#8BCDAB");
        }
    })
    $("#distance").on({
        mouseenter: function(){
            $(this).css("background", "#8BCDAB");
        }
    })
    $("#help").on({
        mouseenter: function(){
            $(this).css("background", "#8BCDAB");
        }
    })
    $("#stay_home").on({
        mouseenter: function(){
            $(this).css("background", "#8BCDAB");
        }
    })


    $('.carousel').carousel()

  });
  
       