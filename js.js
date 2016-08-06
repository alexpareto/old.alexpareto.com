$(function() {
  console.log( 'ready!' );


  $("#lights").click(function() {
    $("body").css("background-color", "black");
    $(".section").css("background-color", "black");
    $("#toChange").css("color", "white");
    $("#toChange").text("You might just see something important");
  });
});
