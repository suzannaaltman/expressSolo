$(function(){

$("main").hide();
$("main").slideDown();

  $("button").on("click", function(){
    $("#bal").empty();
    $.ajax({
      url: "/balance",
      type: "GET"
    }).done(function(response){
      $("#bal").append(response)
      $("#bal").hide();
      $("#bal").fadeToggle();
    }).fail(function(response){
      console.log("failed")
    });

  });

});
