$(function() {
  $("#calc").click(function(){
    var h = Number($("#height").val());
    var w = Number($("#weight").val());
    $("#price").val( w / ( (h / 100) * (h / 100) ) );
    var a = $("#price").val();
      if (a < 16) {
        $("#image1").fadeIn(1000);
      }else if (a >= 16 && a < 17) {
        $("#image2").fadeIn(1000);
      }else if (a >= 17 && a ){
        
      }
}); 
    
  $("#reload").on('click', function(){
    $("#height").val("");
    $("#weight").val("");
    $("#price").val("");
    $("#image1").hide();
    $("#image2").hide();
    $("#image3").hide();
  });

  
});