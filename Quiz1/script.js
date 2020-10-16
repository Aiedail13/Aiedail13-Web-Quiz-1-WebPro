$(document).ready(function(){
    $("#btn1").click(function(){
      $("#div1").fadeToggle();
      $("#div2").hide();
      $("#div3").hide();
    });

    $("#btn2").click(function(){
        $("#div2").fadeToggle();
        $("#div1").hide();
        $("#div3").hide();
      });

    $("#btn3").click(function(){
        $("#div3").fadeToggle();
        $("#div2").hide();
        $("#div1").hide();
      });
  });