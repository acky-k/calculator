$(function(){
  $("#calc").click(function(){
    var h = Number($("#height").val());
    var w = Number($("#weight").val());
    $("#price").val(Math.floor(w / ( (h / 100) * (h / 100) ) * 100) / 100)
    var a = $("#price").val();
      if(a == ""){
      }else if (a < 18.4) {
        $("#image1").fadeIn(1000);
      }else if (a >= 18.5 && a < 24.99) {
        $("#image2").fadeIn(1000);
      }else if (a >= 25 && a < 29.99){
        $("#image3").fadeIn(1000);
      }else if (a >= 30 && a < 100){
        $("#image4").fadeIn(1000);
      }
});

　$("#height").change(function(){
    $("#image1").hide();
    $("#image2").hide();
    $("#image3").hide();
    $("#image4").hide();
});

$("#weight").change(function(){
  $("#image1").hide();
  $("#image2").hide();
  $("#image3").hide();
  $("#image4").hide();
});
  　

  $("#reload").on('click', function(){
    $("#height").val("");
    $("#weight").val("");
    $("#price").val("");
    $("#image1").hide();
    $("#image2").hide();
    $("#image3").hide();
    $("#image4").hide();
  });
});